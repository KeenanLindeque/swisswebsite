"use client";

import { Lightbulb, Building, People } from "./Icons";

const solutions = [
  {
    icon: Lightbulb,
    title: "Advisory",
    subtitle: "Services",
    description:
      "Strategy development, market analysis, regulation & benchmarking, and management consulting to drive sustainable growth.",
    items: ["Strategy Development", "Market Analysis", "SOP Development", "Performance Evaluation"],
  },
  {
    icon: Building,
    title: "Project",
    subtitle: "Management",
    description:
      "End-to-end project delivery from needs analysis through execution, with comprehensive risk mitigation planning.",
    items: ["Planning & Design", "Partnership Forging", "Project Execution", "Performance Reporting"],
  },
  {
    icon: People,
    title: "Community",
    subtitle: "Engagement",
    description:
      "Scholarship management, professional counseling, and degree enrollment programs across all academic levels.",
    items: ["Scholarship Management", "Professional Counseling", "Degree Enrollment", "Workforce Development"],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" style={{ padding: "140px 0", backgroundColor: "var(--white)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ marginBottom: 100, maxWidth: 560 }}>
          <p
            style={{
              color: "var(--blue)",
              fontSize: 12,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: 24,
              fontWeight: 400,
              opacity: 0.4,
            }}
          >
            Our Solutions
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              color: "var(--blue)",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Versatile advisory from{" "}
            <span style={{ fontWeight: 600 }}>strategy to execution</span>
          </h2>
          <div style={{ width: 48, height: 1, backgroundColor: "var(--blue)", opacity: 0.15 }} />
        </div>

        {/* Cards */}
        <div className="solutions-grid" style={{ display: "flex", gap: 24 }}>
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                style={{
                  flex: "1 1 0%",
                  minWidth: 0,
                  padding: "48px 40px",
                  borderRadius: 20,
                  border: "1px solid var(--silver)",
                  backgroundColor: "var(--white)",
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--blue)";
                  e.currentTarget.style.borderColor = "var(--blue)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.querySelectorAll<HTMLElement>("[data-hover='light']").forEach(
                    (el) => (el.style.color = "var(--white)")
                  );
                  e.currentTarget.querySelectorAll<HTMLElement>("[data-hover='silver']").forEach(
                    (el) => (el.style.color = "var(--silver)")
                  );
                  e.currentTarget.querySelectorAll<HTMLElement>("[data-hover='icon']").forEach(
                    (el) => { el.style.backgroundColor = "rgba(218,220,226,0.1)"; }
                  );
                  e.currentTarget.querySelectorAll<HTMLElement>("svg").forEach(
                    (el) => (el.style.color = "var(--white)")
                  );
                  e.currentTarget.querySelectorAll<HTMLElement>("[data-hover='line']").forEach(
                    (el) => (el.style.backgroundColor = "rgba(218,220,226,0.2)")
                  );
                  e.currentTarget.querySelectorAll<HTMLElement>("[data-hover='num']").forEach(
                    (el) => (el.style.color = "rgba(243,243,245,0.1)")
                  );
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--white)";
                  e.currentTarget.style.borderColor = "var(--silver)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.querySelectorAll<HTMLElement>("[data-hover='light']").forEach(
                    (el) => (el.style.color = "var(--blue)")
                  );
                  e.currentTarget.querySelectorAll<HTMLElement>("[data-hover='silver']").forEach(
                    (el) => (el.style.color = "#717580")
                  );
                  e.currentTarget.querySelectorAll<HTMLElement>("[data-hover='icon']").forEach(
                    (el) => { el.style.backgroundColor = "rgba(15,35,71,0.04)"; }
                  );
                  e.currentTarget.querySelectorAll<HTMLElement>("svg").forEach(
                    (el) => (el.style.color = "var(--blue)")
                  );
                  e.currentTarget.querySelectorAll<HTMLElement>("[data-hover='line']").forEach(
                    (el) => (el.style.backgroundColor = "var(--silver)")
                  );
                  e.currentTarget.querySelectorAll<HTMLElement>("[data-hover='num']").forEach(
                    (el) => (el.style.color = "rgba(15,35,71,0.04)")
                  );
                }}
              >
                {/* Large number watermark */}
                <span
                  data-hover="num"
                  style={{
                    position: "absolute",
                    top: -16,
                    right: 16,
                    fontSize: 140,
                    fontWeight: 700,
                    color: "rgba(15,35,71,0.04)",
                    lineHeight: 1,
                    transition: "color 0.5s",
                    pointerEvents: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  data-hover="icon"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    backgroundColor: "rgba(15,35,71,0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 32,
                    transition: "background-color 0.5s",
                  }}
                >
                  <Icon size={26} color="var(--blue)" strokeWidth={1} />
                </div>

                {/* Title */}
                <h3 data-hover="light" style={{ fontSize: 26, fontWeight: 300, color: "var(--blue)", lineHeight: 1.2, marginBottom: 4, transition: "color 0.5s" }}>
                  {s.title}
                </h3>
                <h3 data-hover="light" style={{ fontSize: 26, fontWeight: 600, color: "var(--blue)", lineHeight: 1.2, marginBottom: 20, transition: "color 0.5s" }}>
                  {s.subtitle}
                </h3>

                {/* Divider */}
                <div data-hover="line" style={{ width: 32, height: 1, backgroundColor: "var(--silver)", marginBottom: 20, transition: "background-color 0.5s" }} />

                {/* Description */}
                <p data-hover="silver" style={{ fontSize: 15, lineHeight: 1.7, color: "#717580", marginBottom: 28, transition: "color 0.5s" }}>
                  {s.description}
                </p>

                {/* Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.items.map((item) => (
                    <span
                      key={item}
                      data-hover="silver"
                      style={{
                        fontSize: 13,
                        color: "#717580",
                        letterSpacing: "0.03em",
                        transition: "color 0.5s",
                      }}
                    >
                      &mdash;&ensp;{item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .solutions-grid { flex-direction: column !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
