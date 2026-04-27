import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { requireApiSession } from "@/lib/auth/api"
import { disconnectIntegration } from "@/lib/meta/service"

export const runtime = "nodejs"

const querySchema = z.object({
  type: z.enum(["whatsapp", "instagram"]),
})

function parseType(request: NextRequest) {
  const url = new URL(request.url)
  const parsed = querySchema.safeParse({
    type: url.searchParams.get("type"),
  })
  if (!parsed.success) return null
  return parsed.data.type
}

export async function POST(request: NextRequest) {
  const { session, unauthorized } = await requireApiSession()
  if (!session) return unauthorized

  const integrationType = parseType(request)
  if (!integrationType) {
    return NextResponse.json({ error: "Invalid integration type" }, { status: 400 })
  }

  await disconnectIntegration(session.userId, integrationType)

  const accept = request.headers.get("accept") || ""
  if (accept.includes("application/json")) {
    return NextResponse.json({ ok: true })
  }

  return NextResponse.redirect(new URL("/dashboard/integrations?status=disconnected", request.url))
}
