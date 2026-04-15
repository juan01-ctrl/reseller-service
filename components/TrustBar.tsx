"use client";

import { motion } from "framer-motion";
import { Gauge, Timer, TrendingUp } from "lucide-react";
import { easeOut } from "@/lib/motion";

const metrics = [
  {
    label: "Respondé en segundos",
    stat: "< 1 min",
    icon: Timer,
  },
  {
    label: "Más cierres de venta",
    stat: "+32%",
    icon: TrendingUp,
  },
  {
    label: "Menos tiempo perdido",
    stat: "-70%",
    icon: Gauge,
  },
];

export function TrustBar() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="rounded-[1.5rem] border border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-2xl"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(120%_100%_at_100%_0%,rgba(59,130,246,0.05),transparent_55%)]" />

          <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1.35fr] lg:items-stretch lg:gap-0 lg:p-11">
            <div className="flex flex-col justify-center lg:border-r lg:border-white/[0.06] lg:pr-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400/95">
                Hecho para importadores Apple
              </p>
              <p className="mt-3 max-w-[22ch] text-lg font-medium leading-snug tracking-tight text-zinc-100 sm:text-[1.25rem] sm:leading-snug">
                Pensado para quienes hoy venden solo por Instagram y WhatsApp.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-white/[0.06] sm:flex-row sm:divide-x sm:divide-y-0">
              {metrics.map((m, i) => (
                <MetricColumn key={m.label} metric={m} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricColumn({
  metric,
  index,
}: {
  metric: (typeof metrics)[0];
  index: number;
}) {
  const Icon = metric.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: 0.04 * index, duration: 0.4, ease: easeOut }}
      className="flex flex-1 flex-col justify-center py-6 first:pt-0 last:pb-0 sm:px-6 sm:py-0 lg:px-8"
    >
      <div className="flex items-start gap-3.5">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/[0.06] bg-white/[0.02] text-blue-400/85">
          <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
        </div>
        <div className="min-w-0">
          <p className="font-mono text-xs font-medium tabular-nums tracking-wide text-blue-300/90">
            {metric.stat}
          </p>
          <p className="mt-1.5 text-[13px] font-medium leading-snug text-zinc-400">
            {metric.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
