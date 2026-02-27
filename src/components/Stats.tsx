"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Hotels Assessed" },
  { value: 40, suffix: "+", label: "Countries" },
  { value: 98, suffix: "%", label: "Retention" },
  { value: 15, suffix: "+", label: "Years" },
];

function useCounter(target: number, visible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let frame: number;
    const duration = 4200;
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

function StatItem({ value, suffix, label, visible, delay }: { value: number; suffix: string; label: string; visible: boolean; delay: number }) {
  const count = useCounter(value, visible);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "0 48px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : "translate3d(0,24px,0)",
        transition: `all 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <div style={{
        fontSize: "clamp(4rem, 8vw, 7rem)",
        fontWeight: 100,
        color: "var(--white)",
        lineHeight: 1,
        marginBottom: 20,
        letterSpacing: "-0.03em",
      }}>
        {count}
        <span style={{ fontSize: "0.4em", color: "var(--silver)", opacity: 0.25, letterSpacing: "0" }}>{suffix}</span>
      </div>
      <p style={{
        fontSize: 10,
        color: "var(--silver)",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        fontWeight: 300,
        opacity: 0.2,
      }}>
        {label}
      </p>
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
    <section style={{ padding: "200px 0", backgroundColor: "var(--blue)", borderTop: "1px solid rgba(218,220,226,0.04)" }}>
      <div
        ref={ref}
        className="stats-grid"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          justifyContent: "center",
          gap: 80,
        }}
      >
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} visible={visible} delay={i * 0.15} />
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { flex-wrap: wrap !important; gap: 64px !important; }
          .stats-grid > div { flex: 0 0 45% !important; }
        }
      `}</style>
    </section>
  );
}
