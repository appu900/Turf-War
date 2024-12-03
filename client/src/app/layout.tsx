import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "War App",
  description: "A social media war webapp for the masses",
};
const inter = Inter({
  subsets: ["latin"], // Ensure you specify the subset
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 antialiased`}>{children}</body>
    </html>
  );
}
