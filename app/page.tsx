import { Hero } from "@/components/home/Hero";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { RealityGap } from "@/components/home/RealityGap";
import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { FiveLayerModel } from "@/components/home/FiveLayerModel";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { SuccessionCallout } from "@/components/home/SuccessionCallout";
import { ValueReportCTA } from "@/components/home/ValueReportCTA";
import { CalendlyEmbed } from "@/components/shared/CalendlyEmbed";
import { CTABar } from "@/components/layout/CTABar";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <RealityGap />
      <ImpactMetrics />
      <FiveLayerModel />
      <ServicesPreview />
      <SuccessionCallout />
      <ValueReportCTA />

      {/* Calendly Section */}
      <section className="py-20 lg:py-28 bg-white" id="book">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              Get Started
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Book a Strategy Call
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Book a free strategy call. We&apos;ll discuss where AI can make the
              biggest impact for your organization.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </section>

      <CTABar />
    </>
  );
}
