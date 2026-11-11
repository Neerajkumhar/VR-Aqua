import { navigation, site } from '../data/site'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  const hasContact = Boolean(site.email || site.phone || site.whatsapp)

  return (
    <footer className="site-footer">
      <div className="container">
        <div className={`site-footer__top ${hasContact ? '' : 'site-footer__top--simple'}`.trim()}>
          <div className="site-footer__brand">
            <a href="#home" aria-label="VR AQUA — back to top">
              <Logo />
            </a>
            <p>Custom labelled packaged drinking water for businesses and events.</p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          {hasContact && (
            <div className="site-footer__contact">
              <p className="site-footer__contact-title">Contact</p>
              {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
              {site.phone && <a href={`tel:${site.phone}`}>{site.phone}</a>}
              {site.whatsapp && (
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              )}
            </div>
          )}
        </div>

        <div className="site-footer__bottom">
          <p>© {year} VR AQUA. All rights are reserved.</p>
          <p className="site-footer__credit">
            Designed and developed by{' '}
            <a href="https://visuark.com" target="_blank" rel="noreferrer">
              Visuark
            </a>{' '}
            <span className="site-footer__heart" aria-hidden="true">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
