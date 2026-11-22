import { Eyebrow } from '@/components/section-heading'
import { initiative } from '@/lib/initiative'

export function Beneficiary() {
  return (
    <section id="beneficiary" aria-labelledby="beneficiary-heading" className="section bg-ivory">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Beneficiary selection</Eyebrow>
            <h2 id="beneficiary-heading" className="display-2 mt-6 max-w-[18ch] text-forest">
              One student, chosen carefully.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-14" data-reveal data-reveal-delay="1">
            <p className="body-copy max-w-[44ch]">{initiative.beneficiaryIntro}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {initiative.beneficiaryCriteria.map((criterion, index) => (
            <article
              key={criterion.title}
              data-reveal
              data-reveal-delay={Math.min(index, 3)}
              className="border-t border-forest/20 pt-6"
            >
              <span className="font-serif text-[1rem] text-gold tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-serif text-[1.25rem] leading-snug text-forest">
                {criterion.title}
              </h3>
              <p className="mt-3 text-[0.86rem] leading-[1.8] text-walnut/75">{criterion.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-forest/20 pt-6" data-reveal>
          <h3 className="label-caps text-sage">Protecting the student</h3>
          <p className="mt-3 max-w-[68ch] text-[0.88rem] leading-[1.8] text-walnut/80">
            {initiative.beneficiaryPrivacy}
          </p>
        </div>
      </div>
    </section>
  )
}
