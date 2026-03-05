# ImpactNorth.org — Claude Code Build Brief

## PROJECT OVERVIEW

Build impactnorth.org as a high-converting, lean website for ImpactNorth AI — a Canadian AI consulting firm expanding into the US market targeting nonprofits/foundations and SMEs/mid-market companies. The site must feel like a $50M company built it, not a solo consultant. It needs to convert visitors into booked discovery calls.

**Owner:** Patrick Farrar, Founder & CEO
**Domain:** impactnorth.org
**Parent brand:** ImpactNorth AI for Canadians Inc. (Canadian corp)
**US-facing brand name:** ImpactNorth AI
**Tagline options:** "AI for mission-driven organizations" / "More mission, less admin"

---

## TECH STACK

**Framework:** Next.js 14+ (App Router)
**Styling:** Tailwind CSS 3.x
**Deployment target:** Vercel (optimal for Next.js, US edge network, free tier to start)
**CMS:** MDX for case studies (no external CMS dependency initially)
**Forms:** React Hook Form → webhook to CRM (Relay.app or Make.com)
**Scheduling:** Calendly embed (inline, not popup)
**Analytics:** Plausible or Fathom (privacy-first, no cookie banner needed — aligns with responsible AI positioning)
**Interactive assessment:** Built as a React component with client-side logic, email capture via API route
**Email:** Resend or SendGrid for transactional emails (assessment results delivery)
**Hosting region:** US-East (Vercel automatically, but confirm)

### Why Next.js over a page builder
- SEO control (meta tags, structured data, sitemap generation, AI Overview optimization)
- Performance (Core Web Vitals score matters for ranking)
- The AI Readiness Assessment requires custom interactivity
- Professional credibility — a fast, polished custom site signals "real company"
- Full control over conversion optimization

---

## DESIGN DIRECTION

### Aesthetic: "Trusted authority meets innovation" — Clean, confident, premium

**NOT:** Generic SaaS gradient purple. Not "techy startup." Not cold corporate.
**IS:** Warm authority. Think McKinsey meets Patagonia. Confident expertise with a human, mission-driven soul.

### Color Palette

```
Primary:        #0F2B3C  (deep navy — authority, trust)
Secondary:      #1B6B4A  (forest green — growth, impact, "North")
Accent:         #E8A838  (warm amber — human warmth, energy, action)
Light BG:       #F7F5F0  (warm off-white — NOT pure white)
Dark BG:        #0A1F2E  (rich dark navy for hero sections)
Text Primary:   #1A1A1A  (near-black)
Text Secondary: #4A5568  (warm gray)
Success:        #22C55E
Border/Subtle:  #E2DDD5  (warm gray border)
```

### Typography

```
Headlines:  "Instrument Serif" (Google Fonts) — distinctive, editorial, warm authority
Body:       "DM Sans" (Google Fonts) — clean, modern, excellent readability
Mono/Data:  "JetBrains Mono" — for any stats, metrics, data callouts
```

### Design Principles

1. **Generous whitespace** — let the content breathe, signal premium
2. **Asymmetric layouts** — avoid the generic two-column SaaS look
3. **Large, confident typography** — hero headlines at 56-72px, body at 18px
4. **Subtle motion** — fade-in on scroll, number counters for stats, smooth section transitions
5. **Data-forward** — stats and metrics displayed prominently with large numbers (20+, 8-12x, 500+)
6. **Warm photography direction** — when adding images later, use warm-toned photos of real people in workshops/meetings, NOT stock AI imagery
7. **"North Star" visual motif** — subtle compass/star/directional elements as design accents, NOT literally a compass logo — more like angular geometric accents inspired by navigation/direction
8. **No generic AI imagery** — no robot hands, no neural network illustrations, no blue circuit boards

### Key UI Patterns

- **Inline Calendly booking** — embedded directly on homepage and services pages, not behind a button
- **Sticky CTA bar** — appears after scrolling past hero: "Book a free AI strategy call"
- **Social proof strip** — horizontal scrolling logo bar of clients/partners
- **Metric cards** — large numbers with brief descriptions (animated count-up on scroll)
- **Testimonial cards** — photo + name + org + one-line quote
- **Service tier cards** — clear pricing with "Most Popular" badge on Tier 2

---

## SITE ARCHITECTURE (10 pages)

### 1. Homepage (`/`)

