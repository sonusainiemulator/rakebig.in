import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RakeBig.in — AI Agency | Deployment, Automation & Voice AI",
  description:
    "India's premier AI agency. We deploy AI agents, automation workflows, custom voice bots, and open-source AI projects. Expert AI maintenance 24/7.",
  keywords: "AI agency, AI agent deployment, AI automation, voice AI, open source AI, AI maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100">{children}</body>
    </html>
  );
}
