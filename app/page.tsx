import { Benefits } from "@/components/Benefits";
import { ExampleChat } from "@/components/ExampleChat";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(59,130,246,0.16),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-fade opacity-[0.28]" />
      <div className="noise-overlay pointer-events-none fixed inset-0 -z-10 opacity-[0.35]" />
      <Header />
      <Hero />
      <div className="relative border-t border-white/[0.04] bg-zinc-950/20">
        <TrustBar />
      </div>
      <div className="relative bg-[linear-gradient(180deg,rgba(9,9,11,0.9)_0%,rgba(9,9,11,0.4)_45%,transparent_100%)]">
        <Problem />
      </div>
      <Solution />
      <div className="relative border-y border-white/[0.04] bg-zinc-950/30">
        <HowItWorks />
      </div>
      <ExampleChat />
      <div className="relative bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950/80">
        <Benefits />
      </div>
      <Pricing />
      <div className="relative border-t border-white/[0.04] bg-zinc-950/40">
        <Faq />
      </div>
      <FinalCta />
      <Footer />
    </main>
  );
}
