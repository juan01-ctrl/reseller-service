"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrandLockup } from "@/components/Brand";
import { CtaButtons } from "@/components/CtaButtons";

export function Header() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-zinc-950/75 shadow-[0_8px_40px_-20px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
    >
      <div className="if-container flex items-center justify-between gap-4 py-3.5">
        <Link href="#" className="group">
          <BrandLockup />
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <CtaButtons className="!flex-row !gap-2 [&_a]:px-4 [&_a]:py-2 [&_a]:text-xs sm:[&_a]:px-6 sm:[&_a]:py-3 sm:[&_a]:text-sm [&_a:last-child]:hidden md:[&_a:last-child]:inline-flex" />
        </div>
      </div>
    </motion.header>
  );
}
