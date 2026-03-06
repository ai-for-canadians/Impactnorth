export interface AssessmentQuestion {
  id: number;
  question: string;
  type: "single" | "multi" | "scale";
  options: { label: string; value: number }[];
}

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    question: "How many employees does your organization have?",
    type: "single",
    options: [
      { label: "1–10", value: 2 },
      { label: "11–25", value: 5 },
      { label: "26–50", value: 8 },
      { label: "51–100", value: 10 },
      { label: "100+", value: 12.5 },
    ],
  },
  {
    id: 2,
    question: "Which of these does your team currently use AI for?",
    type: "multi",
    options: [
      { label: "Content writing", value: 2.5 },
      { label: "Data analysis", value: 2.5 },
      { label: "Customer/donor communication", value: 2.5 },
      { label: "Research", value: 2.5 },
      { label: "None of the above", value: 0 },
    ],
  },
  {
    id: 3,
    question: "Does your organization have a formal AI policy?",
    type: "single",
    options: [
      { label: "Yes", value: 12.5 },
      { label: "In progress", value: 7.5 },
      { label: "No", value: 2.5 },
    ],
  },
  {
    id: 4,
    question: "How would you describe your team's AI confidence?",
    type: "scale",
    options: [
      { label: "1 — Very low", value: 2.5 },
      { label: "2 — Low", value: 5 },
      { label: "3 — Moderate", value: 7.5 },
      { label: "4 — High", value: 10 },
      { label: "5 — Very high", value: 12.5 },
    ],
  },
  {
    id: 5,
    question: "What's your biggest barrier to AI adoption?",
    type: "single",
    options: [
      { label: "Don't know where to start", value: 2.5 },
      { label: "Concerns about accuracy/ethics", value: 5 },
      { label: "Lack of time for training", value: 7.5 },
      { label: "Budget", value: 5 },
      { label: "Leadership buy-in", value: 2.5 },
    ],
  },
  {
    id: 6,
    question: "How many hours per week does your team spend on repetitive tasks that could be automated?",
    type: "single",
    options: [
      { label: "Less than 5 hours", value: 2.5 },
      { label: "5–10 hours", value: 5 },
      { label: "10–20 hours", value: 8 },
      { label: "20–40 hours", value: 10 },
      { label: "40+ hours", value: 12.5 },
    ],
  },
  {
    id: 7,
    question: "What's your organization type?",
    type: "single",
    options: [
      { label: "Nonprofit / Foundation", value: 6 },
      { label: "Small Business (under 50)", value: 6 },
      { label: "Mid-size Company (50–500)", value: 8 },
      { label: "Other", value: 4 },
    ],
  },
];

export interface AssessmentResult {
  score: number;
  stage: string;
  stageDescription: string;
  recommendations: string[];
}

export function calculateScore(answers: Record<number, number | number[]>): number {
  let total = 0;
  for (const [questionId, answer] of Object.entries(answers)) {
    const qId = parseInt(questionId);
    if (Array.isArray(answer)) {
      // Multi-select: cap at 12.5
      const sum = answer.reduce((acc, val) => acc + val, 0);
      total += Math.min(sum, 12.5);
    } else {
      total += answer;
    }
    // Safety: skip unknown question IDs
    if (qId > ASSESSMENT_QUESTIONS.length) continue;
  }
  return Math.min(Math.round(total), 100);
}

export function getResult(score: number, orgType?: string): AssessmentResult {
  if (score <= 25) {
    return {
      score,
      stage: "AI Curious",
      stageDescription:
        "Your organization is just starting to explore AI. There's massive opportunity ahead — and the good news is, you don't need to be technical to get started.",
      recommendations: getRecommendations("curious", orgType),
    };
  }
  if (score <= 50) {
    return {
      score,
      stage: "AI Capable",
      stageDescription:
        "Your team is experimenting with AI, but lacks a clear strategy. With the right guidance, you could dramatically accelerate your progress.",
      recommendations: getRecommendations("capable", orgType),
    };
  }
  if (score <= 75) {
    return {
      score,
      stage: "AI Confident",
      stageDescription:
        "AI is becoming part of your workflow, and you're starting to see real results. Now it's time to scale and systematize.",
      recommendations: getRecommendations("confident", orgType),
    };
  }
  return {
    score,
    stage: "AI Transformed",
    stageDescription:
      "Your organization is leveraging AI at a high level. Now focus on governance, optimization, and staying ahead of the curve.",
    recommendations: getRecommendations("transformed", orgType),
  };
}

function getRecommendations(stage: string, orgType?: string): string[] {
  const isNonprofit = orgType === "Nonprofit / Foundation";

  const recs: Record<string, string[]> = {
    curious: [
      "Start with Executive AI Advisory to build foundational skills in a personalized setting",
      isNonprofit
        ? "Identify 2–3 quick-win workflows: grant research, donor thank-you emails, and meeting summaries"
        : "Identify 2–3 quick-win workflows: email drafting, report generation, and data cleanup",
      "Take our AI Strategy Intensive to get your entire team aligned and operational",
    ],
    capable: [
      "Formalize an AI policy to give your team confidence and guardrails",
      "Move from individual experimentation to team-wide AI adoption with a structured AI Strategy Intensive",
      isNonprofit
        ? "Focus on high-impact areas: grant writing AI, donor segmentation, and impact reporting"
        : "Focus on high-impact areas: customer communication, sales processes, and operations automation",
    ],
    confident: [
      "Consider Operational AI Integration to build and document 3–5 custom AI workflows",
      "Measure before-and-after metrics to quantify your AI ROI",
      "Develop internal AI champions who can train and support colleagues",
    ],
    transformed: [
      "Explore our Fractional CAO service for strategic AI leadership across departments",
      "Build an AI governance framework with regular audits and policy updates",
      "Look into advanced AI applications: predictive analytics, custom models, and workflow orchestration",
    ],
  };

  return recs[stage] || recs.curious;
}
