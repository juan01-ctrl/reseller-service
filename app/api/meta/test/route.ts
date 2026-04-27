import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { requireApiSession } from "@/lib/auth/api"
import { syncInstagramIntegration, syncWhatsAppIntegration } from "@/lib/meta/service"

export const runtime = "nodejs"

const querySchema = z.object({
  type: z.enum(["whatsapp", "instagram"]),
})

function parseType(request: NextRequest) {
  const parsed = querySchema.safeParse({
    type: new URL(request.url).searchParams.get("type"),
  })
  return parsed.success ? parsed.data.type : null
}

export async function POST(request: NextRequest) {
  const { session, unauthorized } = await requireApiSession()
  if (!session) return unauthorized

  const integrationType = parseType(request)
  if (!integrationType) {
    return NextResponse.json({ error: "Invalid integration type" }, { status: 400 })
  }

  const result =
    integrationType === "whatsapp"
      ? await syncWhatsAppIntegration(session.userId)
      : await syncInstagramIntegration(session.userId)

  return NextResponse.json({ ok: true, integrationType, ...result })
}
