"use client";

const LOGO_FILTER = "brightness(0) saturate(100%) invert(11%) sepia(30%) saturate(2800%) hue-rotate(196deg) brightness(95%) contrast(95%)";
const LABEL: React.CSSProperties = { fontSize: 9, color: "var(--blue)", opacity: 0.3, textTransform: "uppercase", letterSpacing: "0.2em" };

function Accent({ w = 48 }: { w?: number }) {
  return <div style={{ width: w, height: 1, backgroundColor: "var(--blue)", opacity: 0.1, marginBottom: 12 }} />;
}

interface StyleRow {
  name: string;
  spec: string;
  size: number;
  weight: number;
  opacity?: number;
  sample: string;
  italic?: boolean;
  uppercase?: boolean;
  letterSpacing?: string;
}

function StyleSwatch({ row }: { row: StyleRow }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "7px 0", borderBottom: "1px solid rgba(218,220,226,0.15)" }}>
      <span style={{ width: 90, fontSize: 9, color: "var(--blue)", opacity: 0.4, fontWeight: 400, letterSpacing: "0.02em", flexShrink: 0 }}>
        {row.name}
      </span>
      <span style={{ width: 80, fontSize: 8, color: "var(--blue)", opacity: 0.22, fontWeight: 300, flexShrink: 0, fontFamily: "monospace" }}>
        {row.spec}
      </span>
      <span
        style={{
          flex: 1,
          fontSize: row.size,
          fontWeight: row.weight,
          color: "var(--blue)",
          opacity: row.opacity ?? 1,
          fontStyle: row.italic ? "italic" : "normal",
          textTransform: row.uppercase ? "uppercase" : "none",
          letterSpacing: row.letterSpacing || "normal",
          lineHeight: 1.3,
        }}
      >
        {row.sample}
      </span>
    </div>
  );
}

const styles: { label: string; rows: StyleRow[] }[] = [
  {
    label: "Display",
    rows: [
      { name: "Display", spec: "38 / 200", size: 38, weight: 200, sample: "Hotel Quality" },
      { name: "Display Bold", spec: "38 / 600", size: 38, weight: 600, sample: "Evaluation Report" },
    ],
  },
  {
    label: "Title",
    rows: [
      { name: "Title", spec: "28 / 200", size: 28, weight: 200, sample: "Invoice" },
      { name: "Title Small", spec: "22 / 300", size: 22, weight: 300, sample: "Overall Assessment" },
    ],
  },
  {
    label: "Heading",
    rows: [
      { name: "Heading", spec: "13 / 500", size: 13, weight: 500, sample: "Front Office & Reception" },
      { name: "Heading Bold", spec: "13–15 / 600", size: 15, weight: 600, sample: "CHF 33'387.00" },
    ],
  },
  {
    label: "Body",
    rows: [
      { name: "Body", spec: "11 / 400–500", size: 11, weight: 400, sample: "Mystery Guest Assessment — Full Property" },
      { name: "Body Emphasis", spec: "11 / 600", size: 11, weight: 600, sample: "92" },
      { name: "Body Light", spec: "11 / 300", size: 11, weight: 300, opacity: 0.7, sample: "Greeting within 10 seconds of arrival" },
      { name: "Body Muted", spec: "11 / 300 / .4", size: 11, weight: 300, opacity: 0.4, sample: "Service culture is strong with notable excellence" },
    ],
  },
  {
    label: "Small & Label",
    rows: [
      { name: "Small", spec: "10 / 300 / .4", size: 10, weight: 300, opacity: 0.4, sample: "3-night stay, all F&B outlets, spa & wellness" },
      { name: "Label", spec: "9 / 400 / .3", size: 9, weight: 400, opacity: 0.3, uppercase: true, letterSpacing: "0.15em", sample: "Payment Details" },
      { name: "Fine Print", spec: "9 / 400 / .2", size: 9, weight: 400, opacity: 0.2, sample: "Swiss Hospitality Company — Confidential" },
    ],
  },
];

