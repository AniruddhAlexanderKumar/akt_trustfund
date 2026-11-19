import { InitiativeProgress } from '@/components/progress'
import { formatINR, initiative } from '@/lib/initiative'
import { ledger } from '@/lib/initiative-ledger'

/**
 * The live fundraising tracker. Every figure comes from verified ledger entries,
 * so nothing here is written by hand.
 */
export function FundraisingTracker({ className = '' }: { className?: string }) {
  const { totals } = ledger
  const funded = initiative.targetAmount > 0 && totals.contributed >= initiative.targetAmount
  const status = funded ? 'Target reached' : 'Fundraising open'

  const figures = [
    { label: 'Amount raised', value: formatINR(totals.contributed) },
    { label: 'Amount remaining', value: formatINR(totals.remainingTarget) },
    { label: 'Location', value: initiative.location },
  ]

  return (
    <div
      className={`bg-forest text-ivory ${className}`}
      data-reveal
      data-reveal-delay="1"
    >
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
          <p className="mt-7 inline-flex items-center gap-2.5 border border-gold/35 px-3.5 py-2 text-[0.54rem] font-bold uppercase tracking-[0.22em] text-gold">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            {status}
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
  )
}
