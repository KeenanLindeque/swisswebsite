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
      <section
        id="contact"
        style={{
          padding: "200px 0 240px",
          backgroundColor: "var(--white)",
          borderTop: "1px solid rgba(15,35,71,0.06)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
          <div ref={r1} style={{ ...s1, maxWidth: 700 }}>

            <p style={{ color: "var(--blue)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 400, opacity: 0.3, marginBottom: 32 }}>
              Limited Availability
            </p>

            <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 200, color: "var(--blue)", lineHeight: 1.08, marginBottom: 32, letterSpacing: "-0.03em" }}>
              If you&apos;re serious<br />about quality.
            </h2>

            <p style={{ fontSize: 16, color: "var(--blue)", fontWeight: 300, lineHeight: 2, maxWidth: 460, marginBottom: 64, opacity: 0.4 }}>
              We accept a limited number of assessment engagements per quarter. By application only.
            </p>

            <a
              href="mailto:info@swisshospitality.com"
              className="footer-cta"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                padding: "22px 64px",
                backgroundColor: ctaHover ? "transparent" : "var(--blue)",
                color: ctaHover ? "var(--blue)" : "var(--white)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                border: "1px solid var(--blue)",
                overflow: "hidden",
              }}
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
            >
              <span style={{ position: "relative", zIndex: 1 }}>Apply for Assessment</span>
            </a>
          </div>
        </div>
      </section>

      {showDocs && <Documents />}

      <footer
        style={{
          padding: "56px 0",
          backgroundColor: "var(--blue)",
          borderTop: "1px solid rgba(218,220,226,0.04)",
        }}
      >
        <div ref={r2} style={{ ...s2, maxWidth: 1400, margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <a
            href="#"
            className="footer-logo"
            style={{ display: "flex", alignItems: "center" }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img src="/logo.svg" alt="Swiss Hospitality Company" style={{ height: 20, width: "auto", transition: "opacity 0.4s", opacity: 0.7 }} />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <button
              onClick={() => setShowDocs(!showDocs)}
              style={{
                background: "none",
                border: "1px solid rgba(218,220,226,0.06)",
                color: "var(--silver)",
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 300,
                padding: "8px 16px",
                cursor: "pointer",
                opacity: 0.2,
                transition: "all 0.5s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.5"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.2"; }}
            >
              {showDocs ? "Hide" : "Templates"}
            </button>
            <p style={{ fontSize: 11, color: "var(--silver)", opacity: 0.2, fontWeight: 300 }}>
              &copy; {new Date().getFullYear()} Swiss Hospitality Company
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .footer-cta::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(218,220,226,0.08), transparent);
          transition: left 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .footer-cta:hover::after { left: 150%; }
        .footer-logo:hover img { opacity: 1 !important; }
      `}</style>
    </>
  );
}
