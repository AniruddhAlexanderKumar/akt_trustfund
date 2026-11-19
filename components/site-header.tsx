'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnchorLink } from '@/components/anchor-link'
import { ScrollProgress } from '@/components/scroll-progress'
import { navItems, site } from '@/lib/site'

const sectionIds = navItems
  .map((item) => (item.href.includes('#') ? item.href.split('#')[1] : null))
  .filter((id): id is string => Boolean(id))

const cta = { label: 'See the Target', href: '/#transparency' }

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [section, setSection] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    setSection(null)
    if (pathname !== '/') return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setSection(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && section === null
    if (href.includes('#')) return pathname === '/' && href.endsWith(`#${section}`)
    return href === pathname
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-ivory/95 backdrop-blur-sm transition-[box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-forest/16 shadow-[0_14px_34px_-26px_rgba(36,41,35,0.55)]'
          : 'border-forest/10'
      }`}
    >
      <div className="shell flex h-[74px] items-center justify-between gap-6 lg:h-[86px]">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex items-center gap-3.5 text-forest lg:gap-4"
        >
          <Image
            src="/images/akt-foundation-mark.png"
            alt=""
            width={400}
            height={400}
            priority
            className={`h-11 w-11 shrink-0 object-contain transition-transform duration-500 lg:h-[54px] lg:w-[54px] ${
              scrolled ? 'scale-95' : 'scale-100'
            }`}
          />
          <span className="min-w-0">
            <span className="block max-w-[15rem] text-[0.68rem] font-bold leading-[1.35] uppercase tracking-[0.14em] sm:max-w-[20rem] lg:max-w-[13rem] xl:max-w-[20rem] xl:text-[0.7rem] 2xl:max-w-[26rem]">
              {site.name}
            </span>
            <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.26em] text-sage">
              {site.location}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <AnchorLink
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`group relative whitespace-nowrap text-[0.64rem] font-bold uppercase tracking-[0.14em] transition-colors duration-200 hover:text-forest ${
                  active ? 'text-forest' : 'text-walnut/75'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-forest transition-transform duration-300 group-hover:scale-x-100 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </AnchorLink>
            )
          })}
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
        aria-hidden={!open}
        className={`grid border-t border-forest/12 bg-ivory transition-all duration-300 ease-out lg:hidden ${
          open ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
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
              href={cta.href}
              onNavigate={() => setOpen(false)}
              className="mt-5 flex items-center justify-center bg-forest px-6 py-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ivory"
            >
              {cta.label}
            </AnchorLink>
          </nav>
        </div>
      </div>

      <ScrollProgress />
    </header>
  )
}
