// Instructions: Update the layout with better metadata and dark theme configuration

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mathiskraekel.de"),
  alternates: { canonical: "/" },
  keywords: [
    "Mathis Kräkel",
    "Softwareentwicklung",
    "technische Beratung",
    "Webentwicklung",
    "React Entwickler",
    "Next.js Entwickler",
    "Node.js Entwickler",
    "TypeScript Freelancer",
    "Firebase Entwickler",
    "TailwindCSS",
    "Prisma",
    "Web-App Entwicklung",
    "Fullstack Webentwicklung",
    "Freelancer Webentwicklung",
    "maßgeschneiderte Softwarelösungen",
    "moderne Web-Technologien",
    "Entwickler aus Deutschland",
    "Softwareentwickler Wiesbaden",
    "Webentwickler Wiesbaden",
    "Freelancer Wiesbaden",
    "IT-Beratung Wiesbaden",
    "Softwareentwickler Bad Schwalbach",
    "Webentwickler Bad Schwalbach",
    "Freelancer Bad Schwalbach",
    "IT-Dienstleistungen Wiesbaden",
    "Next.js Freelancer Wiesbaden",
    "React Entwickler Hessen"
  ],
  authors: [{ name: "Mathis Kräkel", url: "https://mathiskraekel.de" }],
  creator: "Mathis Kräkel",
  publisher: "Mathis Kräkel",
  openGraph: {
    title: "Mathis Kräkel – Softwareentwicklung & technische Beratung",
    description:
        "Professionelle Softwareentwicklung und technische Beratung. Maßgeschneiderte Lösungen für Ihre digitalen Herausforderungen.",
    url: "https://mathiskraekel.de",
    siteName: "Mathis Kräkel – Softwareentwicklung & Beratung",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathis Kräkel – Softwareentwicklung & technische Beratung",
    description:
        "Freelancer für Webentwicklung mit React, Next.js und TypeScript. Maßgeschneiderte Lösungen für digitale Projekte.",
  },
  robots: {
    index: true,
    follow: true
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0f172a"
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
