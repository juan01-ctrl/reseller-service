import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { requireApiSession } from "@/lib/auth/api"
import { sendWhatsAppTestMessage } from "@/lib/meta/service"

export const runtime = "nodejs"

const bodySchema = z.object({
  connectionId: z.string().min(1),
  to: z.string().min(5),
  mode: z.enum(["text", "template"]).default("text"),
  textBody: z.string().optional(),
  templateName: z.string().optional(),
  templateLanguageCode: z.string().optional(),
})

export async function POST(request: NextRequest) {
  const { session, unauthorized } = await requireApiSession()
  if (!session) return unauthorized

  const formData = await request.formData().catch(() => null)
  const parsed = bodySchema.safeParse({
    connectionId: String(formData?.get("connectionId") ?? ""),
    to: String(formData?.get("to") ?? ""),
    mode: String(formData?.get("mode") ?? "text"),
    textBody: String(formData?.get("textBody") ?? ""),
    templateName: String(formData?.get("templateName") ?? ""),
    templateLanguageCode: String(formData?.get("templateLanguageCode") ?? ""),
  })

  if (!parsed.success) {
    return NextResponse.redirect(new URL("/dashboard/integrations?status=whatsapp_test_invalid", request.url))
  }

  try {
    const result = await sendWhatsAppTestMessage({
      userId: session.userId,
      connectionId: parsed.data.connectionId,
      to: parsed.data.to,
      mode: parsed.data.mode,
      textBody: parsed.data.textBody,
      templateName: parsed.data.templateName,
      templateLanguageCode: parsed.data.templateLanguageCode || "es_AR",
    })

    const redirectUrl = new URL("/dashboard/integrations", request.url)
    redirectUrl.searchParams.set("status", "whatsapp_test_sent")
    if (result.messageId) {
      redirectUrl.searchParams.set("messageId", result.messageId)
    }
    return NextResponse.redirect(redirectUrl)
  } catch {
    return NextResponse.redirect(new URL("/dashboard/integrations?status=whatsapp_test_failed", request.url))
  }
}
