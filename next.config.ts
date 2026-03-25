import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your GitHub repo is named "personal-website", uncomment the line below:
  // basePath: '/personal-website',
};

export default nextConfig;
