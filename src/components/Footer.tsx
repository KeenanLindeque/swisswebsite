"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import Documents from "./Documents";

export default function Footer() {
  const [r1, s1] = useReveal({ delay: 0 });
  const [r2, s2] = useReveal({ delay: 0.15 });
  const [showDocs, setShowDocs] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);

  return (
    <>
      {/* Contact CTA */}
      <section
        id="contact"
        style={{
          padding: "220px 0",
          backgroundColor: "var(--white)",
          borderTop: "1px solid rgba(15,35,71,0.08)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
          <div ref={r1} style={s1}>
            <div style={{ width: 40, height: 1, backgroundColor: "var(--accent)", opacity: 0.4, margin: "0 auto 32px" }} />
            <p style={{ color: "var(--blue)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 400, opacity: 0.35, marginBottom: 48 }}>
              Limited Availability
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 200, color: "var(--blue)", lineHeight: 1.15, marginBottom: 28, maxWidth: 700, margin: "0 auto 28px", letterSpacing: "-0.01em" }}>
              Your competitors are already<br />
              <span style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>asking about us.</span>
            </h2>
            <p style={{ fontSize: 16, color: "#717580", fontWeight: 300, lineHeight: 1.9, maxWidth: 480, margin: "0 auto 56px", opacity: 0.8 }}>
              We accept a limited number of assessment engagements per quarter to maintain the independence and depth our clients expect. If you&apos;re serious about quality, let&apos;s talk.
            </p>
            <a
              href="mailto:info@swisshospitality.com"
              className="footer-cta"
              style={{
                position: "relative",
                display: "inline-block",
                padding: "24px 72px",
                backgroundColor: ctaHover ? "transparent" : "var(--accent)",
                color: ctaHover ? "var(--accent)" : "var(--white)",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)",
                border: "1px solid var(--accent)",
                overflow: "hidden",
              }}
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
            >
              <span style={{ position: "relative", zIndex: 1 }}>Request an Assessment</span>
            </a>
          </div>
        </div>
      </section>

      {/* Documents panel */}
      {showDocs && <Documents />}

      {/* Footer */}
      <footer
        style={{
          padding: "64px 0",
          backgroundColor: "var(--blue)",
          borderTop: "1px solid rgba(218,220,226,0.04)",
        }}
      >
        <div ref={r2} style={{ ...s2, maxWidth: 1400, margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <a
            href="#"
            className="footer-logo"
            style={{ display: "flex", alignItems: "center" }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/logo.svg" alt="Swiss Hospitality Company" style={{ height: 22, width: "auto", transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s" }} />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <button
              onClick={() => setShowDocs(!showDocs)}
              className="footer-templates-btn"
              style={{
                background: "none",
                border: "1px solid rgba(218,220,226,0.08)",
                color: "var(--silver)",
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 300,
                padding: "8px 16px",
                cursor: "pointer",
                opacity: 0.25,
                transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; e.currentTarget.style.borderColor = "rgba(218,220,226,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.25"; e.currentTarget.style.borderColor = "rgba(218,220,226,0.08)"; }}
            >
              {showDocs ? "Hide" : "Templates"}
            </button>
            <p style={{ fontSize: 11, color: "var(--silver)", opacity: 0.25, fontWeight: 300, letterSpacing: "0.06em" }}>
              &copy; {new Date().getFullYear()} Swiss Hospitality Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .footer-cta::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(218,220,226,0.1), transparent);
          transition: left 1s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .footer-cta:hover::after {
          left: 140%;
        }
        .footer-logo:hover img {
          transform: scale(1.04);
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}
