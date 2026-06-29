import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Loader } from "@/components/Loader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokesh Kushwah — Full-Stack Developer",
  description:
    "Portfolio of Lokesh Kushwah — Full-Stack Developer specialising in React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#080B14] text-slate-200">
        <ParticlesBackground />
        <div className="relative" style={{ zIndex: 1 }}>
          <Loader />
          <ScrollProgress />
          <SmoothScroll>{children}</SmoothScroll>
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
