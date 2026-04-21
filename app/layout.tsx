import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { ThemeControls } from "@/components/dev/theme-controls"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const siteUrl = "https://www.importboost.online"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ImportBoost — IA que te vende en WhatsApp e Instagram, 24/7",
  description:
    "La IA de ventas para importadores de electrónica premium en Argentina. Respondé WhatsApp, Instagram y tu web en menos de un minuto. Setup desde USD 450.",
  keywords: [
    "importadores electrónica Argentina",
    "automatización WhatsApp",
    "IA ventas revendedores",
    "Instagram DM ventas",
    "chatbot importadores",
    "revendedores tecnología Argentina",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: "ImportBoost · IA de ventas para importadores de electrónica premium",
    description:
      "Respondé WhatsApp, Instagram y tu web en <1 minuto, 24/7. Cerrás antes de que el cliente abra la competencia.",
    siteName: "ImportBoost",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImportBoost · IA de ventas para importadores de electrónica premium",
    description: "WhatsApp, Instagram y tu web en <1 min. 24/7.",
  },
  alternates: { canonical: siteUrl },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <ThemeControls />
        </ThemeProvider>
      </body>
    </html>
  )
}
