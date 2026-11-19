import { ShieldCheck } from 'lucide-react'
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
            <h2 id="transparency-heading" className="display-2 mt-6 max-w-[16ch] text-forest">
              The money, in full.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-14" data-reveal data-reveal-delay="1">
            <p className="body-copy max-w-[52ch]">{initiative.transparencyIntro}</p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl" data-reveal>
          <h3 className="text-[0.56rem] font-bold uppercase tracking-[0.24em] text-sage">
            Financial summary
          </h3>
          <div className="mt-4">
            <FinancialSummaryTable />
          </div>
        </div>

        <div className="mt-12" data-reveal data-reveal-delay="1">
          <h3 className="text-[0.56rem] font-bold uppercase tracking-[0.24em] text-sage">
            Transaction ledger
          </h3>
          <div className="mt-4">
            <LedgerTable />
          </div>
        </div>

        <FundraisingTracker className="mt-12" />

        <ul className="mt-10 grid gap-x-10 gap-y-5 border-t border-forest/12 pt-8 sm:grid-cols-2">
          {initiative.ledgerRules.map((rule) => (
            <li key={rule} className="flex gap-3">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                aria-hidden="true"
                strokeWidth={1.6}
              />
              <span className="text-[0.85rem] leading-[1.8] text-walnut/75">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
