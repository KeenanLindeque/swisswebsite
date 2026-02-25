"use client";

import { useEffect, useRef, useState } from "react";
import { Building, HotelBed, Globe, KeyIcon } from "./Icons";

const audiences = [
  {
    icon: Building,
    title: "Luxury & Five-Star Hotels",
    description: "You invest millions in your property. We tell you if your team is delivering the experience your brand promises — or quietly undermining it.",
  },
  {
    icon: HotelBed,
    title: "Boutique Hotels & Resorts",
    description: "Your reputation is built on intimacy and detail. One bad stay can undo years of word-of-mouth. We find the cracks before your guests do.",
  },
  {
    icon: Globe,
    title: "Hotel Groups & Chains",
    description: "Consistency across 5, 50, or 500 properties isn't a hope — it's a measurement. We provide the only objective benchmark that scales.",
  },
  {
    icon: KeyIcon,
    title: "Owners & Asset Managers",
    description: "Your operator says everything is fine. Your reviews say otherwise. We give you independent verification — no politics, no spin.",
  },
];

export default function WhoWeServe() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const anim = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,32px,0)",
    transition: `opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  return (
    <section style={{ padding: "140px 0", backgroundColor: "var(--blue)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ ...anim(0), marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, backgroundColor: "var(--silver)", opacity: 0.15, marginBottom: 24 }} />
          <p style={{ color: "var(--silver)", fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 400, opacity: 0.35 }}>
            Who We Serve
          </p>
        </div>
        <div style={{ ...anim(0.1), maxWidth: 580, marginBottom: 80 }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1.25 }}>
            Built for hotels that refuse to{" "}
            <span style={{ fontWeight: 600 }}>guess.</span>
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
                  border: `1px solid ${isHovered ? "rgba(218,220,226,0.18)" : "rgba(218,220,226,0.06)"}`,
                  backgroundColor: isHovered ? "rgba(218,220,226,0.04)" : "transparent",
                  transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  cursor: "default",
                  overflow: "hidden",
                  transform: isHovered ? "translateY(-4px)" : undefined,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Shimmer overlay — only visible on hover */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, transparent 30%, rgba(218,220,226,0.06) 50%, transparent 70%)",
                    backgroundSize: "200% 200%",
                    backgroundPosition: isHovered ? "0% 0%" : "100% 100%",
                    opacity: isHovered ? 1 : 0,
                    transition: "background-position 1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    pointerEvents: "none",
                  }}
                />

                <div style={{
                  marginBottom: 32,
                  color: isHovered ? "var(--white)" : "var(--silver)",
                  transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  opacity: isHovered ? 0.8 : 0.35,
                  transform: isHovered ? "scale(1.08)" : "scale(1)",
                }}>
                  <a.icon size={28} color="currentColor" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 400, color: "var(--white)", marginBottom: 14, lineHeight: 1.3, position: "relative" }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--silver)", fontWeight: 300, lineHeight: 1.8, opacity: isHovered ? 0.6 : 0.4, transition: "opacity 0.6s", position: "relative" }}>
                  {a.description}
                </p>
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
