// Instructions: Update the layout with better metadata and dark theme configuration

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mathis Kräkel - Softwareentwicklung & Beratung",
  description: "Professionelle Softwareentwicklung und technische Beratung. Maßgeschneiderte Lösungen für Ihre digitalen Herausforderungen. Spezialisiert auf React, Next.js, Node.js und moderne Web-Technologien.",
  keywords: ["Softwareentwicklung", "Web Development", "React", "Next.js", "Node.js", "TypeScript", "Beratung"],
  authors: [{ name: "Mathis Kräkel" }],
  creator: "Mathis Kräkel",
  openGraph: {
    title: "Mathis Kräkel - Softwareentwicklung & Beratung",
    description: "Professionelle Softwareentwicklung und technische Beratung. Maßgeschneiderte Lösungen für Ihre digitalen Herausforderungen.",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0f172a",
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
