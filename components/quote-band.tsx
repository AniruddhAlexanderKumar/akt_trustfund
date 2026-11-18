import { Quote } from 'lucide-react'
import { foundingQuote } from '@/lib/site'

export function QuoteBand() {
  return (
    <section aria-label="From the founding statement" className="relative overflow-hidden bg-walnut">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_125%,rgba(217,196,155,0.18),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
      />

      <div className="shell relative py-20 lg:py-28">
        <figure data-reveal className="mx-auto max-w-4xl text-center">
          <Quote
            className="mx-auto h-7 w-7 text-gold/70"
            aria-hidden="true"
            strokeWidth={1.2}
          />
          <blockquote className="mt-8 font-serif text-[clamp(1.6rem,3.1vw,2.65rem)] leading-[1.36] text-ivory italic">
            &ldquo;{foundingQuote.text}&rdquo;
          </blockquote>
          <figcaption className="eyebrow mt-9 flex items-center justify-center gap-3 text-gold/80">
            <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
            {foundingQuote.attribution}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
