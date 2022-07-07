/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:q",
        destination: "https://api.gemock.com/api/:q",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