export default function TypographyGuide() {
  return (
    <div className="doc-page">
      <div style={{ height: 4, backgroundColor: "var(--blue)" }} />
      <div className="doc-body">
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
          <div>
            <img src="/logo.svg" alt="SHC" style={{ height: 36, marginBottom: 20, filter: LOGO_FILTER }} />
            <p style={{ ...LABEL, marginBottom: 14 }}>Helvetica Neue Typography System</p>
            <Accent w={64} />
            <h1 style={{ fontSize: 32, fontWeight: 200, color: "var(--blue)", lineHeight: 1.2 }}>
              Document <span style={{ fontWeight: 600 }}>Text Styles</span>
            </h1>
          </div>
          <div style={{ textAlign: "right", paddingTop: 8 }}>
            <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.2, lineHeight: 1.8 }}>
              Base Color<br />
              <span style={{ fontSize: 11, fontWeight: 500, opacity: 1, color: "var(--blue)" }}>#0F2347</span>
            </p>
            <div style={{ width: 28, height: 28, backgroundColor: "var(--blue)", borderRadius: 2, marginLeft: "auto", marginTop: 6 }} />
          </div>
        </div>

        {/* Style Sections */}
        {styles.map((s) => (
          <div key={s.label} style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <p style={{ ...LABEL, letterSpacing: "0.15em", marginBottom: 0, fontSize: 8 }}>{s.label}</p>
              <div style={{ flex: 1, height: 1, backgroundColor: "var(--blue)", opacity: 0.06 }} />
            </div>
            {s.rows.map((r) => (
              <StyleSwatch key={r.name} row={r} />
            ))}
          </div>
        ))}

        {/* Score Opacity + Line Heights — side by side */}
        <div style={{ display: "flex", gap: 28, marginTop: 6 }}>
          {/* Score Opacity */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <p style={{ ...LABEL, letterSpacing: "0.15em", marginBottom: 0, fontSize: 8 }}>Score Opacity</p>
              <div style={{ flex: 1, height: 1, backgroundColor: "var(--blue)", opacity: 0.06 }} />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { range: "90+", opacity: 1, score: 95 },
                { range: "80–89", opacity: 0.65, score: 84 },
                { range: "< 80", opacity: 0.4, score: 72 },
              ].map((t) => (
                <div key={t.range} style={{ flex: 1, padding: "10px 12px", border: "1px solid rgba(218,220,226,0.3)", borderRadius: 2, textAlign: "center" }}>
                  <span style={{ fontSize: 22, fontWeight: 600, color: "var(--blue)", opacity: t.opacity }}>{t.score}</span>
                  <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.25, marginTop: 4, fontFamily: "monospace" }}>{t.range} → {t.opacity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Line Heights */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <p style={{ ...LABEL, letterSpacing: "0.15em", marginBottom: 0, fontSize: 8 }}>Line Heights</p>
              <div style={{ flex: 1, height: 1, backgroundColor: "var(--blue)", opacity: 0.06 }} />
            </div>
            {[
              { ctx: "Titles", val: "1.15" },
              { ctx: "Default", val: "1.4" },
              { ctx: "Paragraphs", val: "1.7" },
              { ctx: "Detail blocks", val: "1.8 – 1.9" },
            ].map((lh) => (
              <div key={lh.ctx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: "1px solid rgba(218,220,226,0.15)" }}>
                <span style={{ fontSize: 10, color: "var(--blue)", opacity: 0.45, fontWeight: 300 }}>{lh.ctx}</span>
                <span style={{ fontSize: 10, color: "var(--blue)", fontWeight: 500, fontFamily: "monospace" }}>{lh.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: "auto", borderTop: "1px solid var(--silver)", paddingTop: 16, paddingBottom: 8 }}>
          <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.25, fontWeight: 300, lineHeight: 1.7 }}>
            All text uses <strong style={{ fontWeight: 500 }}>var(--blue)</strong> (#0F2347). Four size tiers:{" "}
            <strong style={{ fontWeight: 500 }}>9px</strong> labels,{" "}
            <strong style={{ fontWeight: 500 }}>10–11px</strong> body,{" "}
            <strong style={{ fontWeight: 500 }}>13–15px</strong> headings,{" "}
            <strong style={{ fontWeight: 500 }}>22–38px</strong> display. Weight and opacity control hierarchy.
          </p>
        </div>
      </div>
      <div className="doc-footer">
        <p>Swiss Hospitality Company — Typography Guide</p>
        <p>Page 1 of 1</p>
      </div>
    </div>
  );
}
