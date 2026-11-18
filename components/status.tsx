import { Eyebrow } from '@/components/section-heading'
import { initiative } from '@/lib/initiative'

export function Status() {
  return (
    <section id="status" aria-labelledby="status-heading" className="section bg-white">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <Eyebrow>Status and accuracy</Eyebrow>
          <h2 id="status-heading" className="display-2 mt-6 max-w-[16ch] text-forest">
            {initiative.legalHeading}
          </h2>
          <p className="body-copy mt-7 max-w-[40ch]">{initiative.legalIntro}</p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" data-reveal data-reveal-delay="1">
          <div className="border border-walnut/25 bg-ivory p-7 sm:p-9">
            <ul className="space-y-4">
              {initiative.legalStatements.map((statement) => (
                <li key={statement} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-[0.62rem] h-1 w-1 shrink-0 rounded-full bg-walnut/35"
                  />
                  <span className="text-[0.88rem] leading-[1.8] text-walnut/85">{statement}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-walnut/15 pt-5 text-[0.76rem] leading-relaxed text-walnut/60">
              The name used across this website is the family&rsquo;s own name for the initiative. It
              is not a statement of legal registration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
