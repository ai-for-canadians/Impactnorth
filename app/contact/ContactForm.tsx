"use client";

import { useState } from "react";
import { Button } from "@/components/shared/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-white rounded-2xl border border-secondary/30 p-8 text-center">
        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-primary mb-2">Message sent!</h3>
        <p className="text-text-secondary">
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
          placeholder="jane@organization.org"
        />
      </div>
      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-primary mb-2">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          autoComplete="organization"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
          placeholder="Your organization name"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors resize-y"
          placeholder="Tell us about your organization and what you're looking for..."
        />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full">
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
