/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    images: {
      domains: ['dombui-photos.s3.us-west-1.amazonaws.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        
        },
      ],
    },
    experimental: {
      serverActions: true,
    }
  }
