import type { Metadata } from 'next'
import { ArrowRight, Check, Info, ShieldCheck } from 'lucide-react'
import { Cta } from '@/components/cta'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { PilotFinancialSummary, PilotLedgerTable } from '@/components/pilot-ledger'
import { PilotImpact } from '@/components/pilot-impact'
import { PilotProgress } from '@/components/pilot-progress'
import { Eyebrow } from '@/components/section-heading'
import { formatINR, pilot } from '@/lib/pilot'
import { pilotLedger } from '@/lib/pilot-ledger'
import { breadcrumbJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Pilot 001 — Memorial Scholarship',
  description:
    'Dr. Anil Kumar Thakur Memorial Scholarship — Pilot 001: a ₹5,000 educational sponsorship for one student in Jamshedpur, with a public ledger of verified contributions and expenditure.',
  alternates: { canonical: '/pilot-001' },
  openGraph: {
    title: 'Dr. Anil Kumar Thakur Memorial Scholarship — Pilot 001',
    description:
      'One contribution. One opportunity. A continuing legacy. The foundation’s first proposed initiative, with a public ledger of verified contributions.',
    url: '/pilot-001',
  },
}

export default function PilotPage() {
  const { totals } = pilotLedger

  return (
    <>
      <PageHero
        breadcrumb={{ label: 'Back to the foundation', href: '/' }}
        eyebrow={pilot.eyebrow}
        title={pilot.name}
        intro={pilot.tagline}
      >
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2.5 border border-gold/60 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-gold">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            {pilot.status} · {pilot.stage}
          </span>
          <span className="inline-flex items-center gap-2.5 border border-ivory/25 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-ivory/70">
            Target {formatINR(pilot.targetAmount)}
          </span>
        </div>
      </PageHero>

      {/* At a glance ------------------------------------------------------ */}
      <section id="campaign" aria-labelledby="campaign-heading" className="section bg-white">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7" data-reveal>
            <Eyebrow>At a glance</Eyebrow>
            <h2 id="campaign-heading" className="display-2 mt-6 max-w-[20ch] text-forest">
              A first, deliberately small step.
            </h2>
            <p className="body-copy mt-7 max-w-[56ch]">{pilot.summary}</p>

            <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              <div className="border-t border-forest/15 pt-4">
                <dt className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-sage">
                  Fundraising target
                </dt>
                <dd className="mt-1.5 text-[0.95rem] text-forest tabular-nums">
                  {formatINR(pilot.targetAmount)}
                </dd>
              </div>
              {pilot.facts.map((fact) => (
                <div key={fact.label} className="border-t border-forest/15 pt-4">
                  <dt className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-sage">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] text-forest">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 lg:col-start-8" data-reveal data-reveal-delay="1">
            <div className="border border-forest/15 bg-ivory p-7 sm:p-8">
              <p className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-sage">
                Contributions received
              </p>

              <PilotProgress
                received={totals.contributed}
                target={pilot.targetAmount}
                className="mt-5"
              />

              <div aria-hidden="true" className="hairline mt-7" />

              <dl className="mt-6 space-y-2.5 text-[0.82rem]">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-walnut/65">Total received</dt>
                  <dd className="text-forest tabular-nums">{formatINR(totals.contributed)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-walnut/65">Total spent</dt>
                  <dd className="text-forest tabular-nums">{formatINR(totals.spent)}</dd>
                </div>
                <div className="mt-1 flex items-baseline justify-between gap-4 border-t border-forest/10 pt-3">
                  <dt className="text-walnut/65">Remaining balance</dt>
                  <dd className="font-bold text-forest tabular-nums">{formatINR(totals.balance)}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose ---------------------------------------------------------- */}
      <section id="purpose" aria-labelledby="purpose-heading" className="section bg-ivory">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7" data-reveal>
            <Eyebrow>Purpose</Eyebrow>
            <h2 id="purpose-heading" className="display-2 mt-6 max-w-[20ch] text-forest">
              Why this pilot exists.
            </h2>
            <div className="mt-8 max-w-[62ch] space-y-5">
              {pilot.purposeParagraphs.map((paragraph) => (
                <p key={paragraph} className="body-copy">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pt-16" data-reveal data-reveal-delay="1">
            <figure className="border-l-2 border-gold pl-6">
              <blockquote className="font-serif text-[1.35rem] leading-[1.5] text-forest italic">
                {pilot.positioning}
              </blockquote>
              <figcaption className="mt-5 text-[0.56rem] font-bold uppercase tracking-[0.22em] text-sage">
                The foundation&rsquo;s position on Pilot 001
              </figcaption>
            </figure>
          </aside>
        </div>
      </section>

      {/* Public ledger ---------------------------------------------------- */}
      <section id="ledger" aria-labelledby="ledger-heading" className="section bg-white">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5" data-reveal>
              <Eyebrow>Financial transparency</Eyebrow>
              <h2 id="ledger-heading" className="display-2 mt-6 max-w-[16ch] text-forest">
                The public ledger.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-14" data-reveal data-reveal-delay="1">
              <p className="body-copy max-w-[56ch]">{pilot.ledgerIntro}</p>
            </div>
          </div>

          <div className="mt-12" data-reveal>
            <PilotFinancialSummary />
            <div className="mt-6">
              <PilotLedgerTable />
            </div>
          </div>

          <ul className="mt-10 grid gap-x-10 gap-y-5 border-t border-forest/12 pt-8 sm:grid-cols-2" data-reveal>
            {pilot.ledgerRules.map((rule) => (
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

          <p className="mt-8 max-w-3xl border-l-2 border-forest/20 pl-5 text-[0.78rem] leading-relaxed text-walnut/55">
            The ledger is maintained by the adult family administrator responsible for Pilot 001, and
            is updated only after a transaction has been verified. Administrative access is not
            offered through this website: no editing controls, credentials or private financial
            details are published or exposed here.
          </p>
        </div>
      </section>

      {/* Beneficiary criteria and privacy --------------------------------- */}
      <section id="privacy" aria-labelledby="privacy-heading" className="section bg-ivory">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6" data-reveal>
              <Eyebrow>Beneficiary criteria and privacy</Eyebrow>
              <h2 id="privacy-heading" className="display-2 mt-6 max-w-[18ch] text-forest">
                Who this is intended to support.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-14" data-reveal data-reveal-delay="1">
              <p className="body-copy max-w-[48ch]">
                The first sponsorship is intended for one student whose education is at risk for
                reasons of cost. These are the considerations the family will apply when the pilot is
                ready to receive a nomination.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {pilot.criteria.map((criterion, index) => (
              <article
                key={criterion.title}
                data-reveal
                data-reveal-delay={Math.min(index, 3)}
                className="border-t border-forest/20 pt-6"
              >
                <Check className="h-4 w-4 text-gold" aria-hidden="true" strokeWidth={1.9} />
                <h3 className="mt-4 font-serif text-[1.3rem] leading-snug text-forest">
                  {criterion.title}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-[1.8] text-walnut/75">{criterion.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-t border-forest/15 pt-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4" data-reveal>
              <Eyebrow>Student privacy</Eyebrow>
              <h3 className="heading-3 mt-6 text-forest">
                Support is never conditional on publicity.
              </h3>
              <p className="mt-4 max-w-sm text-[0.88rem] leading-relaxed text-walnut/65">
                Whatever is published about this pilot, it will not come at the cost of a child&rsquo;s
                privacy.
              </p>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {pilot.privacy.map((item) => (
                <li key={item} className="flex gap-3 border-t border-forest/10 pt-4">
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-gold"
                  />
                  <span className="text-[0.86rem] leading-[1.8] text-walnut/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Funding and payment information ---------------------------------- */}
      <section id="funding" aria-labelledby="funding-heading" className="section bg-white">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Funding and payments</Eyebrow>
            <h2 id="funding-heading" className="display-2 mt-6 max-w-[16ch] text-forest">
              What this page is not.
            </h2>

            <ul className="mt-9 space-y-4">
              {pilot.paymentStatements.map((statement) => (
                <li
                  key={statement}
                  className="flex gap-3 text-[0.88rem] leading-[1.8] text-walnut/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-walnut/30"
                  />
                  {statement}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7" data-reveal data-reveal-delay="1">
            <div className="border border-walnut/30 bg-ivory p-7 sm:p-9">
              <p className="flex items-center gap-2.5 text-[0.56rem] font-bold uppercase tracking-[0.2em] text-walnut/70">
                <Info className="h-3.5 w-3.5" aria-hidden="true" />
                Formal notice
              </p>
              <p className="mt-5 max-w-[58ch] font-serif text-[1.12rem] leading-[1.75] text-walnut">
                {pilot.notice}
              </p>
              <p className="mt-6 border-t border-walnut/15 pt-5 text-[0.78rem] leading-relaxed text-walnut/60">
                Enquiries about Pilot 001 are handled through the foundation&rsquo;s contact form.
                Nothing is collected through this website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact reporting -------------------------------------------------- */}
      <section id="impact" aria-labelledby="impact-heading" className="section bg-ivory">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Impact reporting</Eyebrow>
            <h2 id="impact-heading" className="display-2 mt-6 max-w-[16ch] text-forest">
              What has actually been delivered.
            </h2>
            <p className="body-copy mt-7 max-w-[44ch]">
              Reporting follows the money. An award is published here only once the payment has been
              made, received and verified.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7" data-reveal data-reveal-delay="1">
            <PilotImpact />
          </div>
        </div>
      </section>

      {/* Closing ----------------------------------------------------------- */}
      <section aria-labelledby="pilot-closing" className="relative overflow-hidden bg-forest">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,196,155,0.14),transparent_65%)]"
        />
        <div className="shell relative py-20 text-center lg:py-24" data-reveal>
          <span aria-hidden="true" className="mx-auto block h-px w-16 bg-gold/60" />
          <h2 id="pilot-closing" className="display-2 mx-auto mt-8 max-w-[24ch] text-ivory">
            {pilot.tagline}
          </h2>
          <p className="lede mx-auto mt-6 max-w-xl text-ivory/70">
            This page will keep stating plainly what has been planned, what has been funded and what
            has actually been delivered.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Cta href="/#contact" variant="gold">
              Enquire About Pilot 001
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Cta>
            <Cta href="/#mission" variant="light">
              Explore Our Mission
            </Cta>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Pilot 001 — Memorial Scholarship', path: '/pilot-001' },
        ])}
      />
    </>
  )
}
