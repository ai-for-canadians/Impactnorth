import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "AI Consulting for Nonprofits | Operational AI That Delivers Board-Ready ROI",
  description:
    "42% of nonprofits pay for AI tools, but only 12% achieve operational value. Our five-layer framework delivers succession-ready infrastructure and measurable ROI for mission-driven organizations.",
  openGraph: {
    title: "AI Consulting for Nonprofits | ImpactNorth AI",
    description:
      "Our five-layer framework delivers succession-ready infrastructure and measurable ROI for mission-driven organizations.",
  },
};

const useCases = [
  {
    title: "Grant Writing & Research",
    description:
      "Draft compelling proposals faster, research funders more efficiently, and strengthen your applications with AI-assisted writing.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Donor Engagement",
    description:
      "Personalize donor communications at scale, analyze giving patterns, and build stronger relationships with AI-powered insights.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Impact Reporting",
    description:
      "Automate data collection, generate compelling impact reports, and tell your story with data-driven narratives your board and funders will value.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "Volunteer Management",
    description:
      "Streamline scheduling, communication, and coordination with AI tools that save your team hours every week.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Communications & Marketing",
    description:
      "Create newsletter content, social media posts, and campaign materials in a fraction of the time while maintaining your voice.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
  },
  {
    title: "Program Evaluation",
    description:
      "Analyze program outcomes, survey data, and stakeholder feedback more efficiently with AI-powered tools.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    ),
  },
];

export default function NonprofitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              AI for Nonprofits
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              AI should multiply your mission, not your budget
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              While 42% of nonprofits pay for AI tools, only 12% achieve true
              operational value. We bridge that gap with structured AI
              implementation designed for mission-driven organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Book a Strategy Call
              </Button>
              <Button
                href="/assessment"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Take the AI Readiness Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "42%", label: "Pay for AI Tools" },
              { value: "12%", label: "Achieve Operational Value" },
              { value: "$4,675+", label: "Monthly Value Generated" },
              { value: "90 Days", label: "To Transformation" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
              How nonprofits are using AI today
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              These aren&apos;t theoretical possibilities &mdash; they&apos;re
              real workflows our clients implement in their first week.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow"
              >
                <div className="text-secondary mb-4">{uc.icon}</div>
                <h3 className="font-serif text-xl text-primary mb-3">{uc.title}</h3>
                <p className="text-text-secondary">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Succession-Ready Callout */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-primary/10 bg-light-bg p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-primary mb-3">
                  Succession-Ready AI Infrastructure
                </h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  Board members worry about leadership turnover. We build
                  persistent AI workspaces &mdash; documented workflows,
                  institutional memory systems, and organizational context
                  &mdash; that new hires inherit on day one.
                </p>
                <p className="text-primary font-semibold">
                  Your AI investment survives leadership transitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding */}
      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
                We Understand Your World
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                Deep roots in the nonprofit and social impact ecosystem
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                This isn&apos;t generic tech consulting adapted for nonprofits.
                Our team has spent over a decade in the nonprofit and social
                impact ecosystem &mdash; including leadership roles at Venture
                for Canada, Startup Zone, and Halifax Partnership.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                We understand grant cycles, board dynamics, donor relationships,
                and the reality of doing more with less. That context shapes
                every recommendation we make.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-border">
              <h3 className="font-serif text-xl text-primary mb-6">
                How nonprofits fund our services
              </h3>
              <ul className="space-y-4">
                {[
                  "Professional development budgets ($2K\u2013$5K per employee annually)",
                  "Capacity-building grants from foundations",
                  "Technology adoption or digital transformation funding",
                  "Board-designated innovation funds",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-text-secondary/70 italic">
                Most workshops fall under professional development budgets.
                Implementation projects are often fundable through
                capacity-building grants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            More mission, less admin
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s talk about how AI can help your nonprofit save time, serve
            more people, and amplify your impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Book a Strategy Call
            </Button>
            <Button
              href="/assessment"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-secondary"
            >
              Take the Assessment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
