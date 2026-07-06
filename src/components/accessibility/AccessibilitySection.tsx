import { useState } from 'react'
import {
  Volume2,
  Speech,
  CheckCircle2,
} from 'lucide-react'
import {
  accessibilitySection,
  accessibilityCapabilities,
  accessibilityProfiles,
} from '../../data/accessibility'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './accessibility.css'

export function AccessibilitySection() {
  const { t } = useLanguage()
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
                style={{ fontSize: activeProfile.adaptedUi.fontSize }}
              >
                {/* Simulated App Header */}
                <div className="theater-screen__header">
                  <span className="theater-screen__brand">Mu'nis</span>
                  <span className="theater-screen__badge">
                    {t({ en: 'Accessibility Active', ar: 'التسهيل مفعل' })}
                  </span>
                </div>

                {/* Adapted Instruction Card */}
                <div
                  className={`theater-card ${
                    activeProfile.adaptedUi.stepFreeHighlighted ? 'theater-card--highlighted' : ''
                  }`}
                >
                  <span className="theater-card__label" style={{ fontSize: '0.8em' }}>
                    {t({ en: 'Next Step Instruction', ar: 'توجيه الخطوة التالية' })}
                  </span>

                  <p
                    className="theater-card__instruction"
                    style={{
                      fontSize: activeProfile.adaptedUi.titleSize,
                      fontWeight: '700',
                      lineHeight: '1.4',
                    }}
                  >
                    {t(activeProfile.adaptedInstruction)}
                  </p>

                  <p
                    className="theater-card__meta"
                    style={{ fontSize: '0.8em', marginTop: '0.5em', opacity: 0.85 }}
                  >
                    {t(activeProfile.adaptedMeta)}
                  </p>
                </div>

                {/* Waveform visual for voice modes */}
                {activeProfile.adaptedUi.voicePlaying && (
                  <div className="theater-voice-bar">
                    <Volume2 size={16} className="theater-voice-icon" aria-hidden="true" />
                    <div className="theater-voice-wave" aria-hidden="true">
                      <span className="voice-bar" />
                      <span className="voice-bar" />
                      <span className="voice-bar" />
                      <span className="voice-bar" />
                    </div>
                    <span className="theater-voice-text" style={{ fontSize: '0.75em' }}>
                      {t({ en: 'Huda speaking...', ar: 'هُدى تتحدث...' })}
                    </span>
                  </div>
                )}

                {/* Bottom navigation buttons */}
                <div className="theater-actions">
                  <button className="btn btn--primary btn--sm theater-btn">
                    {t({ en: 'Guide Me', ar: 'أرشدني' })}
                  </button>
                  <button className="btn btn--secondary btn--sm theater-btn">
                    {t({ en: 'Repeat', ar: 'أعد' })}
                  </button>
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
