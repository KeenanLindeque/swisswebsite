"use client";

const LOGO_FILTER = "brightness(0) saturate(100%) invert(11%) sepia(30%) saturate(2800%) hue-rotate(196deg) brightness(95%) contrast(95%)";
const LABEL: React.CSSProperties = { fontSize: 9, color: "var(--blue)", opacity: 0.3, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 };
const BLUE = "#0f2347";
const SILVER = "#dadce2";
const WHITE = "#F3F3F5";
const TOTAL_PAGES = 15;

function Accent({ w = 48 }: { w?: number }) {
  return <div style={{ width: w, height: 1, backgroundColor: "var(--blue)", opacity: 0.1, marginBottom: 12 }} />;
}

function PageHeader({ title, subtitle, page }: { title: string; subtitle: string; page?: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
      <div>
        <p style={{ ...LABEL, marginBottom: 12 }}>{title}</p>
        <Accent />
        <h2 style={{ fontSize: 22, fontWeight: 300, color: "var(--blue)" }}>{subtitle}</h2>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {page && <span style={{ fontSize: 9, color: "var(--blue)", opacity: 0.15, fontWeight: 400 }}>{String(page).padStart(2, "0")}</span>}
        <img src="/logo.svg" alt="SHC" style={{ height: 22, opacity: 0.15, filter: LOGO_FILTER }} />
      </div>
    </div>
  );
}

function Footer({ page }: { page: number }) {
  return (
    <div className="doc-footer">
      <p>Swiss Hospitality Company — Brand Guidelines — Confidential</p>
      <p>Page {page} of {TOTAL_PAGES}</p>
    </div>
  );
}

function TopBar() {
  return <div style={{ height: 4, backgroundColor: "var(--blue)" }} />;
}

