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
          <div className="measure">
            <p className="label-caps text-sage">
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
      <h2 className="font-serif heading-3 text-forest">{heading}</h2>
      <div className="mt-3 space-y-4 text-body text-walnut/85">{children}</div>
    </section>
  )
}
