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

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'dark',
  id,
  className = '',
  children,
}: {
  eyebrow?: string
  title: string
  intro?: string
  tone?: Tone
  id?: string
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={className}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={`display-2 mt-6 max-w-[22ch] ${
          tone === 'light' ? 'text-ivory' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`lede mt-7 max-w-2xl ${
            tone === 'light' ? 'text-ivory/75' : 'text-walnut/85'
          }`}
        >
          {intro}
        </p>
      ) : null}
      {children}
    </div>
  )
}
