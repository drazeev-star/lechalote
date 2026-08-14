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
  title: "L'Échalote · Café Gastrobar",
  description:
    "Cocina mediterránea, ingredientes frescos y una experiencia para compartir en Jávea, Alicante.",
  openGraph: {
    title: "L'Échalote · Café Gastrobar",
    description:
      "Cocina mediterránea, ingredientes frescos y una experiencia para compartir en Jávea, Alicante.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1536,
        height: 1024,
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
