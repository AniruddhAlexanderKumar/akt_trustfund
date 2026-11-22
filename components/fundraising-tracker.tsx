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
          <p className="label-caps text-ivory/45">
            First initiative
          </p>
          <p className="mt-2 label-caps text-gold/80">
            Fundraising target
          </p>
          <p className="mt-4 display-2 text-ivory tabular-nums">
            {formatINR(initiative.targetAmount)}
          </p>
          <p className="mt-3 label-caps text-ivory/50">
            INR
          </p>
          <p className="mt-7 inline-block border border-gold/35 px-4 py-2 label-caps text-gold">
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
                <dt className="label-caps text-ivory/45">
                  {figure.label}
                </dt>
                <dd className="mt-2 text-small leading-snug text-ivory tabular-nums">
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
