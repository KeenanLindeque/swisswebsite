"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  { label: "Independent", description: "No commercial ties to any hotel, brand, or operator." },
  { label: "Impartial", description: "Assessments are conducted without bias or influence." },
  { label: "Assessment-Based", description: "Every outcome is earned through on-site evaluation." },
  { label: "Global", description: "Operating across 40+ countries and territories." },
];

export default function WhoWeServe() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  const anim = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,32px,0)",
    transition: mounted ? `opacity 2.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 2.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s` : "none",
  });

  return (
    <section style={{ padding: "240px 0", backgroundColor: "var(--blue)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>

        <div style={{ ...anim(0), marginBottom: 40 }}>
          <div style={{ width: 48, height: 1, backgroundColor: "var(--silver)", opacity: 0.1, marginBottom: 32 }} />
          <p style={{ color: "var(--silver)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 400, opacity: 0.3 }}>
            Who We Are
          </p>
        </div>

        <div style={{ ...anim(0.1), maxWidth: 700, marginBottom: 160 }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 48 }}>
            A standards body.<br />
            Not a service provider.
          </h2>
          <p style={{ fontSize: 18, color: "var(--silver)", fontWeight: 300, lineHeight: 2, opacity: 0.4, maxWidth: 560 }}>
            Swiss Hospitality operates as an independent certification authority for the global hotel industry. Hotels do not hire us. They are assessed by us.
          </p>
        </div>

        <div className="auth-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1 }}>
          {pillars.map((p, i) => (
            <div
              key={p.label}
              style={{
                ...anim(0.2 + i * 0.1),
                padding: "56px 40px",
                borderLeft: i > 0 ? "1px solid rgba(218,220,226,0.06)" : "none",
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 300, color: "var(--white)", marginBottom: 20, letterSpacing: "0.01em" }}>
                {p.label}
              </h3>
              <p style={{ fontSize: 14, color: "var(--silver)", fontWeight: 300, lineHeight: 1.8, opacity: 0.35 }}>
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .auth-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .auth-grid > div { border-left: none !important; border-top: 1px solid rgba(218,220,226,0.06); }
        }
        @media (max-width: 600px) {
          .auth-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
