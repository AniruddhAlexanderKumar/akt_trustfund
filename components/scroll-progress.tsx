'use client'

import { useEffect, useRef } from 'react'

/**
 * A hairline at the base of the sticky header that tracks reading progress
 * through the current page. Purely decorative; updates are throttled to one
 * paint per frame.
 */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0

    const paint = () => {
      frame = 0
      const root = document.documentElement
      const scrollable = root.scrollHeight - root.clientHeight
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, root.scrollTop / scrollable)) : 0
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`
    }

    const schedule = () => {
      if (frame) return
      frame = window.requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden">
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-gold via-gold/80 to-sage/70"
        style={{ transform: 'scaleX(0)', willChange: 'transform' }}
      />
    </div>
  )
}
