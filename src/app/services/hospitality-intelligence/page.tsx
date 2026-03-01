"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const WHITE = "var(--white, #fffaef)";
const BLUE = "var(--blue, #0f2347)";
const SILVER = "var(--silver, #dadce2)";
const ACCENT = "var(--accent, #dadce2)";

const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

function useReveal() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  return { ref, visible };
}

/* ── Mini chart components ── */

function BarChart() {
  const widths = [85, 60, 42];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 24, marginBottom: 8 }}>
      {widths.map((w, i) => (
        <div
          key={i}
          style={{
            height: 6,
            width: `${w}%`,
            background: ACCENT,
            opacity: 0.25 + i * 0.2,
            borderRadius: 3,
          }}
        />
      ))}
    </div>
  );
}

function StepChart() {
  const heights = [24, 40, 56, 72];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 6,
        marginTop: 24,
        marginBottom: 8,
        height: 72,
      }}
    >
      {heights.map((h, i) => (
        <div
          key={i}
          style={{
            width: 20,
            height: h,
            background: ACCENT,
            opacity: 0.2 + i * 0.15,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
}

function CircleProgress() {
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        border: `5px solid rgba(218,220,226,0.15)`,
        borderTopColor: ACCENT,
        borderRightColor: ACCENT,
        borderBottomColor: ACCENT,
        transform: "rotate(-45deg)",
        marginTop: 24,
        marginBottom: 8,
      }}
    />
  );
}

function DotGrid() {
  const dots = Array.from({ length: 25 });
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 8px)",
        gap: 6,
        marginTop: 24,
        marginBottom: 8,
      }}
    >
      {dots.map((_, i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: ACCENT,
            opacity: 0.15 + Math.random() * 0.35,
          }}
        />
      ))}
    </div>
  );
}

const insightCards = [
  {
    icon: "♥",
    title: "Guest Experience Trends",
    desc: "Patterns in guest satisfaction, complaint triggers, and loyalty drivers across 250+ properties.",
    visual: BarChart,
  },
  {
    icon: "▊",
    title: "Operational Benchmarks",
    desc: "Department-by-department performance data — how your hotel compares to the top performers in your category.",
    visual: StepChart,
  },
  {
    icon: "★",
    title: "Service Excellence Patterns",
    desc: "The specific behaviors, systems, and training approaches that distinguish exceptional service cultures.",
    visual: CircleProgress,
  },
  {
    icon: "◉",
    title: "Competitive Market Analysis",
    desc: "Market-level insights on positioning, pricing correlation with quality, and emerging hospitality trends.",
    visual: DotGrid,
  },
];

const sources = [
  { value: "250", suffix: "+", label: "Hotels Assessed" },
  { value: "40", suffix: "+", label: "Countries & Territories" },
  { value: "15", suffix: "+", label: "Years of Data" },
  { value: "1,000", suffix: "+", label: "Individual Evaluations" },
];

const useCases = [
  {
    num: "01",
    title: "Pre-Opening Benchmarking",
    desc: "Set opening standards based on data from the world's best-performing properties in your category.",
  },
  {
    num: "02",
    title: "Annual Performance Review",
    desc: "Compare year-over-year quality trends and measure the impact of operational changes.",
  },
  {
    num: "03",
    title: "Competitive Positioning",
    desc: "Understand where you stand relative to direct competitors and market leaders.",
  },
];

