"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CtaButtons } from "@/components/CtaButtons";
import {
  HeroBrowserMockup,
  HeroFloatBadge,
  HeroMessageMetric,
  HeroPrimaryVisual,
  HeroSecondaryVisual,
  HeroSection,
  HeroWhatsAppMockup,
  heroMotion,
} from "@/components/ui/hero";

export function Hero() {
  return (
    <HeroSection>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
          <div className="max-w-[34rem]">
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={heroMotion.fadeUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-1.5 if-eyebrow text-zinc-400"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              Resellix
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={heroMotion.fadeUp}
              className="if-display"
            >
              Dejá de perder ventas
              <br />
              <span className="text-zinc-400">por responder tarde</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={heroMotion.fadeUp}
              className="if-after-h2-lead max-w-[30ch] if-lead"
            >
              Web premium y asistente con IA que responde WhatsApp en segundos, 24/7.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={heroMotion.fadeUp}
              className="mt-11"
            >
              <CtaButtons variant="emphasis" />
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="show"
              variants={heroMotion.fadeUp}
              className="mt-10 text-sm text-zinc-500"
            >
              Implementación guiada · soporte humano real
            </motion.p>
          </div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={heroMotion.fadeUp}
            className="relative min-h-[520px] lg:min-h-[620px]"
          >
            <div className="pointer-events-none absolute inset-[-12%] -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_40%_30%,rgba(59,130,246,0.24),transparent_58%),radial-gradient(ellipse_at_90%_70%,rgba(99,102,241,0.12),transparent_55%)] blur-2xl" />

            <HeroFloatBadge className="absolute left-2 top-8 z-30 hidden sm:block" delay={0}>
              <HeroMessageMetric />
            </HeroFloatBadge>

            <HeroPrimaryVisual>
              <HeroBrowserMockup />
            </HeroPrimaryVisual>

            <HeroSecondaryVisual>
              <HeroWhatsAppMockup />
            </HeroSecondaryVisual>

            <div className="mt-8 flex justify-center sm:hidden">
              <HeroFloatBadge className="!block" delay={0.05}>
                <span className="flex items-center gap-2 text-[10px] text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Asistente activo 24/7
                </span>
              </HeroFloatBadge>
            </div>
          </motion.div>
        </div>
    </HeroSection>
  );
}
