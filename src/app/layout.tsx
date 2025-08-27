import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dataporto - Multi-Platform Data Sharing Service",
  description:
    "The fastest, easiest, and most secure way to share live data through Snowflake, Databricks, or sFTP — without building or maintaining custom pipelines.",
  keywords:
    "Snowflake, Databricks, sFTP, data sharing, data platform, enterprise data, zero-copy sharing, data governance, multi-platform",
  openGraph: {
    title: "Dataporto - Multi-Platform Data Sharing Service",
    description:
      "Share live data the way clients expect it — securely and instantly. Multi-platform data sharing delivered as a service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
