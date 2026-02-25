"use client";

import { useState, useEffect, useRef } from "react";
import { UserCheck, Clipboard, Award, ConciergeBell, TrendingUp } from "./Icons";

const pillars = [
  {
    icon: UserCheck,
    number: "01",
    title: "Mystery Guest Assessments",
    description: "We stay at your hotel as a real guest and document the entire experience — so you see exactly what your guests see.",
  },
  {
    icon: Clipboard,
    number: "02",
    title: "Quality Certification",
    description: "An independent, department-by-department certification of your hotel's operational standards and service delivery.",
  },
  {
    icon: Award,
    number: "03",
    title: "Recognition Program",
    description: "Hotels that meet our standard earn the most credible quality recognition in the industry. Less than 12% qualify.",
  },
  {
    icon: ConciergeBell,
    number: "04",
    title: "Executive Advisory",
    description: "A focused session with your leadership team to turn assessment findings into a clear action plan.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Hospitality Intelligence",
    description: "Data-driven insights from hundreds of assessments — what top-performing hotels do differently.",
  },
];

export default function WhatWeDo() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  const anim = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,28px,0)",
    transition: mounted ? `opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s` : "none",
    willChange: "opacity, transform" as const,
  });

  return (
    <section id="what-we-do" style={{ padding: "160px 0 140px", backgroundColor: "var(--white)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ ...anim(0), marginBottom: 24 }}>
          <div className="wwd-accent" style={{ width: 40, height: 1, backgroundColor: "var(--blue)", opacity: 0.12, marginBottom: 24 }} />
          <p style={{ color: "var(--blue)", fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 400, opacity: 0.35 }}>
            What We Do
          </p>
        </div>
        <div style={{ ...anim(0.1), maxWidth: 720, marginBottom: 96 }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 200, color: "var(--blue)", lineHeight: 1.25 }}>
            Five ways we help you{" "}
            <span style={{ fontWeight: 600 }}>earn it.</span>
          </h2>
        </div>

        <div className="wwd-grid" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {pillars.map((p, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={p.number}
                className="wwd-row"
                style={{
                  ...anim(0.15 + i * 0.08),
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 44,
                  padding: "44px 0",
                  borderTop: "1px solid rgba(218,220,226,0.4)",
                  cursor: "default",
                  transition: "padding-left 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  paddingLeft: isHovered ? 20 : 0,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Subtle left accent line on hover */}
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 2,
                  height: isHovered ? "50%" : "0%",
                  backgroundColor: "var(--blue)",
                  opacity: 0.15,
                  transition: "height 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  borderRadius: 1,
                }} />

                <span style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--blue)",
                  opacity: isHovered ? 0.6 : 0.3,
                  letterSpacing: "0.1em",
                  minWidth: 32,
                  paddingTop: 4,
                  transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                }}>
                  {p.number}
                </span>

                <div style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  backgroundColor: isHovered ? "var(--blue)" : "transparent",
                  border: `1px solid ${isHovered ? "var(--blue)" : "rgba(218,220,226,0.5)"}`,
                  transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  color: isHovered ? "var(--white)" : "var(--blue)",
                  transform: isHovered ? "scale(1.06)" : "scale(1)",
                }}>
                  <p.icon size={20} color="currentColor" />
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 400, color: "var(--blue)", marginBottom: 8, lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontSize: 15,
                    color: "#717580",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    maxWidth: 500,
                    opacity: isHovered ? 1 : 0.55,
                    transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}>
                    {p.description}
                  </p>
                </div>

                <div style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateX(0)" : "translateX(-12px)",
                  transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
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
          <div style={{ borderTop: "1px solid rgba(218,220,226,0.4)" }} />
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
