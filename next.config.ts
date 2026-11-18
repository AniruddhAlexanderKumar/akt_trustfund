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
  /**
   * The website now describes a single initiative. Pages from the earlier,
   * broader site are redirected to the closest part of the single page rather
   * than left to break.
   */
  async redirects() {
    return [
      { source: '/his-legacy', destination: '/#memory', permanent: true },
      { source: '/medical-scholars', destination: '/#campaign', permanent: true },
      { source: '/pilot-001', destination: '/#transparency', permanent: true },
    ]
  },
}

export default nextConfig
