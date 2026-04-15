"use client";

import { motion } from "framer-motion";
import { Boxes, Rocket, Settings2 } from "lucide-react";
import { easeOut } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Nos pasás tu catálogo",
    body: "Modelos, precios, cuotas, zonas de envío y políticas. Lo ordenamos para web y para la IA.",
    icon: Boxes,
  },
  {
    n: "02",
    title: "Creamos tu web y configuramos la IA",
    body: "Diseño premium, rápido y mobile-first. Entrenamos respuestas con tu tono y reglas de negocio.",
    icon: Settings2,
  },
  {
    n: "03",
    title: "Empezás a recibir más consultas y ventas",
    body: "Atención instantánea 24/7, menos pérdidas por demora y más cierres con seguimiento claro.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-500/[0.07] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Simple. Rápido. Sin complicaciones.
        </motion.h2>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.08 * i, duration: 0.55, ease: easeOut }}
                className={`relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-7 shadow-glass backdrop-blur-xl ${
                  i === 1
                    ? "lg:-translate-y-2 lg:shadow-[0_40px_100px_-50px_rgba(59,130,246,0.45)]"
                    : ""
                }`}
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/30 to-blue-600/5 text-sm font-bold text-white">
                    {s.n}
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-200">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
