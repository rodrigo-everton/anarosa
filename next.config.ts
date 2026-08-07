import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/kits",
        destination: "/produtos",
        permanent: false,
      },
      {
        source: "/quem-somos",
        destination: "/sobre",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
