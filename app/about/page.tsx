import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { NetworkSection } from "@/components/shared/NetworkSection";
import { FIVE_LAYER_MODEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About ImpactNorth AI",
  description:
    "Our five-layer value model turns AI from a novelty into operational infrastructure. Meet the team behind ImpactNorth AI \u2014 serving mission-driven organizations across North America.",
  openGraph: {
    title: "About | ImpactNorth AI",
    description:
      "Our five-layer value model turns AI from a novelty into operational infrastructure for mission-driven organizations.",
  },
};

const layerIcons: Record<string, React.ReactNode> = {
  clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  diamond: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  ),
  expand: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  ),
  compass: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
};

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
                We exist because most organizations know AI matters &mdash; but
                they don&apos;t know how to turn tools into operational value.
                We bridge that gap with structured implementation, not
                theoretical lectures.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-gray-700">
                <Image
                  src="/headshot.jpeg"
                  alt="Patrick Farrar, Founder & CEO of ImpactNorth AI"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
              Our Approach
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
              The Five-Layer Value Model
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Every engagement is measured across five layers of organizational
              impact &mdash; from immediate time savings to long-term
              succession-ready infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {FIVE_LAYER_MODEL.map((layer, i) => (
              <div
                key={layer.id}
                className="rounded-xl border border-border bg-light-bg p-6 text-center"
              >
                <div
                  className={`w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center ${
                    layer.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  {layerIcons[layer.icon]}
                </div>
                <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                  Layer {i + 1}
                </span>
                <h3 className="font-semibold text-primary mt-1 mb-2 text-sm">
                  {layer.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {layer.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "~50", label: "Hours/month reclaimed" },
              { value: "33\u201350%", label: "Workflow reduction" },
              { value: "$4,675+", label: "Monthly value generated" },
              { value: "90 Days", label: "To transformation" },
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

      {/* Founded by */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
            Leadership
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary mb-6">
            Founded by Patrick Farrar
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            With over a decade of operational experience in the nonprofit and
            innovation sectors &mdash; including leadership roles at Venture for
            Canada, Startup Zone, and Halifax Partnership &mdash; Patrick
            founded ImpactNorth AI to bring practical, measurable AI
            implementation to mission-driven organizations.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Headquartered near Toronto, we serve organizations across North
            America. Patrick leads all client engagements directly, ensuring
            every organization gets senior-level strategic guidance from day
            one.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Strategy Call
          </Button>
        </div>
      </section>

      {/* Network Section */}
      <NetworkSection />
    </>
  );
}
