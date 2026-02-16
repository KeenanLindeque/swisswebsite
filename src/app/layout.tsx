import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swiss Hospitality Company | A World of Hospitality",
  description:
    "Award-winning management consulting firm providing versatile advisory solutions spanning from strategy to execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
