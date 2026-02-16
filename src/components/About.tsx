"use client";

import { Diamond } from "./Icons";

export default function About() {
  return (
    <section id="about" style={{ padding: "140px 0", backgroundColor: "var(--white)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        <div className="about-layout" style={{ display: "flex", gap: 100, alignItems: "flex-start" }}>
          {/* Left — narrow */}
          <div style={{ flex: "0 0 320px" }}>
            <p style={{ color: "var(--blue)", fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 24, fontWeight: 400, opacity: 0.4 }}>
              About Us
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: "var(--blue)", lineHeight: 1.15, marginBottom: 32 }}>
              Award-winning{" "}
              <span style={{ fontWeight: 600 }}>consulting</span>
            </h2>
            <div style={{ width: 48, height: 1, backgroundColor: "var(--blue)", opacity: 0.15, marginBottom: 40 }} />

            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Diamond size={20} color="var(--blue)" strokeWidth={1} />
              <span style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue)", opacity: 0.5 }}>
                Est. 2014 &middot; Riyadh
              </span>
            </div>
          </div>

          {/* Right — text */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 20, lineHeight: 1.8, color: "var(--blue)", fontWeight: 300, marginBottom: 32, opacity: 0.7 }}>
              We are a management consulting firm providing versatile advisory
              solutions using innovative approaches to serve organizations
              across all industries.
            </p>
            <p style={{ fontSize: 20, lineHeight: 1.8, color: "var(--blue)", fontWeight: 300, marginBottom: 32, opacity: 0.7 }}>
              We collaborate closely with organizations to adopt transformational
              approaches that generate benefits for all stakeholders — empowering
              growth, sustainable competitive advantage, and positive social impact.
            </p>
            <p style={{ fontSize: 20, lineHeight: 1.8, color: "var(--blue)", fontWeight: 300, opacity: 0.7 }}>
              Our diverse, global teams offer integrated solutions through
              cutting-edge consulting, technology, and design.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .about-layout { flex-direction: column !important; gap: 48px !important; }
            .about-layout > div:first-child { flex: 1 !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
