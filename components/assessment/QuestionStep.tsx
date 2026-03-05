"use client";

import type { AssessmentQuestion } from "@/lib/assessment-scoring";

interface QuestionStepProps {
  question: AssessmentQuestion;
  answer: number | number[] | undefined;
  onAnswer: (value: number | number[]) => void;
}

export function QuestionStep({ question, answer, onAnswer }: QuestionStepProps) {
  const isMulti = question.type === "multi";

  function handleSelect(value: number) {
    if (isMulti) {
      const current = (answer as number[]) || [];
      // Handle "None of the above" (value 0) — deselect everything else
      if (value === 0) {
        onAnswer([0]);
        return;
      }
      // If selecting a real option, remove "none"
      const filtered = current.filter((v) => v !== 0);
      if (filtered.includes(value)) {
        const next = filtered.filter((v) => v !== value);
        onAnswer(next.length > 0 ? next : []);
      } else {
        onAnswer([...filtered, value]);
      }
    } else {
      onAnswer(value);
    }
  }

  function isSelected(value: number): boolean {
    if (isMulti) {
      return ((answer as number[]) || []).includes(value);
    }
    return answer === value;
  }

  return (
    <div>
      <h2 className="font-serif text-xl md:text-2xl text-primary mb-2">
        {question.question}
      </h2>
      {isMulti && (
        <p className="text-sm text-text-secondary mb-6">Select all that apply</p>
      )}
      <div className="space-y-3 mt-6">
        {question.options.map((option) => (
          <button
            key={option.label}
            onClick={() => handleSelect(option.value)}
            className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 min-h-[44px] ${
              isSelected(option.value)
                ? "border-secondary bg-secondary/5 text-primary"
                : "border-border bg-white text-text-secondary hover:border-secondary/40"
            }`}
            type="button"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-${isMulti ? "md" : "full"} border-2 flex items-center justify-center flex-shrink-0 ${
                  isSelected(option.value)
                    ? "border-secondary bg-secondary"
                    : "border-border"
                }`}
              >
                {isSelected(option.value) && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
              </div>
              <span className="font-medium">{option.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
