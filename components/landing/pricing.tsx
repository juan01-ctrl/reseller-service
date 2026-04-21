import { Check, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { whatsappUrl } from "@/lib/links"
import { SplitHeading } from "@/components/motion/split-heading"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup } from "@/components/motion/stagger-group"

type Tier = {
  id: "setup" | "mensual"
  name: string
  tag: string
  price: string
  oldPrice?: string
  cadence: string
  features: string[]
  cta: { label: string; href: string }
  highlight?: boolean
}

const tiers: Tier[] = [
  {
    id: "setup",
    name: "Setup",
    tag: "Quedan 5 cupos de 15 · 40% OFF",
    price: "USD 270",
    oldPrice: "USD 450",
    cadence: "Pago único",
    features: [
      "Web profesional",
      "Conexión WhatsApp + Instagram",
      "IA entrenada con tu catálogo",
      "Carga inicial de productos",
      "Sin contrato anual",
      "Garantía 30 días",
    ],
    cta: { label: "Quiero reservar (quedan 5 de 15)", href: whatsappUrl("pricing-setup") },
    highlight: true,
  },
  {
    id: "mensual",
    name: "Mensual",
    tag: "Continuidad",
    price: "USD 39",
    cadence: "Por mes",
    features: [
      "Hosting incluido",
      "IA siempre activa",
      "Soporte humano",
      "Cambios chicos incluidos",
      "Sin contrato anual",
      "Cancelás cuando quieras",
    ],
    cta: { label: "Ver más", href: "#faq" },
  },
]

export function Pricing() {
  return (
    <section id="precio" className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" y={8} duration={0.5} className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Inversión
          </Reveal>
          <SplitHeading
            as="h2"
            className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[44px]"
          >
            Un solo plan. Simple. Sin sorpresas.
          </SplitHeading>
          <Reveal delay={0.25} duration={0.7}>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Un setup único para arrancar y un mensual chico para mantener. Nada de escalones con
              trampas.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2" stagger={0.12} y={32}>
          {tiers.map((t) => (
            <article
              key={t.id}
              className={cn(
                "relative flex flex-col gap-6 rounded-2xl border bg-card p-7",
                t.highlight
                  ? "border-primary/40 shadow-[0_30px_60px_-30px_color-mix(in_oklch,var(--primary)_50%,transparent)] md:-translate-y-2"
                  : "border-border",
              )}
            >
              <header>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider",
                      t.highlight
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-border bg-muted text-muted-foreground",
                    )}
                  >
                    {t.tag}
                  </span>
                </div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-foreground">{t.price}</span>
                  {t.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">{t.oldPrice}</span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{t.cadence}</p>
              </header>

              <ul className="flex flex-col gap-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={t.highlight ? "default" : "outline"}
                className="mt-auto h-11 rounded-full text-sm"
              >
                <a
                  href={t.cta.href}
                  target={t.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={t.cta.href.startsWith("http") ? "noopener" : undefined}
                >
                  {t.cta.label}
                </a>
              </Button>
            </article>
          ))}
        </StaggerGroup>

        <StaggerGroup className="mx-auto mt-8 grid max-w-4xl items-stretch gap-5 md:grid-cols-2" stagger={0.1} y={20}>
          <div className="h-full rounded-2xl border border-primary/20 bg-primary/5 p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">ROI</p>
            <p className="mt-2 text-lg font-medium text-foreground">
              Con un solo cierre, recuperás la inversión en el primer mes.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Al recuperar una consulta que hoy se enfría, podés cubrir setup y mantenimiento desde el inicio.
            </p>
          </div>
          <div className="h-full rounded-2xl border border-border bg-card p-7">
            <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden />
              Garantía de 30 días
            </p>
            <p className="mt-2 text-lg font-medium text-foreground">
              Si el asistente no te genera cierres que antes perdías, te devolvemos el setup.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Sin letra chica. Sin fricción.</p>
          </div>
        </StaggerGroup>
      </div>
    </section>
  )
}
