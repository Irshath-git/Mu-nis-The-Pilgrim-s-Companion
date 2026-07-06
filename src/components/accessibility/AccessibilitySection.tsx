import { useState } from 'react'
import {
  Speech,
  CheckCircle2,
  Eye,
  Accessibility,
  Play,
} from 'lucide-react'
import {
  accessibilitySection,
  accessibilityCapabilities,
  accessibilityProfiles,
} from '../../data/accessibility'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import { brand } from '../../data/translations'
import './accessibility.css'

export function AccessibilitySection() {
  const { t, lang } = useLanguage()
  const [activeProfileId, setActiveProfileId] = useState<string>('elderly')

  const activeProfile =
    accessibilityProfiles.find((p) => p.id === activeProfileId) || accessibilityProfiles[0]

  return (
    <Section
      id="accessibility"
      eyebrow={accessibilitySection.eyebrow}
      title={accessibilitySection.heading}
    >
      {/* Capability tags cloud at the top */}
      <ul className="a11y__capabilities">
        {accessibilityCapabilities.map((capability, index) => (
          <Reveal
            as="li"
            key={capability.id}
            delay={(index % 4) * 45}
            className="a11y__capability"
          >
            <CheckCircle2 size={13} className="a11y__check-icon" aria-hidden="true" />
            {t(capability.label)}
          </Reveal>
        ))}
      </ul>

      {/* Theater Dashboard */}
      <div className="a11y-dashboard grid grid--2">
        {/* Left Side: Profile Selector list */}
        <Reveal className="a11y-dashboard__controls">
          <h3 className="a11y-dashboard__title">{t(accessibilitySection.previewHeading)}</h3>
          <p className="a11y-dashboard__lead">{t(accessibilitySection.previewLead)}</p>

          <div className="a11y-profiles-list" role="tablist" aria-label="Accessibility Profiles">
            {accessibilityProfiles.map((profile) => {
              const isActive = profile.id === activeProfileId
              return (
                <button
                  key={profile.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveProfileId(profile.id)}
                  className={`a11y-profile-card ${isActive ? 'a11y-profile-card--active' : ''}`}
                >
                  <div className="a11y-profile-card__header">
                    <span className="a11y-profile-card__name">{t(profile.name)}</span>
                    {isActive && <span className="a11y-profile-card__marker" aria-hidden="true" />}
                  </div>
                  <p className="a11y-profile-card__desc">{t(profile.description)}</p>
                </button>
              )
            })}
          </div>

          <div className="a11y-explanation card">
            <h4 className="a11y-explanation__title">
              <Speech size={16} className="text-gold" aria-hidden="true" />
              {t({ en: 'How it adapts:', ar: 'كيف تتكيف الواجهة:' })}
            </h4>
            <p className="a11y-explanation__text">{t(activeProfile.explanation)}</p>
          </div>
        </Reveal>

        {/* Right Side: Phone UI Theater Simulator */}
        <Reveal className="a11y-dashboard__theater" delay={120}>
          <div className="theater-frame">
            <div className="theater-frame__screen-wrap">
              {/* Simulated mobile screen container */}
              <div
                className={`theater-screen ${
                  activeProfile.adaptedUi.highContrast ? 'theater-screen--hc' : ''
                }`}
              >
                {/* Simulated App Header */}
                <p className="theater-screen__brand-header">
                  {lang === 'ar' ? brand.nameAr : brand.nameEn}
                </p>

                <h4 className="theater-screen__title">
                  {t({ en: 'Accessibility Personalisation', ar: 'تخصيص سهولة الوصول' })}
                </h4>

                {/* Simulated Phone Screen Split Grid Layout */}
                <div className="theater-split-grid">
                  {/* Left Column: Select Profile inside screen */}
                  <div className="theater-col-left">
                    <span className="theater-heading">{t({ en: 'Select Profile', ar: 'اختر الملف' })}</span>
                    
                    <button
                      className={`theater-profile-btn ${activeProfileId === 'elderly' ? 'theater-profile-btn--active' : ''}`}
                      onClick={() => setActiveProfileId('elderly')}
                    >
                      <Speech size={15} />
                      <span className="theater-profile-btn__label">{t({ en: 'Elderly Mode', ar: 'وضع كبار السن' })}</span>
                    </button>

                    <button
                      className={`theater-profile-btn ${activeProfileId === 'wheelchair' ? 'theater-profile-btn--active' : ''}`}
                      onClick={() => setActiveProfileId('wheelchair')}
                    >
                      <Accessibility size={15} />
                      <span className="theater-profile-btn__label">{t({ en: 'Wheelchair', ar: 'الكرسي المتحرك' })}</span>
                    </button>

                    <button
                      className={`theater-profile-btn ${activeProfileId === 'visual' ? 'theater-profile-btn--active' : ''}`}
                      onClick={() => setActiveProfileId('visual')}
                    >
                      <Eye size={15} />
                      <span className="theater-profile-btn__label">{t({ en: 'Visual Help', ar: 'مساعد البصر' })}</span>
                    </button>
                  </div>

                  {/* Right Column: Preview inside screen */}
                  <div className="theater-col-right">
                    <span className="theater-heading">{t({ en: 'Preview:', ar: 'معاينة:' })}</span>
                    
                    <div className="theater-preview-pane">
                      {/* Huda Avatar & Status */}
                      <div className="theater-huda-avatar-wrap">
                        <div className="huda-avatar-ripples">
                          <div className="huda-avatar">
                            <span className="huda-avatar-icon">🧕</span>
                          </div>
                        </div>
                        <span className="huda-listening-text">{t({ en: 'Huda is listening...', ar: 'هُدى تستمع...' })}</span>
                      </div>

                      {/* Dynamic Adapted Instruction */}
                      <p className="theater-preview-instruction" style={{ fontSize: activeProfile.adaptedUi.fontSize }}>
                        {t(activeProfile.adaptedInstruction)}
                      </p>

                      {/* Small Map Card */}
                      <div className="theater-mini-map-card">
                        <svg viewBox="0 0 100 50" className="theater-mini-svg">
                          <path
                            d="M 15 40 C 35 35, 55 20, 85 15"
                            fill="none"
                            stroke="var(--rose-clay)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                          <circle cx="85" cy="15" r="4.5" fill="var(--night-indigo)" />
                          <circle cx="15" cy="40" r="4.5" fill="var(--rose-clay)" />
                        </svg>
                        <span className="theater-mini-map-card__badge">
                          {t(activeProfile.adaptedMeta)}
                        </span>
                      </div>

                      {/* Play buttons */}
                      <button className="theater-play-btn">
                        <span>{t({ en: 'Listen to instruction', ar: 'استمع للتوجيه' })}</span>
                        <Play size={10} fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom App Nav Bar */}
                <div className="theater-screen__bottom-nav">
                  <span className="theater-nav-item">🏠</span>
                  <span className="theater-nav-item">👥</span>
                  <span className="theater-nav-item theater-nav-item--active">📍</span>
                  <span className="theater-nav-item">👤</span>
                </div>
              </div>
            </div>

            {/* Phone home indicator bar */}
            <div className="theater-frame__home-indicator" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
