import { Button } from "@/components/shared/Button";

export function AboutTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-light-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-primary/5 border border-border flex items-center justify-center overflow-hidden">
              {/* TODO: Replace with Patrick's headshot */}
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-secondary/10 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-secondary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <p className="text-sm text-text-secondary/60 italic">Photo placeholder</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
          </div>

          {/* Bio */}
          <div>
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              Meet Your Guide
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
              Patrick Farrar
            </h2>
            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              Founder & CEO of ImpactNorth AI. I&apos;ve spent 12+ years
              building Canada&apos;s innovation ecosystem — as COO at Venture
              for Canada, CEO at Startup Zone, and Director of Innovation at
              Halifax Partnership.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Along the way, I&apos;ve enabled $18M+ in funding and built 500+
              partnerships. Now I&apos;m helping organizations across North
              America implement AI practically and responsibly.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "12+", label: "Years in Innovation" },
                { value: "$18M+", label: "Funding Enabled" },
                { value: "500+", label: "Partnerships Built" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white rounded-xl border border-border">
                  <div className="font-mono text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button href="/about" variant="outline" size="md">
              Read the Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
