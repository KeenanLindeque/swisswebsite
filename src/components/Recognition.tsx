"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Shield, Star, Crown } from "./Icons";

const levels = [
  {
    icon: Shield,
    tier: "Tier I",
    title: "Verified Quality",
    description: "Your hotel passed. Your operations are sound, your service is consistent, and your guests notice. This is where credibility begins.",
    criteria: ["Consistent operations", "Service standards met", "Guest satisfaction"],
  },
  {
    icon: Star,
    tier: "Tier II",
    title: "Commended Excellence",
    description: "Reserved for the top 20% of assessed properties. These hotels don't just meet standards — they set them. Guests return because they can't find better.",
    criteria: ["Above-average scores", "Proactive service culture", "Operational distinction"],
  },
  {
    icon: Crown,
    tier: "Tier III",
    title: "Distinguished Hospitality",
    description: "The highest tier. Fewer than 1 in 10 hotels reach this level. These are the properties that define what hospitality should feel like.",
    criteria: ["Top 10% worldwide", "Exceptional in every area", "Industry benchmark"],
  },
];

const principles = [
  { label: "Assessment-based", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6" },
  { label: "Time-bound", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Independently reviewed", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
  { label: "Free from commercial influence", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
];

const benefits = [
  { text: "Official recognition certificate & quality seal", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { text: "Featured listing on SwissHospitality.com", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
  { text: "Use of the SHC quality mark in marketing & sales", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" },
];

function PrincipleIcon({ d }: { d: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--silver)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.6 }}>
      <path d={d} />
    </svg>
  );
}

function BenefitIcon({ d }: { d: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--silver)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d={d} />
    </svg>
  );
}

export default function Recognition() {
  const [r1, s1] = useReveal({ delay: 0 });
  const [r2, s2] = useReveal({ delay: 0.1 });
  const [r3, s3] = useReveal({ delay: 0.2 });
  const [r4, s4] = useReveal({ delay: 0.35 });
  const [hovered, setHovered] = useState<number | null>(null);
  const [tagHovered, setTagHovered] = useState<number | null>(null);

  return (
    <section id="recognition" style={{ padding: "180px 0", backgroundColor: "var(--blue)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        <div ref={r1} style={{ ...s1, marginBottom: 24 }}>
          <span style={{ fontSize: 72, fontWeight: 200, color: "var(--white)", opacity: 0.04, lineHeight: 1, display: "block", marginBottom: -8 }}>
            03
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1.2, marginBottom: 16 }}>
            Recognition Program
          </h2>
          <p style={{ fontSize: 14, fontWeight: 400, color: "var(--silver)", letterSpacing: "0.08em", fontStyle: "italic", opacity: 0.5 }}>
            You Can&apos;t Buy It. You Earn It.
          </p>
        </div>
        <div ref={r2} style={{ ...s2, maxWidth: 640, marginBottom: 88 }}>
          <p style={{ fontSize: 17, color: "var(--silver)", fontWeight: 300, lineHeight: 1.9, opacity: 0.55 }}>
            No sponsorship. No membership fee. The Swiss Hospitality recognition is awarded exclusively through independent assessment — making it the most credible quality signal a hotel can carry.
          </p>
        </div>

        <div
          ref={r3}
          className="rec-grid"
          style={{ ...s3, display: "flex", gap: 1, marginBottom: 88 }}
        >
          {levels.map((level, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={level.title}
                className="rec-card"
                style={{
                  flex: 1,
                  position: "relative",
                  padding: "60px 44px 52px",
                  border: `1px solid ${isHovered ? "rgba(218,220,226,0.18)" : "rgba(218,220,226,0.06)"}`,
                  transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  backgroundColor: isHovered ? "rgba(218,220,226,0.04)" : "transparent",
                  cursor: "default",
                  overflow: "hidden",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, transparent 30%, rgba(218,220,226,0.06) 50%, transparent 70%)",
                    backgroundSize: "200% 200%",
                    backgroundPosition: isHovered ? "0% 0%" : "100% 100%",
                    opacity: isHovered ? 1 : 0,
                    transition: "background-position 1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    pointerEvents: "none",
                  }}
                />

                {/* Tier badge */}
                <div style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 32,
                }}>
                  <div style={{
                    color: isHovered ? "var(--white)" : "var(--silver)",
                    transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                    opacity: isHovered ? 0.8 : 0.3,
                    transform: isHovered ? "scale(1.08)" : "scale(1)",
                  }}>
                    <level.icon size={28} color="currentColor" />
                  </div>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 500,
                    color: isHovered ? "var(--white)" : "var(--silver)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: isHovered ? 0.8 : 0.3,
                    transition: "all 0.6s",
                    padding: "4px 12px",
                    border: `1px solid ${isHovered ? "rgba(218,220,226,0.25)" : "rgba(218,220,226,0.06)"}`,
                    backgroundColor: isHovered ? "rgba(218,220,226,0.08)" : "transparent",
                  }}>
                    {level.tier}
                  </span>
                </div>

                <h3 style={{ fontSize: 22, fontWeight: 300, color: "var(--white)", marginBottom: 16, position: "relative" }}>
                  {level.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--silver)", lineHeight: 1.8, fontWeight: 300, opacity: isHovered ? 0.6 : 0.45, transition: "opacity 0.5s", position: "relative", marginBottom: 28 }}>
                  {level.description}
                </p>

                {/* Criteria tags */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  position: "relative",
                }}>
                  {level.criteria.map((c) => (
                    <div
                      key={c}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 12,
                        color: "var(--silver)",
                        fontWeight: 300,
                        opacity: isHovered ? 0.55 : 0.3,
                        transition: "opacity 0.6s",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.6 }}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div
          ref={r4}
          className="rec-bottom"
          style={{
            ...s4,
            display: "flex",
            gap: 80,
            paddingTop: 52,
            borderTop: "1px solid rgba(218,220,226,0.08)",
          }}
        >
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: 11, fontWeight: 400, color: "var(--silver)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24, opacity: 0.4 }}>
              Recognition Is
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {principles.map((p, i) => (
                <span
                  key={p.label}
                  style={{
                    padding: "10px 22px",
                    border: `1px solid ${tagHovered === i ? "rgba(218,220,226,0.3)" : "rgba(218,220,226,0.12)"}`,
                    fontSize: 13,
                    color: "var(--silver)",
                    fontWeight: 300,
                    letterSpacing: "0.03em",
                    transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: tagHovered === i ? "translateY(-2px)" : "translateY(0)",
                    cursor: "default",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                  onMouseEnter={() => setTagHovered(i)}
                  onMouseLeave={() => setTagHovered(null)}
                >
                  <PrincipleIcon d={p.icon} />
                  {p.label}
                </span>
              ))}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: 11, fontWeight: 400, color: "var(--silver)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24, opacity: 0.4 }}>
              Qualified Hotels Receive
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {benefits.map((b) => (
                <div
                  key={b.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "14px 20px",
                    border: "1px solid rgba(218,220,226,0.06)",
                    transition: "border-color 0.6s",
                    cursor: "default",
                  }}
                  className="rec-benefit"
                >
                  <div style={{
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid rgba(218,220,226,0.15)",
                    opacity: 0.6,
                  }}>
                    <BenefitIcon d={b.icon} />
                  </div>
                  <span style={{ color: "var(--silver)", fontSize: 14, fontWeight: 300, lineHeight: 1.5 }}>
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p style={{ marginTop: 56, fontSize: 15, fontStyle: "italic", color: "var(--silver)", fontWeight: 300, opacity: 0.35 }}>
          If your hotel earns it, your competitors will notice.
        </p>
      </div>

      <style>{`
        .rec-benefit:hover {
          border-color: rgba(218,220,226,0.15) !important;
        }
        @media (max-width: 900px) {
          .rec-grid { flex-direction: column !important; }
          .rec-bottom { flex-direction: column !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
