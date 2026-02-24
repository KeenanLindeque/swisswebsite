"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import InvoicePage from "./documents/InvoicePage";
import EvaluationReport from "./documents/EvaluationReport";
import TypographyGuide from "./documents/TypographyGuide";
import BrandGuidelines from "./documents/BrandGuidelines";

/* ── Shared document styles ─────────────── */
function DocStyles() {
  return (
    <style>{`
      /* page shell */
      .doc-page{width:794px;height:1123px;background:#fff;box-shadow:0 4px 60px rgba(15,35,71,.08),0 1px 3px rgba(15,35,71,.04);position:relative;overflow:hidden;font-family:inherit;display:flex;flex-direction:column}
      .doc-body{flex:1;padding:48px 56px 0;display:flex;flex-direction:column}
      .doc-body-tight{flex:1;padding:36px 56px 0;display:flex;flex-direction:column}
      .doc-footer{padding:16px 56px;display:flex;justify-content:space-between;border-top:1px solid rgba(218,220,226,.25);margin-top:auto}
      .doc-footer p{font-size:9px;color:var(--blue);opacity:.2;margin:0}

      /* inputs */
      .doc-input{border:none;outline:none;background:transparent;font-family:inherit;padding:2px 4px;margin:0;width:100%;border-radius:3px;transition:all .2s}
      .doc-input:hover{background:rgba(15,35,71,.018)}
      .doc-input:focus{background:rgba(15,35,71,.035);box-shadow:0 1px 0 0 rgba(15,35,71,.12)}
      .doc-area{border:none;outline:none;background:transparent;font-family:inherit;padding:2px 4px;margin:0;width:100%;resize:none;border-radius:3px;transition:all .2s}
      .doc-area:hover{background:rgba(15,35,71,.018)}
      .doc-area:focus{background:rgba(15,35,71,.035);box-shadow:0 1px 0 0 rgba(15,35,71,.12)}
      .doc-num{border:none;outline:none;background:transparent;font-family:inherit;padding:2px 4px;margin:0;border-radius:3px;transition:all .2s}
      .doc-num:hover{background:rgba(15,35,71,.018)}
      .doc-num:focus{background:rgba(15,35,71,.035);box-shadow:0 1px 0 0 rgba(15,35,71,.12)}
      .doc-num::-webkit-inner-spin-button,.doc-num::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
      .doc-num{-moz-appearance:textfield}

      /* evaluation-specific */
      .doc-row{display:flex;align-items:center;gap:6px;padding:8px 6px;margin:0 -6px;border-bottom:1px solid rgba(218,220,226,.2);border-radius:4px;transition:background .15s}
      .doc-row:hover{background:rgba(15,35,71,.018)}
      .doc-score{border:none;outline:none;font-family:inherit;font-size:11px;font-weight:600;width:32px;text-align:right;padding:2px 4px;background:transparent;transition:all .2s;cursor:text;border-radius:3px}
      .doc-score:hover{background:rgba(15,35,71,.018)}
      .doc-score:focus{background:rgba(15,35,71,.035);box-shadow:0 1px 0 0 rgba(15,35,71,.12)}
      .doc-score::-webkit-inner-spin-button,.doc-score::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
      .doc-score{-moz-appearance:textfield}
      .doc-mini-bar{height:3px;border-radius:2px;background:rgba(218,220,226,.35);overflow:hidden;flex-shrink:0}
      .doc-mini-fill{height:100%;border-radius:2px;transition:width .4s ease}
      .doc-bullet{display:flex;align-items:flex-start;gap:8px;margin-bottom:4px;padding:2px 4px;border-radius:3px;transition:background .15s}
      .doc-bullet:hover{background:rgba(15,35,71,.018)}
      .doc-dept-head{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:2px solid var(--blue);margin-bottom:8px}

      /* invoice-specific */
      .doc-inv-row{display:flex;align-items:center;padding:10px 0;border-bottom:1px solid rgba(218,220,226,.4);transition:background .15s;border-radius:0;margin:0}
      .doc-inv-row:hover{background:rgba(15,35,71,.012)}

      /* export button */
      .doc-export-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 24px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:500;color:var(--blue);background:transparent;border:1px solid var(--silver);cursor:pointer;font-family:inherit;transition:all .3s;margin-left:auto}
      .doc-export-btn:hover{border-color:var(--blue);background:rgba(15,35,71,.03)}
      .doc-export-btn:disabled{opacity:.4;cursor:not-allowed}
    `}</style>
  );
}

