import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Eyebrow } from '@/components/section-heading'
import { geography } from '@/lib/site'

export function Geography() {
  return (
    <section aria-labelledby="geography-heading" className="section bg-ivory">
      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <figure>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest/10">
              <Image
                src={geography.image}
                alt={geography.imageAlt}
                fill
                sizes="(min-width: 1024px) 34rem, 100vw"
                className="object-cover saturate-[0.8]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-forest/25 mix-blend-multiply" />
            </div>
            <figcaption className="mt-4 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-sage">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Jamshedpur, Jharkhand
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Eyebrow>Our place</Eyebrow>
          <h2 id="geography-heading" className="display-2 mt-6 text-forest">
            {geography.heading}
          </h2>
          <div className="mt-7 max-w-[56ch] space-y-5">
            {geography.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? 'font-serif text-[1.35rem] leading-relaxed text-walnut italic' : 'body-copy'}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
