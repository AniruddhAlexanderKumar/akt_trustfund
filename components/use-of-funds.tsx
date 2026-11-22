import { Eyebrow } from '@/components/section-heading'
import { initiative } from '@/lib/initiative'

export function UseOfFunds() {
  return (
    <section id="use-of-funds" aria-labelledby="use-heading" className="section-tight bg-ivory">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4" data-reveal>
          <Eyebrow>Use of funds</Eyebrow>
          <h2 id="use-heading" className="display-2 mt-6 measure-heading text-forest">
            Where the money goes.
          </h2>
          <p className="body-copy mt-7 measure-narrow">{initiative.useOfFundsIntro}</p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6" data-reveal data-reveal-delay="1">
          <ul className="grid border-t border-forest/15 sm:grid-cols-2 sm:gap-x-10">
            {initiative.useOfFunds.map((item) => (
              <li key={item.title} className="border-b border-forest/10 py-6">
                <h3 className="font-serif heading-4 text-forest">{item.title}</h3>
                <p className="mt-2 text-small text-walnut/75">{item.body}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 measure-narrow border-l-2 border-gold pl-5 text-small text-walnut/70">
            {initiative.useOfFundsNote}
          </p>
        </div>
      </div>
    </section>
  )
}
