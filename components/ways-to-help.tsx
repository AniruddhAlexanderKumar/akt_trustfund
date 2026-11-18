import { ArrowUpRight, Building2, GraduationCap, HandCoins, Share2 } from 'lucide-react'
import { AnchorLink } from '@/components/anchor-link'
import { Eyebrow } from '@/components/section-heading'
import { waysToHelp } from '@/lib/site'

const icons = {
  mentor: GraduationCap,
  give: HandCoins,
  partner: Building2,
  share: Share2,
} as const

export function WaysToHelp() {
  return (
    <section id="help" aria-labelledby="help-heading" className="section bg-forest text-ivory">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6" data-reveal>
            <Eyebrow tone="light">{waysToHelp.eyebrow}</Eyebrow>
            <h2 id="help-heading" className="display-2 mt-6 max-w-[16ch] text-ivory">
              {waysToHelp.heading}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-16" data-reveal data-reveal-delay="1">
            <p className="lede max-w-[46ch] text-ivory/72">{waysToHelp.intro}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {waysToHelp.items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Share2
            return (
              <article
                key={item.title}
                data-reveal
                data-reveal-delay={Math.min(index, 3)}
                className="group border-t border-gold/30 pt-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon
                    className="h-7 w-7 text-gold transition-transform duration-500 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                    strokeWidth={1.3}
                  />
                  <span
                    className={`border px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.16em] ${
                      item.open
                        ? 'border-gold/45 text-gold'
                        : 'border-ivory/30 text-ivory/60'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-[1.5rem] leading-tight text-ivory">
                  {item.title}
                </h3>
                <p className="mt-3.5 text-[0.92rem] leading-[1.8] text-ivory/68">{item.body}</p>

                {item.open ? (
                  <AnchorLink
                    href="/#contact"
                    className="mt-6 inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:text-ivory"
                  >
                    Get in touch
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </AnchorLink>
                ) : null}
              </article>
            )
          })}
        </div>

        <p
          data-reveal
          className="mt-14 max-w-3xl border-l border-gold/40 pl-6 text-[0.82rem] leading-relaxed text-ivory/65"
        >
          {waysToHelp.note}
        </p>
      </div>
    </section>
  )
}
