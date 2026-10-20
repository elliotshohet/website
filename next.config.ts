import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/coda",
        destination: "/work/freecoda",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