function useVisible(threshold = 0.05) {
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

const tabs = [
  { id: "invoice", label: "Invoice" },
  { id: "evaluation", label: "Evaluation Report" },
  { id: "brand", label: "Brand Guidelines" },
  { id: "typography", label: "Typography" },
];

export default function Documents() {
  const [ref, vis] = useVisible();
  const [activeTab, setActiveTab] = useState("invoice");
  const [exporting, setExporting] = useState(false);
  const docRef = useRef<HTMLDivElement>(null);

  const handleExport = useCallback(async () => {
    if (!docRef.current || exporting) return;
    setExporting(true);

    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const pages = docRef.current.querySelectorAll<HTMLElement>(".doc-page");
      if (!pages.length) return;

      const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [794, 1123], hotfixes: ["px_scaling"] });

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        const clone = page.cloneNode(true) as HTMLElement;
        clone.style.position = "absolute";
        clone.style.left = "-9999px";
        clone.style.top = "0";
        clone.style.width = "794px";
        clone.style.height = "1123px";
        clone.style.overflow = "visible";
        clone.style.boxShadow = "none";
        clone.style.transform = "none";
        clone.style.transition = "none";
        clone.style.opacity = "1";
        document.body.appendChild(clone);

        clone.querySelectorAll<HTMLElement>("*").forEach((el) => {
          el.style.transition = "none";
          el.style.animation = "none";
        });

        clone.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
          if (img.src.includes("logo.svg") && !img.src.includes("logo-dark")) {
            img.src = img.src.replace("logo.svg", "logo-dark.svg");
            img.style.filter = "none";
          }
        });

        const origInputs = page.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea");
        const cloneInputs = clone.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea");
        cloneInputs.forEach((input, idx) => {
          const orig = origInputs[idx];
          const val = orig ? orig.value : input.value || input.getAttribute("value") || "";
          const span = document.createElement("span");
          const cs = window.getComputedStyle(orig || input);
          span.textContent = val;
          span.style.cssText = `
            display:block;font-family:${cs.fontFamily};font-size:${cs.fontSize};font-weight:${cs.fontWeight};
            font-style:${cs.fontStyle};color:${cs.color};opacity:${cs.opacity};
            letter-spacing:${cs.letterSpacing};text-align:${cs.textAlign};
            line-height:${cs.lineHeight};width:${cs.width};
            padding:${cs.padding};margin:${cs.margin};
            white-space:pre-wrap;overflow:visible;
          `;
          input.parentNode?.replaceChild(span, input);
        });

        const canvas = await html2canvas(clone, {
          width: 794,
          height: 1123,
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: false,
          windowWidth: 794,
          windowHeight: 1123,
          x: 0,
          y: 0,
          scrollX: 0,
          scrollY: 0,
        });

        document.body.removeChild(clone);

        const imgData = canvas.toDataURL("image/png");
        if (i > 0) pdf.addPage([794, 1123]);
        pdf.addImage(imgData, "PNG", 0, 0, 794, 1123);
      }

      const filename = activeTab === "invoice"
        ? "SHC-Invoice-2026.pdf"
        : activeTab === "evaluation"
        ? "SHC-Evaluation-Report-2026.pdf"
        : activeTab === "brand"
        ? "SHC-Brand-Guidelines-2026.pdf"
        : "SHC-Typography-Guide.pdf";
      pdf.save(filename);
    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      setExporting(false);
    }
  }, [activeTab, exporting]);

  const anim = (delay: number) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translate3d(0,0,0)" : "translate3d(0,24px,0)",
    transition: `opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    willChange: "opacity, transform" as const,
  });

  return (
    <section style={{ padding: "120px 0", backgroundColor: "var(--white)" }}>
      <DocStyles />
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ ...anim(0), marginBottom: 24 }}>
          <p style={{ color: "var(--blue)", fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 400, opacity: 0.4 }}>
            Brand Collateral
          </p>
        </div>
        <div style={{ ...anim(0.08), maxWidth: 560, marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 300, color: "var(--blue)", lineHeight: 1.25 }}>
            Document <span style={{ fontWeight: 600 }}>templates</span>
          </h2>
        </div>

        {/* Tab navigation + Export */}
        <div style={{ ...anim(0.12), display: "flex", alignItems: "center", marginBottom: 56, borderBottom: "1px solid var(--silver)" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "14px 28px",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: activeTab === tab.id ? 500 : 300,
                color: "var(--blue)",
                opacity: activeTab === tab.id ? 1 : 0.4,
                backgroundColor: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? "2px solid var(--blue)" : "2px solid transparent",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.3s",
                marginBottom: -1,
              }}
            >
              {tab.label}
            </button>
          ))}
          <button
            className="doc-export-btn"
            onClick={handleExport}
            disabled={exporting}
            style={{ marginBottom: 8 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {exporting ? "Exporting…" : "Export PDF"}
          </button>
        </div>

        {/* Document */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div ref={docRef} style={{ transition: "opacity 0.4s" }}>
            {activeTab === "invoice" && <InvoicePage />}
            {activeTab === "evaluation" && <EvaluationReport />}
            {activeTab === "brand" && <BrandGuidelines />}
            {activeTab === "typography" && <TypographyGuide />}
          </div>
        </div>
      </div>
    </section>
  );
}
