import type { Metadata } from "next";
import { AssessmentForm } from "@/components/assessment/AssessmentForm";

export const metadata: Metadata = {
  title: "AI Readiness Assessment",
  description:
    "Take our free AI Readiness Assessment to discover where your organization stands on the AI Curve. Get personalized recommendations in 3 minutes.",
  openGraph: {
    title: "Free AI Readiness Assessment | ImpactNorth AI",
    description:
      "Discover your organization's AI readiness in 3 minutes. Get a personalized score and recommendations.",
  },
};

export default function AssessmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
            Free Assessment
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            How AI-ready is your organization?
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Answer 7 quick questions and get your personalized AI readiness
            score, placement on our AI Curve, and 3 tailored recommendations —
            all in under 3 minutes.
          </p>
        </div>
      </section>

      {/* Assessment */}
      <section className="py-16 lg:py-24 bg-light-bg">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <AssessmentForm />
        </div>
      </section>
    </>
  );
}
