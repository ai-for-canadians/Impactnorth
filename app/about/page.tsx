import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Patrick Farrar, Founder & CEO of ImpactNorth AI. 12+ years in Canada's innovation ecosystem, $18M+ in funding enabled, 500+ partnerships built. Now helping organizations across North America implement AI practically.",
  openGraph: {
    title: "About | ImpactNorth AI",
    description:
      "12+ years in innovation. $18M+ in funding enabled. 500+ partnerships built. Meet the team behind ImpactNorth AI.",
  },
};

const milestones = [
  {
    role: "Director of Innovation",
    org: "Halifax Partnership",
    description: "Led innovation strategy for the Halifax region, connecting startups with growth opportunities.",
  },
  {
    role: "CEO",
    org: "Startup Zone",
    description: "Built PEI's leading startup incubator from the ground up, supporting dozens of early-stage ventures.",
  },
  {
    role: "COO",
    org: "Venture for Canada",
    description: "Scaled operations for Canada's leading entrepreneurship fellowship, placing top talent with innovative companies.",
  },
  {
    role: "Founder & CEO",
    org: "ImpactNorth AI",
    description: "Bringing practical AI implementation to nonprofits and growing companies across North America.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
                About ImpactNorth AI
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Making AI practical, accessible, and responsible
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                We exist because most organizations know AI matters — but
                they don&apos;t know where to start. We bridge that gap with
                hands-on implementation, not theoretical lectures.
              </p>
            </div>
            <div className="relative">
              {/* Photo placeholder */}
              <div className="aspect-square rounded-3xl bg-primary-light/20 border border-gray-700 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-secondary/20 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-secondary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 italic">Photo placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patrick's Story */}
      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              The Founder
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8">
              Patrick Farrar
            </h2>
            <div className="prose prose-lg text-text-secondary space-y-6">
              <p className="text-lg leading-relaxed">
                I&apos;ve spent over 12 years building Canada&apos;s innovation
                ecosystem. As COO at Venture for Canada, I helped scale
                operations for the country&apos;s leading entrepreneurship
                fellowship. As CEO at Startup Zone, I built PEI&apos;s premier
                startup incubator from the ground up. And as Director of
                Innovation at Halifax Partnership, I led regional innovation
                strategy.
              </p>
              <p className="text-lg leading-relaxed">
                Along the way, I enabled over $18 million in funding for
                startups and innovation projects, and built more than 500
                partnerships between organizations, governments, and the private
                sector.
              </p>
              <p className="text-lg leading-relaxed">
                Now, I&apos;m channeling that experience into what I believe is
                the most important shift in how organizations work: practical AI
                implementation. Not the hype. Not the fear. The actual, hands-on
                work of integrating AI into real workflows for real people.
              </p>
              <p className="text-lg leading-relaxed">
                I founded ImpactNorth AI because I saw the same gap again and
                again — organizations that knew AI mattered, but had no idea
                where to start. They didn&apos;t need another webinar. They
                needed someone to sit down with them, understand their work, and
                show them exactly how AI could help. That&apos;s what we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "12+", label: "Years in Innovation" },
              { value: "$18M+", label: "Funding Enabled" },
              { value: "500+", label: "Partnerships Built" },
              { value: "100%", label: "Confidence Increase" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
              The journey here
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-accent/20 flex-shrink-0" />
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-serif text-xl text-primary">{m.role}</h3>
                  <p className="text-secondary font-semibold text-sm mb-2">{m.org}</p>
                  <p className="text-text-secondary">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canadian Advantage */}
      <section className="py-20 lg:py-28 bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              The Canadian AI Advantage
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
              Built on a foundation of responsible AI
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Based in Toronto — one of the world&apos;s leading AI research
              hubs and home to the Vector Institute — we bring Canada&apos;s
              global leadership in responsible AI development to every
              engagement. Canada was the first country with a national AI
              strategy, and that commitment to thoughtful, ethical AI informs
              everything we do.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
