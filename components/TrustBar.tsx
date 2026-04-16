"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { HeroPanelFeatured, HeroPanelMuted, HeroReveal } from "@/components/ui/hero";

const metrics = [
  {
    label: "Tiempo de respuesta promedio",
    stat: "< 1 min",
    sub: "consultas de stock, cuotas y disponibilidad",
  },
  {
    label: "Más cierres",
    stat: "+32%",
    sub: "vs. solo WhatsApp manual",
  },
  {
    label: "Menos trabajo repetitivo",
    stat: "-70%",
    sub: "menos tiempo en preguntas repetidas",
  },
];

export function TrustBar() {
  return (
    <section className="if-section-tight">
      <div className="if-container">
        <HeroReveal className="relative overflow-hidden if-panel p-8 sm:p-10 lg:p-12" duration={0.5}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_100%_0%,rgba(59,130,246,0.08),transparent_56%)]" />

          <div className="relative grid if-split-copy-visual lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-end">
            <div>
              <p className="if-eyebrow">Prueba operativa</p>
              <p className="if-after-eyebrow text-2xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-3xl">
                Atención constante sin sumar equipo.
              </p>
              <p className="if-after-title max-w-[40ch] text-sm leading-relaxed text-zinc-500">
                Hecho para importadores que viven entre Instagram, WhatsApp y consultas urgentes.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.article
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: easeOut }}
                className=""
              >
                <HeroPanelFeatured className="h-full p-8 sm:p-9">
                  <p className="font-mono text-5xl font-semibold leading-none tracking-tight text-zinc-50 sm:text-6xl">
                    {metrics[0].stat}
                  </p>
                  <p className="mt-4 text-sm font-medium text-zinc-200">{metrics[0].label}</p>
                  <p className="mt-2 text-sm text-zinc-400">{metrics[0].sub}</p>
                </HeroPanelFeatured>
              </motion.article>

              <div className="grid gap-4">
                {metrics.slice(1).map((m, i) => (
                  <motion.article
                    key={m.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: 0.06 * (i + 1), duration: 0.45, ease: easeOut }}
                    className=""
                  >
                    <HeroPanelMuted className="h-full p-5 sm:p-6">
                      <p className="font-mono text-2xl font-semibold text-blue-100 sm:text-3xl">{m.stat}</p>
                      <p className="mt-2 text-sm font-medium text-zinc-200">{m.label}</p>
                      <p className="mt-1.5 text-xs leading-snug text-zinc-500">{m.sub}</p>
                    </HeroPanelMuted>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </HeroReveal>
      </div>
    </section>
  );
}
