import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/mvp-development" },
  title: "App entwickeln lassen - Von der Idee zum fertigen Produkt | Mathis Kräkel",
  description:
    "Verwandeln Sie Ihre Geschäftsidee in eine profitable Web-App! MVP-Entwicklung mit modernen Technologien ab 2.499€. Marktreif in 4-8 Wochen. Skalierbar für Ihren Erfolg. Kostenloses Beratungsgespräch.",
  keywords: [
    "App entwickeln lassen",
    "MVP Entwicklung Deutschland",
    "Geschäftsidee umsetzen",
    "Web App entwickeln",
    "SaaS entwickeln lassen",
    "Startup App Entwicklung",
    "Minimum Viable Product",
    "Prototype entwickeln",
    "digitale Transformation",
    "maßgeschneiderte Software",
    "Next.js App Entwicklung",
    "React Web App",
    "professionelle App Entwicklung",
    "schnelle App Entwicklung",
    "skalierbare Software",
    "moderne Web Technologien",
  ],
  openGraph: {
    title: "App entwickeln lassen - Von der Idee zum fertigen Produkt",
    description:
      "Professionelle MVP-Entwicklung mit modernen Technologien. Von der Geschäftsidee zur marktreifen App in 4-8 Wochen. Ab 2.499€.",
    url: "https://mathiskraekel.de/mvp-development",
    siteName: "Mathis Kräkel - Digitale Lösungen",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/mvp-development-og.jpg",
        width: 1200,
        height: 630,
        alt: "MVP und App Entwicklung - Von der Idee zum fertigen Produkt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App entwickeln lassen - Von der Idee zum fertigen Produkt",
    description:
      "MVP-Entwicklung mit modernen Technologien. Marktreif in 4-8 Wochen. Ab 2.499€.",
    images: ["/mvp-development-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MVPDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
