"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    title: "Mystery Guest Assessments",
    href: "/services/mystery-guest",
  },
  {
    number: "02",
    title: "Quality Certification",
    href: "/services/quality-certification",
  },
  {
    number: "03",
    title: "Recognition Program",
    href: "/services/recognition",
  },
  {
    number: "04",
    title: "Executive Advisory",
    href: "/services/executive-advisory",
  },
  {
    number: "05",
    title: "Hospitality Intelligence",
    href: "/services/hospitality-intelligence",
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
    transition: mounted ? `opacity 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s` : "none",
    willChange: "opacity, transform" as const,
  });

  return (
    <section id="what-we-do" style={{ padding: "240px 0", backgroundColor: "var(--white)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>

        <div style={{ ...anim(0), marginBottom: 40 }}>
          <div style={{ width: 48, height: 1, backgroundColor: "var(--blue)", opacity: 0.08, marginBottom: 32 }} />
          <p style={{ color: "var(--blue)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 400, opacity: 0.3 }}>
            What We Do
          </p>
        </div>

        <div style={{ ...anim(0.1), maxWidth: 560, marginBottom: 140 }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 200, color: "var(--blue)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Assessment. Certification.<br />Recognition.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((s, i) => {
            const isHovered = hovered === i;
            return (
              <a
                key={s.number}
                href={s.href}
                style={{
                  ...anim(0.15 + i * 0.06),
                  display: "flex",
                  alignItems: "center",
                  gap: 48,
                  padding: "40px 0",
                  borderTop: "1px solid rgba(15,35,71,0.06)",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                  transition: "padding-left 1s cubic-bezier(0.22, 1, 0.36, 1)",
                  paddingLeft: isHovered ? 16 : 0,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span style={{
                  fontSize: 13,
                  fontWeight: 300,
                  color: "var(--blue)",
                  opacity: isHovered ? 0.4 : 0.15,
                  letterSpacing: "0.1em",
                  minWidth: 36,
                  transition: "opacity 1s cubic-bezier(0.22, 1, 0.36, 1)",
                }}>
                  {s.number}
                </span>

                <h3 style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                  fontWeight: 200,
                  color: "var(--blue)",
                  letterSpacing: "-0.01em",
                  flex: 1,
                  opacity: isHovered ? 1 : 0.6,
                  transition: "opacity 1s cubic-bezier(0.22, 1, 0.36, 1)",
                }}>
                  {s.title}
                </h3>

                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  style={{
                    opacity: isHovered ? 0.3 : 0.08,
                    transform: isHovered ? "translateX(0)" : "translateX(-8px)",
                    transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)",
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
