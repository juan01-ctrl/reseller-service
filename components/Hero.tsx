"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MessageCircle, Sparkles, TrendingUp } from "lucide-react";
import { CtaButtons } from "@/components/CtaButtons";
import { easeOut } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.75, ease: easeOut },
  }),
};

function FloatBadge({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: easeOut }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5 + delay * 2, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-[1.25rem] border border-white/[0.08] bg-zinc-950/80 px-3.5 py-2 text-[11px] font-medium text-zinc-200 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl ring-1 ring-white/[0.04]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-32 sm:pt-44 sm:pb-40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,18,1)_0%,rgba(7,8,12,1)_45%,rgba(6,8,14,1)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Cg fill=%22%23fff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M0 0h40v1H0zM0 0v40h1V0z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-90" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-blue-600/18 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-20%] top-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-600/12 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[min(70vh,520px)] w-[min(100%,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_68%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="grid items-start gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-24">
          <div className="max-w-[34rem]">
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              ImportaFlow · Web + IA para importadores Apple
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-[2.65rem] font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl sm:leading-[1.02] lg:text-[3.75rem]"
            >
              Dejá de perder ventas
              <br />
              <span className="text-zinc-200">por responder tarde</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-500 sm:text-xl"
            >
              Creamos tu web + un asistente con IA que responde automáticamente
              WhatsApp y consultas de clientes 24/7.
            </motion.p>

            <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="mt-12">
              <CtaButtons variant="emphasis" />
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 text-sm text-zinc-600"
            >
              Implementación guiada · Enfoque en conversión · Soporte humano cuando
              hace falta
            </motion.p>
          </div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative min-h-[420px] lg:min-h-[520px]"
          >
            <div className="pointer-events-none absolute inset-[-8%] -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_40%_30%,rgba(59,130,246,0.28),transparent_58%),radial-gradient(ellipse_at_90%_70%,rgba(99,102,241,0.15),transparent_55%)] blur-2xl" />

            <FloatBadge
              className="absolute left-0 top-4 z-30 hidden sm:left-2 sm:top-8 sm:block"
              delay={0}
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-3.5 w-3.5 text-blue-400" />
                +42 consultas respondidas hoy
              </span>
            </FloatBadge>
            <FloatBadge
              className="absolute right-0 top-[22%] z-30 hidden sm:right-2 sm:block"
              delay={0.12}
            >
              <span className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-blue-400" />
                24/7
              </span>
            </FloatBadge>
            <FloatBadge
              className="absolute bottom-16 left-6 z-30 hidden sm:bottom-20 sm:left-10 sm:block"
              delay={0.24}
            >
              <span className="flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                +3 ventas cerradas esta semana
              </span>
            </FloatBadge>

            <motion.div
              initial={{ opacity: 0, y: 36, rotateX: 4 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.95, ease: easeOut, delay: 0.12 }}
              style={{ perspective: 1200 }}
              className="relative z-[1]"
            >
              <div className="rounded-[2rem] border border-white/[0.09] bg-gradient-to-b from-white/[0.06] to-transparent p-[1px] shadow-[0_40px_120px_-50px_rgba(0,0,0,0.85)]">
                <div className="overflow-hidden rounded-[1.95rem] bg-[#07080c] p-3 sm:p-4">
                  <BrowserHero />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 44, x: 24 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.95, ease: easeOut, delay: 0.22 }}
              className="relative z-[2] -mt-16 ml-auto w-[min(100%,19.5rem)] sm:w-[min(100%,21rem)] lg:absolute lg:-bottom-4 lg:right-0 lg:mt-0"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rotate-[2deg] rounded-[1.35rem] border border-white/[0.12] bg-[#0b141a] shadow-[0_40px_100px_-45px_rgba(16,185,129,0.55)] ring-1 ring-white/[0.06]"
              >
                <WhatsAppHero />
              </motion.div>
            </motion.div>

            <div className="mt-10 flex flex-wrap justify-center gap-2 sm:hidden">
              <FloatBadge className="!block" delay={0}>
                <span className="flex items-center gap-2 text-[10px]">
                  <MessageCircle className="h-3.5 w-3.5 text-blue-400" />
                  +42 consultas hoy
                </span>
              </FloatBadge>
              <FloatBadge className="!block" delay={0.05}>
                <span className="flex items-center gap-2 text-[10px]">
                  <Clock className="h-3.5 w-3.5 text-blue-400" />24/7
                </span>
              </FloatBadge>
              <FloatBadge className="!block" delay={0.1}>
                <span className="flex items-center gap-2 text-[10px]">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                  +3 ventas
                </span>
              </FloatBadge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BrowserHero() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-zinc-900/90 to-[#050608]">
      <div className="flex items-center gap-3 border-b border-white/[0.05] bg-black/40 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90" />
        </div>
        <div className="mx-auto flex max-w-[280px] flex-1 items-center gap-2 rounded-lg border border-white/[0.06] bg-black/60 px-3 py-1.5 text-[11px] text-zinc-500">
          <span className="truncate">importacionesapple.com.ar</span>
          <ArrowUpRight className="ml-auto h-3 w-3 opacity-50" />
        </div>
      </div>

      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-blue-400/90">
              Catálogo
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">
              Importaciones Apple
            </p>
            <p className="mt-1 text-sm text-zinc-500">Buenos Aires · Envíos AR</p>
          </div>
        </div>

        <div className="mt-8 rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-5 shadow-inner ring-1 ring-white/[0.04]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                iPhone 16 Pro
              </p>
              <p className="mt-1 text-lg font-semibold text-white">256 GB · Titanio natural</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/15">
                  En stock
                </span>
                <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] text-zinc-400">
                  USD 1.349
                </span>
              </div>
            </div>
            <div className="aspect-[4/5] w-24 shrink-0 rounded-xl bg-gradient-to-br from-zinc-600/40 via-zinc-800 to-zinc-950 ring-1 ring-white/10" />
          </div>
          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
            <span className="rounded-full bg-blue-500/15 px-3 py-1.5 text-[11px] font-medium text-blue-100 ring-1 ring-blue-400/20">
              Transferencia
            </span>
            <span className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/[0.08]">
              Cuotas
            </span>
            <span className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[11px] text-zinc-500">
              Retiro / envío
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppHero() {
  return (
    <div className="flex min-h-[240px] flex-col">
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#1a262d] px-3 py-2.5">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 ring-2 ring-black/30" />
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-white">Asistente</p>
          <p className="text-[10px] text-emerald-400/95">en línea</p>
        </div>
      </div>
      <div className="flex-1 space-y-2 bg-[#0b141a] p-3">
        <div className="ml-auto max-w-[94%] rounded-2xl rounded-tr-md bg-[#005c4b] px-3 py-2 text-[12px] leading-snug text-white/95">
          ¿Tenés 16 Pro 256 titanio?
        </div>
        <div className="mr-auto max-w-[94%] rounded-2xl rounded-tl-md bg-[#202c33] px-3 py-2 text-[12px] leading-snug text-zinc-100">
          Sí, stock disponible. USD 1.349 por transferencia o en cuotas. ¿Reservamos?
        </div>
      </div>
    </div>
  );
}
