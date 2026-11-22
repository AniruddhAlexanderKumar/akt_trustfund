import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Cta } from '@/components/cta'
import { formatINR, initiative } from '@/lib/initiative'
import { ledger } from '@/lib/initiative-ledger'
import { hero } from '@/lib/site'

export function Hero() {
  const { totals, entries } = ledger
  const contributions = entries.filter((entry) => entry.kind === 'contribution').length

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
        <p className="label-caps rise text-gold">{hero.eyebrow}</p>

        <h1
          id="hero-heading"
          className="display-1 rise mt-8 measure-heading text-ivory"
          style={{ animationDelay: '90ms' }}
        >
          {hero.headline}
        </h1>

        <p
          className="text-lead rise mt-8 max-w-xl text-ivory/80"
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
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Cta>
          <Cta href={hero.secondaryCta.href} variant="light">
            {hero.secondaryCta.label}
          </Cta>
        </div>

        <p
          className="rise mt-12 max-w-2xl border-t border-ivory/20 pt-5 text-caption tracking-[0.04em] text-ivory/60"
          style={{ animationDelay: '340ms' }}
        >
          <span className="text-ivory tabular-nums">
            {formatINR(totals.contributed)} of {formatINR(initiative.targetAmount)}
          </span>{' '}
          raised
          {contributions > 0
            ? ` · ${contributions} verified contribution${contributions === 1 ? '' : 's'}`
            : ' · no verified contributions yet'}
        </p>
      </div>
    </section>
  )
}
