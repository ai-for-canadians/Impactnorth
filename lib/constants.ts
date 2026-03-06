export const SITE_CONFIG = {
  name: "ImpactNorth AI",
  tagline: "Operational AI for mission-driven organizations",
  url: "https://www.impactnorth.org",
  serviceArea: "Serving mission-driven organizations across North America",
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
    title: "Executive AI Advisory",
    slug: "advisory",
    description:
      "Strategic AI counsel for leaders who need results, not tutorials.",
    price: "$500–750/session",
    priceAlt: "$2,500–4,000/mo retainer",
    featured: true,
    icon: "advisory",
    testimonial: {
      quote:
        "I\u2019m a much happier human being.",
      attribution: "Communications Director, National Science Organization",
    },
  },
  {
    title: "The AI Strategy Intensive",
    slug: "intensive",
    description: "A focused sprint from AI-curious to AI-capable.",
    price: "$3,500–5,000",
    featured: false,
    icon: "intensive",
    testimonial: {
      quote:
        "We left with workflows we used on Monday morning \u2014 not another slide deck.",
      attribution: "",
    },
  },
  {
    title: "Operational AI Integration",
    slug: "integration",
    description: "From scattered tools to embedded systems.",
    price: "$8,000–15,000",
    featured: false,
    icon: "integration",
    testimonial: {
      quote:
        "Five value layers active in month one. The board presentation wrote itself.",
      attribution: "",
    },
  },
  {
    title: "Fractional Chief AI Officer",
    slug: "cao",
    description:
      "Enterprise-grade AI strategy without the enterprise price tag.",
    price: "$6,000–12,000/mo",
    featured: false,
    icon: "cao",
    testimonial: {
      quote:
        "Enterprise-grade AI strategy without the enterprise price tag.",
      attribution: "",
    },
  },
] as const;

export const IMPACT_METRICS = [
  {
    value: "1.25",
    suffix: " FTE Weeks",
    subtitle: "Reclaimed Monthly",
    detail:
      "~50 hours per month redirected from manual production to high-level strategy",
  },
  {
    value: "33\u201350",
    suffix: "%",
    subtitle: "Workflow Reduction",
    detail:
      "Across content writing, campaign development, and annual reporting",
  },
  {
    value: "$4,675\u2013$10,450",
    suffix: "",
    subtitle: "Monthly Value Generated",
    detail:
      "Across efficiency, output expansion, strategic advisory, and risk mitigation",
  },
  {
    value: "5",
    suffix: " Value Layers",
    subtitle: "Active in Month 1",
    detail:
      "From time savings to succession-ready infrastructure \u2014 full-spectrum impact",
  },
  {
    value: "Zero",
    suffix: "",
    subtitle: "Nights & Weekends",
    detail:
      "100% of core clients report elimination of routine overtime and burnout",
  },
  {
    value: "90",
    suffix: " Days",
    subtitle: "To Operational Transformation",
    detail:
      "From AI-curious to AI-embedded with measurable, board-ready ROI",
  },
] as const;

export const AI_GAP_STATS = {
  headline:
    "While 42% of organizations pay for AI tools, only 12% achieve true operational value.",
  subtext:
    "Without structured reinforcement, 60\u201370% of AI adoption fails within 90 days.",
};

export const FIVE_LAYER_MODEL = [
  {
    id: "time",
    title: "Time Reclaimed",
    icon: "clock",
    tagline: "More high-quality work, fewer hours",
    detail:
      "Clients typically reclaim ~50 hours/month \u2014 equivalent to 1.25 FTE weeks. We see 33\u201350% reduction in time spent on content, campaigns, and reporting.",
    metric: "~50 hrs/month reclaimed",
    color: "accent" as const,
  },
  {
    id: "quality",
    title: "Quality Premium",
    icon: "diamond",
    tagline: "AI as a built-in editorial and brand voice layer",
    detail:
      "AI-assisted workflows produce precisely calibrated content requiring light editing rather than full rewrites. Automated frameworks ensure continuous alignment with organizational priorities.",
    metric: "Light editing vs. full rewrites",
    color: "secondary" as const,
  },
  {
    id: "output",
    title: "Output Expansion",
    icon: "expand",
    tagline: "Net-new deliverables that capacity previously prohibited",
    detail:
      "Teams generate additional social media content, video scripts, and multi-channel campaigns that would have been deprioritized. This isn\u2019t about working faster \u2014 it\u2019s about expanding what your organization can deliver.",
    metric: "Net-new content capacity",
    color: "accent" as const,
  },
  {
    id: "advisory",
    title: "Strategic Advisory",
    icon: "compass",
    tagline: "On-demand counsel for positioning and stakeholder decisions",
    detail:
      "AI serves as a strategic sounding board for sensitive communications, leadership transitions, and stakeholder engagement. Complex sequencing challenges that would require an external consultant are handled in real-time.",
    metric: "On-demand strategic capacity",
    color: "secondary" as const,
  },
  {
    id: "resilience",
    title: "Risk & Resilience",
    icon: "shield",
    tagline: "Succession-ready AI infrastructure",
    detail:
      "We build persistent AI workspaces that retain organizational context, brand guidelines, and institutional memory. New hires or successors inherit operational AI assets on day one \u2014 your knowledge survives leadership transitions.",
    metric: "Day-one successor readiness",
    color: "accent" as const,
  },
] as const;

