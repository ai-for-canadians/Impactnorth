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
            Turn AI Tools Into{" "}
            <span className="text-accent">Operational Assets</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            While 42% of organizations pay for AI tools, only 12% achieve true
            operational value. We bridge that gap &mdash; delivering measurable
            efficiency, expanded capacity, and succession-ready infrastructure
            for mission-driven organizations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book a Strategy Call
            </Button>
            <Button
              href="#metrics"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              See Our Impact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
