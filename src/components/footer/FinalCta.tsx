import { finalCta } from '../../data/footer'
import { brand, ui } from '../../data/translations'
import { useLanguage } from '../../hooks/useLanguage'
import { Reveal } from '../common/Reveal'
import './footer.css'

export function FinalCta() {
  const { t } = useLanguage()

  return (
    <section className="final-cta section--dark on-dark" aria-labelledby="final-cta-heading">
      <div className="pattern-overlay" aria-hidden="true" />
      <div className="container final-cta__inner">
        <Reveal>
          <h2 id="final-cta-heading" className="final-cta__headline">
            {t(finalCta.headline)}
          </h2>
          <p className="final-cta__supporting">{t(finalCta.supporting)}</p>
          <p className="final-cta__arabic" lang="ar" dir="rtl">
            {brand.taglineAr}
          </p>
          <div className="final-cta__actions">
            <a href="#experience" className="btn btn--light">
              {t(ui.ctaPrototypeLong)}
            </a>
            <a href="#overview" className="btn btn--outline-light">
              {t(ui.ctaReturnOverview)}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