**Purpose:** Convert cold traffic into booked calls. Establish credibility in < 5 seconds.

**Sections in order:**

1. **Hero**
   - Headline: "Your team could save 20+ hours a month with AI. We'll show you how."
   - Subhead: "ImpactNorth AI helps nonprofits and growing companies implement AI that actually works — practical training, hands-on coaching, and measurable results."
   - Two CTAs: [Book a Free Strategy Call] (primary) [Take the AI Readiness Assessment] (secondary/outline)
   - Below hero: "Trusted by organizations across North America" + logo strip

2. **Problem/Solution Bridge**
   - Left: "The AI gap is real" — stat cards showing 85.6% exploring AI, only 24% have a strategy, 69% have zero training
   - Right: "We close it" — brief description of the approach

3. **The AI Curve Framework** (visual)
   - Simple visual showing the journey from AI Curious → AI Capable → AI Confident → AI Transformed
   - Brief description: "Our proprietary framework meets your organization exactly where you are"

4. **Services Overview** (4 cards linking to /services)
   - 1:1 AI Coaching | AI Readiness Workshop | Implementation Sprint | Fractional CAO
   - Each card: icon, title, one-line description, starting price, link

5. **Results / Social Proof**
   - Three large metric cards: "20+ hours/month saved per employee" | "100% confidence increase" | "8-12x ROI on training investment"
   - 2-3 testimonial cards

6. **Who We Work With** (two columns)
   - Nonprofits & Foundations: "From grant writing to donor engagement, we help mission-driven organizations multiply their impact with AI"
   - Growing Companies: "From operations to customer experience, we help SMEs compete with enterprises using practical AI"

7. **About Teaser**
   - Photo placeholder + brief Patrick bio: "12+ years building Canada's innovation ecosystem. $18M+ in funding enabled. 500+ partnerships built. Now helping organizations across North America unlock AI."
   - Link to full About page

8. **Inline Calendly Embed**
   - Headline: "Let's talk about your AI opportunity"
   - Embedded scheduling widget

9. **Footer**
   - Logo, tagline, nav links, social links (LinkedIn primarily), "Toronto, Canada • Serving clients across North America"

### 2. Services (`/services`)

**Purpose:** Detail all four service tiers with clear pricing and conversion paths.

**Hero:** "From first steps to full transformation — find your starting point"

**Four service sections, each with:**
- Title, price range, duration/format
- What's included (3-5 bullets)
- Who it's for
- Expected outcomes
- CTA: [Book a Call to Discuss]

**Service Tiers:**

**1:1 AI Coaching — $500-750 USD/session (or $2,500-4,000/month retainer)**
- Personalized, one-on-one AI coaching sessions
- Tailored to your role, your tools, your workflows
- Hands-on: you'll leave every session with something you can use immediately
- Async support between sessions via Slack/email
- Who it's for: Executive Directors, founders, team leads who want to move fast
- "Our most popular entry point — and our highest-rated service"
- Outcome: "Clients typically save 5-10 hours/week within the first month"

**AI Readiness Workshop — $3,500-5,000 USD**
- Half-day or full-day, virtual or in-person
- AI opportunity assessment customized to your organization
- Hands-on tool training with your actual workflows
- Prioritized action plan with quick wins
- Who it's for: Teams of 5-25 ready to get started together
- Outcome: "Your team leaves with 3-5 AI workflows they can use on Monday morning"

**AI Implementation Sprint — $8,000-15,000 USD**
- 4-8 week engagement
- Deep workflow audit and AI integration
- 3-5 custom AI workflows built and documented
- Staff training and SOPs
- Before/after metrics
- Who it's for: Organizations ready to move from exploring to operating
- Outcome: "Measurable productivity gains documented and repeatable"

**Fractional Chief AI Officer — $6,000-12,000 USD/month**
- Strategic AI leadership without the full-time hire
- AI roadmap development and execution
- Vendor evaluation, policy development, board-ready presentations
- Who it's for: Organizations with 50+ employees scaling AI across departments
- Outcome: "Enterprise-grade AI strategy at a fraction of the cost"

**Bottom of page:** Comparison table of all tiers + FAQ accordion

### 3. For Nonprofits (`/nonprofits`)

**Purpose:** Sector-specific landing page. Primary SEO target: "AI consulting for nonprofits," "AI training for nonprofits"

