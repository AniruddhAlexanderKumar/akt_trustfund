import { ArrowRight } from 'lucide-react'
import { Cta } from '@/components/cta'
import { initiative } from '@/lib/initiative'

export function FinalCta() {
  const { finalCta } = initiative

  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-forest text-ivory">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,196,155,0.14),transparent_65%)]"
      />
      <div className="shell relative py-20 text-center lg:py-28" data-reveal>
        <span aria-hidden="true" className="mx-auto block h-px w-16 bg-gold/60" />
        <h2
          id="cta-heading"
          className="mx-auto mt-9 measure-heading heading-2 tracking-[0.05em] text-ivory uppercase"
        >
          {finalCta.heading}
        </h2>
        <p className="text-lead mx-auto mt-7 max-w-xl text-ivory/70">{finalCta.body}</p>

        <div className="mt-11 flex justify-center">
          <Cta href={finalCta.primary.href} variant="gold">
            {finalCta.primary.label}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Cta>
        </div>
      </div>
    </section>
  )
}
