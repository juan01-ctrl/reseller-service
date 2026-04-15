"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Bot, Globe2, MousePointer2 } from "lucide-react";
import { useRef } from "react";
import { easeOut } from "@/lib/motion";

const webItems = [
  "Productos y precios",
  "Información de pago y cuotas",
  "Botón de WhatsApp",
  "Diseño moderno",
  "Adaptada a celular",
];

const aiItems = [
  "Responde preguntas automáticamente",
  "Informa stock, modelos y precios",
  "Atiende por WhatsApp y web",
  "Deriva conversaciones importantes",
  "Captura potenciales clientes",
];

export function Solution() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#050608] py-36 sm:py-48">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_15%_30%,rgba(59,130,246,0.09),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:gap-16 xl:gap-20">
          <div className="max-w-[28rem]">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: easeOut }}
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-blue-400/90"
            >
              Solución
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.04, ease: easeOut }}
              className="mt-5 text-4xl font-semibold leading-[1.06] tracking-tight text-zinc-50 sm:text-[2.75rem] sm:leading-[1.05]"
            >
              Todo lo que necesitás
              <br />
              para vender más
            </motion.h2>

            <div className="mt-12 space-y-6">
              <FeatureCard
                title="Web profesional para tu negocio"
                items={webItems}
                icon={Globe2}
                accent="blue"
                trustLine="Listo en pocos días"
              />
              <FeatureCard
                title="Asistente con IA 24/7"
                items={aiItems}
                icon={Bot}
                accent="emerald"
                trustLine="Responde incluso mientras dormís"
              />
            </div>
          </div>

          <SolutionScene />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  items,
  icon: Icon,
  accent,
  trustLine,
}: {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  accent: "blue" | "emerald";
  trustLine: string;
}) {
  const ring =
    accent === "blue"
      ? "border-blue-500/15 bg-gradient-to-br from-blue-500/[0.08] to-transparent"
      : "border-emerald-500/15 bg-gradient-to-br from-emerald-500/[0.07] to-transparent";
  const dot = accent === "blue" ? "bg-blue-400/80" : "bg-emerald-400/80";
  const iconBg =
    accent === "blue"
      ? "border-blue-400/20 bg-blue-500/10 text-blue-200"
      : "border-emerald-400/20 bg-emerald-500/10 text-emerald-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: easeOut }}
      className={`relative overflow-hidden rounded-[1.75rem] border p-6 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.04] backdrop-blur-sm ${ring}`}
    >
      <div className="pointer-events-none absolute -right-12 top-0 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl" />
      <div className="relative flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${iconBg}`}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-semibold tracking-tight text-zinc-100">
            {title}
          </h3>
          <p className="mt-2 text-[11px] font-medium text-zinc-600">{trustLine}</p>
        </div>
      </div>
      <ul className="relative mt-5 space-y-2.5 border-t border-white/[0.06] pt-5">
        {items.map((line) => (
          <li key={line} className="flex gap-3 text-[14px] leading-snug text-zinc-400">
            <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${dot}`} />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SolutionScene() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 420, damping: 35 });
  const sy = useSpring(my, { stiffness: 420, damping: 35 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 14);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="relative min-h-[480px] lg:min-h-[560px]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120%,520px)] w-[min(120%,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(59,130,246,0.22),transparent_62%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 top-6 z-30 hidden rounded-2xl border border-white/[0.1] bg-zinc-950/85 px-3.5 py-2 text-[11px] font-medium text-zinc-200 shadow-2xl backdrop-blur-xl ring-1 ring-white/[0.06] sm:right-4 sm:top-10 sm:block"
      >
        +42 consultas respondidas hoy
      </motion.div>

      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative z-[1] mx-auto max-w-[640px] lg:max-w-none"
      >
        <div className="rounded-[2rem] border border-white/[0.09] bg-gradient-to-b from-zinc-900/90 to-[#030508] p-[1px] shadow-[0_60px_140px_-70px_rgba(0,0,0,0.95)] ring-1 ring-white/[0.05]">
          <div className="overflow-hidden rounded-[1.95rem]">
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-black/55 px-5 py-3.5">
              <span className="text-[12px] text-zinc-500">
                importacionesapple.com.ar
              </span>
              <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                IA activa
              </span>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="border-b border-white/[0.05] p-6 lg:border-b-0 lg:border-r">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Catálogo
                </p>
                <motion.div
                  style={{ x: sx, y: sy }}
                  className="relative mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 ring-1 ring-white/[0.04]"
                >
                  <div className="pointer-events-none absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-zinc-500 shadow-lg">
                    <MousePointer2 className="h-3.5 w-3.5" aria-hidden />
                  </div>
                  <div className="flex gap-4">
                    <div className="h-24 w-20 shrink-0 rounded-xl bg-gradient-to-br from-zinc-600/40 to-zinc-950 ring-1 ring-white/10" />
                    <div className="min-w-0 pt-0.5">
                      <p className="text-base font-semibold text-white">iPhone 16 Pro</p>
                      <p className="mt-1 text-[12px] text-zinc-500">256 GB · Titanio</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                          Stock disponible
                        </span>
                        <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] text-zinc-300 ring-1 ring-white/[0.08]">
                          6 cuotas
                        </span>
                      </div>
                      <p className="mt-4 text-sm font-semibold text-zinc-100">USD 1.349</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-5 w-full rounded-full bg-blue-500/25 py-2.5 text-[12px] font-semibold text-blue-100 ring-1 ring-blue-400/25 transition hover:bg-blue-500/35"
                  >
                    Consultar por WhatsApp
                  </button>
                </motion.div>
              </div>

              <div className="relative bg-[#0b141a] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Asistente
                </p>
                <div className="mt-4 space-y-2.5">
                  <div className="ml-auto max-w-[95%] rounded-2xl rounded-tr-md bg-[#005c4b] px-3 py-2 text-[12px] text-white/95">
                    ¿Precio en cuotas?
                  </div>
                  <div className="mr-auto max-w-[95%] rounded-2xl rounded-tl-md bg-[#1f2c33] px-3 py-2 text-[12px] text-zinc-200">
                    Sí: 3 y 6 cuotas con recargo según banco.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.05] bg-black/40 px-5 py-3.5 text-[11px] text-zinc-600">
              <span>Web → WhatsApp · mismo contexto</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-600" />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
        className="absolute -bottom-2 right-0 z-20 w-[min(100%,17rem)] rotate-[2deg] sm:bottom-4 sm:right-2 lg:-bottom-4 lg:right-[-0.5rem]"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0b141a] shadow-[0_40px_100px_-50px_rgba(16,185,129,0.35)] ring-1 ring-white/[0.06]"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#1f2c33] px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600" />
            <div>
              <p className="text-[11px] font-semibold text-white">WhatsApp</p>
              <p className="text-[9px] text-emerald-400/95">en línea</p>
            </div>
          </div>
          <div className="space-y-2 p-3">
            <div className="ml-auto max-w-[95%] rounded-xl rounded-tr-sm bg-[#005c4b] px-2.5 py-1.5 text-[11px] text-white/95">
              ¿Tenés stock del 16 Pro?
            </div>
            <div className="mr-auto max-w-[95%] rounded-xl rounded-tl-sm bg-[#202c33] px-2.5 py-1.5 text-[11px] text-zinc-200">
              Sí, 256 GB disponible.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
