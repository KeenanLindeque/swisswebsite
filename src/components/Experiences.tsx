"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 40, label: "Government", sublabel: "Organizations" },
  { value: 40, label: "Giga & Mega", sublabel: "Projects" },
  { value: 20, label: "Private", sublabel: "Sector" },
];

export default function Experiences() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experiences"
      ref={ref}
      style={{
        padding: "140px 0",
        backgroundColor: "var(--blue)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Geometric accent */}
      <div style={{ position: "absolute", top: 0, left: "50%", width: 1, height: "100%", backgroundColor: "var(--silver)", opacity: 0.04 }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 100 }}>
          <p style={{ color: "var(--silver)", fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 24, fontWeight: 400, opacity: 0.5 }}>
            Track Record
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: "var(--white)", lineHeight: 1.15, marginBottom: 24 }}>
            Previous <span style={{ fontWeight: 600 }}>Experiences</span>
          </h2>
          <div style={{ width: 48, height: 1, backgroundColor: "var(--silver)", margin: "0 auto", opacity: 0.3 }} />
        </div>

        {/* Stats */}
        <div className="stats-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
          {stats.map((stat, i) => (
            <div key={stat.label} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  textAlign: "center",
                  padding: "0 64px",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s`,
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(3.5rem, 6vw, 5rem)",
                    fontWeight: 200,
                    color: "var(--white)",
                    lineHeight: 1,
                    display: "block",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {visible ? stat.value : 0}
                  <span style={{ fontSize: "0.5em", fontWeight: 300, opacity: 0.5 }}>%</span>
                </span>
                <span style={{ fontSize: 14, color: "var(--silver)", fontWeight: 400, display: "block", marginTop: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {stat.label}
                </span>
                <span style={{ fontSize: 14, color: "var(--silver)", fontWeight: 400, display: "block", opacity: 0.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {stat.sublabel}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div style={{ width: 1, height: 80, backgroundColor: "var(--silver)", opacity: 0.12 }} />
              )}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p
          style={{
            textAlign: "center",
            marginTop: 80,
            color: "var(--silver)",
            fontSize: 16,
            fontWeight: 300,
            fontStyle: "italic",
            opacity: 0.5,
          }}
        >
          Exceeding expectations, consistently.
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-row { flex-direction: column !important; gap: 48px !important; }
          .stats-row > div > div:first-child { display: none; }
        }
      `}</style>
    </section>
  );
}
