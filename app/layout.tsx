import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HashScroll } from '@/components/hash-scroll'
import { site } from '@/lib/site'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The Late Dr. Anil Kumar Thakur Foundation | Jamshedpur',
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    'Anil Kumar Thakur Foundation',
    'Dr Anil Kumar Thakur Foundation',
    'medical scholarships in Jamshedpur',
    'medical education scholarships Jharkhand',
    'student scholarships Jamshedpur',
    'educational support for aspiring doctors',
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: site.name,
    title: 'The Late Dr. Anil Kumar Thakur Foundation | Jamshedpur',
    description: site.description,
    images: [
      {
        url: '/images/hero-jamshedpur.jpg',
        alt: 'Jubilee Park in Jamshedpur, Jharkhand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Late Dr. Anil Kumar Thakur Foundation | Jamshedpur',
    description: site.description,
    images: ['/images/hero-jamshedpur.jpg'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#283b35',
  colorScheme: 'light',
}

const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  alternateName: site.shortName,
  description: site.description,
  slogan: site.tagline,
  areaServed: { '@type': 'Place', name: 'Jamshedpur, Jharkhand, India' },
  foundingLocation: { '@type': 'Place', name: 'Jamshedpur, Jharkhand, India' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${lato.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-forest focus:px-5 focus:py-3 focus:text-xs focus:font-bold focus:uppercase focus:tracking-[0.18em] focus:text-ivory"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <HashScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
      </body>
    </html>
  )
}
