"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  { number: "250+", label: "Hotels Assessed", detail: "Independent evaluations across luxury, boutique, and resort properties worldwide." },
  { number: "40+", label: "Countries", detail: "A global footprint spanning Europe, the Middle East, Asia-Pacific, and the Americas." },
  { number: "98%", label: "Client Retention", detail: "Hotels return because no other assessment carries this level of credibility." },
  { number: "15+", label: "Years", detail: "Over a decade defining the methodology that the industry now trusts." },
];

export default function WhoWeServe() {
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
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,40px,0)",
    transition: mounted ? `opacity 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s` : "none",
  });

  return (
    <section style={{ padding: "200px 0", backgroundColor: "var(--white)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>

        <div style={{ ...anim(0), display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 120, flexWrap: "wrap", gap: 40 }}>
          <div>
            <p style={{ color: "var(--blue)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 400, opacity: 0.35, marginBottom: 24 }}>
              The Authority
            </p>
            <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 200, color: "var(--blue)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              Hotels don&apos;t hire us.<br />
              <span style={{ fontWeight: 500 }}>They are assessed by us.</span>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--blue)", fontWeight: 300, lineHeight: 1.9, opacity: 0.45, maxWidth: 400 }}>
            Swiss Hospitality operates as an independent certification authority. Every outcome is earned through rigorous, impartial, on-site evaluation.
          </p>
        </div>

        <div className="proof-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {pillars.map((p, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={p.label}
                style={{
                  ...anim(0.15 + i * 0.1),
                  padding: "60px 40px",
                  borderLeft: i > 0 ? "1px solid rgba(15,35,71,0.06)" : "none",
                  cursor: "default",
                  transition: "background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  backgroundColor: isHovered ? "rgba(15,35,71,0.02)" : "transparent",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                  fontWeight: 200,
                  color: "var(--blue)",
                  lineHeight: 1,
                  marginBottom: 12,
                  letterSpacing: "-0.02em",
                  transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                }}>
                  {p.number}
                </div>
                <p style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "var(--blue)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  opacity: 0.4,
                  marginBottom: 20,
                }}>
                  {p.label}
                </p>
                <p style={{
                  fontSize: 14,
                  color: "var(--blue)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  opacity: isHovered ? 0.5 : 0.25,
                  transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                }}>
                  {p.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proof-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .proof-grid > div { border-left: none !important; border-top: 1px solid rgba(15,35,71,0.06); }
        }
        @media (max-width: 600px) {
          .proof-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
