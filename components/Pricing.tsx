"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CtaButtons } from "@/components/CtaButtons";
import { easeOut } from "@/lib/motion";

const setup = ["Web profesional", "Configuración del asistente IA", "Carga inicial de productos"];

const monthly = ["Hosting", "Soporte", "Cambios pequeños", "Asistente 24/7"];

export function Pricing() {
  return (
    <section id="agendar-demo" className="if-section scroll-mt-36 border-t border-white/[0.06] bg-[#040506]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(59,130,246,0.1),transparent_55%)]" />

      <div className="relative if-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="if-eyebrow text-center"
        >
          Inversión
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="if-after-section-eyebrow if-h2 text-center"
        >
          Una inversión que se paga sola
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, delay: 0.06, ease: easeOut }}
          className="if-after-h2-lead mx-auto max-w-[46ch] text-center if-lead"
        >
          Estructura simple: un setup inicial y un mantenimiento mensual para sostener resultados.
        </motion.p>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_minmax(0,0.9fr)]">
          <PricingCard title="Setup inicial" price="Desde USD 390" items={setup} highlight={false} />

          <PricingCard
            className="scale-[1.01] lg:scale-[1.05]"
            title="Mantenimiento mensual"
            price="Desde USD 49/mes"
            items={monthly}
            highlight
          />

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
            className="if-panel-muted p-7"
          >
            <p className="if-eyebrow">ROI</p>
            <p className="mt-4 text-2xl font-semibold leading-tight text-zinc-100">1 venta extra por mes</p>
            <p className="mt-2 text-sm text-zinc-400">cubre completamente el servicio mensual.</p>
            <div className="mt-8 space-y-3 text-sm text-zinc-300">
              <div className="if-panel-muted px-4 py-3">Sin permanencia obligatoria</div>
              <div className="if-panel-muted px-4 py-3">Soporte humano incluido</div>
            </div>
          </motion.aside>
        </div>

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

function PricingCard({
  title,
  price,
  items,
  highlight,
  className = "",
}: {
  title: string;
  price: string;
  items: string[];
  highlight: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: easeOut }}
      whileHover={{ y: highlight ? -6 : -3 }}
      className={`relative overflow-hidden ${className} ${highlight ? "if-panel-featured p-10 sm:p-12" : "if-panel p-8 sm:p-9"}`}
    >
      {highlight && (
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/22 blur-3xl" />
      )}

      <p
        className={`relative text-[11px] font-semibold uppercase tracking-[0.18em] ${
          highlight ? "text-blue-300/90" : "text-zinc-500"
        }`}
      >
        {highlight ? "Recomendado" : "Base"}
      </p>

      <div className="relative mt-2">
        <h3 className={`font-medium ${highlight ? "text-zinc-300" : "text-zinc-500"}`}>{title}</h3>
        <p
          className={`mt-8 font-semibold tracking-tight text-zinc-50 ${
            highlight ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {price}
        </p>
        <ul className={`space-y-4 ${highlight ? "mt-12" : "mt-10"}`}>
          {items.map((item) => (
            <li
              key={item}
              className={`flex items-start gap-3 leading-snug ${
                highlight ? "text-[15px] text-zinc-300" : "text-[14px] text-zinc-400"
              }`}
            >
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                  highlight ? "bg-blue-500/20 text-blue-200" : "bg-white/[0.06] text-zinc-400"
                }`}
              >
                <Check className="h-2.5 w-2.5" aria-hidden />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
