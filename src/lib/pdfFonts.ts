/**
 * PDF font configuration — Helvetica (built-in to jsPDF).
 */

export type FontKind = "helvetica";

export async function registerPdfFont(pdf: import("jspdf").jsPDF): Promise<FontKind> {
  pdf.setFont("helvetica", "normal");
  return "helvetica";
}

export function getPdfFontName(): string {
  return "helvetica";
}
