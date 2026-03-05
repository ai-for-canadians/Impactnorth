import { METRICS } from "@/lib/constants";
import { MetricCard } from "@/components/shared/MetricCard";

export function MetricsBar() {
  return (
    <section className="py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
            Proven Results
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Real numbers. Real impact.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {METRICS.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
