"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Shield, Star, Crown } from "./Icons";

const levels = [
  {
    icon: Shield,
    title: "Verified Quality",
    description: "Your hotel passed. Your operations are sound, your service is consistent, and your guests notice. This is where credibility begins.",
  },
  {
    icon: Star,
    title: "Commended Excellence",
    description: "Reserved for the top 20% of assessed properties. These hotels don't just meet standards — they set them. Guests return because they can't find better.",
  },
  {
    icon: Crown,
    title: "Distinguished Hospitality",
    description: "The highest tier. Fewer than 1 in 10 hotels reach this level. These are the properties that define what hospitality should feel like.",
  },
];

const principles = [
  "Assessment-based",
  "Time-bound",
  "Independently reviewed",
  "Free from commercial influence",
];

const benefits = [
  "Official recognition certificate & quality seal",
  "Featured listing on SwissHospitality.com",
  "Use of the SHC quality mark in marketing & sales",
];

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
                {/* Shimmer — only visible on hover */}
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

                <div style={{
                  marginBottom: 36,
                  color: isHovered ? "var(--white)" : "var(--silver)",
                  transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  opacity: isHovered ? 0.8 : 0.3,
                  transform: isHovered ? "scale(1.08)" : "scale(1)",
                }}>
                  <level.icon size={28} color="currentColor" />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 300, color: "var(--white)", marginBottom: 16, position: "relative" }}>
                  {level.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--silver)", lineHeight: 1.8, fontWeight: 300, opacity: isHovered ? 0.6 : 0.45, transition: "opacity 0.5s", position: "relative" }}>
                  {level.description}
                </p>
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
                  key={p}
                  style={{
                    padding: "10px 22px",
                    border: `1px solid ${tagHovered === i ? "rgba(218,220,226,0.25)" : "rgba(218,220,226,0.12)"}`,
                    fontSize: 13,
                    color: "var(--silver)",
                    fontWeight: 300,
                    letterSpacing: "0.03em",
                    transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: tagHovered === i ? "translateY(-2px)" : "translateY(0)",
                    cursor: "default",
                  }}
                  onMouseEnter={() => setTagHovered(i)}
                  onMouseLeave={() => setTagHovered(null)}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: 11, fontWeight: 400, color: "var(--silver)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24, opacity: 0.4 }}>
              Qualified Hotels Receive
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 14, listStyle: "none" }}>
              {benefits.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "center", gap: 14, color: "var(--silver)", fontSize: 15, fontWeight: 300 }}>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: "var(--silver)", opacity: 0.3 }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p style={{ marginTop: 56, fontSize: 15, fontStyle: "italic", color: "var(--silver)", fontWeight: 300, opacity: 0.35 }}>
          If your hotel earns it, your competitors will notice.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .rec-grid { flex-direction: column !important; }
          .rec-bottom { flex-direction: column !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
