'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    __revealReady?: boolean
  }
}

/**
 * Adds `.is-visible` to every `[data-reveal]` element as it enters the
 * viewport. Sections stay server-rendered: they only need the attribute and
 * the styling lives in globals.css, so no extra client boundary is created
 * per section.
 *
 * The `js` class is set by a tiny inline script in the document head, before
 * first paint. Without JavaScript — or with reduced motion requested — the
 * content is simply visible. That inline script also runs a fallback which
 * revokes the initial hidden state if this component never mounts.
 */
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    window.__revealReady = true

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (nodes.length === 0) return

    const reveal = (node: Element) => node.classList.add('is-visible')

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      nodes.forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )

    const viewportHeight = window.innerHeight

    for (const node of nodes) {
      // Anything already on screen when the route renders is shown at once,
      // so a fresh page never appears blank.
      if (node.getBoundingClientRect().top < viewportHeight * 0.94) {
        reveal(node)
      } else {
        observer.observe(node)
      }
    }

    return () => observer.disconnect()
  }, [pathname])

  return null
}
