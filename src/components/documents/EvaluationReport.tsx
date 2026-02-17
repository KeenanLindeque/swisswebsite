"use client";

import { useState } from "react";

/* ── constants ───────────────────────────── */
const LOGO_FILTER = "brightness(0) saturate(100%) invert(11%) sepia(30%) saturate(2800%) hue-rotate(196deg) brightness(95%) contrast(95%)";
const LABEL: React.CSSProperties = { fontSize: 9, color: "var(--blue)", opacity: 0.3, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 };

/* ── Helpers ───────────────────────────── */
function Accent({ w = 48 }: { w?: number }) {
  return <div style={{ width: w, height: 1, backgroundColor: "var(--blue)", opacity: 0.1, marginBottom: 12 }} />;
}

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
      <div>
        <p style={{ ...LABEL, marginBottom: 12 }}>{title}</p>
        <Accent />
        <h2 style={{ fontSize: 22, fontWeight: 300, color: "var(--blue)" }}>{subtitle}</h2>
      </div>
      <img src="/logo.svg" alt="SHC" style={{ height: 22, opacity: 0.15, filter: LOGO_FILTER }} />
    </div>
  );
}

function ScoreInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const op = value >= 90 ? 1 : value >= 80 ? 0.65 : 0.4;
  return (
    <input
      type="number"
      min={0}
      max={100}
      className="doc-score"
      value={value}
      onChange={(e) => onChange(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
      style={{ color: "var(--blue)", opacity: op }}
    />
  );
}

function MiniBar({ score }: { score: number }) {
  const pct = Math.min(100, Math.max(0, score));
  const op = score >= 90 ? 0.65 : score >= 80 ? 0.4 : 0.25;
  return (
    <div className="doc-mini-bar" style={{ width: 48 }}>
      <div className="doc-mini-fill" style={{ width: `${pct}%`, backgroundColor: "var(--blue)", opacity: op }} />
    </div>
  );
}

function ScoreBar({ score }: { score: number }) {
  const pct = Math.min(100, Math.max(0, score));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ flex: 1, height: 4, backgroundColor: "rgba(218,220,226,0.4)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, backgroundColor: "var(--blue)", opacity: score >= 80 ? 0.65 : score >= 60 ? 0.35 : 0.2, transition: "width 0.4s ease", borderRadius: 2 }} />
      </div>
      <span style={{ fontSize: 11, fontWeight: 600, color: "var(--blue)", minWidth: 28, textAlign: "right" }}>{score}</span>
    </div>
  );
}

function DeptCircle({ score }: { score: number }) {
  const r = 13;
  const c = 2 * Math.PI * r;
  const fill = (score / 100) * c;
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" style={{ flexShrink: 0 }}>
      <circle cx="17" cy="17" r={r} fill="none" stroke="rgba(218,220,226,0.35)" strokeWidth="2" />
      <circle cx="17" cy="17" r={r} fill="none" stroke="var(--blue)" strokeWidth="2" strokeDasharray={`${fill} ${c}`} strokeLinecap="round" opacity={score >= 90 ? 0.7 : 0.45} style={{ transform: "rotate(-90deg)", transformOrigin: "center", transition: "stroke-dasharray 0.5s" }} />
      <text x="17" y="18" textAnchor="middle" dominantBaseline="middle" style={{ fontSize: 11, fontWeight: 600, fill: "var(--blue)" }}>{score}</text>
    </svg>
  );
}

/* ── Data ───────────────────────────── */
interface Item { point: string; score: number; note: string }
interface Dept { name: string; items: Item[] }

