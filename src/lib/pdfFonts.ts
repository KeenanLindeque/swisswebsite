/**
 * Load Optima (or Optima-like) font for jsPDF.
 * Tries: public/fonts/Optima-Regular.ttf + Optima-Bold.ttf (real Optima if you add them).
 * Fallback: Libertinus Sans (OFL, humanist sans similar to Optima) from public/fonts.
 */

async function fetchFontAsBase64(path: string): Promise<string | null> {
  try {
    const res = await fetch(path);
    if (!res.ok) return null;
    const buf = await res.arrayBuffer();
    const bytes = new Uint8Array(buf);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  } catch {
    return null;
  }
}

export type FontKind = "optima" | "helvetica";

let cached: FontKind | null = null;

/**
 * Register Optima (or fallback) with jsPDF. Call once before drawing.
 * Returns the font name to use with setFont: "Optima" or "helvetica".
 */
export async function registerPdfFont(pdf: import("jspdf").jsPDF): Promise<FontKind> {
  if (cached !== null) {
    pdf.setFont(cached === "optima" ? "Optima" : "helvetica", "normal");
    return cached;
  }

  // Relative to current origin (browser); export runs client-side only
  const optimaRegular = await fetchFontAsBase64("/fonts/Optima-Regular.ttf");
  const optimaBold = await fetchFontAsBase64("/fonts/Optima-Bold.ttf");
  const libertinusRegular = await fetchFontAsBase64("/fonts/LibertinusSans-Regular.ttf");
  const libertinusBold = await fetchFontAsBase64("/fonts/LibertinusSans-Bold.ttf");

  if (optimaRegular && optimaBold) {
    pdf.addFileToVFS("Optima-Regular.ttf", optimaRegular);
    pdf.addFileToVFS("Optima-Bold.ttf", optimaBold);
    pdf.addFont("Optima-Regular.ttf", "Optima", "normal");
    pdf.addFont("Optima-Bold.ttf", "Optima", "bold");
    cached = "optima";
    pdf.setFont("Optima", "normal");
    return "optima";
  }

  if (libertinusRegular && libertinusBold) {
    pdf.addFileToVFS("Optima-Regular.ttf", libertinusRegular);
    pdf.addFileToVFS("Optima-Bold.ttf", libertinusBold);
    pdf.addFont("Optima-Regular.ttf", "Optima", "normal");
    pdf.addFont("Optima-Bold.ttf", "Optima", "bold");
    cached = "optima";
    pdf.setFont("Optima", "normal");
    return "optima";
  }

  cached = "helvetica";
  pdf.setFont("helvetica", "normal");
  return "helvetica";
}

export function getPdfFontName(): string {
  return cached === "optima" ? "Optima" : "helvetica";
}
