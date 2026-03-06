"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/shared/Button";

export function CTABar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed this session
    if (typeof window !== "undefined" && sessionStorage.getItem("ctaDismissed")) {
      setDismissed(true);
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show when hero is NOT intersecting (scrolled past it)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 md:bottom-auto md:top-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full md:-translate-y-full"
      }`}
      role="complementary"
      aria-label="Call to action"
    >
      <div className="bg-primary/95 backdrop-blur-sm border-t md:border-b border-accent/20">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          <p className="text-white text-sm md:text-base font-medium hidden sm:block">
            Ready to turn AI tools into operational assets?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button href="/contact" variant="primary" size="sm" className="flex-1 sm:flex-none">
              Book a Strategy Call
            </Button>
            <button
              onClick={() => {
                setDismissed(true);
                sessionStorage.setItem("ctaDismissed", "true");
              }}
              className="text-gray-400 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Dismiss call to action bar"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
