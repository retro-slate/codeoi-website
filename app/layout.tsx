import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeOI — Write Logic. Generate Code.",
  description:
    "CodeOI is an open-source semantic programming layer that turns clean, structured logic into readable, deterministic code.",
  metadataBase: new URL("https://codeoi.dev"),
  openGraph: {
    title: "CodeOI — Write Logic. Generate Code.",
    description:
      "A deterministic semantic programming layer for writing clean logic and generating real code.",
    type: "website",
  },
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
