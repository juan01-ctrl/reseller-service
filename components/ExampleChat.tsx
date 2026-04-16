"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { easeOut } from "@/lib/motion";
import { HeroPanel, HeroPanelMuted, HeroReveal } from "@/components/ui/hero";

export function ExampleChat() {
  return (
    <section className="if-section-tight bg-[#06070b]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_55%)]" />
      <div className="relative if-container">
        <div className="max-w-2xl">
          <HeroReveal className="if-h2" y={18} margin="-120px" duration={0.65}>
            Así se ve una conversación
            <br />
            <span className="text-zinc-400">que termina en reserva</span>
          </HeroReveal>
          <HeroReveal className="if-after-h2-lead if-lead" delay={0.05} margin="-120px">
            Tono humano, respuestas claras y cierre con siguiente paso.
          </HeroReveal>
        </div>

        <div className="if-after-heading-block grid if-split-copy-visual lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: easeOut }}
            className="overflow-hidden shadow-[0_50px_120px_-65px_rgba(0,0,0,0.95)]"
          >
            <HeroPanel className="overflow-hidden">
            <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#1f2c33] px-5 py-4">
              <div className="relative">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 ring-2 ring-[#1f2c33]" />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#1f2c33] bg-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Asistente Resellix</p>
                <p className="text-[11px] text-emerald-400/95">en línea</p>
              </div>
            </div>

            <div className="space-y-4 px-5 py-8">
              <Bubble side="out" time="15:41" delivered>
                Hola, ¿tenés iPhone 16 Pro Max 256GB titanio?
              </Bubble>
              <Bubble side="in" time="15:41">
                Sí, disponible. USD 1.490 por transferencia o 6 cuotas. Entrega en 24 hs.
              </Bubble>
              <Bubble side="out" time="15:42" delivered>
                Dale, reservame uno. ¿Puedo pagar transferencia?
              </Bubble>
              <Bubble side="in" time="15:42">
                Perfecto. Te paso datos y dejamos el equipo reservado ahora.
              </Bubble>
            </div>

            <div className="border-t border-white/[0.05] px-5 py-4">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#1f2c33] px-4 py-2.5 text-[13px] text-zinc-600">
                <span className="flex-1">Mensaje...</span>
              </div>
            </div>
            </HeroPanel>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
            className="lg:sticky lg:top-24"
          >
            <HeroPanelMuted className="p-6">
              <p className="if-eyebrow">Estado del lead</p>
              <h3 className="if-after-eyebrow text-xl font-semibold text-white">Reserva confirmada</h3>
              <ul className="if-title-to-media space-y-3 text-sm text-zinc-300">
                <li className="if-panel-muted px-4 py-3">Producto: iPhone 16 Pro Max</li>
                <li className="if-panel-muted px-4 py-3">Pago: transferencia</li>
                <li className="if-panel-muted px-4 py-3">Siguiente paso: enviar datos bancarios</li>
              </ul>
              <p className="if-before-media text-xs text-zinc-500">Tiempo total desde primer mensaje: 2 minutos</p>
            </HeroPanelMuted>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Bubble({
  side,
  children,
  time,
  delivered,
}: {
  side: "in" | "out";
  children: React.ReactNode;
  time: string;
  delivered?: boolean;
}) {
  const isOut = side === "out";
  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[94%] rounded-[1.15rem] px-4 py-3 shadow-[0_16px_50px_-30px_rgba(0,0,0,0.75)] ${
          isOut
            ? "rounded-tr-md bg-[#005c4b] text-white/95"
            : "rounded-tl-md bg-[#1f2c33] text-zinc-100"
        }`}
      >
        <p className="text-[13px] leading-relaxed sm:text-[14px]">{children}</p>
        <div
          className={`mt-2 flex items-center justify-end gap-1 text-[10px] ${
            isOut ? "text-emerald-100/60" : "text-zinc-500"
          }`}
        >
          <span>{time}</span>
          {isOut && delivered && <CheckCheck className="h-3.5 w-3.5 text-sky-300/90" aria-hidden />}
        </div>
      </div>
    </div>
  );
}
