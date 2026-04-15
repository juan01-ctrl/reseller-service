import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Resellix — Web profesional + IA para importadores Apple",
  description:
    "Creamos tu web y un asistente con IA que responde WhatsApp y consultas 24/7. Para importadores y revendedores Apple en Argentina.",
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
