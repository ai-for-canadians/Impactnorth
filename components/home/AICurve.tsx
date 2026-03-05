"use client";

import { useEffect, useRef, useState } from "react";
import { AI_CURVE_STAGES } from "@/lib/constants";

const stageColors = [
  "border-gray-300 bg-gray-50",
  "border-blue-300 bg-blue-50",
  "border-secondary bg-green-50",
  "border-accent bg-amber-50",
];

const stageIconColors = [
  "text-gray-400",
  "text-blue-500",
  "text-secondary",
  "text-accent",
];

export function AICurve() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
            Our Framework
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            The AI Curve
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Our proprietary framework meets your organization exactly where you
            are — and maps the path forward.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {AI_CURVE_STAGES.map((stage, i) => (
              <div
                key={stage.stage}
                className={`relative rounded-2xl border-2 p-8 text-center transition-all duration-700 ${stageColors[i]}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transitionDelay: `${i * 200}ms`,
                }}
              >
                {/* Stage number */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 ${stageColors[i].split(" ")[0]} mb-4 font-mono font-bold text-lg ${stageIconColors[i]}`}
                >
                  {i + 1}
                </div>
                <h3 className="font-serif text-xl text-primary mb-2">
                  {stage.stage}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {stage.description}
                </p>
                {/* Arrow between stages on desktop */}
                {i < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary text-lg">
            Not sure where you are?{" "}
            <a
              href="/assessment"
              className="text-secondary font-semibold hover:text-secondary-light transition-colors underline underline-offset-4"
            >
              Take the free AI Readiness Assessment
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
