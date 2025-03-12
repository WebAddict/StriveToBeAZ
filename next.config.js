/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        port: '', // Leave empty unless a specific port is required
        pathname: '/t4tWTFbtcosKvDi5rJCaNw/**', // Match the path structure of your image URL
      },
    ],
  },
  };
  module.exports = nextConfig;