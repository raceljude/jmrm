import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jessa Mae Maigue | Senior Marketing Analyst",
  description:
    "Portfolio of Jessa Mae Maigue - Senior Marketing Analyst specializing in data-driven marketing, analytics, and reporting systems.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F9FA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
