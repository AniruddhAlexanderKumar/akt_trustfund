import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { AnchorLink } from '@/components/anchor-link'
import { Eyebrow } from '@/components/section-heading'

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  breadcrumb?: { label: string; href: string }
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_-25%,rgba(217,196,155,0.18),transparent_58%)]"
      />
      <div className="shell relative pb-16 pt-16 lg:pb-24 lg:pt-24">
        {breadcrumb ? (
          <AnchorLink
            href={breadcrumb.href}
            className="group mb-9 inline-flex items-center gap-3 label-caps text-ivory/55 transition-colors duration-200 hover:text-gold"
          >
            <ArrowLeft
              className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            {breadcrumb.label}
          </AnchorLink>
        ) : null}
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="display-2 rise mt-6 measure-heading text-ivory">{title}</h1>
        {intro ? (
          <p className="text-lead rise mt-7 max-w-2xl text-ivory/72" style={{ animationDelay: '120ms' }}>
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
