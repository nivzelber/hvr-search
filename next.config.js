/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

const withPWA = require("next-pwa")({
  dest: "public"
});

module.exports = process.env.NODE_ENV !== "development" ? withPWA(nextConfig) : nextConfig;
