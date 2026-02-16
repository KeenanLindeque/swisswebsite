"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Footer() {
  const [r1, s1] = useReveal({ delay: 0 });
  const [r2, s2] = useReveal({ delay: 0.15 });

  return (
    <>
      {/* Contact CTA */}
      <section
        id="contact"
        style={{
          padding: "160px 0",
          backgroundColor: "var(--white)",
          borderTop: "1px solid var(--silver)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
          <div ref={r1} style={s1}>
            <p style={{ color: "var(--blue)", fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 400, opacity: 0.4, marginBottom: 40 }}>
              Get in Touch
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: "var(--blue)", lineHeight: 1.2, marginBottom: 24, maxWidth: 700, margin: "0 auto 24px" }}>
              Excellence is a standard.<br />
              <span style={{ fontWeight: 600 }}>Let us measure yours.</span>
            </h2>
            <p style={{ fontSize: 17, color: "#717580", fontWeight: 300, lineHeight: 1.8, maxWidth: 520, margin: "0 auto 48px" }}>
              Connect with Swiss Hospitality Company to discuss quality assessment, recognition, or advisory services.
            </p>
            <a
              href="mailto:info@swisshospitality.com"
              style={{
                display: "inline-block",
                padding: "18px 56px",
                backgroundColor: "var(--blue)",
                color: "var(--white)",
                fontSize: 13,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 400,
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                border: "1px solid var(--blue)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--blue)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--blue)"; e.currentTarget.style.color = "var(--white)"; }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "48px 0",
          backgroundColor: "var(--blue)",
          borderTop: "1px solid rgba(218,220,226,0.06)",
        }}
      >
        <div ref={r2} style={{ ...s2, maxWidth: 1400, margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <a href="#" style={{ display: "flex", alignItems: "center" }}>
            <img src="/logo.svg" alt="Swiss Hospitality Company" style={{ height: 22, width: "auto" }} />
          </a>
          <p style={{ fontSize: 13, color: "var(--silver)", opacity: 0.4, fontWeight: 300 }}>
            &copy; {new Date().getFullYear()} Swiss Hospitality Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
