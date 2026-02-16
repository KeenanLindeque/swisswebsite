"use client";

const words = [
  "Five-Star Hotels",
  "Luxury Resorts",
  "Boutique Properties",
  "Hotel Groups",
  "Mystery Guest Assessments",
  "Check-in Experience",
  "F&B Standards",
  "Housekeeping Standards",
  "Concierge Quality",
  "Room Inspections",
  "Guest Journey",
  "Service Recovery",
];

export default function Marquee() {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "28px 0",
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
              fontSize: 12,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--silver)",
              fontWeight: 300,
              opacity: 0.2,
              padding: "0 28px",
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
          animation: marquee 80s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