const defaultDepts: Dept[] = [
  {
    name: "Front Office & Reception",
    items: [
      { point: "Greeting within 10 seconds of arrival", score: 95, note: "Warm and immediate acknowledgment" },
      { point: "Eye contact and personalized welcome", score: 92, note: "Guest name used at check-in" },
      { point: "Check-in efficiency (under 5 minutes)", score: 88, note: "Minor delay during peak hours" },
      { point: "Room key presentation and orientation", score: 90, note: "Clear floor directions provided" },
      { point: "Luggage handling and escort to room", score: 94, note: "Offered within 30 seconds" },
      { point: "Knowledge of hotel facilities", score: 89, note: "Breakfast hours not proactively mentioned" },
      { point: "Telephone etiquette and response time", score: 86, note: "Answered within 3 rings average" },
      { point: "Guest recognition on repeat visit", score: 93, note: "Preferences noted from previous stay" },
    ],
  },
  {
    name: "Housekeeping & Room Standards",
    items: [
      { point: "Room cleanliness on arrival", score: 92, note: "Spotless presentation" },
      { point: "Bed making and linen quality", score: 94, note: "Excellent linen, tight turndown" },
      { point: "Bathroom cleanliness and amenities", score: 91, note: "All amenities fully stocked" },
      { point: "Minibar stocking and accuracy", score: 85, note: "One item missing from minibar list" },
      { point: "Turndown service timing and quality", score: 87, note: "Delivered by 19:30, curtains closed" },
      { point: "Response to extra amenity requests", score: 82, note: "12-minute wait for extra pillows" },
      { point: "Noise insulation and room comfort", score: 90, note: "Minimal corridor noise" },
      { point: "Maintenance and wear assessment", score: 84, note: "Minor scuff on bathroom door" },
    ],
  },
  {
    name: "Food & Beverage",
    items: [
      { point: "Restaurant greeting and seating", score: 88, note: "Prompt, reservation confirmed" },
      { point: "Menu presentation and knowledge", score: 86, note: "Allergen info on request" },
      { point: "Order accuracy", score: 92, note: "All orders correct across 4 meals" },
      { point: "Food quality and presentation", score: 90, note: "Excellent plating" },
      { point: "Beverage service and wine knowledge", score: 82, note: "Sommelier not available at lunch" },
      { point: "Timing between courses", score: 78, note: "22-min wait starter to main" },
      { point: "Breakfast buffet variety and freshness", score: 88, note: "Good range, eggs to order" },
      { point: "Room service quality and timing", score: 76, note: "38-min delivery, lukewarm" },
    ],
  },
  {
    name: "Concierge & Guest Services",
    items: [
      { point: "Proactive guest engagement", score: 96, note: "Outstanding — anticipated needs" },
      { point: "Local knowledge and recommendations", score: 95, note: "Detailed, personalized" },
      { point: "Reservation and booking assistance", score: 92, note: "Booked within 10 minutes" },
      { point: "Transportation arrangement", score: 91, note: "Car arrived exactly on time" },
      { point: "Special request handling", score: 94, note: "Birthday arrangement perfect" },
      { point: "Complaint resolution speed", score: 90, note: "Resolved in 8 minutes" },
      { point: "Follow-up on service recovery", score: 88, note: "Manager followed up next AM" },
    ],
  },
  {
    name: "Spa & Wellness",
    items: [
      { point: "Reception and welcome experience", score: 90, note: "Herbal tea on arrival" },
      { point: "Facility cleanliness and ambiance", score: 92, note: "Immaculate, excellent lighting" },
      { point: "Treatment quality and technique", score: 88, note: "Skilled therapist" },
      { point: "Therapist communication", score: 84, note: "Preferences not fully followed" },
      { point: "Changing room standards", score: 82, note: "Towels needed replenishing" },
      { point: "Pool and sauna maintenance", score: 86, note: "Pool temp ideal, sauna clean" },
    ],
  },
  {
    name: "Departure & Check-out",
    items: [
      { point: "Check-out efficiency", score: 92, note: "Express check-out smooth" },
      { point: "Bill accuracy and explanation", score: 88, note: "One charge queried, resolved" },
      { point: "Farewell and personalization", score: 94, note: "GM personal goodbye" },
      { point: "Luggage assistance", score: 91, note: "Bags at car within 3 minutes" },
      { point: "Transportation coordination", score: 89, note: "Car arranged as requested" },
      { point: "Post-stay follow-up", score: 86, note: "Thank-you email within 24h" },
    ],
  },
];

