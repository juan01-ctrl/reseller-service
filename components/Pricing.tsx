"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CtaButtons } from "@/components/CtaButtons";
import { easeOut } from "@/lib/motion";

const setup = [
  "Web profesional",
  "Configuración del asistente IA",
  "Carga inicial de productos",
];

const monthly = [
  "Hosting",
  "Soporte",
  "Cambios pequeños",
  "Asistente funcionando 24/7",
];

export function Pricing() {
  return (
    <section
      id="agendar-demo"
      className="relative scroll-mt-32 py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.1),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-balance text-center text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Una inversión que se paga sola
        </motion.h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:items-end">
          <PricingCard
            title="Setup inicial"
            price="Desde USD 390"
            items={setup}
            highlight={false}
          />
          <PricingCard
            title="Mantenimiento mensual"
            price="Desde USD 49/mes"
            items={monthly}
            highlight
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-zinc-500"
        >
          Con una venta extra por mes, el servicio se paga solo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="mt-12 flex justify-center"
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
}: {
  title: string;
  price: string;
  items: string[];
  highlight: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: easeOut }}
      whileHover={{ y: -6 }}
      className={`relative overflow-hidden rounded-[1.85rem] border p-8 shadow-glass backdrop-blur-2xl sm:p-9 ${
        highlight
          ? "border-blue-400/35 bg-gradient-to-br from-blue-500/20 via-white/[0.06] to-indigo-600/10 ring-1 ring-blue-400/25 lg:scale-[1.02] lg:origin-bottom"
          : "border-white/[0.09] bg-gradient-to-b from-white/[0.05] to-transparent"
      }`}
    >
      {highlight && (
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
      )}
      <div className="relative">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-[2.75rem] sm:leading-none">
          {price}
        </p>
        <ul className="mt-8 space-y-3.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-zinc-200">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/20">
                <Check className="h-3 w-3" aria-hidden />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
