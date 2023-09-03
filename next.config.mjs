import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://testbackend1.de.r.appspot.com/api/:path*'
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm]
  },
})

export default withMDX(nextConfig)
