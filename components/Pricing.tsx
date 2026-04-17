"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { CtaButtons } from "@/components/CtaButtons";
import { easeOut } from "@/lib/motion";
import { HeroPanelFeatured, HeroPanelMuted, HeroReveal } from "@/components/ui/hero";

const setup = ["Web profesional", "Configuración del asistente IA", "Carga inicial de productos"];

const monthly = ["Hosting", "Soporte continuo", "Cambios pequeños", "Asistente 24/7"];

const conditions = ["Sin permanencia obligatoria", "Soporte humano incluido", "Escalable según catálogo"];

export function Pricing() {
  return (
    <section id="precios" className="if-section scroll-mt-36 border-t border-white/[0.06] bg-[#040506]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(59,130,246,0.1),transparent_55%)]" />

      <div className="relative if-container">
        <HeroReveal className="if-eyebrow text-center" margin="-120px" duration={0.55}>
          Inversión
        </HeroReveal>
        <HeroReveal className="if-after-section-eyebrow if-h2 text-center" y={16} margin="-120px" duration={0.65}>
          Un plan simple para crecer
        </HeroReveal>
        <HeroReveal className="if-after-h2-lead mx-auto max-w-[54ch] text-center if-lead" delay={0.06} margin="-120px">
          Lanzas con un setup inicial y después sostenés resultados con una cuota mensual baja.
        </HeroReveal>

        <HeroReveal className="mt-14" y={24} duration={0.6} margin="-80px">
          <HeroPanelFeatured className="p-8 sm:p-10 lg:p-12">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300/90">Plan Resellix</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                  Desde USD 450 + USD 49/mes
                </h3>
                <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-zinc-300">
                  Estructura pensada para que recuperes inversión rápido y mantengas una operación estable.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <HeroPanelMuted className="px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">Hoy</p>
                    <p className="mt-1.5 text-sm font-semibold text-zinc-100">Setup inicial</p>
                    <p className="mt-1 text-xs text-zinc-400">Desde USD 450</p>
                  </HeroPanelMuted>
                  <ArrowRight className="h-4 w-4 text-zinc-500" />
                  <HeroPanelMuted className="px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">Luego</p>
                    <p className="mt-1.5 text-sm font-semibold text-zinc-100">Mantenimiento</p>
                    <p className="mt-1 text-xs text-zinc-400">Desde USD 49/mes</p>
                  </HeroPanelMuted>
                </div>
              </div>

              <HeroPanelMuted className="p-6">
                <p className="if-eyebrow">ROI estimado</p>
                <p className="if-after-eyebrow text-3xl font-semibold leading-none text-zinc-100">1 cierre extra/mes</p>
                <p className="if-after-title text-sm text-zinc-400">cubre completamente el mantenimiento mensual.</p>
              </HeroPanelMuted>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <PricingPhase title="Qué incluye el setup" items={setup} />
              <PricingPhase title="Qué incluye cada mes" items={monthly} />
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.08] pt-6">
              {conditions.map((item) => (
                <span key={item} className="rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1.5 text-[11px] text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </HeroPanelFeatured>
        </HeroReveal>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="mt-14 flex justify-center"
        >
          <CtaButtons variant="emphasis" />
        </motion.div>
      </div>
    </section>
  );
}

function PricingPhase({ title, items }: { title: string; items: string[] }) {
  return (
    <HeroPanelMuted className="p-5 sm:p-6">
      <p className="text-sm font-semibold text-zinc-100">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[14px] leading-snug text-zinc-300">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
              <Check className="h-2.5 w-2.5" aria-hidden />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </HeroPanelMuted>
  );
}
