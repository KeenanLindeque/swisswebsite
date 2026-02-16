"use client";

import { ArrowRight } from "./Icons";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--blue)", borderTop: "1px solid rgba(218,220,226,0.06)" }}>
      {/* CTA band */}
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "80px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(218,220,226,0.06)",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        <h3 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 300, color: "var(--white)", lineHeight: 1.2 }}>
          Ready to begin your <span style={{ fontWeight: 600 }}>journey</span>?
        </h3>
        <a
          href="mailto:info@swisshospitality.sa?subject=SHC%20Meeting%20Request"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            color: "var(--silver)",
            fontSize: 13,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 400,
            padding: "16px 0",
            borderBottom: "1px solid rgba(218,220,226,0.2)",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--white)";
            e.currentTarget.style.borderBottomColor = "var(--white)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--silver)";
            e.currentTarget.style.borderBottomColor = "rgba(218,220,226,0.2)";
          }}
        >
          Get in Touch
          <ArrowRight size={14} />
        </a>
      </div>

      {/* Bottom */}
      <div
        className="footer-bottom"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "40px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="Swiss Hospitality Company"
          style={{ height: 24, width: "auto", display: "block", opacity: 0.6 }}
        />

        <p style={{ color: "var(--silver)", fontSize: 12, opacity: 0.3, letterSpacing: "0.05em" }}>
          &copy; {new Date().getFullYear()} Swiss Hospitality Company
        </p>

        <div style={{ display: "flex", gap: 32 }}>
          {["LinkedIn", "Twitter"].map((s) => (
            <span
              key={s}
              style={{ color: "var(--silver)", fontSize: 12, opacity: 0.4, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", transition: "opacity 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-bottom { flex-direction: column !important; gap: 24px !important; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
