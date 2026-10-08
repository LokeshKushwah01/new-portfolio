import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  // Section paths serve the single-page home so /projects etc. work on reload
  async rewrites() {
    return ["about", "skills", "projects", "experience", "contact"].map((s) => ({
      source: `/${s}`,
      destination: "/",
    }));
  },
};

export default nextConfig;
