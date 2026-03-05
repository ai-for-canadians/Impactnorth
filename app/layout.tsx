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
    default: "ImpactNorth AI — Practical AI Consulting for Nonprofits & Growing Companies",
    template: "%s | ImpactNorth AI",
  },
  description:
    "ImpactNorth AI helps nonprofits and growing companies implement AI that actually works — practical training, hands-on coaching, and measurable results. Save 20+ hours/month per employee.",
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "ImpactNorth AI — Practical AI Consulting for Nonprofits & Growing Companies",
    description:
      "Practical AI training, hands-on coaching, and measurable results for nonprofits and growing companies. Save 20+ hours/month per employee.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImpactNorth AI — Practical AI Consulting",
    description:
      "Practical AI training, hands-on coaching, and measurable results for nonprofits and growing companies.",
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
  description: "AI consulting for nonprofits and growing companies",
  areaServed: { "@type": "Country", name: "United States" },
  sameAs: [SITE_CONFIG.linkedin],
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE_CONFIG.email,
    contactType: "sales",
    areaServed: "US",
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
