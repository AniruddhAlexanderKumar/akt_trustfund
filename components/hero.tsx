import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Cta } from '@/components/cta'
import { hero } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[86svh] flex-col justify-end overflow-hidden bg-forest text-ivory"
    >
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="hero-media object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/85 to-forest/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest via-forest/25 to-forest/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
      />

      <div className="shell relative w-full pb-14 pt-40 lg:pb-20 lg:pt-48">
        <p className="eyebrow rise text-gold">{hero.eyebrow}</p>

        <h1
          id="hero-heading"
          className="display-1 rise mt-8 max-w-[19ch] text-ivory"
          style={{ animationDelay: '90ms' }}
        >
          {hero.headlineFirst}
          <span className="mt-1 block text-gold italic">{hero.headlineSecond}</span>
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
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Cta>
          <Cta href={hero.secondaryCta.href} variant="light">
            {hero.secondaryCta.label}
          </Cta>
        </div>

        <div
          className="rise mt-16 flex items-end justify-between gap-10 border-t border-ivory/20 pt-6 lg:mt-20"
          style={{ animationDelay: '340ms' }}
        >
          <p className="max-w-2xl text-[0.8rem] leading-relaxed tracking-[0.02em] text-ivory/60">
            {hero.footline}
          </p>
          <span
            aria-hidden="true"
            className="hidden shrink-0 flex-col items-center gap-3 text-[0.56rem] font-bold uppercase tracking-[0.32em] text-ivory/40 sm:flex"
          >
            Scroll
            <span className="scroll-cue block h-12 w-px bg-gradient-to-b from-gold/80 to-gold/10" />
          </span>
        </div>
      </div>
    </section>
  )
}
