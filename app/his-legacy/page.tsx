import type { Metadata } from 'next'
import { Cta } from '@/components/cta'
import { PageHero } from '@/components/page-hero'
import { PortraitPlaceholder } from '@/components/portrait-placeholder'
import { Eyebrow } from '@/components/section-heading'
import { pillars, story } from '@/lib/site'

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
          <div className="lg:col-span-7">
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

          <div className="lg:col-span-5 lg:pl-6">
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
          <Eyebrow>What is carried forward</Eyebrow>
          <h2 id="values-heading" className="display-2 mt-6 max-w-[24ch] text-forest">
            The values the foundation is built on.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="border-t border-forest/20 pt-7">
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
    </>
  )
}
