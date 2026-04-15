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
      className="relative scroll-mt-36 border-t border-white/[0.05] bg-[#040506] py-32 sm:py-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(59,130,246,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="text-center text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl"
        >
          Una inversión que se paga sola
        </motion.h2>

        <div className="mt-20 grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <PricingCard
            className="lg:col-span-4"
            title="Setup inicial"
            price="Desde USD 390"
            items={setup}
            highlight={false}
          />
          <PricingCard
            className="lg:col-span-8"
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
          className="mx-auto mt-14 max-w-lg text-center text-sm text-zinc-600"
        >
          Con una venta extra por mes, el servicio se paga solo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
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
      whileHover={{ y: highlight ? -8 : -4 }}
      className={`relative overflow-hidden rounded-[2rem] p-9 sm:p-10 ${className} ${
        highlight
          ? "border border-blue-500/25 bg-gradient-to-br from-blue-500/[0.14] via-zinc-950/80 to-zinc-950 shadow-[0_50px_120px_-60px_rgba(37,99,235,0.35)] ring-1 ring-blue-400/15"
          : "border border-white/[0.07] bg-zinc-950/50"
      }`}
    >
      {highlight && (
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
      )}
      <div className="relative">
        <h3 className="text-[15px] font-medium text-zinc-400">{title}</h3>
        <p className="mt-6 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl sm:leading-none">
          {price}
        </p>
        <ul className="mt-10 space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] text-zinc-400">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-400/90">
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
