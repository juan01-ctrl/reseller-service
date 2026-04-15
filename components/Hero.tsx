"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  Clock,
  Sparkles,
  TrendingDown,
} from "lucide-react";
import { CtaButtons } from "@/components/CtaButtons";
import { easeOut } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.65, ease: easeOut },
  }),
};

function FloatingBadge({
  icon,
  text,
  className = "",
  delay = 0,
}: {
  icon: React.ReactNode;
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.55, ease: easeOut }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex max-w-[240px] items-center gap-2.5 rounded-2xl border border-white/[0.12] bg-zinc-950/75 px-3.5 py-2.5 text-xs font-medium text-zinc-100 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl"
      >
        <span className="text-blue-400">{icon}</span>
        <span className="leading-snug">{text}</span>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pb-36">
      <div className="pointer-events-none absolute inset-0 bg-glow-blue" />
      <div className="pointer-events-none absolute inset-0 bg-glow-soft" />
      <div className="pointer-events-none absolute -left-48 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-[min(90%,42rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_65%)] blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-16 xl:gap-20">
          <div className="max-w-2xl">
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              ImportaFlow · Web + IA para importadores Apple
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl sm:leading-[1.05] lg:text-[3.65rem] lg:leading-[1.02]"
            >
              Dejá de perder ventas por responder tarde
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-zinc-400 sm:text-xl sm:leading-relaxed"
            >
              Creamos tu web + un asistente con IA que responde automáticamente
              WhatsApp y consultas de clientes 24/7.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10"
            >
              <div className="relative rounded-[1.35rem] border border-white/[0.12] bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-1 shadow-glass">
                <div className="rounded-[1.2rem] bg-zinc-950/40 px-4 py-4 sm:px-5 sm:py-5">
                  <CtaButtons variant="emphasis" />
                </div>
              </div>
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-8 text-sm leading-relaxed text-zinc-500"
            >
              Implementación guiada · Enfoque en conversión · Soporte humano
              cuando hace falta
            </motion.p>
          </div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(ellipse_at_80%_60%,rgba(99,102,241,0.2),transparent_50%)] blur-3xl" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[80px]" />

            <FloatingBadge
              className="absolute -left-2 top-6 z-20 hidden sm:left-0 sm:top-10 sm:block"
              delay={0}
              icon={<Clock className="h-4 w-4" />}
              text="24/7"
            />
            <FloatingBadge
              className="absolute -right-1 top-[28%] z-20 hidden sm:right-0 sm:block"
              delay={0.15}
              icon={<TrendingDown className="h-4 w-4" />}
              text="-70% tiempo respondiendo mensajes"
            />
            <FloatingBadge
              className="absolute bottom-8 left-4 z-20 hidden sm:bottom-10 sm:left-6 sm:block"
              delay={0.3}
              icon={<Bell className="h-4 w-4" />}
              text="+40 consultas respondidas por día"
            />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 32, rotate: -0.5 }}
                animate={{ opacity: 1, y: 0, rotate: -0.8 }}
                transition={{ duration: 0.85, ease: easeOut, delay: 0.15 }}
                className="relative z-[1]"
              >
                <div className="rounded-[1.85rem] border border-white/[0.1] bg-gradient-to-br from-white/[0.12] to-white/[0.02] p-[1px] shadow-glass">
                  <div className="overflow-hidden rounded-[1.8rem] bg-zinc-950/40 p-3 backdrop-blur-2xl">
                    <BrowserMock />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40, x: 16 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.28 }}
                className="relative z-[2] -mt-10 ml-auto w-[min(100%,20rem)] sm:-mt-14 sm:mr-2 lg:absolute lg:-bottom-6 lg:right-0 lg:mt-0 lg:w-[min(100%,22rem)]"
              >
                <div className="rotate-[1.2deg] rounded-2xl border border-white/[0.14] bg-gradient-to-br from-emerald-500/10 via-[#0b141a] to-[#0b141a] p-[1px] shadow-[0_30px_80px_-40px_rgba(16,185,129,0.45)]">
                  <div className="overflow-hidden rounded-[0.95rem]">
                    <WhatsAppMock />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:hidden">
              <FloatingBadge
                className="!block"
                delay={0}
                icon={<Clock className="h-4 w-4" />}
                text="24/7"
              />
              <FloatingBadge
                className="!block"
                delay={0.1}
                icon={<Bell className="h-4 w-4" />}
                text="+40 consultas respondidas por día"
              />
              <FloatingBadge
                className="!block"
                delay={0.2}
                icon={<TrendingDown className="h-4 w-4" />}
                text="-70% tiempo respondiendo mensajes"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BrowserMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/95 to-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex items-center gap-2 border-b border-white/5 bg-black/30 px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/85" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/85" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/85" />
        </div>
        <div className="mx-auto flex max-w-[min(100%,240px)] flex-1 items-center gap-1 rounded-lg border border-white/5 bg-black/50 px-2.5 py-1 text-[10px] text-zinc-400">
          <span className="truncate">importacionesapple.com.ar</span>
          <ArrowUpRight className="ml-auto h-3 w-3 shrink-0 opacity-70" />
        </div>
      </div>
      <div className="space-y-5 p-4 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400/95">
              Catálogo · iPhone
            </p>
            <p className="mt-2 text-xl font-bold tracking-tight text-white">
              Importaciones Apple
            </p>
            <p className="mt-1.5 text-sm text-zinc-500">
              Stock en Buenos Aires · Envíos a todo el país
            </p>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
            En stock
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { t: "iPhone 16 Pro", s: "256 GB · Titanio" },
            { t: "iPhone 15", s: "128 GB · Negro" },
          ].map((p) => (
            <div
              key={p.t}
              className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-3 shadow-inner"
            >
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-700/80 via-zinc-800 to-zinc-950 ring-1 ring-white/5" />
              <p className="mt-2.5 text-sm font-semibold text-white">{p.t}</p>
              <p className="text-xs text-zinc-500">{p.s}</p>
              <p className="mt-2 text-sm font-semibold text-zinc-200">
                Consultar USD
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhatsAppMock() {
  return (
    <div className="flex h-full min-h-[280px] flex-col overflow-hidden bg-[#0b141a]">
      <div className="flex items-center gap-2.5 border-b border-white/5 bg-[#1f2c33]/95 px-3 py-2.5 backdrop-blur">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 ring-2 ring-white/10" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">
            Asistente ImportaFlow
          </p>
          <p className="text-[10px] text-emerald-400/95">
            en línea · responde al instante
          </p>
        </div>
      </div>
      <div className="flex-1 space-y-2.5 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2280%22%20height=%2280%22%20viewBox=%220%200%2080%2080%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.02%22%3E%3Cpath%20d=%22M0%200h40v40H0zM40%2040h40v40H40z%22/%3E%3C/g%3E%3C/svg%3E')] p-3">
        <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-sm bg-[#005c4b] px-3 py-2 text-[13px] leading-snug text-white/95 shadow-lg ring-1 ring-white/10">
          ¿Tenés iPhone 16 Pro 256GB disponible?
        </div>
        <div className="mr-auto max-w-[92%] rounded-2xl rounded-tl-sm bg-[#202c33] px-3 py-2 text-[13px] leading-snug text-zinc-100 shadow-lg ring-1 ring-white/5">
          Sí, tenemos iPhone 16 Pro 256GB en stock. Disponible en negro y
          titanio. ¿Querés reservarlo?
        </div>
      </div>
      <div className="border-t border-white/5 bg-[#0b141a] px-3 py-2">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1f2c33] px-3 py-1.5 text-[11px] text-zinc-500">
          Escribí un mensaje…
        </div>
      </div>
    </div>
  );
}
