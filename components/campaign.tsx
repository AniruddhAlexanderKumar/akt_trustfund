import { Eyebrow } from '@/components/section-heading'
import { initiative } from '@/lib/initiative'

export function Campaign() {
  return (
    <section id="campaign" aria-labelledby="campaign-heading" className="section bg-white">
      <div className="shell">
        <div className="max-w-4xl" data-reveal>
          <Eyebrow>{initiative.eyebrow}</Eyebrow>
          <h2 id="campaign-heading" className="display-2 mt-6 max-w-[24ch] text-forest">
            {initiative.headline}
          </h2>
          <div className="mt-8 max-w-[62ch] space-y-5">
            {initiative.intro.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* How the money moves from a contributor to the student */}
        <div className="mt-16" data-reveal data-reveal-delay="1">
          <p className="text-[0.56rem] font-bold uppercase tracking-[0.24em] text-sage">
            {initiative.processHeading}
          </p>
          <ol className="mt-6 grid gap-x-10 gap-y-8 border-t border-forest/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {initiative.process.map((step, index) => (
              <li key={step.title}>
                <span className="font-serif text-[1rem] text-gold tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-serif text-[1.15rem] leading-snug text-forest">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.86rem] leading-[1.75] text-walnut/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
