"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Globe2,
  LayoutGrid,
  MessageCircle,
  MousePointerClick,
  Sparkles,
} from "lucide-react";
import { easeOut } from "@/lib/motion";

const webPoints = [
  "Productos y precios",
  "Información de pago y cuotas",
  "Botón de WhatsApp",
  "Diseño moderno",
  "Adaptada a celular",
];

const aiPoints = [
  "Responde preguntas automáticamente",
  "Informa stock, modelos y precios",
  "Atiende por WhatsApp y web",
  "Deriva conversaciones importantes",
  "Captura potenciales clientes",
];

export function Solution() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/[0.07] via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Todo lo que necesitás para vender más
        </motion.h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <FeatureCard
            className="lg:col-span-7"
            title="Web profesional para tu negocio"
            icon={Globe2}
            points={webPoints}
            variant="web"
          />
          <FeatureCard
            className="lg:col-span-5"
            title="Asistente con IA 24/7"
            icon={Bot}
            points={aiPoints}
            variant="ai"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-br from-white/[0.08] via-zinc-950/60 to-zinc-950 shadow-glass backdrop-blur-2xl"
        >
          <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/35 p-5 shadow-inner lg:col-span-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <LayoutGrid className="h-4 w-4 text-blue-400" />
                  Panel ImportaFlow
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-400/20">
                  IA activa
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <MiniStat label="Consultas hoy" value="42" delta="+18%" />
                <MiniStat label="Tiempo ahorrado" value="3h 20m" delta="-62%" />
                <MiniStat label="Reservas" value="7" delta="+3" />
              </div>
              <div className="mt-5 rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-4">
                <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500">
                  <span>Embudo · Web → WhatsApp</span>
                  <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                </div>
                <div className="mt-4 flex h-28 items-end gap-1.5">
                  {[40, 55, 48, 72, 64, 88, 76].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.04 * i, ease: easeOut }}
                      className="flex-1 rounded-md bg-gradient-to-t from-blue-700/50 to-blue-400/90 shadow-[0_8px_30px_-12px_rgba(59,130,246,0.55)]"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-5 lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Flujo unificado
              </p>
              <div className="space-y-3">
                <FlowRow
                  icon={Globe2}
                  title="Tu web muestra catálogo y precios"
                  sub="Los clientes entran con más confianza"
                />
                <FlowRow
                  icon={MessageCircle}
                  title="WhatsApp y chat web con la misma IA"
                  sub="Respuestas consistentes, sin repetir"
                />
                <FlowRow
                  icon={MousePointerClick}
                  title="CTA claro en cada paso"
                  sub="Más consultas calificadas, menos fricción"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  icon: Icon,
  points,
  variant,
  className = "",
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  points: string[];
  variant: "web" | "ai";
  className?: string;
}) {
  const isWeb = variant === "web";
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: easeOut }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-gradient-to-br p-7 shadow-card backdrop-blur-2xl sm:p-8 ${
        isWeb
          ? "from-blue-500/20 via-white/[0.04] to-indigo-500/10"
          : "from-emerald-500/15 via-white/[0.03] to-cyan-500/10"
      } ${className}`}
    >
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl ${
          isWeb ? "bg-blue-500/25" : "bg-emerald-500/20"
        }`}
      />
      <div className="relative flex items-start gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-white shadow-inner ${
            isWeb
              ? "border-white/15 bg-white/10"
              : "border-emerald-400/20 bg-emerald-500/10"
          }`}
        >
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-white sm:text-[1.35rem]">
            {title}
          </h3>
        </div>
      </div>
      <ul
        className={`relative mt-7 grid gap-3 sm:grid-cols-2 ${
          isWeb ? "sm:grid-cols-2" : "sm:grid-cols-1"
        }`}
      >
        {points.map((p) => (
          <li
            key={p}
            className="flex gap-3 rounded-xl border border-white/[0.05] bg-black/15 px-3 py-2.5 text-sm text-zinc-200"
          >
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                isWeb ? "bg-blue-400" : "bg-emerald-400"
              }`}
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function MiniStat({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-3 shadow-inner">
      <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
        {label}
      </p>
      <p className="mt-1 text-lg font-bold text-white">{value}</p>
      <p className="text-[11px] font-medium text-emerald-400">{delta}</p>
    </div>
  );
}

function FlowRow({
  icon: Icon,
  title,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 2 }}
      className="flex gap-3 rounded-xl border border-white/[0.06] bg-black/25 px-3 py-3 transition hover:border-white/15"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
        <Icon className="h-4 w-4 text-blue-300" />
      </div>
      <div>
        <p className="text-sm font-semibold text-zinc-100">{title}</p>
        <p className="text-xs text-zinc-500">{sub}</p>
      </div>
    </motion.div>
  );
}
