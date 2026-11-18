import { ArrowRight, Plus } from 'lucide-react'
import { AnchorLink } from '@/components/anchor-link'
import { Eyebrow } from '@/components/section-heading'
import { faq } from '@/lib/site'

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section bg-ivory">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:self-start xl:sticky xl:top-28">
          <div data-reveal>
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h2 id="faq-heading" className="display-2 mt-6 max-w-[12ch] text-forest">
              {faq.heading}
            </h2>
            <p className="mt-6 max-w-[32ch] text-[0.95rem] leading-[1.8] text-walnut/80">
              {faq.intro}
            </p>

            <AnchorLink
              href="/#contact"
              className="group mt-8 inline-flex items-center gap-2.5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-forest"
            >
              <span className="link-underline">Ask us directly</span>
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </AnchorLink>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6" data-reveal data-reveal-delay="1">
          <div className="border-b border-forest/15">
            {faq.items.map((item) => (
              <details key={item.question} className="group border-t border-forest/15">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-[1.15rem] leading-snug text-forest transition-colors duration-200 group-hover:text-walnut sm:text-[1.28rem]">
                    {item.question}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-forest/20 text-forest transition-colors duration-300 group-open:border-forest group-open:bg-forest group-open:text-ivory">
                    <Plus
                      className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <p className="max-w-[60ch] pb-7 pr-6 text-[0.94rem] leading-[1.85] text-walnut/85">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
