"use client";

const words = [
  "Five-Star Hotels",
  "Luxury Resorts",
  "Boutique Properties",
  "Palace Hotels",
  "Grand Suites",
  "Concierge Excellence",
  "Michelin Dining",
  "Spa & Wellness",
  "Guest Experience",
  "Service Culture",
  "Swiss Precision",
  "Certified Quality",
];

export default function Marquee() {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "32px 0",
        backgroundColor: "var(--blue)",
        borderTop: "1px solid rgba(218,220,226,0.06)",
        borderBottom: "1px solid rgba(218,220,226,0.06)",
      }}
    >
      <div className="marquee-track" style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}>
        {repeated.map((word, i) => (
          <span
            key={`${word}-${i}`}
            style={{
              fontSize: 11,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--silver)",
              fontWeight: 300,
              opacity: 0.2,
              padding: "0 32px",
              flexShrink: 0,
            }}
          >
            {word}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 90s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
