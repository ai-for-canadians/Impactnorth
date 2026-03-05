import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = {
  Services: [
    { label: "1:1 AI Coaching", href: "/services#coaching" },
    { label: "AI Readiness Workshop", href: "/services#workshop" },
    { label: "Implementation Sprint", href: "/services#sprint" },
    { label: "Fractional CAO", href: "/services#cao" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "For Nonprofits", href: "/nonprofits" },
    { label: "For Small Business", href: "/small-business" },
    { label: "AI Readiness Assessment", href: "/assessment" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark-bg text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="ImpactNorth AI Home">
              <span className="font-serif text-2xl text-white">
                Impact<span className="text-secondary">North</span>
              </span>
              <span className="text-xs font-mono text-accent font-bold tracking-wider ml-1">AI</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-4 text-sm text-gray-400">
              {SITE_CONFIG.location}
            </p>
            <p className="text-sm text-gray-400">
              {SITE_CONFIG.serviceArea}
            </p>

            {/* LinkedIn */}
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Follow ImpactNorth AI on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ImpactNorth AI for Canadians Inc. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            <Link href="/contact" className="hover:text-white transition-colors">
              {SITE_CONFIG.email}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
