import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/his-legacy', '/medical-scholars']

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'yearly',
    priority: route === '/' ? 1 : 0.6,
  }))
}
