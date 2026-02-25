"use client";

import { useEffect, useRef, useState } from "react";

interface ImageDividerProps {
  src: string;
  alt: string;
  height?: number;
  overlayOpacity?: number;
  position?: string;
  fadeTop?: string;
  fadeBottom?: string;
}

export default function ImageDivider({
  src,
  alt,
  height = 480,
  overlayOpacity = 0.2,
  position = "center",
  fadeTop = "rgba(15, 35, 71, 0.12)",
  fadeBottom = "rgba(15, 35, 71, 0.12)",
}: ImageDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: "100px" }
    );
    obs.observe(el);

    const onScroll = () => {
      if (!visible) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      setOffset((center - viewCenter) * 0.12);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={alt}
      className="img-divider"
      style={{
        position: "relative",
        height,
        overflow: "hidden",
      }}
    >
      {/* Image with parallax + Ken Burns when visible */}
      <div
        className={visible ? "img-divider-bg img-divider-bg--visible" : "img-divider-bg"}
        style={{
          position: "absolute",
          top: "-25%",
          left: 0,
          right: 0,
          bottom: "-25%",
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: position,
          transform: `translateY(${offset}px)`,
          willChange: "transform",
        }}
      />

      {/* Color overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "var(--blue)",
          opacity: overlayOpacity,
          transition: "opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Top edge fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          background: `linear-gradient(to bottom, ${fadeTop}, transparent)`,
          pointerEvents: "none",
        }}
      />

      {/* Bottom edge fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          background: `linear-gradient(to top, ${fadeBottom}, transparent)`,
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes imgDividerKenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }
        .img-divider-bg--visible {
          animation: imgDividerKenBurns 20s ease-in-out infinite alternate;
        }
        @media (max-width: 768px) {
          .img-divider { height: 300px !important; }
        }
      `}</style>
    </div>
  );
}