export default function HospitalityIntelligencePage() {
  const hero = useReveal();
  const insights = useReveal();
  const dataSources = useReveal();
  const cases = useReveal();
  const cta = useReveal();

  const transition = (visible: boolean, delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <main style={{ fontFamily: FONT, color: BLUE, background: WHITE }}>
      {/* ─── Hero ─── */}
      <section
        ref={hero.ref}
        style={{
          position: "relative",
          background: BLUE,
          color: WHITE,
          padding: "180px 24px 200px",
          overflow: "hidden",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "clamp(280px, 40vw, 500px)",
            fontWeight: 100,
            lineHeight: 1,
            color: WHITE,
            opacity: hero.visible ? 0.03 : 0,
            transition: "opacity 2s cubic-bezier(0.22, 1, 0.36, 1)",
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "-0.04em",
            zIndex: 0,
          }}
        >
          05
        </span>
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={transition(hero.visible)}>
            <Link
              href="/"
              style={{
                color: WHITE,
                textDecoration: "none",
                fontSize: 14,
                letterSpacing: "0.12em",
                fontWeight: 300,
                opacity: 0.6,
                display: "inline-block",
                marginBottom: 64,
              }}
            >
              ← Back
            </Link>
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 80px)",
              fontWeight: 200,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
              ...transition(hero.visible, 0.1),
            }}
          >
            Hospitality Intelligence
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 2.2vw, 24px)",
              fontWeight: 300,
              fontStyle: "italic",
              opacity: 0.5,
              margin: "28px 0 0",
              lineHeight: 1.5,
              ...transition(hero.visible, 0.2),
            }}
          >
            What the top 10% do differently.
          </p>

          <p
            style={{
              fontSize: "clamp(16px, 1.6vw, 20px)",
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: 640,
              margin: "36px 0 0",
              opacity: 0.75,
              ...transition(hero.visible, 0.3),
            }}
          >
            Insights drawn from hundreds of assessments worldwide — the patterns, benchmarks, and trends that separate
            good hotels from unforgettable ones.
          </p>
        </div>
      </section>

      {/* ─── Insights Dashboard ─── */}
      <section
        ref={insights.ref}
        style={{ padding: "200px 24px", background: WHITE, position: "relative" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: ACCENT,
              margin: "0 0 20px",
              ...transition(insights.visible),
            }}
          >
            Intelligence Areas
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 200,
              margin: "0 0 80px",
              lineHeight: 1.15,
              ...transition(insights.visible, 0.1),
            }}
          >
            Data that drives decisions.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
              gap: 32,
            }}
          >
            {insightCards.map((card, i) => {
              const Visual = card.visual;
              return (
                <div
                  key={card.title}
                  style={{
                    border: `1px solid ${SILVER}`,
                    borderRadius: 4,
                    padding: 48,
                    cursor: "default",
                    transition: "transform 0.4s, box-shadow 0.4s",
                    ...transition(insights.visible, 0.15 + i * 0.1),
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(15,35,71,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
                      color: ACCENT,
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {card.icon}
                  </span>

                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 300,
                      margin: "0 0 12px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {card.title}
                  </h3>

                  <Visual />

                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 300,
                      lineHeight: 1.75,
                      margin: "16px 0 0",
                      opacity: 0.65,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Data Sources ─── */}
      <section
        ref={dataSources.ref}
        style={{ padding: "200px 24px", background: BLUE, color: WHITE }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: ACCENT,
              margin: "0 0 20px",
              ...transition(dataSources.visible),
            }}
          >
            Our Data
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 200,
              margin: "0 0 80px",
              lineHeight: 1.15,
              ...transition(dataSources.visible, 0.1),
            }}
          >
            Where Our Insights Come From
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
              gap: 40,
            }}
          >
            {sources.map((s, i) => (
              <div
                key={s.label}
                style={{
                  textAlign: "center",
                  ...transition(dataSources.visible, 0.15 + i * 0.1),
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(48px, 7vw, 72px)",
                    fontWeight: 200,
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  {s.value}
                  <span style={{ color: ACCENT }}>{s.suffix}</span>
                </span>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    letterSpacing: "0.06em",
                    margin: "16px 0 0",
                    opacity: 0.5,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Use Cases ─── */}
      <section
        ref={cases.ref}
        style={{ padding: "200px 24px", background: WHITE }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: ACCENT,
              margin: "0 0 20px",
              ...transition(cases.visible),
            }}
          >
            Applications
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 200,
              margin: "0 0 80px",
              lineHeight: 1.15,
              ...transition(cases.visible, 0.1),
            }}
          >
            How Hotels Use Our Intelligence
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {useCases.map((uc, i) => (
              <div
                key={uc.num}
                style={{
                  borderLeft: `3px solid ${ACCENT}`,
                  padding: "36px 40px",
                  background: "rgba(15,35,71,0.015)",
                  borderRadius: "0 4px 4px 0",
                  ...transition(cases.visible, 0.15 + i * 0.12),
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    color: ACCENT,
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  {uc.num}
                </span>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 300,
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {uc.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 1.75,
                    margin: 0,
                    opacity: 0.6,
                    maxWidth: 600,
                  }}
                >
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        ref={cta.ref}
        style={{
          padding: "180px 24px",
          background: BLUE,
          color: WHITE,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 3.8vw, 48px)",
              fontWeight: 200,
              margin: "0 0 48px",
              lineHeight: 1.25,
              ...transition(cta.visible),
            }}
          >
            Intelligence that separates leaders from followers.
          </h2>

          <div style={transition(cta.visible, 0.15)}>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                padding: "20px 56px",
                background: ACCENT,
                color: WHITE,
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "0.14em",
                textDecoration: "none",
                textTransform: "uppercase",
                borderRadius: 3,
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Request Intelligence Report
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
