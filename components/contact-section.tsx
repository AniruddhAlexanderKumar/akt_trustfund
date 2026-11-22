import { Mail, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { Eyebrow } from '@/components/section-heading'
import { contact } from '@/lib/site'

const details = [
  { icon: Mail, label: 'Email', value: contact.email },
  { icon: Phone, label: 'Phone', value: contact.phone },
]

export function ContactSection({ accepting }: { accepting: boolean }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section bg-ivory">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 id="contact-heading" className="display-2 mt-6 max-w-[16ch] text-forest">
            {contact.heading}
          </h2>
          <p className="body-copy mt-7 max-w-[46ch]">{contact.body}</p>

          <ul className="mt-9 divide-y divide-forest/12 border-y border-forest/12">
            {details.map(({ icon: Icon, label, value }) => (
              <li key={label}>
                <a
                  href={value.href}
                  className="group flex items-center gap-4 py-4 transition-colors duration-200"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-gold"
                    aria-hidden="true"
                    strokeWidth={1.7}
                  />
                  <span className="min-w-0">
                    <span className="block text-[0.52rem] font-bold uppercase tracking-[0.22em] text-sage">
                      {label}
                    </span>
                    <span className="mt-1 block break-words text-[0.95rem] text-forest group-hover:text-walnut">
                      {value.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-l-2 border-gold pl-5">
            <p className="text-[0.8rem] leading-relaxed text-walnut/70">{contact.note}</p>
          </div>
        </div>

        <div className="lg:col-span-7" data-reveal data-reveal-delay="1">
          <div className="border border-forest/15 bg-white p-7 sm:p-10">
            {!accepting ? (
              <div role="status" className="mb-8 border-t-2 border-walnut/30 pt-4">
                <p className="text-[0.85rem] font-bold text-walnut">{contact.pendingTitle}</p>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-walnut/75">
                  {contact.pendingBody}
                </p>
              </div>
            ) : null}

            <ContactForm accepting={accepting} />
          </div>
        </div>
      </div>
    </section>
  )
}
