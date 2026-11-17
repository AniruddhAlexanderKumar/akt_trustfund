import Image from 'next/image'
import { Check } from 'lucide-react'
import { Cta } from '@/components/cta'
import { Eyebrow } from '@/components/section-heading'
import { programme } from '@/lib/site'

export function MedicalScholars() {
  return (
    <section id="scholars" aria-labelledby="scholars-heading" className="section bg-ivory">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>{programme.eyebrow}</Eyebrow>
            <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-walnut/70">
              {programme.name}
            </p>
            <h2 id="scholars-heading" className="display-2 mt-4 max-w-[20ch] text-forest">
              {programme.heading}
            </h2>

            <div className="mt-8 max-w-[62ch] space-y-5">
              {programme.intro.map((paragraph) => (
                <p key={paragraph} className="body-copy">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2.5 border border-gold bg-gold/15 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-walnut">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-walnut/60" />
                {programme.status}
              </span>
              <Cta href={programme.cta.href} variant="dark">
                {programme.cta.label}
              </Cta>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-forest/10">
              <Image
                src={programme.image}
                alt={programme.imageAlt}
                fill
                sizes="(min-width: 1024px) 34rem, 100vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-forest/10" />
            </div>
            <p className="mt-4 text-[0.72rem] leading-relaxed text-walnut/60">
              Medical students at a university in Varanasi. Photograph for illustration only; it
              does not depict a foundation scholar.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <Eyebrow>Educational journey</Eyebrow>
          <div className="mt-7 flex items-center gap-5">
            <span className="eyebrow text-sage">{programme.journeyStart}</span>
            <span aria-hidden="true" className="hairline flex-1" />
            <span className="eyebrow text-sage">{programme.journeyEnd}</span>
          </div>

          <ol className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {programme.stages.map((stage) => (
              <li key={stage.stage} className="relative border-t border-forest/20 pt-8">
                <span
                  aria-hidden="true"
                  className="absolute -top-[4.5px] left-0 h-[9px] w-[9px] bg-gold"
                />
                <span className="font-serif text-[2.4rem] leading-none text-gold">
                  {stage.stage}
                </span>
                <h3 className="mt-4 font-serif text-[1.45rem] leading-tight text-forest">
                  {stage.title}
                </h3>
                <p className="mt-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sage">
                  {stage.grades}
                </p>
                <p className="mt-4 text-[0.93rem] leading-[1.8] text-walnut/80">{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid gap-12 border-t border-forest/15 pt-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>Programme principles</Eyebrow>
            <h3 className="heading-3 mt-6 text-forest">
              How the programme intends to operate.
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-walnut/70">
              These principles guide the programme as it is developed. Detailed eligibility criteria
              and selection procedures will be published before any application process opens.
            </p>
          </div>

          <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:col-span-8">
            {programme.principles.map((principle) => (
              <li key={principle} className="flex gap-3.5 border-t border-forest/10 pt-4">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" strokeWidth={1.8} />
                <span className="text-[0.93rem] leading-relaxed text-walnut/85">{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
