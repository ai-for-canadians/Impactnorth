"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/shared/Button";
import type { AssessmentResult } from "@/lib/assessment-scoring";

interface ResultsDisplayProps {
  result: AssessmentResult;
  name: string;
}

const stageColors: Record<string, string> = {
  "AI Curious": "text-gray-500",
  "AI Capable": "text-blue-500",
  "AI Confident": "text-secondary",
  "AI Transformed": "text-accent",
};

const stageBgColors: Record<string, string> = {
  "AI Curious": "bg-gray-100",
  "AI Capable": "bg-blue-50",
  "AI Confident": "bg-green-50",
  "AI Transformed": "bg-amber-50",
};

export function ResultsDisplay({ result, name }: ResultsDisplayProps) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const target = result.score;
    const duration = 1500;
    const steps = 50;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setDisplayScore(Math.min(Math.round(increment * step), target));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [result.score]);

  return (
    <div className="text-center">
      {/* Score */}
      <p className="text-text-secondary mb-2">
        {name ? `${name}, your` : "Your"} AI Readiness Score
      </p>
      <div className="relative inline-flex items-center justify-center w-48 h-48 mb-6">
        <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#E2DDD5" strokeWidth="6" />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeDasharray={`${(displayScore / 100) * 283} 283`}
            strokeLinecap="round"
            className={stageColors[result.stage] || "text-accent"}
          />
        </svg>
        <div className="flex flex-col items-center">
          <span className="font-mono text-5xl font-bold text-primary">{displayScore}</span>
          <span className="text-sm text-text-secondary">out of 100</span>
        </div>
      </div>

      {/* Stage */}
      <div className={`inline-block px-6 py-3 rounded-2xl mb-6 ${stageBgColors[result.stage]}`}>
        <span className={`font-serif text-2xl font-bold ${stageColors[result.stage]}`}>
          {result.stage}
        </span>
      </div>

      <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
        {result.stageDescription}
      </p>

      {/* Recommendations */}
      <div className="text-left bg-light-bg rounded-2xl p-8 mb-10">
        <h3 className="font-serif text-xl text-primary mb-6 text-center">
          Your personalized recommendations
        </h3>
        <ul className="space-y-4">
          {result.recommendations.map((rec, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-primary font-mono font-bold text-sm flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span className="text-text-secondary">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl text-primary">
          Want to discuss your results?
        </h3>
        <p className="text-text-secondary mb-4">
          Book a free strategy call and get a customized AI roadmap for your
          organization.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Book a Strategy Call
        </Button>
      </div>
    </div>
  );
}
