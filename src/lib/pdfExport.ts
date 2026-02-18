/**
 * Clean, editable PDF export using jsPDF text/vector API only (no images).
 * All content is real text — selectable and editable in any PDF viewer.
 *
 * Font: Optima (from public/fonts/Optima-*.ttf if present, else Libertinus Sans from public/fonts).
 * Sizes and weights match the UI; letter-spacing on labels via charSpace.
 */

import type { jsPDF } from "jspdf";
import { getPdfFontName, registerPdfFont } from "@/lib/pdfFonts";

const BLUE = { r: 15, g: 35, b: 71 } as const;
const MUTED = { r: 90, g: 100, b: 120 } as const; // readable, no opacity API needed
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 40;
const CONTENT_W = PAGE_W - MARGIN * 2;

function setBlue(pdf: jsPDF, opacity = 1) {
  if (opacity >= 1) {
    pdf.setTextColor(BLUE.r, BLUE.g, BLUE.b);
    pdf.setDrawColor(BLUE.r, BLUE.g, BLUE.b);
  } else {
    pdf.setTextColor(MUTED.r, MUTED.g, MUTED.b);
    pdf.setDrawColor(MUTED.r, MUTED.g, MUTED.b);
  }
}

function line(pdf: jsPDF, x1: number, y1: number, x2: number, y2: number, opacity = 1) {
  setBlue(pdf, opacity);
  pdf.line(x1, y1, x2, y2);
}

/**
 * Draw text once. Uses Optima (or helvetica fallback). Use xRight for right-edge position.
 */
function text(
  pdf: jsPDF,
  str: string,
  x: number,
  y: number,
  opts?: {
    size?: number;
    bold?: boolean;
    opacity?: number;
    xRight?: number;
    /** Letter-spacing in pt (e.g. 0.5 for labels, -0.2 for tight title) */
    charSpace?: number;
  }
) {
  setBlue(pdf, opts?.opacity ?? 1);
  const size = opts?.size ?? 10;
  pdf.setFontSize(size);
  pdf.setFont(getPdfFontName(), opts?.bold ? "bold" : "normal");
  const charSpace = opts?.charSpace ?? 0;
  const textOpts = charSpace !== 0 ? { charSpace } : undefined;
  const width =
    pdf.getTextWidth(str) + (charSpace !== 0 && str.length > 0 ? (str.length - 1) * charSpace : 0);
  const drawX = opts?.xRight !== undefined ? opts.xRight - width : x;
  if (textOpts) pdf.text(str, drawX, y, textOpts);
  else pdf.text(str, drawX, y);
}

// ─── Invoice data types and builder ───────────────────────────────────────
export interface InvoiceLineItem {
  desc: string;
  detail: string;
  qty: number;
  rate: number;
}

export interface InvoiceData {
  invoiceNo: string;
  date: string;
  dueDate: string;
  billName: string;
  billAttn: string;
  billAddr: string;
  subject: string;
  items: InvoiceLineItem[];
  subtotal: number;
  vat: number;
  total: number;
}

