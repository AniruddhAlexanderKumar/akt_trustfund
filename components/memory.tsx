import Image from 'next/image'
import { Eyebrow } from '@/components/section-heading'
import { memory } from '@/lib/site'

/** A short, quiet introduction to the person the initiative is named for. */
export function Memory() {
  return (
    <section id="memory" aria-labelledby="memory-heading" className="section bg-ivory">
      <div className="shell">
        <div className="mb-14 max-w-[24rem]" data-reveal>
          <Image
            src="/images/akt-foundation-logo.png"
            alt="The Late Dr. Anil Kumar Thakur Foundation"
            width={1000}
            height={603}
            sizes="(min-width: 768px) 24rem, 80vw"
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <Eyebrow>{memory.eyebrow}</Eyebrow>
          <h2 id="memory-heading" className="display-2 mt-6 max-w-[14ch] text-forest">
            {memory.heading}
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" data-reveal data-reveal-delay="1">
          <div className="max-w-[58ch] space-y-5">
            {memory.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? 'font-serif text-[1.3rem] leading-[1.65] text-walnut'
                    : 'body-copy'
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
