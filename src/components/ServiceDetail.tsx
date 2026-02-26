"use client";

import { useEffect, useRef, useState } from "react";

interface ServiceDetailProps {
  id?: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  items: { heading: string; list: string[] }[];
  deliverable?: { heading: string; list: string[] };
  footnote?: string;
  reversed?: boolean;
  dark?: boolean;
}

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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, mounted]);
  return [ref, visible] as const;
}

const itemIcons = [
  "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0v-6a1 1 0 011-1h2a1 1 0 011 1v6m-6 0h6",
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6",
  "M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z",
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  "M5 13l4 4L19 7",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
];

const deliverableIcons = [
  "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  "M9 5l7 7-7 7",
];

function ItemIcon({ index, dark }: { index: number; dark: boolean }) {
  const d = itemIcons[index % itemIcons.length];
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={dark ? "var(--silver)" : "var(--blue)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3, flexShrink: 0, marginTop: 2 }}>
      <path d={d} />
    </svg>
  );
}

function DeliverableIcon({ index, dark }: { index: number; dark: boolean }) {
  const d = deliverableIcons[index % deliverableIcons.length];
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={dark ? "var(--white)" : "var(--blue)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d={d} />
    </svg>
  );
}

export default function ServiceDetail({
  id,
  number,
  title,
  tagline,
  description,
  items,
  deliverable,
  footnote,
  reversed = false,
  dark = false,
}: ServiceDetailProps) {
  const bg = dark ? "var(--blue)" : "var(--white)";
  const text = dark ? "var(--white)" : "var(--blue)";
  const muted = dark ? "var(--silver)" : "#717580";
  const border = dark ? "rgba(218,220,226,0.06)" : "rgba(15,35,71,0.06)";
  const cardBg = dark ? "rgba(218,220,226,0.03)" : "rgba(15,35,71,0.02)";
  const tagBorder = dark ? "rgba(218,220,226,0.1)" : "rgba(15,35,71,0.08)";

  const [headerRef, headerVis] = useVisible(0.2);
  const [columnsRef, columnsVis] = useVisible(0.1);

  const anim = (visible: boolean, delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,32px,0)",
    transition: `opacity 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  return (
    <section
      id={id}
      style={{
        padding: "200px 0",
        backgroundColor: bg,
        borderTop: `1px solid ${border}`,
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        <div
          ref={headerRef}
          className="svc-header"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 80,
            marginBottom: 120,
            flexDirection: reversed ? "row-reverse" : "row",
          }}
        >
          <div style={{ ...anim(headerVis, 0), flex: "0 0 360px" }}>
            <span style={{
              fontSize: 72,
              fontWeight: 200,
              color: text,
              lineHeight: 1,
              display: "block",
              marginBottom: -8,
              transition: "opacity 2s cubic-bezier(0.22, 1, 0.36, 1)",
              opacity: headerVis ? 0.04 : 0,
            }}>
              {number}
            </span>
            <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 200, color: text, lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em" }}>
              {title}
            </h3>
            <p style={{ fontSize: 13, fontWeight: 400, color: muted, letterSpacing: "0.05em", fontStyle: "italic", opacity: 0.5 }}>
              {tagline}
            </p>
          </div>
          <div style={{ ...anim(headerVis, 0.18), flex: 1 }}>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: text, fontWeight: 300, opacity: 0.55, maxWidth: 580 }}>
              {description}
            </p>
          </div>
        </div>

        <div
          ref={columnsRef}
          className="svc-columns"
          style={{ display: "flex", gap: 40, flexWrap: "wrap" }}
        >
          {/* Items as icon-labeled cards */}
          {items.map((col, colIdx) => (
            <div
              key={col.heading}
              style={{
                ...anim(columnsVis, colIdx * 0.15),
                flex: "1 1 320px",
              }}
            >
              <h4 style={{ fontSize: 10, fontWeight: 500, color: text, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 28, opacity: 0.35 }}>
                {col.heading}
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {col.list.map((li, liIdx) => (
                  <div
                    key={li}
                    className="svc-card"
                    style={{
                      padding: "20px 20px",
                      border: `1px solid ${tagBorder}`,
                      backgroundColor: cardBg,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      opacity: columnsVis ? 1 : 0,
                      transform: columnsVis ? "translateY(0)" : "translateY(12px)",
                      transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${colIdx * 0.15 + liIdx * 0.06}s`,
                      cursor: "default",
                    }}
                  >
                    <ItemIcon index={liIdx} dark={dark} />
                    <span style={{
                      fontSize: 14,
                      color: text,
                      fontWeight: 300,
                      lineHeight: 1.5,
                      opacity: 0.65,
                    }}>
                      {li}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Deliverables as tags */}
          {deliverable && (
            <div
              style={{
                ...anim(columnsVis, items.length * 0.15),
                flex: "1 1 280px",
              }}
            >
              <h4 style={{ fontSize: 10, fontWeight: 500, color: text, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 28, opacity: 0.35 }}>
                {deliverable.heading}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {deliverable.list.map((li, liIdx) => (
                  <div
                    key={li}
                    className="svc-tag"
                    style={{
                      padding: "16px 20px",
                      border: `1px solid ${tagBorder}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      opacity: columnsVis ? 1 : 0,
                      transform: columnsVis ? "translateX(0)" : "translateX(-12px)",
                      transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${items.length * 0.15 + liIdx * 0.08}s`,
                      cursor: "default",
                    }}
                  >
                    <div style={{
                      width: 28,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: `1px solid ${dark ? "rgba(218,220,226,0.15)" : "rgba(218,220,226,0.2)"}`,
                      opacity: 0.7,
                    }}>
                      <DeliverableIcon index={liIdx} dark={dark} />
                    </div>
                    <span style={{
                      fontSize: 14,
                      color: text,
                      fontWeight: 300,
                      lineHeight: 1.5,
                      opacity: 0.65,
                    }}>
                      {li}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {footnote && (
          <p style={{ marginTop: 64, fontSize: 15, fontStyle: "italic", color: muted, fontWeight: 300, opacity: 0.4 }}>
            {footnote}
          </p>
        )}
      </div>

      <style>{`
        .svc-card {
          transition: all 1s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        .svc-card:hover {
          border-color: ${dark ? "rgba(218,220,226,0.2)" : "rgba(218,220,226,0.4)"} !important;
          transform: translateY(-2px) !important;
        }
        .svc-tag {
          transition: all 1s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        .svc-tag:hover {
          border-color: ${dark ? "rgba(218,220,226,0.2)" : "rgba(218,220,226,0.4)"} !important;
          background-color: ${dark ? "rgba(218,220,226,0.03)" : "rgba(218,220,226,0.06)"};
        }
        @media (max-width: 900px) {
          .svc-header { flex-direction: column !important; gap: 40px !important; }
          .svc-header > div:first-child { flex: 1 !important; }
          .svc-columns > div > div[style*="grid"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
