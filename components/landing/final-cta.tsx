import { ArrowRight, CalendarClock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappUrl, CALENDLY_URL, FOUNDER_NAME } from "@/lib/links"
import { SplitHeading } from "@/components/motion/split-heading"
import { Reveal } from "@/components/motion/reveal"

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal as="p" y={8} duration={0.5} className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Antes de seguir
          </Reveal>
          <SplitHeading
            as="h2"
            className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[44px]"
          >
            ImportBoost no es para todos.
          </SplitHeading>
          <Reveal delay={0.25} duration={0.7}>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Si vendés menos de 5 equipos al mes, si no usás WhatsApp o Instagram como canal de
              venta, o si preferís responder cada consulta a mano, probablemente no sea una
              buena inversión.
            </p>
            <p className="mt-3 text-base font-medium text-foreground md:text-lg">
              Si cerrás 10+ equipos al mes y la mayoría de tus leads arranca por DM, responder más
              rápido te puede devolver ventas que hoy se te escapan.
            </p>
          </Reveal>
        </div>

        <Reveal y={40} duration={0.9} className="mt-16 overflow-hidden rounded-3xl border border-border bg-foreground text-background">
          <div className="relative px-8 py-14 md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 80% 0%, color-mix(in oklch, var(--primary) 35%, transparent), transparent 60%)",
              }}
            />
            <div className="relative max-w-2xl">
              <SplitHeading
                as="h3"
                stagger={0.06}
                className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-[40px]"
              >
                La próxima consulta importante, ¿la atendés vos o la perdés por demora?
              </SplitHeading>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button asChild size="lg" className="h-12 rounded-full px-6 text-sm">
                  <a href={whatsappUrl("final")} target="_blank" rel="noopener">
                    Empezar ahora
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-background/20 bg-transparent px-6 text-sm text-background hover:bg-background hover:text-foreground"
                >
                  <a href={whatsappUrl("final-secondary")} target="_blank" rel="noopener">
                    Ver demo
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-sm text-background/70">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-background hover:underline"
                >
                  <CalendarClock className="h-4 w-4 shrink-0" aria-hidden />
                  O agendá 15 min con {FOUNDER_NAME}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
