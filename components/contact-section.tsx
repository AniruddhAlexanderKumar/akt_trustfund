import { Info } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { Eyebrow } from '@/components/section-heading'
import { contact } from '@/lib/site'

export function ContactSection({ accepting }: { accepting: boolean }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section bg-ivory">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 id="contact-heading" className="display-2 mt-6 max-w-[16ch] text-forest">
            {contact.heading}
          </h2>
          <p className="body-copy mt-7 max-w-[46ch]">{contact.body}</p>

          <div className="mt-9 border-l-2 border-gold pl-5">
            <p className="text-[0.8rem] leading-relaxed text-walnut/70">
              The foundation is being formally established. Legal registration details, a published
              correspondence address and official contact channels will appear on this website when
              they are available.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-forest/15 bg-white p-7 sm:p-10">
            {!accepting ? (
              <div
                role="status"
                className="mb-8 flex gap-3.5 border border-walnut/25 bg-ivory px-5 py-4"
              >
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-walnut" aria-hidden="true" />
                <div>
                  <p className="text-[0.85rem] font-bold text-walnut">{contact.pendingTitle}</p>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-walnut/75">
                    {contact.pendingBody}
                  </p>
                </div>
              </div>
            ) : null}

            <ContactForm accepting={accepting} />
          </div>
        </div>
      </div>
    </section>
  )
}
