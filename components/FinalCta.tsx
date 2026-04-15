"use client";

import { motion } from "framer-motion";
import { CtaButtons } from "@/components/CtaButtons";
import { easeOut } from "@/lib/motion";

export function FinalCta() {
  return (
    <section className="relative pb-28 pt-12 sm:pb-36 sm:pt-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="relative overflow-hidden rounded-[2.25rem] border border-white/[0.12] bg-gradient-to-br from-white/[0.12] via-blue-500/[0.12] to-indigo-600/15 p-[1px] shadow-glass"
        >
          <div className="noise-overlay relative overflow-hidden rounded-[2.2rem] bg-zinc-950/40 px-6 py-16 text-center backdrop-blur-2xl sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/30 blur-[100px]" />
            <div className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-indigo-500/25 blur-[100px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)]" />

            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
                Tu negocio ya tiene demanda. Solo necesitás responder mejor y verte
                más profesional.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400 sm:text-xl">
                Te ayudamos a tener una web y un asistente con IA listos en pocos
                días.
              </p>
              <div className="mt-10 flex justify-center">
                <CtaButtons
                  variant="emphasis"
                  className="justify-center"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
