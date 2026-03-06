"use client";

import { useEffect, useRef, useState } from "react";
import { FIVE_LAYER_MODEL, AI_GAP_STATS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  diamond: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  ),
  expand: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  ),
  compass: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
};

export function FiveLayerModel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeLayer = FIVE_LAYER_MODEL[activeIndex];

  return (
    <section className="bg-white py-20 lg:py-28" aria-label="Our Five-Layer Value Model">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
            Our Framework
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl text-primary">
            Beyond the Prompt: Our Five-Layer Value Model
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-text-secondary leading-relaxed">
            {AI_GAP_STATS.headline}
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            We bridge this gap by moving beyond basic prompting. Our Five-Layer Value Model turns AI from a novelty into a permanent organizational asset.
          </p>
        </div>

        {/* Desktop: Tabs layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 max-w-6xl mx-auto">
          {/* Tab list */}
          <div className="col-span-4 space-y-2" role="tablist" aria-label="Value model layers">
            {FIVE_LAYER_MODEL.map((layer, i) => {
              const isActive = i === activeIndex;
              const colorClass = layer.color === "accent" ? "border-accent" : "border-secondary";
              return (
                <button
                  key={layer.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${layer.id}`}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left p-4 rounded-xl border-l-4 transition-all duration-300 min-h-[44px] ${
                    isActive
                      ? `${colorClass} bg-light-bg shadow-sm`
                      : "border-transparent hover:bg-light-bg/50"
                  } ${
                    visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`shrink-0 ${
                        isActive
                          ? layer.color === "accent"
                            ? "text-accent"
                            : "text-secondary"
                          : "text-text-secondary"
                      }`}
                    >
                      {iconMap[layer.icon]}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                        Layer {i + 1}
                      </span>
                      <p
                        className={`font-semibold ${
                          isActive ? "text-primary" : "text-text-secondary"
                        }`}
                      >
                        {layer.title}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="col-span-8" role="tabpanel" id={`panel-${activeLayer.id}`} aria-label={activeLayer.title}>
            <div
              className={`rounded-2xl border border-border bg-light-bg p-8 lg:p-10 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? "400ms" : "0ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeLayer.color === "accent" ? "bg-accent/10 text-accent" : "bg-secondary/10 text-secondary"
                  }`}
                >
                  {iconMap[activeLayer.icon]}
                </div>
                <div>
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                    Layer {activeIndex + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-primary">{activeLayer.title}</h3>
                </div>
              </div>

              <p className="text-lg font-medium text-primary mb-4">{activeLayer.tagline}</p>
              <p className="text-text-secondary leading-relaxed mb-6">{activeLayer.detail}</p>

              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm font-bold ${
                  activeLayer.color === "accent"
                    ? "bg-accent/10 text-accent"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                {activeLayer.metric}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion layout */}
        <div className="lg:hidden space-y-3">
          {FIVE_LAYER_MODEL.map((layer, i) => {
            const isExpanded = expandedMobile === i;
            const colorClass = layer.color === "accent" ? "border-accent" : "border-secondary";
            return (
              <div
                key={layer.id}
                className={`rounded-xl border transition-all duration-300 ${
                  isExpanded ? `${colorClass} border-l-4 bg-light-bg` : "border-border"
                } ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
              >
                <button
                  onClick={() => setExpandedMobile(isExpanded ? null : i)}
                  className="w-full text-left p-4 flex items-center gap-3 min-h-[44px]"
                  aria-expanded={isExpanded}
                  aria-controls={`mobile-panel-${layer.id}`}
                >
                  <div
                    className={`shrink-0 ${
                      layer.color === "accent" ? "text-accent" : "text-secondary"
                    }`}
                  >
                    {iconMap[layer.icon]}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                      Layer {i + 1}
                    </span>
                    <p className="font-semibold text-primary">{layer.title}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-text-secondary transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {isExpanded && (
                  <div id={`mobile-panel-${layer.id}`} className="px-4 pb-4">
                    <p className="text-sm font-medium text-primary mb-2">{layer.tagline}</p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {layer.detail}
                    </p>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs font-bold ${
                        layer.color === "accent"
                          ? "bg-accent/10 text-accent"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {layer.metric}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
