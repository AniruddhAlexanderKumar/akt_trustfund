import { FundraisingTracker } from '@/components/fundraising-tracker'
import { FinancialSummaryTable, LedgerTable } from '@/components/ledger-table'
import { Eyebrow } from '@/components/section-heading'
import { initiative } from '@/lib/initiative'

export function Transparency() {
  return (
    <section id="transparency" aria-labelledby="transparency-heading" className="section bg-white">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Transparency</Eyebrow>
            <h2 id="transparency-heading" className="display-2 mt-6 measure-heading text-forest">
              The money, in full.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-14" data-reveal data-reveal-delay="1">
            <p className="body-copy measure">{initiative.transparencyIntro}</p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl" data-reveal>
          <h3 className="label-caps text-sage">
            Financial summary
          </h3>
          <div className="mt-4">
            <FinancialSummaryTable />
          </div>
        </div>

        <div className="mt-12" data-reveal data-reveal-delay="1">
          <h3 className="label-caps text-sage">
            Transaction ledger
          </h3>
          <div className="mt-4">
            <LedgerTable />
          </div>
        </div>

        <FundraisingTracker className="mt-12" />

        <ul className="mt-10 grid gap-x-12 border-t border-forest/15 sm:grid-cols-2">
          {initiative.ledgerRules.map((rule) => (
            <li
              key={rule}
              className="border-b border-forest/10 py-4 text-small text-walnut/75"
            >
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
