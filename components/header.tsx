'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { CloseIcon, MenuIcon } from '@/components/icons'
import { contacts, navLinks } from '@/data/site'

export function Header() {
  const [open, setOpen] = useState(false)

  // блокируем скролл страницы, пока открыто мобильное меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/70 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/60">
      <div className="shell flex h-[72px] items-center justify-between gap-6 xl:h-20">
        <a
          href="#top"
          className="relative block h-9 w-[132px] shrink-0 sm:h-10 sm:w-[150px]"
          aria-label="Urban Wheels 41 — на главную"
        >
          <Image
            src="/images/logo.png"
            alt="Логотип Urban Wheels 41"
            fill
            sizes="150px"
            priority
            /* logo.png идёт с чёрной подложкой — lighten убирает её на тёмном фоне */
            className="object-contain object-left mix-blend-lighten"
          />
        </a>

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-2 text-[0.95rem] font-medium text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-gold-gradient transition-transform duration-300 group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contacts.phoneHref}
            className="hidden text-[0.95rem] font-semibold tracking-wide text-gold-gradient transition-opacity hover:opacity-80 sm:block xl:text-base"
          >
            {contacts.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            className="-mr-1 flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white transition-colors hover:border-gold-dark lg:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Мобильная навигация" className="shell py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3.5 font-heading text-lg uppercase tracking-wide text-white/90 transition-colors hover:bg-surface hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contacts.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-lg border border-line px-3 py-3.5 text-center text-lg font-semibold text-gold-gradient"
          >
            {contacts.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
