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
  title: "Mathis Kräkel - Mehr Kunden durch intelligente Web-Lösungen",
  description: "Ich entwickle Kunden-Gewinnungs-Tools und Web-Apps, die Ihren Umsatz steigern. Intelligente Formulare, Kalkulatoren und maßgeschneiderte digitale Lösungen ab 899€. Kostenloses Beratungsgespräch.",
  keywords: [
    // Hauptkeywords - Kundenorientiert
    "Kunden gewinnen online",
    "Lead Generation Tools",
    "intelligente Formulare",
    "Online Kalkulatoren",
    "Conversion Optimierung",
    "Web App entwickeln lassen",
    "MVP Entwicklung",
    "Geschäftsidee umsetzen",
    "digitale Kundengewinnung",
    "Website Leads steigern",

    // Service-spezifisch
    "ROI Rechner erstellen lassen",
    "Multi-Step Formulare",
    "Kostenkalkulator Website",
    "Lead Magnets entwickeln",
    "Automatisierung Geschäftsprozesse",
    "Web-Anwendung entwickeln",
    "SaaS MVP entwickeln",
    "Startup App entwicklung",

    // Technisch aber kundenfreundlich
    "React Entwickler für Unternehmen",
    "Next.js Web App Entwicklung",
    "professionelle Webentwicklung",
    "maßgeschneiderte Software",
    "digitale Transformation",

    // Lokal
    "Webentwickler Deutschland",
    "Lead Generation Spezialist",
    "App Entwickler Hessen",
    "digitale Lösungen Unternehmen"
  ],
  authors: [{ name: "Mathis Kräkel", url: "https://mathiskraekel.de" }],
  creator: "Mathis Kräkel",
  publisher: "Mathis Kräkel",
  openGraph: {
    title: "Mathis Kräkel - Mehr Kunden durch intelligente Web-Lösungen",
    description: "Intelligente Formulare und Kalkulatoren, die Website-Besucher in zahlende Kunden verwandeln. Maßgeschneiderte digitale Lösungen für mehr Umsatz.",
    url: "https://mathiskraekel.de",
    siteName: "Mathis Kräkel - Digitale Lösungen",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mathis Kräkel - Kunden-Gewinnungs-Tools und Web-App Entwicklung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathis Kräkel - Mehr Kunden durch intelligente Web-Lösungen",
    description: "Intelligente Formulare und Web-Apps, die Ihren Umsatz steigern. Kostenloses Beratungsgespräch verfügbar.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
    // Du musst diese in der Google Search Console holen
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mathis Kräkel - Digitale Lösungen",
    "description": "Entwicklung von Kunden-Gewinnungs-Tools, intelligenten Formularen und Web-Apps für Unternehmen",
    "url": "https://mathiskraekel.de",
    "telephone": "+49-XXX-XXXXXXX", // Deine echte Telefonnummer
    "email": "mathis@kraekel.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE",
      "addressRegion": "Hessen"
    },
    "founder": {
      "@type": "Person",
      "name": "Mathis Kräkel",
      "jobTitle": "Softwareentwickler & Digitaler Lösungsexperte"
    },
    "serviceType": [
      "Lead Generation Tools",
      "Intelligente Formulare",
      "Web App Entwicklung",
      "MVP Entwicklung",
      "Conversion Optimierung"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Kunden-Gewinnungs-Tools",
        "description": "Intelligente Formulare und Kalkulatoren ab 899€",
        "price": "899",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "App Entwicklung",
        "description": "MVP-Entwicklung von der Idee zum fertigen Produkt ab 2.499€",
        "price": "2499",
        "priceCurrency": "EUR"
      }
    ]
  };

  return (
    <html lang="de" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
