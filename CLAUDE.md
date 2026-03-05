# IMPACTNORTH.ORG — CLAUDE CODE SESSION KICKOFF

## WHAT TO DO FIRST

Copy this entire file and paste it as your first message in Claude Code. Then follow the phased build instructions below.

---

## PROMPT TO PASTE INTO CLAUDE CODE:

```
I'm building impactnorth.org — a high-converting website for ImpactNorth AI, a Canadian AI consulting firm expanding into the US market. I need to get a working MVP live in the next few hours.

Read the attached IMPACTNORTH-SITE-BUILD-BRIEF.md for the full spec, then let's build this in phases.

## TECH STACK
- Next.js 14+ (App Router, TypeScript)
- Tailwind CSS 3.x
- Deployment target: Vercel
- No external CMS needed yet — content lives in components/MDX

## DESIGN SYSTEM (implement first)
Colors:
- Primary: #0F2B3C (deep navy)
- Secondary: #1B6B4A (forest green)
- Accent: #E8A838 (warm amber)
- Light BG: #F7F5F0 (warm off-white)
- Dark BG: #0A1F2E (rich dark navy)
- Text: #1A1A1A primary, #4A5568 secondary
- Border: #E2DDD5

Fonts (via next/font/google):
- Headlines: "Instrument Serif"
- Body: "DM Sans"
- Data/Stats: "JetBrains Mono"

## PHASE 1 — GET LIVE (do this first, ~2 hours)
Build these pages with full content and styling:

1. **Root Layout** — Navbar + Footer + fonts + colors in tailwind config
2. **Homepage (/)** — All sections:
   - Hero with outcome headline, 2 CTAs, trust logo strip
   - Problem/solution bridge with stat cards (85.6% exploring AI, only 24% have strategy, 69% zero training)
   - AI Curve framework visual (Curious → Capable → Confident → Transformed)
   - Services preview (4 cards: 1:1 Coaching, Workshop, Implementation Sprint, Fractional CAO)
   - Results metrics (20+ hrs saved, 100% confidence increase, 8-12x ROI)
   - Who We Work With (Nonprofits + Small Business)
   - About teaser with Patrick's credentials
   - Calendly embed placeholder (we'll add the real URL later)
   - Footer
3. **Services (/services)** — Full pricing tiers:
   - 1:1 AI Coaching: $500-750/session or $2,500-4,000/mo retainer (FEATURED)
   - AI Readiness Workshop: $3,500-5,000
   - Implementation Sprint: $8,000-15,000
   - Fractional CAO: $6,000-12,000/mo
4. **About (/about)** — Patrick Farrar bio, credentials, mission
5. **Contact (/contact)** — Simple form + Calendly placeholder

## PHASE 2 — CONVERSION PAGES (~1 hour)
6. **For Nonprofits (/nonprofits)** — Sector landing page, SEO-optimized
7. **For Small Business (/small-business)** — Sector landing page
8. **FAQ (/faq)** — With FAQPage schema markup

## PHASE 3 — LEAD GEN (~1 hour)
9. **AI Readiness Assessment (/assessment)** — Interactive 8-question quiz with scoring, email capture, results display
10. **Case Studies (/case-studies)** — 2 initial studies

## KEY REQUIREMENTS
- Mobile-first responsive design
- WCAG 2.1 AA accessibility (4.5:1 contrast, keyboard nav, semantic HTML, alt text)
- Schema markup: Organization, Service, FAQPage
- Open Graph meta tags per page
- Sticky CTA bar appears after scrolling past hero
- Animated stat counters on scroll (Intersection Observer)
- No placeholder "Lorem ipsum" — use real copy throughout
- Calendly integration points ready (placeholder div with comment for URL)
- All prices in USD

## CONTENT VOICE
- Confident but not arrogant
- Practical not theoretical ("here's what you'll implement" not "here's what AI could do")
- Warm not corporate ("Let's talk" not "Contact our sales team")
- Anti-hype ("Practical AI that works today" not "Revolutionary AI transformation")
- Specific ("20+ hours/month saved" not "increased productivity")

## ABOUT PATRICK FARRAR (use in bio sections)
Founder & CEO of ImpactNorth AI. 12+ years in Canada's innovation ecosystem. Former COO at Venture for Canada, CEO at Startup Zone, Director of Innovation at Halifax Partnership. Enabled $18M+ in funding. Built 500+ partnerships. Based in Toronto. Now helping organizations across North America implement AI practically and responsibly.

## START NOW
Initialize the Next.js project, set up the design system (tailwind config, fonts, layout), then build the homepage section by section. Let's go.
```

---

## TIPS FOR THE CLAUDE CODE SESSION

1. **Work in phases.** Don't try to build everything at once. Get Phase 1 deployed to Vercel first, then iterate.

2. **If Claude Code asks questions**, point it back to this prompt or the build brief. The spec is intentionally detailed to minimize back-and-forth.

3. **For Vercel deployment**, you'll need:
   - A Vercel account (free tier works)
   - Run `npx vercel` in the project directory
   - Or connect to GitHub and deploy via Vercel dashboard

4. **Things to customize after the initial build:**
   - Replace Calendly placeholder with your real URL
   - Add your actual client logos (Genome Atlantic, etc.)
   - Add real testimonial quotes
   - Add your headshot to the About page
   - Update contact email to patrick@impactnorth.org
   - Add Google Analytics / Plausible tracking code

5. **What NOT to worry about right now:**
   - Blog/resources section (add later)
   - Email automation (set up after site is live)
   - AI chatbot (Phase 2 feature)
   - Video content (record after launch)
   - ROI calculator (build in week 2)

6. **If you run into Tailwind font issues**, the fonts config should look like:
```ts
// tailwind.config.ts
fontFamily: {
  serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
  sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-jetbrains-mono)', 'monospace'],
}
```

7. **For the assessment quiz**, the scoring logic is:
   - 8 questions, each scored 0-12.5 points
   - Total score out of 100
   - Stages: 0-25 = AI Curious, 26-50 = AI Capable, 51-75 = AI Confident, 76-100 = AI Transformed
   - Email capture screen appears BEFORE results
   - Results show: score, stage, 3 personalized recommendations, book-a-call CTA
