"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import Link from "next/link";

/* ─── animation helpers ─── */

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

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
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, mounted]);

  return [ref, visible] as const;
}

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

function anim(visible: boolean, delay = 0): CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,36px,0)",
    transition: `opacity 2s ${ease} ${delay}s, transform 2s ${ease} ${delay}s`,
  };
}

/* ─── data ─── */

const departments = [
  {
    name: "Front Office & Reception",
    bar: 92,
    icon: (
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
    ),
    checks: [
      "Guest arrival & check-in flow",
      "Concierge response quality",
      "Complaint resolution protocols",
      "Brand-standard compliance",
    ],
  },
  {
    name: "Food & Beverage",
    bar: 85,
    icon: (
      <>
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
        <path d="M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </>
    ),
    checks: [
      "Menu execution & plating",
      "Service timing & attentiveness",
      "Hygiene & safety standards",
      "Beverage program quality",
    ],
  },
  {
    name: "Housekeeping & Maintenance",
    bar: 78,
    icon: (
      <>
        <path d="M12 2l1.09 3.41L16 6l-2.58 2.13L14.18 12 12 9.87 9.82 12l.76-3.87L8 6l2.91-.59z" />
        <path d="M5 20h14M6 16h12" />
      </>
    ),
    checks: [
      "Room cleanliness & presentation",
      "Turndown service execution",
      "Maintenance response times",
    ],
  },
  {
    name: "Spa, Pool & Leisure",
    bar: 88,
    icon: (
      <>
        <path d="M2 12c2-2 4-3 6-3s4 1 6 3 4 3 6 3 4-1 6-3" />
        <path d="M2 17c2-2 4-3 6-3s4 1 6 3 4 3 6 3 4-1 6-3" />
      </>
    ),
    checks: [
      "Treatment quality & consistency",
      "Facility cleanliness & ambiance",
      "Staff professionalism & care",
    ],
  },
  {
    name: "Staff Training & Readiness",
    bar: 81,
    icon: (
      <>
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85" />
      </>
    ),
    checks: [
      "Onboarding & SOP knowledge",
      "Guest interaction skills",
      "Emergency protocol readiness",
      "Brand culture alignment",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We understand your brand, goals, and the standards you hold yourself to.",
  },
  {
    num: "02",
    title: "On-Site Assessment",
    desc: "Our team evaluates every department systematically across your property.",
  },
  {
    num: "03",
    title: "Analysis & Scoring",
    desc: "Detailed performance scoring against brand standards and industry benchmarks.",
  },
  {
    num: "04",
    title: "Certification & Report",
    desc: "Official certification level, comprehensive findings, and an improvement roadmap.",
  },
];

const deliverables = [
  {
    title: "Department Performance Scores",
    desc: "Quantified scoring across every operational area — benchmarked against the best.",
    icon: (
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    title: "SOP Compliance Findings",
    desc: "Line-by-line review of standard operating procedures vs. actual execution.",
    icon: (
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6m-3 7l2 2 4-4" />
    ),
  },
  {
    title: "Risk Indicators & Gaps",
    desc: "Highlighted vulnerabilities before they reach the guest experience.",
    icon: (
      <path d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
    ),
  },
  {
    title: "Strategic Improvement Roadmap",
    desc: "A prioritized action plan with quick wins and long-term elevations.",
    icon: (
      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
  },
];

/* ─── page ─── */

export default function QualityCertificationPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const [deptRef, deptVis] = useVisible(0.08);
  const [stepsRef, stepsVis] = useVisible(0.1);
  const [delivRef, delivVis] = useVisible(0.1);
  const [ctaRef, ctaVis] = useVisible(0.2);

  return (
    <main style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: "relative",
          backgroundColor: "var(--blue)",
          padding: "180px 0 200px",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px", position: "relative" }}>
          <Link
            href="/"
            style={{
              position: "absolute",
              top: -100,
              left: 48,
              fontSize: 13,
              fontWeight: 300,
              color: "var(--silver)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              opacity: mounted ? 0.5 : 0,
              transition: `opacity 1.6s ${ease}`,
            }}
          >
            ← Back
          </Link>

          <span
            style={{
              fontSize: "clamp(6rem, 14vw, 11rem)",
              fontWeight: 200,
              color: "var(--white)",
              lineHeight: 1,
              display: "block",
              opacity: mounted ? 0.04 : 0,
              transition: `opacity 2.4s ${ease}`,
              userSelect: "none",
              marginBottom: -20,
            }}
          >
            02
          </span>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 200,
              color: "var(--white)",
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: "-0.015em",
              ...anim(mounted, 0.1),
            }}
          >
            Quality Certification
          </h1>

          <p
            style={{
              fontSize: 15,
              fontStyle: "italic",
              color: "var(--silver)",
              opacity: mounted ? 0.5 : 0,
              fontWeight: 300,
              letterSpacing: "0.03em",
              marginBottom: 40,
              transition: `opacity 2s ${ease} 0.2s`,
            }}
          >
            Your standards on paper vs. your standards on the floor.
          </p>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.9,
              color: "var(--white)",
              fontWeight: 300,
              maxWidth: 620,
              ...anim(mounted, 0.25),
              opacity: mounted ? 0.5 : 0,
            }}
          >
            We evaluate every department against your own brand standards and
            industry benchmarks — then certify where you actually stand. No
            assumptions, no guesswork. Just a clear, scored picture of
            operational reality.
          </p>
        </div>
      </section>

      {/* ═══ DEPARTMENT ASSESSMENT INFOGRAPHIC ═══ */}
      <section
        ref={deptRef}
        style={{
          backgroundColor: "var(--white)",
          padding: "200px 0",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: 80 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.25em",
                color: "var(--blue)",
                opacity: 0.35,
                display: "block",
                marginBottom: 16,
                ...anim(deptVis, 0),
              }}
            >
              Assessment Areas
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 200,
                color: "var(--blue)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                ...anim(deptVis, 0.08),
              }}
            >
              Five departments. One clear picture.
            </h2>
          </div>

          <div
            className="qc-dept-grid"
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {departments.map((dept, i) => (
              <DepartmentCard
                key={dept.name}
                dept={dept}
                index={i}
                visible={deptVis}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW CERTIFICATION WORKS ═══ */}
      <section
        ref={stepsRef}
        style={{
          backgroundColor: "var(--blue)",
          padding: "200px 0",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: 80 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.25em",
                color: "var(--white)",
                opacity: 0.35,
                display: "block",
                marginBottom: 16,
                ...anim(stepsVis, 0),
              }}
            >
              Our Process
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 200,
                color: "var(--white)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                ...anim(stepsVis, 0.08),
              }}
            >
              How certification works.
            </h2>
          </div>

          <div
            className="qc-steps"
            style={{
              display: "flex",
              gap: 0,
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="qc-step-card"
                style={{
                  flex: "1 1 240px",
                  position: "relative",
                  padding: "0 32px",
                  ...anim(stepsVis, 0.12 + i * 0.1),
                }}
              >
                {i < steps.length - 1 && (
                  <div
                    className="qc-step-arrow"
                    style={{
                      position: "absolute",
                      top: 22,
                      right: -8,
                      width: 16,
                      height: 1,
                      backgroundColor: "var(--accent)",
                      opacity: stepsVis ? 0.5 : 0,
                      transition: `opacity 1.5s ${ease} ${0.4 + i * 0.1}s`,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: -3,
                        width: 0,
                        height: 0,
                        borderLeft: "5px solid var(--accent)",
                        borderTop: "3.5px solid transparent",
                        borderBottom: "3.5px solid transparent",
                        opacity: 0.5,
                      }}
                    />
                  </div>
                )}

                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    border: "1px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 28,
                    opacity: 0.7,
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      color: "var(--white)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 300,
                    color: "var(--white)",
                    marginBottom: 12,
                    letterSpacing: "0.01em",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "var(--silver)",
                    fontWeight: 300,
                    opacity: 0.45,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOU GET ═══ */}
      <section
        ref={delivRef}
        style={{
          backgroundColor: "var(--white)",
          padding: "200px 0",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: 80 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.25em",
                color: "var(--blue)",
                opacity: 0.35,
                display: "block",
                marginBottom: 16,
                ...anim(delivVis, 0),
              }}
            >
              Deliverables
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 200,
                color: "var(--blue)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                ...anim(delivVis, 0.08),
              }}
            >
              What you get.
            </h2>
          </div>

          <div
            className="qc-deliv-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {deliverables.map((d, i) => (
              <div
                key={d.title}
                className="qc-deliv-card"
                style={{
                  padding: 36,
                  border: "1px solid rgba(15,35,71,0.06)",
                  backgroundColor: "rgba(15,35,71,0.015)",
                  ...anim(delivVis, 0.12 + i * 0.08),
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(218,220,226,0.2)",
                    marginBottom: 28,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--blue)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {d.icon}
                  </svg>
                </div>

                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 300,
                    color: "var(--blue)",
                    marginBottom: 12,
                    letterSpacing: "0.01em",
                  }}
                >
                  {d.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "var(--blue)",
                    fontWeight: 300,
                    opacity: 0.5,
                  }}
                >
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section
        ref={ctaRef}
        style={{
          backgroundColor: "var(--blue)",
          padding: "160px 0",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 200,
              color: "var(--white)",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              marginBottom: 40,
              ...anim(ctaVis, 0),
            }}
          >
            Know exactly where you stand.
          </h2>

          <Link
            href="/"
            className="qc-cta-btn"
            style={{
              display: "inline-block",
              padding: "18px 52px",
              backgroundColor: "var(--accent)",
              color: "var(--white)",
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: "0.08em",
              textDecoration: "none",
              textTransform: "uppercase",
              ...anim(ctaVis, 0.12),
            }}
          >
            Request Certification
          </Link>

          <div style={{ marginTop: 48 }}>
            <Link
              href="/"
              style={{
                fontSize: 13,
                fontWeight: 300,
                color: "var(--silver)",
                textDecoration: "none",
                opacity: 0.4,
                letterSpacing: "0.04em",
                ...anim(ctaVis, 0.2),
              }}
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ GLOBAL STYLES ═══ */}
      <style>{`
        .qc-dept-card {
          transition: transform 0.5s ${ease}, border-color 0.5s ${ease}, box-shadow 0.5s ${ease} !important;
        }
        .qc-dept-card:hover {
          transform: translateY(-3px) !important;
          border-color: rgba(218,220,226,0.3) !important;
          box-shadow: 0 8px 40px rgba(15,35,71,0.06);
        }
        .qc-deliv-card {
          transition: transform 0.5s ${ease}, border-color 0.5s ${ease} !important;
        }
        .qc-deliv-card:hover {
          transform: translateY(-3px) !important;
          border-color: rgba(218,220,226,0.25) !important;
        }
        .qc-cta-btn {
          transition: background-color 0.4s ${ease}, transform 0.4s ${ease} !important;
        }
        .qc-cta-btn:hover {
          filter: brightness(1.15);
          transform: translateY(-1px) !important;
        }
        @media (max-width: 900px) {
          .qc-dept-grid { flex-direction: column !important; }
          .qc-steps { flex-direction: column !important; gap: 48px !important; }
          .qc-step-arrow { display: none !important; }
          .qc-step-card { padding: 0 0 0 0 !important; }
        }
      `}</style>
    </main>
  );
}

