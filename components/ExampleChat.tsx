"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { easeOut } from "@/lib/motion";

export function ExampleChat() {
  return (
    <section className="relative bg-[#06070b] py-32 sm:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.09),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="max-w-[20ch] text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl"
        >
          Así se siente cuando
          <br />
          la IA vende por vos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, delay: 0.05, ease: easeOut }}
          className="mt-5 max-w-md text-base text-zinc-500"
        >
          Conversación realista, tono humano y cierre con próximo paso claro.
        </motion.p>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.45fr)] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: easeOut }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.18),transparent_55%)] blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-[#0b141a] shadow-[0_50px_120px_-65px_rgba(0,0,0,0.95)]">
              <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#1f2c33] px-5 py-4">
                <div className="relative">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 ring-2 ring-[#1f2c33]" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#1f2c33] bg-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Asistente ImportaFlow</p>
                  <p className="text-[11px] text-emerald-400/95">en línea</p>
                </div>
              </div>

              <div className="space-y-4 px-5 py-8">
                <Bubble side="out" time="15:41" delivered>
                  Hola, ¿tenés iPhone 16 Pro Max 256GB titanio?
                </Bubble>
                <Bubble side="in" time="15:41">
                  Sí, disponible. USD 1.490 por transferencia o 6 cuotas. Entrega en 24
                  hs y envíos a todo el país. ¿Querés que te reserve uno?
                </Bubble>
                <Bubble side="out" time="15:42" delivered>
                  Dale, reservame uno. ¿Puedo pagar transferencia?
                </Bubble>
                <Bubble side="in" time="15:42">
                  Perfecto. Te paso datos para transferencia y te guardamos el equipo.
                  ¿Retirás o envío?
                </Bubble>
              </div>

              <div className="border-t border-white/[0.05] px-5 py-4">
                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#1f2c33] px-4 py-2.5 text-[13px] text-zinc-600">
                  <span className="flex-1">Mensaje…</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-[0_40px_100px_-60px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.04]">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                Vista producto
              </p>
              <div className="mt-5 aspect-[4/5] w-full max-w-[220px] rounded-2xl bg-gradient-to-br from-zinc-600/30 via-zinc-800 to-zinc-950 ring-1 ring-white/10" />
              <p className="mt-5 text-lg font-semibold text-white">iPhone 16 Pro Max</p>
              <p className="text-sm text-zinc-500">256 GB · Titanio</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  En stock
                </span>
                <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-zinc-400">
                  USD 1.490
                </span>
              </div>
            </div>
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
        className={`max-w-[94%] rounded-[1.15rem] px-4 py-3 text-[15px] leading-relaxed shadow-[0_16px_50px_-30px_rgba(0,0,0,0.75)] ${
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
          {isOut && delivered && (
            <CheckCheck className="h-3.5 w-3.5 text-sky-300/90" aria-hidden />
          )}
        </div>
      </div>
    </div>
  );
}
