"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CtaButtons } from "@/components/CtaButtons";

export function Header() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-zinc-950/75 shadow-[0_8px_40px_-20px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-8">
        <Link href="#" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white shadow-lg shadow-blue-500/30 ring-1 ring-white/15 transition group-hover:shadow-blue-500/45">
            IF
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            ImportaFlow
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <CtaButtons className="!flex-row !gap-2 [&_a]:px-4 [&_a]:py-2 [&_a]:text-xs sm:[&_a]:px-6 sm:[&_a]:py-3 sm:[&_a]:text-sm" />
        </div>
      </div>
    </motion.header>
  );
}
