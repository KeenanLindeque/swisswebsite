"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "./Icons";

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
    transform: phase >= 2 ? "translate3d(0,0,0)" : "translate3d(0,36px,0)",
    transition: `opacity 1.6s ${ease} ${delay}s, transform 1.6s ${ease} ${delay}s`,
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
      {/* Background — luxury hotel facade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/hotel-facade.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          transform: phase >= 1 ? "scale(1) translate3d(0,0,0)" : "scale(1.06) translate3d(0,0,0)",
          opacity: phase >= 1 ? 1 : 0,
          transition: `transform 20s ${ease}, opacity 2.8s ${ease}`,
          willChange: "transform, opacity",
        }}
      />

      {/* Gradient overlay — deep, rich */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(15,35,71,0.92) 0%, rgba(15,35,71,0.7) 40%, rgba(15,35,71,0.85) 100%)",
          opacity: phase >= 1 ? 1 : 0,
          transition: `opacity 2.2s ${ease} 0.3s`,
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
      <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px 200px" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "200px 48px 160px", position: "relative", zIndex: 10, width: "100%" }}>
        <div style={{ maxWidth: 820 }}>
          {/* Gold accent line */}
          <div style={{ ...t(0.0), width: 56, height: 1, background: "linear-gradient(to right, var(--gold), transparent)", marginBottom: 48 }} />

          <p style={{ ...t(0.12), color: "var(--gold)", fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 48, fontWeight: 400 }}>
            Independent Hotel Quality Certification
          </p>

          <h1 style={{ ...t(0.28), fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1.06, marginBottom: 48, letterSpacing: "-0.025em" }}>
            We certify the world&apos;s
            <br />
            <span style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>finest hotels</span>
          </h1>

          <p style={{ ...t(0.44), color: "var(--silver)", fontSize: 17, maxWidth: 560, fontWeight: 300, lineHeight: 1.9, marginBottom: 64 }}>
            Mystery guest assessments, quality certification, and recognition programs for hotels, resorts, and hospitality operators worldwide.
          </p>

          <div style={{ ...t(0.6), display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="#what-we-do"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                color: "var(--blue)",
                backgroundColor: "var(--white)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "20px 48px",
                transition: `all 0.6s ${ease}`,
                border: "1px solid var(--white)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--white)"; e.currentTarget.style.color = "var(--blue)"; }}
            >
              Discover
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "var(--gold)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 400,
                paddingBottom: 4,
                borderBottom: "1px solid var(--gold-muted)",
                transition: `border-color 0.6s ${ease}, color 0.6s ${ease}`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = "var(--gold)"; e.currentTarget.style.color = "var(--white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = "var(--gold-muted)"; e.currentTarget.style.color = "var(--gold)"; }}
            >
              Our Services
              <ArrowRight size={13} color="currentColor" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 56, left: "50%", transform: "translateX(-50%)", zIndex: 10,
        opacity: phase >= 2 ? 1 : 0,
        transition: `opacity 1.6s ${ease} 1.4s`,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
      }}>
        <span style={{ fontSize: 8, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.4 }}>Scroll</span>
        <div className="hero-scroll-line" style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--gold), transparent)", opacity: 0.3 }} />
      </div>

      <style>{`
        @keyframes hero-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .hero-scroll-line {
          animation: hero-pulse 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
