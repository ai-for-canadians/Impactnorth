import Image from "next/image";
import Link from "next/link";
import { NETWORK_MEMBERS } from "@/lib/constants";

function getInitials(name: string) {
  const parts = name.split(" ");
  return parts.length >= 2
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : name[0];
}

export function NetworkSection() {
  return (
    <section className="py-20 lg:py-28 bg-light-bg" aria-label="Our network">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
            Our People
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
            Our Network
          </h2>
        </div>
        <p className="text-center text-text-secondary max-w-2xl mx-auto mb-14">
          ImpactNorth AI is backed by a growing network of experienced
          professionals across strategy, technology, and business development.
          Patrick Farrar, CEO, leads all client engagements directly.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {NETWORK_MEMBERS.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              {member.hasPhoto ? (
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-3 border-2 border-border">
                  <Image
                    src="/headshot.jpeg"
                    alt={`${member.name}, ${member.role}`}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/10 border-2 border-border mb-3 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-semibold text-primary/50">
                    {getInitials(member.name)}
                  </span>
                </div>
              )}
              <p className="font-semibold text-primary text-sm">{member.name}</p>
              <p className="text-xs text-text-secondary">{member.role}</p>
            </div>
          ))}

          {/* More to come placeholder */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-dashed border-border mb-3 flex items-center justify-center">
              <svg className="w-8 h-8 text-text-secondary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <p className="font-semibold text-text-secondary text-sm">More to come</p>
          </div>
        </div>

        <p className="text-center mt-12">
          <Link
            href="/contact"
            className="text-secondary hover:text-secondary/80 underline underline-offset-4 transition-colors text-sm"
          >
            Interested in joining our network? Get in touch.
          </Link>
        </p>
      </div>
    </section>
  );
}
