"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "./Icons";

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
    transition: `opacity 2s ${ease} ${delay}s, transform 2s ${ease} ${delay}s`,
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
      {/* Background — continuous slow Ken Burns */}
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

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(15,35,71,0.92) 0%, rgba(15,35,71,0.7) 40%, rgba(15,35,71,0.85) 100%)",
          opacity: phase >= 1 ? 1 : 0,
          transition: `opacity 2.4s ${ease} 0.3s`,
        }}
      />

      {/* Bottom vignette */}
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

      {/* Subtle grain */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px 200px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "200px 48px 160px", position: "relative", zIndex: 10, width: "100%" }}>
        <div style={{ maxWidth: 820 }}>
          {/* Accent line with grow animation */}
          <div style={{ ...t(0.0), overflow: "hidden" }}>
            <div className="hero-accent-line" style={{ width: 48, height: 1, backgroundColor: "var(--silver)", opacity: 0.15, marginBottom: 48, transformOrigin: "left" }} />
          </div>

          <p style={{ ...t(0.15), color: "var(--silver)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 48, fontWeight: 400, opacity: 0.4 }}>
            Independent Hotel Quality Certification
          </p>

          <h1 style={{ ...t(0.32), fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1.12, marginBottom: 48, letterSpacing: "-0.03em" }}>
            Excellence claimed is nothing.
            <br />
            <span style={{ fontWeight: 500, letterSpacing: "-0.02em", opacity: 0.9 }}>Excellence certified is everything.</span>
          </h1>

          <p style={{ ...t(0.5), color: "var(--silver)", fontSize: 16, maxWidth: 560, fontWeight: 300, lineHeight: 2, marginBottom: 64, opacity: 0.55 }}>
            Certified hotels command higher trust, stronger loyalty, and a reputation competitors can&apos;t replicate. Independent assessment and recognition — for properties ready to separate themselves from the rest.
          </p>

          <div style={{ ...t(0.68), display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="#what-we-do"
              className="hero-cta-primary"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                color: "var(--blue)",
                backgroundColor: "var(--white)",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "20px 48px",
                transition: `all 1s ${ease}`,
                border: "1px solid var(--white)",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--white)"; e.currentTarget.style.color = "var(--blue)"; }}
            >
              See What We Find
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "var(--silver)",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 400,
                paddingBottom: 4,
                borderBottom: "1px solid rgba(218,220,226,0.1)",
                transition: `border-color 1s ${ease}, color 1s ${ease}`,
                opacity: 0.7,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = "var(--white)"; e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.opacity = "1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = "rgba(218,220,226,0.1)"; e.currentTarget.style.color = "var(--silver)"; e.currentTarget.style.opacity = "0.7"; }}
            >
              How It Works
              <ArrowRight size={13} color="currentColor" />
            </a>
          </div>
        </div>
      </div>


      <style>{`
        @keyframes heroKenBurns {
          0% { transform: scale(1) translate3d(0,0,0); }
          100% { transform: scale(1.08) translate3d(-1%, -0.5%, 0); }
        }
        .hero-bg {
          animation: heroKenBurns 30s ease-in-out infinite alternate;
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.45; }
        }
        .hero-scroll-line {
          animation: heroPulse 4s ease-in-out infinite;
        }
        @keyframes heroAccentGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .hero-accent-line {
          animation: heroAccentGrow 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both;
        }
        .hero-cta-primary::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .hero-cta-primary:hover::after {
          left: 120%;
        }
      `}</style>
    </section>
  );
}
