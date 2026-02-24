"use client";

import { useEffect, useRef, useState } from "react";
import { Building, HotelBed, Globe, KeyIcon } from "./Icons";

const audiences = [
  {
    icon: Building,
    title: "Luxury & Five-Star Hotels",
    description: "Independent properties and branded luxury hotels seeking objective quality validation and guest experience benchmarking.",
  },
  {
    icon: HotelBed,
    title: "Boutique Hotels & Resorts",
    description: "Distinctive properties where service culture and guest intimacy define the brand promise.",
  },
  {
    icon: Globe,
    title: "Hotel Groups & Chains",
    description: "Multi-property operators requiring consistent quality oversight across regions and brands.",
  },
  {
    icon: KeyIcon,
    title: "Owners & Asset Managers",
    description: "Investors and ownership groups who need independent verification that operational standards match their expectations.",
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
            Built for hotels that take{" "}
            <span style={{ fontWeight: 600 }}>quality seriously</span>
          </h2>
        </div>

        <div className="wws-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1 }}>
          {audiences.map((a, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={a.title}
                style={{
                  ...anim(0.15 + i * 0.1),
                  padding: "52px 36px 44px",
                  border: `1px solid ${isHovered ? "rgba(218,220,226,0.15)" : "rgba(218,220,226,0.06)"}`,
                  backgroundColor: isHovered ? "rgba(218,220,226,0.03)" : "transparent",
                  transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  cursor: "default",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{
                  marginBottom: 32,
                  color: isHovered ? "var(--white)" : "var(--silver)",
                  transition: "color 0.5s",
                  opacity: isHovered ? 0.7 : 0.35,
                }}>
                  <a.icon size={28} color="currentColor" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 400, color: "var(--white)", marginBottom: 14, lineHeight: 1.3 }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--silver)", fontWeight: 300, lineHeight: 1.8, opacity: 0.45 }}>
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
