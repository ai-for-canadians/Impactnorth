"use client";

import { useEffect, useRef, useState } from "react";

interface MetricCardProps {
  value: string;
  label: string;
  suffix?: string;
}

export function MetricCard({ value, label, suffix = "" }: MetricCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric part for animation
    const numericMatch = value.match(/^(\d+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[1], 10);
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      // Preserve any non-numeric suffix from the value (e.g., "20+" -> keep "+")
      const rest = value.slice(numericMatch[1].length);
      setDisplayValue(`${current}${rest}`);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="font-mono text-5xl md:text-6xl font-bold text-accent mb-2">
        {isVisible ? displayValue : "0"}
        {suffix}
      </div>
      <p className="text-text-secondary text-lg">{label}</p>
    </div>
  );
}
