/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uniim1.shutterfly.com'
      }
    ]
  }
}

module.exports = nextConfig
