import type { ReactNode } from 'react'
import { AnchorLink } from '@/components/anchor-link'

type Variant = 'gold' | 'light' | 'dark'

const base =
  'btn group'

const variants: Record<Variant, string> = {
  gold: 'btn-gold',
  light: 'btn-light',
  dark: 'btn-dark',
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
