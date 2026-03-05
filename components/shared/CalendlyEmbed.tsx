"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  className?: string;
}

export function CalendlyEmbed({ className = "" }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div
        className="calendly-inline-widget rounded-2xl overflow-hidden"
        data-url="https://calendly.com/patrick-aiforcanadians/15-minute-meeting?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
