"use client"

import { useState } from "react"
import { Check, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappUrl } from "@/lib/links"
import { SplitHeading } from "@/components/motion/split-heading"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { OfferCountdown } from "@/components/landing/offer-countdown"

const setupPrice = 510
const setupBasePrice = 729
const monthlyPrice = 43
const savings = setupBasePrice - setupPrice
const discountPercent = Math.round((savings / setupBasePrice) * 100)

const setupIncludes = [
  "Web profesional con catálogo claro",
  "Conexión WhatsApp + Instagram",
  "IA entrenada con tus productos y cuotas",
  "Carga inicial de productos",
]

const maintenanceIncludes = [
  "Hosting incluido",
  "IA siempre activa",
  "Soporte humano",
  "Cambios chicos incluidos",
  "Sin contrato anual",
  "Cancelás cuando quieras",
]

const allIncludes = [...setupIncludes, ...maintenanceIncludes]
const visibleIncludes = [
  "Web profesional con catálogo claro",
  "Conexión WhatsApp + Instagram",
  "IA entrenada con tus productos y cuotas",
  "Hosting incluido",
  "Soporte humano",
  "Sin contrato anual",
]
const extraIncludes = allIncludes.filter((item) => !visibleIncludes.includes(item))

export function Pricing() {
  const [includesExpanded, setIncludesExpanded] = useState(false)

  return (
    <section id="precio" className="border-t border-border bg-muted/30">
      <div className="mx-auto min-w-0 max-w-6xl px-6 py-14 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" y={8} duration={0.5} className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Inversión
          </Reveal>
          <SplitHeading
            as="h2"
            className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[44px]"
          >
            Recuperá la inversión con más cierres, sin complejidad.
          </SplitHeading>
          <Reveal delay={0.25} duration={0.7}>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Un pago inicial para implementar y un mensual bajo para mantener todo activo.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mx-auto mt-14 max-w-3xl" stagger={0.12} y={32}>
          <article className="rounded-2xl border border-primary/35 bg-card p-5 shadow-[0_30px_60px_-30px_color-mix(in_oklch,var(--primary)_40%,transparent)] sm:p-6 md:p-7">
            <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">Plan ImportBoost</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  Todo lo necesario para vender más, desde la primera semana.
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Precio promocional válido hasta finalizar el contador.
                </p>
              </div>
              <div className="self-start">
                <OfferCountdown />
              </div>
            </header>

            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">Plan completo</p>
                <span className="rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-primary">
                  {discountPercent}% OFF
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1.5">
                <span className="text-4xl font-semibold tracking-tight text-foreground">USD {setupPrice}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Setup completo: Web Premium + automatización WhatsApp e Instagram
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Antes <span className="line-through">USD {setupBasePrice}</span>
                <span className="mx-1.5">·</span>
                <span className="font-semibold text-primary">
                  Ahorrás USD {savings} ({discountPercent}%)
                </span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">Implementación completa en 7 días hábiles.</p>

              <div className="mt-5 border-t border-primary/15 pt-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Mantenimiento del plan
                </p>
                <div className="mt-1 flex flex-wrap items-end gap-1.5">
                  <span className="text-2xl font-semibold tracking-tight text-foreground">USD {monthlyPrice}</span>
                  <span className="pb-0.5 text-sm text-muted-foreground">/mes</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Hosting, IA activa, soporte humano y cambios chicos.</p>
                <p className="mt-1 text-xs text-muted-foreground">Sin contrato anual. Cancelás cuando quieras.</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-muted/35 p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Incluye desde el día 1
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {(includesExpanded ? [...visibleIncludes, ...extraIncludes] : visibleIncludes).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              {extraIncludes.length > 0 && (
                <div className="mt-3 flex justify-center sm:justify-start">
                  <button
                    type="button"
                    onClick={() => setIncludesExpanded((v) => !v)}
                    className="cursor-pointer text-xs font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                  >
                    {includesExpanded
                      ? "Ver menos"
                      : `Ver todo lo incluido en el plan (${extraIncludes.length} más)`}
                  </button>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <Button asChild className="h-11 rounded-full px-8 text-sm sm:min-w-[220px]">
                <a href={whatsappUrl("pricing-setup")} target="_blank" rel="noopener">
                  Empezar ahora
                </a>
              </Button>
            </div>
          </article>
        </StaggerGroup>

        <StaggerGroup
          className="mx-auto mt-8 grid min-w-0 max-w-3xl items-stretch gap-5 md:grid-cols-2"
          stagger={0.1}
          y={20}
        >
          <div className="h-full min-w-0 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">ROI</p>
            <p className="mt-2 text-lg font-medium text-foreground">
              Con 1 cierre adicional, la inversión puede recuperarse en el primer mes.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Con convertir una consulta que hoy se enfría, el retorno puede empezar rápido.
            </p>
          </div>
          <div className="h-full min-w-0 rounded-2xl border border-border bg-card p-5 sm:p-7">
            <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden />
              Garantía de 30 días
            </p>
            <p className="mt-2 text-lg font-medium text-foreground">
              Si el asistente no recupera cierres que antes se perdían, devolvemos el setup.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Sin letra chica. Sin fricción.</p>
          </div>
        </StaggerGroup>
      </div>
    </section>
  )
}
