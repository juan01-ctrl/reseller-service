import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { defaultDescription, getSiteUrl, siteName } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const baseUrl = getSiteUrl();
const pageTitle = `${siteName} — Web + IA para WhatsApp e Instagram`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  title: {
    default: pageTitle,
    template: `%s · ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: baseUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  keywords: [
    "ImportBoost",
    "importadores Apple",
    "Argentina",
    "WhatsApp Business",
    "Instagram",
    "mensajes directos Instagram",
    "asistente IA",
    "catálogo web",
    "iPhone",
    "revendedores",
    "automatización ventas",
  ],
  category: "business",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: baseUrl,
    siteName,
    title: pageTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: defaultDescription,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#040508" },
    { media: "(prefers-color-scheme: light)", color: "#040508" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={jakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
