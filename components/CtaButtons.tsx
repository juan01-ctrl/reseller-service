"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/links";

type Props = {
  className?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
  variant?: "default" | "emphasis";
};

export function CtaButtons({
  className = "",
  primaryClassName = "",
  secondaryClassName = "",
  variant = "default",
}: Props) {
  const emphasis = variant === "emphasis";

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_50px_-18px_rgba(59,130,246,0.55)] transition ${
            emphasis
              ? "bg-white ring-2 ring-white/30"
              : "bg-white hover:bg-zinc-100"
          } ${primaryClassName} ${secondaryClassName}`}
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/30 to-white/0 opacity-0 transition group-hover:opacity-100" />
          <MessageCircle className="relative h-4 w-4" aria-hidden />
          <span className="relative">Hablar por WhatsApp</span>
        </Link>
      </motion.div>
    </div>
  );
}
