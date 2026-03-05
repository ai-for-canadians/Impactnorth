"use client";

import { useState } from "react";
import {
  ASSESSMENT_QUESTIONS,
  calculateScore,
  getResult,
  type AssessmentResult,
} from "@/lib/assessment-scoring";
import { QuestionStep } from "./QuestionStep";
import { ResultsDisplay } from "./ResultsDisplay";
import { Button } from "@/components/shared/Button";

type Step = "questions" | "email" | "results";

export function AssessmentForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | number[]>>({});
  const [step, setStep] = useState<Step>("questions");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const progress = ((currentQuestion + 1) / (totalQuestions + 1)) * 100;

  function handleAnswer(questionId: number, value: number | number[]) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleNext() {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setStep("email");
    }
  }

  function handleBack() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const score = calculateScore(answers);
    // Find org type from question 7
    const orgTypeAnswer = answers[7];
    const orgTypeOption = ASSESSMENT_QUESTIONS[6]?.options.find(
      (o) => o.value === orgTypeAnswer
    );
    const assessmentResult = getResult(score, orgTypeOption?.label);
    setResult(assessmentResult);

    // Submit to API
    try {
      await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organization: org,
          answers,
          score,
          stage: assessmentResult.stage,
        }),
      });
    } catch {
      // Continue to results even if API fails
    }

    setSubmitting(false);
    setStep("results");
  }

  const currentQ = ASSESSMENT_QUESTIONS[currentQuestion];
  const hasAnswer = answers[currentQ?.id] !== undefined;

  return (
    <div className="bg-white rounded-3xl border border-border p-8 md:p-12 shadow-sm">
      {/* Progress bar */}
      {step !== "results" && (
        <div className="mb-8">
          <div className="flex justify-between text-sm text-text-secondary mb-2">
            <span>
              {step === "email"
                ? "Almost done!"
                : `Question ${currentQuestion + 1} of ${totalQuestions}`}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${step === "email" ? 95 : progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Questions */}
      {step === "questions" && currentQ && (
        <>
          <QuestionStep
            question={currentQ}
            answer={answers[currentQ.id]}
            onAnswer={(value) => handleAnswer(currentQ.id, value)}
          />
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="text-text-secondary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors min-h-[44px] px-4"
            >
              &larr; Back
            </button>
            <Button
              onClick={handleNext}
              variant="primary"
              size="md"
              className={!hasAnswer ? "opacity-50 cursor-not-allowed" : ""}
            >
              {currentQuestion === totalQuestions - 1 ? "See My Results" : "Next"}
            </Button>
          </div>
        </>
      )}

      {/* Email capture */}
      {step === "email" && (
        <form onSubmit={handleEmailSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-3">
              Get your personalized results
            </h2>
            <p className="text-text-secondary">
              Enter your details below and we&apos;ll show your AI readiness
              score with tailored recommendations.
            </p>
          </div>
          <div>
            <label htmlFor="assess-name" className="block text-sm font-medium text-primary mb-2">
              Your name
            </label>
            <input
              id="assess-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="assess-email" className="block text-sm font-medium text-primary mb-2">
              Email address
            </label>
            <input
              id="assess-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
              placeholder="jane@organization.org"
            />
          </div>
          <div>
            <label htmlFor="assess-org" className="block text-sm font-medium text-primary mb-2">
              Organization name
            </label>
            <input
              id="assess-org"
              type="text"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              autoComplete="organization"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
              placeholder="Your organization"
            />
          </div>
          <Button type="submit" variant="primary" size="lg" className="w-full">
            {submitting ? "Calculating..." : "Show My Results"}
          </Button>
          <p className="text-xs text-text-secondary/60 text-center">
            We respect your privacy. No spam — just your results and relevant
            resources.
          </p>
        </form>
      )}

      {/* Results */}
      {step === "results" && result && (
        <ResultsDisplay result={result} name={name} />
      )}
    </div>
  );
}
