'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/** Appears once the visitor has moved past the opening screen. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-5 z-40 inline-flex h-11 w-11 items-center justify-center border border-gold/50 bg-forest/95 text-ivory shadow-[0_10px_30px_-12px_rgba(36,41,35,0.65)] backdrop-blur transition-all duration-300 hover:border-gold hover:bg-walnut sm:bottom-8 sm:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" strokeWidth={1.6} />
    </button>
  )
}
