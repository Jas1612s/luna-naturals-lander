import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1200],
    imageSizes: [48, 96, 256],
  },
};

export default nextConfig;
