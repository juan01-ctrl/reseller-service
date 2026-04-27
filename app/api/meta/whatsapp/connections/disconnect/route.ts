import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { requireApiSession } from "@/lib/auth/api"
import { disconnectWhatsAppConnectionById } from "@/lib/meta/service"

export const runtime = "nodejs"

const bodySchema = z.object({
  connectionId: z.string().min(1),
})

export async function POST(request: NextRequest) {
  const { session, unauthorized } = await requireApiSession()
  if (!session) return unauthorized

  const formData = await request.formData().catch(() => null)
  const parsed = bodySchema.safeParse({
    connectionId: String(formData?.get("connectionId") ?? ""),
  })

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid connectionId" }, { status: 400 })
  }

  try {
    await disconnectWhatsAppConnectionById(session.userId, parsed.data.connectionId)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to disconnect connection"
    return NextResponse.json({ error: message }, { status: 404 })
  }

  return NextResponse.redirect(new URL("/dashboard/integrations?status=whatsapp_connection_disconnected", request.url))
}
