import type { Metadata } from 'next'
import { AnchorLink } from '@/components/anchor-link'
import { Cta } from '@/components/cta'
import { Eyebrow } from '@/components/section-heading'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="section bg-ivory">
      <div className="shell max-w-3xl">
        <Eyebrow>Page not found</Eyebrow>
        <h1 id="not-found-heading" className="display-2 mt-6 text-forest">
          This page could not be found.
        </h1>
        <p className="body-copy mt-7 max-w-[52ch]">
          The address you followed may have changed, or the page may not exist. The foundation
          website is being developed, so some sections are still to be added.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Cta href="/" variant="dark">
            Return to the home page
          </Cta>
          <Cta href="/his-legacy" variant="dark">
            His Legacy
          </Cta>
          <Cta href="/#contact" variant="dark">
            Contact
          </Cta>
        </div>
        <p className="mt-8 text-[0.8rem] text-walnut/60">
          If you followed a link from this website, please{' '}
          <AnchorLink href="/#contact" className="underline underline-offset-2 hover:text-forest">
            let us know
          </AnchorLink>
          .
        </p>
      </div>
    </section>
  )
}
