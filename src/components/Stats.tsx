"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Hotels Assessed" },
  { value: 40, suffix: "+", label: "Countries" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
];

function useCounter(target: number, visible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let frame: number;
    const duration = 2200;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, visible]);
  return count;
}

function StatItem({ value, suffix, label, visible, delay }: { value: number; suffix: string; label: string; visible: boolean; delay: number }) {
  const count = useCounter(value, visible);
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        padding: "0 24px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : "translate3d(0,24px,0)",
        transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <div style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", fontWeight: 200, color: "var(--white)", lineHeight: 1, marginBottom: 12 }}>
        {count}
        <span style={{ fontSize: "0.5em", color: "var(--silver)", opacity: 0.4 }}>{suffix}</span>
      </div>
      <p style={{ fontSize: 11, color: "var(--silver)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 300, opacity: 0.35 }}>
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <section style={{ padding: "110px 0", backgroundColor: "var(--blue)", borderTop: "1px solid rgba(218,220,226,0.06)" }}>
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
          <StatItem key={s.label} {...s} visible={visible} delay={i * 0.12} />
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