**Content structure:**
- Hero with nonprofit-specific headline: "AI should multiply your mission, not your budget"
- The nonprofit AI gap (sector-specific stats)
- How nonprofits are using AI today: grant writing, donor engagement, impact reporting, volunteer management, communications, program evaluation
- "We understand your world" — Patrick's 12+ years in the nonprofit/social impact ecosystem
- Case study preview (Genome Atlantic or similar, reframed)
- Pricing note: "Most workshops fall under professional development budgets. Implementation projects are often fundable through capacity-building grants."
- CTA: Book a call or take the assessment

### 4. For Small Business (`/small-business`)

**Purpose:** Sector-specific landing page. SEO target: "AI consulting for small business," "AI implementation SME"

**Content structure:**
- Hero: "Your competitors are using AI. Are you?"
- The SME advantage — smaller organizations can adopt AI faster than enterprises
- Use cases: operations, customer service, marketing, sales, financial processes
- ROI framing: "The average employee saves 20+ hours/month. What would your team do with that time?"
- Case study preview
- CTA: Book a call

### 5. AI Readiness Assessment (`/assessment`)

**Purpose:** Lead generation engine. Interactive quiz that captures contact info and delivers instant value.

**Technical implementation:**
- Multi-step React form (5-8 questions)
- Client-side scoring logic
- Email capture before results reveal
- Personalized results page with score, category placement on AI Curve, and 3 specific recommendations
- Auto-email results as PDF
- CTA on results: "Want to discuss your results? Book a free strategy call"

**Questions to include:**
1. How many employees does your organization have? (ranges)
2. Which of these does your team currently use AI for? (multi-select: content writing, data analysis, customer/donor communication, research, none)
3. Does your organization have a formal AI policy? (yes/no/in progress)
4. How would you describe your team's AI confidence? (scale 1-5)
5. What's your biggest barrier to AI adoption? (single select: don't know where to start, concerns about accuracy/ethics, lack of time for training, budget, leadership buy-in)
6. How many hours per week does your team spend on repetitive tasks that could potentially be automated? (ranges)
7. What's your organization type? (nonprofit, small business, other)
8. Contact info: Name, email, organization name

**Scoring:** Generate a score out of 100, map to AI Curve stage (Curious / Capable / Confident / Transformed), provide 3 tailored recommendations based on answers.

### 6. Case Studies (`/case-studies`)

**Purpose:** Proof of results. Start with 2-3 studies.

**Template per case study:**
- Organization type + challenge
- What ImpactNorth did
- Measurable results (time saved, confidence increase, ROI)
- Client quote
- Timeline and investment level

**Initial case studies (adapt from Canadian work):**
- "How a national science organization equipped their team with AI in one day" (Genome Atlantic)
- "From AI curious to AI confident: A communications team's transformation"
- One SME example

### 7. About (`/about`)

**Purpose:** Build trust and human connection.

**Content:**
- Patrick's story — 12+ years, COO at Venture for Canada, CEO at Startup Zone, Director of Innovation at Halifax Partnership
- The numbers: $18M+ in funding enabled, 500+ partnerships, organizations trained
- The mission: "Making AI practical, accessible, and responsible for the organizations that need it most"
- Toronto base, serving clients across North America
- The Canadian AI advantage (brief): "Based in Toronto, one of the world's leading AI research hubs, home to the Vector Institute and a global leader in responsible AI development"
- Team section (expandable as team grows)

### 8. Resources (`/resources`)

**Purpose:** SEO + credibility. NOT a traditional blog. Think "resource library."

**Start with 5 strategic pieces (written as MDX pages):**
1. "The Nonprofit AI Readiness Checklist" (gated PDF download)
2. "5 AI Workflows Every Nonprofit Should Implement This Quarter"
3. "How to Write an AI Policy for Your Organization"
4. "The Real ROI of AI Training: What the Data Shows"
5. "AI for Small Business: A Practical Getting Started Guide"

**Each resource page includes:** author (Patrick), publish date, estimated read time, related services CTA, schema markup

### 9. Contact / Book a Call (`/contact`)

**Purpose:** Final conversion page.

- Calendly inline embed (primary)
- Email fallback: hello@impactnorth.org
- Brief form for those who prefer async: name, email, org, what they need help with
- Note: "Based in Toronto (Eastern Time). We work with clients across North America virtually, and travel for in-person engagements."

