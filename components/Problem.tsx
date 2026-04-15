"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { easeOut } from "@/lib/motion";

const costItems = ["Sin web clara", "Preguntas repetidas", "Clientes que se enfrían"];

export function Problem() {
  return (
    <section className="if-section">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(59,130,246,0.06),transparent_55%)]" />
      <div className="relative if-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="if-eyebrow"
        >
          Problema
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="if-after-section-eyebrow if-h2 max-w-[18ch]"
        >
          La mayoría de los importadores pierde ventas todos los días
        </motion.h2>

        <div className="if-after-heading-block grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.62, ease: easeOut }}
            className="relative flex flex-col overflow-hidden rounded-[2rem] border border-rose-400/20 bg-[linear-gradient(165deg,rgba(244,63,94,0.13),rgba(7,8,12,0.94)_56%)] p-8 shadow-[0_45px_110px_-60px_rgba(0,0,0,0.9)] sm:p-11"
          >
            <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-rose-500/12 blur-3xl" />

            <p className="if-eyebrow text-rose-200/90">Dolor principal</p>
            <h3 className="if-after-eyebrow text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
              Consultas sin respuesta
            </h3>
            <p className="if-after-title max-w-[50ch] text-base leading-relaxed text-zinc-300">
              Cuando tardás, el cliente no espera: pide precio en otro lado y la venta se enfría.
            </p>

            <div className="if-before-media rounded-2xl border border-white/[0.1] bg-black/45 p-5 ring-1 ring-white/[0.05] sm:p-6">
              <div className="flex items-center justify-between gap-3 text-[11px] text-zinc-500">
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-3.5 w-3.5 text-zinc-600" />
                  WhatsApp Business
                </span>
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] font-medium text-rose-200"
                >
                  pendiente
                </motion.span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl bg-white/[0.04] px-3 py-2 text-[12px] text-zinc-300">
                  Cliente: ¿Tenés 16 Pro 256 disponible?
                </div>
                <div className="rounded-xl bg-white/[0.03] px-3 py-2 text-[12px] text-zinc-500">
                  Sin responder…
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[10px] text-zinc-600">
                <span>Consulta sin responder</span>
                <span className="text-rose-200/90">hace 3 hs</span>
              </div>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.62, delay: 0.06, ease: easeOut }}
            className="if-panel flex flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(7,8,12,0.92))] p-7 sm:p-8"
          >
            <p className="if-eyebrow">Costo silencioso</p>
            <h3 className="if-after-eyebrow text-2xl font-semibold leading-tight text-white">
              Cada demora erosiona margen
            </h3>
            <p className="if-after-title text-sm leading-relaxed text-zinc-500">
              No es solo una consulta perdida: tiempo operativo, confianza y cierre.
            </p>

            <div className="if-before-media space-y-3">
              {costItems.map((item) => (
                <div key={item} className="if-panel-muted px-4 py-3 text-sm text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
