import Link from 'next/link'
import { AnchorLink } from '@/components/anchor-link'
import { Emblem } from '@/components/emblem'
import { navItems, photographyCredits, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory/70">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 text-gold">
              <Emblem className="h-12 w-12 shrink-0" />
              <p className="text-[0.72rem] font-bold uppercase leading-[1.5] tracking-[0.14em] text-ivory">
                {site.name}
              </p>
            </div>
            <p className="mt-6 font-serif text-[1.35rem] leading-snug text-gold italic">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed">{site.locationFull}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
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

          <div className="lg:col-span-4">
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
            <p className="mt-6 text-[0.7rem] leading-relaxed text-ivory/45">
              Official social media accounts are not yet published. They will appear here once they
              exist.
            </p>
          </div>
        </div>

        <div className="hairline-light mt-14" />

        <div className="mt-8 space-y-6">
          <p className="max-w-4xl text-[0.78rem] leading-relaxed text-ivory/55">{site.disclaimer}</p>

          <details className="group max-w-4xl">
            <summary className="cursor-pointer list-none text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ivory/50 transition-colors duration-200 hover:text-gold">
              Photography credits
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

          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/35">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
