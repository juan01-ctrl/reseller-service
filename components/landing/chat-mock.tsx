 "use client"

import { useEffect, useState } from "react"
import { useRef } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type Msg = {
  from: "them" | "me"
  text: string
  time?: string
}

type Props = {
  title?: string
  messages: Msg[]
  typing?: boolean
  realtime?: boolean
  loop?: boolean
  startOnView?: boolean
  className?: string
  footer?: React.ReactNode | ((state: { completed: boolean }) => React.ReactNode)
}

export function ChatMock({
  title = "Asistente ImportBoost",
  messages,
  typing,
  realtime = false,
  loop = false,
  startOnView = false,
  className,
  footer,
}: Props) {
  const [visibleCount, setVisibleCount] = useState(realtime ? 0 : messages.length)
  const [autoTyping, setAutoTyping] = useState(false)
  const [typingSide, setTypingSide] = useState<"them" | "me">("them")
  const [inView, setInView] = useState(!startOnView)
  const [completed, setCompleted] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) return
    const node = rootRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        setInView(entry.isIntersecting)
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!realtime) {
      setVisibleCount(messages.length)
      setAutoTyping(false)
      setTypingSide("them")
      setCompleted(false)
      return
    }
    if (!inView) return

    let cancelled = false
    const timers: number[] = []

    const schedule = (fn: () => void, delay: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn()
      }, delay)
      timers.push(id)
    }

    const runSequence = () => {
      let t = 360
      setVisibleCount(0)
      setAutoTyping(false)
      setCompleted(false)

      messages.forEach((msg, i) => {
        if (msg.from === "me") {
          schedule(() => {
            setTypingSide(msg.from)
            setAutoTyping(true)
          }, t)
          t += 720
          schedule(() => {
            setAutoTyping(false)
            setVisibleCount(i + 1)
          }, t)
          t += 560
          return
        }

        schedule(() => setVisibleCount(i + 1), t)
        t += 650
      })

      schedule(() => setCompleted(true), t + 250)

      if (loop) {
        schedule(runSequence, t + 2200)
      }
    }

    runSequence()

    return () => {
      cancelled = true
      timers.forEach((id) => window.clearTimeout(id))
    }
  }, [messages, realtime, loop, inView])

  const visibleMessages = realtime ? messages.slice(0, visibleCount) : messages
  const showTyping = realtime ? autoTyping : typing

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label="Ejemplo de conversación con el asistente de ImportBoost"
      className={cn(
        "relative flex h-[540px] max-h-[72vh] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-30px_oklch(0.2_0.05_240_/_0.25)] transition-all duration-700 ease-out",
        completed &&
          "border-primary/45 bg-[color-mix(in_oklch,var(--primary)_8%,var(--card))] shadow-[0_24px_56px_-32px_color-mix(in_oklch,var(--primary)_42%,transparent)] -translate-y-1.5",
        className,
      )}
    >
      <header className="flex items-center gap-3 border-b border-border bg-muted/60 px-5 py-3.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <span className="text-xs font-semibold">IB</span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            en línea
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-foreground">
            WhatsApp
          </span>
          <span
            aria-hidden
            className={cn(
              "inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-[color-mix(in_oklch,var(--primary)_14%,white)] text-primary shadow-[0_10px_22px_-14px_color-mix(in_oklch,var(--primary)_55%,transparent)] transition-all duration-700 ease-out",
              completed ? "opacity-100 scale-100" : "opacity-0 scale-90",
            )}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2.8} />
          </span>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-5 py-5">
        {visibleMessages.map((m, i) => (
          <div
            key={i}
            className={cn("flex", m.from === "me" ? "justify-end" : "justify-start")}
            style={{
              animation: "fade-in-up 420ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                m.from === "me"
                  ? "rounded-br-sm bg-primary text-primary-foreground"
                  : "rounded-bl-sm bg-muted text-foreground",
              )}
            >
              <p>{m.text}</p>
              {m.time && (
                <p
                  className={cn(
                    "mt-1 text-right text-[10px]",
                    m.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground",
                  )}
                >
                  {m.time}
                </p>
              )}
            </div>
          </div>
        ))}
        {showTyping && (
          <div className={cn("flex", typingSide === "me" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "flex items-center gap-1 rounded-2xl px-4 py-3",
                typingSide === "me"
                  ? "rounded-br-sm bg-primary/15"
                  : "rounded-bl-sm bg-muted",
              )}
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                style={{ animation: "typing 1.4s ease-in-out infinite", animationDelay: "0s" }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                style={{ animation: "typing 1.4s ease-in-out infinite", animationDelay: "0.22s" }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                style={{ animation: "typing 1.4s ease-in-out infinite", animationDelay: "0.44s" }}
              />
            </div>
          </div>
        )}
      </div>

      {footer && (
        <div className="border-t border-border bg-muted/40 px-5 py-4">
          {typeof footer === "function" ? footer({ completed }) : footer}
        </div>
      )}

    </div>
  )
}
