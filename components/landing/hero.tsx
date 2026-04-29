import { ArrowRight, Clock, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatMock } from "@/components/landing/chat-mock"
import { Reveal } from "@/components/motion/reveal"
import { SplitHeading } from "@/components/motion/split-heading"
import { whatsappUrl } from "@/lib/links"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-6 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal as="span" y={8} duration={0.5} className="inline-flex max-w-full items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground sm:px-3 sm:text-[11px] sm:tracking-[0.15em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            Para importadores de electrónica
          </Reveal>

          <SplitHeading
            as="h1"
            stagger={0.06}
            duration={0.9}
            accentSelector="[data-heading-accent]"
            className="mt-6 text-balance text-[42px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[64px]"
          >
            Respondé más rápido y{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">cerrá más consultas.</span>
              <span
                aria-hidden
                data-heading-accent
                className="absolute inset-x-0 bottom-1 -z-0 h-2 max-md:hidden origin-left rounded-sm bg-primary/15 will-change-transform"
              />
            </span>
          </SplitHeading>

          <Reveal delay={0.3} duration={0.7}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
              Respondé WhatsApp e Instagram en segundos, con precios y stock claros. Vos tenés el
              control en todo momento.
            </p>
          </Reveal>

          <Reveal delay={0.45} duration={0.7}>
            <div className="mt-8 flex w-full max-w-md flex-row items-center justify-center gap-2 self-center sm:max-w-none sm:gap-3 md:gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 min-w-0 flex-1 rounded-full px-3 text-sm font-medium shadow-sm sm:flex-none sm:px-6"
              >
                <a href={whatsappUrl("hero")} target="_blank" rel="noopener">
                  Empezar ahora
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 min-w-0 flex-1 rounded-full px-3 text-sm sm:flex-none sm:px-6"
              >
                <a href="#precio">Ver planes</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.6} duration={0.7}>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" /> Listo en 7 días
              </li>
              <li className="flex items-center gap-1.5">
                <HeartHandshake className="h-3.5 w-3.5 text-primary" /> Soporte humano real
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.5} y={40} duration={0.9} className="relative mx-auto mt-16 max-w-xl md:mt-20">
          <div
            aria-hidden
            className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-[2rem] bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-2xl"
          />
          <ChatMock
            messages={[
              { from: "them", text: "Hola, ¿tenés PS5 Slim con lectora en stock?", time: "23:47" },
              {
                from: "me",
                text: "Sí, disponible. USD 729 por transferencia o 6 cuotas. ¿Te reservo una?",
                time: "23:47",
              },
              { from: "them", text: "Dale, reservámela.", time: "23:48" },
              {
                from: "me",
                text: "Listo, reservada 24 hs. Te paso los datos para transferir.",
                time: "23:48",
              },
            ]}
            footer={
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  Reserva confirmada
                </span>
                <span className="font-mono text-muted-foreground">Total: 47 segundos</span>
              </div>
            }
          />
        </Reveal>

        {/*
        <Reveal delay={0.4} y={16} duration={0.8} className="mt-20 md:mt-28">
          <Marquee />
        </Reveal>
        */}
      </div>
    </section>
  )
}
