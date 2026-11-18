import { Check } from 'lucide-react'
import { Eyebrow } from '@/components/section-heading'
import { roadmap } from '@/lib/site'

const markers = {
  done: {
    dot: 'border-forest bg-forest text-ivory',
    chip: 'border-forest/20 bg-forest text-ivory',
  },
  active: {
    dot: 'border-gold bg-gold text-forest ring-4 ring-gold/25',
    chip: 'border-gold bg-gold/20 text-walnut',
  },
  next: {
    dot: 'border-forest/25 bg-white text-forest/40',
    chip: 'border-forest/20 bg-transparent text-sage',
  },
} as const

export function Roadmap() {
  return (
    <section id="progress" aria-labelledby="progress-heading" className="section bg-white">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:self-start xl:sticky xl:top-28">
          <div data-reveal>
            <Eyebrow>{roadmap.eyebrow}</Eyebrow>
            <h2 id="progress-heading" className="display-2 mt-6 max-w-[13ch] text-forest">
              {roadmap.heading}
            </h2>
            <p className="body-copy mt-7 max-w-[38ch]">{roadmap.intro}</p>
          </div>

          <p
            data-reveal
            data-reveal-delay="1"
            className="mt-9 max-w-[36ch] border-l-2 border-gold pl-5 text-[0.82rem] leading-relaxed text-walnut/70"
          >
            {roadmap.note}
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ol className="border-l border-forest/15 pl-8 md:pl-10">
            {roadmap.steps.map((step, index) => {
              const marker = markers[step.status]
              return (
                <li
                  key={step.title}
                  data-reveal
                  data-reveal-delay={Math.min(index, 3)}
                  className="relative pb-11 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[42px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full border md:-left-[50px] ${marker.dot}`}
                  >
                    {step.status === 'done' ? (
                      <Check className="h-3 w-3" strokeWidth={2.6} />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    )}
                  </span>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span
                      className={`inline-flex items-center border px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] ${marker.chip}`}
                    >
                      {step.label}
                    </span>
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-sage">
                      Stage {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-serif text-[1.5rem] leading-tight text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-[0.93rem] leading-[1.8] text-walnut/80">
                    {step.body}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
