import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Without this Turbopack walks up to ~/yarn.lock and treats the home
  // directory as the workspace root, which slows down dev/build file watching.
  turbopack: {
    root: __dirname,
  },
  images: {
    loader: "custom",
    loaderFile: "./sanity/lib/imageLoader.ts",
    qualities: [80],
    // Images never render wider than ~650 CSS px in this grid, so the 2048 and
    // 3840 candidates the default ladder offers are dead weight in every srcset.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
