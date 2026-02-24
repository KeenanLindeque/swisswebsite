"use client";

import { useEffect, useRef, useCallback } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  const current = useRef(0);
  const target = useRef(0);

  const lerp = useCallback(() => {
    current.current += (target.current - current.current) * 0.08;
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${current.current}) translate3d(0,0,0)`;
    }
    if (Math.abs(target.current - current.current) > 0.0001) {
      raf.current = requestAnimationFrame(lerp);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      target.current = h > 0 ? window.scrollY / h : 0;
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(lerp);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, [lerp]);

  return (
    <div
      ref={barRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: "100%",
        backgroundColor: "var(--silver)",
        zIndex: 200,
        transformOrigin: "left",
        transform: "scaleX(0) translate3d(0,0,0)",
        willChange: "transform",
      }}
    />
  );
}
