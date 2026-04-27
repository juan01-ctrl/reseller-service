import { NextRequest, NextResponse } from "next/server"
import {
  clearExcludedWhatsAppConnections,
  consumeOAuthState,
  syncInstagramIntegration,
  syncWhatsAppIntegration,
  upsertIntegrationFromOAuth,
} from "@/lib/meta/service"
import { MetaApiError } from "@/lib/meta/client"

export const runtime = "nodejs"

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const code = url.searchParams.get("code")
  const state = url.searchParams.get("state")
  const authError = url.searchParams.get("error")

  const dashboardUrl = new URL("/dashboard/integrations", request.url)

  if (authError) {
    dashboardUrl.searchParams.set("status", "oauth_error")
    return NextResponse.redirect(dashboardUrl)
  }

  if (!code || !state) {
    dashboardUrl.searchParams.set("status", "invalid_callback")
    return NextResponse.redirect(dashboardUrl)
  }

  const stateRecord = await consumeOAuthState(state)
  if (!stateRecord) {
    dashboardUrl.searchParams.set("status", "invalid_state")
    return NextResponse.redirect(dashboardUrl)
  }

  try {
    const integration = await upsertIntegrationFromOAuth({
      userId: stateRecord.userId,
      integrationType: stateRecord.integrationType,
      code,
    })

    if (stateRecord.integrationType === "whatsapp") {
      await clearExcludedWhatsAppConnections(stateRecord.userId)
      await syncWhatsAppIntegration(stateRecord.userId)
    } else {
      await syncInstagramIntegration(stateRecord.userId)
    }

    dashboardUrl.searchParams.set("status", "connected")
    dashboardUrl.searchParams.set("type", integration.integrationType)
    return NextResponse.redirect(dashboardUrl)
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown"
    console.error("Meta OAuth callback failed", message)

    const missingBusinessManagement =
      (error instanceof MetaApiError && error.code === 200 && message.includes("business_management")) ||
      message.includes("Requires business_management permission") ||
      message.includes("Meta denied business assets access despite granted scope")

    dashboardUrl.searchParams.set("status", missingBusinessManagement ? "missing_permissions" : "sync_failed")
    return NextResponse.redirect(dashboardUrl)
  }
}
