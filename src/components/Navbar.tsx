"use client";

import { useState, useEffect, useRef } from "react";

const serviceLinks = [
  { label: "Mystery Guest Assessments", href: "/services/mystery-guest" },
  { label: "Quality Certification", href: "/services/quality-certification" },
  { label: "Recognition Program", href: "/services/recognition" },
  { label: "Executive Advisory", href: "/services/executive-advisory" },
  { label: "Hospitality Intelligence", href: "/services/hospitality-intelligence" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
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
        <a href="/" className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.svg" alt="Swiss Hospitality Company" style={{ height: 28, width: "auto", display: "block", transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s" }} />
        </a>

        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 52 }}>
          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="nav-link"
              style={{
                position: "relative",
                color: "var(--silver)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                paddingBottom: 3,
                opacity: servicesOpen ? 1 : 0.6,
                transition: "opacity 0.4s, color 0.4s",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Services
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.3s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0)" }}>
                <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                paddingTop: 16,
                opacity: servicesOpen ? 1 : 0,
                pointerEvents: servicesOpen ? "auto" : "none",
                transition: "opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div style={{
                backgroundColor: "rgba(15, 35, 71, 0.97)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(218,220,226,0.08)",
                padding: "12px 0",
                minWidth: 260,
              }}>
                {serviceLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="nav-dropdown-item"
                    style={{
                      display: "block",
                      padding: "12px 28px",
                      color: "var(--silver)",
                      fontSize: 12,
                      fontWeight: 300,
                      letterSpacing: "0.04em",
                      textDecoration: "none",
                      transition: "all 0.3s",
                      opacity: 0.6,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.paddingLeft = "32px"; e.currentTarget.style.backgroundColor = "rgba(218,220,226,0.04)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.6"; e.currentTarget.style.paddingLeft = "28px"; e.currentTarget.style.backgroundColor = "transparent"; }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="nav-link"
            style={{
              position: "relative",
              color: "var(--silver)",
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              transition: "color 0.4s, opacity 0.4s",
              paddingBottom: 3,
              opacity: 0.6,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--silver)"; e.currentTarget.style.opacity = "0.6"; }}
          >
            Contact
          </a>
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
        <div style={{ position: "fixed", inset: 0, backgroundColor: "var(--blue)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36, zIndex: 99 }}>
          {serviceLinks.map((link) => (
            <a key={link.label} href={link.href} style={{ color: "var(--white)", fontSize: 20, fontWeight: 200, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <div style={{ width: 40, height: 1, backgroundColor: "var(--silver)", opacity: 0.1, margin: "8px 0" }} />
          <a href="#contact" style={{ color: "var(--silver)", fontSize: 16, fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", opacity: 0.6 }} onClick={() => setMobileOpen(false)}>
            Contact
          </a>
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
          background: var(--silver);
          opacity: 0.3;
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
