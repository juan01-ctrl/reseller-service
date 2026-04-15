"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const benefits = [
  {
    title: "Más ventas",
    body: "Respondés al instante y cerrás antes de que el cliente se vaya con la competencia.",
  },
  {
    title: "Menos tiempo respondiendo",
    body: "La IA cubre lo repetitivo; vos entrás cuando hace falta criterio.",
  },
  {
    title: "Imagen más profesional",
    body: "Web moderna con precios, cuotas y stock ordenados para decidir más rápido.",
  },
  {
    title: "Clientes atendidos 24/7",
    body: "Picos, noches y feriados con respuesta clara y consistente.",
  },
];

export function Benefits() {
  const [primary, ...rest] = benefits;

  return (
    <section className="if-section-tight border-t border-white/[0.06] bg-[#06070b]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_20%,rgba(59,130,246,0.06),transparent_55%)]" />
      <div className="relative if-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="if-eyebrow"
        >
          Impacto
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="if-after-section-eyebrow if-h2 max-w-[22ch]"
        >
          Lo que cambia cuando automatizás
        </motion.h2>

        <div className="if-after-heading-block space-y-6">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="if-panel-featured p-9 sm:p-11 lg:p-12"
          >
            <p className="if-eyebrow">Impacto principal</p>
            <h3 className="if-after-eyebrow text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {primary.title}
            </h3>
            <p className="if-after-title max-w-[52ch] text-lg leading-relaxed text-zinc-300">{primary.body}</p>
          </motion.article>

          <div className="grid gap-4 md:grid-cols-3">
            {rest.map((b, i) => (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.06 * (i + 1), duration: 0.55, ease: easeOut }}
                className="if-panel-muted p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-100">{b.title}</h3>
                <p className="if-after-title text-sm leading-relaxed text-zinc-400">{b.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