/* ══════════════════════════════════════════════
   MAIN
   ══════════════════════════════════════════════ */
export default function EvaluationReport() {
  const [hotel, setHotel] = useState("The Grand Palace Hotel");
  const [location, setLocation] = useState("Geneva, Switzerland");
  const [period, setPeriod] = useState("3–6 February 2026");
  const [reportDate, setReportDate] = useState("15 February 2026");
  const [reportRef, setReportRef] = useState("SHC-EVL-2026-0421");
  const [summaryText, setSummaryText] = useState(
    "The property demonstrates above-standard performance across all assessed departments. Service culture is strong with notable excellence in concierge and front office operations. Opportunities for improvement exist in F&B timing and room service delivery."
  );
  const [strengths, setStrengths] = useState([
    "Exceptional concierge and guest anticipation",
    "Consistent front office professionalism",
    "Outstanding linen and bed quality",
    "Strong complaint resolution procedures",
    "GM visibility and personal engagement",
  ]);
  const [improvements, setImprovements] = useState([
    "Room service delivery speed and temperature",
    "F&B timing between courses at dinner",
    "Minibar accuracy and restocking",
    "Spa changing room maintenance during peak",
    "Proactive breakfast information at check-in",
  ]);
  const [depts, setDepts] = useState<Dept[]>(defaultDepts);

  const updateItem = (di: number, ii: number, field: keyof Item, value: string | number) => {
    setDepts((prev) => prev.map((d, i) => i !== di ? d : { ...d, items: d.items.map((it, j) => j !== ii ? it : { ...it, [field]: value }) }));
  };
  const updateDeptName = (di: number, v: string) => {
    setDepts((p) => p.map((d, i) => (i !== di ? d : { ...d, name: v })));
  };

  const deptScore = (d: Dept) => d.items.length ? Math.round(d.items.reduce((s, i) => s + i.score, 0) / d.items.length) : 0;
  const overallScore = depts.length ? Math.round(depts.reduce((s, d) => s + deptScore(d), 0) / depts.length) : 0;
  const totalPages = 5;

  const renderDept = (dept: Dept, di: number, isLast = false) => (
    <div key={di} style={{ marginBottom: isLast ? 0 : 24 }}>
      <div className="doc-dept-head">
        <DeptCircle score={deptScore(dept)} />
        <input
          className="doc-input"
          value={dept.name}
          onChange={(e) => updateDeptName(di, e.target.value)}
          style={{ fontSize: 13, fontWeight: 500, color: "var(--blue)", flex: 1 }}
        />
      </div>
      {dept.items.map((item, ii) => (
        <div className="doc-row" key={ii}>
          <input className="doc-input" value={item.point} onChange={(e) => updateItem(di, ii, "point", e.target.value)} style={{ flex: 1, fontSize: 11, color: "var(--blue)", fontWeight: 300, opacity: 0.7 }} />
          <input className="doc-input" value={item.note} onChange={(e) => updateItem(di, ii, "note", e.target.value)} style={{ fontSize: 9, color: "var(--blue)", opacity: 0.2, fontWeight: 400, width: 150, textAlign: "right", fontStyle: "italic" }} />
          <MiniBar score={item.score} />
          <ScoreInput value={item.score} onChange={(v) => updateItem(di, ii, "score", v)} />
        </div>
      ))}
    </div>
  );

  const metaField = (l: string, v: string, set: (s: string) => void) => (
    <div key={l}>
      <p style={{ ...LABEL, marginBottom: 6 }}>{l}</p>
      <input className="doc-input" value={v} onChange={(e) => set(e.target.value)} style={{ fontSize: 11, color: "var(--blue)", fontWeight: 500 }} />
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

      {/* ══ PAGE 1 — Cover ══════════════════════ */}
      <div className="doc-page">
        <div style={{ height: 4, backgroundColor: "var(--blue)" }} />
        <div style={{ flex: 1, padding: "56px 56px 0", display: "flex", flexDirection: "column" }}>
          <img src="/logo.svg" alt="SHC" style={{ height: 36, marginBottom: 80, filter: LOGO_FILTER }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ ...LABEL, marginBottom: 20 }}>Confidential Assessment Report</p>
            <Accent w={64} />
            <h1 style={{ fontSize: 38, fontWeight: 200, color: "var(--blue)", lineHeight: 1.15, marginBottom: 12 }}>
              Hotel Quality<br /><span style={{ fontWeight: 600 }}>Evaluation Report</span>
            </h1>
            <p style={{ fontSize: 11, color: "var(--blue)", opacity: 0.4, fontWeight: 300, marginTop: 16, lineHeight: 1.7, maxWidth: 420 }}>
              Mystery guest assessment and operational quality evaluation for <strong style={{ fontWeight: 500 }}>{hotel}</strong>, {location}.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, borderTop: "1px solid var(--silver)", paddingTop: 28, paddingBottom: 28 }}>
            {metaField("Property", hotel, setHotel)}
            {metaField("Location", location, setLocation)}
            {metaField("Assessment Period", period, setPeriod)}
            {metaField("Report Date", reportDate, setReportDate)}
            {metaField("Report Ref.", reportRef, setReportRef)}
            <div>
              <p style={{ ...LABEL, marginBottom: 6 }}>Classification</p>
              <p style={{ fontSize: 11, color: "var(--blue)", fontWeight: 500, padding: "2px 4px" }}>Confidential</p>
            </div>
          </div>
        </div>
        <div className="doc-footer">
          <p>Swiss Hospitality Company — Confidential</p>
          <p>Page 1 of {totalPages}</p>
        </div>
      </div>

      {/* ══ PAGE 2 — Executive Summary ═════════ */}
      <div className="doc-page">
        <div style={{ height: 4, backgroundColor: "var(--blue)" }} />
        <div className="doc-body">
          <PageHeader title="Executive Summary" subtitle="Overall Assessment" />

          <div style={{ display: "flex", alignItems: "center", gap: 36, marginBottom: 36, padding: "24px 32px", border: "1px solid var(--silver)", borderRadius: 2 }}>
            <div style={{ position: "relative", width: 86, height: 86, flexShrink: 0 }}>
              <svg width="86" height="86" viewBox="0 0 86 86" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="43" cy="43" r="38" fill="none" stroke="rgba(218,220,226,0.3)" strokeWidth="2.5" />
                <circle cx="43" cy="43" r="38" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeDasharray={`${(overallScore / 100) * 238.8} 238.8`} strokeLinecap="round" opacity="0.65" style={{ transition: "stroke-dasharray 0.5s ease" }} />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 22, fontWeight: 300, color: "var(--blue)" }}>{overallScore}</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: "var(--blue)", marginBottom: 6 }}>
                {overallScore >= 90 ? "Distinguished Hospitality" : overallScore >= 80 ? "Commended Excellence" : "Verified Quality"}
              </p>
              <textarea className="doc-area" value={summaryText} onChange={(e) => setSummaryText(e.target.value)} rows={3} style={{ fontSize: 11, color: "var(--blue)", opacity: 0.4, lineHeight: 1.7, fontWeight: 300 }} />
            </div>
          </div>

          <p style={{ ...LABEL, marginBottom: 12 }}>Department Scores</p>
          <Accent />
          <div style={{ marginBottom: 32 }}>
            {depts.map((d) => (
              <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 0", borderBottom: "1px solid rgba(218,220,226,0.3)" }}>
                <span style={{ fontSize: 11, color: "var(--blue)", fontWeight: 400, flex: "0 0 190px" }}>{d.name}</span>
                <div style={{ flex: 1 }}><ScoreBar score={deptScore(d)} /></div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 32, flex: 1 }}>
            <div style={{ flex: 1 }}>
              <p style={{ ...LABEL, marginBottom: 10 }}>Key Strengths</p>
              <Accent w={32} />
              {strengths.map((s, i) => (
                <div className="doc-bullet" key={i}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--blue)", opacity: 0.15, marginTop: 7, flexShrink: 0 }} />
                  <input className="doc-input" value={s} onChange={(e) => setStrengths((p) => p.map((x, j) => j === i ? e.target.value : x))} style={{ fontSize: 11, color: "var(--blue)", opacity: 0.4, fontWeight: 300 }} />
                </div>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ ...LABEL, marginBottom: 10 }}>Areas for Improvement</p>
              <Accent w={32} />
              {improvements.map((s, i) => (
                <div className="doc-bullet" key={i}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--blue)", opacity: 0.15, marginTop: 7, flexShrink: 0 }} />
                  <input className="doc-input" value={s} onChange={(e) => setImprovements((p) => p.map((x, j) => j === i ? e.target.value : x))} style={{ fontSize: 11, color: "var(--blue)", opacity: 0.4, fontWeight: 300 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="doc-footer">
          <p>Swiss Hospitality Company — Confidential</p>
          <p>Page 2 of {totalPages}</p>
        </div>
      </div>

      {/* ══ PAGE 3 — Depts 1-2 ════════════════ */}
      <div className="doc-page">
        <div style={{ height: 4, backgroundColor: "var(--blue)" }} />
        <div className="doc-body">
          <PageHeader title="Detailed Assessment" subtitle="Department Breakdown" />
          {renderDept(depts[0], 0)}
          {renderDept(depts[1], 1, true)}
        </div>
        <div className="doc-footer">
          <p>Swiss Hospitality Company — Confidential</p>
          <p>Page 3 of {totalPages}</p>
        </div>
      </div>

      {/* ══ PAGE 4 — Depts 3-4 ════════════════ */}
      <div className="doc-page">
        <div style={{ height: 4, backgroundColor: "var(--blue)" }} />
        <div className="doc-body">
          <PageHeader title="Detailed Assessment — Continued" subtitle="Department Breakdown" />
          {renderDept(depts[2], 2)}
          {renderDept(depts[3], 3, true)}
        </div>
        <div className="doc-footer">
          <p>Swiss Hospitality Company — Confidential</p>
          <p>Page 4 of {totalPages}</p>
        </div>
      </div>

      {/* ══ PAGE 5 — Depts 5-6 + Signature ════ */}
      <div className="doc-page">
        <div style={{ height: 4, backgroundColor: "var(--blue)" }} />
        <div className="doc-body">
          <PageHeader title="Detailed Assessment — Continued" subtitle="Department Breakdown" />
          {renderDept(depts[4], 4)}
          {renderDept(depts[5], 5)}

          <div style={{ marginTop: "auto", borderTop: "1px solid var(--silver)", paddingTop: 24, paddingBottom: 12, display: "flex", gap: 56 }}>
            <div>
              <div style={{ width: 148, borderBottom: "1px solid rgba(15,35,71,0.1)", marginBottom: 10, paddingBottom: 32 }} />
              <p style={{ fontSize: 11, color: "var(--blue)", fontWeight: 500 }}>Lead Assessor</p>
              <p style={{ fontSize: 10, color: "var(--blue)", opacity: 0.4, fontWeight: 300 }}>Swiss Hospitality Company</p>
            </div>
            <div>
              <div style={{ width: 148, borderBottom: "1px solid rgba(15,35,71,0.1)", marginBottom: 10, paddingBottom: 32 }} />
              <p style={{ fontSize: 11, color: "var(--blue)", fontWeight: 500 }}>Quality Director</p>
              <p style={{ fontSize: 10, color: "var(--blue)", opacity: 0.4, fontWeight: 300 }}>Swiss Hospitality Company</p>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.2, textAlign: "right" }}>
                This report is confidential and intended<br />solely for the assessed property.
              </p>
            </div>
          </div>
        </div>
        <div className="doc-footer">
          <p>Swiss Hospitality Company — Confidential</p>
          <p>Page 5 of {totalPages}</p>
        </div>
      </div>
    </div>
  );
}
