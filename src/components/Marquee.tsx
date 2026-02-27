"use client";

const words = [
  "Independent",
  "Impartial",
  "Assessment-Based",
  "40+ Countries",
  "250+ Hotels",
  "15 Years",
  "Certification Authority",
  "Swiss Precision",
  "Global Standard",
  "Earned Recognition",
  "98% Retention",
  "Institutional",
];

export default function Marquee() {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "40px 0",
        backgroundColor: "var(--blue)",
        borderTop: "1px solid rgba(218,220,226,0.04)",
        borderBottom: "1px solid rgba(218,220,226,0.04)",
      }}
    >
      <div className="marquee-track" style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}>
        {repeated.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="marquee-word"
            style={{
              fontSize: 10,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--silver)",
              fontWeight: 300,
              opacity: 0.12,
              padding: "0 40px",
              flexShrink: 0,
              transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
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
          animation: marquee 120s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-word:hover {
          opacity: 0.35 !important;
        }
      `}</style>
    </div>
  );
}
