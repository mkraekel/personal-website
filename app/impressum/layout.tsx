import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/impressum" },
  title: "Impressum & Datenschutz | Mathis Kräkel",
  description: "Impressum und Datenschutzerklärung von Mathis Kräkel.",
  openGraph: {
    title: "Impressum & Datenschutz | Mathis Kräkel",
    description: "Impressum und Datenschutzerklärung von Mathis Kräkel.",
    url: "https://mathiskraekel.de/impressum",
    siteName: "Mathis Kräkel – Softwareentwicklung & Beratung",
    locale: "de_DE",
    type: "website",
  },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
