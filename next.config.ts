import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // Optimize images — allows next/image to serve optimized WebP/AVIF
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Compress responses
  compress: true,
  // Powered-by header removal (security + tiny perf)
  poweredByHeader: false,
};

export default nextConfig;
