"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";

interface RevealOptions {
  threshold?: number;
  delay?: number;
  y?: number;
  once?: boolean;
}

export function useReveal({
  threshold = 0.15,
  delay = 0,
  y = 36,
  once = true,
}: RevealOptions = {}): [React.RefObject<HTMLDivElement | null>, CSSProperties] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
    transition: `opacity 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    willChange: "opacity, transform",
  };

  return [ref, style];
}
