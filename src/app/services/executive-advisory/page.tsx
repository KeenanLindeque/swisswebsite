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

const processSteps = [
  {
    num: "01",
    title: "Assessment Review",
    desc: "We present every finding from your mystery guest assessment and certification in a comprehensive executive briefing.",
  },
  {
    num: "02",
    title: "Gap Analysis",
    desc: "Together, we identify the critical gaps between your current operations and your brand promise — prioritized by impact.",
  },
  {
    num: "03",
    title: "Strategy Session",
    desc: "Your leadership team works with our advisors to build a targeted improvement strategy for each department.",
  },
  {
    num: "04",
    title: "Action Plan",
    desc: "You leave with a documented, prioritized 90-day action plan with clear owners, timelines, and success metrics.",
  },
];

const focusAreas = [
  {
    icon: "📋",
    title: "Executive Debrief",
    desc: "Full walkthrough of all assessment findings with your leadership team.",
  },
  {
    icon: "🛤️",
    title: "Guest Journey Refinement",
    desc: "Redesign critical touchpoints based on real guest experience data.",
  },
  {
    icon: "🔄",
    title: "Service Recovery Design",
    desc: "Build protocols that turn service failures into loyalty moments.",
  },
  {
    icon: "👥",
    title: "Leadership & Culture",
    desc: "Align leadership around a shared vision for service excellence.",
  },
  {
    icon: "📂",
    title: "Department Action Items",
    desc: "Targeted improvements for each department with assigned ownership.",
  },
  {
    icon: "📅",
    title: "90-Day Roadmap",
    desc: "A structured implementation timeline with milestones and metrics.",
  },
];

const outcomes = [
  { value: "90", suffix: " Days", label: "Average time to measurable improvement" },
  { value: "3", suffix: "x", label: "Faster resolution of recurring service gaps" },
  { value: "100", suffix: "%", label: "Of advisory clients report clearer strategic focus" },
];

export default function ExecutiveAdvisoryPage() {
  const hero = useReveal();
  const process = useReveal();
  const covered = useReveal();
  const outcomesSection = useReveal();

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
          04
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
            Executive Advisory
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
            Findings become action. One session.
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
            After certification, we sit with your leadership team and translate every finding into a focused action plan.
            No retainers. No fluff.
          </p>
        </div>
      </section>

      {/* ─── Process Flow ─── */}
      <section
        ref={process.ref}
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
              ...transition(process.visible),
            }}
          >
            The Advisory Process
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 200,
              margin: "0 0 80px",
              lineHeight: 1.15,
              ...transition(process.visible, 0.1),
            }}
          >
            From insight to action in four steps.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
              gap: 32,
              position: "relative",
            }}
          >
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  position: "relative",
                  border: `1px solid ${SILVER}`,
                  borderRadius: 4,
                  padding: "56px 44px 48px",
                  cursor: "default",
                  ...transition(process.visible, 0.15 + i * 0.1),
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
                    fontSize: 96,
                    fontWeight: 200,
                    color: ACCENT,
                    opacity: 0.12,
                    position: "absolute",
                    top: 16,
                    right: 28,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {step.num}
                </span>

                {i < processSteps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: -18,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 2,
                      height: 34,
                      background: ACCENT,
                      opacity: 0.25,
                      zIndex: 2,
                    }}
                  />
                )}

                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 300,
                    margin: "0 0 16px",
                    letterSpacing: "-0.01em",
                    position: "relative",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 1.75,
                    margin: 0,
                    opacity: 0.7,
                    position: "relative",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What's Covered ─── */}
      <section
        ref={covered.ref}
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
              ...transition(covered.visible),
            }}
          >
            What We Cover
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 200,
              margin: "0 0 80px",
              lineHeight: 1.15,
              ...transition(covered.visible, 0.1),
            }}
          >
            Advisory Focus Areas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: 24,
            }}
          >
            {focusAreas.map((area, i) => (
              <div
                key={area.title}
                style={{
                  border: `1px solid rgba(255,250,239,0.1)`,
                  borderRadius: 4,
                  padding: "40px 32px",
                  background: "rgba(255,250,239,0.03)",
                  ...transition(covered.visible, 0.15 + i * 0.08),
                }}
              >
                <span style={{ fontSize: 28, display: "block", marginBottom: 20 }}>{area.icon}</span>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 300,
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {area.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: 1.7,
                    margin: 0,
                    opacity: 0.55,
                  }}
                >
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Outcomes ─── */}
      <section
        ref={outcomesSection.ref}
        style={{ padding: "200px 24px", background: WHITE }}
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
              ...transition(outcomesSection.visible),
            }}
          >
            Results
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 200,
              margin: "0 0 80px",
              lineHeight: 1.15,
              ...transition(outcomesSection.visible, 0.1),
            }}
          >
            What Changes
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: 32,
            }}
          >
            {outcomes.map((o, i) => (
              <div
                key={o.value}
                style={{
                  textAlign: "center",
                  padding: "56px 32px",
                  border: `1px solid ${SILVER}`,
                  borderRadius: 4,
                  ...transition(outcomesSection.visible, 0.15 + i * 0.12),
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(56px, 8vw, 88px)",
                    fontWeight: 200,
                    lineHeight: 1,
                    display: "block",
                    color: BLUE,
                  }}
                >
                  {o.value}
                  <span style={{ color: ACCENT }}>{o.suffix}</span>
                </span>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    margin: "24px 0 0",
                    opacity: 0.6,
                    maxWidth: 260,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {o.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



    </main>
  );
}
