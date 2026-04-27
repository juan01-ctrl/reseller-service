import {
  IntegrationStatus,
  IntegrationType,
  MetaIntegration,
  Prisma,
} from "@prisma/client"
import { randomBytes } from "crypto"
import { db } from "@/lib/db"
import { getMetaEnv } from "@/lib/env"
import { decryptSecret, encryptSecret } from "@/lib/integrations/crypto"
import { metaFetch, MetaApiError } from "@/lib/meta/client"
import { getScopesForType } from "@/lib/meta/constants"

type OAuthTokenResponse = {
  access_token: string
  token_type?: string
  expires_in?: number
}

type MetaPermissionsResponse = {
  data?: Array<{
    permission?: string
    status?: string
  }>
}

type MetaMeResponse = {
  id?: string
}

type MetaBusinessesResponse = {
  data?: Array<{ id: string; name?: string }>
}

type MetaWhatsAppAccountsResponse = {
  data?: Array<{
    id: string
    name?: string
    phone_numbers?: Array<{
      id?: string
      display_phone_number?: string
      verified_name?: string
      quality_rating?: string
    }>
  }>
}

type MetaPagesResponse = {
  data?: Array<{
    id: string
    name?: string
    instagram_business_account?: {
      id?: string
      username?: string
      profile_picture_url?: string
    }
  }>
}

function missingScopes(required: string[], granted: string[]) {
  const set = new Set(granted)
  return required.filter((scope) => !set.has(scope))
}

function normalizeStatus(required: string[], granted: string[]): IntegrationStatus {
  if (granted.length === 0) return "needs_reconnect"
  return missingScopes(required, granted).length > 0 ? "missing_permissions" : "connected"
}

function getTokenExpiry(expiresInSeconds?: number) {
  if (!expiresInSeconds) return null
  return new Date(Date.now() + expiresInSeconds * 1000)
}

async function exchangeCodeForToken(code: string) {
  const { META_APP_ID, META_APP_SECRET, META_REDIRECT_URI, META_GRAPH_VERSION } = getMetaEnv()
  const tokenUrl = new URL(`https://graph.facebook.com/${META_GRAPH_VERSION}/oauth/access_token`)
  tokenUrl.searchParams.set("client_id", META_APP_ID)
  tokenUrl.searchParams.set("client_secret", META_APP_SECRET)
  tokenUrl.searchParams.set("redirect_uri", META_REDIRECT_URI)
  tokenUrl.searchParams.set("code", code)

  const tokenResponse = await fetch(tokenUrl.toString(), { method: "GET", cache: "no-store" })
  if (!tokenResponse.ok) {
    throw new Error(`Meta token exchange failed (${tokenResponse.status})`)
  }
  const shortLivedToken = (await tokenResponse.json()) as OAuthTokenResponse

  if (!shortLivedToken.access_token) {
    throw new Error("Meta token exchange returned no access token")
  }

  const longLivedUrl = new URL(`https://graph.facebook.com/${META_GRAPH_VERSION}/oauth/access_token`)
  longLivedUrl.searchParams.set("grant_type", "fb_exchange_token")
  longLivedUrl.searchParams.set("client_id", META_APP_ID)
  longLivedUrl.searchParams.set("client_secret", META_APP_SECRET)
  longLivedUrl.searchParams.set("fb_exchange_token", shortLivedToken.access_token)

  const longLivedResponse = await fetch(longLivedUrl.toString(), { method: "GET", cache: "no-store" })
  if (!longLivedResponse.ok) {
    return shortLivedToken
  }

  const longLivedToken = (await longLivedResponse.json()) as OAuthTokenResponse
  return longLivedToken.access_token ? longLivedToken : shortLivedToken
}

export async function createOAuthState(userId: string, integrationType: IntegrationType) {
  const state = randomBytes(32).toString("base64url")

  await db.oAuthState.create({
    data: {
      userId,
      integrationType,
      state,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    },
  })

  return state
}

export async function consumeOAuthState(state: string) {
  const record = await db.oAuthState.findUnique({ where: { state } })
  if (!record) return null
  if (record.consumedAt) return null
  if (record.expiresAt <= new Date()) return null

  await db.oAuthState.update({
    where: { id: record.id },
    data: { consumedAt: new Date() },
  })

  return record
}

export function buildMetaOAuthUrl(state: string, integrationType: IntegrationType) {
  const { META_APP_ID, META_REDIRECT_URI, META_GRAPH_VERSION } = getMetaEnv()
  const url = new URL(`https://www.facebook.com/${META_GRAPH_VERSION}/dialog/oauth`)
  url.searchParams.set("client_id", META_APP_ID)
  url.searchParams.set("redirect_uri", META_REDIRECT_URI)
  url.searchParams.set("state", state)
  url.searchParams.set("response_type", "code")
  url.searchParams.set("scope", getScopesForType(integrationType).join(","))
  return url.toString()
}

