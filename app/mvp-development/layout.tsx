import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/mvp-development" },
  title: "MVP Development in Rekordzeit | Mathis Kräkel",
  description:
    "Schnelle Entwicklung Ihres Minimum Viable Products mit modernem Tech-Stack. Von der Idee bis zum Launch in 4-8 Wochen.",
  openGraph: {
    title: "MVP Development in Rekordzeit | Mathis Kräkel",
    description:
      "Schnelle Entwicklung Ihres Minimum Viable Products mit modernem Tech-Stack. Von der Idee bis zum Launch in 4-8 Wochen.",
    url: "https://mathiskraekel.de/mvp-development",
    siteName: "Mathis Kräkel – Softwareentwicklung & Beratung",
    locale: "de_DE",
    type: "website",
  },
};

export default function MVPDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
