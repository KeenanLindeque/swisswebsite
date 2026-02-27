"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Recognition", href: "#recognition" },
  { label: "Services", href: "#what-we-do" },
  { label: "Intelligence", href: "/services/hospitality-intelligence" },
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
        transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        backgroundColor: scrolled ? "rgba(15, 35, 71, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(218,220,226,0.06)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: scrolled ? "16px 48px" : "32px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <a
          href="#"
          className="nav-logo"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src="/logo.svg" alt="Swiss Hospitality Company" style={{ height: 28, width: "auto", display: "block", transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s" }} />
        </a>

        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 52 }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{
                position: "relative",
                color: "var(--silver)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                transition: "color 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                paddingBottom: 3,
                opacity: 0.6,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.opacity = "1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--silver)"; e.currentTarget.style.opacity = "0.6"; }}
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
            <span style={{ display: "block", height: 1, backgroundColor: "var(--white)", transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)", width: 24, transform: mobileOpen ? "rotate(45deg) translateY(0.5px)" : "none" }} />
            {!mobileOpen && <span style={{ display: "block", height: 1, backgroundColor: "var(--white)", width: 16, transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }} />}
            <span style={{ display: "block", height: 1, backgroundColor: "var(--white)", transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)", width: 24, transform: mobileOpen ? "rotate(-45deg) translateY(-0.5px)" : "none" }} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "var(--blue)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 48, zIndex: 99 }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={{ color: "var(--white)", fontSize: 24, fontWeight: 200, letterSpacing: "0.25em", textTransform: "uppercase" }} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav-logo:hover img {
          transform: scale(1.03);
          opacity: 0.85;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          opacity: 0.7;
          transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
