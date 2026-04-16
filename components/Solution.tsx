"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Bot, Globe2, MessageCircle, MousePointer2 } from "lucide-react";
import { useRef } from "react";
import { easeOut } from "@/lib/motion";
import { HeroPanelFeatured, HeroPanelMuted, HeroReveal } from "@/components/ui/hero";

const valueCards = [
  {
    title: "Web que da confianza",
    body: "Catálogo claro y precios visibles para decidir más rápido.",
    meta: "Más intención de compra",
    icon: Globe2,
    featured: false,
  },
  {
    title: "IA con contexto real",
    body: "Responde stock, cuotas y disponibilidad con criterio comercial.",
    meta: "< 1 min de respuesta",
    icon: Bot,
    featured: true,
  },
  {
    title: "WhatsApp para cerrar",
    body: "Cada conversación avanza con siguiente paso claro.",
    meta: "Menos chats perdidos",
    icon: MessageCircle,
    featured: false,
  },
];

const proofStats = [
  { label: "Respuesta", value: "< 1 min" },
  { label: "Consultas atendidas", value: "24/7" },
  { label: "Conversación", value: "Con contexto" },
];

export function Solution() {
  return (
    <section className="if-section border-y border-white/[0.06] bg-[#05070b]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_15%_30%,rgba(59,130,246,0.08),transparent_55%)]" />
      <div className="relative if-container">
        <div className="mx-auto max-w-[62rem]">
          <HeroReveal className="if-eyebrow" margin="-100px" duration={0.55}>
            Solución
          </HeroReveal>
          <HeroReveal
            className="if-after-section-eyebrow if-h2 flex max-w-3xl flex-col gap-1.5 sm:gap-2"
            y={18}
            delay={0.04}
            margin="-100px"
            duration={0.6}
          >
            <span className="block text-zinc-50">Convertís mejor</span>
            <span className="block text-zinc-400">sin sumar carga operativa.</span>
          </HeroReveal>
          <HeroReveal className="if-after-h2-lead max-w-[44ch] if-lead" delay={0.08} margin="-100px">
            Unificamos web y asistente IA para que cada consulta tenga respuesta clara y orientada a cierre.
          </HeroReveal>
          <HeroReveal className="mt-8 space-y-4" delay={0.12} margin="-100px">
            {valueCards
              .filter((card) => card.featured)
              .map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: 0.05 * i, duration: 0.5, ease: easeOut }}
                    className=""
                  >
                    <HeroPanelFeatured className="h-full p-6 sm:p-7">
                      <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-300/25 bg-blue-500/15 text-blue-100">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                          {card.meta}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold leading-tight text-zinc-100 sm:text-xl">
                          {card.title}
                        </h3>
                        <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-zinc-300">{card.body}</p>
                      </div>
                      </div>
                    </HeroPanelFeatured>
                  </motion.article>
                );
              })}

            <div className="grid gap-3 md:grid-cols-2">
              {valueCards
                .filter((card) => !card.featured)
                .map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <motion.article
                      key={card.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ delay: 0.05 * (i + 1), duration: 0.5, ease: easeOut }}
                      className=""
                    >
                      <HeroPanelMuted className="h-full p-5 sm:p-6">
                        <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.05] text-zinc-300">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                            {card.meta}
                          </p>
                          <h3 className="mt-2 text-base font-semibold leading-tight text-zinc-100 sm:text-lg">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{card.body}</p>
                        </div>
                      </div>
                      </HeroPanelMuted>
                    </motion.article>
                  );
                })}
            </div>
          </HeroReveal>
        </div>

        <div className="if-after-heading-block">
          <SolutionScene />
        </div>

      </div>
    </section>
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
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 12);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 12);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="relative"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120%,540px)] w-[min(120%,680px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(59,130,246,0.2),transparent_62%)] blur-3xl" />

      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative z-[1] mx-auto max-w-[680px]"
      >
        <div className="if-panel-featured overflow-hidden p-[1px]">
          <div className="rounded-[calc(2rem-1px)] bg-[#06080d]">
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-black/55 px-5 py-3.5">
              <span className="text-[12px] text-zinc-500">importacionesapple.com.ar</span>
              <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                IA activa
              </span>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="border-b border-white/[0.05] p-6 lg:border-b-0 lg:border-r">
                <p className="if-eyebrow text-zinc-500">Catálogo web</p>
                <motion.div
                  style={{ x: sx, y: sy }}
                  className="if-before-media relative rounded-2xl border border-white/[0.09] bg-white/[0.05] p-6 ring-1 ring-white/[0.05]"
                >
                  <div className="pointer-events-none absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-zinc-500 shadow-lg">
                    <MousePointer2 className="h-3.5 w-3.5" aria-hidden />
                  </div>
                  <div className="flex gap-4">
                    <div className="h-28 w-20 shrink-0 rounded-xl bg-gradient-to-br from-zinc-600/40 to-zinc-950 ring-1 ring-white/10 sm:h-32 sm:w-24" />
                    <div className="min-w-0 pt-0.5">
                      <p className="text-lg font-semibold text-white sm:text-xl">iPhone 16 Pro</p>
                      <p className="mt-1 text-[12px] text-zinc-500">256 GB · Titanio</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                          Stock disponible
                        </span>
                        <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] text-zinc-300 ring-1 ring-white/[0.08]">
                          6 cuotas
                        </span>
                      </div>
                      <p className="mt-5 text-base font-semibold text-zinc-100 sm:text-lg">USD 1.349</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-6 w-full rounded-full bg-blue-500/25 py-3 text-[12px] font-semibold text-blue-100 ring-1 ring-blue-400/25 transition hover:bg-blue-500/35"
                  >
                    Consultar por WhatsApp
                  </button>
                </motion.div>
              </div>

              <div className="relative bg-[#0b141a] p-6">
                <p className="if-eyebrow text-zinc-600">Asistente</p>
                <div className="if-before-media space-y-2.5">
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
              <span>Web a WhatsApp con el mismo contexto</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] mx-auto mt-5 grid max-w-[680px] grid-cols-3 gap-2.5">
        {proofStats.map((item) => (
          <HeroPanelMuted
            key={item.label}
            className="px-3 py-2.5 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">{item.label}</p>
            <p className="mt-1.5 text-sm font-semibold text-zinc-200 sm:text-base">{item.value}</p>
          </HeroPanelMuted>
        ))}
      </div>
    </motion.div>
  );
}
