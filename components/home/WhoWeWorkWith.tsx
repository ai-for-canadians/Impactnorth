import { Button } from "@/components/shared/Button";

export function WhoWeWorkWith() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4">
            Who We Serve
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">
            Built for organizations that make an impact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Nonprofits */}
          <div className="bg-light-bg rounded-3xl p-10 lg:p-12 border border-border">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">
              Nonprofits & Foundations
            </h3>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              From grant writing to donor engagement, we help mission-driven
              organizations multiply their impact with AI. More mission, less
              admin.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Grant writing & research",
                "Donor engagement & communications",
                "Impact reporting & program evaluation",
                "Volunteer management & operations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/nonprofits" variant="secondary" size="md">
              AI for Nonprofits
            </Button>
          </div>

          {/* Small Business */}
          <div className="bg-light-bg rounded-3xl p-10 lg:p-12 border border-border">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">
              Growing Companies
            </h3>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              From operations to customer experience, we help SMEs compete with
              enterprises using practical AI. Your size is your advantage.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Operations & workflow automation",
                "Customer service & experience",
                "Marketing & content creation",
                "Sales processes & financial operations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/small-business" variant="primary" size="md">
              AI for Growing Companies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
