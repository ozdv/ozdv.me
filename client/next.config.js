/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "play.google.com" }],
    // domains: ["play.google.com"],
  },
};

module.exports = nextConfig;
