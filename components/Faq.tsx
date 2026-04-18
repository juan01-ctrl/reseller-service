"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { HeroPanel, HeroReveal } from "@/components/ui/hero";

const faqs = [
  {
    q: "¿El asistente cubre WhatsApp e Instagram?",
    a: "Sí. Configuramos respuestas automáticas para WhatsApp y para mensajes directos de Instagram, además del chat de tu web, con el mismo criterio y tono.",
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
        <HeroReveal className="if-eyebrow text-center" duration={0.45} margin="-80px">
          FAQ
        </HeroReveal>
        <HeroReveal className="if-after-section-eyebrow if-h2 text-balance text-center" duration={0.45} margin="-80px">
          Preguntas frecuentes
        </HeroReveal>
        <HeroReveal className="if-after-h2-lead mx-auto max-w-[44ch] text-center if-lead" duration={0.45} delay={0.05} margin="-80px">
          Respuestas claras para decidir rápido si ImportBoost encaja con tu operación.
        </HeroReveal>

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
      className="overflow-hidden transition hover:border-white/[0.1]"
    >
      <HeroPanel className="overflow-hidden">
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
      </HeroPanel>
    </motion.div>
  );
}