const fmtNum = (n: number) => n.toLocaleString("en-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export async function buildInvoicePdf(data: InvoiceData): Promise<jsPDF> {
  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  await registerPdfFont(pdf);
  let y = MARGIN;

  // Top bar
  pdf.setFillColor(BLUE.r, BLUE.g, BLUE.b);
  pdf.rect(0, 0, PAGE_W, 4, "F");
  y += 20;

  // Sizes match UI (px → pt): 28→21, 10→8, 11→8, 13→10, 9→7, 15→11. Labels use letter-spacing (charSpace).
  // Logo area — UI: company prominent, address 10px/300, muted
  text(pdf, "Swiss Hospitality Company", MARGIN, y, { size: 10, bold: true });
  y += 6;
  text(pdf, "Bahnhofstrasse 42", MARGIN, y, { size: 8, opacity: 0.5 });
  y += 5;
  text(pdf, "8001 Zürich, Switzerland", MARGIN, y, { size: 8, opacity: 0.5 });
  y += 5;
  text(pdf, "info@swisshospitality.com", MARGIN, y, { size: 8, opacity: 0.5 });
  y += 24;

  // Invoice title — UI: 28px, weight 200, letterSpacing -0.02em
  text(pdf, "Invoice", PAGE_W - MARGIN, y, { size: 21, charSpace: -0.2, xRight: PAGE_W - MARGIN });
  y += 20;
  // Meta labels: 9px, uppercase, 0.15em → 7pt + charSpace. Values: 11px, 500 → 8pt bold
  text(pdf, "Invoice No.", PAGE_W - MARGIN - 140, y, { size: 7, opacity: 0.4, charSpace: 0.5 });
  text(pdf, data.invoiceNo, PAGE_W - MARGIN, y, { size: 8, bold: true, xRight: PAGE_W - MARGIN });
  y += 8;
  text(pdf, "Date", PAGE_W - MARGIN - 140, y, { size: 7, opacity: 0.4, charSpace: 0.5 });
  text(pdf, data.date, PAGE_W - MARGIN, y, { size: 8, bold: true, xRight: PAGE_W - MARGIN });
  y += 8;
  text(pdf, "Due Date", PAGE_W - MARGIN - 140, y, { size: 7, opacity: 0.4, charSpace: 0.5 });
  text(pdf, data.dueDate, PAGE_W - MARGIN, y, { size: 8, bold: true, xRight: PAGE_W - MARGIN });
  y += 8;
  text(pdf, "Currency", PAGE_W - MARGIN - 140, y, { size: 7, opacity: 0.4, charSpace: 0.5 });
  text(pdf, "CHF", PAGE_W - MARGIN, y, { size: 8, bold: true, xRight: PAGE_W - MARGIN });
  y += 24;

  // Bill To — UI: label 9px/0.15em, name 13px/500, attn/addr 11px/300 muted
  text(pdf, "BILL TO", MARGIN, y, { size: 7, opacity: 0.4, charSpace: 0.5 });
  y += 10;
  line(pdf, MARGIN, y, MARGIN + 40, y, 0.15);
  y += 14;
  text(pdf, data.billName, MARGIN, y, { size: 10, bold: true });
  y += 8;
  text(pdf, data.billAttn, MARGIN, y, { size: 8, opacity: 0.5 });
  y += 6;
  text(pdf, data.billAddr, MARGIN, y, { size: 8, opacity: 0.5 });
  y += 22;

  // Subject — UI: label 9px, value 11px/400
  line(pdf, MARGIN, y, PAGE_W - MARGIN, y, 0.2);
  y += 14;
  text(pdf, "Subject", MARGIN, y, { size: 7, opacity: 0.4, charSpace: 0.5 });
  text(pdf, data.subject, MARGIN + 60, y, { size: 8 });
  y += 14;
  line(pdf, MARGIN, y, PAGE_W - MARGIN, y, 0.2);
  y += 22;

  // Table header — UI: 9px labels, uppercase
  text(pdf, "Description", MARGIN, y, { size: 7, opacity: 0.4, charSpace: 0.5 });
  text(pdf, "Qty", MARGIN + 320, y, { size: 7, opacity: 0.4, charSpace: 0.5 });
  text(pdf, "Rate", MARGIN + 370, y, { size: 7, opacity: 0.4, charSpace: 0.5 });
  text(pdf, "Amount", PAGE_W - MARGIN - 70, y, { size: 7, opacity: 0.4, charSpace: 0.5, xRight: PAGE_W - MARGIN - 70 });
  y += 6;
  line(pdf, MARGIN, y, PAGE_W - MARGIN, y, 1);
  y += 14;

  // Line items — UI: desc 11px/400, detail 10px/300 muted, numbers 11px
  for (const item of data.items) {
    const amount = item.qty * item.rate;
    const rowY = y;
    text(pdf, item.desc, MARGIN, rowY, { size: 8 });
    y += 6;
    text(pdf, item.detail, MARGIN, y, { size: 7.5, opacity: 0.5 });
    y += 10;
    text(pdf, String(item.qty), MARGIN + 320, rowY, { size: 8 });
    text(pdf, fmtNum(item.rate), MARGIN + 370, rowY, { size: 8, opacity: 0.7 });
    text(pdf, fmtNum(amount), PAGE_W - MARGIN - 70, rowY, { size: 8, bold: true, xRight: PAGE_W - MARGIN - 70 });
    line(pdf, MARGIN, y, PAGE_W - MARGIN, y, 0.15);
    y += 18;
  }

  y += 12;
  text(pdf, "Subtotal", PAGE_W - MARGIN - 180, y, { size: 8, opacity: 0.5 });
  text(pdf, "CHF " + fmtNum(data.subtotal), PAGE_W - MARGIN, y, { size: 8, xRight: PAGE_W - MARGIN });
  y += 10;
  text(pdf, "VAT (7.7%)", PAGE_W - MARGIN - 180, y, { size: 8, opacity: 0.5 });
  text(pdf, "CHF " + fmtNum(data.vat), PAGE_W - MARGIN, y, { size: 8, xRight: PAGE_W - MARGIN });
  y += 6;
  line(pdf, PAGE_W - MARGIN - 180, y, PAGE_W - MARGIN, y, 0.2);
  y += 14;
  text(pdf, "Total Due", PAGE_W - MARGIN - 180, y, { size: 10, bold: true });
  text(pdf, "CHF " + fmtNum(data.total), PAGE_W - MARGIN, y, { size: 11, bold: true, xRight: PAGE_W - MARGIN });
  y += 28;

  // Payment & Terms
  line(pdf, MARGIN, y, PAGE_W - MARGIN, y, 0.2);
  y += 20;
  text(pdf, "Payment Details", MARGIN, y, { size: 7, opacity: 0.4, charSpace: 0.5 });
  y += 10;
  line(pdf, MARGIN, y, MARGIN + 28, y, 0.15);
  y += 14;
  text(pdf, "Bank: UBS Switzerland AG", MARGIN, y, { size: 8, opacity: 0.5 });
  y += 10;
  text(pdf, "IBAN: CH93 0028 8288 4590 1200 0", MARGIN, y, { size: 8, opacity: 0.5 });
  y += 10;
  text(pdf, "BIC/SWIFT: UBSWCHZH80A", MARGIN, y, { size: 8, opacity: 0.5 });
  y += 10;
  text(pdf, "Reference: " + data.invoiceNo, MARGIN, y, { size: 8, opacity: 0.5 });
  y += 22;

  text(pdf, "Terms", PAGE_W - MARGIN - 200, y - 32, { size: 7, opacity: 0.4, charSpace: 0.5 });
  line(pdf, PAGE_W - MARGIN - 200, y - 22, PAGE_W - MARGIN - 172, y - 22, 0.15);
  text(pdf, "Payment due within 30 days of invoice date.", PAGE_W - MARGIN - 200, y - 8, { size: 8, opacity: 0.5 });
  text(pdf, "All amounts in Swiss Francs (CHF).", PAGE_W - MARGIN - 200, y + 4, { size: 8, opacity: 0.5 });
  text(pdf, "Late payments subject to 5% p.a. interest.", PAGE_W - MARGIN - 200, y + 16, { size: 8, opacity: 0.5 });

  // Footer
  y = PAGE_H - 28;
  line(pdf, MARGIN, y - 12, PAGE_W - MARGIN, y - 12, 0.15);
  text(pdf, "Swiss Hospitality Company — swisshospitality.com", MARGIN, y, { size: 8, opacity: 0.4 });
  text(pdf, "Page 1 of 1", PAGE_W - MARGIN, y, { size: 8, opacity: 0.4, xRight: PAGE_W - MARGIN });

  return pdf;
}

