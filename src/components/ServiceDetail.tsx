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

  const [headerRef, headerVis] = useVisible(0.2);
  const [columnsRef, columnsVis] = useVisible(0.1);

  const anim = (visible: boolean, delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : "translate3d(0,32px,0)",
    transition: `opacity 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  const allColumns = [
    ...items.map((item) => ({ heading: item.heading, list: item.list })),
    ...(deliverable ? [{ heading: deliverable.heading, list: deliverable.list }] : []),
  ];

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
          style={{ display: "flex", gap: 32, flexWrap: "wrap" }}
        >
          {allColumns.map((col, colIdx) => (
            <div
              key={col.heading}
              style={{
                ...anim(columnsVis, colIdx * 0.15),
                flex: "1 1 280px",
                padding: "44px 0",
                borderTop: `1px solid ${border}`,
              }}
            >
              <h4 style={{ fontSize: 10, fontWeight: 500, color: text, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 32, opacity: 0.35 }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                {col.list.map((li, liIdx) => (
                  <li
                    key={li}
                    className="svc-list-item"
                    style={{
                      fontSize: 15,
                      color: muted,
                      lineHeight: 1.7,
                      fontWeight: 300,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      opacity: columnsVis ? 0.75 : 0,
                      transform: columnsVis ? "translateX(0)" : "translateX(-16px)",
                      transition: `opacity 1s cubic-bezier(0.22, 1, 0.36, 1) ${colIdx * 0.15 + liIdx * 0.07}s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${colIdx * 0.15 + liIdx * 0.07}s`,
                    }}
                  >
                    <span style={{
                      width: 3,
                      height: 3,
                      borderRadius: "50%",
                      backgroundColor: dark ? "var(--silver)" : "var(--blue)",
                      opacity: 0.15,
                      marginTop: 10,
                      flexShrink: 0,
                      transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                    }} />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {footnote && (
          <p style={{ marginTop: 64, fontSize: 15, fontStyle: "italic", color: muted, fontWeight: 300, opacity: 0.4 }}>
            {footnote}
          </p>
        )}
      </div>

      <style>{`
        .svc-list-item:hover {
          opacity: 1 !important;
        }
        .svc-list-item {
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        .svc-list-item:hover span:first-child {
          transform: scale(2);
          opacity: 0.4 !important;
        }
        @media (max-width: 900px) {
          .svc-header { flex-direction: column !important; gap: 40px !important; }
          .svc-header > div:first-child { flex: 1 !important; }
        }
      `}</style>
    </section>
  );
}
