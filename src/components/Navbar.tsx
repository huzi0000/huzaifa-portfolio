import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = LINKS.map((l) => l.id)

export default function Navbar() {
  const [active, setActive] = useState('home')
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY

      // active section = last section whose top has passed the probe line
      const probe = y + window.innerHeight * 0.3
      let current = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= probe) current = id
      }
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 2) {
        current = SECTION_IDS[SECTION_IDS.length - 1]
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only-focusable fixed left-4 top-4 z-[70] rounded-full border border-white/15 bg-[#0d0f0f] px-4 py-2 text-[12px] text-[var(--c-ink)]"
      >
        Skip to content
      </a>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="shell">
          <div className="flex h-[58px] items-center justify-between lg:h-[64px]">
            {/* left brand — fixed global header element, always visible */}
            <a
              href="#home"
              className="pointer-events-auto hidden shrink-0 items-center gap-2 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#c6c7c0] transition-colors duration-300 hover:text-[var(--c-ink)] lg:flex lg:text-[11px]"
            >
              Huzaifa Siddiqui
              <span className="marker-sm" />
            </a>

            {/* centre pill */}
            <nav aria-label="Primary" className="pointer-events-auto absolute left-1/2 -translate-x-1/2">
              <ul
                className="flex h-[40px] items-center gap-1.5 rounded-full border border-white/[0.12] bg-[#0a0b0b]/[0.82] px-2.5 backdrop-blur-xl sm:h-[46px] sm:gap-2.5 sm:px-3.5 sm:text-[13px] lg:h-[53px] lg:gap-8 lg:px-6 lg:text-[14px] xl:gap-14 xl:px-[54px] xl:text-[15px]"
                style={{ boxShadow: '0 22px 54px -26px rgba(0,0,0,0.95)' }}
              >
                {LINKS.map((link) => {
                  const isActive = active === link.id
                  return (
                    <li key={link.id} className="relative">
                      <a
                        href={`#${link.id}`}
                        aria-current={isActive ? 'true' : undefined}
                        className="block rounded-full px-1 py-2 text-[12px] leading-none tracking-[-0.01em] transition-colors duration-300 sm:px-1.5 sm:text-[13px] lg:px-2 lg:py-1.5 lg:text-[14px] xl:text-[15px]"
                        style={{ color: isActive ? 'var(--c-ink)' : '#8a8e88' }}
                      >
                        {link.label}
                        <AnimatePresence>
                          {isActive && (
                            <motion.span
                              aria-hidden="true"
                              className="absolute left-1/2 -translate-x-1/2"
                              initial={{ opacity: 0, scale: 0.4 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.4 }}
                              transition={{ duration: reduce ? 0 : 0.3, ease: 'easeOut' }}
                              style={{ bottom: -6 }}
                            >
                              <span className="block h-[5px] w-[5px] rounded-full bg-[var(--c-signal)]" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* right tagline — fixed global header element, always visible */}
            <a
              href="#contact"
              className="pointer-events-auto hidden shrink-0 items-center gap-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-[#7e827c] transition-colors duration-300 hover:text-[#a3a69f] lg:flex lg:text-[10px]"
            >
              Digital Growth Systems
              <span aria-hidden="true" className="h-px w-9 lg:w-12" style={{ background: 'var(--c-signal)' }} />
            </a>
          </div>

          <div className="rule" aria-hidden />
        </div>
      </header>
    </>
  )
}
