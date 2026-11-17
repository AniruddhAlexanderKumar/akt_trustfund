'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnchorLink } from '@/components/anchor-link'
import { Emblem } from '@/components/emblem'
import { navItems, site } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-forest/12 bg-ivory/95 backdrop-blur-sm">
      <div className="shell flex h-[74px] items-center justify-between gap-6 lg:h-[86px]">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex items-center gap-3.5 text-forest lg:gap-4"
        >
          <Emblem className="h-11 w-11 shrink-0 text-forest lg:h-[52px] lg:w-[52px]" />
          <span className="min-w-0">
            <span className="block max-w-[26rem] text-[0.68rem] font-bold leading-[1.35] uppercase tracking-[0.14em] lg:text-[0.72rem]">
              {site.name}
            </span>
            <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.26em] text-sage">
              {site.location}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isCurrent = item.href === pathname
            return (
              <AnchorLink
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={`text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-colors duration-200 hover:text-forest ${
                  isCurrent ? 'text-forest' : 'text-walnut/75'
                }`}
              >
                {item.label}
              </AnchorLink>
            )
          })}
          <AnchorLink
            href="/#mission"
            className="hidden bg-forest px-6 py-3 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-ivory transition-colors duration-200 hover:bg-walnut xl:inline-flex"
          >
            Explore Our Mission
          </AnchorLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center border border-forest/25 text-forest transition-colors duration-200 hover:border-forest lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-forest/12 bg-ivory lg:hidden"
      >
        <nav aria-label="Mobile" className="shell py-4">
          <ul className="divide-y divide-forest/10">
            {navItems.map((item) => (
              <li key={item.href}>
                <AnchorLink
                  href={item.href}
                  onNavigate={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-walnut"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-gold">
                    /
                  </span>
                </AnchorLink>
              </li>
            ))}
          </ul>
          <AnchorLink
            href="/#mission"
            onNavigate={() => setOpen(false)}
            className="mt-5 flex items-center justify-center bg-forest px-6 py-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ivory"
          >
            Explore Our Mission
          </AnchorLink>
        </nav>
      </div>
    </header>
  )
}
