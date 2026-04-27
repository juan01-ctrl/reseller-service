import { IntegrationType } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { requireApiSession } from "@/lib/auth/api"
import { buildMetaOAuthUrl, createOAuthState } from "@/lib/meta/service"

export const runtime = "nodejs"

const integrationSchema = z.object({
  type: z.enum(["whatsapp", "instagram"]),
})

function getTypeFromRequest(request: NextRequest): IntegrationType | null {
  const url = new URL(request.url)
  const parsed = integrationSchema.safeParse({
    type: url.searchParams.get("type"),
  })
  return parsed.success ? parsed.data.type : null
}

export async function GET(request: NextRequest) {
  const { session, unauthorized } = await requireApiSession()
  if (!session) return unauthorized

  const integrationType = getTypeFromRequest(request)
  if (!integrationType) {
    return NextResponse.json({ error: "Invalid integration type" }, { status: 400 })
  }

  const state = await createOAuthState(session.userId, integrationType)
  const url = buildMetaOAuthUrl(state, integrationType)
  return NextResponse.redirect(url)
}

export async function POST(request: NextRequest) {
  const { session, unauthorized } = await requireApiSession()
  if (!session) return unauthorized

  let type: string | null = null
  const contentType = request.headers.get("content-type") || ""

  if (contentType.includes("application/json")) {
    const body = (await request.json().catch(() => ({}))) as { type?: string }
    type = body.type ?? null
  } else {
    const formData = await request.formData().catch(() => null)
    type = formData ? String(formData.get("type") ?? "") : null
  }

  const parsed = integrationSchema.safeParse({ type })
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid integration type" }, { status: 400 })
  }

  const state = await createOAuthState(session.userId, parsed.data.type)
  const url = buildMetaOAuthUrl(state, parsed.data.type)
  return NextResponse.json({ url }, { status: 200 })
}
