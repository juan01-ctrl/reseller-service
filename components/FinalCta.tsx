"use client";

import { motion } from "framer-motion";
import { CtaButtons } from "@/components/CtaButtons";

export function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030304] py-36 sm:py-48">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.08),transparent_45%)]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.2]" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-[8%] top-[22%] hidden rounded-2xl border border-white/[0.06] bg-zinc-950/60 px-4 py-3 text-[11px] text-zinc-500 shadow-2xl backdrop-blur-md lg:block"
      >
        +18% consultas calificadas
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-[26%] right-[10%] hidden rounded-2xl border border-white/[0.06] bg-zinc-950/60 px-4 py-3 text-[11px] text-zinc-500 shadow-2xl backdrop-blur-md lg:block"
      >
        {`Respuesta < 30s`}
      </motion.div>

      <div className="relative mx-auto max-w-[720px] px-5 text-center sm:px-10">
        <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.08]">
          Tu negocio ya tiene demanda. Solo necesitás responder mejor y verte más
          profesional.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-500 sm:text-xl">
          Te ayudamos a tener una web y un asistente con IA listos en pocos días.
        </p>
        <div className="mt-12 flex justify-center">
          <CtaButtons variant="emphasis" className="justify-center" />
        </div>
      </div>
    </section>
  );
}
