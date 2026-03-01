"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Shield, Star, Crown } from "@/components/Icons";

/* ── Data ───────────────────────────────────────────────────────────── */

const tiers = [
  {
    Icon: Shield,
    tier: "Tier I",
    name: "Verified Quality",
    quote: "Your hotel passed. Operations sound, service consistent.",
    criteria: ["Consistent operations", "Service standards met", "Guest satisfaction"],
    accentBorder: 2,
    bgTint: "transparent",
  },
  {
    Icon: Star,
    tier: "Tier II",
    name: "Commended Excellence",
    quote: "Top 20% of assessed properties. Hotels that set the standard.",
    criteria: ["Above-average scores", "Proactive service culture", "Operational distinction"],
    accentBorder: 3,
    bgTint: "rgba(218,220,226,0.04)",
  },
  {
    Icon: Crown,
    tier: "Tier III",
    name: "Distinguished Hospitality",
    quote: "Fewer than 1 in 10. The properties that define hospitality.",
    criteria: ["Top 10% worldwide", "Exceptional in every area", "Industry benchmark"],
    accentBorder: 4,
    bgTint: "rgba(218,220,226,0.06)",
  },
];

const principles = [
  {
    label: "Assessment-based",
    description: "Earned through rigorous on-site evaluation, not self-reporting.",
    iconPath: "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2 M8 2h8v4H8V2z M9 12h6M9 16h4",
  },
  {
    label: "Time-bound",
    description: "Recognition must be renewed — quality isn\u2019t permanent.",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Independently reviewed",
    description: "No hotel can influence, sponsor, or purchase recognition.",
    iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    label: "Free from commercial influence",
    description: "Our assessors have zero commercial relationship with assessed hotels.",
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
];

const benefits = [
  {
    title: "Official Recognition Certificate & Quality Seal",
    description: "A verified credential your guests, partners, and competitors will recognise — backed by independent assessment, not self-declaration.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Featured Listing on SwissHospitality.com",
    description: "Visibility among travellers and industry professionals actively searching for independently verified hospitality excellence.",
    iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "Use of the SHC Quality Mark in Marketing & Sales",
    description: "Licence to display the Swiss Hospitality Company quality mark across your website, collateral, and booking channels.",
    iconPath: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
];

/* ── Page ────────────────────────────────────────────────────────────── */

export default function RecognitionPage() {
  const [r1, s1] = useReveal({ delay: 0 });
  const [r2, s2] = useReveal({ delay: 0.12 });
  const [r3, s3] = useReveal({ delay: 0 });
  const [r4, s4] = useReveal({ delay: 0 });
  const [r5, s5] = useReveal({ delay: 0 });
  const [r6, s6] = useReveal({ delay: 0 });
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);
  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          backgroundColor: "var(--blue)",
          color: "var(--white)",
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
            color: "var(--white)",
            opacity: 0.03,
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "-0.04em",
            zIndex: 0,
          }}
        >
          03
        </span>
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <a
            href="/"
            style={{
              color: "var(--white)",
              textDecoration: "none",
              fontSize: 14,
              letterSpacing: "0.12em",
              fontWeight: 300,
              opacity: 0.6,
              display: "inline-block",
              marginBottom: 64,
              transition: "opacity 0.4s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            &larr; Back
          </a>

          <div ref={r1} style={s1}>
            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 80px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Recognition Program
            </h1>
            <p
              style={{
                fontSize: "clamp(18px, 2.2vw, 24px)",
                fontWeight: 300,
                fontStyle: "italic",
                opacity: 0.5,
                margin: "28px 0 0",
                lineHeight: 1.5,
              }}
            >
              You Can&apos;t Buy It. You Earn It.
            </p>
          </div>

          <div ref={r2} style={{ ...s2, maxWidth: 640 }}>
            <p
              style={{
                fontSize: "clamp(16px, 1.6vw, 20px)",
                color: "var(--white)",
                fontWeight: 300,
                lineHeight: 1.8,
                margin: "36px 0 0",
                opacity: 0.75,
              }}
            >
              No sponsorship. No membership fee. The Swiss Hospitality
              recognition is awarded exclusively through independent
              assessment&nbsp;&mdash; making it the most credible quality signal
              a hotel can carry.
            </p>
          </div>
        </div>
      </section>

      {/* ── Three-Tier Infographic ────────────────────────────────── */}
      <section
        style={{
          padding: "180px 0 200px",
          backgroundColor: "var(--white)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
          <div ref={r3} style={s3}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: "var(--blue)",
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                opacity: 0.35,
                display: "block",
                marginBottom: 16,
              }}
            >
              Recognition Tiers
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 200,
                color: "var(--blue)",
                lineHeight: 1.2,
                marginBottom: 80,
                letterSpacing: "-0.01em",
              }}
            >
              Three levels. One standard of truth.
            </h2>
          </div>

          <div
            className="tier-grid"
            style={{ display: "flex", gap: 24, alignItems: "stretch" }}
          >
            {tiers.map((t, i) => {
              const isHovered = hoveredTier === i;
              const prominence = i; // 0 = subtle, 1 = medium, 2 = high
              return (
                <div
                  key={t.tier}
                  className="tier-card"
                  style={{
                    flex: 1,
                    position: "relative",
                    padding: "56px 44px 52px",
                    backgroundColor: isHovered
                      ? `rgba(218,220,226,${0.04 + prominence * 0.02})`
                      : t.bgTint,
                    borderLeft: `${t.accentBorder}px solid var(--accent)`,
                    border: `1px solid rgba(15,35,71,${0.06 + prominence * 0.02})`,
                    borderLeftWidth: t.accentBorder,
                    borderLeftColor: `rgba(218,220,226,${0.2 + prominence * 0.15})`,
                    transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? "0 20px 60px rgba(15,35,71,0.08)"
                      : "0 2px 12px rgba(15,35,71,0.02)",
                    cursor: "default",
                    overflow: "hidden",
                  }}
                  onMouseEnter={() => setHoveredTier(i)}
                  onMouseLeave={() => setHoveredTier(null)}
                >
                  {/* Tier badge + icon */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      marginBottom: 32,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `1px solid rgba(218,220,226,${0.12 + prominence * 0.1})`,
                        backgroundColor: `rgba(218,220,226,${prominence * 0.04})`,
                        transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                        transform: isHovered ? "scale(1.06)" : "scale(1)",
                      }}
                    >
                      <t.Icon
                        size={20}
                        color={`rgba(218,220,226,${0.4 + prominence * 0.2})`}
                      />
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 500,
                          color: "var(--accent)",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase" as const,
                          opacity: 0.5 + prominence * 0.15,
                        }}
                      >
                        {t.tier}
                      </span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 300,
                      color: "var(--blue)",
                      marginBottom: 16,
                      lineHeight: 1.3,
                    }}
                  >
                    {t.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--blue)",
                      lineHeight: 1.8,
                      fontWeight: 300,
                      opacity: isHovered ? 0.6 : 0.45,
                      transition: "opacity 0.5s",
                      marginBottom: 32,
                      fontStyle: "italic",
                    }}
                  >
                    {t.quote}
                  </p>

                  {/* Criteria tags */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {t.criteria.map((c) => (
                      <div
                        key={c}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          fontSize: 13,
                          color: "var(--blue)",
                          fontWeight: 300,
                          opacity: isHovered ? 0.65 : 0.4,
                          transition: "opacity 0.6s",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flexShrink: 0, opacity: 0.7 }}
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {c}
                      </div>
                    ))}
                  </div>

                  {/* Subtle tier number watermark */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: -12,
                      right: 20,
                      fontSize: 120,
                      fontWeight: 200,
                      color: "var(--blue)",
                      opacity: isHovered ? 0.04 : 0.02,
                      lineHeight: 1,
                      transition: "opacity 0.6s",
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Principles ────────────────────────────────────────────── */}
      <section
        style={{
          padding: "180px 0 200px",
          backgroundColor: "var(--blue)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
          <div ref={r4} style={s4}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: "var(--silver)",
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                opacity: 0.35,
                display: "block",
                marginBottom: 16,
              }}
            >
              Our Principles
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 200,
                color: "var(--white)",
                lineHeight: 1.2,
                marginBottom: 80,
                letterSpacing: "-0.01em",
              }}
            >
              What Makes Our Recognition Different
            </h2>
          </div>

          <div
            ref={r5}
            className="principles-grid"
            style={{ ...s5, display: "flex", gap: 20 }}
          >
            {principles.map((p, i) => {
              const isHovered = hoveredPrinciple === i;
              return (
                <div
                  key={p.label}
                  className="principle-card"
                  style={{
                    flex: 1,
                    padding: "48px 36px 44px",
                    border: `1px solid ${isHovered ? "rgba(218,220,226,0.15)" : "rgba(218,220,226,0.06)"}`,
                    backgroundColor: isHovered
                      ? "rgba(218,220,226,0.03)"
                      : "transparent",
                    transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    cursor: "default",
                  }}
                  onMouseEnter={() => setHoveredPrinciple(i)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(218,220,226,0.15)",
                      marginBottom: 32,
                      transition: "border-color 0.5s",
                      borderColor: isHovered
                        ? "rgba(218,220,226,0.3)"
                        : "rgba(218,220,226,0.15)",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--silver)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ opacity: 0.6 }}
                    >
                      <path d={p.iconPath} />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 300,
                      color: "var(--white)",
                      marginBottom: 14,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {p.label}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--silver)",
                      lineHeight: 1.8,
                      fontWeight: 300,
                      opacity: isHovered ? 0.55 : 0.4,
                      transition: "opacity 0.5s",
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: "180px 0 200px",
          backgroundColor: "var(--white)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
          <div ref={r6} style={s6}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: "var(--blue)",
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                opacity: 0.35,
                display: "block",
                marginBottom: 16,
              }}
            >
              For Qualified Hotels
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 200,
                color: "var(--blue)",
                lineHeight: 1.2,
                marginBottom: 80,
                letterSpacing: "-0.01em",
              }}
            >
              What Qualified Hotels Receive
            </h2>
          </div>

          <div
            className="benefits-grid"
            style={{ display: "flex", gap: 24 }}
          >
            {benefits.map((b, i) => {
              const isHovered = hoveredBenefit === i;
              return (
                <div
                  key={b.title}
                  className="benefit-card"
                  style={{
                    flex: 1,
                    padding: "56px 44px 52px",
                    border: `1px solid ${isHovered ? "rgba(15,35,71,0.1)" : "rgba(15,35,71,0.06)"}`,
                    backgroundColor: isHovered
                      ? "rgba(15,35,71,0.015)"
                      : "transparent",
                    transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    cursor: "default",
                  }}
                  onMouseEnter={() => setHoveredBenefit(i)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(218,220,226,0.12)",
                      marginBottom: 36,
                      transition: "border-color 0.5s",
                      borderColor: isHovered
                        ? "rgba(218,220,226,0.25)"
                        : "rgba(218,220,226,0.12)",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ opacity: 0.6 }}
                    >
                      <path d={b.iconPath} />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 300,
                      color: "var(--blue)",
                      marginBottom: 16,
                      lineHeight: 1.4,
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--blue)",
                      lineHeight: 1.8,
                      fontWeight: 300,
                      opacity: isHovered ? 0.6 : 0.45,
                      transition: "opacity 0.5s",
                    }}
                  >
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>




      {/* ── Responsive overrides ──────────────────────────────────── */}
      <style>{`
        @media (max-width: 960px) {
          .tier-grid { flex-direction: column !important; }
          .principles-grid { flex-direction: column !important; }
          .benefits-grid { flex-direction: column !important; }
        }
      `}</style>
    </>
  );
}
