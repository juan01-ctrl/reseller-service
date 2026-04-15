"use client";

import { motion } from "framer-motion";
import { Clock3, MessageSquareOff, Smartphone } from "lucide-react";
import { easeOut } from "@/lib/motion";

const items = [
  {
    title: "Responden tarde",
    body: "Los clientes preguntan por stock, precio o cuotas y terminan comprando en otro lado.",
    icon: Clock3,
    accent: "from-rose-500/15 to-orange-500/5",
  },
  {
    title: "No tienen web",
    body: "Solo venden por Instagram o WhatsApp y eso genera menos confianza.",
    icon: Smartphone,
    accent: "from-blue-500/15 to-indigo-500/5",
  },
  {
    title: "Siempre responden lo mismo",
    body: "Pierden horas respondiendo preguntas repetidas sobre modelos, stock y envíos.",
    icon: MessageSquareOff,
    accent: "from-violet-500/15 to-fuchsia-500/5",
  },
];

export function Problem() {
  const IconA = items[0].icon;
  const IconB = items[1].icon;
  const IconC = items[2].icon;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.08]"
        >
          La mayoría de los importadores pierde ventas todos los días
        </motion.h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: easeOut }}
            whileHover={{ y: -3 }}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-gradient-to-br ${items[0].accent} p-8 shadow-glass backdrop-blur-xl lg:col-span-7 lg:min-h-[280px]`}
          >
            <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-rose-200">
              <IconA className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
              {items[0].title}
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-zinc-300">
              {items[0].body}
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.06, ease: easeOut }}
            whileHover={{ y: -3 }}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-gradient-to-br ${items[1].accent} p-7 shadow-card backdrop-blur-xl lg:col-span-5`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/15 text-blue-200">
              <IconB className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{items[1].title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {items[1].body}
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
            whileHover={{ y: -3 }}
            className={`relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-gradient-to-br ${items[2].accent} p-7 shadow-card backdrop-blur-xl lg:col-span-8 lg:col-start-3`}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/15 text-violet-200">
                  <IconC className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {items[2].title}
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed">
                {items[2].body}
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
