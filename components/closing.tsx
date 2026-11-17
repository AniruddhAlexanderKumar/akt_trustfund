import { Cta } from '@/components/cta'
import { closing } from '@/lib/site'

export function Closing() {
  return (
    <section aria-labelledby="closing-heading" className="relative overflow-hidden bg-forest">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,196,155,0.14),transparent_65%)]"
      />
      <div className="shell relative py-24 text-center lg:py-32">
        <span aria-hidden="true" className="mx-auto block h-px w-16 bg-gold/60" />
        <h2
          id="closing-heading"
          className="display-2 mx-auto mt-9 max-w-[24ch] text-ivory"
        >
          {closing.heading}
        </h2>
        <p className="lede mx-auto mt-7 max-w-xl text-ivory/70">{closing.body}</p>
        <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Cta href={closing.primaryCta.href} variant="gold">
            {closing.primaryCta.label}
          </Cta>
          <Cta href={closing.secondaryCta.href} variant="light">
            {closing.secondaryCta.label}
          </Cta>
        </div>
      </div>
    </section>
  )
}
