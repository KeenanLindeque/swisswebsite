"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";

/* ─── palette ─── */
const W = "var(--white, #fffaef)";
const B = "var(--blue, #0f2347)";
const S = "var(--silver, #dadce2)";
const A = "var(--accent, #dadce2)";

const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

/* ─── reveal hook ─── */
function useReveal(mounted: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);
  return { ref, visible };
}

/* ─── icons (simple SVG line art) ─── */
function IconPreArrival() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={B} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="20" height="16" rx="2" />
      <path d="M4 11h20" />
      <circle cx="9" cy="17" r="1.5" />
    </svg>
  );
}
function IconArrival() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={B} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4v20M8 10l6-6 6 6" />
      <rect x="6" y="20" width="16" height="4" rx="1" />
    </svg>
  );
}
function IconRoom() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={B} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22V12a2 2 0 012-2h16a2 2 0 012 2v10" />
      <path d="M4 22h20" />
      <path d="M8 10V8a2 2 0 012-2h8a2 2 0 012 2v2" />
      <circle cx="10" cy="15" r="2" />
    </svg>
  );
}
function IconDining() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={B} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4v8a5 5 0 005 5v0a5 5 0 005-5V4" />
      <path d="M14 17v7" />
      <path d="M9 4c0 3 2 5 5 5s5-2 5-5" />
    </svg>
  );
}
function IconFacilities() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={B} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="9" />
      <path d="M14 5v4M14 19v4M5 14h4M19 14h4" />
      <circle cx="14" cy="14" r="3" />
    </svg>
  );
}
function IconRecovery() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={B} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14a10 10 0 0118-6" />
      <path d="M22 4v4h-4" />
      <path d="M24 14a10 10 0 01-18 6" />
      <path d="M6 24v-4h4" />
    </svg>
  );
}
function IconDeparture() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={B} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8l6 6-6 6" />
      <path d="M24 14H10" />
      <path d="M4 4v20" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 11l3 3 7-7" />
    </svg>
  );
}
function IconEye() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 11s4-7 10-7 10 7 10 7-4 7-10 7S1 11 1 11z" />
      <circle cx="11" cy="11" r="3" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="6" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 11h12M12 5l6 6-6 6" />
    </svg>
  );
}

/* assessment section icons (light stroke for dark bg) */
function AssessIcon({ children }: { children: ReactNode }) {
  return <span style={{ display: "inline-flex", opacity: 0.7 }}>{children}</span>;
}
function AIconBooking() {
  return (
    <AssessIcon>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={S} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /><circle cx="8" cy="15" r="1" />
      </svg>
    </AssessIcon>
  );
}
function AIconArrival() {
  return (
    <AssessIcon>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={S} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v15M7 13l5 5 5-5" /><path d="M5 21h14" />
      </svg>
    </AssessIcon>
  );
}
function AIconRoom() {
  return (
    <AssessIcon>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={S} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V7l9-4 9 4v14" /><rect x="8" y="13" width="8" height="8" rx="1" /><path d="M12 13v8" />
      </svg>
    </AssessIcon>
  );
}
function AIconDining() {
  return (
    <AssessIcon>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={S} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M8 4v4a4 4 0 008 0V4" /><path d="M12 12v8" />
      </svg>
    </AssessIcon>
  );
}
function AIconConcierge() {
  return (
    <AssessIcon>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={S} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" /><circle cx="12" cy="12" r="3" />
      </svg>
    </AssessIcon>
  );
}
function AIconComplaint() {
  return (
    <AssessIcon>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={S} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0116-5.65" /><path d="M19 3v4h-4" /><path d="M21 12a9 9 0 01-16 5.65" /><path d="M5 21v-4h4" />
      </svg>
    </AssessIcon>
  );
}

/* ─── journey steps data ─── */
const STEPS: { icon: ReactNode; name: string; desc: string }[] = [
  { icon: <IconPreArrival />, name: "Pre-Arrival", desc: "Booking, communication & expectation setting" },
  { icon: <IconArrival />, name: "Arrival", desc: "Doorman, check-in & first impression" },
  { icon: <IconRoom />, name: "Room Experience", desc: "Quality, amenities & housekeeping" },
  { icon: <IconDining />, name: "Dining & Bar", desc: "Restaurant, room service & bar" },
  { icon: <IconFacilities />, name: "Facilities", desc: "Spa, pool, gym & concierge" },
  { icon: <IconRecovery />, name: "Service Recovery", desc: "Complaint handling & responsiveness" },
  { icon: <IconDeparture />, name: "Departure", desc: "Check-out, farewell & follow-up" },
];

