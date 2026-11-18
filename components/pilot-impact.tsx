import { FileText, Info } from 'lucide-react'
import { formatINR, formatLedgerDate, pilot } from '@/lib/pilot'
import { pilotLedger } from '@/lib/pilot-ledger'

/**
 * Reports the award only when the administrator has recorded a verified,
 * completed payment in the ledger data. Until then it states plainly that
 * nothing has been awarded.
 */
export function PilotImpact() {
  const { award, totals } = pilotLedger

  if (!award) {
    return (
      <div className="border border-forest/15 bg-white p-7 sm:p-9">
        <p className="flex items-center gap-2.5 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-sage">
          <Info className="h-3.5 w-3.5" aria-hidden="true" />
          Not yet awarded
        </p>

        <p className="body-copy mt-4 max-w-[60ch]">{pilot.impactIntro}</p>

        <ul className="mt-6 space-y-3">
          {pilot.impactFields.map((item) => (
            <li key={item} className="flex gap-3 text-[0.9rem] leading-relaxed text-walnut/80">
              <span
                aria-hidden="true"
                className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-gold"
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-7 border-l-2 border-gold pl-5 text-[0.82rem] leading-relaxed text-walnut/65">
          No claim of a completed award is made on this page, and none will be until a payment has
          actually been made and verified.
        </p>
      </div>
    )
  }

  const facts = [
    { label: 'Payment date', value: formatLedgerDate(award.paymentDate) },
    { label: 'Amount used', value: formatINR(award.amountUsed) },
    { label: 'Total received', value: formatINR(totals.contributed) },
    { label: 'Educational expense', value: award.expenseSupported },
  ]

  return (
    <div className="border border-forest/15 bg-white p-7 sm:p-9">
      <p className="flex items-center gap-2.5 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-forest">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
        Scholarship awarded
      </p>

      <dl className="mt-6 grid gap-px overflow-hidden border border-forest/15 bg-forest/15 sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-white px-5 py-4">
            <dt className="text-[0.54rem] font-bold uppercase tracking-[0.2em] text-sage">
              {fact.label}
            </dt>
            <dd className="mt-1.5 text-[0.95rem] text-forest tabular-nums">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-7 max-w-[62ch] font-serif text-[1.15rem] leading-relaxed text-walnut/85">
        {award.account}
      </p>

      {award.evidence.length > 0 ? (
        <ul className="mt-6 space-y-2">
          {award.evidence.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-walnut/70 underline decoration-gold/60 underline-offset-4 transition-colors hover:text-forest"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mt-7 text-[0.78rem] leading-relaxed text-walnut/60">
        Every figure above reconciles to the public ledger, and the supporting documents are
        published with personal information removed.
      </p>
    </div>
  )
}
