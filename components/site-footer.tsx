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
              <span className="inline-flex shrink-0 items-center justify-center bg-ivory p-1.5">
                <Image
                  src="/images/akt-foundation-mark.png"
                  alt=""
                  width={400}
                  height={400}
                  className="h-12 w-12 object-contain"
                />
              </span>
              <p className="text-[0.72rem] font-bold uppercase leading-[1.5] tracking-[0.14em] text-ivory">
                {site.name}
              </p>
            </div>
            <p className="mt-6 font-serif text-[1.35rem] leading-snug text-gold italic">
              {site.tagline}
            </p>
            <p className="mt-4 text-[0.82rem] leading-relaxed text-ivory/70">
              First initiative: raising ₹50,000 for one student’s education.
            </p>
            <p className="mt-3 text-sm leading-relaxed">{site.locationFull}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
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
            <h2 className="eyebrow text-ivory/45">Navigation</h2>
            <ul className="mt-5 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <AnchorLink
                    href={item.href}
                    className="text-sm text-ivory/70 transition-colors duration-200 hover:text-gold"
                  >
                    {item.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-ivory/45">Legal</h2>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-ivory/70 transition-colors duration-200 hover:text-gold"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-ivory/70 transition-colors duration-200 hover:text-gold"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline-light mt-14" />

        <div className="mt-8 space-y-6">
          <p className="max-w-4xl text-[0.78rem] leading-relaxed text-ivory/55">{site.disclaimer}</p>

          <details className="group max-w-4xl">
            <summary className="cursor-pointer list-none text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ivory/50 transition-colors duration-200 hover:text-gold">
              Photography credit
            </summary>
            <ul className="mt-4 space-y-1.5 text-[0.72rem] leading-relaxed text-ivory/45">
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
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/35">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-ivory/45 transition-colors duration-200 hover:text-gold"
            >
              Back to top
              <ArrowUp
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