const ASSESS = [
  { icon: <AIconBooking />, title: "Booking & Pre-Arrival Communication", desc: "Response time, accuracy, tone and expectation management" },
  { icon: <AIconArrival />, title: "Arrival, Doorman & Front Desk", desc: "Speed, warmth, professionalism and personalisation" },
  { icon: <AIconRoom />, title: "Room Quality, Cleanliness & Housekeeping", desc: "Standards, maintenance, turndown and attention to detail" },
  { icon: <AIconDining />, title: "Dining, Bar & In-Room Service", desc: "Menu quality, timing, presentation and staff knowledge" },
  { icon: <AIconConcierge />, title: "Concierge, Spa & Recreational Facilities", desc: "Knowledge, availability, condition and guest experience" },
  { icon: <AIconComplaint />, title: "Complaint Handling & Service Recovery", desc: "Empathy, speed, resolution quality and follow-through" },
];

const DELIVERABLES = [
  { icon: <IconCheck />, title: "Scored report across all touchpoints", desc: "Quantitative ratings for every interaction, benchmarked against luxury standards" },
  { icon: <IconEye />, title: "Behavioral observations per department", desc: "Detailed narrative of staff conduct, body language and service attitude" },
  { icon: <IconSearch />, title: "Service gap analysis with benchmarks", desc: "Where you stand versus your brand promise and competitive set" },
  { icon: <IconArrow />, title: "Prioritized action plan", desc: "Ranked recommendations with estimated impact and implementation timeline" },
];

