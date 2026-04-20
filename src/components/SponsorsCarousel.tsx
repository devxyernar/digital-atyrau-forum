// src/components/SponsorsCarousel.tsx
import { sponsors } from "../config/sponsors";

function SponsorItem({ sponsor }: { sponsor: typeof sponsors[number] }) {
  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-44 h-28 flex-shrink-0"
    >
      {sponsor.logo ? (
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="h-24 w-36 object-contain"
        />
      ) : (
        <div
          className="flex items-center justify-center w-24 h-24 rounded-lg text-white font-bold text-xl"
          style={{ backgroundColor: sponsor.color }}
        >
          {sponsor.initials}
        </div>
      )}
    </a>
  );
}

export function SponsorsCarousel() {
  return (
    <div className="overflow-hidden w-full bg-neutral-900 border-b border-neutral-800 py-6">
      <div className="flex w-max">
        <div className="flex flex-shrink-0 animate-scrollSponsors gap-6 pr-6">
          {sponsors.map((s, idx) => (
            <SponsorItem key={`s1-${s.id}-${idx}`} sponsor={s} />
          ))}
        </div>
        <div className="flex flex-shrink-0 animate-scrollSponsors gap-6 pr-6">
          {sponsors.map((s, idx) => (
            <SponsorItem key={`s2-${s.id}-${idx}`} sponsor={s} />
          ))}
        </div>
      </div>

      <style>{`
  @keyframes scrollSponsors {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  .animate-scrollSponsors {
    animation: scrollSponsors 28s linear infinite;
  }
`}</style>
    </div>
  );
}
