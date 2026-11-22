import { Eyebrow } from '@/components/section-heading'
import { initiative } from '@/lib/initiative'

export function Campaign() {
  return (
    <section id="campaign" aria-labelledby="campaign-heading" className="section bg-white">
      <div className="shell">
        <div className="max-w-4xl" data-reveal>
          <Eyebrow>{initiative.eyebrow}</Eyebrow>
          <h2 id="campaign-heading" className="display-2 mt-6 measure-heading text-forest">
            {initiative.headline}
          </h2>
          <div className="mt-8 measure space-y-5">
            {initiative.intro.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* How the money moves from a contributor to the student */}
        <div
          className="mt-16 grid gap-10 border-t border-forest/15 pt-10 lg:grid-cols-12 lg:gap-16"
          data-reveal
          data-reveal-delay="1"
        >
          <div className="lg:col-span-4">
            <p className="label-caps text-sage">
              {initiative.processHeading}
            </p>
            <h3 className="mt-4 measure-heading heading-3 text-forest">
              {initiative.processTitle}
            </h3>
          </div>

          <ol className="lg:col-span-7 lg:col-start-6">
            {initiative.process.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.25rem_1fr] gap-x-5 border-b border-forest/10 py-5 first:pt-0 last:border-b-0 last:pb-0"
              >
                <span className="pt-1 font-serif text-body leading-none text-gold tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-serif heading-4 text-forest">{step.title}</h4>
                  <p className="mt-2 text-small text-walnut/75">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
