// src/components/SponsorsCarousel.tsx
import { sponsors } from "../config/sponsors";

function SponsorItem({ sponsor }: { sponsor: typeof sponsors[number] }) {
  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-32 h-24 flex-shrink-0"
    >
      {sponsor.logo ? (
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="h-20 object-contain"
        />
      ) : (
        <div
          className="flex items-center justify-center w-20 h-20 rounded-lg text-white font-bold text-lg"
          style={{ backgroundColor: sponsor.color }}
        >
          {sponsor.initials}
        </div>
      )}
    </a>
  );
}

/** Бесшовная автопрокрутка */
export function SponsorsCarousel() {
  // Дублируем массив, чтобы сделать бесшовный эффект
  const track = [...sponsors, ...sponsors];

  return (
    <div className="overflow-hidden w-full bg-neutral-900 border-b border-neutral-800 py-6">
      <div className="flex animate-scrollSponsors">
        {track.map((s, idx) => (
          <SponsorItem key={s.id + idx} sponsor={s} />
        ))}
      </div>

      <style>{`
  @keyframes scrollSponsors {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scrollSponsors {
    display: flex;
    gap: 2rem;
    animation: scrollSponsors 30s linear infinite;
  }
`}</style>
    </div>
  );
}
