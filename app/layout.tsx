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

const SITE_URL = "https://trackerhub.in";
const TITLE = "Lokesh Kushwah — Full-Stack Developer";
const DESCRIPTION =
  "I'm Lokesh Kushwah, a full stack developer in Gwalior, India. I build fast, reliable web and mobile apps with React, Next.js, Node.js and MongoDB. See my projects and get in touch.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "TrackerHub",
  keywords: [
    "Lokesh Kushwah",
    "Lokesh Kushwah developer",
    "TrackerHub",
    "trackerhub.in",
    "TrackerHub portfolio",
    "full stack developer in Gwalior",
    "web developer Gwalior",
    "React developer Gwalior",
    "Next.js developer Gwalior",
    "Node.js developer Gwalior",
    "software developer Gwalior",
    "freelance web developer Gwalior",
    "hire full stack developer Gwalior",
    "full stack developer",
    "full stack web developer",
    "MERN stack developer",
    "React Next.js developer",
    "Node.js developer",
    "React Native developer",
    "freelance full stack developer India",
    "full stack developer portfolio",
  ],
  authors: [{ name: "Lokesh Kushwah", url: SITE_URL }],
  creator: "Lokesh Kushwah",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "TrackerHub",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "TrackerHub",
      alternateName: "trackerhub.in",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Lokesh Kushwah",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/avatar.png`,
      jobTitle: "Full-Stack Developer",
      workLocation: { "@type": "Place", name: "Gwalior, Madhya Pradesh, India" },
      email: "mailto:lokeshkushwah192@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gwalior",
        addressCountry: "IN",
      },
      knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
      sameAs: [
        "https://github.com/LokeshKushwah01",
        "https://www.linkedin.com/in/lokesh-kushwah-75974b230",
      ],
      mainEntityOfPage: { "@id": `${SITE_URL}/#website` },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
