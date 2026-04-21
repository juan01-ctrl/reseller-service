import { NextRequest, NextResponse } from "next/server"
import { getChatAnalyticsSnapshot } from "@/lib/chatbot-analytics"

export const runtime = "nodejs"

export async function GET(req: NextRequest) {
  const requiredKey = process.env.CHAT_ANALYTICS_KEY

  if (requiredKey) {
    const headerKey = req.headers.get("x-chat-analytics-key") || ""
    if (headerKey !== requiredKey) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  return NextResponse.json(getChatAnalyticsSnapshot(), { status: 200 })
}
