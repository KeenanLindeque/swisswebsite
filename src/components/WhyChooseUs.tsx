"use client";

import { Globe, Shield, Target, Chart, Handshake, GraduationCap } from "./Icons";

const reasons = [
  { icon: Chart, title: "Results-Driven", desc: "A proven track record of exceeding client expectations." },
  { icon: Globe, title: "Global Reach", desc: "Diverse, international teams bringing varied perspectives." },
  { icon: Shield, title: "Trusted Partner", desc: "Sustainable impact with lasting competitive advantage." },
  { icon: Handshake, title: "Strategic Alliances", desc: "Deep partnerships to deliver comprehensive solutions." },
  { icon: Target, title: "Precision Focus", desc: "Transformational approaches for every stakeholder." },
  { icon: GraduationCap, title: "Talent Development", desc: "Empowering the next generation through education." },
];

export default function WhyChooseUs() {
  return (
    <section
      id="contact"
      style={{
        padding: "140px 0",
        backgroundColor: "var(--blue)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Geometric accents */}
      <div style={{ position: "absolute", top: 0, left: "25%", width: 1, height: "100%", backgroundColor: "var(--silver)", opacity: 0.04 }} />
      <div style={{ position: "absolute", top: 0, left: "75%", width: 1, height: "100%", backgroundColor: "var(--silver)", opacity: 0.04 }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 100 }}>
          <p style={{ color: "var(--silver)", fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 24, fontWeight: 400, opacity: 0.5 }}>
            What our clients say
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: "var(--white)", lineHeight: 1.15 }}>
            Why <span style={{ fontWeight: 600 }}>Choose Us</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
          }}
        >
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                style={{
                  padding: "48px 40px",
                  border: "1px solid rgba(218,220,226,0.06)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(243,243,245,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <Icon size={28} color="var(--silver)" strokeWidth={1} />
                <h3 style={{ fontSize: 18, fontWeight: 500, color: "var(--white)", margin: "24px 0 12px", letterSpacing: "0.01em" }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--silver)", lineHeight: 1.7, fontWeight: 300, opacity: 0.6 }}>
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
