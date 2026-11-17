import type { NextConfig } from 'next'

const projectRoot = import.meta.dirname ?? process.cwd()

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
