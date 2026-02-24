"use client";

import { useState, useEffect, useRef } from "react";
import { Shield, Crown, ArrowRight } from "./Icons";

function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis] as const;
}

/* ── Color Swatches ──────────────────────────── */
function ColorSwatches() {
  const colors = [
    { name: "Alpine Blue", value: "#0f2347", text: "#F3F3F5" },
    { name: "Snow White", value: "#F3F3F5", text: "#0f2347" },
    { name: "Silver Standard", value: "#dadce2", text: "#0f2347" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, height: "100%" }}>
      {colors.map((c) => (
        <div key={c.name} style={{ flex: 1, backgroundColor: c.value, padding: "20px 24px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: c.text, letterSpacing: "0.05em" }}>{c.name}</span>
          <span style={{ fontSize: 11, fontWeight: 300, color: c.text, opacity: 0.5, fontFamily: "monospace" }}>{c.value}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Form Inputs ──────────────────────────── */
function FormInputs() {
  const [focused, setFocused] = useState<string | null>(null);
  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    padding: "14px 16px",
    border: `1px solid ${focused === name ? "var(--blue)" : "var(--silver)"}`,
    backgroundColor: "transparent",
    fontSize: 14,
    fontFamily: "inherit",
    color: "var(--blue)",
    outline: "none",
    transition: "border-color 0.3s",
    fontWeight: 300,
  });
  return (
    <div style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", opacity: 0.3, marginBottom: 2 }}>Form Inputs</p>
      <div>
        <label style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--blue)", opacity: 0.4, display: "block", marginBottom: 6 }}>Hotel Name</label>
        <input style={inputStyle("name")} placeholder="The Ritz-Carlton" onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
      </div>
      <div>
        <label style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--blue)", opacity: 0.4, display: "block", marginBottom: 6 }}>Email Address</label>
        <input style={inputStyle("email")} placeholder="gm@hotel.com" onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
      </div>
      <div>
        <label style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--blue)", opacity: 0.4, display: "block", marginBottom: 6 }}>Property Type</label>
        <select style={{ ...inputStyle("type"), cursor: "pointer", appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%230f2347' stroke-width='1' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }} onFocus={() => setFocused("type")} onBlur={() => setFocused(null)}>
          <option>Luxury Hotel</option>
          <option>Boutique Property</option>
          <option>Resort & Spa</option>
        </select>
      </div>
    </div>
  );
}

/* ── Range Sliders ──────────────────────────── */
function RangeSliders() {
  const [serviceScore, setServiceScore] = useState(87);
  const [roomScore, setRoomScore] = useState(92);
  const [fbScore, setFbScore] = useState(78);

  const sliderTrack = (value: number): React.CSSProperties => ({
    width: "100%",
    appearance: "none" as const,
    height: 3,
    outline: "none",
    cursor: "pointer",
    borderRadius: 0,
    background: `linear-gradient(to right, var(--blue) ${value}%, var(--silver) ${value}%)`,
  });

  return (
    <div style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column", gap: 20 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", opacity: 0.3 }}>Score Sliders</p>
      {[
        { label: "Service Quality", value: serviceScore, set: setServiceScore },
        { label: "Room Standards", value: roomScore, set: setRoomScore },
        { label: "F&B Experience", value: fbScore, set: setFbScore },
      ].map((s) => (
        <div key={s.label}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 12, color: "var(--blue)", fontWeight: 400, letterSpacing: "0.02em" }}>{s.label}</span>
            <span style={{ fontSize: 14, color: "var(--blue)", fontWeight: 600 }}>{s.value}</span>
          </div>
          <input type="range" min={0} max={100} value={s.value} onChange={(e) => s.set(Number(e.target.value))} style={sliderTrack(s.value)} />
        </div>
      ))}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          background: var(--blue);
          border: 2px solid var(--white);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 0 1px var(--blue);
        }
        input[type="range"]::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: var(--blue);
          border: 2px solid var(--white);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 0 1px var(--blue);
        }
      `}</style>
    </div>
  );
}

/* ── Toggles & Checkboxes ──────────────────────────── */
function TogglesSwitches() {
  const [toggles, setToggles] = useState([true, false, true, false]);
  const [checks, setChecks] = useState([true, true, false]);

  const flip = (i: number) => setToggles((t) => t.map((v, j) => (j === i ? !v : v)));
  const check = (i: number) => setChecks((c) => c.map((v, j) => (j === i ? !v : v)));

  const toggleLabels = ["Mystery Guest", "Quality Certification", "Recognition", "Advisory"];
  const checkLabels = ["Front Office", "Housekeeping", "F&B"];

  return (
    <div style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", opacity: 0.3 }}>Toggles</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {toggleLabels.map((label, i) => (
          <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }} onClick={() => flip(i)}>
            <span style={{ fontSize: 13, color: "var(--blue)", fontWeight: 300, opacity: toggles[i] ? 1 : 0.4, transition: "opacity 0.3s" }}>{label}</span>
            <div style={{ width: 38, height: 20, borderRadius: 10, backgroundColor: toggles[i] ? "var(--blue)" : "var(--silver)", transition: "background-color 0.3s", position: "relative", flexShrink: 0 }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "var(--white)", position: "absolute", top: 2, left: toggles[i] ? 20 : 2, transition: "left 0.3s cubic-bezier(0.22,1,0.36,1)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid var(--silver)", paddingTop: 14, marginTop: 4, display: "flex", flexDirection: "column", gap: 12 }}>
        <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", opacity: 0.3 }}>Checkboxes</p>
        {checkLabels.map((label, i) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => check(i)}>
            <div style={{ width: 18, height: 18, border: `1px solid ${checks[i] ? "var(--blue)" : "var(--silver)"}`, backgroundColor: checks[i] ? "var(--blue)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", flexShrink: 0 }}>
              {checks[i] && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="var(--white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            </div>
            <span style={{ fontSize: 13, color: "var(--blue)", fontWeight: 300 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Buttons ──────────────────────────── */
function Buttons() {
  return (
    <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: 14, justifyContent: "center", height: "100%" }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", opacity: 0.3, marginBottom: 2 }}>Buttons</p>
      <button style={{ padding: "14px 32px", backgroundColor: "var(--blue)", color: "var(--white)", border: "1px solid var(--blue)", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>Primary Action</button>
      <button style={{ padding: "14px 32px", backgroundColor: "transparent", color: "var(--blue)", border: "1px solid var(--blue)", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit", fontWeight: 400 }}>Secondary Action</button>
      <button style={{ padding: "14px 32px", backgroundColor: "transparent", color: "var(--blue)", border: "1px solid var(--silver)", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit", fontWeight: 300 }}>Tertiary</button>
      <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", paddingTop: 4 }}>
        <span style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue)", fontWeight: 400, borderBottom: "1px solid var(--silver)", paddingBottom: 2 }}>Text Link</span>
        <ArrowRight size={12} color="var(--blue)" />
      </div>
    </div>
  );
}

/* ── Card Preview ──────────────────────────── */
function CardPreview() {
  return (
    <div style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", opacity: 0.3 }}>Card Component</p>
      <div style={{ border: "1px solid var(--silver)", padding: "28px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 36, height: 36, border: "1px solid var(--silver)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Shield size={18} color="var(--blue)" />
            </div>
            <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.3 }}>01</span>
          </div>
          <h4 style={{ fontSize: 17, fontWeight: 500, color: "var(--blue)", marginBottom: 8 }}>Verified Quality</h4>
          <p style={{ fontSize: 13, color: "#717580", lineHeight: 1.6, fontWeight: 300 }}>Hotels demonstrating consistent operational standards.</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue)", opacity: 0.4 }}>Learn more</span>
          <ArrowRight size={12} color="var(--blue)" />
        </div>
      </div>
    </div>
  );
}

/* ── Dark Card Preview ──────────────────────────── */
function DarkCardPreview() {
  return (
    <div style={{ padding: "28px", height: "100%", backgroundColor: "var(--blue)", display: "flex", flexDirection: "column", gap: 16 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--silver)", opacity: 0.3 }}>Dark Variant</p>
      <div style={{ border: "1px solid rgba(218,220,226,0.08)", padding: "28px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ marginBottom: 20, color: "var(--silver)" }}>
            <Crown size={24} color="currentColor" />
          </div>
          <h4 style={{ fontSize: 17, fontWeight: 400, color: "var(--white)", marginBottom: 8 }}>Distinguished Hospitality</h4>
          <p style={{ fontSize: 13, color: "var(--silver)", lineHeight: 1.6, fontWeight: 300, opacity: 0.5 }}>Exceptional establishments with measurable excellence.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 20 }}>
          {["Assessment-based", "Independently reviewed"].map((t) => (
            <span key={t} style={{ padding: "6px 14px", border: "1px solid rgba(218,220,226,0.1)", fontSize: 11, color: "var(--silver)", fontWeight: 300 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Score Indicator ──────────────────────────── */
function ScoreIndicator() {
  return (
    <div style={{ padding: "28px", height: "100%", backgroundColor: "var(--blue)", display: "flex", flexDirection: "column", gap: 16 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--silver)", opacity: 0.3 }}>Score Display</p>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 16 }}>
        <div style={{ width: 100, height: 100, borderRadius: "50%", border: "2px solid rgba(218,220,226,0.15)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <svg width="100" height="100" viewBox="0 0 100 100" style={{ position: "absolute", transform: "rotate(-90deg)" }}>
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(218,220,226,0.06)" strokeWidth="2" />
            <circle cx="50" cy="50" r="46" fill="none" stroke="var(--silver)" strokeWidth="2" strokeDasharray={`${0.92 * 289} ${289}`} strokeLinecap="round" opacity="0.4" />
          </svg>
          <span style={{ fontSize: 28, fontWeight: 200, color: "var(--white)" }}>92</span>
        </div>
        <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--silver)", opacity: 0.4 }}>Overall Score</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {[{ l: "Service", v: 94 }, { l: "F&B", v: 88 }, { l: "Rooms", v: 91 }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 18, fontWeight: 200, color: "var(--white)", marginBottom: 2 }}>{s.v}</p>
            <p style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--silver)", opacity: 0.3 }}>{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Tag / Pill Examples ──────────────────────────── */
function TagExamples() {
  const tags = ["Luxury", "Five-Star", "Boutique", "Resort", "Chain", "Independent"];
  return (
    <div style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column" }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", opacity: 0.3, marginBottom: 16 }}>Tags & Labels</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flex: 1, alignContent: "start" }}>
        {tags.map((t) => (
          <span key={t} style={{ padding: "8px 18px", border: "1px solid var(--silver)", fontSize: 12, color: "var(--blue)", fontWeight: 300, letterSpacing: "0.04em" }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <span style={{ padding: "6px 14px", backgroundColor: "var(--blue)", color: "var(--white)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>Active</span>
        <span style={{ padding: "6px 14px", backgroundColor: "var(--silver)", color: "var(--blue)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 400 }}>Inactive</span>
        <span style={{ padding: "6px 14px", border: "1px solid var(--blue)", color: "var(--blue)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 400 }}>Outline</span>
      </div>
    </div>
  );
}

/* ── Dividers & Accents ──────────────────────────── */
function DividersAccents() {
  return (
    <div style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column" }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", opacity: 0.3, marginBottom: 20 }}>Dividers & Accents</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1, justifyContent: "center" }}>
        <div>
          <p style={{ fontSize: 9, opacity: 0.3, marginBottom: 8, fontFamily: "monospace" }}>1px solid — section break</p>
          <div style={{ height: 1, backgroundColor: "var(--silver)" }} />
        </div>
        <div>
          <p style={{ fontSize: 9, opacity: 0.3, marginBottom: 8, fontFamily: "monospace" }}>accent stripe — 48px</p>
          <div style={{ width: 48, height: 1, backgroundColor: "var(--blue)", opacity: 0.4 }} />
        </div>
        <div>
          <p style={{ fontSize: 9, opacity: 0.3, marginBottom: 8, fontFamily: "monospace" }}>accent stripe — 64px bold</p>
          <div style={{ width: 64, height: 2, backgroundColor: "var(--blue)", opacity: 0.2 }} />
        </div>
        <div>
          <p style={{ fontSize: 9, opacity: 0.3, marginBottom: 8, fontFamily: "monospace" }}>dot separator</p>
          <div style={{ display: "flex", gap: 8 }}>{[...Array(14)].map((_, i) => <div key={i} style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: "var(--blue)", opacity: 0.1 }} />)}</div>
        </div>
        <div>
          <p style={{ fontSize: 9, opacity: 0.3, marginBottom: 8, fontFamily: "monospace" }}>gradient fade</p>
          <div style={{ height: 2, background: "linear-gradient(to right, var(--blue), transparent)", opacity: 0.15 }} />
        </div>
      </div>
    </div>
  );
}

/* ── Notification Toasts ──────────────────────────── */
function NotificationToasts() {
  const [dismissed, setDismissed] = useState<number[]>([]);
  const toasts = [
    { type: "success", text: "Quality assessment completed successfully" },
    { type: "info", text: "New mystery guest report available" },
    { type: "warning", text: "2 departments below threshold" },
  ];
  return (
    <div style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column" }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", opacity: 0.3, marginBottom: 20 }}>Notifications</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, justifyContent: "center" }}>
        {toasts.map((t, i) => {
          const gone = dismissed.includes(i);
          const accent = t.type === "success" ? "#1a7a4c" : t.type === "warning" ? "#8a6d2b" : "var(--blue)";
          return (
            <div
              key={t.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 16px",
                border: "1px solid var(--silver)",
                opacity: gone ? 0.25 : 1,
                transform: gone ? "translateX(8px)" : "translateX(0)",
                transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
                cursor: "pointer",
                textDecoration: gone ? "line-through" : "none",
              }}
              onClick={() => setDismissed((d) => d.includes(i) ? d.filter((x) => x !== i) : [...d, i])}
            >
              <div style={{ width: 3, height: 28, backgroundColor: accent, flexShrink: 0, opacity: 0.7 }} />
              <span style={{ fontSize: 12, color: "var(--blue)", fontWeight: 300, flex: 1, lineHeight: 1.4 }}>{t.text}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.25 }}>
                <path d="M18 6L6 18M6 6l12 12" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   BENTO GRID
   ══════════════════════════════════════════════ */
export default function BrandBento() {
  const [ref, vis] = useVisible(0.05);

  const anim = (delay: number) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translate3d(0,0,0)" : "translate3d(0,24px,0)",
    transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  const cell = (delay: number): React.CSSProperties => ({
    ...anim(delay),
    border: "1px solid var(--silver)",
    overflow: "hidden",
    backgroundColor: "var(--white)",
  });

  return (
    <section style={{ padding: "120px 0 0", backgroundColor: "var(--white)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ ...anim(0), marginBottom: 24 }}>
          <p style={{ color: "var(--blue)", fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 400, opacity: 0.4 }}>
            Brand System
          </p>
        </div>
        <div style={{ ...anim(0.08), maxWidth: 560, marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 300, color: "var(--blue)", lineHeight: 1.25 }}>
            Visual identity &{" "}
            <span style={{ fontWeight: 600 }}>UI components</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "minmax(200px, auto)", gap: 2 }}>
          {/* Row 1: Colors (1col tall) | Form Inputs (2col) | Buttons (1col tall) */}
          <div style={{ ...cell(0.1), gridRow: "span 2" }}>
            <ColorSwatches />
          </div>
          <div style={{ ...cell(0.15), gridColumn: "span 2" }}>
            <FormInputs />
          </div>
          <div style={{ ...cell(0.2), gridRow: "span 2" }}>
            <Buttons />
          </div>

          {/* Row 2 (continued): Sliders (2col) */}
          <div style={{ ...cell(0.25), gridColumn: "span 2" }}>
            <RangeSliders />
          </div>

          {/* Row 3: Card | Dark Card | Score | Tags */}
          <div style={cell(0.3)}>
            <CardPreview />
          </div>
          <div style={{ ...cell(0.35), border: "none" }}>
            <DarkCardPreview />
          </div>
          <div style={{ ...cell(0.4), border: "none" }}>
            <ScoreIndicator />
          </div>
          <div style={cell(0.45)}>
            <TagExamples />
          </div>

          {/* Row 4: Toggles (1col) | Dividers (1col) | Notifications (2col) */}
          <div style={cell(0.5)}>
            <TogglesSwitches />
          </div>
          <div style={cell(0.55)}>
            <DividersAccents />
          </div>
          <div style={{ ...cell(0.6), gridColumn: "span 2" }}>
            <NotificationToasts />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bento-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        @media (max-width: 600px) {
          .bento-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
