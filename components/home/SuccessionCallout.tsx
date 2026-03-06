import { Button } from "@/components/shared/Button";

export function SuccessionCallout() {
  return (
    <section className="bg-light-bg py-20 lg:py-24" aria-label="Succession-ready AI infrastructure">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-primary/10 bg-white p-8 md:p-12 text-center">
          <div className="mx-auto w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4">
            Succession-Ready AI Infrastructure
          </h2>

          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto mb-4">
            We don&apos;t just train individuals &mdash; we build organizational AI assets. Custom Claude Projects, documented workflows, and institutional memory systems that new hires inherit on day one. Your AI knowledge survives leadership transitions.
          </p>

          <p className="text-primary font-semibold mb-8">
            This is the difference between AI coaching and AI infrastructure.
          </p>

          <Button href="/services" variant="outline" size="md">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
