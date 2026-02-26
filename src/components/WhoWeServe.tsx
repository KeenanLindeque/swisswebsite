"use client";

import { useEffect, useRef, useState } from "react";
import { Building, HotelBed, Globe, KeyIcon } from "./Icons";

const audiences = [
  {
    icon: Building,
    title: "Luxury & Five-Star Hotels",
    description: "You invest millions in your property. We tell you if your team is delivering the experience your brand promises — or quietly undermining it.",
    highlights: [
      { label: "200+ rooms", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h4v5m1-2h.01M6 17h.01" },
      { label: "Brand standards", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    ],
  },
  {
    icon: HotelBed,
    title: "Boutique Hotels & Resorts",
    description: "Your reputation is built on intimacy and detail. One bad stay can undo years of word-of-mouth. We find the cracks before your guests do.",
    highlights: [
      { label: "Intimate scale", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
      { label: "Detail-focused", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    ],
  },
  {
    icon: Globe,
    title: "Hotel Groups & Chains",
    description: "Consistency across 5, 50, or 500 properties isn't a hope — it's a measurement. We provide the only objective benchmark that scales.",
    highlights: [
      { label: "Multi-property", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
      { label: "Scalable", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    ],
  },
  {
    icon: KeyIcon,
    title: "Owners & Asset Managers",
    description: "Your operator says everything is fine. Your reviews say otherwise. We give you independent verification — no politics, no spin.",
    highlights: [
      { label: "Independent", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
      { label: "No bias", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    ],
  },
];

function MiniIcon({ d }: { d: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--silver)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.5 }}>
      <path d={d} />
    </svg>
  );
}

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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  const anim = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,32px,0)",
    transition: mounted ? `opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s` : "none",
  });

  return (
    <section style={{ padding: "200px 0", backgroundColor: "var(--blue)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ ...anim(0), marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, backgroundColor: "var(--accent)", opacity: 0.4, marginBottom: 24 }} />
          <p style={{ color: "var(--silver)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 400, opacity: 0.35 }}>
            Who We Serve
          </p>
        </div>
        <div style={{ ...anim(0.1), maxWidth: 580, marginBottom: 120 }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
            Built for hotels that refuse to{" "}
            <span style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>guess.</span>
          </h2>
        </div>

        <div className="wws-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1 }}>
          {audiences.map((a, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={a.title}
                className="wws-card"
                style={{
                  ...anim(0.15 + i * 0.1),
                  position: "relative",
                  padding: "52px 36px 44px",
                  border: `1px solid ${isHovered ? "rgba(218,220,226,0.08)" : "transparent"}`,
                  backgroundColor: isHovered ? "rgba(255,255,255,0.02)" : "transparent",
                  transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)",
                  cursor: "default",
                  overflow: "hidden",
                  transform: isHovered ? "translateY(-4px)" : undefined,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, transparent 30%, rgba(218,220,226,0.04) 50%, transparent 70%)",
                    backgroundSize: "200% 200%",
                    backgroundPosition: isHovered ? "0% 0%" : "100% 100%",
                    opacity: isHovered ? 1 : 0,
                    transition: "background-position 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                    pointerEvents: "none",
                  }}
                />

                <div style={{
                  marginBottom: 32,
                  color: isHovered ? "var(--white)" : "var(--silver)",
                  transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                  opacity: isHovered ? 0.7 : 0.3,
                  transform: isHovered ? "scale(1.04)" : "scale(1)",
                }}>
                  <a.icon size={28} color="currentColor" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 300, color: "var(--white)", marginBottom: 16, lineHeight: 1.3, position: "relative" }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--silver)", fontWeight: 300, lineHeight: 1.8, opacity: isHovered ? 0.55 : 0.35, transition: "opacity 0.8s", position: "relative", marginBottom: 24 }}>
                  {a.description}
                </p>

                {/* Highlight tags */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  position: "relative",
                  opacity: isHovered ? 0.8 : 0.4,
                  transition: "opacity 1s cubic-bezier(0.22, 1, 0.36, 1)",
                }}>
                  {a.highlights.map((h) => (
                    <div
                      key={h.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "5px 12px",
                        border: "1px solid rgba(218,220,226,0.1)",
                        fontSize: 11,
                        color: "var(--silver)",
                        fontWeight: 300,
                        letterSpacing: "0.03em",
                        lineHeight: 1,
                      }}
                    >
                      <MiniIcon d={h.icon} />
                      {h.label}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .wws-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .wws-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
