"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "¿El asistente responde WhatsApp?",
    a: "Sí. Configuramos respuestas automáticas para WhatsApp y también para mensajes desde tu web, con el mismo criterio y tono.",
  },
  {
    q: "¿Puedo cambiar precios o stock?",
    a: "Por supuesto. Actualizamos catálogo, precios, cuotas y disponibilidad para que la IA siempre informe datos correctos.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Depende del tamaño del catálogo, pero en la mayoría de los casos podés estar operando en pocos días una vez que tenemos la información.",
  },
  {
    q: "¿Funciona aunque no tenga página web hoy?",
    a: "Sí. Podemos crear tu web desde cero y conectar el asistente para que empieces con presencia profesional de una.",
  },
  {
    q: "¿Puedo atender yo mismo algunas consultas?",
    a: "Sí. La IA cubre lo repetitivo y vos podés intervenir cuando quieras, especialmente en casos que requieran criterio humano.",
  },
];

export function Faq() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="text-balance text-center text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl"
        >
          Preguntas frecuentes
        </motion.h2>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => (
            <FaqItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  item,
  index,
}: {
  item: { q: string; a: string };
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: 0.04 * index, duration: 0.4 }}
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-glass backdrop-blur-xl transition hover:border-white/[0.12]"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-white sm:text-base">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-zinc-500"
        >
          <ChevronDown className="h-5 w-5" aria-hidden />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="border-t border-white/[0.06] px-5 pb-5 pt-0 text-sm leading-relaxed text-zinc-400">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
