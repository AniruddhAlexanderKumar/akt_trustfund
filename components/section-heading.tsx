import type { ReactNode } from 'react'

type Tone = 'light' | 'dark'

export function Eyebrow({
  children,
  tone = 'dark',
  className = '',
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${
        tone === 'light' ? 'text-gold' : 'text-sage'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-8 shrink-0 ${tone === 'light' ? 'bg-gold/60' : 'bg-sage/60'}`}
      />
      {children}
    </p>
  )
}
