import { FileText } from 'lucide-react'
import { formatINR, formatLedgerDate, initiative } from '@/lib/initiative'
import { ledger } from '@/lib/initiative-ledger'

export function FinancialSummaryTable() {
  const rows = [
    { label: 'Fundraising target', value: initiative.targetAmount },
    { label: 'Contributions received', value: ledger.totals.contributed },
    { label: 'Educational expenditure', value: ledger.totals.spent },
    { label: 'Remaining target', value: ledger.totals.remainingTarget },
  ]

  return (
    <div className="border border-forest/15 bg-white">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Financial category and amount: target, contributions received, educational expenditure and
          remaining target.
        </caption>
        <thead>
          <tr className="border-b border-forest/20 bg-ivory/70">
            <th
              scope="col"
              className="px-5 py-3.5 text-left text-[0.56rem] font-bold uppercase tracking-[0.2em] text-sage sm:px-6"
            >
              Financial category
            </th>
            <th
              scope="col"
              className="px-5 py-3.5 text-right text-[0.56rem] font-bold uppercase tracking-[0.2em] text-sage sm:px-6"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.label}
              className={index < rows.length - 1 ? 'border-b border-forest/10' : ''}
            >
              <th
                scope="row"
                className="px-5 py-4 text-left text-[0.9rem] font-normal text-walnut/85 sm:px-6"
              >
                {row.label}
              </th>
              <td className="px-5 py-4 text-right text-[0.95rem] text-forest tabular-nums sm:px-6">
                {formatINR(row.value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const headCell =
  'px-4 py-3.5 text-left text-[0.56rem] font-bold uppercase tracking-[0.2em] text-sage first:pl-6 last:pr-6'
const bodyCell = 'px-4 py-5 text-[0.88rem] leading-relaxed text-walnut/85 first:pl-6 last:pr-6'
const amountCell = 'px-4 py-5 text-right text-[0.9rem] text-forest tabular-nums last:pr-6'

export function LedgerTable() {
  const { entries, totals } = ledger
  const hasEntries = entries.length > 0

  return (
    <div className="border border-forest/15 bg-white">
      <div className="overflow-x-auto" role="region" aria-label="Transaction ledger" tabIndex={0}>
        <table className="w-full min-w-[44rem] border-collapse text-left">
          <caption className="sr-only">
            Verified contributions and actual expenditure, in date order, with a running balance.
          </caption>
          <thead>
            <tr className="border-b border-forest/20 bg-ivory/70">
              <th scope="col" className={`${headCell} w-[8.5rem]`}>
                Date
              </th>
              <th scope="col" className={headCell}>
                Reference
              </th>
              <th scope="col" className={`${headCell} w-[8.5rem] text-right`}>
                Contribution
              </th>
              <th scope="col" className={`${headCell} w-[8.5rem] text-right`}>
                Expenditure
              </th>
              <th scope="col" className={`${headCell} w-[8.5rem] text-right`}>
                Balance
              </th>
            </tr>
          </thead>

          <tbody>
            {hasEntries ? (
              entries.map((entry) => (
                <tr
                  key={entry.reference}
                  className="border-b border-forest/10 align-top transition-colors duration-200 hover:bg-ivory/60"
                >
                  <th
                    scope="row"
                    className="px-4 py-5 pl-6 text-left text-[0.82rem] font-normal text-walnut/75 tabular-nums"
                  >
                    {formatLedgerDate(entry.date)}
                  </th>
                  <td className={bodyCell}>
                    <span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-sage">
                      {entry.reference}
                    </span>
                    <span className="mt-1 block text-[0.9rem] text-forest">{entry.label}</span>
                    {entry.note ? (
                      <span className="mt-1 block text-[0.78rem] text-walnut/60">{entry.note}</span>
                    ) : null}
                    {entry.evidence ? (
                      <a
                        href={entry.evidence.href}
                        className="mt-2 inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-walnut/70 underline decoration-gold/60 underline-offset-4 transition-colors hover:text-forest"
                      >
                        <FileText className="h-3 w-3" aria-hidden="true" />
                        {entry.evidence.label}
                      </a>
                    ) : null}
                  </td>
                  <td className={amountCell}>
                    {entry.kind === 'contribution' ? formatINR(entry.amount) : '—'}
                  </td>
                  <td className={amountCell}>
                    {entry.kind === 'expenditure' ? formatINR(entry.amount) : '—'}
                  </td>
                  <td className={`${amountCell} font-bold`}>{formatINR(entry.balance)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <p className="font-serif text-[1.15rem] leading-snug text-forest">
                    No verified transactions have been recorded yet.
                  </p>
                  <p className="mx-auto mt-2 max-w-md text-[0.82rem] leading-relaxed text-walnut/60">
                    The ledger opens with its first verified entry.
                  </p>
                </td>
              </tr>
            )}
          </tbody>

          <tfoot>
            <tr className="border-t border-forest/20 bg-ivory/70">
              <th
                scope="row"
                colSpan={2}
                className="px-4 py-4 pl-6 text-left text-[0.56rem] font-bold uppercase tracking-[0.2em] text-sage"
              >
                Totals
              </th>
              <td className="px-4 py-4 text-right text-[0.9rem] text-forest tabular-nums">
                {formatINR(totals.contributed)}
              </td>
              <td className="px-4 py-4 text-right text-[0.9rem] text-forest tabular-nums">
                {formatINR(totals.spent)}
              </td>
              <td className="px-4 py-4 pr-6 text-right text-[0.9rem] font-bold text-forest tabular-nums">
                {formatINR(totals.balance)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <p className="border-t border-forest/10 bg-ivory/40 px-6 py-3 text-[0.7rem] leading-relaxed text-walnut/55 sm:hidden">
        Scroll the ledger sideways to see every column.
      </p>
    </div>
  )
}
