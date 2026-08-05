import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
/** Custom domain serves at site root (no /eco path prefix). */
const basePath = "";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages deploys.
  ...(isGithubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  // Inline CSS into <style> to remove render-blocking stylesheet requests (PSI).
  experimental: {
    inlineCss: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
