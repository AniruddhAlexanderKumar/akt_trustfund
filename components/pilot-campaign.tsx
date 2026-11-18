import { ArrowRight } from 'lucide-react'
import { AnchorLink } from '@/components/anchor-link'
import { Cta } from '@/components/cta'
import { PilotProgress } from '@/components/pilot-progress'
import { Eyebrow } from '@/components/section-heading'
import { formatINR, pilot } from '@/lib/pilot'
import { pilotLedger } from '@/lib/pilot-ledger'

/** The concise, formal introduction to Pilot 001 on the foundation home page. */
export function PilotCampaign() {
  return (
    <section id="pilot" aria-labelledby="pilot-heading" className="section bg-ivory">
      <div className="shell">
        <div
          data-reveal
          className="relative border border-forest/15 bg-white p-7 sm:p-10 lg:p-14"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-gold/50 to-transparent"
          />

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Eyebrow>{pilot.eyebrow}</Eyebrow>
              <h2 id="pilot-heading" className="display-2 mt-6 max-w-[22ch] text-forest">
                {pilot.name}
              </h2>
              <p className="mt-5 font-serif text-[1.3rem] leading-snug text-walnut/85 italic">
                {pilot.tagline}
              </p>
              <p className="body-copy mt-6 max-w-[56ch]">{pilot.summary}</p>

              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
                <Cta href="/pilot-001" variant="dark">
                  View Pilot 001
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Cta>
                <AnchorLink
                  href="/pilot-001#ledger"
                  className="link-underline text-[0.64rem] font-bold uppercase tracking-[0.2em] text-walnut/75"
                >
                  Public ledger
                </AnchorLink>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border border-forest/15 bg-ivory p-6">
                <PilotProgress
                  received={pilotLedger.totals.contributed}
                  target={pilot.targetAmount}
                />

                <div aria-hidden="true" className="hairline mt-6" />

                <dl className="mt-5 space-y-3 text-[0.8rem]">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-walnut/60">Target</dt>
                    <dd className="text-right text-forest tabular-nums">
                      {formatINR(pilot.targetAmount)}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-walnut/60">Status</dt>
                    <dd className="text-right text-forest">{pilot.stage}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-walnut/60">Focus</dt>
                    <dd className="text-right text-forest">Jamshedpur, Jharkhand</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
