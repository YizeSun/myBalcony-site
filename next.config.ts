import type { NextConfig } from "next";

const hostedBasePath =
  process.env.GITHUB_ACTIONS === "true" ? "/myBalcony-site" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: hostedBasePath,
  assetPrefix: hostedBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
