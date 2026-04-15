"use client";

import { motion } from "framer-motion";
import { Gauge, Timer, TrendingUp } from "lucide-react";
import { easeOut } from "@/lib/motion";

const stats = [
  { icon: Timer, label: "Respondé en segundos" },
  { icon: TrendingUp, label: "Más cierres de venta" },
  { icon: Gauge, label: "Menos tiempo perdido" },
];

export function TrustBar() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] via-zinc-950/40 to-zinc-950/80 p-8 shadow-glass backdrop-blur-2xl sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="relative mx-auto max-w-3xl text-balance text-center text-base font-medium leading-relaxed text-zinc-300 sm:text-lg"
          >
            Pensado para importadores y revendedores Apple que hoy venden solo
            por Instagram y WhatsApp.
          </motion.p>

          <div className="relative mt-10 grid gap-3 sm:grid-cols-3 sm:gap-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.08 * i, duration: 0.55, ease: easeOut }}
                className={`relative flex flex-col items-center gap-3 px-4 py-6 text-center sm:py-8 ${
                  i === 1
                    ? "sm:border-x sm:border-white/[0.08] sm:bg-white/[0.02]"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-blue-600/5 text-blue-200 shadow-inner">
                  <s.icon className="h-5 w-5" aria-hidden />
                </div>
                <span className="text-sm font-semibold tracking-tight text-white">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
