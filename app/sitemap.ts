import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/medical-scholars', priority: 0.8 },
    { path: '/pilot-001', priority: 0.8 },
    { path: '/his-legacy', priority: 0.7 },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: 'monthly',
    priority: route.priority,
  }))
}
