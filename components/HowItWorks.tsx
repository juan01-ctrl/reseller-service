"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { easeOut } from "@/lib/motion";
import { HeroPanel, HeroPanelFeatured, HeroReveal } from "@/components/ui/hero";

const steps = [
  {
    n: "01",
    title: "Nos pasás tu catálogo",
    body: "Modelos, precios, cuotas y envíos. Lo ordenamos para web y para la IA.",
    visual: "catalog" as const,
  },
  {
    n: "02",
    title: "Web + IA con tu tono",
    body: "Diseño mobile-first y respuestas alineadas a tu negocio, listas para convertir.",
    visual: "setup" as const,
  },
  {
    n: "03",
    title: "Más consultas, más cierres",
    body: "Atención instantánea y seguimiento claro para cerrar ventas de forma constante.",
    visual: "metrics" as const,
  },
];

export function HowItWorks() {
  return (
    <section className="if-section bg-[#040506]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.08),transparent_55%)]" />
      <div className="relative if-container">
        <HeroReveal className="if-eyebrow" margin="-120px" duration={0.55}>
          Proceso
        </HeroReveal>
        <HeroReveal className="if-after-section-eyebrow if-h2 max-w-[20ch]" y={16} margin="-120px" duration={0.65}>
          Implementación premium en tres pasos
        </HeroReveal>

        <div className="relative if-after-heading-block">
          <div
            className="pointer-events-none absolute left-[1.65rem] top-4 bottom-4 hidden w-px sm:left-[2.15rem] lg:block"
            aria-hidden
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 via-blue-400/20 to-transparent" />
            <div className="absolute inset-0 bg-blue-400/30 blur-[1px]" />
          </div>

          <div className="space-y-20 lg:space-y-24">
            <TimelineStep step={steps[0]} index={0} isLast={false} className="lg:translate-x-0" />
            <TimelineStep
              step={steps[1]}
              index={1}
              isLast={false}
              className="lg:-translate-x-6 lg:scale-[1.03]"
              featured
            />
            <TimelineStep step={steps[2]} index={2} isLast className="lg:translate-x-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
  isLast,
  className = "",
  featured = false,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
  className?: string;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.05 * index, duration: 0.65, ease: easeOut }}
      className={`relative flex gap-8 transition-transform duration-300 sm:gap-12 lg:gap-16 ${className}`}
    >
      <div className="relative flex w-14 shrink-0 flex-col items-center sm:w-[4.5rem]">
        <div className="relative z-10">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-blue-500/35 blur-xl" />
          <div className="relative flex h-16 w-14 items-center justify-center rounded-2xl border border-blue-400/35 bg-zinc-950/95 text-xl font-semibold tabular-nums text-white shadow-[0_0_48px_-12px_rgba(59,130,246,0.55)] ring-1 ring-blue-400/30 sm:h-[4.5rem] sm:w-16 sm:text-2xl">
            {step.n}
          </div>
        </div>
        {!isLast && (
          <div
            className="mt-4 min-h-[100px] w-px flex-1 bg-gradient-to-b from-blue-500/35 via-blue-400/10 to-transparent lg:hidden"
            aria-hidden
          />
        )}
      </div>

      <div className="grid flex-1 if-split-copy-visual pb-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="min-w-0">
          <h3
            className={`font-semibold leading-tight tracking-tight text-zinc-100 ${
              featured ? "text-[1.95rem]" : "text-2xl sm:text-[1.75rem]"
            }`}
          >
            {step.title}
          </h3>
          <p className="if-after-title max-w-xl text-base leading-relaxed text-zinc-400">{step.body}</p>
        </div>

        <div>
          <StepVisual type={step.visual} featured={featured} />
        </div>
      </div>
    </motion.div>
  );
}

function StepVisual({
  type,
  featured,
}: {
  type: "catalog" | "setup" | "metrics";
  featured: boolean;
}) {
  if (type === "catalog") {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className="shadow-[0_60px_140px_-70px_rgba(0,0,0,0.9)]"
      >
        <HeroPanel className="h-full p-6 sm:p-7">
          <p className="if-eyebrow text-zinc-500">Catálogo</p>
          <div className="if-before-media rounded-xl border border-white/[0.07] bg-white/[0.04] p-5">
            <p className="text-base font-semibold text-white">iPhone 16 Pro</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">256 GB · Titanio · USD 1.349</p>
          </div>
        </HeroPanel>
      </motion.div>
    );
  }

  if (type === "setup") {
    const Wrapper = featured ? HeroPanelFeatured : HeroPanel;
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className=""
      >
        <Wrapper className="rounded-[calc(2rem-1px)] bg-[#07080c] p-6 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <span className="text-[11px] text-zinc-500">Web + IA</span>
            <ArrowUpRight className="h-4 w-4 text-zinc-600" />
          </div>
          <div className="if-before-media grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-4 text-center text-[10px] font-medium text-zinc-400">
              Sitio online
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-4 text-[10px] font-medium text-emerald-200">
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </div>
          </div>
        </Wrapper>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className="shadow-[0_60px_140px_-70px_rgba(0,0,0,0.9)]"
    >
      <HeroPanel className="h-full p-6 sm:p-7">
        <p className="if-eyebrow text-zinc-500">Métricas</p>
        <div className="if-before-media grid grid-cols-3 gap-3">
          {[
            { k: "+18", sub: "consultas" },
            { k: "3", sub: "cierres" },
            { k: "24/7", sub: "activo" },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-xl border border-white/[0.06] bg-white/[0.04] px-2 py-4 text-center"
            >
              <p className="text-sm font-semibold leading-tight text-zinc-100 sm:text-base">{m.k}</p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-zinc-600">{m.sub}</p>
            </div>
          ))}
        </div>
      </HeroPanel>
    </motion.div>
  );
}
