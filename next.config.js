/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.experiments = { topLevelAwait: true };
    return config;
  },
  reactStrictMode: true,
  env: {
    GOV_CORE_RPC: 'GOV_CORE_RPC',
  },
  publicRuntimeConfig: {
    GOV_CORE_RPC: process.env.GOV_CORE_RPC,
  },
};

module.exports = nextConfig;