/* ─── section wrapper with reveal ─── */
function Section({
  children,
  bg,
  color,
  mounted,
  style,
}: {
  children: ReactNode;
  bg: string;
  color: string;
  mounted: boolean;
  style?: React.CSSProperties;
}) {
  const { ref, visible } = useReveal(mounted);
  return (
    <div
      ref={ref}
      style={{
        background: bg,
        color,
        padding: "180px 40px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)",
        ...style,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
    </div>
  );
}

/* ─── page component ─── */
export default function MysteryGuestPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main style={{ fontFamily: FONT, background: W, color: B, overflowX: "hidden" }}>
      {/* ━━ HERO ━━ */}
      <section
        style={{
          position: "relative",
          background: B,
          color: W,
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
            color: W,
            opacity: mounted ? 0.03 : 0,
            transition: "opacity 2s cubic-bezier(0.22, 1, 0.36, 1)",
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "-0.04em",
            zIndex: 0,
          }}
        >
          01
        </span>
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <Link
            href="/"
            style={{
              color: W,
              textDecoration: "none",
              fontSize: 14,
              letterSpacing: "0.12em",
              fontWeight: 300,
              opacity: mounted ? 0.6 : 0,
              transition: "opacity 1s cubic-bezier(0.22, 1, 0.36, 1)",
              display: "inline-block",
              marginBottom: 64,
            }}
          >
            ← Back
          </Link>

          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 80px)",
              fontWeight: 200,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s",
            }}
          >
            Mystery Guest
            <br />
            Assessments
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 2.2vw, 24px)",
              fontWeight: 300,
              fontStyle: "italic",
              opacity: mounted ? 0.5 : 0,
              margin: "28px 0 0",
              lineHeight: 1.5,
              transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s",
            }}
          >
            We check in. Your staff won&rsquo;t know.
          </p>

          <p
            style={{
              fontSize: "clamp(16px, 1.6vw, 20px)",
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: 640,
              margin: "36px 0 0",
              opacity: mounted ? 0.75 : 0,
              transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.35s",
            }}
          >
            We stay at your hotel as a real guest and document the entire
            journey — from the moment we book to the moment we leave. Every
            touchpoint is scored, every interaction observed. You receive the
            unfiltered truth about what your guests actually experience.
          </p>
        </div>
      </section>

      {/* ━━ JOURNEY INFOGRAPHIC ━━ */}
      <Section bg={W} color={B} mounted={mounted}>
        <p
          style={{
            fontSize: 10,
            fontWeight: 500,
            textTransform: "uppercase" as const,
            letterSpacing: "0.25em",
            margin: "0 0 20px",
            opacity: 0.45,
          }}
        >
          The Guest Journey
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 200,
            margin: "0 0 80px",
            lineHeight: 1.15,
          }}
        >
          Seven touchpoints.
          <br />
          One unfiltered truth.
        </h2>

        {/* timeline */}
        <div style={{ position: "relative" }}>
          {/* connecting line — sits behind the cards */}
          <div
            style={{
              position: "absolute",
              top: 42,
              left: "calc(100% / 14)",
              right: "calc(100% / 14)",
              height: 1,
              background: S,
              zIndex: 0,
              display: "var(--timeline-line, block)",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 24,
              position: "relative",
              zIndex: 1,
            }}
          >
            {STEPS.map((step, i) => (
              <StepCard key={i} step={step} index={i} mounted={mounted} />
            ))}
          </div>
        </div>
      </Section>

      {/* ━━ WHAT WE ASSESS ━━ */}
      <Section bg={B} color={W} mounted={mounted}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* left */}
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.25em",
                margin: "0 0 20px",
                opacity: 0.4,
                color: S,
              }}
            >
              Assessment Areas
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 44px)",
                fontWeight: 200,
                margin: "0 0 28px",
                lineHeight: 1.15,
              }}
            >
              Every Detail
              <br />
              Matters
            </h2>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.8,
                opacity: 0.6,
                maxWidth: 380,
                margin: 0,
              }}
            >
              Our assessors are trained hospitality professionals with five-star
              experience. They know what excellence looks like — and they know
              exactly where to find the gaps.
            </p>
          </div>

          {/* right — 2×3 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            {ASSESS.map((item, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid rgba(218,220,226,0.12)`,
                  borderRadius: 6,
                  padding: "28px 24px",
                  background: "rgba(218,220,226,0.03)",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(218,220,226,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(218,220,226,0.03)";
                }}
              >
                <div style={{ marginBottom: 14 }}>{item.icon}</div>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    margin: "0 0 8px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 300,
                    margin: 0,
                    opacity: 0.5,
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ━━ WHAT YOU GET ━━ */}
      <Section bg={W} color={B} mounted={mounted}>
        <p
          style={{
            fontSize: 10,
            fontWeight: 500,
            textTransform: "uppercase" as const,
            letterSpacing: "0.25em",
            margin: "0 0 20px",
            opacity: 0.45,
          }}
        >
          Deliverables
        </p>
        <h2
          style={{
            fontSize: "clamp(26px, 3vw, 44px)",
            fontWeight: 200,
            margin: "0 0 64px",
            lineHeight: 1.15,
          }}
        >
          What You Get
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 28,
          }}
        >
          {DELIVERABLES.map((d, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${A}22`,
                borderRadius: 8,
                padding: "40px 32px",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(15,35,71,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  border: `1px solid ${S}`,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                {d.icon}
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  margin: "0 0 10px",
                  lineHeight: 1.35,
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 300,
                  margin: 0,
                  opacity: 0.55,
                  lineHeight: 1.7,
                }}
              >
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ━━ CTA ━━ */}
      <Section bg={W} color={B} mounted={mounted} style={{ padding: "120px 40px 180px", textAlign: "center" as const }}>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 40px)",
            fontWeight: 200,
            margin: "0 0 40px",
            lineHeight: 1.25,
          }}
        >
          Ready to see what your guests
          <br />
          actually experience?
        </h2>

        <a
          href="mailto:info@swisshospitalitycompany.com?subject=Mystery%20Guest%20Assessment%20Inquiry"
          style={{
            display: "inline-block",
            background: A,
            color: W,
            padding: "16px 48px",
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            textDecoration: "none",
            borderRadius: 4,
            transition: "opacity 0.3s ease",
            marginBottom: 32,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
          }}
        >
          Request an Assessment
        </a>

        <div>
          <Link
            href="/#services"
            style={{
              color: B,
              fontSize: 13,
              fontWeight: 300,
              textDecoration: "none",
              opacity: 0.45,
              letterSpacing: "0.06em",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.45";
            }}
          >
            ← Back to Services
          </Link>
        </div>
      </Section>
    </main>
  );
}

/* ─── step card sub-component ─── */
function StepCard({
  step,
  index,
  mounted,
}: {
  step: (typeof STEPS)[number];
  index: number;
  mounted: boolean;
}) {
  const { ref, visible } = useReveal(mounted);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center" as const,
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s`,
      }}
    >
      {/* accent dot */}
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: A,
          margin: "0 auto 28px",
          boxShadow: `0 0 0 4px ${W}, 0 0 0 5px ${S}`,
        }}
      />

      {/* card */}
      <div
        style={{
          border: `1px solid ${S}`,
          borderRadius: 8,
          padding: "28px 16px 24px",
          background: W,
          transition: "transform 0.35s ease, box-shadow 0.35s ease",
          cursor: "default",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "translateY(-6px)";
          el.style.boxShadow = "0 16px 48px rgba(15,35,71,0.07)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        <div style={{ marginBottom: 14, display: "flex", justifyContent: "center" }}>
          {step.icon}
        </div>
        <h3
          style={{
            fontSize: 13,
            fontWeight: 500,
            margin: "0 0 6px",
            letterSpacing: "0.03em",
          }}
        >
          {step.name}
        </h3>
        <p
          style={{
            fontSize: 12,
            fontWeight: 300,
            margin: 0,
            opacity: 0.5,
            lineHeight: 1.55,
          }}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}
