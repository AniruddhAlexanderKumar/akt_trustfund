import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { AnchorLink } from '@/components/anchor-link'
import { navItems, photographyCredits, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="relative bg-charcoal text-ivory/70">
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-gold/35 to-transparent"
      />
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 text-gold">
              <span className="inline-flex shrink-0 items-center justify-center bg-ivory p-2">
                <Image
                  src="/images/akt-foundation-mark.png"
                  alt=""
                  width={400}
                  height={400}
                  className="h-12 w-12 object-contain"
                />
              </span>
              <p className="label-caps text-ivory">
                {site.name}
              </p>
            </div>
            <p className="mt-6 font-serif heading-4 text-gold italic">
              {site.tagline}
            </p>
            <p className="mt-4 text-small leading-relaxed text-ivory/70">
              First initiative: raising ₹50,000 for one student’s education.
            </p>
            <p className="mt-3 text-small">{site.locationFull}</p>
            <ul className="mt-4 space-y-2 text-small">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-words transition-colors duration-200 hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors duration-200 hover:text-gold"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <h2 className="label-caps text-ivory/45">Navigation</h2>
            <ul className="mt-5 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <AnchorLink
                    href={item.href}
                    className="text-small text-ivory/70 transition-colors duration-200 hover:text-gold"
                  >
                    {item.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="label-caps text-ivory/45">Legal</h2>
            <ul className="mt-5 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-small text-ivory/70 transition-colors duration-200 hover:text-gold"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-small text-ivory/70 transition-colors duration-200 hover:text-gold"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline-light mt-14" />

        <div className="mt-8 space-y-6">
          <p className="max-w-4xl text-caption text-ivory/55">{site.disclaimer}</p>

          <details className="group max-w-4xl">
            <summary className="cursor-pointer list-none label-caps text-ivory/50 transition-colors duration-200 hover:text-gold">
              Photography credit
            </summary>
            <ul className="mt-4 space-y-2 text-caption text-ivory/45">
              {photographyCredits.map((credit) => (
                <li key={credit.href}>
                  {credit.title} — {credit.author}, {credit.licence}. Cropped and toned. Licensed
                  via{' '}
                  <a
                    href={credit.href}
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    className="underline underline-offset-2 hover:text-gold"
                  >
                    Wikimedia Commons
                  </a>
                  .
                </li>
              ))}
            </ul>
          </details>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="label-caps text-ivory/35">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 label-caps text-ivory/45 transition-colors duration-200 hover:text-gold"
            >
              Back to top
              <ArrowUp
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
