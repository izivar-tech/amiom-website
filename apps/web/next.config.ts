import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@amiom/ui", "@amiom/constants"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  optimizeFonts: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
