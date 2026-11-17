'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Next's client router does not restore the hash when navigating between
 * pages, so `/#mission` from a subpage would land at the top of the home page.
 * This scrolls to the hash once the destination has rendered.
 */
export function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    let timer: number | undefined
    let attempts = 0

    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ''))
      if (!id) return

      const element = document.getElementById(id)
      if (!element) {
        if (attempts < 12) {
          attempts += 1
          timer = window.setTimeout(scrollToHash, 60)
        }
        return
      }

      element.setAttribute('tabindex', '-1')
      element.focus({ preventScroll: true })
      element.scrollIntoView({ behavior: 'instant', block: 'start' })
    }

    // Run after the router has finished its own scroll handling.
    timer = window.setTimeout(scrollToHash, 80)

    const onHashChange = () => scrollToHash()
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('popstate', onHashChange)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('popstate', onHashChange)
    }
  }, [pathname])

  return null
}
