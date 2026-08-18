import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lechalotejavea.com"),

  title: "L'Échalote · Café Gastrobar",

  description:
    "Cocina internacional, ingredientes frescos y una experiencia para compartir en Jávea, Alicante.",

  openGraph: {
    title: "L'Échalote · Café Gastrobar",

    description:
      "Cocina internacional, ingredientes frescos y una experiencia para compartir en Jávea, Alicante.",

    url: "https://www.lechalotejavea.com",

    siteName: "L'Échalote Café Gastrobar",

    locale: "es_ES",

    type: "website",

    images: [
  {
    url: "/images/og-whatsapp.jpg",
    width: 1200,
    height: 630,
    alt: "L'Échalote Café Gastrobar",
  },
],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
