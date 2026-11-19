import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Cta } from '@/components/cta'
import { hero } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[78svh] flex-col justify-end overflow-hidden bg-forest text-ivory"
    >
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest/96 via-forest/88 to-forest/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-forest/50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
      />

      <div className="shell relative w-full pb-14 pt-36 lg:pb-20 lg:pt-44">
        <p className="eyebrow rise text-gold">{hero.eyebrow}</p>

        <h1
          id="hero-heading"
          className="display-1 rise mt-8 max-w-[20ch] text-ivory"
          style={{ animationDelay: '90ms' }}
        >
          {hero.headline}
        </h1>

        <p
          className="lede rise mt-8 max-w-xl text-ivory/80"
          style={{ animationDelay: '180ms' }}
        >
          {hero.body}
        </p>

        <div
          className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          style={{ animationDelay: '260ms' }}
        >
          <Cta href={hero.primaryCta.href} variant="gold">
            {hero.primaryCta.label}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Cta>
          <Cta href={hero.secondaryCta.href} variant="light">
            {hero.secondaryCta.label}
          </Cta>
        </div>
      </div>
    </section>
  )
}
