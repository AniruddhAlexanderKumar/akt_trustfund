import { Cta } from '@/components/cta'
import { PortraitPlaceholder } from '@/components/portrait-placeholder'
import { Eyebrow } from '@/components/section-heading'
import { story } from '@/lib/site'

export function LegacyStory() {
  return (
    <section id="his-legacy" aria-labelledby="legacy-heading" className="section bg-ivory">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7" data-reveal>
          <Eyebrow>{story.eyebrow}</Eyebrow>
          <h2 id="legacy-heading" className="display-2 mt-6 max-w-[20ch] text-forest">
            {story.heading}
          </h2>

          <div className="mt-9 max-w-[62ch] space-y-5">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Cta href={story.cta.href} variant="dark">
              {story.cta.label}
            </Cta>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-6" data-reveal data-reveal-delay="1">
          <PortraitPlaceholder caption={story.portraitCaption} note={story.portraitPlaceholder} />
        </div>
      </div>
    </section>
  )
}
