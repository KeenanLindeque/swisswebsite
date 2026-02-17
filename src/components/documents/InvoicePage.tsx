"use client";

import { useState } from "react";

const LOGO_FILTER = "brightness(0) saturate(100%) invert(11%) sepia(30%) saturate(2800%) hue-rotate(196deg) brightness(95%) contrast(95%)";
const LABEL: React.CSSProperties = { fontSize: 9, color: "var(--blue)", opacity: 0.3, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 };

interface LineItem { desc: string; detail: string; qty: number; rate: number }

const defaultItems: LineItem[] = [
  { desc: "Mystery Guest Assessment — Full Property", detail: "3-night stay, all F&B outlets, spa & wellness", qty: 1, rate: 8500 },
  { desc: "Quality & Operational Certification", detail: "Front office, housekeeping, F&B, engineering", qty: 1, rate: 12000 },
  { desc: "Executive Quality Advisory Session", detail: "Half-day leadership debrief & strategy session", qty: 1, rate: 4500 },
  { desc: "Recognition Program Evaluation", detail: "Assessment for Swiss Hospitality Recognition seal", qty: 1, rate: 3200 },
  { desc: "Comprehensive Report & Documentation", detail: "Scored indicators, gap analysis, improvement roadmap", qty: 1, rate: 2800 },
];

