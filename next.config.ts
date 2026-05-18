import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
