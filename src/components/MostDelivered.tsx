"use client";

const items = [
  "Strategy",
  "Regulation",
  "Market Analysis",
  "Community",
  "PMO",
  "Partnerships",
  "Scholarships",
  "Academies",
];

export default function MostDelivered() {
  return (
    <section style={{ padding: "120px 0", backgroundColor: "var(--white)", borderTop: "1px solid var(--silver)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "var(--blue)", fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 24, fontWeight: 400, opacity: 0.4 }}>
            Core Expertise
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: "var(--blue)", lineHeight: 1.15 }}>
            Most Delivered <span style={{ fontWeight: 600 }}>Solutions</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, maxWidth: 900, margin: "0 auto" }}>
          {items.map((item) => (
            <span
              key={item}
              style={{
                padding: "14px 32px",
                borderRadius: 9999,
                border: "1px solid var(--silver)",
                fontSize: 14,
                fontWeight: 400,
                color: "var(--blue)",
                letterSpacing: "0.04em",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--blue)";
                e.currentTarget.style.color = "var(--white)";
                e.currentTarget.style.borderColor = "var(--blue)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--blue)";
                e.currentTarget.style.borderColor = "var(--silver)";
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
