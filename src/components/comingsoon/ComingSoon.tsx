import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './comingsoon.css'

export function ComingSoon() {
  const { t } = useLanguage()

  const text = {
    eyebrow: { en: 'Availability', ar: 'التوفر والتحميل' },
    heading: { en: "Mu'nis is coming soon", ar: 'مُؤْنِس يتوفر قريباً' },
    supporting: {
      en: "The Mu'nis mobile experience is currently in prototype development and is being prepared for future Android and iOS availability.",
      ar: 'تجربة تطبيق مُؤْنِس للهواتف الذكية في مرحلة تطوير النموذج الأولي حالياً، ويجري إعدادها للتوفر مستقبلاً على نظامي أندرويد و iOS.',
    },
    googlePlay: { en: 'Google Play', ar: 'جوجل بلاي' },
    appStore: { en: 'App Store', ar: 'متجر التطبيقات' },
    comingSoon: { en: 'Coming Soon', ar: 'قريباً' },
  }

  return (
    <Section
      id="coming-soon"
      eyebrow={text.eyebrow}
      title={text.heading}
      variant="soft"
    >
      <div className="coming-soon">
        <Reveal>
          <p className="coming-soon__supporting">{t(text.supporting)}</p>

          <div className="coming-soon__badges">
            {/* Apple App Store Badge (Disabled) */}
            <div className="store-badge-card store-badge-card--disabled" aria-disabled="true">
              <svg viewBox="0 0 24 24" className="store-badge-card__logo" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
              </svg>
              <div className="store-badge-card__text">
                <span className="store-badge-card__sub">{t(text.comingSoon)}</span>
                <span className="store-badge-card__title">{t(text.appStore)}</span>
              </div>
            </div>

            {/* Google Play Badge (Disabled) */}
            <div className="store-badge-card store-badge-card--disabled" aria-disabled="true">
              <svg viewBox="0 0 24 24" className="store-badge-card__logo" fill="currentColor">
                <path d="M5.25 3c-.22 0-.44.08-.62.24l9.16 9.16 2.63-2.63L5.87 3.24c-.18-.16-.4-.24-.62-.24zm-.97.74c-.18.18-.28.44-.28.76v15c0 .32.1.58.28.76l9.38-9.38L4.28 3.74zm12.56 6.63L14.21 13l2.63 2.63 2.63-2.63c.22-.22.33-.51.33-.82 0-.31-.11-.6-.33-.82l-2.63-2.63zm-2.07 3.39L5.61 23.14c.18.16.4.24.62.24.22 0 .44-.08.62-.24l10.59-10.59-2.63-2.63z" />
              </svg>
              <div className="store-badge-card__text">
                <span className="store-badge-card__sub">{t(text.comingSoon)}</span>
                <span className="store-badge-card__title">{t(text.googlePlay)}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
