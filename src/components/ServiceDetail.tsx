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
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
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
  const border = dark ? "rgba(218,220,226,0.08)" : "var(--silver)";

  const [headerRef, headerVis] = useVisible(0.2);
  const [columnsRef, columnsVis] = useVisible(0.1);

  const anim = (visible: boolean, delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  const allColumns = [
    ...items.map((item) => ({ heading: item.heading, list: item.list })),
    ...(deliverable ? [{ heading: deliverable.heading, list: deliverable.list }] : []),
  ];

  return (
    <section
      id={id}
      style={{
        padding: "120px 0",
        backgroundColor: bg,
        borderTop: `1px solid ${border}`,
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        {/* Header row */}
        <div
          ref={headerRef}
          className="svc-header"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 80,
            marginBottom: 80,
            flexDirection: reversed ? "row-reverse" : "row",
          }}
        >
          <div style={{ ...anim(headerVis, 0), flex: "0 0 360px" }}>
            <span style={{ fontSize: 80, fontWeight: 200, color: text, opacity: 0.06, lineHeight: 1, display: "block", marginBottom: -12 }}>
              {number}
            </span>
            <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 300, color: text, lineHeight: 1.2, marginBottom: 16 }}>
              {title}
            </h3>
            <p style={{ fontSize: 15, fontWeight: 500, color: muted, letterSpacing: "0.06em", fontStyle: "italic" }}>
              {tagline}
            </p>
          </div>
          <div style={{ ...anim(headerVis, 0.15), flex: 1 }}>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: text, fontWeight: 300, opacity: 0.75, maxWidth: 600 }}>
              {description}
            </p>
          </div>
        </div>

        {/* Content columns with staggered items */}
        <div
          ref={columnsRef}
          className="svc-columns"
          style={{ display: "flex", gap: 32, flexWrap: "wrap" }}
        >
          {allColumns.map((col, colIdx) => (
            <div
              key={col.heading}
              style={{
                ...anim(columnsVis, colIdx * 0.15),
                flex: "1 1 280px",
                padding: "32px 0",
                borderTop: `1px solid ${border}`,
              }}
            >
              <h4 style={{ fontSize: 13, fontWeight: 500, color: text, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24, opacity: 0.5 }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {col.list.map((li, liIdx) => (
                  <li
                    key={li}
                    style={{
                      fontSize: 15,
                      color: muted,
                      lineHeight: 1.6,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      opacity: columnsVis ? 1 : 0,
                      transform: columnsVis ? "translateX(0)" : "translateX(-12px)",
                      transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${colIdx * 0.15 + liIdx * 0.06}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${colIdx * 0.15 + liIdx * 0.06}s`,
                    }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: dark ? "var(--silver)" : "var(--blue)", opacity: 0.2, marginTop: 9, flexShrink: 0 }} />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {footnote && (
          <p style={{ marginTop: 48, fontSize: 16, fontStyle: "italic", color: muted, fontWeight: 300, opacity: 0.6 }}>
            {footnote}
          </p>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .svc-header { flex-direction: column !important; gap: 32px !important; }
          .svc-header > div:first-child { flex: 1 !important; }
        }
      `}</style>
    </section>
  );
}
