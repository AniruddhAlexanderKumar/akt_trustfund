import type { Metadata } from 'next'
import { Cta } from '@/components/cta'
import { MedicalScholars } from '@/components/medical-scholars'
import { PageHero } from '@/components/page-hero'
import { programme } from '@/lib/site'

export const metadata: Metadata = {
  title: 'The Medical Scholars Programme',
  description:
    'The Medical Scholars Programme is being developed to support students in Jamshedpur from Grade 7 onwards who aspire to pursue careers in medicine, through academic support, mentorship and financial assistance.',
  alternates: { canonical: '/medical-scholars' },
  openGraph: {
    title: 'The Medical Scholars Programme | AKT Foundation',
    description:
      'Supporting tomorrow’s doctors, starting today. A programme in development for aspiring medical students from Grade 7 onwards.',
    url: '/medical-scholars',
  },
}

export default function MedicalScholarsPage() {
  return (
    <>
      <PageHero
        eyebrow={programme.eyebrow}
        title={programme.heading}
        intro="A long-term programme, still in development, intended to accompany a student from early secondary school to medical education."
      >
        <div className="mt-9 inline-flex items-center gap-2.5 border border-gold/60 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
          {programme.status}
        </div>
      </PageHero>

      <MedicalScholars />

      <section aria-labelledby="next-heading" className="section border-t border-forest/12 bg-white">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="next-heading" className="display-2 max-w-[18ch] text-forest">
              What is not yet decided.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="body-copy max-w-[58ch]">
              The foundation has not yet opened applications, and no scholarship amounts, selection
              quotas or award dates are published. Eligibility criteria, the application process and
              the review procedure will be published before any student is invited to apply.
            </p>
            <p className="body-copy mt-5 max-w-[58ch]">
              Students and families should not rely on support being available in a given academic
              year. Announcements will be made through this website once the programme is formally
              established.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Cta href="/#contact" variant="dark">
                Register an Enquiry
              </Cta>
              <Cta href="/#transparency" variant="dark">
                Transparency
              </Cta>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
