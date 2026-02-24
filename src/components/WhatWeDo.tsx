"use client";

import { useState, useEffect, useRef } from "react";
import { UserCheck, Clipboard, Award, ConciergeBell, TrendingUp } from "./Icons";

const pillars = [
  {
    icon: UserCheck,
    number: "01",
    title: "Mystery Guest Assessments",
    description: "Anonymous, on-site hotel assessments by trained hospitality professionals — from check-in to check-out.",
  },
  {
    icon: Clipboard,
    number: "02",
    title: "Quality & Operational Certification",
    description: "Systematic evaluation of SOP compliance, service culture, staff preparedness, and quality governance across your hotel.",
  },
  {
    icon: Award,
    number: "03",
    title: "Hotel Recognition Program",
    description: "Assessment-based recognition for hotels that demonstrate measurable excellence in service and operations.",
  },
  {
    icon: ConciergeBell,
    number: "04",
    title: "Executive Advisory",
    description: "Post-assessment strategic guidance for hotel leadership — service design, recovery strategy, and leadership alignment.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Hospitality Intelligence",
    description: "Independent insights on service quality trends, operational performance signals, and emerging patterns across hotel markets.",
  },
];

export default function WhatWeDo() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const anim = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,24px,0)",
    transition: `opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    willChange: "opacity, transform" as const,
  });

  return (
    <section id="what-we-do" style={{ padding: "140px 0 120px", backgroundColor: "var(--white)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ ...anim(0), marginBottom: 24 }}>
          <p style={{ color: "var(--blue)", fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 400, opacity: 0.4 }}>
            What We Do
          </p>
        </div>
        <div style={{ ...anim(0.1), maxWidth: 700, marginBottom: 80 }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 300, color: "var(--blue)", lineHeight: 1.25 }}>
            We send trained assessors into your hotel as real guests. They evaluate every touchpoint. You get an{" "}
            <span style={{ fontWeight: 600 }}>honest, independent report</span> of what your guests actually experience.
          </h2>
        </div>

        {/* 5 Pillars */}
        <div className="wwd-grid" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {pillars.map((p, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={p.number}
                style={{
                  ...anim(0.15 + i * 0.08),
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 40,
                  padding: "40px 0",
                  borderTop: "1px solid var(--silver)",
                  cursor: "default",
                  transition: "padding-left 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  paddingLeft: isHovered ? 16 : 0,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Number */}
                <span style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "var(--blue)",
                  opacity: 0.2,
                  letterSpacing: "0.1em",
                  minWidth: 32,
                  paddingTop: 4,
                }}>
                  {p.number}
                </span>

                {/* Icon */}
                <div style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  backgroundColor: isHovered ? "var(--blue)" : "transparent",
                  border: `1px solid ${isHovered ? "var(--blue)" : "var(--silver)"}`,
                  transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  color: isHovered ? "var(--white)" : "var(--blue)",
                }}>
                  <p.icon size={20} color="currentColor" />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 500, color: "var(--blue)", marginBottom: 6, lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontSize: 15,
                    color: "#717580",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    maxWidth: 500,
                    opacity: isHovered ? 1 : 0.7,
                    transition: "opacity 0.4s",
                  }}>
                    {p.description}
                  </p>
                </div>

                {/* Arrow */}
                <div style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateX(0)" : "translateX(-8px)",
                  transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  display: "flex",
                  alignItems: "center",
                  paddingTop: 8,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="var(--blue)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            );
          })}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid var(--silver)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .wwd-grid > div { flex-wrap: wrap !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
