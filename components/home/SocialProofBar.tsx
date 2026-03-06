import { SOCIAL_PROOF_ORGS } from "@/lib/constants";

export function SocialProofBar() {
  return (
    <section className="bg-white border-b border-border" aria-label="Trusted organizations">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <span className="text-xs font-mono text-text-secondary uppercase tracking-widest shrink-0">
            Trusted by leaders at
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {SOCIAL_PROOF_ORGS.map((org) => (
              <span
                key={org}
                className="text-sm font-medium text-text-secondary/70 px-3 py-1.5 rounded-full border border-border bg-light-bg"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