// ─── Evaluation report data types and builder ──────────────────────────────
export interface EvalItem {
  point: string;
  score: number;
  note: string;
}

export interface EvalDept {
  name: string;
  items: EvalItem[];
}

export interface EvaluationData {
  hotel: string;
  location: string;
  period: string;
  reportDate: string;
  reportRef: string;
  summaryText: string;
  overallScore: number;
  strengths: string[];
  improvements: string[];
  depts: EvalDept[];
  totalPages: number;
}

function deptScore(d: EvalDept): number {
  if (!d.items.length) return 0;
  return Math.round(d.items.reduce((s, i) => s + i.score, 0) / d.items.length);
}

export async function buildEvaluationPdf(data: EvaluationData): Promise<jsPDF> {
  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  await registerPdfFont(pdf);
  const totalPages = data.totalPages;

  // ─── Page 1: Cover ───
  let y = MARGIN;
  pdf.setFillColor(BLUE.r, BLUE.g, BLUE.b);
  pdf.rect(0, 0, PAGE_W, 4, "F");
  y += 50;
  text(pdf, "Confidential Assessment Report", MARGIN, y, { size: 8, opacity: 0.4 });
  y += 24;
  line(pdf, MARGIN, y, MARGIN + 64, y, 0.15);
  y += 20;
  text(pdf, "Hotel Quality", MARGIN, y, { size: 28 });
  y += 32;
  text(pdf, "Evaluation Report", MARGIN, y, { size: 28 });
  y += 24;
  const intro = `Mystery guest assessment and operational quality evaluation for ${data.hotel}, ${data.location}.`;
  pdf.text(intro, MARGIN, y, { maxWidth: 320 });
  y += 56;

  line(pdf, MARGIN, y, PAGE_W - MARGIN, y, 0.2);
  y += 28;
  const meta = [
    ["Property", data.hotel],
    ["Location", data.location],
    ["Assessment Period", data.period],
    ["Report Date", data.reportDate],
    ["Report Ref.", data.reportRef],
    ["Classification", "Confidential"],
  ];
  const colW = CONTENT_W / 3;
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 3; col++) {
      const i = row * 3 + col;
      if (i >= meta.length) break;
      const x = MARGIN + col * colW + (col === 0 ? 0 : 24);
      text(pdf, meta[i][0], x, y, { size: 8, opacity: 0.4 });
      text(pdf, meta[i][1], x, y + 10, { size: 10 });
    }
    y += 48;
  }

  y = PAGE_H - 28;
  line(pdf, MARGIN, y - 12, PAGE_W - MARGIN, y - 12, 0.15);
  setBlue(pdf, 0.25);
  pdf.setFontSize(8);
  pdf.text("Swiss Hospitality Company — Confidential", MARGIN, y);
  text(pdf, `Page 1 of ${totalPages}`, PAGE_W - MARGIN, y, { size: 8, opacity: 0.4, xRight: PAGE_W - MARGIN });

  // ─── Page 2: Executive Summary ───
  pdf.addPage();
  y = MARGIN;
  pdf.setFillColor(BLUE.r, BLUE.g, BLUE.b);
  pdf.rect(0, 0, PAGE_W, 4, "F");
  y += 24;

  text(pdf, "Executive Summary", MARGIN, y, { size: 8, opacity: 0.4 });
  y += 10;
  line(pdf, MARGIN, y, MARGIN + 48, y, 0.15);
  y += 16;
  text(pdf, "Overall Assessment", MARGIN, y, { size: 18 });
  y += 36;

  // Score box
  const scoreLabel = data.overallScore >= 90 ? "Distinguished Hospitality" : data.overallScore >= 80 ? "Commended Excellence" : "Verified Quality";
  text(pdf, String(data.overallScore), MARGIN + 43, y + 20, { size: 20 });
  text(pdf, scoreLabel, MARGIN + 100, y, { size: 12 });
  const summaryLines = pdf.splitTextToSize(data.summaryText, 320);
  pdf.text(summaryLines, MARGIN + 100, y + 16);
  y += 56;

  text(pdf, "Department Scores", MARGIN, y, { size: 8, opacity: 0.4 });
  y += 14;
  line(pdf, MARGIN, y, MARGIN + 48, y, 0.15);
  y += 22;

  for (const d of data.depts) {
    text(pdf, d.name, MARGIN, y, { size: 10 });
    text(pdf, String(deptScore(d)), PAGE_W - MARGIN - 30, y, { size: 10, xRight: PAGE_W - MARGIN - 30 });
    y += 14;
  }
  y += 24;

  text(pdf, "Key Strengths", MARGIN, y, { size: 8, opacity: 0.4 });
  y += 18;
  for (const s of data.strengths) {
    pdf.text("• " + s, MARGIN, y, { maxWidth: 220 });
    y += pdf.getTextDimensions("• " + s, { maxWidth: 220 }).h + 4;
  }
  y += 12;

  let y2 = y - (data.strengths.length * 18) - 30;
  text(pdf, "Areas for Improvement", MARGIN + 260, y2, { size: 8, opacity: 0.4 });
  y2 += 18;
  for (const s of data.improvements) {
    pdf.text("• " + s, MARGIN + 260, y2, { maxWidth: 220 });
    y2 += 18;
  }

  y = Math.max(y, y2) + 24;
  y = PAGE_H - 28;
  line(pdf, MARGIN, y - 12, PAGE_W - MARGIN, y - 12, 0.15);
  setBlue(pdf, 0.25);
  pdf.setFontSize(8);
  pdf.text("Swiss Hospitality Company — Confidential", MARGIN, y);
  text(pdf, `Page 2 of ${totalPages}`, PAGE_W - MARGIN, y, { size: 8, opacity: 0.4, xRight: PAGE_W - MARGIN });

  // ─── Pages 3–5: Department breakdown (2 depts per page) ───
  for (let p = 0; p < data.depts.length; p++) {
    if (p % 2 === 0) {
      pdf.addPage();
      y = MARGIN;
      pdf.setFillColor(BLUE.r, BLUE.g, BLUE.b);
      pdf.rect(0, 0, PAGE_W, 4, "F");
      y += 24;
      text(pdf, p === 0 ? "Detailed Assessment" : "Detailed Assessment — Continued", MARGIN, y, { size: 8, opacity: 0.4 });
      y += 10;
      line(pdf, MARGIN, y, MARGIN + 48, y, 0.15);
      y += 16;
      text(pdf, "Department Breakdown", MARGIN, y, { size: 18 });
      y += 28;
    }

    const dept = data.depts[p];
    if (!dept) continue;
    text(pdf, dept.name + " — " + deptScore(dept), MARGIN, y, { size: 12 });
    y += 8;
    line(pdf, MARGIN, y, PAGE_W - MARGIN, y, 1);
    y += 16;

    for (const item of dept.items) {
      if (y > PAGE_H - 80) {
        pdf.addPage();
        y = MARGIN + 20;
      }
      text(pdf, item.point, MARGIN, y, { size: 10, opacity: 0.8 });
      text(pdf, String(item.score), PAGE_W - MARGIN - 80, y, { size: 10, xRight: PAGE_W - MARGIN - 80 });
      y += 8;
      text(pdf, item.note, MARGIN, y, { size: 8, opacity: 0.4 });
      y += 14;
    }
    y += 16;
  }

  // Footers for all pages (and signatures on last)
  const lastPage = pdf.getNumberOfPages();
  for (let n = 3; n <= lastPage; n++) {
    pdf.setPage(n);
    const footerY = PAGE_H - 28;
    line(pdf, MARGIN, footerY - 12, PAGE_W - MARGIN, footerY - 12, 0.15);
    setBlue(pdf, 0.4);
    pdf.setFontSize(8);
    pdf.text("Swiss Hospitality Company — Confidential", MARGIN, footerY);
    text(pdf, `Page ${n} of ${totalPages}`, PAGE_W - MARGIN, footerY, { size: 8, opacity: 0.4, xRight: PAGE_W - MARGIN });
  }
  pdf.setPage(lastPage);
  const sigY = PAGE_H - 100;
  line(pdf, MARGIN, sigY - 8, MARGIN + 148, sigY - 8, 0.15);
  text(pdf, "Lead Assessor", MARGIN, sigY + 24);
  text(pdf, "Swiss Hospitality Company", MARGIN, sigY + 34, { size: 9, opacity: 0.5 });
  line(pdf, MARGIN + 180, sigY - 8, MARGIN + 328, sigY - 8, 0.15);
  text(pdf, "Quality Director", MARGIN + 180, sigY + 24);
  text(pdf, "Swiss Hospitality Company", MARGIN + 180, sigY + 34, { size: 9, opacity: 0.5 });

  return pdf;
}

