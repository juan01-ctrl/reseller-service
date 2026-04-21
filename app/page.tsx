import { Nav } from "@/components/landing/nav"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { Features } from "@/components/landing/features"
import { Process } from "@/components/landing/process"
import { Stats } from "@/components/landing/stats"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { ChatbotWidget } from "@/components/landing/chatbot-widget"
import { defaultDescription, siteName, siteUrl } from "@/lib/site"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      sameAs: ["https://instagram.com/importboost"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          areaServed: "AR",
          availableLanguage: ["es-AR", "es"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "es-AR",
      description: defaultDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      serviceType: "Automatización de ventas con IA para WhatsApp e Instagram",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
      availableLanguage: ["es-AR", "es"],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Importadores y revendedores de tecnología",
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Process />
        <Stats />
        {/* <Testimonials /> */}
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ChatbotWidget />
    </>
  )
}
