"use client"

import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react"
import { Bot, MessageCircle, Send, X } from "lucide-react"
import { CALENDLY_URL, whatsappUrl } from "@/lib/links"
import { fallbackReply } from "@/lib/chatbot-business"

type ChatRole = "assistant" | "user"

type ChatMessage = {
  id: string
  role: ChatRole
  text: string
}

const QUICK_QUESTIONS = [
  "¿Cuánto sale?",
  "¿Qué incluye el setup?",
  "¿Cuánto tarda en estar listo?",
  "¿Cómo mantienen el control de respuestas?",
]

const URL_REGEX = /(https?:\/\/[^\s)]+)/g

function getLinkLabel(url: string) {
  if (url.includes("wa.me") || url.includes("whatsapp")) return "Contactar por WPP"
  if (url.includes("calendly.com") || url.includes("cal.com")) return "Agendar llamada"
  return "Abrir enlace"
}

function renderMessageText(text: string): ReactNode {
  const matches = [...text.matchAll(URL_REGEX)]
  if (matches.length === 0) return text

  const nodes: ReactNode[] = []
  let lastIndex = 0

  matches.forEach((match, i) => {
    const url = match[0]
    const start = match.index ?? 0

    if (start > lastIndex) {
      nodes.push(text.slice(lastIndex, start))
    }

    nodes.push(
      <a
        key={`${url}-${i}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline underline-offset-2"
      >
        {getLinkLabel(url)}
      </a>,
    )

    lastIndex = start + url.length
  })

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <>{nodes}</>
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m-1",
      role: "assistant",
      text: "Hola, soy el asistente de ImportBoost. Te ayudo con precios, implementación, tiempos, canales y cómo mantenés control de las respuestas.",
    },
  ])

  const canSend = input.trim().length > 1 && !typing

  const messageCountLabel = useMemo(() => {
    const total = messages.length
    return total === 1 ? "1 mensaje" : `${total} mensajes`
  }, [messages.length])

  useEffect(() => {
    if (!open) return
    const id = requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
    })
    return () => cancelAnimationFrame(id)
  }, [open, messages, typing])

  function pushUserMessage(text: string) {
    const userMessage: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text,
    }
    setMessages((prev) => [...prev, userMessage])
  }

  function pushAssistantMessage(text: string) {
    const assistantMessage: ChatMessage = {
      id: `a-${Date.now()}`,
      role: "assistant",
      text,
    }
    setMessages((prev) => [...prev, assistantMessage])
  }

  async function handleAsk(raw: string) {
    const text = raw.trim()
    if (!text) return

    pushUserMessage(text)
    setTyping(true)

    try {
      const history = messages.slice(-8).map((m) => ({
        role: m.role,
        text: m.text,
      }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history,
        }),
      })

      if (!response.ok) {
        pushAssistantMessage(fallbackReply(text))
        return
      }

      const data = (await response.json()) as { reply?: string }
      const reply = data.reply?.trim()
      pushAssistantMessage(reply || fallbackReply(text))
    } catch {
      pushAssistantMessage(fallbackReply(text))
    } finally {
      setTyping(false)
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!canSend) return
    const text = input
    setInput("")
    void handleAsk(text)
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-[80] inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_16px_32px_-18px_color-mix(in_oklch,var(--primary)_65%,transparent)] transition hover:brightness-[1.03]"
          aria-label="Abrir chatbot"
        >
          <Bot className="h-4 w-4" />
          Consultar
        </button>
      )}

      {open && (
        <section className="fixed bottom-5 left-4 right-4 z-[80] mx-auto w-auto max-w-[390px] overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-24px_color-mix(in_oklch,var(--foreground)_20%,transparent)] sm:left-auto sm:right-5 sm:mx-0">
          <header className="flex items-center justify-between border-b border-border bg-muted/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Asistente ImportBoost</p>
                <p className="text-[11px] text-muted-foreground">{messageCountLabel}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              aria-label="Cerrar chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div className="max-h-[50vh] space-y-3 overflow-y-auto bg-background px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm border border-border bg-muted text-foreground"
                  }`}
                >
                  {renderMessageText(message.text)}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm border border-border bg-muted px-3.5 py-2.5 text-sm text-muted-foreground">
                  Escribiendo...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} className="h-px shrink-0" aria-hidden />
          </div>

          <div className="border-t border-border bg-card px-4 py-3">
            <div className="mb-2.5 flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void handleAsk(question)}
                  disabled={typing}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition hover:border-primary/35 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribí tu consulta..."
                className="h-10 flex-1 rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary/35"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition hover:brightness-[1.03] disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Enviar"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-2.5 flex items-center justify-between gap-2 text-[11px]">
              <a href={whatsappUrl("final")} target="_blank" rel="noopener" className="text-primary hover:underline">
                Ir a WhatsApp
              </a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener" className="text-muted-foreground hover:text-foreground hover:underline">
                Agendar llamada
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
