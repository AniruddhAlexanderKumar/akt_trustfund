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
              className="px-5 py-4 text-left label-caps text-sage sm:px-6"
            >
              Financial category
            </th>
            <th
              scope="col"
              className="px-5 py-4 text-right label-caps text-sage sm:px-6"
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
                className="px-5 py-4 text-left text-small font-normal text-walnut/85 sm:px-6"
              >
                {row.label}
              </th>
              <td className="px-5 py-4 text-right text-body text-forest tabular-nums sm:px-6">
                {formatINR(row.value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// The header and totals rows are pinned inside the scrolling area, so the
// column labels and the running totals stay in view while the entries scroll.
const headCell =
  'sticky top-0 z-10 bg-ivory px-4 py-4 text-left label-caps text-sage shadow-[inset_0_-1px_0_rgba(40,59,53,0.18)] first:pl-6 last:pr-6'
const bodyCell = 'px-4 py-5 text-small text-walnut/85 first:pl-6 last:pr-6'
const amountCell = 'px-4 py-5 text-right text-small text-forest tabular-nums last:pr-6'
const footHeadCell =
  'sticky bottom-0 z-10 bg-ivory px-4 py-4 pl-6 text-left label-caps text-sage shadow-[inset_0_1px_0_rgba(40,59,53,0.18)]'
const footCell =
  'sticky bottom-0 z-10 bg-ivory px-4 py-4 text-right text-small text-forest tabular-nums shadow-[inset_0_1px_0_rgba(40,59,53,0.18)]'

export function LedgerTable() {
  const { entries, totals } = ledger
  const hasEntries = entries.length > 0

  return (
    <div className="border border-forest/15 bg-white">
      <div
        className="max-h-[20rem] overflow-auto overscroll-contain"
        role="region"
        aria-label="Transaction ledger"
        tabIndex={0}
      >
        <table className="w-full min-w-[44rem] border-collapse text-left">
          <caption className="sr-only">
            Verified contributions and actual expenditure, in date order, with a running balance.
          </caption>
          <thead>
            <tr>
              <th scope="col" className={`${headCell} w-34`}>
                Date
              </th>
              <th scope="col" className={headCell}>
                Reference
              </th>
              <th scope="col" className={`${headCell} w-34 text-right`}>
                Contribution
              </th>
              <th scope="col" className={`${headCell} w-34 text-right`}>
                Expenditure
              </th>
              <th scope="col" className={`${headCell} w-34 text-right`}>
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
                    className="px-4 py-5 pl-6 text-left text-small font-normal text-walnut/75 tabular-nums"
                  >
                    {formatLedgerDate(entry.date)}
                  </th>
                  <td className={bodyCell}>
                    <span className="block label-caps text-sage">
                      {entry.reference}
                    </span>
                    <span className="mt-1 block text-small text-forest">{entry.label}</span>
                    {entry.note ? (
                      <span className="mt-1 block text-caption text-walnut/60">{entry.note}</span>
                    ) : null}
                    {entry.evidence ? (
                      <a
                        href={entry.evidence.href}
                        className="mt-2 inline-flex items-center gap-2 label-caps text-walnut/70 underline decoration-gold/60 underline-offset-4 transition-colors hover:text-forest"
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
                  <p className="font-serif heading-4 text-forest">
                    No verified transactions have been recorded yet.
                  </p>
                  <p className="mx-auto mt-2 max-w-md text-small text-walnut/60">
                    The ledger opens with its first verified entry.
                  </p>
                </td>
              </tr>
            )}
          </tbody>

          <tfoot>
            <tr>
              <th scope="row" colSpan={2} className={footHeadCell}>
                Totals
              </th>
              <td className={footCell}>{formatINR(totals.contributed)}</td>
              <td className={footCell}>{formatINR(totals.spent)}</td>
              <td className={`${footCell} pr-6 font-bold`}>{formatINR(totals.balance)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <p className="border-t border-forest/10 bg-ivory/40 px-6 py-3 text-caption text-walnut/55">
        Scroll the ledger for every entry; the headings and totals stay in view.
      </p>
    </div>
  )
}
