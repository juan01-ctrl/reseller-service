"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { easeOut } from "@/lib/motion";

export function Problem() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(59,130,246,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="max-w-[26ch] text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-100 sm:text-5xl sm:leading-[1.06]"
        >
          La mayoría de los importadores pierde ventas todos los días
        </motion.h2>

        <div className="mt-20 grid gap-6 lg:grid-cols-12 lg:gap-8 lg:grid-rows-[auto_auto]">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-rose-500/[0.08] via-zinc-950/40 to-zinc-950 p-8 shadow-[0_40px_100px_-60px_rgba(0,0,0,0.85)] lg:col-span-7 lg:row-span-2 lg:min-h-[360px]"
          >
            <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Responden tarde
            </h3>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-zinc-400">
              Los clientes preguntan por stock, precio o cuotas y terminan comprando
              en otro lado.
            </p>
            <div className="mt-10 rounded-[1.25rem] border border-white/[0.08] bg-black/40 p-4 ring-1 ring-white/[0.04]">
              <div className="flex items-center justify-between gap-3 text-[11px] text-zinc-500">
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-3.5 w-3.5 text-zinc-600" />
                  WhatsApp Business
                </span>
                <span className="rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] font-medium text-rose-200">
                  pendiente
                </span>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-zinc-300">
                “¿Tenés 16 Pro 256 disponible?”
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[10px] text-zinc-600">
                <span>Consulta sin responder</span>
                <span className="text-rose-300/90">hace 3 hs</span>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.06, ease: easeOut }}
            className="rounded-[2rem] border border-white/[0.07] bg-zinc-950/60 p-7 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.75)] lg:col-span-5 lg:col-start-8 lg:row-start-1"
          >
            <h3 className="text-xl font-semibold text-white">No tienen web</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Solo venden por Instagram o WhatsApp y eso genera menos confianza.
            </p>
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-gradient-to-b from-purple-500/10 to-black/40 p-4">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-zinc-200">
                <Instagram className="h-4 w-4 text-pink-400" />
                @importaciones.apple
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-zinc-500">
                Link en bio · DM para precio · sin catálogo claro
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="rounded-[2rem] border border-white/[0.07] bg-zinc-950/60 p-7 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.75)] lg:col-span-5 lg:col-start-8 lg:row-start-2"
          >
            <h3 className="text-xl font-semibold text-white">
              Siempre responden lo mismo
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Pierden horas respondiendo preguntas repetidas sobre modelos, stock y
              envíos.
            </p>
            <div className="mt-6 space-y-2 rounded-xl border border-white/[0.06] bg-black/35 p-3">
              {["¿Cuotas?", "¿Envíos?", "¿Stock?"].map((t) => (
                <div
                  key={t}
                  className="rounded-lg bg-white/[0.04] px-2.5 py-2 text-[11px] text-zinc-400"
                >
                  Cliente: {t}
                </div>
              ))}
              <p className="pt-1 text-center text-[10px] text-zinc-600">
                mismo día · misma respuesta manual
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
