/**
 * Extract current document data from the DOM for PDF export.
 * Reads input/textarea values from the visible document panel.
 */

import type { InvoiceData, InvoiceLineItem } from "./pdfExport";
import type { EvaluationData, EvalDept, EvalItem } from "./pdfExport";

function getInputs(container: HTMLElement): (HTMLInputElement | HTMLTextAreaElement)[] {
  return Array.from(container.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea"));
}

function getValues(container: HTMLElement): string[] {
  return getInputs(container).map((el) => el.value ?? "");
}

export function getInvoiceDataFromDom(root: HTMLElement): InvoiceData | null {
  const page = root.querySelector(".doc-page");
  if (!page) return null;
  const inputs = getInputs(page as HTMLElement);
  // Order: invoiceNo, date, dueDate (3), billName, billAttn, billAddr (3), subject (1), then per row: desc, detail, qty, rate (4)
  if (inputs.length < 8) return null;
  const v = inputs.map((i) => i.value);
  const invoiceNo = v[0] ?? "";
  const date = v[1] ?? "";
  const dueDate = v[2] ?? "";
  const billName = v[3] ?? "";
  const billAttn = v[4] ?? "";
  const billAddr = v[5] ?? "";
  const subject = v[6] ?? "";
  const rest = v.slice(7);
  const items: InvoiceLineItem[] = [];
  for (let i = 0; i + 4 <= rest.length; i += 4) {
    items.push({
      desc: rest[i] ?? "",
      detail: rest[i + 1] ?? "",
      qty: Math.max(0, Number(rest[i + 2]) || 0),
      rate: Math.max(0, Number(rest[i + 3]) || 0),
    });
  }
  const subtotal = items.reduce((s, it) => s + it.qty * it.rate, 0);
  const vat = subtotal * 0.077;
  const total = subtotal + vat;
  return {
    invoiceNo,
    date,
    dueDate,
    billName,
    billAttn,
    billAddr,
    subject,
    items,
    subtotal,
    vat,
    total,
  };
}

export function getEvaluationDataFromDom(root: HTMLElement): EvaluationData | null {
  const pages = root.querySelectorAll(".doc-page");
  if (pages.length < 2) return null;
  const allInputs = getInputs(root);
  const v = allInputs.map((i) => i.value);
  let idx = 0;

  // Page 1: Property, Location, Assessment Period, Report Date, Report Ref (5)
  const hotel = v[idx++] ?? "";
  const location = v[idx++] ?? "";
  const period = v[idx++] ?? "";
  const reportDate = v[idx++] ?? "";
  const reportRef = v[idx++] ?? "";

  // Page 2: summary textarea, then 5 strengths, 5 improvements
  const summaryText = v[idx++] ?? "";
  const strengths: string[] = [];
  for (let i = 0; i < 5; i++) strengths.push(v[idx++] ?? "");
  const improvements: string[] = [];
  for (let i = 0; i < 5; i++) improvements.push(v[idx++] ?? "");

  // Pages 3–5: each dept has name input then for each item: point, note, score (3 per item)
  const defaultDepts: EvalDept[] = [
    { name: "Front Office & Reception", items: [] },
    { name: "Housekeeping & Room Standards", items: [] },
    { name: "Food & Beverage", items: [] },
    { name: "Concierge & Guest Services", items: [] },
    { name: "Spa & Wellness", items: [] },
    { name: "Departure & Check-out", items: [] },
  ];
  const counts = [8, 8, 8, 7, 6, 6]; // item count per dept
  const depts: EvalDept[] = [];
  for (let d = 0; d < 6; d++) {
    const name = v[idx++] ?? defaultDepts[d]?.name ?? "";
    const itemCount = counts[d] ?? 0;
    const items: EvalItem[] = [];
    for (let i = 0; i < itemCount; i++) {
      const point = v[idx++] ?? "";
      const note = v[idx++] ?? "";
      const score = Math.min(100, Math.max(0, Number(v[idx++]) || 0));
      items.push({ point, score, note });
    }
    depts.push({ name, items });
  }

  const deptScores = depts.map((d) =>
    d.items.length ? Math.round(d.items.reduce((s, i) => s + i.score, 0) / d.items.length) : 0
  );
  const overallScore = deptScores.length
    ? Math.round(deptScores.reduce((a, b) => a + b, 0) / deptScores.length)
    : 0;

  return {
    hotel,
    location,
    period,
    reportDate,
    reportRef,
    summaryText,
    overallScore,
    strengths,
    improvements,
    depts,
    totalPages: 5,
  };
}
