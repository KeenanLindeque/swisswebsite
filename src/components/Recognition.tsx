"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

function SealBadge({ tier, size = 160, active = false }: { tier: 1 | 2 | 3; size?: number; active?: boolean }) {
  const labels = ["VERIFIED", "COMMENDED", "DISTINGUISHED"];
  const points = tier === 3 ? 32 : tier === 2 ? 20 : 12;
  const op = active ? 1 : 0.6;

  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" style={{ display: "block", transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s", opacity: op, transform: active ? "scale(1.04)" : "scale(1)" }}>
      {/* Outer decorative ring with notches */}
      {Array.from({ length: points }).map((_, i) => {
        const angle = (i / points) * Math.PI * 2 - Math.PI / 2;
        const inner = 72;
        const outer = 76;
        const x1 = 80 + Math.cos(angle) * inner;
        const y1 = 80 + Math.sin(angle) * inner;
        const x2 = 80 + Math.cos(angle) * outer;
        const y2 = 80 + Math.sin(angle) * outer;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--silver)" strokeWidth="0.5" opacity="0.3" />;
      })}

      <circle cx="80" cy="80" r="70" stroke="var(--silver)" strokeWidth="0.4" opacity="0.12" />
      <circle cx="80" cy="80" r="58" stroke="var(--silver)" strokeWidth="0.3" opacity="0.15" />
      <circle cx="80" cy="80" r="46" stroke="var(--silver)" strokeWidth="0.5" opacity="0.2" />

      {/* Inner content */}
      <text x="80" y="72" textAnchor="middle" fill="var(--white)" fontSize="8" fontWeight="400" letterSpacing="0.2em" opacity="0.8" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">
        {labels[tier - 1]}
      </text>
      <line x1="68" y1="78" x2="92" y2="78" stroke="var(--silver)" strokeWidth="0.3" opacity="0.2" />
      <text x="80" y="90" textAnchor="middle" fill="var(--silver)" fontSize="6" fontWeight="300" letterSpacing="0.3em" opacity="0.4" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">
        QUALITY
      </text>

      {/* Corner accents for tier 2 & 3 */}
      {tier >= 2 && (
        <>
          <circle cx="80" cy="10" r="2" fill="var(--silver)" opacity="0.15" />
          <circle cx="80" cy="150" r="2" fill="var(--silver)" opacity="0.15" />
        </>
      )}
      {tier >= 3 && (
        <>
          <circle cx="10" cy="80" r="2" fill="var(--silver)" opacity="0.15" />
          <circle cx="150" cy="80" r="2" fill="var(--silver)" opacity="0.15" />
        </>
      )}
    </svg>
  );
}

const levels = [
  {
    tier: 1 as const,
    title: "Verified Quality",
    stat: "Foundation",
    description: "Operations are sound. Service is consistent. The starting point of credibility in the global market.",
  },
  {
    tier: 2 as const,
    title: "Commended Excellence",
    stat: "Top 20%",
    description: "These hotels don't just meet standards — they shape them. Guests return because they can't find better.",
  },
  {
    tier: 3 as const,
    title: "Distinguished Hospitality",
    stat: "Top 10%",
    description: "The highest tier. The properties that define what hospitality should feel like. Fewer than 1 in 10 qualify.",
  },
];

export default function Recognition() {
  const [r1, s1] = useReveal({ delay: 0 });
  const [r2, s2] = useReveal({ delay: 0.12 });
  const [r3, s3] = useReveal({ delay: 0.25 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="recognition" style={{ padding: "200px 0 240px", backgroundColor: "var(--blue)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>

        <div ref={r1} style={{ ...s1, display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 140, flexWrap: "wrap", gap: 40 }}>
          <div>
            <p style={{ color: "var(--silver)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 400, opacity: 0.35, marginBottom: 24 }}>
              Recognition Program
            </p>
            <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              You can&apos;t buy it.<br />
              <span style={{ fontWeight: 500 }}>You earn it.</span>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--silver)", fontWeight: 300, lineHeight: 1.9, opacity: 0.45, maxWidth: 380 }}>
            Awarded exclusively through independent assessment. No sponsorship. No membership fee. The most credible quality signal a hotel can carry.
          </p>
        </div>

        <div
          ref={r2}
          className="rec-tiers"
          style={{ ...s2, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}
        >
          {levels.map((level, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={level.title}
                style={{
                  textAlign: "center",
                  padding: "80px 48px 72px",
                  border: `1px solid rgba(218,220,226,${isHovered ? "0.1" : "0.04"})`,
                  backgroundColor: isHovered ? "rgba(218,220,226,0.02)" : "transparent",
                  transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  cursor: "default",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ margin: "0 auto 44px", display: "flex", justifyContent: "center" }}>
                  <SealBadge tier={level.tier} size={160} active={isHovered} />
                </div>

                <p style={{ fontSize: 12, fontWeight: 400, color: "var(--silver)", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5, marginBottom: 8 }}>
                  {level.stat}
                </p>

                <h3 style={{ fontSize: 26, fontWeight: 200, color: "var(--white)", marginBottom: 24, letterSpacing: "-0.01em" }}>
                  {level.title}
                </h3>

                <p style={{ fontSize: 15, color: "var(--silver)", lineHeight: 1.8, fontWeight: 300, opacity: isHovered ? 0.6 : 0.35, transition: "opacity 0.5s", maxWidth: 300, margin: "0 auto" }}>
                  {level.description}
                </p>
              </div>
            );
          })}
        </div>

        <div ref={r3} style={{ ...s3, marginTop: 100, textAlign: "center" }}>
          <a
            href="/services/recognition"
            className="rec-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              color: "var(--silver)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 300,
              opacity: 0.4,
              borderBottom: "1px solid rgba(218,220,226,0.1)",
              paddingBottom: 6,
              transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; e.currentTarget.style.borderBottomColor = "rgba(218,220,226,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.4"; e.currentTarget.style.borderBottomColor = "rgba(218,220,226,0.1)"; }}
          >
            Learn about the program
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .rec-tiers { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
