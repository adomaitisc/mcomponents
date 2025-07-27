import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["geist"],
  images: {
    domains: ["source.unsplash.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.tsx?$/, // or .jsx? if needed
      resourceQuery: /raw/, // only apply to imports with ?raw
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
