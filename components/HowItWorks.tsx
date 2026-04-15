"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { easeOut } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Nos pasás tu catálogo",
    body: "Modelos, precios, cuotas, zonas de envío y políticas. Lo ordenamos para web y para la IA.",
    visual: "catalog" as const,
  },
  {
    n: "02",
    title: "Creamos tu web y configuramos la IA",
    body: "Diseño premium, rápido y mobile-first. Entrenamos respuestas con tu tono y reglas de negocio.",
    visual: "setup" as const,
  },
  {
    n: "03",
    title: "Empezás a recibir más consultas y ventas",
    body: "Atención instantánea 24/7, menos pérdidas por demora y más cierres con seguimiento claro.",
    visual: "metrics" as const,
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#040506] py-36 sm:py-48">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="max-w-[22ch] text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl"
        >
          Simple. Rápido. Sin complicaciones.
        </motion.h2>

        <div className="mt-24 space-y-20 sm:space-y-24 lg:mt-28 lg:space-y-28">
          {steps.map((s, i) => (
            <TimelineStep
              key={s.n}
              step={s}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const reverse = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.05 * index, duration: 0.65, ease: easeOut }}
      className="flex gap-6 sm:gap-10"
    >
      <div className="flex w-14 shrink-0 flex-col items-center sm:w-20">
        <div className="relative z-10">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-blue-500/30 blur-lg" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-zinc-950/95 text-lg font-semibold tabular-nums text-white shadow-[0_0_48px_-12px_rgba(59,130,246,0.5)] ring-1 ring-blue-400/25 sm:h-16 sm:w-16 sm:text-xl">
            {step.n}
          </div>
        </div>
        {!isLast && (
          <div
            className="mt-4 w-px flex-1 min-h-[120px] bg-gradient-to-b from-blue-500/40 via-blue-400/15 to-transparent sm:min-h-[140px]"
            aria-hidden
          />
        )}
      </div>

      <div className="grid flex-1 gap-10 pb-4 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className={`min-w-0 space-y-4 ${reverse ? "lg:order-2" : ""}`}>
          <h3 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-[1.65rem]">
            {step.title}
          </h3>
          <p className="max-w-xl text-[15px] leading-relaxed text-zinc-500">
            {step.body}
          </p>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <StepVisual type={step.visual} />
        </div>
      </div>
    </motion.div>
  );
}

function StepVisual({ type }: { type: "catalog" | "setup" | "metrics" }) {
  if (type === "catalog") {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-zinc-950/75 p-5 shadow-[0_32px_90px_-55px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.05] backdrop-blur-md"
      >
        <div className="pointer-events-none absolute -right-6 top-0 h-28 w-28 rounded-full bg-blue-500/18 blur-2xl" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Catálogo
        </p>
        <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.04] p-4">
          <p className="text-[14px] font-semibold text-white">iPhone 16 Pro</p>
          <p className="mt-2 text-[12px] leading-relaxed text-zinc-500">
            256 GB · Titanio · USD 1.349
          </p>
        </div>
      </motion.div>
    );
  }

  if (type === "setup") {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-zinc-900/95 to-black/70 p-[1px] shadow-[0_32px_90px_-55px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.05]"
      >
        <div className="rounded-[1.4rem] bg-[#07080c] p-5">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="text-[11px] text-zinc-500">Web + IA</span>
            <ArrowUpRight className="h-4 w-4 text-zinc-600" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-3 text-center text-[10px] font-medium text-zinc-400">
              Sitio online
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-3 text-[10px] font-medium text-emerald-200">
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-zinc-950/75 p-5 shadow-[0_32px_90px_-55px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.05]"
    >
      <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-blue-500/14 blur-2xl" />
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Métricas
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { k: "+18 consultas", sub: "hoy" },
          { k: "3 ventas", sub: "cerradas" },
          { k: "24/7", sub: "activo" },
        ].map((m) => (
          <div
            key={m.k}
            className="rounded-xl border border-white/[0.06] bg-white/[0.04] px-2 py-3 text-center"
          >
            <p className="text-[11px] font-semibold leading-tight text-zinc-100">
              {m.k}
            </p>
            <p className="mt-1 text-[9px] text-zinc-600">{m.sub}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
