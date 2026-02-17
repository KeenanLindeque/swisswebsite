"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Shield, Star, Crown } from "./Icons";

const levels = [
  {
    icon: Shield,
    title: "Verified Quality",
    description: "Hotels that demonstrate consistent operational standards and reliable service delivery.",
  },
  {
    icon: Star,
    title: "Commended Excellence",
    description: "Properties showing sustained above-standard performance in guest experience and service culture.",
  },
  {
    icon: Crown,
    title: "Distinguished Hospitality",
    description: "Exceptional establishments with measurable excellence across every dimension of hospitality.",
  },
];

const principles = [
  "Assessment-based",
  "Time-bound",
  "Independently reviewed",
  "Free from commercial influence",
];

const benefits = [
  "Official recognition certificate",
  "Digital quality seal",
  "Public listing on SwissHospitality.com",
];

export default function Recognition() {
  const [r1, s1] = useReveal({ delay: 0 });
  const [r2, s2] = useReveal({ delay: 0.1 });
  const [r3, s3] = useReveal({ delay: 0.2 });
  const [r4, s4] = useReveal({ delay: 0.35 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="recognition" style={{ padding: "160px 0", backgroundColor: "var(--blue)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        <div ref={r1} style={{ ...s1, marginBottom: 24 }}>
          <span style={{ fontSize: 80, fontWeight: 200, color: "var(--white)", opacity: 0.06, lineHeight: 1, display: "block", marginBottom: -12 }}>
            03
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "var(--white)", lineHeight: 1.2, marginBottom: 16 }}>
            Recognition Program
          </h2>
          <p style={{ fontSize: 15, fontWeight: 500, color: "var(--silver)", letterSpacing: "0.06em", fontStyle: "italic" }}>
            Recognition Earned Through Assessment.
          </p>
        </div>
        <div ref={r2} style={{ ...s2, maxWidth: 640, marginBottom: 80 }}>
          <p style={{ fontSize: 18, color: "var(--silver)", fontWeight: 300, lineHeight: 1.8, opacity: 0.6 }}>
            The Swiss Hospitality Recognition Program acknowledges hotels that demonstrate measurable excellence in service quality and operational integrity.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div
          ref={r3}
          className="rec-grid"
          style={{ ...s3, display: "flex", gap: 24, marginBottom: 80 }}
        >
          {levels.map((level, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={level.title}
                style={{
                  flex: 1,
                  padding: "56px 40px 48px",
                  border: `1px solid ${isHovered ? "rgba(218,220,226,0.15)" : "rgba(218,220,226,0.06)"}`,
                  borderRadius: 0,
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  backgroundColor: isHovered ? "rgba(218,220,226,0.04)" : "transparent",
                  cursor: "default",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ marginBottom: 32, color: isHovered ? "var(--white)" : "var(--silver)", transition: "color 0.4s" }}>
                  <level.icon size={28} color="currentColor" />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 400, color: "var(--white)", marginBottom: 16 }}>
                  {level.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--silver)", lineHeight: 1.7, fontWeight: 300, opacity: 0.6 }}>
                  {level.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom grid: Principles + Benefits */}
        <div
          ref={r4}
          className="rec-bottom"
          style={{
            ...s4,
            display: "flex",
            gap: 80,
            paddingTop: 48,
            borderTop: "1px solid rgba(218,220,226,0.08)",
          }}
        >
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: 13, fontWeight: 500, color: "var(--white)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20, opacity: 0.5 }}>
              Recognition Is
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {principles.map((p) => (
                <span
                  key={p}
                  style={{
                    padding: "8px 20px",
                    border: "1px solid rgba(218,220,226,0.12)",
                    fontSize: 14,
                    color: "var(--silver)",
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: 13, fontWeight: 500, color: "var(--white)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20, opacity: 0.5 }}>
              Qualified Hotels Receive
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none" }}>
              {benefits.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--silver)", fontSize: 15, fontWeight: 300 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--silver)", opacity: 0.3 }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p style={{ marginTop: 48, fontSize: 16, fontStyle: "italic", color: "var(--silver)", fontWeight: 300, opacity: 0.4 }}>
          Recognition reflects verified performance, not sponsorship.
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
