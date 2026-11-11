import { useEffect, useRef, useState } from 'react'
import { navigation } from '../data/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrolled } from '../hooks/useScrolled'
import { CloseIcon } from './Icons'
import Logo from './Logo'

const sectionIds = ['home', 'about', 'collection', 'process', 'industries', 'contact']

export default function Navbar() {
  const scrolled = useScrolled(28)
  const active = useScrollSpy(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (menuOpen && !dialog.open) dialog.showModal()
    if (!menuOpen && dialog.open) dialog.close()
  }, [menuOpen])

  useEffect(() => {
    document.body.classList.toggle('is-dialog-open', menuOpen)
    return () => document.body.classList.remove('is-dialog-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header__inner">
          <a className="site-header__brand" href="#home" aria-label="VR AQUA — back to top">
            <Logo />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => {
              const id = item.href.replace('#', '')
              return (
                <a
                  key={item.href}
                  className={`desktop-nav__link ${active === id ? 'is-active' : ''}`}
                  href={item.href}
                  aria-current={active === id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="site-header__actions">
            <a className="button button--outline button--small site-header__cta" href="#contact">
              REQUEST A QUOTE
            </a>

            <button
              className="menu-toggle"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(true)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className="mobile-menu"
        aria-labelledby="mobile-menu-title"
        onClose={closeMenu}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeMenu()
        }}
      >
        <div className="mobile-menu__inner">
          <div className="mobile-menu__top">
            <Logo compact />
            <button className="icon-button" type="button" aria-label="Close navigation menu" onClick={closeMenu}>
              <CloseIcon />
            </button>
          </div>

          <h2 id="mobile-menu-title" className="sr-only">
            Navigation
          </h2>

          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            <a className="button button--primary" href="#contact" onClick={closeMenu}>
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </dialog>
    </>
  )
}
