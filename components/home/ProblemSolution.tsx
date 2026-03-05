"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function StatCard({ value, description, index }: { value: string; description: string; index: number }) {
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-8 border border-border shadow-sm transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="font-mono text-4xl md:text-5xl font-bold text-accent mb-3">
        {value}
      </div>
      <p className="text-text-secondary text-lg">{description}</p>
    </div>
  );
}

export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-28 bg-light-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problem side */}
          <div>
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              The Problem
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
              The AI gap is real
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Most organizations know AI matters. But knowing and doing are two
              very different things. The gap between AI curiosity and AI
              implementation is where productivity — and competitive advantage —
              goes to die.
            </p>
            <div className="space-y-6">
              {STATS.map((stat, i) => (
                <StatCard key={i} value={stat.value} description={stat.description} index={i} />
              ))}
            </div>
          </div>

          {/* Solution side */}
          <div className="bg-primary rounded-3xl p-10 lg:p-12 text-white">
            <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
              Our Approach
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              We close it
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              ImpactNorth AI doesn&apos;t just teach AI concepts — we implement
              AI workflows that save your team real hours, starting in the first
              week.
            </p>
            <ul className="space-y-4">
              {[
                "Customized to your organization, your workflows, your goals",
                "Hands-on implementation, not theoretical lectures",
                "Measurable results with before-and-after metrics",
                "Ongoing support to ensure adoption sticks",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
