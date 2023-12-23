/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["gateway.ipfs.io", "ipfs.infura.io"],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:5001/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
