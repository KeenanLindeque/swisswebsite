"use client";

const words = [
  "Independent Certification",
  "Mystery Assessments",
  "Operational Excellence",
  "Guest Experience",
  "Service Culture",
  "Swiss Precision",
  "Quality Benchmarking",
  "Trusted by 250+ Hotels",
  "40+ Countries",
  "98% Retention",
  "Assessment-Based Recognition",
  "The Standard in Hospitality",
];

export default function Marquee() {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "36px 0",
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
              fontSize: 11,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--silver)",
              fontWeight: 300,
              opacity: 0.18,
              padding: "0 36px",
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
          animation: marquee 100s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-word:hover {
          opacity: 0.5 !important;
        }
      `}</style>
    </div>
  );
}
