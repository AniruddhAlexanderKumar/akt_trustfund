import { Eyebrow } from '@/components/section-heading'
import { initiative } from '@/lib/initiative'

export function Status() {
  return (
    <section id="status" aria-labelledby="status-heading" className="section-tight bg-white">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <Eyebrow>Status and accuracy</Eyebrow>
          <h2 id="status-heading" className="display-2 mt-6 max-w-[16ch] text-forest">
            {initiative.legalHeading}
          </h2>
          <p className="body-copy mt-7 max-w-[40ch]">{initiative.legalIntro}</p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" data-reveal data-reveal-delay="1">
          <ul className="border-t border-walnut/25">
            {initiative.legalStatements.map((statement) => (
              <li
                key={statement}
                className="border-b border-walnut/15 py-4 text-[0.88rem] leading-[1.78] text-walnut/85"
              >
                {statement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
