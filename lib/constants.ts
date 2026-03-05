export const SITE_CONFIG = {
  name: "ImpactNorth AI",
  tagline: "AI for mission-driven organizations",
  url: "https://www.impactnorth.org",
  email: "hello@impactnorth.org",
  location: "Toronto, Canada",
  serviceArea: "Serving clients across North America",
  linkedin: "https://linkedin.com/company/impactnorth-ai",
  calendly: "https://calendly.com/patrick-aiforcanadians/15-minute-meeting",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "For Nonprofits", href: "/nonprofits" },
  { label: "For Business", href: "/small-business" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
] as const;

export const SERVICES = [
  {
    title: "1:1 AI Coaching",
    slug: "coaching",
    description: "Personalized coaching sessions tailored to your role, your tools, your workflows.",
    price: "$500–750/session",
    priceAlt: "$2,500–4,000/mo retainer",
    featured: true,
    icon: "coaching",
  },
  {
    title: "AI Readiness Workshop",
    slug: "workshop",
    description: "Half-day or full-day training that gives your team AI workflows they can use immediately.",
    price: "$3,500–5,000",
    featured: false,
    icon: "workshop",
  },
  {
    title: "Implementation Sprint",
    slug: "sprint",
    description: "4–8 week deep engagement with custom AI workflows built, documented, and measured.",
    price: "$8,000–15,000",
    featured: false,
    icon: "sprint",
  },
  {
    title: "Fractional Chief AI Officer",
    slug: "cao",
    description: "Strategic AI leadership without the full-time hire. Roadmap, policy, and execution.",
    price: "$6,000–12,000/mo",
    featured: false,
    icon: "cao",
  },
] as const;

export const METRICS = [
  { value: "20+", label: "hours/month saved per employee", suffix: "" },
  { value: "100", label: "confidence increase in AI skills", suffix: "%" },
  { value: "8-12", label: "ROI on training investment", suffix: "x" },
] as const;

export const AI_CURVE_STAGES = [
  {
    stage: "AI Curious",
    range: "0–25",
    description: "You know AI matters, but you're not sure where to start.",
  },
  {
    stage: "AI Capable",
    range: "26–50",
    description: "Your team is experimenting, but lacks a clear strategy.",
  },
  {
    stage: "AI Confident",
    range: "51–75",
    description: "AI is part of your workflow, and you're seeing real results.",
  },
  {
    stage: "AI Transformed",
    range: "76–100",
    description: "AI is embedded across your organization with measurable impact.",
  },
] as const;

export const STATS = [
  { value: "85.6%", description: "of organizations are exploring AI" },
  { value: "24%", description: "have a formal AI strategy" },
  { value: "69%", description: "using AI have received zero training" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do we need to be tech-savvy to work with you?",
    answer: "Not at all. We meet you where you are. Our coaching and workshops are designed for leaders and teams at every level of AI familiarity. You don't need to write code or understand machine learning — we focus on practical tools you can start using right away.",
  },
  {
    question: "What AI tools do you recommend?",
    answer: "We're tool-agnostic. Rather than pushing a specific platform, we assess your existing workflows, budget, and needs, then recommend the tools that actually fit. That might be ChatGPT, Claude, Microsoft Copilot, or specialized tools for your sector.",
  },
  {
    question: "How quickly will we see results?",
    answer: "Most clients see measurable time savings within 2–4 weeks of implementing their first AI workflows. Our workshop clients leave with 3–5 workflows they can use the next business day. Coaching clients typically save 5–10 hours per week within the first month.",
  },
  {
    question: "Do you work with organizations outside the US and Canada?",
    answer: "We primarily serve clients across North America. Our services are delivered virtually, making it easy to work with organizations in any time zone across the US and Canada.",
  },
  {
    question: "What's your approach to AI ethics and responsible use?",
    answer: "Responsible AI is built into everything we do. Based in Toronto — one of the world's leading AI research hubs and home to the Vector Institute — we bring Canada's leadership in responsible AI to every engagement. We help clients develop AI policies, address bias concerns, and implement AI transparently.",
  },
  {
    question: "How is ImpactNorth different from free AI training?",
    answer: "Free courses teach general AI concepts. We work with your specific organization, your workflows, your data, and your goals. Every recommendation is tailored to your context, and we measure the results. Generic training gives you knowledge — we give you implementation.",
  },
  {
    question: "Can our team attend training together?",
    answer: "Absolutely. Our AI Readiness Workshops are designed for teams of 5–25 people. We customize the content to your organization's specific workflows and challenges, so everyone leaves with relevant, actionable skills.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes. Our 1:1 AI Coaching retainers provide continuous support with regular sessions and async access between meetings. For larger organizations, our Fractional Chief AI Officer service provides ongoing strategic AI leadership.",
  },
] as const;
