import { useState, type FormEvent } from 'react'
import { finalCta } from '../../data/footer'
import { brand, ui } from '../../data/translations'
import { useLanguage } from '../../hooks/useLanguage'
import { Reveal } from '../common/Reveal'
import { MunisLockup } from '../brand/MunisLockup'
import { Check, Mail } from 'lucide-react'
import './footer.css'

export function FinalCta() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
    }, 900)
  }

  return (
    <section className="final-cta section--dark on-dark" aria-labelledby="final-cta-heading">
      <div className="pattern-overlay" aria-hidden="true" />
      <div className="container final-cta__inner">
        <Reveal>
          <div className="final-cta__brand">
            <MunisLockup variant="white" showSubtitle={true} markSize={36} />
          </div>
          <div className="final-cta__dest-dot" aria-hidden="true">
            <span className="dest-dot" />
          </div>

          <h2 id="final-cta-heading" className="final-cta__headline">
            {t(finalCta.headline)}
          </h2>

          <p className="final-cta__supporting">{t(finalCta.supporting)}</p>

          <p className="final-cta__arabic" lang="ar" dir="rtl">
            {brand.taglineAr}
          </p>

          {/* Early Access Notification Form */}
          <div className="early-access-box">
            <h3 className="early-access-box__title">{t(finalCta.earlyAccessLabel)}</h3>

            {status === 'success' ? (
              <div className="early-access-success animate-fade-in">
                <Check size={20} className="text-gold" aria-hidden="true" />
                <p>{t(finalCta.successMsg)}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="early-access-form">
                <div className="early-access-form__input-wrap">
                  <Mail size={16} className="early-access-form__icon" aria-hidden="true" />
                  <input
                    type="email"
                    required
                    placeholder={t(finalCta.emailPlaceholder)}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'submitting'}
                    className="early-access-form__input"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn--light early-access-form__btn"
                >
                  {status === 'submitting' ? (
                    <span className="spinner" />
                  ) : (
                    t(finalCta.notifyBtn)
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="final-cta__actions">
            <a href="#prototype" className="btn btn--outline-light">
              {t(ui.ctaPrototype)}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
