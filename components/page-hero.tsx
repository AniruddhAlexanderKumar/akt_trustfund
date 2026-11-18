import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/section-heading'

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_-25%,rgba(217,196,155,0.18),transparent_58%)]"
      />
      <div className="shell relative pb-16 pt-16 lg:pb-24 lg:pt-24">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="display-2 rise mt-6 max-w-[24ch] text-ivory">{title}</h1>
        {intro ? (
          <p className="lede rise mt-7 max-w-2xl text-ivory/72" style={{ animationDelay: '120ms' }}>
            {intro}
          </p>
        ) : null}
        {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
      />
    </section>
  )
}
