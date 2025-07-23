import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["geist"],
  images: {
    domains: ["source.unsplash.com"],
  },
};

export default nextConfig;
