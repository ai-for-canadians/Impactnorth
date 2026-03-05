import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "AI Consulting for Small Business",
  description:
    "Practical AI implementation for small and mid-size businesses. Operations, customer service, marketing, sales — compete with enterprises using AI that works. 20+ hours saved per employee per month.",
  openGraph: {
    title: "AI Consulting for Small Business | ImpactNorth AI",
    description:
      "Your competitors are using AI. Are you? Practical AI implementation starting at $500/session.",
  },
};

const useCases = [
  {
    title: "Operations & Workflow Automation",
    description: "Streamline repetitive processes, automate data entry, and build workflows that free your team to focus on high-value work.",
  },
  {
    title: "Customer Service & Experience",
    description: "Respond faster, personalize at scale, and build systems that make every customer feel like your only customer.",
  },
  {
    title: "Marketing & Content Creation",
    description: "Create campaigns, write copy, and analyze performance in a fraction of the time — without losing your brand voice.",
  },
  {
    title: "Sales Processes",
    description: "Qualify leads, draft proposals, and manage your pipeline with AI tools that help you close more deals faster.",
  },
  {
    title: "Financial Operations",
    description: "Automate bookkeeping tasks, generate financial reports, and spot trends in your numbers before they become problems.",
  },
  {
    title: "HR & Recruitment",
    description: "Screen candidates, draft job descriptions, and manage onboarding more efficiently with AI-assisted workflows.",
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
              Small and mid-size businesses can adopt AI faster than enterprises.
              Your size is your advantage. We help you use it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Book a Free Strategy Call
              </Button>
              <Button href="/assessment" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
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
                The average employee saves 20+ hours per month with practical AI
                workflows. What would your team do with that time?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "20+", label: "Hours/month saved per employee" },
                { value: "8-12x", label: "ROI on training investment" },
                { value: "2-4", label: "Weeks to measurable results" },
                { value: "100%", label: "Confidence increase" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 border border-border text-center">
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
              <div key={uc.title} className="bg-light-bg rounded-2xl p-8 border border-border hover:shadow-md transition-shadow">
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
            Book a free strategy call and find out exactly where AI can
            save your team the most time.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Book a Free Strategy Call
          </Button>
        </div>
      </section>
    </>
  );
}
