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
    a: "Sí. Actualizamos catálogo, precios, cuotas y disponibilidad para que la IA informe datos correctos.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Depende del tamaño del catálogo; en la mayoría de los casos podés estar operando en pocos días con la información lista.",
  },
  {
    q: "¿Funciona aunque no tenga página web hoy?",
    a: "Sí. Creamos tu web y conectamos el asistente para que empieces con presencia profesional.",
  },
  {
    q: "¿Puedo atender yo algunas consultas?",
    a: "Sí. La IA cubre lo repetitivo y vos intervenís cuando quieras, especialmente cuando hace falta criterio humano.",
  },
];

export function Faq() {
  return (
    <section className="if-section">
      <div className="if-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="if-eyebrow text-center"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="if-after-section-eyebrow if-h2 text-balance text-center"
        >
          Preguntas frecuentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="if-after-h2-lead mx-auto max-w-[44ch] text-center if-lead"
        >
          Respuestas claras para decidir rápido si ImportaFlow encaja con tu operación.
        </motion.p>

        <div className="mt-12 mx-auto max-w-3xl space-y-3">
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
      className="if-surface-static overflow-hidden transition hover:border-white/[0.1]"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-white sm:text-base">{item.q}</span>
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
