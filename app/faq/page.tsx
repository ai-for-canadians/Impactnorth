import type { Metadata } from "next";
import { FAQ_ITEMS } from "@/lib/constants";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/shared/Button";
import { FAQAccordion } from "./FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about AI consulting for nonprofits and growing companies. Learn about our approach, pricing, timeline, and what to expect working with ImpactNorth AI.",
  openGraph: {
    title: "FAQ | ImpactNorth AI",
    description:
      "Common questions about AI consulting for nonprofits and growing companies.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <section className="bg-dark-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Frequently asked questions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with ImpactNorth AI.
            Can&apos;t find your answer?{" "}
            <a
              href="/contact"
              className="text-accent hover:text-accent-light underline underline-offset-4"
            >
              Let&apos;s talk
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FAQAccordion items={FAQ_ITEMS as unknown as { question: string; answer: string }[]} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-primary mb-6">
            Still have questions?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            We&apos;d love to hear from you. Book a strategy call and
            we&apos;ll talk through your specific situation.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Strategy Call
          </Button>
        </div>
      </section>
    </>
  );
}
