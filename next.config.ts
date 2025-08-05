/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'http',
        hostname: 'i.postimg.cc',
      },
    ],
    unoptimized: false, // Keep Next.js optimization ON
  },
  experimental: {
    optimizePackageImports: ['next-image-loader'],
  },
};

export default nextConfig;