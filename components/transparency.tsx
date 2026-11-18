import { Eyebrow } from '@/components/section-heading'
import { transparency } from '@/lib/site'

export function Transparency() {
  return (
    <section
      id="transparency"
      aria-labelledby="transparency-heading"
      className="section bg-white"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6" data-reveal>
            <Eyebrow>{transparency.eyebrow}</Eyebrow>
            <h2 id="transparency-heading" className="display-2 mt-6 max-w-[18ch] text-forest">
              {transparency.heading}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-14" data-reveal data-reveal-delay="1">
            <div className="max-w-[56ch] space-y-5">
              {transparency.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-copy">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          data-reveal
          data-reveal-delay="2"
          className="mt-16 grid border-l border-t border-forest/15 sm:grid-cols-2 lg:grid-cols-3"
        >
          {transparency.items.map((item) => (
            <article
              key={item.title}
              className="border-b border-r border-forest/15 px-6 py-8 transition-colors duration-300 hover:bg-ivory lg:px-8"
            >
              <h3 className="font-serif text-[1.28rem] leading-snug text-forest">{item.title}</h3>
              <p className="mt-2.5 text-[0.8rem] leading-relaxed text-walnut/60">{item.note}</p>
              <p className="mt-5 flex gap-2 text-[0.76rem] leading-relaxed text-sage">
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-gold"
                />
                {transparency.pending}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
