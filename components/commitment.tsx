import Image from 'next/image'
import { Eyebrow } from '@/components/section-heading'
import { initiatives, initiativesNote } from '@/lib/site'

export function Commitment() {
  return (
    <section id="initiatives" aria-labelledby="initiatives-heading" className="section bg-ivory">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Our broader commitment</Eyebrow>
            <h2 id="initiatives-heading" className="display-2 mt-6 max-w-[16ch] text-forest">
              The work we intend to do.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-14" data-reveal data-reveal-delay="1">
            <p className="body-copy max-w-[58ch]">
              The foundation&rsquo;s work is planned across three connected areas. Each begins with
              the same question: what would allow a capable young person in Jamshedpur to continue,
              rather than abandon, their education?
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
          {initiatives.map((area, index) => (
            <article
              key={area.title}
              data-reveal
              data-reveal-delay={index}
              className="group border-t border-forest/20 pt-8 transition-colors duration-300 hover:border-forest/45"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-sage">
                {area.index}
              </span>
              <h3 className="mt-5 font-serif text-[1.55rem] leading-tight text-forest">
                {area.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.85] text-walnut/80">{area.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-14 max-w-3xl border-l-2 border-gold pl-6 text-[0.85rem] leading-relaxed text-walnut/70">
          {initiativesNote}
        </p>

        <figure className="mt-16">
          <div className="relative aspect-[16/7] w-full overflow-hidden bg-forest/10">
            <Image
              src="/images/community-health.jpg"
              alt="A community health worker preparing a vaccine for a mother holding her child at a health centre in Odisha"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-forest/15" />
          </div>
          <figcaption className="mt-4 text-[0.72rem] leading-relaxed text-walnut/60">
            Community healthcare in India. Illustrative photograph, not a foundation programme.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
