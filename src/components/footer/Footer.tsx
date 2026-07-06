import { footer } from '../../data/footer'
import { ui } from '../../data/translations'
import { useLanguage } from '../../hooks/useLanguage'
import { MunisLockup } from '../brand/MunisLockup'
import { LanguageToggle } from '../navigation/LanguageToggle'
import './footer.css'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer on-dark">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <MunisLockup variant="white" showSubtitle={true} />
            <p className="footer__summary">{t(footer.summary)}</p>
            <LanguageToggle idSuffix="-footer" />
          </div>

          <nav className="footer__links" aria-label={t(footer.linksHeading)}>
            <h2 className="footer__heading">{t(footer.linksHeading)}</h2>
            <ul>
              {footer.links.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{t(link.label)}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__status">
            <h2 className="footer__heading">{t(footer.statusHeading)}</h2>
            <p className="footer__status-line">{t(ui.competitionTrack)}</p>
            <span className="badge badge--outline-dark">{t(ui.prototypeStatus)}</span>
          </div>
        </div>

        <p className="footer__disclaimer">{t(footer.disclaimer)}</p>
        <p className="footer__copyright">{t(footer.copyright)}</p>
      </div>
    </footer>
  )
}
