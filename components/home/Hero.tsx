import { Button } from "@/components/shared/Button";

export function Hero() {
  return (
    <section className="relative bg-dark-bg overflow-hidden" id="hero">
      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 400 800" fill="none" className="w-full h-full">
          <path d="M200 0L400 400L200 800L0 400Z" fill="white" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-tight">
            Your team could save{" "}
            <span className="text-accent">20+ hours a month</span> with AI.
            <br />
            We&apos;ll show you how.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            ImpactNorth AI helps nonprofits and growing companies implement AI
            that actually works — practical training, hands-on coaching, and
            measurable results.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book a Free Strategy Call
            </Button>
            <Button href="/assessment" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Take the AI Readiness Assessment
            </Button>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">
            Trusted by organizations across North America
          </p>
          <div className="flex flex-wrap items-center gap-8 opacity-50">
            {/* Placeholder logos — replace with real client logos */}
            {["Genome Atlantic", "Venture for Canada", "Startup Zone", "Halifax Partnership"].map(
              (name) => (
                <div
                  key={name}
                  className="text-gray-400 text-sm font-medium border border-gray-600 rounded-lg px-4 py-2"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
