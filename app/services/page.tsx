import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { CalendlyEmbed } from "@/components/shared/CalendlyEmbed";
import { StructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "AI Consulting Services | Executive Advisory, Strategy & Integration",
  description:
    "From Executive AI Advisory to full Operational Integration \u2014 our five-layer value model delivers $4,675\u2013$10,450/month in documented value. Serving nonprofits and SMEs across North America.",
  openGraph: {
    title: "AI Consulting Services | ImpactNorth AI",
    description:
      "Executive AI Advisory, Strategy Intensives, Operational Integration, and Fractional CAO services. Five-layer value model with documented ROI.",
  },
};

const services = [
  {
    id: "advisory",
    title: "Executive AI Advisory",
    badge: "Most Popular",
    price: "$500\u2013750 USD/session",
    priceAlt: "or $2,500\u20134,000/month retainer",
    duration: "Personalized sessions, ongoing",
    description:
      "Strategic AI counsel for leaders who need results, not tutorials.",
    outcome:
      "Clients typically reclaim 50+ hours/month and report complete elimination of routine overtime within 60 days.",
    forWho:
      "Executive Directors, COOs, Communications Directors, and senior leaders at mission-driven organizations.",
    includes: [
      "Customized AI workflow development for your specific function",
      "Persistent AI workspace setup (Claude Projects, custom instructions)",
      "Async support between sessions via Slack or email",
      "Monthly Value Report documenting ROI across all five value layers",
    ],
    testimonial: {
      quote:
        "ImpactNorth didn\u2019t just give us tools \u2014 they gave us our Fridays back. I\u2019m a much happier human being.",
      attribution: "Communications Director, National Science Organization",
    },
    featured: true,
  },
  {
    id: "intensive",
    title: "The AI Strategy Intensive",
    price: "$3,500\u20135,000 USD",
    duration: "Half-day or full-day, virtual or in-person",
    description: "A focused sprint from AI-curious to AI-capable.",
    outcome:
      "Teams leave with operational workflows \u2014 not slide decks \u2014 and a clear path to measurable ROI within 30 days.",
    forWho: "Leadership teams of 5\u201325 ready to align on AI strategy.",
    includes: [
      "Organizational AI readiness assessment",
      "Workflow audit across 3\u20135 priority functions",
      "Hands-on tool training with your actual content and data",
      "Prioritized implementation roadmap with 30/60/90-day milestones",
    ],
    testimonial: {
      quote:
        "We left with workflows we used on Monday morning \u2014 not another slide deck.",
      attribution: "",
    },
    featured: false,
  },
  {
    id: "integration",
    title: "Operational AI Integration",
    price: "$8,000\u201315,000 USD",
    duration: "4\u20138 week engagement",
    description: "From scattered tools to embedded systems.",
    outcome:
      "We consistently deliver 33\u201350% workflow reduction and $4,675\u2013$10,450/month in measurable value within the first 90 days.",
    forWho:
      "Organizations ready to move from exploring AI to operating with AI.",
    includes: [
      "Deep workflow audit across all priority functions",
      "Custom AI workspace construction (Claude Projects, automated workflows)",
      "3\u20135 fully documented operational AI workflows with SOPs",
      "Staff training program with adoption reinforcement strategy",
      "Monthly Value Report with five-layer ROI benchmarking",
    ],
    testimonial: {
      quote:
        "Within one month, we went from zero AI infrastructure to five active value layers generating board-ready ROI.",
      attribution: "Executive, National Science Organization",
    },
    featured: false,
  },
  {
    id: "cao",
    title: "Fractional Chief AI Officer",
    price: "$6,000\u201312,000 USD/month",
    duration: "Ongoing strategic engagement",
    description:
      "Enterprise-grade AI strategy without the enterprise price tag.",
    outcome:
      "A complete AI strategy aligned with your organizational goals, with documented monthly ROI.",
    forWho: "Organizations with 50+ employees scaling AI across departments.",
    includes: [
      "AI roadmap development and execution oversight",
      "Vendor evaluation and technology selection",
      "AI policy development and governance",
      "Board-ready presentations and monthly value reporting",
      "Team training and change management",
    ],
    testimonial: {
      quote:
        "Enterprise-grade AI strategy without the enterprise price tag.",
      attribution: "",
    },
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
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
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
            From advisory to operational AI infrastructure
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Every engagement is measured across five value layers. Choose the
            entry point that fits your organization.
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

                  {/* Testimonial */}
                  {service.testimonial && (
                    <div
                      className={`mt-6 pl-4 border-l-2 ${
                        service.featured ? "border-accent/40" : "border-secondary/30"
                      }`}
                    >
                      <p
                        className={`text-sm italic ${
                          service.featured ? "text-gray-300" : "text-text-secondary"
                        }`}
                      >
                        &ldquo;{service.testimonial.quote}&rdquo;
                      </p>
                      {service.testimonial.attribution && (
                        <p
                          className={`text-xs mt-1 ${
                            service.featured ? "text-gray-400" : "text-text-secondary/70"
                          }`}
                        >
                          &mdash; {service.testimonial.attribution}
                        </p>
                      )}
                    </div>
                  )}
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
                    Book a Strategy Call
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
                  <th className="py-4 px-4 text-primary font-semibold">Executive Advisory</th>
                  <th className="py-4 px-4 text-primary font-semibold">Strategy Intensive</th>
                  <th className="py-4 px-4 text-primary font-semibold">Integration</th>
                  <th className="py-4 px-4 text-primary font-semibold">Fractional CAO</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                {[
                  { feature: "Starting Price", values: ["$500/session", "$3,500", "$8,000", "$6,000/mo"] },
                  { feature: "Duration", values: ["Ongoing", "1 day", "4\u20138 weeks", "Ongoing"] },
                  { feature: "Team Size", values: ["1 person", "5\u201325", "Whole org", "50+"] },
                  { feature: "Custom Workflows", values: ["Yes", "3\u20135", "3\u20135 built + SOPs", "Org-wide"] },
                  { feature: "Value Reporting", values: ["Monthly", "Post-event", "Monthly", "Monthly"] },
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
