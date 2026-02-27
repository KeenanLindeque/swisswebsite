"use client";

const words = [
  "Independent",
  "Impartial",
  "Assessment-Based",
  "250+ Hotels",
  "40+ Countries",
  "Certification Authority",
  "Swiss Precision",
  "Global Standard",
  "98% Retention",
  "15 Years",
  "Earned Recognition",
  "Hotel Quality",
];

export default function Marquee() {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "32px 0",
        backgroundColor: "var(--blue)",
        borderTop: "1px solid rgba(218,220,226,0.04)",
        borderBottom: "1px solid rgba(218,220,226,0.04)",
      }}
    >
      <div className="marquee-track" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {repeated.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="marquee-word"
            style={{
              fontSize: 11,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--silver)",
              fontWeight: 300,
              opacity: 0.15,
              padding: "0 32px",
              flexShrink: 0,
              transition: "opacity 0.4s",
              display: "inline-flex",
              alignItems: "center",
              gap: 32,
            }}
          >
            {word}
            <span style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: "var(--silver)", opacity: 0.2, flexShrink: 0 }} />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 90s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-word:hover { opacity: 0.45 !important; }
      `}</style>
    </div>
  );
}
