"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "./Icons";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  const t = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(36px)",
    transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
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
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/matterhorn.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          transform: "scale(1.05)",
          transition: "transform 12s cubic-bezier(0.16, 1, 0.3, 1)",
          ...(loaded ? { transform: "scale(1)" } : {}),
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(15, 35, 71, 0.88) 0%, rgba(15, 35, 71, 0.72) 50%, rgba(15, 35, 71, 0.82) 100%)",
        }}
      />

      {/* Bottom fade to white (next section) */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to top, var(--white) 0%, transparent 100%)",
          opacity: 0.08,
        }}
      />

      {/* Grain */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px 200px" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "180px 48px 140px", position: "relative", zIndex: 10, width: "100%" }}>
        <div style={{ maxWidth: 860 }}>
          <div style={{ ...t(0.1), width: 48, height: 1, backgroundColor: "var(--silver)", opacity: 0.5, marginBottom: 40 }} />

          <p style={{ ...t(0.2), color: "var(--silver)", fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 40, fontWeight: 400 }}>
            Independent Hotel Quality Certification
          </p>

          <h1 style={{ ...t(0.35), fontSize: "clamp(2.6rem, 6vw, 4.8rem)", fontWeight: 300, color: "var(--white)", lineHeight: 1.08, marginBottom: 40, letterSpacing: "-0.02em" }}>
            We certify the world&apos;s
            <br />
            <span style={{ fontWeight: 600 }}>finest hotels</span>
          </h1>

          <p style={{ ...t(0.5), color: "var(--silver)", fontSize: 18, maxWidth: 600, fontWeight: 300, lineHeight: 1.8, marginBottom: 56, opacity: 0.8 }}>
            Swiss Hospitality Company delivers mystery guest assessments, quality certification, and recognition programs for hotels, resorts, and hospitality operators worldwide. We measure what your guests actually experience.
          </p>

          <div style={{ ...t(0.65), display: "flex", gap: 40, alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="#what-we-do"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                color: "var(--blue)",
                backgroundColor: "var(--white)",
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "18px 40px",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                border: "1px solid var(--white)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--white)"; e.currentTarget.style.color = "var(--blue)"; }}
            >
              How It Works
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "var(--silver)",
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 400,
                paddingBottom: 4,
                borderBottom: "1px solid rgba(218,220,226,0.3)",
                transition: "border-color 0.4s, color 0.4s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = "var(--white)"; e.currentTarget.style.color = "var(--white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = "rgba(218,220,226,0.3)"; e.currentTarget.style.color = "var(--silver)"; }}
            >
              Our Services
              <ArrowRight size={14} color="currentColor" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div style={{ position: "absolute", bottom: 48, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--silver), transparent)", opacity: 0.3 }} />
      </div>
    </section>
  );
}
