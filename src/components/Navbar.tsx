"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Recognition", href: "#recognition" },
  { label: "Advisory", href: "#advisory" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        backgroundColor: scrolled ? "rgba(15, 35, 71, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(218,220,226,0.08)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: scrolled ? "16px 48px" : "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.svg" alt="Swiss Hospitality Company" style={{ height: 28, width: "auto", display: "block" }} />
        </a>

        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 48 }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "var(--silver)",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--silver)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="nav-mobile-btn"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, zIndex: 101 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div style={{ width: 24, display: "flex", flexDirection: "column", gap: mobileOpen ? 0 : 6, alignItems: "flex-end" }}>
            <span style={{ display: "block", height: 1, backgroundColor: "var(--white)", transition: "all 0.3s", width: 24, transform: mobileOpen ? "rotate(45deg) translateY(0.5px)" : "none" }} />
            {!mobileOpen && <span style={{ display: "block", height: 1, backgroundColor: "var(--white)", width: 16, transition: "all 0.3s" }} />}
            <span style={{ display: "block", height: 1, backgroundColor: "var(--white)", transition: "all 0.3s", width: 24, transform: mobileOpen ? "rotate(-45deg) translateY(-0.5px)" : "none" }} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "var(--blue)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40, zIndex: 99 }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={{ color: "var(--white)", fontSize: 28, fontWeight: 300, letterSpacing: "0.15em", textTransform: "uppercase" }} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
