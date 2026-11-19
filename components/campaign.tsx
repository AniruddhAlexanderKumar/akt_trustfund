import { Eyebrow } from '@/components/section-heading'
import { InitiativeProgress } from '@/components/progress'
import { formatINR, initiative } from '@/lib/initiative'
import { ledger } from '@/lib/initiative-ledger'

export function Campaign() {
  const { totals } = ledger

  const figures = [
    { label: 'Amount raised', value: formatINR(totals.contributed) },
    { label: 'Amount remaining', value: formatINR(totals.remainingTarget) },
    { label: 'Location', value: initiative.location },
  ]

  return (
    <section id="campaign" aria-labelledby="campaign-heading" className="section bg-white">
      <div className="shell">
        <div className="max-w-4xl" data-reveal>
          <Eyebrow>{initiative.eyebrow}</Eyebrow>
          <h2 id="campaign-heading" className="display-2 mt-6 max-w-[24ch] text-forest">
            {initiative.headline}
          </h2>
          <div className="mt-8 max-w-[62ch] space-y-5">
            {initiative.intro.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Fundraising target */}
        <div className="mt-14 bg-forest text-ivory" data-reveal data-reveal-delay="1">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-14 lg:p-12">
            <div className="lg:col-span-5">
              <p className="text-[0.56rem] font-bold uppercase tracking-[0.24em] text-gold/80">
                Fundraising target
              </p>
              <p className="mt-4 font-serif text-[clamp(2.6rem,5vw,3.9rem)] leading-none text-ivory tabular-nums">
                {formatINR(initiative.targetAmount)}
              </p>
              <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-ivory/50">
                INR
              </p>
            </div>

            <div className="lg:col-span-7">
              <InitiativeProgress
                raised={totals.contributed}
                target={initiative.targetAmount}
                tone="dark"
              />

              <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ivory/15 pt-7 sm:grid-cols-3">
                {figures.map((figure) => (
                  <div key={figure.label}>
                    <dt className="text-[0.52rem] font-bold uppercase tracking-[0.18em] text-ivory/45">
                      {figure.label}
                    </dt>
                    <dd className="mt-2 text-[0.9rem] leading-snug text-ivory tabular-nums">
                      {figure.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
