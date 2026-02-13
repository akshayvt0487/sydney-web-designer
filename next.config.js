/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.leadweb.com.au',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // Enable static exports for better performance
  output: 'standalone',
  // Allow build to proceed despite ESLint warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
