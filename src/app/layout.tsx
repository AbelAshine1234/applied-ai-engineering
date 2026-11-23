import type { Metadata } from "next";
import "./globals.css";
import { DocsProvider } from "../context/DocsContext";

export const metadata: Metadata = {
  title: "Applied AI Engineering — Master Documentation & Production Roadmap",
  description:
    "Comprehensive 16-phase production curriculum and 55-module engineering roadmap with curated video lectures, real-world deliverables, and 9-step verification contracts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <DocsProvider>{children}</DocsProvider>
      </body>
    </html>
  );
}
