"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => setPhase(1));
    const timer = setTimeout(() => setPhase(2), 500);
    return () => clearTimeout(timer);
  }, []);

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

  const t = (delay: number) => ({
    opacity: phase >= 2 ? 1 : 0,
    transform: phase >= 2 ? "translate3d(0,0,0)" : "translate3d(0,60px,0)",
    transition: `opacity 1.8s ${ease} ${delay}s, transform 2.2s ${ease} ${delay}s`,
    willChange: "opacity, transform" as const,
  });

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/luxury-resort.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          opacity: phase >= 1 ? 1 : 0,
          transition: `opacity 2s ${ease}`,
          willChange: "transform, opacity",
        }}
      />

      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(15,35,71,0.6) 0%, rgba(15,35,71,0.4) 30%, rgba(15,35,71,0.7) 70%, rgba(15,35,71,0.95) 100%)",
        opacity: phase >= 1 ? 1 : 0,
        transition: `opacity 2s ${ease} 0.2s`,
      }} />

      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px 200px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px 120px", position: "relative", zIndex: 10, width: "100%" }}>
        <div style={{ maxWidth: 900 }}>

          <h1 style={{ ...t(0.1), fontSize: "clamp(3.4rem, 7vw, 6.5rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1.0, marginBottom: 48, letterSpacing: "-0.04em" }}>
            The global<br />
            benchmark for<br />
            <span style={{ fontWeight: 500 }}>hotel quality.</span>
          </h1>

          <div style={{ ...t(0.35), display: "flex", alignItems: "center", gap: 40, marginBottom: 48 }}>
            <div style={{ width: 64, height: 1, backgroundColor: "var(--silver)", opacity: 0.2 }} />
            <p style={{ color: "var(--silver)", fontSize: 15, fontWeight: 300, lineHeight: 1.8, opacity: 0.6, maxWidth: 420 }}>
              Independent certification authority. Assessment-based recognition. Trusted across 40+ countries.
            </p>
          </div>

          <div style={{ ...t(0.55), display: "flex", gap: 32, alignItems: "center" }}>
            <a
              href="#contact"
              className="hero-cta"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                color: "var(--blue)",
                backgroundColor: "var(--white)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "20px 52px",
                transition: `all 0.6s ${ease}`,
                overflow: "hidden",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Request Assessment
            </a>
            <a
              href="#what-we-do"
              className="hero-link"
              style={{
                color: "var(--silver)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 300,
                opacity: 0.5,
                transition: `opacity 0.6s ${ease}`,
                borderBottom: "1px solid rgba(218,220,226,0.15)",
                paddingBottom: 4,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.5"; }}
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroKenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .hero-bg { animation: heroKenBurns 30s ease-in-out infinite alternate; }
        .hero-cta::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(15,35,71,0.08), transparent);
          transition: left 0.8s ${ease};
          pointer-events: none;
        }
        .hero-cta:hover::after { left: 150%; }
      `}</style>
    </section>
  );
}
