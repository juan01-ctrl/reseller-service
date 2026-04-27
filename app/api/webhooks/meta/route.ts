import { NextRequest, NextResponse } from "next/server"
import { Prisma } from "@prisma/client"
import { getMetaEnv } from "@/lib/env"
import { findUserByMetaIdentifiers, logIntegrationEvent } from "@/lib/meta/service"

export const runtime = "nodejs"

function pickIdentifiers(payload: Record<string, unknown>) {
  const candidates: Array<{
    pageId?: string
    instagramBusinessAccountId?: string
    wabaId?: string
    phoneNumberId?: string
  }> = []

  const entry = Array.isArray(payload.entry) ? payload.entry : []
  for (const item of entry) {
    if (!item || typeof item !== "object") continue
    const current = item as Record<string, unknown>
    const changes = Array.isArray(current.changes) ? current.changes : []

    candidates.push({
      pageId: typeof current.id === "string" ? current.id : undefined,
    })

    for (const change of changes) {
      if (!change || typeof change !== "object") continue
      const changeObj = change as Record<string, unknown>
      const value = changeObj.value && typeof changeObj.value === "object" ? (changeObj.value as Record<string, unknown>) : null
      if (!value) continue

      candidates.push({
        pageId: typeof value.page_id === "string" ? value.page_id : undefined,
        instagramBusinessAccountId: typeof value.instagram_business_account_id === "string" ? value.instagram_business_account_id : undefined,
        wabaId: typeof value.waba_id === "string" ? value.waba_id : undefined,
        phoneNumberId: typeof value.phone_number_id === "string" ? value.phone_number_id : undefined,
      })

      const metadata = value.metadata && typeof value.metadata === "object" ? (value.metadata as Record<string, unknown>) : null
      if (metadata) {
        candidates.push({
          phoneNumberId: typeof metadata.phone_number_id === "string" ? metadata.phone_number_id : undefined,
        })
      }
    }
  }

  return candidates
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const mode = url.searchParams.get("hub.mode")
  const verifyToken = url.searchParams.get("hub.verify_token")
  const challenge = url.searchParams.get("hub.challenge")
  const { META_VERIFY_TOKEN } = getMetaEnv()

  if (mode !== "subscribe" || verifyToken !== META_VERIFY_TOKEN || !challenge) {
    return new NextResponse("Forbidden", { status: 403 })
  }

  return new NextResponse(challenge, { status: 200 })
}

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown>
  try {
    payload = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: "Invalid webhook payload" }, { status: 400 })
  }

  const candidates = pickIdentifiers(payload)
  let matchedUserId: string | null = null

  for (const candidate of candidates) {
    matchedUserId = await findUserByMetaIdentifiers(candidate)
    if (matchedUserId) break
  }

  await logIntegrationEvent(
    matchedUserId,
    "meta_webhook_received",
    "Meta webhook event received.",
    payload as Prisma.JsonObject
  )

  // TODO: route incoming WhatsApp messages to the automation engine.
  // TODO: route incoming Instagram DMs to the automation engine.
  // TODO: add escalation to human handoff flows.
  // TODO: store message logs and conversation inbox records.

  return NextResponse.json({ ok: true }, { status: 200 })
}
