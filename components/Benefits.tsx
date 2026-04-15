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
    body: "La IA cubre preguntas repetidas y vos entrás solo cuando importa.",
  },
  {
    title: "Imagen más profesional",
    body: "Una web moderna suma confianza y ordena precios, cuotas y stock.",
  },
  {
    title: "Clientes atendidos 24/7",
    body: "Consultas fuera de horario, feriados y picos: siempre con respuesta clara.",
  },
];

export function Benefits() {
  return (
    <section className="relative border-t border-white/[0.05] bg-[#06070b] py-32 sm:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_20%,rgba(59,130,246,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="max-w-[18ch] text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl"
        >
          Lo que cambia cuando automatizás tu negocio
        </motion.h2>

        <div className="mt-16 grid gap-14 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.06 * i, duration: 0.55, ease: easeOut }}
              className="border-l border-blue-500/25 pl-6 sm:pl-8"
            >
              <h3 className="text-lg font-semibold text-zinc-100">{b.title}</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-zinc-500">
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
