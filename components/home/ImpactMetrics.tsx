"use client";

import { useEffect, useRef, useState } from "react";
import { IMPACT_METRICS } from "@/lib/constants";

function AnimatedValue({ value, triggered }: { value: string; triggered: boolean }) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    // Only animate purely numeric values
    const numMatch = value.match(/^(\d+(?:\.\d+)?)$/);
    if (!numMatch || !triggered) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(numMatch[1]);
    const isFloat = value.includes(".");
    const steps = 30;
    const duration = 1200;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(isFloat ? current.toFixed(2) : Math.round(current).toString());

      if (step >= steps) {
        clearInterval(interval);
        setDisplay(value);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [value, triggered]);

  return <>{display}</>;
}

export function ImpactMetrics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics" className="bg-dark-bg py-20 lg:py-28" aria-label="Impact metrics">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
            Proven Results
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-white">
            Impact by the Numbers
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Real metrics from real engagements with mission-driven organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_METRICS.map((metric, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-gray-700/50 bg-white/5 p-6 lg:p-8 transition-all duration-500 hover:border-accent/30 hover:bg-white/8 ${
                triggered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: triggered ? `${i * 100}ms` : "0ms" }}
            >
              <div className="font-mono text-3xl md:text-4xl font-bold text-accent leading-tight">
                <AnimatedValue value={metric.value} triggered={triggered} />
                <span className="text-xl md:text-2xl text-accent/80">{metric.suffix}</span>
              </div>
              <p className="mt-2 text-lg font-semibold text-white">{metric.subtitle}</p>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
