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

  const anim = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,32px,0)",
    transition: mounted ? `opacity 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s` : "none",
    willChange: "opacity, transform" as const,
  });

  return (
    <section id="what-we-do" style={{ padding: "200px 0", backgroundColor: "var(--white)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>

        <div style={{ ...anim(0), marginBottom: 120 }}>
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
            return (
              <a
                key={s.number}
                href={s.href}
                className="svc-row"
                style={{
                  ...anim(0.1 + i * 0.06),
                  display: "flex",
                  alignItems: "center",
                  gap: 40,
                  padding: "44px 0 44px 0",
                  borderTop: "1px solid rgba(15,35,71,0.06)",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                  transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  paddingLeft: isHovered ? 24 : 0,
                  backgroundColor: isHovered ? "rgba(15,35,71,0.015)" : "transparent",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span style={{
                  fontSize: 48,
                  fontWeight: 100,
                  color: "var(--blue)",
                  opacity: isHovered ? 0.15 : 0.06,
                  letterSpacing: "-0.02em",
                  minWidth: 80,
                  transition: "opacity 0.5s",
                  lineHeight: 1,
                }}>
                  {s.number}
                </span>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    fontWeight: 300,
                    color: "var(--blue)",
                    letterSpacing: "-0.01em",
                    marginBottom: 6,
                    opacity: isHovered ? 1 : 0.7,
                    transition: "opacity 0.5s",
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: "var(--blue)",
                    opacity: isHovered ? 0.45 : 0,
                    transition: "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    maxHeight: isHovered ? 30 : 0,
                    overflow: "hidden",
                  }}>
                    {s.sub}
                  </p>
                </div>

                <svg
                  width="24" height="24" viewBox="0 0 24 24" fill="none"
                  style={{
                    opacity: isHovered ? 0.4 : 0,
                    transform: isHovered ? "translateX(0)" : "translateX(-16px)",
                    transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
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
