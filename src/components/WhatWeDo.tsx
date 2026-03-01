"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  { number: "01", title: "Mystery Guest Assessments", sub: "Incognito stays. Unfiltered truth.", href: "/services/mystery-guest" },
  { number: "02", title: "Quality Certification", sub: "Department-by-department. Scored.", href: "/services/quality-certification" },
  { number: "03", title: "Recognition Program", sub: "Three tiers. Earned only.", href: "/services/recognition" },
  { number: "04", title: "Executive Advisory", sub: "Findings into action. 90 days.", href: "/services/executive-advisory" },
  { number: "05", title: "Hospitality Intelligence", sub: "What the top 10% do differently.", href: "/services/hospitality-intelligence" },
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

  return (
    <section id="what-we-do" style={{ padding: "200px 0 120px", backgroundColor: "var(--white)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>

        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: mounted ? "opacity 2s cubic-bezier(0.22, 1, 0.36, 1), transform 2s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          marginBottom: 120,
        }}>
          <p style={{ color: "var(--blue)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 400, opacity: 0.35, marginBottom: 24 }}>
            What We Do
          </p>
          <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 200, color: "var(--blue)", lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: 600 }}>
            Assessment. Certification.<br />
            <span style={{ fontWeight: 500 }}>Recognition.</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((s, i) => {
            const isHovered = hovered === i;
            const revealDelay = 0.1 + i * 0.06;
            return (
              <a
                key={s.number}
                href={s.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 40,
                  padding: "40px 0",
                  paddingLeft: isHovered ? 24 : 0,
                  borderTop: "1px solid rgba(15,35,71,0.06)",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                  backgroundColor: isHovered ? "rgba(15,35,71,0.02)" : "transparent",
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? isHovered ? "translateY(-1px)" : "translateY(0)"
                    : "translateY(24px)",
                  transition: mounted
                    ? `opacity 1.6s cubic-bezier(0.22, 1, 0.36, 1) ${revealDelay}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), padding-left 0.5s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.5s cubic-bezier(0.22, 1, 0.36, 1)`
                    : "none",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span style={{
                  fontSize: 42,
                  fontWeight: 100,
                  color: "var(--blue)",
                  opacity: isHovered ? 0.15 : 0.06,
                  letterSpacing: "-0.02em",
                  minWidth: 72,
                  transition: "opacity 0.4s",
                  lineHeight: 1,
                }}>
                  {s.number}
                </span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{
                    fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                    fontWeight: 300,
                    color: "var(--blue)",
                    letterSpacing: "-0.01em",
                    opacity: isHovered ? 1 : 0.65,
                    transition: "opacity 0.4s",
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: "var(--blue)",
                    opacity: isHovered ? 0.4 : 0,
                    transition: "opacity 0.4s",
                    marginTop: 4,
                  }}>
                    {s.sub}
                  </p>
                </div>

                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  style={{
                    opacity: isHovered ? 0.35 : 0,
                    transform: isHovered ? "translateX(0)" : "translateX(-10px)",
                    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    flexShrink: 0,
                  }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="var(--blue)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(15,35,71,0.06)" }} />
        </div>
      </div>
    </section>
  );
}
