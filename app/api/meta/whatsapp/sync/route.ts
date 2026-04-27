import { NextRequest, NextResponse } from "next/server"
import { requireApiSession } from "@/lib/auth/api"
import { syncWhatsAppIntegration } from "@/lib/meta/service"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  const { session, unauthorized } = await requireApiSession()
  if (!session) return unauthorized

  try {
    const result = await syncWhatsAppIntegration(session.userId)
    const accept = request.headers.get("accept") || ""
    if (accept.includes("application/json")) {
      return NextResponse.json({ ok: true, ...result })
    }
    return NextResponse.redirect(new URL("/dashboard/integrations?status=whatsapp_synced", request.url))
  } catch (error) {
    const message = error instanceof Error ? error.message : "Sync failed"
    const accept = request.headers.get("accept") || ""
    if (accept.includes("application/json")) {
      return NextResponse.json({ error: message }, { status: 400 })
    }
    return NextResponse.redirect(new URL("/dashboard/integrations?status=whatsapp_sync_failed", request.url))
  }
}
