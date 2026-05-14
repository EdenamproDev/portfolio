import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eden Amzallag — AI-Assisted Product Builder",
  description:
    "Computer Science student exploring the intersection of product thinking, mobile development and modern AI workflows.",
  metadataBase: new URL("https://edenamzallag.dev"),
  openGraph: {
    title: "Eden Amzallag — AI-Assisted Product Builder",
    description:
      "Building modern mobile products for real-world operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-ink antialiased font-sans selection:bg-accent/30">
        {children}
      </body>
    </html>
  );
}