### 10. FAQ (`/faq`)

**Purpose:** Handle objections, support SEO with structured data.

**Questions to include:**
- "Do we need to be tech-savvy to work with you?" → No, we meet you where you are
- "What AI tools do you recommend?" → We're tool-agnostic, recommend what fits your workflow
- "How quickly will we see results?" → Most clients see measurable time savings within 2-4 weeks
- "Do you work with organizations outside the US and Canada?" → We primarily serve North American clients
- "What's your approach to AI ethics and responsible use?" → Built into everything we do, informed by Canada's AI leadership
- "How is ImpactNorth different from free AI training?" → Customized to your org, your workflows, your data — not generic
- "Can our team attend training together?" → Yes, workshops accommodate 5-25 people
- "Do you offer ongoing support?" → Yes, through coaching retainers and our Fractional CAO service

**Schema markup:** FAQPage schema for Google rich results and AI Overview citations

---

## SEO STRATEGY

### Priority Keywords (US-focused)

**Primary (target with dedicated pages):**
- "AI consulting for nonprofits"
- "AI training for nonprofits"
- "AI consulting for small business"
- "nonprofit AI implementation"

**Secondary (target with resources/content):**
- "AI readiness assessment nonprofit"
- "fractional chief AI officer"
- "AI coaching for executives"
- "nonprofit AI policy template"
- "AI workflow automation nonprofit"

### Technical SEO Requirements

- Semantic HTML5 throughout
- Schema markup: Organization, Service, FAQPage, Article, BreadcrumbList
- XML sitemap (auto-generated by Next.js)
- robots.txt
- Canonical URLs
- Open Graph + Twitter Card meta tags per page
- Google Search Console geographic target: United States
- Page speed: target 95+ Lighthouse score
- Alt text on all images
- Internal linking between related pages

### AI Overview Optimization

