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
  const border = dark ? "rgba(218,220,226,0.08)" : "rgba(218,220,226,0.35)";
  const accent = dark ? "var(--silver)" : "var(--blue)";

  const [headerRef, headerVis] = useVisible(0.2);
  const [columnsRef, columnsVis] = useVisible(0.1);

  const anim = (visible: boolean, delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,32px,0)",
    transition: `opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  const allColumns = [
    ...items.map((item) => ({ heading: item.heading, list: item.list })),
    ...(deliverable ? [{ heading: deliverable.heading, list: deliverable.list }] : []),
  ];

  return (
    <section
      id={id}
      style={{
        padding: "140px 0",
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
            marginBottom: 88,
            flexDirection: reversed ? "row-reverse" : "row",
          }}
        >
          <div style={{ ...anim(headerVis, 0), flex: "0 0 360px" }}>
            <span style={{ fontSize: 72, fontWeight: 200, color: text, opacity: 0.04, lineHeight: 1, display: "block", marginBottom: -8 }}>
              {number}
            </span>
            <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 200, color: text, lineHeight: 1.2, marginBottom: 16 }}>
              {title}
            </h3>
            <p style={{ fontSize: 14, fontWeight: 400, color: muted, letterSpacing: "0.08em", fontStyle: "italic", opacity: 0.6 }}>
              {tagline}
            </p>
          </div>
          <div style={{ ...anim(headerVis, 0.15), flex: 1 }}>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: text, fontWeight: 300, opacity: 0.7, maxWidth: 580 }}>
              {description}
            </p>
          </div>
        </div>

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
                padding: "36px 0",
                borderTop: `1px solid ${border}`,
              }}
            >
              <h4 style={{ fontSize: 11, fontWeight: 500, color: text, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 28, opacity: 0.4 }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {col.list.map((li, liIdx) => (
                  <li
                    key={li}
                    style={{
                      fontSize: 15,
                      color: muted,
                      lineHeight: 1.7,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      opacity: columnsVis ? 1 : 0,
                      transform: columnsVis ? "translateX(0)" : "translateX(-12px)",
                      transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${colIdx * 0.15 + liIdx * 0.06}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${colIdx * 0.15 + liIdx * 0.06}s`,
                    }}
                  >
                    <span style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: dark ? "var(--silver)" : "var(--blue)", opacity: 0.2, marginTop: 10, flexShrink: 0 }} />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {footnote && (
          <p style={{ marginTop: 56, fontSize: 15, fontStyle: "italic", color: muted, fontWeight: 300, opacity: 0.5 }}>
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
