import type { ChatIntent } from "@/lib/chatbot-business"

type Source =
  | "llm"
  | "fallback_no_key"
  | "fallback_api_error"
  | "fallback_empty"
  | "fallback_exception"
  | "guardrail_off_topic"
  | "guardrail_injection"

export type ChatEvent = {
  intent: ChatIntent
  source: Source
  relevant: boolean
  blocked: boolean
  messageLength: number
  at: string
}

type AnalyticsStore = {
  totals: {
    messages: number
    blocked: number
    relevant: number
  }
  byIntent: Record<string, number>
  bySource: Record<string, number>
  lastEvents: ChatEvent[]
  updatedAt: string
}

const store: AnalyticsStore = {
  totals: {
    messages: 0,
    blocked: 0,
    relevant: 0,
  },
  byIntent: {},
  bySource: {},
  lastEvents: [],
  updatedAt: new Date().toISOString(),
}

export function recordChatEvent(event: Omit<ChatEvent, "at">) {
  const withTime: ChatEvent = {
    ...event,
    at: new Date().toISOString(),
  }

  store.totals.messages += 1
  if (withTime.blocked) store.totals.blocked += 1
  if (withTime.relevant) store.totals.relevant += 1

  store.byIntent[withTime.intent] = (store.byIntent[withTime.intent] ?? 0) + 1
  store.bySource[withTime.source] = (store.bySource[withTime.source] ?? 0) + 1

  store.lastEvents.unshift(withTime)
  store.lastEvents = store.lastEvents.slice(0, 30)
  store.updatedAt = withTime.at

  // Structured log útil para piping a observabilidad.
  console.info(
    JSON.stringify({
      type: "chatbot_event",
      ...withTime,
    }),
  )
}

export function getChatAnalyticsSnapshot() {
  return {
    ...store,
    totals: {
      ...store.totals,
    },
    byIntent: {
      ...store.byIntent,
    },
    bySource: {
      ...store.bySource,
    },
    lastEvents: [...store.lastEvents],
  }
}
