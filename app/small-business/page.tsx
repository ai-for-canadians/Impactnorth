import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "AI Consulting for Small Business",
  description:
    "While 42% of organizations pay for AI tools, only 12% get operational value. We help small and mid-size businesses reclaim ~50 hours/month and generate $4,675+ in monthly value with practical AI implementation.",
  openGraph: {
    title: "AI Consulting for Small Business | ImpactNorth AI",
    description:
      "Your competitors are using AI. Are you? Practical AI implementation with documented ROI starting at $500/session.",
  },
};

const useCases = [
  {
    title: "Operations & Workflow Automation",
    description:
      "Streamline repetitive processes, automate data entry, and build workflows that free your team to focus on high-value work.",
  },
  {
    title: "Customer Service & Experience",
    description:
      "Respond faster, personalize at scale, and build systems that make every customer feel like your only customer.",
  },
  {
    title: "Marketing & Content Creation",
    description:
      "Create campaigns, write copy, and analyze performance in a fraction of the time \u2014 without losing your brand voice.",
  },
  {
    title: "Sales Processes",
    description:
      "Qualify leads, draft proposals, and manage your pipeline with AI tools that help you close more deals faster.",
  },
  {
    title: "Financial Operations",
    description:
      "Automate bookkeeping tasks, generate financial reports, and spot trends in your numbers before they become problems.",
  },
  {
    title: "HR & Recruitment",
    description:
      "Screen candidates, draft job descriptions, and manage onboarding more efficiently with AI-assisted workflows.",
  },
];

export default function SmallBusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              AI for Growing Companies
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Your competitors are using AI. Are you?
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              While 42% of organizations pay for AI tools, only 12% achieve true
              operational value. Small and mid-size businesses can adopt AI faster
              than enterprises. Your size is your advantage &mdash; we help you
              use it.
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

      {/* The SME Advantage */}
      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                The small business AI advantage
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Enterprises spend months on AI committees, vendor evaluations,
                and pilot programs. You can start this week. Smaller teams mean
                faster decisions, quicker adoption, and immediate impact.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Our clients typically reclaim ~50 hours per month with
                operational AI workflows. What would your team do with that
                time?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "~50", label: "Hours/month reclaimed" },
                { value: "$4,675+", label: "Monthly value generated" },
                { value: "90", label: "Days to transformation" },
                { value: "Zero", label: "Nights & weekends" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 border border-border text-center"
                >
                  <div className="font-mono text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
              Where AI drives results for growing companies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-light-bg rounded-2xl p-8 border border-border hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif text-xl text-primary mb-3">{uc.title}</h3>
                <p className="text-text-secondary">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
            Start competing with AI today
          </h2>
          <p className="text-primary/80 text-lg mb-8 max-w-xl mx-auto">
            Book a strategy call and find out exactly where AI can generate
            the most value for your team.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Book a Strategy Call
          </Button>
        </div>
      </section>
    </>
  );
}
