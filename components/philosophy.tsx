import { GraduationCap, HeartPulse, Users } from 'lucide-react'
import { Eyebrow } from '@/components/section-heading'
import { pillars } from '@/lib/site'

const icons = [HeartPulse, GraduationCap, Users]

export function Philosophy() {
  return (
    <section id="mission" aria-labelledby="mission-heading" className="section bg-forest text-ivory">
      <div className="shell">
        <div data-reveal>
          <Eyebrow tone="light">Our philosophy</Eyebrow>
          <h2 id="mission-heading" className="display-2 mt-6 max-w-[24ch] text-ivory">
            Three principles. One enduring commitment.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
          {pillars.map((pillar, index) => {
            const Icon = icons[index] ?? HeartPulse
            return (
              <article
                key={pillar.title}
                data-reveal
                data-reveal-delay={index}
                className="border-t border-gold/35 pt-8"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-gold" aria-hidden="true" strokeWidth={1.4} />
                  <span className="font-serif text-[1.6rem] leading-none text-gold/55">
                    {pillar.index}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-[1.6rem] leading-tight text-ivory">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-[1.85] text-ivory/72">{pillar.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
