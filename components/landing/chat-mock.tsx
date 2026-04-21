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
  className?: string
  footer?: React.ReactNode
}

export function ChatMock({ title = "Asistente ImportBoost", messages, typing, className, footer }: Props) {
  return (
    <div
      role="img"
      aria-label="Ejemplo de conversación con el asistente de ImportBoost"
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-30px_oklch(0.2_0.05_240_/_0.25)]",
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
        <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-foreground">
          WhatsApp
        </span>
      </header>

      <div className="flex flex-col gap-3 px-5 py-5">
        {messages.map((m, i) => (
          <div key={i} className={cn("flex", m.from === "me" ? "justify-end" : "justify-start")}>
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
        {typing && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-muted px-4 py-3">
              <span
                className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                style={{ animation: "typing 1.2s infinite", animationDelay: "0s" }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                style={{ animation: "typing 1.2s infinite", animationDelay: "0.2s" }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                style={{ animation: "typing 1.2s infinite", animationDelay: "0.4s" }}
              />
            </div>
          </div>
        )}
      </div>

      {footer && <div className="border-t border-border bg-muted/40 px-5 py-4">{footer}</div>}
    </div>
  )
}
