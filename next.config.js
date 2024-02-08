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
        //   pathname: '/account123/**',
        },
      ],
    },
    // experimental: {
    //   serverActions: true,
    // }
  }
