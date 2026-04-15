"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { easeOut } from "@/lib/motion";

export function ExampleChat() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_30%,rgba(59,130,246,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute left-1/4 top-24 h-72 w-72 rounded-full bg-blue-600/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="max-w-xl lg:pr-8">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.08]"
            >
              Así se siente cuando la IA vende por vos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: 0.06, ease: easeOut }}
              className="mt-5 text-pretty text-lg leading-relaxed text-zinc-400"
            >
              Conversación realista, tono humano y cierre con próximo paso claro.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.2),transparent_50%)] blur-2xl" />

            <div className="relative rounded-[1.85rem] border border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] shadow-glass">
              <div className="overflow-hidden rounded-[1.8rem] bg-[#0b141a]">
                <div className="flex items-center gap-3 border-b border-white/5 bg-[#1f2c33] px-4 py-3.5">
                  <div className="relative">
                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 ring-2 ring-[#1f2c33]" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#1f2c33] bg-emerald-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">
                      Asistente ImportaFlow
                    </p>
                    <p className="text-[11px] text-emerald-400/95">en línea</p>
                  </div>
                  <div className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-zinc-400 ring-1 ring-white/10">
                    Vista previa
                  </div>
                </div>

                <div
                  className="space-y-3 bg-[#0b141a] bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22120%22%20height=%22120%22%20viewBox=%220%200%20120%20120%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.018%22%3E%3Cpath%20d=%22M0%200h60v60H0zM60%2060h60v60H60z%22/%3E%3C/g%3E%3C/svg%3E')] px-4 py-6"
                  style={{ minHeight: 320 }}
                >
                  <Bubble side="out" time="14:02">
                    Hola, ¿tenés iPhone 16 Pro de 256GB?
                  </Bubble>
                  <Bubble side="in" time="14:02" delivered>
                    Sí, disponible en negro y titanio. El valor es USD 1.350. También
                    podés pagarlo en cuotas o transferencia. ¿Querés que te reserve
                    uno?
                  </Bubble>
                  <Bubble side="out" time="14:03">
                    ¿Hacen envíos al interior?
                  </Bubble>
                  <Bubble side="in" time="14:03" delivered>
                    Sí, enviamos a todo el país.
                  </Bubble>
                </div>

                <div className="border-t border-white/5 bg-[#0b141a] px-4 py-3">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1f2c33] px-3 py-2 text-[12px] text-zinc-500">
                    <span className="flex-1">Escribí un mensaje…</span>
                    <span className="rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-lg shadow-emerald-500/25">
                      Enviar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
        className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-snug shadow-[0_12px_40px_-20px_rgba(0,0,0,0.65)] ${
          isOut
            ? "rounded-tr-sm bg-[#005c4b] text-white/95 ring-1 ring-white/10"
            : "rounded-tl-sm bg-[#202c33] text-zinc-100 ring-1 ring-white/[0.06]"
        }`}
      >
        {children}
        <div
          className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
            isOut ? "text-emerald-100/70" : "text-zinc-500"
          }`}
        >
          <span>{time}</span>
          {isOut && delivered && (
            <CheckCheck className="h-3.5 w-3.5 text-sky-300" aria-hidden />
          )}
        </div>
      </div>
    </div>
  );
}