async function fetchGrantedScopes(accessToken: string) {
  const permissions = await metaFetch<MetaPermissionsResponse>("/me/permissions?limit=200", accessToken)
  return (permissions.data ?? [])
    .filter((permission) => permission.status === "granted" && permission.permission)
    .map((permission) => permission.permission as string)
}

export async function upsertIntegrationFromOAuth(params: {
  userId: string
  integrationType: IntegrationType
  code: string
}) {
  const tokenData = await exchangeCodeForToken(params.code)
  const accessToken = tokenData.access_token
  const metaMe = await metaFetch<MetaMeResponse>("/me?fields=id", accessToken)
  const grantedScopes = await fetchGrantedScopes(accessToken)
  const requiredScopes = getScopesForType(params.integrationType)
  const status = normalizeStatus(requiredScopes, grantedScopes)

  const integration = await db.metaIntegration.upsert({
    where: {
      userId_integrationType: {
        userId: params.userId,
        integrationType: params.integrationType,
      },
    },
    update: {
      provider: "meta",
      accessTokenEncrypted: encryptSecret(accessToken),
      tokenExpiresAt: getTokenExpiry(tokenData.expires_in),
      grantedScopes,
      metaUserId: metaMe.id ?? null,
      status,
    },
    create: {
      userId: params.userId,
      provider: "meta",
      integrationType: params.integrationType,
      accessTokenEncrypted: encryptSecret(accessToken),
      tokenExpiresAt: getTokenExpiry(tokenData.expires_in),
      grantedScopes,
      metaUserId: metaMe.id ?? null,
      status,
    },
  })

  await logIntegrationEvent(params.userId, "oauth_connected", `OAuth connection updated for ${params.integrationType}.`, {
    integrationType: params.integrationType,
    status,
    grantedScopes,
  })

  return integration
}

async function getDecryptedToken(integration: MetaIntegration) {
  if (!integration.accessTokenEncrypted) {
    throw new Error("Missing encrypted access token")
  }
  return decryptSecret(integration.accessTokenEncrypted)
}

export async function syncWhatsAppIntegration(userId: string) {
  const integration = await db.metaIntegration.findUnique({
    where: {
      userId_integrationType: {
        userId,
        integrationType: "whatsapp",
      },
    },
  })

  if (!integration) {
    throw new Error("WhatsApp integration is not connected")
  }

  const accessToken = await getDecryptedToken(integration)
  try {
    const businesses = await metaFetch<MetaBusinessesResponse>("/me/businesses?fields=id,name&limit=100", accessToken)
    const records: Prisma.WhatsAppConnectionCreateManyInput[] = []

    for (const business of businesses.data ?? []) {
      const waba = await metaFetch<MetaWhatsAppAccountsResponse>(
        `/${business.id}/owned_whatsapp_business_accounts?fields=id,name,phone_numbers{id,display_phone_number,verified_name,quality_rating}&limit=100`,
        accessToken
      )

      for (const account of waba.data ?? []) {
        const phones = account.phone_numbers && account.phone_numbers.length > 0 ? account.phone_numbers : [{}]
        for (const phone of phones) {
          records.push({
            userId,
            metaIntegrationId: integration.id,
            businessId: business.id,
            wabaId: account.id,
            phoneNumberId: phone.id ?? "",
            displayPhoneNumber: phone.display_phone_number ?? null,
            verifiedName: phone.verified_name ?? account.name ?? null,
            qualityRating: phone.quality_rating ?? null,
            status: "connected",
            webhookSubscribed: false,
            lastSyncAt: new Date(),
          })
        }
      }
    }

    await db.whatsAppConnection.deleteMany({ where: { userId, metaIntegrationId: integration.id } })
    if (records.length > 0) {
      await db.whatsAppConnection.createMany({ data: records })
    }

    const status: IntegrationStatus = records.length > 0 ? "connected" : "needs_reconnect"
    const primaryBusinessId = records[0]?.businessId ?? null

    await db.metaIntegration.update({
      where: { id: integration.id },
      data: {
        businessId: primaryBusinessId,
        status,
      },
    })

    await logIntegrationEvent(userId, "whatsapp_sync", "WhatsApp assets synced successfully.", {
      records: records.length,
      integrationId: integration.id,
    })

    return { status, count: records.length }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown WhatsApp sync error"
    await db.metaIntegration.update({
      where: { id: integration.id },
      data: {
        status: error instanceof MetaApiError ? "missing_permissions" : "needs_reconnect",
      },
    })
    await logIntegrationEvent(userId, "whatsapp_sync_failed", "WhatsApp sync failed.", { reason: message })
    throw error
  }
}

