"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { easeOut } from "@/lib/motion";
import { ProductDeviceImage } from "@/components/ui/product-device-image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.72, ease: easeOut },
  }),
};

export const heroMotion = { fadeUp };

export function HeroReveal({
  children,
  className = "",
  delay = 0,
  y = 14,
  duration = 0.55,
  margin = "-80px",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  margin?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ delay, duration, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`if-panel ${className}`}>{children}</div>;
}

export function HeroPanelMuted({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`if-panel-muted ${className}`}>{children}</div>;
}

export function HeroPanelFeatured({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`if-panel-featured ${className}`}>{children}</div>;
}

export function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,16,1)_0%,rgba(6,8,13,1)_55%,rgba(4,5,8,1)_100%)]" />
      <div className="pointer-events-none absolute -left-36 top-20 h-[30rem] w-[30rem] rounded-full bg-blue-600/16 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-18%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="relative if-container">{children}</div>
    </section>
  );
}

export function HeroFloatBadge({
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
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6 + delay * 2, repeat: Infinity, ease: "easeInOut" }}
        className="if-panel-muted rounded-2xl px-3.5 py-2 text-[11px] font-medium text-zinc-200"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function HeroPrimaryVisual({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, rotateX: 3 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.92, ease: easeOut, delay: 0.12 }}
      style={{ perspective: 1200 }}
      className={`relative z-[1] scale-[1.03] lg:scale-[1.07] ${className}`}
    >
      <div className="rounded-[2rem] border border-white/[0.11] bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] shadow-[0_50px_130px_-58px_rgba(0,0,0,0.92)]">
        <div className="overflow-hidden rounded-[1.95rem] bg-[#06070b] p-3 sm:p-5">{children}</div>
      </div>
    </motion.div>
  );
}

export function HeroSecondaryVisual({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 46, x: 18 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.9, ease: easeOut, delay: 0.22 }}
      className={`relative z-[2] -mt-16 ml-auto w-[min(100%,22rem)] sm:w-[min(100%,24rem)] lg:absolute lg:-bottom-6 lg:right-0 lg:mt-0 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="rotate-[2.5deg] overflow-hidden rounded-[1.4rem] border border-white/[0.1] bg-[#0b141a] shadow-[0_40px_100px_-45px_rgba(16,185,129,0.45)] ring-1 ring-white/[0.07]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function HeroBrowserMockup() {
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

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="if-eyebrow">Catálogo</p>
            <p className="if-after-eyebrow text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              Importaciones Apple
            </p>
            <p className="if-after-title text-sm text-zinc-500">Buenos Aires · Envío nacional</p>
          </div>
        </div>

        <div className="if-before-media rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6 shadow-inner ring-1 ring-white/[0.04]">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">iPhone 16 Pro</p>
              <p className="mt-2 text-xl font-semibold text-white">256 GB · Titanio natural</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/15">
                  En stock
                </span>
                <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] text-zinc-400">
                  USD 1.349
                </span>
              </div>
            </div>
            <ProductDeviceImage
              alt="iPhone 16 Pro — Titanio natural"
              className="w-28 sm:w-32"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
            <span className="rounded-full bg-blue-500/15 px-3 py-1.5 text-[11px] font-medium text-blue-100 ring-1 ring-blue-400/20">
              Transferencia
            </span>
            <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/[0.08]">
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

export function HeroWhatsAppMockup() {
  return (
    <div className="flex min-h-[280px] flex-col">
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
          Sí, hay stock. USD 1.349 por transferencia o en cuotas. ¿Querés que lo reserve?
        </div>
        <div className="ml-auto max-w-[94%] rounded-2xl rounded-tr-md bg-[#005c4b] px-3 py-2 text-[12px] leading-snug text-white/95">
          Dale, reservámelo.
        </div>
        <div className="mr-auto max-w-[94%] rounded-2xl rounded-tl-md bg-[#202c33] px-3 py-2 text-[12px] leading-snug text-zinc-100">
          Listo, reservado. Te paso los datos para la transferencia.
        </div>
      </div>
    </div>
  );
}

export function HeroMessageMetric() {
  return (
    <span className="flex items-center gap-2">
      <MessageCircle className="h-3.5 w-3.5 text-blue-400" />
      +42 consultas hoy · respuesta &lt; 1 min
    </span>
  );
}
