
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Intellinx - An AI customer support assistant",
  description:
    "Intellinx learns from your docs, knowledge base, and business information to give customers accurate, helpful answers—while knowing when to bring a human into the conversation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-[#050509] font-sans text-zinc-100 antialiased selection:bg-zinc-700 selection:text-white">
        
        {/* Static background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
        >
          {/* Top glow */}
          <div className="absolute left-1/2 -top-70 h-150 w-225 -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

          {/* Left glow */}
          <div className="absolute -left-75 top-[20%] h-125 w-125 rounded-full bg-white/2 blur-[120px]" />

          {/* Right glow */}
          <div className="absolute -right-75 top-[35%] h-125 w-125 rounded-full bg-white/2 blur-[120px]" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#050509]" />
        </div>

        {/* Main application */}
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