export async function syncInstagramIntegration(userId: string) {
  const integration = await db.metaIntegration.findUnique({
    where: {
      userId_integrationType: {
        userId,
        integrationType: "instagram",
      },
    },
  })

  if (!integration) {
    throw new Error("Instagram integration is not connected")
  }

  const accessToken = await getDecryptedToken(integration)
  try {
    const pages = await metaFetch<MetaPagesResponse>(
      "/me/accounts?fields=id,name,instagram_business_account{id,username,profile_picture_url}&limit=100",
      accessToken
    )

    const records: Prisma.InstagramConnectionCreateManyInput[] = []

    for (const page of pages.data ?? []) {
      const ig = page.instagram_business_account
      if (!ig?.id) continue
      records.push({
        userId,
        metaIntegrationId: integration.id,
        pageId: page.id,
        pageName: page.name ?? null,
        instagramBusinessAccountId: ig.id,
        username: ig.username ?? null,
        profilePictureUrl: ig.profile_picture_url ?? null,
        status: "connected",
        webhookSubscribed: false,
        lastSyncAt: new Date(),
      })
    }

    await db.instagramConnection.deleteMany({ where: { userId, metaIntegrationId: integration.id } })
    if (records.length > 0) {
      await db.instagramConnection.createMany({ data: records })
    }

    const status: IntegrationStatus = records.length > 0 ? "connected" : "needs_reconnect"
    await db.metaIntegration.update({
      where: { id: integration.id },
      data: {
        status,
      },
    })

    await logIntegrationEvent(userId, "instagram_sync", "Instagram assets synced successfully.", {
      records: records.length,
      integrationId: integration.id,
    })

    return { status, count: records.length }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Instagram sync error"
    await db.metaIntegration.update({
      where: { id: integration.id },
      data: {
        status: error instanceof MetaApiError ? "missing_permissions" : "needs_reconnect",
      },
    })
    await logIntegrationEvent(userId, "instagram_sync_failed", "Instagram sync failed.", { reason: message })
    throw error
  }
}

export async function disconnectIntegration(userId: string, integrationType: IntegrationType) {
  const integration = await db.metaIntegration.findUnique({
    where: {
      userId_integrationType: {
        userId,
        integrationType,
      },
    },
  })
  if (!integration) return

  await db.metaIntegration.update({
    where: { id: integration.id },
    data: {
      accessTokenEncrypted: null,
      refreshTokenEncrypted: null,
      tokenExpiresAt: null,
      grantedScopes: [],
      status: "disconnected",
      businessId: null,
    },
  })

  if (integrationType === "whatsapp") {
    await db.whatsAppConnection.deleteMany({ where: { userId, metaIntegrationId: integration.id } })
  } else {
    await db.instagramConnection.deleteMany({ where: { userId, metaIntegrationId: integration.id } })
  }

  await logIntegrationEvent(userId, "integration_disconnected", `${integrationType} integration disconnected.`, {
    integrationType,
  })
}

export async function logIntegrationEvent(
  userId: string | null,
  type: string,
  message: string,
  metadataJson?: Prisma.InputJsonValue | null
) {
  await db.integrationEvent.create({
    data: {
      userId,
      provider: "meta",
      type,
      message,
      ...(metadataJson !== undefined ? { metadataJson: metadataJson === null ? Prisma.JsonNull : metadataJson } : {}),
    },
  })
}

export async function findUserByMetaIdentifiers(payload: {
  pageId?: string
  instagramBusinessAccountId?: string
  wabaId?: string
  phoneNumberId?: string
}) {
  const { pageId, instagramBusinessAccountId, wabaId, phoneNumberId } = payload

  if (phoneNumberId) {
    const whatsapp = await db.whatsAppConnection.findFirst({
      where: { phoneNumberId },
      select: { userId: true },
    })
    if (whatsapp?.userId) return whatsapp.userId
  }

  if (wabaId) {
    const whatsapp = await db.whatsAppConnection.findFirst({
      where: { wabaId },
      select: { userId: true },
    })
    if (whatsapp?.userId) return whatsapp.userId
  }

  if (instagramBusinessAccountId) {
    const instagram = await db.instagramConnection.findFirst({
      where: { instagramBusinessAccountId },
      select: { userId: true },
    })
    if (instagram?.userId) return instagram.userId
  }

  if (pageId) {
    const instagram = await db.instagramConnection.findFirst({
      where: { pageId },
      select: { userId: true },
    })
    if (instagram?.userId) return instagram.userId
  }

  return null
}