// ─── Typography guide (static content) ──────────────────────────────────────
export async function buildTypographyPdf(): Promise<jsPDF> {
  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  await registerPdfFont(pdf);
  let y = MARGIN;

  pdf.setFillColor(BLUE.r, BLUE.g, BLUE.b);
  pdf.rect(0, 0, PAGE_W, 4, "F");
  y += 24;

  text(pdf, "Brand Typography System", MARGIN, y, { size: 8, opacity: 0.4 });
  y += 14;
  line(pdf, MARGIN, y, MARGIN + 64, y, 0.15);
  y += 16;
  text(pdf, "Document Text Styles", MARGIN, y, { size: 24 });
  y += 36;

  const sections = [
    { label: "Display", rows: ["Hotel Quality", "Evaluation Report"] },
    { label: "Title", rows: ["Invoice", "Overall Assessment"] },
    { label: "Heading", rows: ["Front Office & Reception", "CHF 33'387.00"] },
    { label: "Body", rows: ["Mystery Guest Assessment — Full Property", "92", "Greeting within 10 seconds of arrival"] },
    { label: "Small & Label", rows: ["3-night stay, all F&B outlets", "Payment Details", "Swiss Hospitality Company — Confidential"] },
  ];

  for (const s of sections) {
    text(pdf, s.label, MARGIN, y, { size: 8, opacity: 0.4 });
    y += 14;
    for (const row of s.rows) {
      text(pdf, row, MARGIN, y, { size: 10 });
      y += 12;
    }
    y += 12;
  }

  y += 12;
  text(pdf, "Score Opacity: 90+ → 1, 80–89 → 0.65, < 80 → 0.4", MARGIN, y, { size: 9, opacity: 0.5 });
  y += 10;
  text(pdf, "Line Heights: Titles 1.15, Default 1.4, Paragraphs 1.7", MARGIN, y, { size: 9, opacity: 0.5 });
  y += 24;

  line(pdf, MARGIN, y, PAGE_W - MARGIN, y, 0.2);
  y += 20;
  pdf.text("All text uses #0F2347. Four size tiers: 9px labels, 10–11px body, 13–15px headings, 22–38px display.", MARGIN, y, { maxWidth: CONTENT_W });
  y = PAGE_H - 28;
  line(pdf, MARGIN, y - 12, PAGE_W - MARGIN, y - 12, 0.15);
  text(pdf, "Swiss Hospitality Company — Typography Guide", MARGIN, y, { size: 8, opacity: 0.4 });
  text(pdf, "Page 1 of 1", PAGE_W - MARGIN, y, { size: 8, opacity: 0.4, xRight: PAGE_W - MARGIN });

  return pdf;
}
