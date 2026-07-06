import { useEffect, useMemo, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, ui } from '../../data/translations'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { MunisLockup } from '../brand/MunisLockup'
import { LanguageToggle } from './LanguageToggle'
import './navigation.css'

export function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const activeSection = useScrollSpy(sectionIds)

  useFocusTrap(drawerRef, drawerOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the drawer; body scroll locked while open
  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  const desktopItems = useMemo(() => navItems.filter((item) => ['overview', 'about', 'problem', 'solution'].includes(item.id)), [])
  const drawerItems = useMemo(() => navItems.filter((item) => ['how-it-works', 'ar-maps', 'accessibility', 'prototype'].includes(item.id)), [])

  const desktopLinks = () =>
    desktopItems.map((item) => (
      <li key={item.id}>
        <a
          href={`#${item.id}`}
          className="nav__link"
          aria-current={activeSection === item.id ? 'true' : undefined}
        >
          {t(item.label)}
        </a>
      </li>
    ))

  const drawerLinks = (onClick?: () => void) =>
    drawerItems.map((item) => (
      <li key={item.id}>
        <a
          href={`#${item.id}`}
          className="nav__link"
          aria-current={activeSection === item.id ? 'true' : undefined}
          onClick={onClick}
        >
          {t(item.label)}
        </a>
      </li>
    ))

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#overview" className="header__brand" aria-label="Mu'nis — مُؤْنِس, back to overview">
          <MunisLockup showSubtitle={true} />
        </a>

        <nav className="header__nav" aria-label={t(ui.mainNavigation)}>
          <ul className="nav__list">{desktopLinks()}</ul>
        </nav>

        <div className="header__actions">
          <LanguageToggle />
          <button
            className="header__burger"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            aria-label={drawerOpen ? t(ui.closeMenu) : t(ui.openMenu)}
            onClick={() => setDrawerOpen((open) => !open)}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`drawer${drawerOpen ? ' drawer--open' : ''}`}
        id="mobile-drawer"
        {...(!drawerOpen ? { inert: true } : {})}
      >
        <div
          className="drawer__backdrop"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
        <div
          ref={drawerRef}
          className="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-label={t(ui.mainNavigation)}
        >
          <div className="pattern-overlay" aria-hidden="true" />
          <div className="drawer__head">
            <MunisLockup markSize={28} />
            <button
              className="drawer__close"
              aria-label={t(ui.closeMenu)}
              onClick={() => setDrawerOpen(false)}
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={t(ui.mainNavigation)}>
            <ul className="drawer__list">{drawerLinks(() => setDrawerOpen(false))}</ul>
          </nav>
          <div className="drawer__foot">
            <LanguageToggle idSuffix="-drawer" />
          </div>
        </div>
      </div>
    </header>
  )
}
