import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/shared/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free AI strategy call with ImpactNorth AI. Serving mission-driven organizations across North America. Eastern Time (ET).",
  openGraph: {
    title: "Book a Strategy Call | ImpactNorth AI",
    description:
      "Book a free strategy call. We\u2019ll discuss how AI can help your organization.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Let&apos;s talk about your AI opportunity
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Book a free 15-minute strategy call. We&apos;ll discuss where AI can
            make the biggest impact for your organization &mdash; and map out a
            practical path forward.
          </p>
        </div>
      </section>

      {/* Calendly booking */}
      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4">
              Pick a time that works for you
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Choose a slot below and we&apos;ll send you a calendar invite with
              a video link. No prep needed &mdash; just come ready to talk about
              your goals.
            </p>
          </div>

          <CalendlyEmbed />

          {/* Location info */}
          <div className="mt-12 text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>Eastern Time (ET)</span>
            </div>
            <p className="text-sm text-text-secondary/70">
              We work with clients across North America virtually.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