/* ─── department card component ─── */

function DepartmentCard({
  dept,
  index,
  visible,
}: {
  dept: (typeof departments)[number];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="qc-dept-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 200px",
        minWidth: 200,
        padding: 32,
        border: `1px solid ${hovered ? "rgba(218,220,226,0.35)" : "rgba(15,35,71,0.06)"}`,
        backgroundColor: "rgba(15,35,71,0.015)",
        cursor: "default",
        ...anim(visible, 0.1 + index * 0.07),
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.35, marginBottom: 24 }}
      >
        {dept.icon}
      </svg>

      <h3
        style={{
          fontSize: 15,
          fontWeight: 300,
          color: "var(--blue)",
          marginBottom: 20,
          lineHeight: 1.4,
          letterSpacing: "0.01em",
        }}
      >
        {dept.name}
      </h3>

      {/* assessment bar */}
      <div
        style={{
          width: "100%",
          height: 3,
          backgroundColor: "rgba(15,35,71,0.06)",
          marginBottom: 24,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: visible ? `${dept.bar}%` : "0%",
            backgroundColor: "var(--accent)",
            opacity: 0.6,
            transition: `width 1.8s ${ease} ${0.3 + index * 0.1}s`,
          }}
        />
      </div>

      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {dept.checks.map((c) => (
          <li
            key={c}
            style={{
              fontSize: 12,
              color: "var(--blue)",
              fontWeight: 300,
              lineHeight: 1.6,
              opacity: 0.35,
              paddingLeft: 12,
              position: "relative",
              marginBottom: 4,
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "0.45em",
                width: 3,
                height: 3,
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                opacity: 0.5,
              }}
            />
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
