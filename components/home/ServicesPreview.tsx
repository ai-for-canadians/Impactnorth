import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/shared/Button";

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-light-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            From advisory to full integration
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every engagement is measured across five value layers. Choose the
            entry point that fits your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary" size="lg">
            View All Services & Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
