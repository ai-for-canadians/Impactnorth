import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/shared/Button";

const caseStudyData: Record<
  string,
  {
    title: string;
    org: string;
    orgType: string;
    service: string;
    timeline: string;
    challenge: string;
    challengeDetail: string;
    approach: string[];
    results: { metric: string; description: string }[];
    quote: string;
    quoteAuthor: string;
    quoteRole: string;
  }
> = {
  "genome-atlantic-ai-workshop": {
    title: "How a national science organization equipped their team with AI in one day",
    org: "National Science Organization",
    orgType: "Nonprofit",
    service: "AI Readiness Workshop",
    timeline: "1-day workshop + 2-week follow-up",
    challenge: "A 20-person team eager to use AI but stuck at the starting line",
    challengeDetail:
      "The organization had a small but passionate team doing critical work in genomics research communication and stakeholder engagement. They knew AI could help with grant writing, report generation, and public communications — but nobody had formal training, there was no AI policy, and individual experimentation was inconsistent and uncoordinated.",
    approach: [
      "Conducted a pre-workshop assessment of existing workflows and pain points",
      "Designed a customized full-day workshop addressing their specific use cases: grant writing, research summaries, stakeholder communications, and data presentation",
      "Provided hands-on training using their actual documents and workflows",
      "Developed a prioritized 30-day action plan with quick wins and longer-term goals",
      "Delivered follow-up resources and a 2-week async support period",
    ],
    results: [
      { metric: "20+ hours/month", description: "Saved per employee on routine tasks" },
      { metric: "5 workflows", description: "Implemented in the first week post-workshop" },
      { metric: "100%", description: "Team reported increased confidence in using AI" },
      { metric: "< 1 day", description: "Time to first independent AI workflow" },
    ],
    quote: "The workshop completely changed how our team thinks about AI. We went from curious to confident in a single day, and the practical focus meant we were using what we learned immediately.",
    quoteAuthor: "Workshop Participant",
    quoteRole: "Senior Program Manager",
  },
  "communications-team-transformation": {
    title: "From AI curious to AI confident: A communications team's transformation",
    org: "Regional Communications Agency",
    orgType: "Small Business",
    service: "1:1 AI Coaching + Implementation Sprint",
    timeline: "8-week engagement",
    challenge: "A communications team drowning in repetitive content tasks",
    challengeDetail:
      "A growing communications agency was spending over 60% of their time on repetitive content creation tasks — first drafts, social media scheduling, client reporting, and meeting summaries. The founder knew AI could help but had tried generic tools and courses without seeing meaningful results. They needed a customized approach that fit their specific client workflows.",
    approach: [
      "Started with 1:1 coaching for the founder to identify highest-impact opportunities",
      "Conducted a deep workflow audit across all client-facing processes",
      "Built 4 custom AI workflows: content brief-to-draft pipeline, social media content calendar generation, client report automation, and meeting-to-action-items summarization",
      "Trained the full team on each workflow with hands-on practice sessions",
      "Documented all workflows as SOPs for consistent team-wide adoption",
    ],
    results: [
      { metric: "40%", description: "Reduction in content production time" },
      { metric: "8x", description: "ROI on training investment within 3 months" },
      { metric: "15 hrs/week", description: "Freed up for strategic client work" },
      { metric: "3 new clients", description: "Acquired with capacity freed by AI" },
    ],
    quote: "We tried learning AI on our own for months and barely scratched the surface. ImpactNorth understood our business, built workflows around how we actually work, and the results were immediate.",
    quoteAuthor: "Agency Founder",
    quoteRole: "CEO & Creative Director",
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyData[slug];
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: study.title,
    description: `${study.challenge}. See how ${study.org} achieved measurable results with ImpactNorth AI.`,
    openGraph: {
      title: `${study.title} | ImpactNorth AI`,
      description: study.challenge,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyData[slug];

  if (!study) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                {study.orgType}
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                {study.service}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-gray-400 text-sm">
              {study.org} &middot; {study.timeline}
            </p>
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section className="bg-primary py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {study.results.map((r) => (
              <div key={r.description}>
                <div className="font-mono text-2xl md:text-3xl font-bold text-accent">
                  {r.metric}
                </div>
                <p className="text-gray-300 text-sm mt-1">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Challenge */}
          <div className="mb-16">
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              The Challenge
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4">
              {study.challenge}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {study.challengeDetail}
            </p>
          </div>

          {/* Approach */}
          <div className="mb-16">
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              Our Approach
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">
              What ImpactNorth did
            </h2>
            <ol className="space-y-4">
              {study.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white font-mono font-bold text-sm flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-text-secondary text-lg">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Quote */}
          <blockquote className="bg-white rounded-3xl border border-border p-10 mb-16">
            <svg className="w-10 h-10 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
            </svg>
            <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed mb-6">
              &ldquo;{study.quote}&rdquo;
            </p>
            <footer>
              <p className="font-semibold text-primary">{study.quoteAuthor}</p>
              <p className="text-sm text-text-secondary">{study.quoteRole}</p>
            </footer>
          </blockquote>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-serif text-2xl text-primary mb-4">
              Ready for results like these?
            </h2>
            <p className="text-text-secondary mb-6">
              Book a free strategy call and find out what&apos;s possible for
              your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Book a Free Strategy Call
              </Button>
              <Button href="/case-studies" variant="outline" size="md">
                View More Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
