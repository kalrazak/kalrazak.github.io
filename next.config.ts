/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Enable static export mode
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Do not block build on ESLint errors
  },
};

module.exports = nextConfig;

