/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

const withPWA = require("next-pwa")({
  dest: "public"
});
const { withAxiom } = require("next-axiom");

module.exports =
  process.env.NODE_ENV !== "development" ? withAxiom(withPWA(nextConfig)) : nextConfig;
