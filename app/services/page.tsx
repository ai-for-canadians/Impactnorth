import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { CalendlyEmbed } from "@/components/shared/CalendlyEmbed";
import { StructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "AI consulting services for nonprofits and growing companies. From 1:1 coaching ($500/session) to Fractional CAO ($6,000/mo). Practical AI implementation with measurable results.",
  openGraph: {
    title: "Services & Pricing | ImpactNorth AI",
    description:
      "AI consulting services from 1:1 coaching to full implementation. Practical AI that works, starting at $500/session.",
  },
};

const services = [
  {
    id: "coaching",
    title: "1:1 AI Coaching",
    badge: "Most Popular",
    price: "$500–750 USD/session",
    priceAlt: "or $2,500–4,000/month retainer",
    duration: "60-minute sessions, ongoing",
    description: "Our most popular entry point — and our highest-rated service.",
    outcome: "Clients typically save 5–10 hours/week within the first month",
    forWho: "Executive Directors, founders, team leads who want to move fast",
    includes: [
      "Personalized, one-on-one AI coaching sessions",
      "Tailored to your role, your tools, your workflows",
      "Hands-on: you'll leave every session with something you can use immediately",
      "Async support between sessions via Slack or email",
      "Progress tracking and workflow documentation",
    ],
    featured: true,
  },
  {
    id: "workshop",
    title: "AI Readiness Workshop",
    price: "$3,500–5,000 USD",
    duration: "Half-day or full-day, virtual or in-person",
    description: "Get your entire team up to speed in a single session.",
    outcome: "Your team leaves with 3–5 AI workflows they can use on Monday morning",
    forWho: "Teams of 5–25 ready to get started together",
    includes: [
      "AI opportunity assessment customized to your organization",
      "Hands-on tool training with your actual workflows",
      "Prioritized action plan with quick wins identified",
      "Follow-up resource guide and implementation checklist",
    ],
    featured: false,
  },
  {
    id: "sprint",
    title: "AI Implementation Sprint",
    price: "$8,000–15,000 USD",
    duration: "4–8 week engagement",
    description: "Go beyond training. Build AI into your operations.",
    outcome: "Measurable productivity gains documented and repeatable",
    forWho: "Organizations ready to move from exploring to operating",
    includes: [
      "Deep workflow audit and AI integration assessment",
      "3–5 custom AI workflows built and documented",
      "Staff training and standard operating procedures",
      "Before/after metrics and impact measurement",
      "30-day post-sprint support",
    ],
    featured: false,
  },
  {
    id: "cao",
    title: "Fractional Chief AI Officer",
    price: "$6,000–12,000 USD/month",
    duration: "Ongoing strategic engagement",
    description: "Enterprise-grade AI leadership at a fraction of the cost.",
    outcome: "A complete AI strategy aligned with your organizational goals",
    forWho: "Organizations with 50+ employees scaling AI across departments",
    includes: [
      "AI roadmap development and execution oversight",
      "Vendor evaluation and technology selection",
      "AI policy development and governance",
      "Board-ready presentations and reporting",
      "Team training and change management",
    ],
    featured: false,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "ImpactNorth AI",
  },
  serviceType: "AI Consulting",
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Consulting Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
      price: s.price,
      priceCurrency: "USD",
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />

      {/* Hero */}
      <section className="bg-dark-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            From first steps to full transformation
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find your starting point. Every engagement is customized to your
            organization, your workflows, and your goals.
          </p>
        </div>
      </section>

      {/* Service sections */}
      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`rounded-3xl p-8 md:p-12 ${
                service.featured
                  ? "bg-primary text-white border-2 border-accent"
                  : "bg-white border border-border"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left: Title and pricing */}
                <div className="lg:col-span-1">
                  {service.badge && (
                    <span className="inline-block bg-accent text-primary text-sm font-bold px-3 py-1 rounded-full mb-4">
                      {service.badge}
                    </span>
                  )}
                  <h2
                    className={`font-serif text-3xl md:text-4xl mb-4 ${
                      service.featured ? "text-white" : "text-primary"
                    }`}
                  >
                    {service.title}
                  </h2>
                  <div className="mb-4">
                    <span
                      className={`font-mono text-2xl font-bold ${
                        service.featured ? "text-accent" : "text-primary"
                      }`}
                    >
                      {service.price}
                    </span>
                    {service.priceAlt && (
                      <span
                        className={`block text-sm mt-1 ${
                          service.featured ? "text-gray-400" : "text-text-secondary"
                        }`}
                      >
                        {service.priceAlt}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm mb-2 ${
                      service.featured ? "text-gray-400" : "text-text-secondary"
                    }`}
                  >
                    {service.duration}
                  </p>
                  <p
                    className={`text-lg italic ${
                      service.featured ? "text-gray-300" : "text-text-secondary"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-2">
                  {/* What's included */}
                  <h3
                    className={`text-sm font-bold uppercase tracking-wider mb-4 ${
                      service.featured ? "text-accent" : "text-secondary"
                    }`}
                  >
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            service.featured ? "text-accent" : "text-secondary"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span
                          className={
                            service.featured ? "text-gray-200" : "text-text-secondary"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4
                        className={`text-sm font-bold uppercase tracking-wider mb-2 ${
                          service.featured ? "text-accent" : "text-secondary"
                        }`}
                      >
                        Who It&apos;s For
                      </h4>
                      <p
                        className={
                          service.featured ? "text-gray-300" : "text-text-secondary"
                        }
                      >
                        {service.forWho}
                      </p>
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-bold uppercase tracking-wider mb-2 ${
                          service.featured ? "text-accent" : "text-secondary"
                        }`}
                      >
                        Expected Outcome
                      </h4>
                      <p
                        className={
                          service.featured ? "text-gray-300" : "text-text-secondary"
                        }
                      >
                        &ldquo;{service.outcome}&rdquo;
                      </p>
                    </div>
                  </div>

                  <Button
                    href="/contact"
                    variant={service.featured ? "primary" : "secondary"}
                    size="lg"
                  >
                    Book a Call to Discuss
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-12">
            Compare Services
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-4 pr-4 text-primary font-semibold">Feature</th>
                  <th className="py-4 px-4 text-primary font-semibold">1:1 Coaching</th>
                  <th className="py-4 px-4 text-primary font-semibold">Workshop</th>
                  <th className="py-4 px-4 text-primary font-semibold">Sprint</th>
                  <th className="py-4 px-4 text-primary font-semibold">Fractional CAO</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                {[
                  { feature: "Starting Price", values: ["$500/session", "$3,500", "$8,000", "$6,000/mo"] },
                  { feature: "Duration", values: ["Ongoing", "1 day", "4–8 weeks", "Ongoing"] },
                  { feature: "Team Size", values: ["1 person", "5–25", "Whole org", "50+"] },
                  { feature: "Custom Workflows", values: ["Yes", "3–5", "3–5 built", "Org-wide"] },
                  { feature: "Strategy & Roadmap", values: ["Individual", "Team plan", "Full audit", "Enterprise"] },
                  { feature: "Ongoing Support", values: ["Async included", "Follow-up guide", "30-day post", "Continuous"] },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-4 pr-4 font-medium text-primary">{row.feature}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="py-4 px-4">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-bg">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
            Not sure which service is right for you?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Book a free strategy call and we&apos;ll recommend the best starting
            point for your organization.
          </p>
          <CalendlyEmbed />
        </div>
      </section>
    </>
  );
}
