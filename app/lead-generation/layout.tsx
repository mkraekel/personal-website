import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/lead-generation" },
  title: "Mehr Kunden gewinnen mit intelligenten Formularen | Mathis Kräkel",
  description:
    "Verwandeln Sie Website-Besucher in zahlende Kunden! Intelligente Formulare, ROI-Kalkulatoren und Multi-Step-Forms ab 899€. Garantiert mehr Leads für Ihr Unternehmen. Kostenloses Beratungsgespräch.",
  keywords: [
    "Kunden gewinnen Website",
    "intelligente Formulare erstellen",
    "ROI Kalkulator Website",
    "Lead Generation Tools",
    "Multi Step Formulare",
    "Conversion Rate steigern",
    "Website Besucher zu Kunden",
    "Lead Magnets entwickeln",
    "Online Kalkulatoren erstellen",
    "Kostenkalkulator Website",
    "automatische Lead Qualifizierung",
    "Formular Optimierung",
    "mehr Anfragen Website",
    "digitale Kundengewinnung",
  ],
  openGraph: {
    title: "Mehr Kunden gewinnen mit intelligenten Formularen",
    description:
      "Intelligente Formulare und Kalkulatoren, die Website-Besucher in zahlende Kunden verwandeln. Bereits ab 899€ - Live in 7-10 Tagen.",
    url: "https://mathiskraekel.de/lead-generation",
    siteName: "Mathis Kräkel - Digitale Lösungen",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/lead-generation-og.jpg",
        width: 1200,
        height: 630,
        alt: "Intelligente Formulare für mehr Leads und Kunden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehr Kunden gewinnen mit intelligenten Formularen",
    description:
      "ROI-Kalkulatoren und Multi-Step-Formulare, die konvertieren. Ab 899€.",
    images: ["/lead-generation-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LeadGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
