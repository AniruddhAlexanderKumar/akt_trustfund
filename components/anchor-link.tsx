'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { MouseEvent, ReactNode } from 'react'

type AnchorLinkProps = {
  href: string
  children: ReactNode
  className?: string
  'aria-current'?: 'page'
  'aria-label'?: string
  onNavigate?: () => void
}

function parseHash(href: string): { path: string; id: string } | null {
  const index = href.indexOf('#')
  if (index === -1) return null

  const id = href.slice(index + 1)
  if (!id) return null

  return { path: href.slice(0, index) || '/', id }
}

/**
 * A Link that also handles same-page anchors. Next's client router updates the
 * URL for hash links but does not scroll, so in-page anchors are scrolled here,
 * honouring `scroll-margin-top` and the visitor's motion preference.
 */
export function AnchorLink({
  href,
  children,
  className,
  onNavigate,
  ...rest
}: AnchorLinkProps) {
  const pathname = usePathname()
  const target = parseHash(href)
  const isSamePage = target !== null && target.path === pathname

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!target || !isSamePage) {
      onNavigate?.()
      return
    }

    const element = document.getElementById(target.id)
    if (!element) {
      onNavigate?.()
      return
    }

    event.preventDefault()
    onNavigate?.()

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Defer one task so a collapsing mobile menu has given up its height and
    // the target is measured against the final layout.
    window.setTimeout(() => {
      element.scrollIntoView({
        behavior: reduceMotion ? 'instant' : 'smooth',
        block: 'start',
      })
      element.setAttribute('tabindex', '-1')
      element.focus({ preventScroll: true })
      window.history.pushState(null, '', href)
    }, 0)
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}
