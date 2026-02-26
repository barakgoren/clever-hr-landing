import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claver HR — Hire Smarter, Build Better Teams",
  description:
    "A multi-tenant HR management platform. Publish your branded job board, build custom application forms, and track candidates through a configurable hiring pipeline.",
  keywords: [
    "HR management",
    "hiring platform",
    "applicant tracking",
    "job board",
    "recruiting software",
  ],
  openGraph: {
    title: "Claver HR — Hire Smarter, Build Better Teams",
    description:
      "A multi-tenant HR management platform for managing job openings and candidate applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
