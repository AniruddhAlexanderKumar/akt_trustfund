import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { AnchorLink } from '@/components/anchor-link'
import { Cta } from '@/components/cta'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { PortraitPlaceholder } from '@/components/portrait-placeholder'
import { Eyebrow } from '@/components/section-heading'
import { initiatives, pillars, site, story } from '@/lib/site'
import { breadcrumbJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'His Legacy',
  description:
    'Late Dr. Anil Kumar Thakur dedicated his professional life to medicine and the people of Jamshedpur, and believed deeply in education. The foundation is being established to carry those values forward.',
  alternates: { canonical: '/his-legacy' },
  openGraph: {
    title: 'His Legacy | The Late Dr. Anil Kumar Thakur Foundation',
    description:
      'The life and values that the foundation is being established to carry forward: medicine, education and service.',
    url: '/his-legacy',
  },
}

export default function HisLegacyPage() {
  return (
    <>
      <PageHero
        eyebrow="In memoriam"
        title="A life given to medicine, and to education."
        intro="Late Dr. Anil Kumar Thakur practised medicine in Jamshedpur and, within his family, is remembered for the care he gave to people who could not afford it."
      />

      <section aria-labelledby="story-heading" className="section bg-ivory">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7" data-reveal>
            <Eyebrow>The story</Eyebrow>
            <h2 id="story-heading" className="display-2 mt-6 max-w-[22ch] text-forest">
              Some legacies are remembered. Others are continued.
            </h2>

            <div className="mt-9 max-w-[62ch] space-y-5">
              {story.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? 'font-serif text-[1.45rem] leading-[1.65] text-walnut'
                      : 'body-copy'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <figure className="mt-12 border-l-2 border-gold pl-7">
              <blockquote className="font-serif text-[1.6rem] leading-[1.45] text-forest italic">
                &ldquo;His life reflected a belief that opportunity should not be determined by
                circumstance.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-sage">
                From the foundation&rsquo;s founding statement
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-5 lg:pl-6" data-reveal data-reveal-delay="1">
            <PortraitPlaceholder caption={story.portraitCaption} note={story.portraitPlaceholder} />
            <p className="mt-6 text-[0.78rem] leading-relaxed text-walnut/60">
              No photograph is published here until it is supplied and approved by the family. No
              historical dates, qualifications or professional affiliations are stated on this
              website.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="section bg-white">
        <div className="shell">
          <div data-reveal>
            <Eyebrow>What is carried forward</Eyebrow>
            <h2 id="values-heading" className="display-2 mt-6 max-w-[24ch] text-forest">
              The values the foundation is built on.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                data-reveal
                data-reveal-delay={index}
                className="border-t border-forest/20 pt-7"
              >
                <span className="font-serif text-[1.35rem] text-gold">{pillar.index}</span>
                <h3 className="mt-3 font-serif text-[1.5rem] leading-tight text-forest">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-[1.85] text-walnut/80">{pillar.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Cta href="/#mission" variant="dark">
              Explore Our Mission
            </Cta>
            <Cta href="/medical-scholars" variant="dark">
              The Medical Scholars Programme
            </Cta>
          </div>
        </div>
      </section>

      <section aria-labelledby="continued-heading" className="section bg-forest text-ivory">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5" data-reveal>
              <Eyebrow tone="light">How the work continues</Eyebrow>
              <h2 id="continued-heading" className="display-2 mt-6 max-w-[15ch] text-ivory">
                The same conviction, carried into an institution.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-14" data-reveal data-reveal-delay="1">
              <p className="lede text-ivory/72">
                A foundation can only honour a life like his if it is honest about what it has
                not yet done. The three areas below describe the work the foundation intends to
                take up, in the order in which it can be done responsibly.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
            {initiatives.map((area, index) => (
              <article
                key={area.title}
                data-reveal
                data-reveal-delay={index}
                className="group border-t border-gold/35 pt-7"
              >
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-gold/80">
                  {area.index}
                </span>
                <h3 className="mt-4 font-serif text-[1.5rem] leading-tight text-ivory">
                  {area.title}
                </h3>
                <p className="mt-3.5 text-[0.93rem] leading-[1.8] text-ivory/70">{area.body}</p>
              </article>
            ))}
          </div>

          <AnchorLink
            href="/#initiatives"
            className="group mt-12 inline-flex items-center gap-2.5 text-[0.64rem] font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:text-ivory"
          >
            <span className="link-underline">Our broader commitment</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </AnchorLink>
        </div>
      </section>

      <section aria-labelledby="memorial-heading" className="relative overflow-hidden bg-[#eae3d3]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(40,59,53,0.10),transparent_55%)]"
        />
        <div className="shell relative py-20 text-center lg:py-24" data-reveal>
          <span className="ornament mx-auto" aria-hidden="true">
            <span className="diamond" />
          </span>
          <h2
            id="memorial-heading"
            className="display-2 mx-auto mt-9 max-w-[22ch] text-forest"
          >
            {site.tagline}
          </h2>
          <p className="lede mx-auto mt-6 max-w-xl text-walnut/80">
            The foundation is being established to carry forward the values of{' '}
            {story.portraitCaption}: care for those who cannot pay for it, and education for those
            who might otherwise be denied it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Cta href="/#mission" variant="dark">
              Explore Our Mission
            </Cta>
            <Cta href="/#contact" variant="dark">
              Contact the Foundation
            </Cta>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'His Legacy', path: '/his-legacy' },
        ])}
      />
    </>
  )
}