export const SOCIAL_PROOF_ORGS = [
  "Genome Atlantic",
  "Venture for Canada",
  "Halifax Partnership",
  "Startup Zone",
] as const;

export const NETWORK_MEMBERS = [
  { name: "Patrick Farrar", role: "Founder & CEO", hasPhoto: true },
  { name: "Mitch Gudgeon", role: "Network Advisor", hasPhoto: false },
  { name: "Raieda Sadeq", role: "Network Advisor", hasPhoto: false },
  { name: "Fred Mojekwu", role: "Network Advisor", hasPhoto: false },
  { name: "Darcy Norman", role: "Network Advisor", hasPhoto: false },
  { name: "Anshula Chowdhury", role: "Network Advisor", hasPhoto: false },
  { name: "Ryan Oneil Knight", role: "Network Advisor", hasPhoto: false },
  { name: "Ashok Ranade", role: "Network Advisor", hasPhoto: false },
] as const;

export const AI_CURVE_STAGES = [
  {
    stage: "AI Curious",
    range: "0\u201325",
    description:
      "You know AI matters, but you\u2019re not sure where to start.",
  },
  {
    stage: "AI Capable",
    range: "26\u201350",
    description:
      "Your team is experimenting, but lacks a clear strategy.",
  },
  {
    stage: "AI Confident",
    range: "51\u201375",
    description:
      "AI is part of your workflow, and you\u2019re seeing real results.",
  },
  {
    stage: "AI Transformed",
    range: "76\u2013100",
    description:
      "AI is embedded across your organization with measurable impact.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What makes ImpactNorth different from other AI consultants?",
    answer:
      "We don\u2019t teach prompts \u2014 we build operational AI infrastructure. Our Five-Layer Value Model measures impact across time savings, quality, output expansion, strategic advisory, and succession-ready infrastructure. Every engagement delivers documented ROI your board can present to funders.",
  },
  {
    question: "Do you work with US organizations?",
    answer:
      "We serve mission-driven organizations across North America. We invoice in USD and operate in Eastern Time (ET). Our services are delivered virtually, making it easy to work with organizations in any time zone.",
  },
  {
    question: "What is succession-ready AI infrastructure?",
    answer:
      "We build persistent AI workspaces \u2014 custom Claude Projects, documented workflows, and institutional memory systems \u2014 that new hires or successors inherit on day one. Your AI knowledge and organizational context survive leadership transitions, protecting your investment long after our engagement ends.",
  },
  {
    question: "Do we need to be tech-savvy to work with you?",
    answer:
      "Not at all. We meet you where you are. Our advisory sessions and intensives are designed for leaders and teams at every level of AI familiarity. You don\u2019t need to write code or understand machine learning \u2014 we focus on practical tools you can start using right away.",
  },
  {
    question: "What AI tools do you recommend?",
    answer:
      "We\u2019re tool-agnostic. Rather than pushing a specific platform, we assess your existing workflows, budget, and needs, then recommend the tools that actually fit. That might be ChatGPT, Claude, Microsoft Copilot, or specialized tools for your sector.",
  },
  {
    question: "How quickly will we see results?",
    answer:
      "Most clients see measurable time savings within 2\u20134 weeks of implementing their first AI workflows. Our AI Strategy Intensive clients leave with 3\u20135 workflows they can use the next business day. Executive Advisory clients typically reclaim 50+ hours per month within the first 60 days.",
  },
  {
    question: "What\u2019s your approach to AI ethics and responsible use?",
    answer:
      "Responsible AI is built into everything we do. We bring leadership in responsible AI practices to every engagement \u2014 helping clients develop AI policies, address bias concerns, and implement AI transparently and in alignment with their organizational values.",
  },
  {
    question: "How is ImpactNorth different from free AI training?",
    answer:
      "Free courses teach general AI concepts. We work with your specific organization, your workflows, your data, and your goals. Every recommendation is tailored to your context, and we measure the results across five value layers. Generic training gives you knowledge \u2014 we give you operational infrastructure.",
  },
  {
    question: "Can our team attend training together?",
    answer:
      "Absolutely. Our AI Strategy Intensives are designed for teams of 5\u201325 people. We customize the content to your organization\u2019s specific workflows and challenges, so everyone leaves with relevant, actionable skills.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Our Executive AI Advisory retainers provide continuous support with regular sessions and async access between meetings. For larger organizations, our Fractional Chief AI Officer service provides ongoing strategic AI leadership with documented monthly value reports.",
  },
] as const;
