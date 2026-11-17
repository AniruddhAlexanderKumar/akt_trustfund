import type { ReactNode } from 'react'
import { PageHero } from '@/components/page-hero'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <section className="section bg-ivory">
        <div className="shell">
          <div className="max-w-[68ch]">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-sage">
              Last updated {updated}
            </p>
            <div className="mt-8 space-y-8">{children}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-[1.55rem] leading-snug text-forest">{heading}</h2>
      <div className="mt-3 space-y-4 text-[0.95rem] leading-[1.85] text-walnut/85">{children}</div>
    </section>
  )
}
