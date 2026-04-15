"use client";

import { motion } from "framer-motion";
import { Clock, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { easeOut } from "@/lib/motion";

const benefits = [
  {
    title: "Más ventas",
    body: "Respondés al instante y cerrás antes de que el cliente se vaya con la competencia.",
    icon: LineChart,
    span: "lg:col-span-7",
  },
  {
    title: "Menos tiempo respondiendo",
    body: "La IA cubre preguntas repetidas y vos entrás solo cuando importa.",
    icon: Clock,
    span: "lg:col-span-5",
  },
  {
    title: "Imagen más profesional",
    body: "Una web moderna suma confianza y ordena precios, cuotas y stock.",
    icon: ShieldCheck,
    span: "lg:col-span-5",
  },
  {
    title: "Clientes atendidos 24/7",
    body: "Consultas fuera de horario, feriados y picos: siempre con respuesta clara.",
    icon: Sparkles,
    span: "lg:col-span-7",
  },
];

export function Benefits() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Lo que cambia cuando automatizás tu negocio
        </motion.h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {benefits.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 * i, duration: 0.55, ease: easeOut }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02] p-7 shadow-card backdrop-blur-xl ${b.span}`}
            >
              <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/15" />
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-blue-200">
                <b.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                {b.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                {b.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
