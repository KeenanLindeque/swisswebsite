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
  y = 40,
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
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  };

  return [ref, style];
}
