import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/lead-generation" },
  title: "Intelligente Lead-Formulare | Mathis Kräkel",
  description:
    "Maßgeschneiderte Formulare mit Echtzeit-Berechnungen und automatischer Lead-Qualifizierung.",
  openGraph: {
    title: "Intelligente Lead-Formulare | Mathis Kräkel",
    description:
      "Maßgeschneiderte Formulare mit Echtzeit-Berechnungen und automatischer Lead-Qualifizierung.",
    url: "https://mathiskraekel.de/lead-generation",
    siteName: "Mathis Kräkel – Softwareentwicklung & Beratung",
    locale: "de_DE",
    type: "website",
  },
};

export default function LeadGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
