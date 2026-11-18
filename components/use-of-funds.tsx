import { Eyebrow } from '@/components/section-heading'
import { initiative } from '@/lib/initiative'

export function UseOfFunds() {
  return (
    <section id="use-of-funds" aria-labelledby="use-heading" className="section bg-ivory">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4" data-reveal>
          <Eyebrow>Use of funds</Eyebrow>
          <h2 id="use-heading" className="display-2 mt-6 max-w-[14ch] text-forest">
            Where the ₹50,000 goes.
          </h2>
          <p className="body-copy mt-7 max-w-[38ch]">{initiative.useOfFundsIntro}</p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6" data-reveal data-reveal-delay="1">
          <ul className="border-y border-forest/12">
            {initiative.useOfFunds.map((item, index) => (
              <li
                key={item.title}
                className={`grid gap-2 py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-6 ${
                  index < initiative.useOfFunds.length - 1 ? 'border-b border-forest/10' : ''
                }`}
              >
                <span className="font-serif text-[1rem] text-gold tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-[1.25rem] leading-snug text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-walnut/75">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 border-l-2 border-gold pl-5 text-[0.84rem] leading-relaxed text-walnut/70">
            {initiative.useOfFundsNote}
          </p>
        </div>
      </div>
    </section>
  )
}
