import { Hero } from "@/components/home/Hero";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { AICurve } from "@/components/home/AICurve";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { MetricsBar } from "@/components/home/MetricsBar";
import { WhoWeWorkWith } from "@/components/home/WhoWeWorkWith";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { CalendlyEmbed } from "@/components/shared/CalendlyEmbed";
import { CTABar } from "@/components/layout/CTABar";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <AICurve />
      <ServicesPreview />
      <MetricsBar />
      <WhoWeWorkWith />
      <AboutTeaser />

      {/* Calendly Section */}
      <section className="py-20 lg:py-28 bg-white" id="book">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              Let&apos;s Connect
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Let&apos;s talk about your AI opportunity
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Book a free 30-minute strategy call. We&apos;ll discuss where AI
              can make the biggest impact for your organization.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </section>

      <CTABar />
    </>
  );
}
