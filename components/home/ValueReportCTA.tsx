import { Button } from "@/components/shared/Button";

export function ValueReportCTA() {
  return (
    <section className="bg-secondary py-16 lg:py-20" aria-label="Download the value report">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
          See the Full Impact
        </h2>
        <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
          See exactly how we generated $10,450/month in value for a national science organization&apos;s communications function.
        </p>
        {/* TODO: Replace with email capture form when ready */}
        <Button href="/contact" variant="primary" size="lg">
          Download the Full Value Report
        </Button>
      </div>
    </section>
  );
}