function Placeholder({ label, h = 120, bg = "rgba(218,220,226,0.2)" }: { label: string; h?: number; bg?: string }) {
  return (
    <div style={{ width: "100%", height: h, backgroundColor: bg, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 2 }}>
      <span style={{ fontSize: 9, color: "var(--blue)", opacity: 0.25, textTransform: "uppercase", letterSpacing: "0.15em" }}>{label}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p style={{ ...LABEL, marginBottom: 8 }}>{children}</p>;
}

function BodyText({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return <p style={{ fontSize: 11, color: "var(--blue)", fontWeight: 300, opacity: muted ? 0.4 : 0.7, lineHeight: 1.7 }}>{children}</p>;
}

/* ── Typography StyleSwatch (reused from TypographyGuide) ── */
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

const typographyStyles: { label: string; rows: StyleRow[] }[] = [
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

/* ════════════════════════════════════════════════════════════════════════
   BRAND GUIDELINES
   ════════════════════════════════════════════════════════════════════════ */

export default function BrandGuidelines() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

      {/* ══ PAGE 1 — Cover ════════════════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div style={{ flex: 1, padding: "56px 56px 0", display: "flex", flexDirection: "column" }}>
          <img src="/logo.svg" alt="SHC" style={{ height: 36, filter: LOGO_FILTER }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ ...LABEL, marginBottom: 20 }}>Official Brand Manual — 2026</p>
            <Accent w={64} />
            <h1 style={{ fontSize: 42, fontWeight: 200, color: "var(--blue)", lineHeight: 1.1, marginBottom: 12 }}>
              Brand<br /><span style={{ fontWeight: 600 }}>Guidelines</span>
            </h1>
            <p style={{ fontSize: 11, color: "var(--blue)", opacity: 0.4, fontWeight: 300, marginTop: 16, lineHeight: 1.7, maxWidth: 380 }}>
              A comprehensive guide to the visual identity, voice, and application standards for the Swiss Hospitality Company brand.
            </p>
          </div>
          <div style={{ borderTop: "1px solid var(--silver)", paddingTop: 28, paddingBottom: 28, display: "flex", justifyContent: "space-between" }}>
            <div>
              <p style={{ ...LABEL, marginBottom: 6 }}>Version</p>
              <p style={{ fontSize: 11, color: "var(--blue)", fontWeight: 500, padding: "2px 4px" }}>2.0</p>
            </div>
            <div>
              <p style={{ ...LABEL, marginBottom: 6 }}>Date</p>
              <p style={{ fontSize: 11, color: "var(--blue)", fontWeight: 500, padding: "2px 4px" }}>February 2026</p>
            </div>
            <div>
              <p style={{ ...LABEL, marginBottom: 6 }}>Classification</p>
              <p style={{ fontSize: 11, color: "var(--blue)", fontWeight: 500, padding: "2px 4px" }}>Confidential</p>
            </div>
          </div>
        </div>
        <Footer page={1} />
      </div>

      {/* ══ PAGE 2 — Table of Contents ════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Contents" subtitle="Table of Contents" page={2} />
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {[
              ["01", "Brand Overview", "Mission, Vision & Values", "03"],
              ["02", "Brand Messaging", "Voice, Tone & Positioning", "04"],
              ["03", "Primary Logo", "Blue & White Variants", "05"],
              ["04", "Secondary Logo & Wordmark", "Alternate Marks", "06"],
              ["05", "Logo Inspiration", "Design Rationale", "07"],
              ["06", "Color Palette", "Primary & Secondary Colors", "08"],
              ["07", "Pattern System", "Brand Patterns", "09"],
              ["08", "Clear Space & Sizing", "Minimum Requirements", "10"],
              ["09", "Logo Don'ts", "Incorrect Usage", "11"],
              ["10", "Typography", "Typeface System", "12"],
              ["11", "Icon System", "Iconography Standards", "13"],
              ["12", "UI/UX Style", "Digital Interface Patterns", "14"],
              ["13", "Applications", "Physical & Digital", "15"],
            ].map(([num, title, sub, pg]) => (
              <div key={num} style={{ display: "flex", alignItems: "baseline", padding: "14px 0", borderBottom: "1px solid rgba(218,220,226,0.2)", flex: 1 }}>
                <span style={{ width: 36, fontSize: 11, color: "var(--blue)", opacity: 0.2, fontWeight: 400 }}>{num}</span>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 13, color: "var(--blue)", fontWeight: 500 }}>{title}</span>
                  <span style={{ fontSize: 10, color: "var(--blue)", opacity: 0.3, fontWeight: 300, marginLeft: 14 }}>{sub}</span>
                </div>
                <span style={{ fontSize: 10, color: "var(--blue)", opacity: 0.25, fontWeight: 400 }}>{pg}</span>
              </div>
            ))}
          </div>
        </div>
        <Footer page={2} />
      </div>

      {/* ══ PAGE 3 — Brand Overview ══════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Brand Overview" subtitle="Mission, Vision & Values" page={3} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: 28 }}>
              <SectionTitle>Our Mission</SectionTitle>
              <Accent w={32} />
              <p style={{ fontSize: 18, color: "var(--blue)", fontWeight: 200, lineHeight: 1.6, maxWidth: 540, marginBottom: 8 }}>
                To independently certify and elevate the quality of hospitality worldwide through rigorous, transparent assessment.
              </p>
            </div>
            <div style={{ marginBottom: 28 }}>
              <SectionTitle>Our Vision</SectionTitle>
              <Accent w={32} />
              <p style={{ fontSize: 13, color: "var(--blue)", fontWeight: 300, lineHeight: 1.7, opacity: 0.7 }}>To be the global standard-bearer for hospitality excellence — trusted by hotels, recognised by guests, and respected by the industry.</p>
            </div>
            <div style={{ flex: 1, marginBottom: 16 }}>
              <SectionTitle>Brand Values</SectionTitle>
              <Accent w={32} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 8, flex: 1 }}>
                {[
                  ["Independence", "Our assessments are unbiased and free from commercial influence. No hotel group or platform sponsorship affects our scores."],
                  ["Precision", "Every evaluation is methodical, scored, and evidence-based. We quantify what others leave to opinion."],
                  ["Discretion", "We operate with the confidentiality that luxury hospitality demands. Our assessors are invisible."],
                  ["Excellence", "We hold ourselves to the same exacting standards we measure in others. Our reports are works of Swiss precision."],
                ].map(([title, desc]) => (
                  <div key={title} style={{ padding: "20px 24px", border: "1px solid rgba(218,220,226,0.3)", borderRadius: 2, display: "flex", flexDirection: "column" }}>
                    <p style={{ fontSize: 13, color: "var(--blue)", fontWeight: 500, marginBottom: 8 }}>{title}</p>
                    <BodyText muted>{desc}</BodyText>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid rgba(218,220,226,0.2)" }}>
              <SectionTitle>Brand Essence</SectionTitle>
              <p style={{ fontSize: 22, fontWeight: 200, color: "var(--blue)", lineHeight: 1.4, fontStyle: "italic", opacity: 0.5 }}>
                &ldquo;We measure what your guests actually experience.&rdquo;
              </p>
            </div>
          </div>
        </div>
        <Footer page={3} />
      </div>

      {/* ══ PAGE 4 — Brand Messaging ═════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Brand Messaging" subtitle="Voice, Tone & Positioning" page={4} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: 24 }}>
              <SectionTitle>Brand Voice</SectionTitle>
              <Accent w={32} />
              <p style={{ fontSize: 13, color: "var(--blue)", fontWeight: 300, lineHeight: 1.7, opacity: 0.7 }}>The Swiss Hospitality Company voice is authoritative yet approachable, precise without being cold, and confident without arrogance. We speak as trusted experts who have been inside thousands of hotels.</p>
            </div>
            <div style={{ marginBottom: 24 }}>
              <SectionTitle>Tone Spectrum</SectionTitle>
              <Accent w={32} />
              <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                {["Professional", "Measured", "Direct", "Warm"].map((t, i) => (
                  <div key={t} style={{ flex: 1, padding: "20px 16px", backgroundColor: `rgba(15,35,71,${0.03 + i * 0.02})`, borderRadius: 2, textAlign: "center" }}>
                    <p style={{ fontSize: 12, color: "var(--blue)", fontWeight: 500, marginBottom: 4 }}>{t}</p>
                    <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.25 }}>{["Formal, structured", "Considered, balanced", "Clear, concise", "Human, empathetic"][i]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, marginBottom: 24 }}>
              <SectionTitle>Positioning Statement</SectionTitle>
              <Accent w={32} />
              <div style={{ padding: "24px 28px", border: "1px solid rgba(218,220,226,0.3)", borderRadius: 2, marginTop: 4 }}>
                <p style={{ fontSize: 13, color: "var(--blue)", fontWeight: 300, lineHeight: 1.8, opacity: 0.7 }}>For luxury and premium hotels seeking independent quality validation, Swiss Hospitality Company is the certification authority that provides rigorous, discreet, experience-based assessments — unlike self-reported quality programs or commercial rating platforms.</p>
              </div>
            </div>
            <div style={{ marginTop: "auto" }}>
              <SectionTitle>Key Messages</SectionTitle>
              <Accent w={32} />
              {["Independent. Not affiliated with any hotel group or booking platform.",
                "Experience-based. We stay as real guests — every touchpoint measured.",
                "Swiss precision. Methodical, scored, evidence-driven.",
                "Trusted globally. Hotels across 40+ countries certified.",
              ].map((msg) => (
                <div key={msg} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: "1px solid rgba(218,220,226,0.15)" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--blue)", opacity: 0.15, marginTop: 7, flexShrink: 0 }} />
                  <p style={{ fontSize: 12, color: "var(--blue)", fontWeight: 300, opacity: 0.7, lineHeight: 1.6 }}>{msg}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer page={4} />
      </div>

      {/* ══ PAGE 5 — Primary Logo ════════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Logo System" subtitle="Primary Logo" page={5} />
          <BodyText muted>The primary logo is the cornerstone of our visual identity. It should be used in all primary brand communications.</BodyText>
          <div style={{ display: "flex", gap: 24, marginTop: 24, flex: 1 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <SectionTitle>On Light Backgrounds</SectionTitle>
              <div style={{ flex: 1, backgroundColor: WHITE, border: "1px solid rgba(218,220,226,0.4)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
                <img src="/logo.svg" alt="SHC Logo Dark" style={{ height: 48, filter: LOGO_FILTER }} />
              </div>
              <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.2, marginTop: 10, fontFamily: "monospace" }}>logo.svg — #0F2347 (with CSS filter)</p>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <SectionTitle>On Dark Backgrounds</SectionTitle>
              <div style={{ flex: 1, backgroundColor: BLUE, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
                <img src="/logo.svg" alt="SHC Logo Light" style={{ height: 48 }} />
              </div>
              <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.2, marginTop: 10, fontFamily: "monospace" }}>logo.svg — #F3F3F5</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <SectionTitle>Usage Notes</SectionTitle>
            <Accent w={32} />
            {["The primary logo must always appear in full — never crop or partially obscure.",
              "Maintain the original aspect ratio at all times.",
              "The logo must only appear in the approved brand colors: Navy (#0F2347) or Off-White (#F3F3F5).",
            ].map((n) => (
              <div key={n} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--blue)", opacity: 0.15, marginTop: 7, flexShrink: 0 }} />
                <BodyText muted>{n}</BodyText>
              </div>
            ))}
          </div>
        </div>
        <Footer page={5} />
      </div>

      {/* ══ PAGE 6 — Secondary Logo & Wordmark ═══════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Logo System" subtitle="Secondary Logo & Wordmark" page={6} />
          <BodyText muted>The secondary mark and wordmark are used in constrained spaces where the primary logo cannot be reproduced at sufficient size.</BodyText>
          <div style={{ display: "flex", gap: 24, marginTop: 24, flex: 1 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <SectionTitle>Icon Mark</SectionTitle>
              <div style={{ flex: 1, backgroundColor: WHITE, border: "1px solid rgba(218,220,226,0.4)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
                <Placeholder label="Icon Mark" h={60} bg="transparent" />
              </div>
              <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.2, marginTop: 10, fontFamily: "monospace" }}>Standalone icon — favicons, app icons, small print</p>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <SectionTitle>Wordmark</SectionTitle>
              <div style={{ flex: 1, backgroundColor: WHITE, border: "1px solid rgba(218,220,226,0.4)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
                <span style={{ fontSize: 16, fontWeight: 300, color: "var(--blue)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Swiss Hospitality Company</span>
              </div>
              <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.2, marginTop: 10, fontFamily: "monospace" }}>Wordmark — email signatures, legal, compact layouts</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <SectionTitle>Lockup Variations</SectionTitle>
            <Accent w={32} />
            <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
              {["Horizontal", "Stacked", "Icon Only"].map((v) => (
                <div key={v} style={{ flex: 1, padding: "28px 16px", border: "1px solid rgba(218,220,226,0.3)", borderRadius: 2, textAlign: "center" }}>
                  <Placeholder label={v} h={56} bg="transparent" />
                  <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.3, marginTop: 10 }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer page={6} />
      </div>

      {/* ══ PAGE 7 — Logo Inspiration ════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Logo System" subtitle="Logo Inspiration" page={7} />
          <BodyText muted>The logo draws from Swiss design principles — clean geometry, confident restraint, and meaningful precision. Every element serves a purpose.</BodyText>
          <div style={{ marginTop: 24, flex: 1, display: "flex", flexDirection: "column" }}>
            <Placeholder label="Logo construction / grid diagram" h={0} bg="rgba(218,220,226,0.15)" />
            <div style={{ flex: 1, backgroundColor: "rgba(218,220,226,0.15)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
              <span style={{ fontSize: 9, color: "var(--blue)", opacity: 0.25, textTransform: "uppercase", letterSpacing: "0.15em" }}>Logo construction / grid diagram</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 0 }}>
            {[
              ["Swiss Precision", "Clean geometric forms inspired by the Swiss design tradition and the country's commitment to quality and craftsmanship."],
              ["Hospitality Warmth", "Subtle curves and refined proportions convey approachability within a framework of authority and trust."],
              ["Certification Trust", "The mark communicates credibility, independence, and the gravitas expected of a recognised quality standard."],
            ].map(([t, d]) => (
              <div key={t} style={{ padding: "20px", border: "1px solid rgba(218,220,226,0.2)", borderRadius: 2 }}>
                <p style={{ fontSize: 12, color: "var(--blue)", fontWeight: 500, marginBottom: 8 }}>{t}</p>
                <BodyText muted>{d}</BodyText>
              </div>
            ))}
          </div>
        </div>
        <Footer page={7} />
      </div>

      {/* ══ PAGE 8 — Color Palette ═══════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Visual Identity" subtitle="Color Palette" page={8} />
          <BodyText muted>Our palette is intentionally restrained. Two primary colors define the brand; a supporting palette extends it for digital and print applications.</BodyText>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: 20 }}>
            <SectionTitle>Primary Colors</SectionTitle>
            <Accent w={32} />
            <div style={{ display: "flex", gap: 20, marginTop: 8, flex: 1 }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, backgroundColor: BLUE, borderRadius: 2, marginBottom: 12 }} />
                <p style={{ fontSize: 13, color: "var(--blue)", fontWeight: 500 }}>Navy Blue</p>
                <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.3, fontFamily: "monospace", marginTop: 6 }}>HEX #0F2347</p>
                <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.22, fontFamily: "monospace" }}>RGB 15, 35, 71</p>
                <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.22, fontFamily: "monospace" }}>CMYK 79, 51, 0, 72</p>
                <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.25, marginTop: 6 }}>Primary brand color. Text, logos, backgrounds.</p>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, backgroundColor: WHITE, border: "1px solid rgba(218,220,226,0.5)", borderRadius: 2, marginBottom: 12 }} />
                <p style={{ fontSize: 13, color: "var(--blue)", fontWeight: 500 }}>Off-White</p>
                <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.3, fontFamily: "monospace", marginTop: 6 }}>HEX #F3F3F5</p>
                <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.22, fontFamily: "monospace" }}>RGB 243, 243, 245</p>
                <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.22, fontFamily: "monospace" }}>CMYK 1, 1, 0, 4</p>
                <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.25, marginTop: 6 }}>Primary light color. Backgrounds, reversed text.</p>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, backgroundColor: SILVER, borderRadius: 2, marginBottom: 12 }} />
                <p style={{ fontSize: 13, color: "var(--blue)", fontWeight: 500 }}>Silver</p>
                <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.3, fontFamily: "monospace", marginTop: 6 }}>HEX #DADCE2</p>
                <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.22, fontFamily: "monospace" }}>RGB 218, 220, 226</p>
                <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.22, fontFamily: "monospace" }}>CMYK 4, 3, 0, 11</p>
                <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.25, marginTop: 6 }}>Borders, dividers, muted elements.</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <SectionTitle>Extended Palette</SectionTitle>
            <Accent w={32} />
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              {[
                { name: "Navy 80%", hex: "#3F4F6F" },
                { name: "Navy 60%", hex: "#6F7B97" },
                { name: "Navy 40%", hex: "#9FA7BF" },
                { name: "Navy 20%", hex: "#CFD3DF" },
                { name: "Navy 10%", hex: "#E7E9EF" },
                { name: "Warm Gray", hex: "#F7F7F8" },
              ].map((c) => (
                <div key={c.hex} style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ width: "100%", height: 48, backgroundColor: c.hex, borderRadius: 2, marginBottom: 8 }} />
                  <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.4 }}>{c.name}</p>
                  <p style={{ fontSize: 7, color: "var(--blue)", opacity: 0.2, fontFamily: "monospace" }}>{c.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer page={8} />
      </div>

      {/* ══ PAGE 9 — Pattern System ══════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Visual Identity" subtitle="Pattern System" page={9} />
          <BodyText muted>Brand patterns are used sparingly to add texture and depth to layouts. They derive from the geometric principles of the logo.</BodyText>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 24, flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SectionTitle>Primary Pattern</SectionTitle>
              <div style={{ flex: 1, backgroundColor: BLUE, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, ${WHITE} 20px, ${WHITE} 21px)` }} />
                <span style={{ fontSize: 9, color: WHITE, opacity: 0.4, textTransform: "uppercase", letterSpacing: "0.15em" }}>Diagonal Line Pattern</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SectionTitle>Secondary Pattern</SectionTitle>
              <div style={{ flex: 1, backgroundColor: WHITE, border: "1px solid rgba(218,220,226,0.4)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 24px, ${BLUE} 24px, ${BLUE} 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, ${BLUE} 24px, ${BLUE} 25px)` }} />
                <span style={{ fontSize: 9, color: "var(--blue)", opacity: 0.25, textTransform: "uppercase", letterSpacing: "0.15em" }}>Grid Pattern</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <SectionTitle>Pattern Usage Rules</SectionTitle>
            <Accent w={32} />
            {["Patterns should never compete with content — use at very low opacity (3–8%).",
              "Patterns are decorative accents, not backgrounds for text blocks.",
              "Only the approved patterns may be used. Do not create new patterns.",
              "On print, patterns reproduce best on uncoated stock at 300+ DPI.",
            ].map((r) => (
              <div key={r} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--blue)", opacity: 0.15, marginTop: 7, flexShrink: 0 }} />
                <BodyText muted>{r}</BodyText>
              </div>
            ))}
          </div>
        </div>
        <Footer page={9} />
      </div>

      {/* ══ PAGE 10 — Clear Space & Sizing ═══════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Logo System" subtitle="Clear Space & Minimum Size" page={10} />
          <BodyText muted>The clear space around the logo ensures it is never crowded by other elements. The minimum clear space equals the height of the &ldquo;S&rdquo; in the wordmark.</BodyText>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: 24 }}>
            <SectionTitle>Clear Space</SectionTitle>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(218,220,226,0.5)", borderRadius: 2, position: "relative" }}>
              <div style={{ position: "absolute", top: 40, left: 80, right: 80, bottom: 40, border: "1px dashed rgba(15,35,71,0.08)" }} />
              <div style={{ position: "absolute", top: 24, left: 56, fontSize: 8, color: "var(--blue)", opacity: 0.2, fontFamily: "monospace" }}>X</div>
              <div style={{ position: "absolute", top: 24, right: 56, fontSize: 8, color: "var(--blue)", opacity: 0.2, fontFamily: "monospace" }}>X</div>
              <div style={{ position: "absolute", left: 32, top: "50%", transform: "translateY(-50%) rotate(-90deg)", fontSize: 8, color: "var(--blue)", opacity: 0.2, fontFamily: "monospace" }}>X</div>
              <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", fontSize: 8, color: "var(--blue)", opacity: 0.2, fontFamily: "monospace" }}>X</div>
              <img src="/logo.svg" alt="SHC" style={{ height: 44, filter: LOGO_FILTER }} />
            </div>
            <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.2, marginTop: 10, fontFamily: "monospace", textAlign: "center" }}>X = height of &ldquo;S&rdquo; character in wordmark. Minimum clear space on all sides.</p>
          </div>
          <div style={{ marginTop: 24 }}>
            <SectionTitle>Minimum Sizes</SectionTitle>
            <Accent w={32} />
            <div style={{ display: "flex", gap: 20, marginTop: 8 }}>
              {[
                ["Print", "24mm wide", "Below this size, use the icon mark only."],
                ["Digital", "120px wide", "At smaller sizes, switch to the favicon/icon."],
                ["Favicon", "32×32px", "Use the standalone icon mark at this size."],
              ].map(([ctx, size, note]) => (
                <div key={ctx} style={{ flex: 1, padding: "20px 24px", border: "1px solid rgba(218,220,226,0.3)", borderRadius: 2 }}>
                  <p style={{ fontSize: 11, color: "var(--blue)", fontWeight: 500, marginBottom: 6 }}>{ctx}</p>
                  <p style={{ fontSize: 15, color: "var(--blue)", fontWeight: 600 }}>{size}</p>
                  <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.3, marginTop: 8 }}>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer page={10} />
      </div>

      {/* ══ PAGE 11 — Logo Don'ts ════════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Logo System" subtitle="Incorrect Usage" page={11} />
          <BodyText muted>Consistency is critical to brand recognition. The following examples illustrate common misuses of the logo that must be avoided.</BodyText>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 24, flex: 1, alignContent: "start" }}>
            {[
              ["Don't stretch", "Never distort the aspect ratio of the logo."],
              ["Don't recolor", "Never apply unapproved colors or gradients."],
              ["Don't rotate", "The logo must always appear level and upright."],
              ["Don't add effects", "No drop shadows, glows, bevels, or outlines."],
              ["Don't crop", "Never crop or partially obscure the logo."],
              ["Don't rearrange", "Never separate or rearrange logo elements."],
              ["Don't low-contrast", "Ensure sufficient contrast against backgrounds."],
              ["Don't add text", "Never add taglines or text directly to the logo."],
              ["Don't use on busy BGs", "Avoid placing the logo over complex imagery."],
            ].map(([title, desc]) => (
              <div key={title} style={{ padding: "16px", border: "1px solid rgba(218,220,226,0.3)", borderRadius: 2 }}>
                <div style={{ width: "100%", height: 64, backgroundColor: "rgba(218,220,226,0.12)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, position: "relative" }}>
                  <img src="/logo.svg" alt="" style={{ height: 18, filter: LOGO_FILTER, opacity: 0.3 }} />
                  <div style={{ position: "absolute", top: 4, right: 6 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#c44" strokeWidth="2" strokeLinecap="round" /></svg>
                  </div>
                </div>
                <p style={{ fontSize: 10, color: "var(--blue)", fontWeight: 500, marginBottom: 4 }}>{title}</p>
                <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.3, lineHeight: 1.5 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer page={11} />
      </div>

      {/* ══ PAGE 12 — Typography (full system from TypographyGuide) ═══ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Visual Identity" subtitle="Typography System" page={12} />
          {typographyStyles.map((s) => (
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
          <div style={{ display: "flex", gap: 28, marginTop: 6, flex: 1 }}>
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
          <div style={{ marginTop: "auto", borderTop: "1px solid var(--silver)", paddingTop: 14 }}>
            <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.25, fontWeight: 300, lineHeight: 1.7 }}>
              All text uses <strong style={{ fontWeight: 500 }}>var(--blue)</strong> (#0F2347). Four size tiers:{" "}
              <strong style={{ fontWeight: 500 }}>9px</strong> labels,{" "}
              <strong style={{ fontWeight: 500 }}>10–11px</strong> body,{" "}
              <strong style={{ fontWeight: 500 }}>13–15px</strong> headings,{" "}
              <strong style={{ fontWeight: 500 }}>22–38px</strong> display. Weight and opacity control hierarchy.
            </p>
          </div>
        </div>
        <Footer page={12} />
      </div>

      {/* ══ PAGE 13 — Icon System ════════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Visual Identity" subtitle="Icon System" page={13} />
          <BodyText muted>Icons follow a consistent style: 24px grid, 1.5px stroke, round caps and joins. They use the brand navy color and are designed for clarity at small sizes.</BodyText>
          <div style={{ marginTop: 24, flex: 1, display: "flex", flexDirection: "column" }}>
            <SectionTitle>Icon Grid &amp; Style</SectionTitle>
            <Accent w={32} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 8, flex: 1 }}>
              {[
                { label: "User Check", d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM22 11l-3 3-1.5-1.5" },
                { label: "Clipboard", d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" },
                { label: "Award", d: "M12 15l-3.5 2 1-4L6 10l4-.5L12 6l2 3.5 4 .5-3.5 3 1 4z" },
                { label: "Bell", d: "M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" },
                { label: "Trending Up", d: "M23 6l-9.5 9.5-5-5L1 18" },
                { label: "Shield", d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
                { label: "Star", d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
                { label: "Globe", d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" },
              ].map((ic) => (
                <div key={ic.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: "20px 8px", border: "1px solid rgba(218,220,226,0.2)", borderRadius: 2 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={ic.d} /></svg>
                  <span style={{ fontSize: 8, color: "var(--blue)", opacity: 0.3 }}>{ic.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <SectionTitle>Icon Rules</SectionTitle>
            <Accent w={32} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 4 }}>
              {[
                ["Stroke weight", "1.5px consistent across all icons"],
                ["Corner radius", "Round caps and joins, no sharp corners"],
                ["Color", "Brand navy only; silver for disabled states"],
                ["Grid", "24×24px with 2px optical padding"],
              ].map(([t, d]) => (
                <div key={t} style={{ padding: "14px 18px", border: "1px solid rgba(218,220,226,0.2)", borderRadius: 2 }}>
                  <p style={{ fontSize: 10, color: "var(--blue)", fontWeight: 500, marginBottom: 2 }}>{t}</p>
                  <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.3 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer page={13} />
      </div>

      {/* ══ PAGE 14 — UI/UX Style (real component system) ═════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Digital Standards" subtitle="UI/UX Component System" page={14} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: 20, flex: 1 }}>
              {/* Buttons */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <SectionTitle>Buttons</SectionTitle>
                <Accent w={24} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <div style={{ padding: "14px 24px", backgroundColor: "var(--blue)", color: WHITE, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, textAlign: "center" }}>Primary Action</div>
                  <div style={{ padding: "14px 24px", border: "1px solid var(--blue)", color: "var(--blue)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400, textAlign: "center" }}>Secondary</div>
                  <div style={{ padding: "14px 24px", border: `1px solid ${SILVER}`, color: "var(--blue)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 300, textAlign: "center" }}>Tertiary</div>
                  <div style={{ padding: "14px 24px", backgroundColor: "rgba(218,220,226,0.15)", color: "var(--blue)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 300, textAlign: "center", opacity: 0.4 }}>Disabled</div>
                </div>
                <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.2, marginTop: 10, fontFamily: "monospace" }}>0px radius · 11px · 0.12em tracking</p>
              </div>
              {/* Form Inputs */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <SectionTitle>Form Inputs</SectionTitle>
                <Accent w={24} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <div>
                    <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.3, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>Label</p>
                    <div style={{ padding: "12px 14px", border: `1px solid ${SILVER}`, fontSize: 11, color: "var(--blue)", opacity: 0.4 }}>Placeholder text...</div>
                  </div>
                  <div>
                    <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.3, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>Focused</p>
                    <div style={{ padding: "12px 14px", border: `1px solid ${BLUE}`, fontSize: 11, color: "var(--blue)" }}>The Grand Palace</div>
                  </div>
                  <div>
                    <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.3, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>Disabled</p>
                    <div style={{ padding: "12px 14px", border: "1px solid rgba(218,220,226,0.4)", fontSize: 11, color: "var(--blue)", opacity: 0.3, backgroundColor: "rgba(218,220,226,0.1)" }}>Disabled state</div>
                  </div>
                </div>
                <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.2, marginTop: 10, fontFamily: "monospace" }}>11px body · 0px radius · 12px padding</p>
              </div>
              {/* Cards & Panels */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <SectionTitle>Cards &amp; Panels</SectionTitle>
                <Accent w={24} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <div style={{ flex: 1, padding: "20px", border: `1px solid ${SILVER}`, borderRadius: 2 }}>
                    <p style={{ fontSize: 11, fontWeight: 500, color: "var(--blue)", marginBottom: 6 }}>Standard Card</p>
                    <p style={{ fontSize: 10, fontWeight: 300, color: "var(--blue)", opacity: 0.4, lineHeight: 1.6 }}>Subtle borders, generous padding, restrained type.</p>
                  </div>
                  <div style={{ flex: 1, padding: "20px", backgroundColor: "var(--blue)", borderRadius: 2 }}>
                    <p style={{ fontSize: 11, fontWeight: 500, color: WHITE, marginBottom: 6 }}>Inverted Card</p>
                    <p style={{ fontSize: 10, fontWeight: 300, color: WHITE, opacity: 0.5, lineHeight: 1.6 }}>Navy background with off-white text.</p>
                  </div>
                </div>
                <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.2, marginTop: 10, fontFamily: "monospace" }}>2px radius · 20px padding · 1px Silver</p>
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <SectionTitle>Spacing &amp; Layout Principles</SectionTitle>
              <Accent w={32} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginTop: 4 }}>
                {[
                  ["Whitespace", "80–160px between sections"],
                  ["Max Width", "1400px container, 860px content"],
                  ["Borders", "1px Silver or low-opacity Navy"],
                  ["Animations", "1.4–1.8s ease-out, subtle drift"],
                ].map(([t, d]) => (
                  <div key={t} style={{ padding: "14px 16px", border: "1px solid rgba(218,220,226,0.2)", borderRadius: 2 }}>
                    <p style={{ fontSize: 10, color: "var(--blue)", fontWeight: 500, marginBottom: 2 }}>{t}</p>
                    <p style={{ fontSize: 8, color: "var(--blue)", opacity: 0.3, lineHeight: 1.5 }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer page={14} />
      </div>

      {/* ══ PAGE 15 — Applications ═══════════════════════ */}
      <div className="doc-page">
        <TopBar />
        <div className="doc-body">
          <PageHeader title="Applications" subtitle="Physical & Digital" page={15} />
          <BodyText muted>The brand system extends across all touchpoints — from printed reports and stationery to web, email, and social media.</BodyText>
          <div style={{ marginTop: 20, flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <SectionTitle>Physical Applications</SectionTitle>
              <Accent w={32} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 6, flex: 1 }}>
                {["Business Card", "Letterhead", "Report Cover", "Certificate", "Envelope", "Name Badge"].map((a) => (
                  <div key={a} style={{ borderRadius: 2, overflow: "hidden", border: "1px solid rgba(218,220,226,0.3)", display: "flex", flexDirection: "column" }}>
                    <div style={{ flex: 1, backgroundColor: "rgba(218,220,226,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 9, color: "var(--blue)", opacity: 0.2, textTransform: "uppercase", letterSpacing: "0.12em" }}>{a}</span>
                    </div>
                    <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.35, padding: "8px 12px" }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <SectionTitle>Digital Applications</SectionTitle>
              <Accent w={32} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 6, flex: 1 }}>
                {["Website", "Email Signature", "Social Media", "PDF Reports", "Presentation", "App Icon"].map((a) => (
                  <div key={a} style={{ borderRadius: 2, overflow: "hidden", border: "1px solid rgba(218,220,226,0.3)", display: "flex", flexDirection: "column" }}>
                    <div style={{ flex: 1, backgroundColor: "rgba(15,35,71,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 9, color: "var(--blue)", opacity: 0.2, textTransform: "uppercase", letterSpacing: "0.12em" }}>{a}</span>
                    </div>
                    <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.35, padding: "8px 12px" }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--silver)", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <p style={{ fontSize: 9, color: "var(--blue)", opacity: 0.2, lineHeight: 1.7 }}>
              For brand asset requests, usage approvals, or questions<br />
              about these guidelines, contact: brand@swisshospitality.com
            </p>
            <img src="/logo.svg" alt="SHC" style={{ height: 20, opacity: 0.1, filter: LOGO_FILTER }} />
          </div>
        </div>
        <Footer page={15} />
      </div>

    </div>
  );
}
