import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeOI | Code Operational Intelligence",
  description:
    "A deterministic semantic programming layer for writing clean logic and generating real code.",
  icons: {
    icon: "/favicon.ico",
  },
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