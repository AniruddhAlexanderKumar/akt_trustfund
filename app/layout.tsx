import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HashScroll } from '@/components/hash-scroll'
import { RevealObserver } from '@/components/reveal-observer'
import { BackToTop } from '@/components/back-to-top'
import { site } from '@/lib/site'
import { siteUrl } from '@/lib/site-url'

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "₹50,000 to Support One Student's Education | Jamshedpur",
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    'Late Dr. Anil Kumar Thakur',
    'Anil Kumar Thakur memorial initiative',
    'education support Jamshedpur',
    'student education sponsorship Jharkhand',
    '₹50,000 education initiative',
    'charitable initiative Jamshedpur',
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: site.name,
    title: "₹50,000 to Support One Student's Education",
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
    title: "₹50,000 to Support One Student's Education",
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
  disambiguatingDescription:
    'An independently coordinated charitable initiative. Not a registered trust, society, NGO or tax-exempt organisation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${lato.variable}`}>
      <body id="top">
        <script
          // Runs before the rest of the document is parsed, so scroll-reveal
          // sections never flash in and out. It is skipped for reduced motion
          // and for browsers without IntersectionObserver, where the CSS that
          // hides those sections is never enabled.
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(!('IntersectionObserver' in window))return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.documentElement.classList.add('js');setTimeout(function(){if(window.__revealReady)return;var n=document.querySelectorAll('[data-reveal]:not(.is-visible)');for(var i=0;i<n.length;i++)n[i].classList.add('is-visible')},4000)}catch(e){}})()",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-forest focus:px-5 focus:py-3 focus:text-xs focus:font-bold focus:uppercase focus:tracking-[0.18em] focus:text-ivory"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <BackToTop />
        <HashScroll />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
      </body>
    </html>
  )
}