const fmt = (n: number) => n.toLocaleString("en-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function InvoicePage() {
  const [items, setItems] = useState<LineItem[]>(defaultItems);
  const [invoiceNo, setInvoiceNo] = useState("SHC-2026-0847");
  const [date, setDate] = useState("15 February 2026");
  const [dueDate, setDueDate] = useState("17 March 2026");
  const [billName, setBillName] = useState("The Grand Palace Hotel");
  const [billAttn, setBillAttn] = useState("Attn: Mr. Alexander Richter, General Manager");
  const [billAddr, setBillAddr] = useState("Quai du Mont-Blanc 19, 1201 Geneva, Switzerland");
  const [subject, setSubject] = useState("Comprehensive Quality Assessment & Certification — Q1 2026");

  const updateItem = (i: number, field: keyof LineItem, val: string | number) => {
    setItems((prev) => prev.map((it, j) => j !== i ? it : { ...it, [field]: val }));
  };

  const subtotal = items.reduce((s, i) => s + i.qty * i.rate, 0);
  const vat = subtotal * 0.077;
  const total = subtotal + vat;

  return (
    <div className="doc-page">
      <div style={{ height: 4, backgroundColor: "var(--blue)" }} />
      <div className="doc-body-tight">
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div>
            <img src="/logo.svg" alt="SHC" style={{ height: 34, marginBottom: 14, filter: LOGO_FILTER }} />
            <p style={{ fontSize: 10, color: "var(--blue)", opacity: 0.4, lineHeight: 1.8, fontWeight: 300 }}>
              Swiss Hospitality Company<br />Bahnhofstrasse 42<br />8001 Zürich, Switzerland<br />info@swisshospitality.com
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 28, fontWeight: 200, color: "var(--blue)", letterSpacing: "-0.02em", marginBottom: 14 }}>Invoice</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[
                ["Invoice No.", invoiceNo, setInvoiceNo],
                ["Date", date, setDate],
                ["Due Date", dueDate, setDueDate],
              ].map(([l, v, set]) => (
                <div key={l as string} style={{ display: "flex", justifyContent: "flex-end", gap: 20, alignItems: "center" }}>
                  <span style={LABEL}>{l as string}</span>
                  <input className="doc-input" value={v as string} onChange={(e) => (set as (s: string) => void)(e.target.value)} style={{ fontSize: 11, color: "var(--blue)", fontWeight: 500, width: 140, textAlign: "right" }} />
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 20 }}>
                <span style={LABEL}>Currency</span>
                <span style={{ fontSize: 11, color: "var(--blue)", fontWeight: 500, minWidth: 140, textAlign: "right", padding: "2px 4px" }}>CHF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bill To */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ ...LABEL, marginBottom: 6 }}>Bill To</p>
          <div style={{ width: 40, height: 1, backgroundColor: "var(--blue)", opacity: 0.1, marginBottom: 8 }} />
          <input className="doc-input" value={billName} onChange={(e) => setBillName(e.target.value)} style={{ fontSize: 13, color: "var(--blue)", fontWeight: 500, marginBottom: 3 }} />
          <input className="doc-input" value={billAttn} onChange={(e) => setBillAttn(e.target.value)} style={{ fontSize: 11, color: "var(--blue)", opacity: 0.4, fontWeight: 300, marginBottom: 2 }} />
          <input className="doc-input" value={billAddr} onChange={(e) => setBillAddr(e.target.value)} style={{ fontSize: 11, color: "var(--blue)", opacity: 0.4, fontWeight: 300 }} />
        </div>

        {/* Subject */}
        <div style={{ padding: "10px 0", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)", marginBottom: 18, display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ ...LABEL, flexShrink: 0 }}>Subject</span>
          <input className="doc-input" value={subject} onChange={(e) => setSubject(e.target.value)} style={{ fontSize: 11, color: "var(--blue)", fontWeight: 400 }} />
        </div>

        {/* Table Header */}
        <div style={{ display: "flex", padding: "8px 0", borderBottom: "2px solid var(--blue)" }}>
          <span style={{ flex: 1, ...LABEL }}>Description</span>
          <span style={{ width: 50, ...LABEL, textAlign: "center" }}>Qty</span>
          <span style={{ width: 100, ...LABEL, textAlign: "right" }}>Rate</span>
          <span style={{ width: 100, ...LABEL, textAlign: "right" }}>Amount</span>
        </div>

        {/* Line Items */}
        {items.map((item, i) => (
          <div className="doc-inv-row" key={i}>
            <div style={{ flex: 1 }}>
              <input className="doc-input" value={item.desc} onChange={(e) => updateItem(i, "desc", e.target.value)} style={{ fontSize: 11, color: "var(--blue)", fontWeight: 400, marginBottom: 2 }} />
              <input className="doc-input" value={item.detail} onChange={(e) => updateItem(i, "detail", e.target.value)} style={{ fontSize: 10, color: "var(--blue)", opacity: 0.4, fontWeight: 300 }} />
            </div>
            <input className="doc-num" type="number" min={0} value={item.qty} onChange={(e) => updateItem(i, "qty", Math.max(0, Number(e.target.value) || 0))} style={{ width: 50, fontSize: 11, color: "var(--blue)", textAlign: "center" }} />
            <input className="doc-num" type="number" min={0} value={item.rate} onChange={(e) => updateItem(i, "rate", Math.max(0, Number(e.target.value) || 0))} style={{ width: 100, fontSize: 11, color: "var(--blue)", textAlign: "right", fontWeight: 300, opacity: 0.7 }} />
            <span style={{ width: 100, fontSize: 11, color: "var(--blue)", textAlign: "right", fontWeight: 500, padding: "2px 4px" }}>{fmt(item.qty * item.rate)}</span>
          </div>
        ))}

        {/* Totals — aligned with Qty+Rate+Amount columns (50+100+100 = 250) */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
          <div style={{ width: 250 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 4px" }}>
              <span style={{ fontSize: 11, color: "var(--blue)", opacity: 0.4, fontWeight: 300 }}>Subtotal</span>
              <span style={{ fontSize: 11, color: "var(--blue)", fontWeight: 400 }}>CHF {fmt(subtotal)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 4px", borderBottom: "1px solid var(--silver)" }}>
              <span style={{ fontSize: 11, color: "var(--blue)", opacity: 0.4, fontWeight: 300 }}>VAT (7.7%)</span>
              <span style={{ fontSize: 11, color: "var(--blue)", fontWeight: 400 }}>CHF {fmt(vat)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 4px 0" }}>
              <span style={{ fontSize: 13, color: "var(--blue)", fontWeight: 600 }}>Total Due</span>
              <span style={{ fontSize: 15, color: "var(--blue)", fontWeight: 600 }}>CHF {fmt(total)}</span>
            </div>
          </div>
        </div>

        {/* Payment & Terms — pushed to bottom */}
        <div style={{ marginTop: "auto", borderTop: "1px solid var(--silver)", paddingTop: 16, paddingBottom: 12, display: "flex", justifyContent: "space-between" }}>
          <div>
            <p style={{ ...LABEL, marginBottom: 8 }}>Payment Details</p>
            <div style={{ width: 28, height: 1, backgroundColor: "var(--blue)", opacity: 0.1, marginBottom: 10 }} />
            <p style={{ fontSize: 10, color: "var(--blue)", opacity: 0.4, lineHeight: 1.9, fontWeight: 300 }}>
              Bank: UBS Switzerland AG<br />IBAN: CH93 0028 8288 4590 1200 0<br />BIC/SWIFT: UBSWCHZH80A<br />Reference: {invoiceNo}
            </p>
          </div>
          <div style={{ width: 250 }}>
            <p style={{ ...LABEL, marginBottom: 8 }}>Terms</p>
            <div style={{ width: 28, height: 1, backgroundColor: "var(--blue)", opacity: 0.1, marginBottom: 10 }} />
            <p style={{ fontSize: 10, color: "var(--blue)", opacity: 0.4, lineHeight: 1.9, fontWeight: 300 }}>
              Payment due within 30 days of invoice date.<br />All amounts in Swiss Francs (CHF).<br />Late payments subject to 5% p.a. interest.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="doc-footer">
        <p>Swiss Hospitality Company — swisshospitality.com</p>
        <p>Page 1 of 1</p>
      </div>
    </div>
  );
}
