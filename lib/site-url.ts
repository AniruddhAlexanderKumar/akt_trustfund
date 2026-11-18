// Single source of truth for the public origin used in metadata, the
// sitemap and robots.txt.
//
// Resolution order:
//   1. NEXT_PUBLIC_SITE_URL — set this in the hosting environment.
//   2. VERCEL_PROJECT_PRODUCTION_URL — provided automatically by Vercel.
//   3. The known production URL.
//
// It deliberately never falls back to localhost, so a missing environment
// variable cannot publish localhost URLs to search engines.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://akt-trustfund.vercel.app')
