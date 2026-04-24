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
  // SEO and crawlability headers
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ]
  },
  // Ensure all routes are accessible to crawlers
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
