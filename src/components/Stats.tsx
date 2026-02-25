"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Hotels Assessed Worldwide" },
  { value: 40, suffix: "+", label: "Countries & Territories" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
  { value: 15, suffix: "+", label: "Years Setting the Standard" },
];

function useCounter(target: number, visible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let frame: number;
    const duration = 3800;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 5);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, visible]);
  return count;
}

function StatItem({ value, suffix, label, visible, delay, isLast }: { value: number; suffix: string; label: string; visible: boolean; delay: number; isLast: boolean }) {
  const count = useCounter(value, visible);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        padding: "0 24px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : "translate3d(0,24px,0)",
        transition: `all 1.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        display: "flex",
        alignItems: "center",
        gap: 0,
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
          fontWeight: 100,
          color: "var(--white)",
          lineHeight: 1,
          marginBottom: 12,
          transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}>
          {count}
          <span style={{ fontSize: "0.5em", color: "var(--silver)", opacity: 0.3, transition: "opacity 0.8s", ...(hovered ? { opacity: 0.6 } : {}) }}>{suffix}</span>
        </div>
        <p style={{
          fontSize: 10,
          color: "var(--silver)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          fontWeight: 300,
          opacity: hovered ? 0.6 : 0.25,
          transition: "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}>
          {label}
        </p>
      </div>
      {!isLast && (
        <div style={{
          width: 1,
          height: 48,
          background: "linear-gradient(to bottom, transparent, rgba(218,220,226,0.08), transparent)",
          flexShrink: 0,
        }} />
      )}
    </div>
  );
}

export default function Stats() {
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
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.unobserve(el);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  return (
    <section style={{ padding: "160px 0", backgroundColor: "var(--blue)", borderTop: "1px solid rgba(218,220,226,0.04)" }}>
      <div
        ref={ref}
        className="stats-grid"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          gap: 0,
        }}
      >
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} visible={visible} delay={i * 0.12} isLast={i === stats.length - 1} />
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { flex-wrap: wrap !important; gap: 48px !important; }
          .stats-grid > div { flex: 0 0 50% !important; }
        }
      `}</style>
    </section>
  );
}