- Lead every page with a concise, direct answer to the question the page targets
- Use clear Q&A formatting in FAQ
- Structure content with clear headings that match search queries
- Include specific data points and metrics (Google's AI tends to cite specific numbers)

---

## CONVERSION OPTIMIZATION

### Lead Capture Points (ranked by priority)

1. **Calendly booking** — homepage, services, contact (highest intent)
2. **AI Readiness Assessment** — homepage CTA, dedicated page (medium intent, high volume)
3. **Resource downloads** — gated checklist/guide (lower intent, nurture funnel)
4. **Newsletter signup** — footer (lowest intent, long-term)

### Tracking Events

- `calendly_booked` — discovery call scheduled
- `assessment_started` — began quiz
- `assessment_completed` — finished quiz + submitted email
- `resource_downloaded` — gated content download
- `services_page_viewed` — viewed pricing
- `cta_clicked` — any CTA button click (with label)

---

## CONTENT VOICE & MESSAGING

### Tone

- **Confident but not arrogant** — "We've done this 500+ times" not "We're the best"
- **Practical not theoretical** — "Here's what you'll implement" not "Here's what AI could do"
- **Warm not corporate** — "Let's talk" not "Contact our sales team"
- **Specific not vague** — "20+ hours/month saved" not "increased productivity"
- **Anti-hype** — "Practical AI that works today" not "Revolutionary AI transformation"

### Words to use
Mission, impact, practical, hands-on, measurable, confidence, coaching, implementation, results, proven, responsible, accessible

### Words to avoid
Revolutionary, disruptive, cutting-edge, leverage, synergy, utilize, state-of-the-art, game-changing, unlock potential, digital transformation

### The "Patrick Farrar" voice
Direct. Canadian-warm. Data-backed. Slightly contrarian (willing to say most AI training is useless). Experienced enough to simplify without dumbing down.

---

## PHASE 1 BUILD PRIORITIES (MVP)

Build in this order for fastest path to a live, converting site:

1. **Homepage** — complete with all sections, Calendly embed, metrics
2. **Services page** — full pricing and tier details
3. **Contact/Book page** — Calendly + form
4. **For Nonprofits** — primary SEO landing page
5. **For Small Business** — secondary SEO landing page
6. **About** — founder credibility page
7. **AI Readiness Assessment** — interactive lead gen tool
8. **FAQ** — with schema markup
9. **Case Studies** — 2-3 initial studies
10. **Resources** — 2-3 initial pieces

### Phase 2 (Post-launch, weeks 2-4)
- Remaining resource articles
- Email automation (assessment results → drip sequence)
- A/B test hero copy
- Google Ads landing page variants

---

## FILE STRUCTURE

```
impactnorth-site/
├── app/
│   ├── layout.tsx              # Root layout with nav, footer, fonts
│   ├── page.tsx                # Homepage
│   ├── services/
│   │   └── page.tsx
│   ├── nonprofits/
│   │   └── page.tsx
│   ├── small-business/
│   │   └── page.tsx
│   ├── assessment/
│   │   └── page.tsx
│   ├── case-studies/
│   │   ├── page.tsx            # Index
│   │   └── [slug]/
│   │       └── page.tsx        # Individual study
│   ├── about/
│   │   └── page.tsx
│   ├── resources/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   └── api/
│       ├── assessment/
│       │   └── route.ts        # Assessment submission handler
│       └── contact/
│           └── route.ts        # Contact form handler
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CTABar.tsx          # Sticky CTA
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── AICurve.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── MetricsBar.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhoWeWorkWith.tsx
│   ├── assessment/
│   │   ├── AssessmentForm.tsx
│   │   ├── QuestionStep.tsx
│   │   └── ResultsDisplay.tsx
│   ├── shared/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── MetricCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── CalendlyEmbed.tsx
│   └── seo/
│       └── StructuredData.tsx   # JSON-LD schema components
├── content/
│   ├── case-studies/           # MDX files
│   └── resources/              # MDX files
├── lib/
│   ├── assessment-scoring.ts   # Quiz scoring logic
│   └── constants.ts            # Site-wide constants
├── public/
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## KEY IMPLEMENTATION NOTES

### Calendly Integration
```tsx
// Use Calendly's inline embed, not popup
// Install: npm install react-calendly
import { InlineWidget } from "react-calendly";

<InlineWidget
  url="https://calendly.com/PATRICK_URL"
  styles={{ height: '700px' }}
  prefill={{
    customAnswers: {
      a1: 'From impactnorth.org'
    }
  }}
/>
```

### Sticky CTA Bar
- Hidden on initial load
- Appears after user scrolls past hero section (use Intersection Observer)
- Fixed bottom on mobile, fixed top on desktop
- "Book a Free AI Strategy Call" + Calendly link
- Dismiss button (remembers via session)

### AI Readiness Assessment State Machine
```
START → Q1 → Q2 → Q3 → Q4 → Q5 → Q6 → Q7 → EMAIL_CAPTURE → RESULTS
```
- Progress bar showing completion
- Smooth transitions between questions
- Email capture screen before results (required)
- Results page: score (animated count-up), AI Curve stage, 3 recommendations, book-a-call CTA
- Store submissions for follow-up (API route → webhook to CRM)

### Performance Targets
- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### Responsive Breakpoints
- Mobile: 320-768px (mobile-first design)
- Tablet: 768-1024px
- Desktop: 1024-1440px
- Wide: 1440px+ (max content width, centered)

---

## IMMEDIATE NEXT STEPS IN CLAUDE CODE

1. Initialize Next.js project with TypeScript and Tailwind
2. Configure fonts (Instrument Serif, DM Sans, JetBrains Mono)
3. Set up color palette in tailwind.config.ts
4. Build layout (Navbar + Footer)
5. Build Homepage — section by section
6. Build Services page
7. Build Assessment tool
8. Add SEO (meta tags, schema markup, sitemap)
9. Build remaining pages
10. Final polish — animations, responsive testing, performance optimization

---

## ONE-ON-ONE COACHING POSITIONING NOTE

Patrick's insight: 1:1 coaching is the highest-converting, highest-retention service. Position it as the **primary entry point** — not workshops. The site should funnel toward coaching first, workshops second.

**Why coaching wins for US expansion:**
- Higher margin (no travel, no group coordination)
- Builds deeper relationships → converts to retainers naturally
- Each coaching client becomes a case study and referral source
- Scales Patrick's time better than workshops (workshops give away a lot in one session)
- Lower barrier — one person says yes, not a whole team/budget committee

**Site implication:** On the Services page and homepage, lead with "1:1 AI Coaching" as the featured/recommended service. The workshop should be positioned as "for teams" — the coaching is "for leaders."
