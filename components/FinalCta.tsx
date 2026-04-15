"use client";

import { motion } from "framer-motion";
import { CtaButtons } from "@/components/CtaButtons";

export function FinalCta() {
  return (
    <section className="relative if-section w-full overflow-hidden bg-[#030304]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_120%,rgba(59,130,246,0.24),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.16]" />

      <div className="relative if-container max-w-[980px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-center text-5xl font-semibold leading-[0.98] tracking-tight text-zinc-50 sm:text-6xl lg:text-[4rem]"
        >
          Tu negocio ya tiene demanda.
          <br />
          <span className="text-zinc-400">Falta responder mejor.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-[52ch] text-center text-lg leading-relaxed text-zinc-400"
        >
          Web e IA listas en pocos días, con implementación guiada y soporte humano real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 if-panel-featured p-6 sm:p-8"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-zinc-300">Implementación guiada · soporte humano cuando hace falta</p>
            <CtaButtons variant="emphasis" className="sm:flex-row" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
