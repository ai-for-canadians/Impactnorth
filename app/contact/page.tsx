import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/shared/CalendlyEmbed";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free AI strategy call with ImpactNorth AI. Based in Toronto (Eastern Time), serving clients across North America. Let's discuss how AI can help your organization.",
  openGraph: {
    title: "Contact | ImpactNorth AI",
    description:
      "Book a free strategy call or send us a message. Let's discuss how AI can help your organization.",
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
            Book a free 30-minute strategy call or send us a message. Either
            way, we&apos;ll get back to you quickly.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Calendly */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">
                Book a call
              </h2>
              <p className="text-text-secondary mb-8">
                Pick a time that works for you. We&apos;ll discuss your AI goals
                and create a practical roadmap for your organization.
              </p>
              <CalendlyEmbed />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">
                Send a message
              </h2>
              <p className="text-text-secondary mb-8">
                Prefer to write? Tell us about your organization and what
                you&apos;re looking for. We&apos;ll respond within one business
                day.
              </p>
              <ContactForm />

              {/* Contact info */}
              <div className="mt-12 pt-8 border-t border-border space-y-4">
                <div className="flex items-center gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span>hello@impactnorth.org</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>Toronto, Canada (Eastern Time)</span>
                </div>
                <p className="text-sm text-text-secondary/70">
                  We work with clients across North America virtually, and
                  travel for in-person engagements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
