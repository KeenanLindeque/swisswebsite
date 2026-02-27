"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

function SealBadge({ tier, size = 120 }: { tier: 1 | 2 | 3; size?: number }) {
  const labels = ["Verified", "Commended", "Distinguished"];
  const rings = [1, 2, 3];
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" style={{ display: "block" }}>
      <circle cx="60" cy="60" r="56" stroke="var(--silver)" strokeWidth="0.5" opacity="0.15" />
      {rings.slice(0, tier).map((_, i) => (
        <circle key={i} cx="60" cy="60" r={48 - i * 8} stroke="var(--silver)" strokeWidth="0.3" opacity={0.08 + i * 0.04} />
      ))}
      <circle cx="60" cy="60" r="32" stroke="var(--silver)" strokeWidth="0.5" opacity="0.2" />
      <text x="60" y="55" textAnchor="middle" fill="var(--white)" fontSize="7" fontWeight="300" letterSpacing="0.15em" opacity="0.6" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">
        {labels[tier - 1].toUpperCase()}
      </text>
      <text x="60" y="68" textAnchor="middle" fill="var(--silver)" fontSize="5" fontWeight="300" letterSpacing="0.2em" opacity="0.3" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">
        SHC
      </text>
      {/* Decorative points around the outer ring */}
      {Array.from({ length: tier === 3 ? 24 : tier === 2 ? 16 : 8 }).map((_, i, arr) => {
        const angle = (i / arr.length) * Math.PI * 2 - Math.PI / 2;
        const x = 60 + Math.cos(angle) * 56;
        const y = 60 + Math.sin(angle) * 56;
        return <circle key={i} cx={x} cy={y} r="1" fill="var(--silver)" opacity="0.12" />;
      })}
    </svg>
  );
}

const levels = [
  {
    tier: 1 as const,
    title: "Verified Quality",
    description: "Operations are sound. Service is consistent. The foundation of credibility.",
  },
  {
    tier: 2 as const,
    title: "Commended Excellence",
    description: "Top 20% of assessed properties. Hotels that set the standard others follow.",
  },
  {
    tier: 3 as const,
    title: "Distinguished Hospitality",
    description: "Fewer than 1 in 10. The properties that define what hospitality should feel like.",
  },
];

const principles = [
  "Assessment-based",
  "Time-bound",
  "Independently reviewed",
  "Free from commercial influence",
];

export default function Recognition() {
  const [r1, s1] = useReveal({ delay: 0 });
  const [r2, s2] = useReveal({ delay: 0.1 });
  const [r3, s3] = useReveal({ delay: 0.25 });
  const [r4, s4] = useReveal({ delay: 0.4 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="recognition" style={{ padding: "240px 0", backgroundColor: "var(--blue)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>

        <div ref={r1} style={{ ...s1, textAlign: "center", marginBottom: 48 }}>
          <div style={{ width: 48, height: 1, backgroundColor: "var(--silver)", opacity: 0.1, margin: "0 auto 32px" }} />
          <p style={{ color: "var(--silver)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 400, opacity: 0.3 }}>
            Recognition Program
          </p>
        </div>

        <div ref={r2} style={{ ...s2, textAlign: "center", maxWidth: 600, margin: "0 auto 180px" }}>
          <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1.1, marginBottom: 40, letterSpacing: "-0.02em" }}>
            You cannot buy it.<br />You earn it.
          </h2>
          <p style={{ fontSize: 17, color: "var(--silver)", fontWeight: 300, lineHeight: 2, opacity: 0.35 }}>
            Awarded exclusively through independent assessment. No sponsorship. No membership fee. The most credible quality signal a hotel can carry.
          </p>
        </div>

        {/* Three tiers — ceremonial treatment */}
        <div
          ref={r3}
          className="rec-tiers"
          style={{ ...s3, display: "flex", gap: 1, marginBottom: 180 }}
        >
          {levels.map((level, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={level.title}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "80px 48px 72px",
                  border: `1px solid ${isHovered ? "rgba(218,220,226,0.12)" : "rgba(218,220,226,0.04)"}`,
                  transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                  backgroundColor: isHovered ? "rgba(218,220,226,0.02)" : "transparent",
                  cursor: "default",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{
                  margin: "0 auto 40px",
                  opacity: isHovered ? 0.8 : 0.5,
                  transition: "opacity 0.8s",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}>
                  <SealBadge tier={level.tier} size={140} />
                </div>

                <p style={{ fontSize: 10, fontWeight: 400, color: "var(--silver)", letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.25, marginBottom: 16 }}>
                  Tier {level.tier === 1 ? "I" : level.tier === 2 ? "II" : "III"}
                </p>

                <h3 style={{ fontSize: 22, fontWeight: 200, color: "var(--white)", marginBottom: 24, letterSpacing: "-0.01em" }}>
                  {level.title}
                </h3>

                <p style={{ fontSize: 15, color: "var(--silver)", lineHeight: 1.9, fontWeight: 300, opacity: isHovered ? 0.5 : 0.3, transition: "opacity 0.6s", maxWidth: 280, margin: "0 auto" }}>
                  {level.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Principles — minimal */}
        <div ref={r4} style={{ ...s4, textAlign: "center" }}>
          <p style={{ fontSize: 10, fontWeight: 400, color: "var(--silver)", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.2, marginBottom: 32 }}>
            Recognition Is
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12 }}>
            {principles.map((p) => (
              <span
                key={p}
                style={{
                  padding: "10px 24px",
                  border: "1px solid rgba(218,220,226,0.08)",
                  fontSize: 13,
                  color: "var(--silver)",
                  fontWeight: 300,
                  letterSpacing: "0.03em",
                  opacity: 0.35,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .rec-tiers { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
