"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => setPhase(1));
    const timer = setTimeout(() => setPhase(2), 600);
    return () => clearTimeout(timer);
  }, []);

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

  const t = (delay: number) => ({
    opacity: phase >= 2 ? 1 : 0,
    transform: phase >= 2 ? "translate3d(0,0,0)" : "translate3d(0,44px,0)",
    transition: `opacity 2.4s ${ease} ${delay}s, transform 2.4s ${ease} ${delay}s`,
    willChange: "opacity, transform" as const,
  });

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
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
          transition: `opacity 3s ${ease}`,
          willChange: "transform, opacity",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(15,35,71,0.94) 0%, rgba(15,35,71,0.75) 40%, rgba(15,35,71,0.88) 100%)",
          opacity: phase >= 1 ? 1 : 0,
          transition: `opacity 2.4s ${ease} 0.3s`,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 300,
          background: "linear-gradient(to top, rgba(15,35,71,0.5) 0%, transparent 100%)",
        }}
      />

      <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px 200px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "240px 48px 200px", position: "relative", zIndex: 10, width: "100%" }}>
        <div style={{ maxWidth: 780 }}>
          <div style={{ ...t(0.0), overflow: "hidden" }}>
            <div className="hero-accent-line" style={{ width: 48, height: 1, backgroundColor: "var(--silver)", opacity: 0.15, marginBottom: 64, transformOrigin: "left" }} />
          </div>

          <p style={{ ...t(0.15), color: "var(--silver)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 56, fontWeight: 400, opacity: 0.35 }}>
            Independent Hotel Quality Authority
          </p>

          <h1 style={{ ...t(0.32), fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1.08, marginBottom: 56, letterSpacing: "-0.03em" }}>
            We define the standard.
          </h1>

          <p style={{ ...t(0.5), color: "var(--silver)", fontSize: 17, maxWidth: 520, fontWeight: 300, lineHeight: 2, marginBottom: 80, opacity: 0.45 }}>
            Swiss Hospitality is the independent certification authority for hotel quality worldwide. Assessment-based. Impartial. Earned.
          </p>

          <div style={{ ...t(0.68) }}>
            <a
              href="#contact"
              className="hero-cta-primary"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                color: "var(--white)",
                backgroundColor: "transparent",
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontWeight: 400,
                padding: "22px 56px",
                transition: `all 1s ${ease}`,
                border: "1px solid rgba(218,220,226,0.2)",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(218,220,226,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(218,220,226,0.2)"; }}
            >
              Request Assessment
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroKenBurns {
          0% { transform: scale(1) translate3d(0,0,0); }
          100% { transform: scale(1.06) translate3d(-0.5%, -0.3%, 0); }
        }
        .hero-bg {
          animation: heroKenBurns 40s ease-in-out infinite alternate;
        }
        @keyframes heroAccentGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .hero-accent-line {
          animation: heroAccentGrow 2s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both;
        }
        .hero-cta-primary::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          transition: left 1s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .hero-cta-primary:hover::after {
          left: 120%;
        }
      `}</style>
    </section>
  );
}
