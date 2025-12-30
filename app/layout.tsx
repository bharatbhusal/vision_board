import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vision Board 2026",
  description: "A calm, intentional vision board for your goals and aspirations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
