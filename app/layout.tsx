import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ImpactNorth AI | Operational AI Consulting for Nonprofits & SMEs",
    template: "%s | ImpactNorth AI",
  },
  description:
    "Turn AI tools into operational assets. ImpactNorth AI delivers measurable efficiency, expanded capacity, and succession-ready infrastructure for mission-driven organizations across North America.",
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "ImpactNorth AI | Operational AI Consulting for Nonprofits & SMEs",
    description:
      "Turn AI tools into operational assets. Measurable efficiency, expanded capacity, and succession-ready infrastructure for mission-driven organizations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImpactNorth AI | Operational AI Consulting",
    description:
      "Turn AI tools into operational assets. Measurable efficiency and succession-ready infrastructure for mission-driven organizations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ImpactNorth AI",
  url: SITE_CONFIG.url,
  description:
    "Operational AI consulting for nonprofits and mission-driven organizations across North America",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  sameAs: [SITE_CONFIG.linkedin],
  contactPoint: {
    "@type": "ContactPoint",
    url: `${SITE_CONFIG.url}/contact`,
    contactType: "sales",
    areaServed: "North America",
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
