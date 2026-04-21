import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  businessGeo,
  defaultDescription,
  defaultTitle,
  siteKeywords,
  siteLocale,
  siteName,
  siteUrl,
} from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  keywords: siteKeywords,
  category: "business",
  creator: siteName,
  publisher: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [{ url: "/favicon-32x32.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      "es": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteLocale,
    url: "/",
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    countryName: "Argentina",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteName} — IA para ventas por WhatsApp e Instagram`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  other: {
    "geo.region": businessGeo.region,
    "geo.placename": businessGeo.placename,
    "geo.position": businessGeo.position,
    ICBM: businessGeo.icbm,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#EAE5D6",
  colorScheme: "light",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" suppressHydrationWarning className={inter.variable}>
      <body suppressHydrationWarning className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
