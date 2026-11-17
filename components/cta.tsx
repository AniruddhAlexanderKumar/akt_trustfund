import type { ReactNode } from 'react'
import { AnchorLink } from '@/components/anchor-link'

type Variant = 'gold' | 'light' | 'dark'

const base =
  'group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-55'

const variants: Record<Variant, string> = {
  gold: 'bg-gold text-forest hover:bg-[#e7d7b3]',
  light: 'border border-ivory/35 text-ivory hover:border-gold hover:text-gold',
  dark: 'border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-ivory',
}

export function Cta({
  href,
  children,
  variant = 'gold',
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <AnchorLink href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </AnchorLink>
  )
}
