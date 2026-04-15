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
    <main className="relative min-h-screen overflow-x-hidden bg-[#06070b] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-25%,rgba(59,130,246,0.12),transparent_58%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-fade opacity-[0.18]" />
      <div className="noise-overlay pointer-events-none fixed inset-0 -z-10 opacity-[0.22]" />
      <Header />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <HowItWorks />
      <ExampleChat />
      <Benefits />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
