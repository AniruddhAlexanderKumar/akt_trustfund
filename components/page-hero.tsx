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
    <section className="bg-forest text-ivory">
      <div className="shell pb-16 pt-16 lg:pb-24 lg:pt-24">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="display-2 mt-6 max-w-[24ch] text-ivory">{title}</h1>
        {intro ? <p className="lede mt-7 max-w-2xl text-ivory/72">{intro}</p> : null}
        {children}
      </div>
    </section>
  )
}
