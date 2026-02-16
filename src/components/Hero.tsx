"use client";

import { ArrowRight } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--blue)",
        overflow: "hidden",
      }}
    >
      {/* Subtle grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.015,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Geometric accent line */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          width: "35%",
          height: 1,
          backgroundColor: "var(--silver)",
          opacity: 0.08,
          transform: "translateY(-50%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 32px",
          maxWidth: 1000,
          margin: "0 auto",
          animation: "fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Small divider */}
        <div
          style={{
            width: 48,
            height: 1,
            backgroundColor: "var(--silver)",
            margin: "0 auto 40px",
            opacity: 0.5,
          }}
        />

        <p
          style={{
            color: "var(--silver)",
            fontSize: 12,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: 48,
            fontWeight: 400,
          }}
        >
          A World of Hospitality
        </p>

        <h1
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 300,
            color: "var(--white)",
            lineHeight: 1.08,
            marginBottom: 40,
            letterSpacing: "-0.02em",
          }}
        >
          Redefining
          <br />
          <span style={{ fontWeight: 500 }}>Hospitality</span>
          <br />
          Excellence
        </h1>

        <p
          style={{
            color: "var(--silver)",
            fontSize: 17,
            maxWidth: 520,
            margin: "0 auto 56px",
            fontWeight: 300,
            lineHeight: 1.8,
            opacity: 0.7,
          }}
        >
          Management consulting from strategy to execution, empowering
          organizations across the Kingdom and beyond.
        </p>

        <a
          href="mailto:info@swisshospitality.sa?subject=SHC%20Meeting%20Request"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            color: "var(--white)",
            fontSize: 13,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 400,
            padding: "18px 0",
            borderBottom: "1px solid rgba(218,220,226,0.3)",
            transition: "all 0.4s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--white)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(218,220,226,0.3)")}
        >
          Schedule a Meeting
          <ArrowRight size={16} color="var(--silver)" />
        </a>
      </div>

{/* Bottom fade removed */}

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, var(--silver), transparent)",
            opacity: 0.4,
          }}
        />
      </div>
    </section>
  );
}
