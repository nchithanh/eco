import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages demo deploys.
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/eco",
        assetPrefix: "/eco",
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
