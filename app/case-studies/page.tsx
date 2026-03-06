import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real organizations. See how nonprofits and growing companies are saving time and increasing impact with ImpactNorth AI.",
  openGraph: {
    title: "Case Studies | ImpactNorth AI",
    description:
      "See how organizations are saving 20+ hours/month with practical AI implementation.",
  },
};

const caseStudies = [
  {
    slug: "genome-atlantic-ai-workshop",
    title: "How a national science organization equipped their team with AI in one day",
    org: "National Science Organization",
    challenge: "A 20-person team eager to use AI but with no formal training or strategy",
    result: "5+ AI workflows implemented in the first week after training",
    metric: "20+ hrs/mo",
    metricLabel: "Saved per employee",
    tags: ["Nonprofit", "Workshop", "Science"],
  },
  {
    slug: "communications-team-transformation",
    title: "From AI curious to AI confident: A communications team's transformation",
    org: "Regional Communications Agency",
    challenge: "Communications team spending 60% of time on repetitive content tasks",
    result: "Content production time reduced by 40% with AI-assisted workflows",
    metric: "40%",
    metricLabel: "Time saved on content",
    tags: ["Small Business", "Coaching", "Marketing"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
            Case Studies
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Real results. Real organizations.
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            See how nonprofits and growing companies are saving time, building
            confidence, and multiplying their impact with practical AI.
          </p>
        </div>
      </section>

      {/* Case study cards */}
      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group bg-white rounded-3xl border border-border p-8 md:p-10 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-2xl text-primary mb-4 group-hover:text-secondary transition-colors">
                  {cs.title}
                </h2>
                <p className="text-text-secondary mb-6">{cs.challenge}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-mono text-3xl font-bold text-accent">
                      {cs.metric}
                    </div>
                    <p className="text-sm text-text-secondary">{cs.metricLabel}</p>
                  </div>
                  <span className="text-secondary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read study
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-primary mb-6">
            Ready to write your own success story?
          </h2>
          <Button href="/contact" variant="primary" size="lg">
            Book a Strategy Call
          </Button>
        </div>
      </section>
    </>
  );
}
