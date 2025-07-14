import type { Metadata } from "next";
import HomePage from "./components/HomePage";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Mathis Kräkel - Softwareentwicklung & Beratung",
  description:
    "Professionelle Softwareentwicklung und technische Beratung für moderne Web-Anwendungen. Maßgeschneiderte Lösungen mit React, Next.js, Node.js und TypeScript – individuell entwickelt für Ihre digitalen Herausforderungen.",
  openGraph: {
    title: "Mathis Kräkel – Softwareentwicklung & technische Beratung",
    description:
      "Professionelle Softwareentwicklung und technische Beratung. Maßgeschneiderte Lösungen für Ihre digitalen Herausforderungen.",
    url: "https://mathiskraekel.de",
    siteName: "Mathis Kräkel – Softwareentwicklung & Beratung",
    locale: "de_DE",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
