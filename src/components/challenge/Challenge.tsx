import { useState } from 'react'
import {
  Accessibility,
  Languages,
  Users,
  WifiOff,
  type LucideIcon,
  HelpCircle,
  Volume2,
  Compass,
} from 'lucide-react'
import { challengeSection, challenges, problemSimulator } from '../../data/challenges'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './challenge.css'

const ICONS: Record<string, LucideIcon> = {
  language: Languages,
  accessibility: Accessibility,
  connectivity: WifiOff,
  coordination: Users,
}

export function Challenge() {
  const { t, lang } = useLanguage()
  const [activeBarriers, setActiveBarriers] = useState<string[]>([
    'language',
    'accessibility',
    'connectivity',
    'coordination',
  ])
  const [resolved, setResolved] = useState(false)

  const toggleBarrier = (id: string) => {
    setResolved(false)
    setActiveBarriers((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    )
  }

  const stressPercentage = resolved ? 5 : activeBarriers.length * 25

  return (
    <Section
      id="problem"
      eyebrow={challengeSection.eyebrow}
      title={challengeSection.heading}
      lead={challengeSection.lead}
    >
      <div className="challenge__container">
        {/* Left column: interactive toggles */}
        <div className="challenge__left">
          <ul className="challenge__list">
            {challenges.map((challenge, index) => {
              const Icon = ICONS[challenge.id] || HelpCircle
              const isActive = activeBarriers.includes(challenge.id)
              return (
                <Reveal as="li" key={challenge.id} delay={index * 50} className="challenge__card-item">
                  <button
                    onClick={() => toggleBarrier(challenge.id)}
                    className={`card challenge__card-btn ${isActive ? 'challenge__card-btn--active' : ''}`}
                    aria-pressed={isActive}
                  >
                    <div className="challenge__card-header">
                      <span className={`challenge__icon ${isActive ? 'challenge__icon--active' : ''}`}>
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="challenge__toggle" aria-hidden="true">
                        <span className={`challenge__toggle-dot ${isActive ? 'challenge__toggle-dot--active' : ''}`} />
                      </span>
                    </div>
                    <h3 className="challenge__title">{t(challenge.title)}</h3>
                    <p className="challenge__body">{t(challenge.body)}</p>
                  </button>
                </Reveal>
              )
            })}
          </ul>
        </div>

        {/* Right column: Interactive Simulator */}
        <Reveal className="challenge__right" delay={150}>
          <div className="simulator">
            <div className="simulator__head">
              <h4 className="simulator__title">{t(problemSimulator.title)}</h4>
              <div className="simulator__stress">
                <span className="stress-label">{t(problemSimulator.stressLevel)}:</span>
                <span className={`stress-value ${stressPercentage > 50 ? 'stress-value--high' : 'stress-value--low'}`}>
                  {resolved ? t(problemSimulator.stressLow) : `${stressPercentage}% (${t(problemSimulator.stressHigh)})`}
                </span>
              </div>
            </div>
            <div className="simulator__progress-bar">
              <div
                className={`simulator__progress-fill ${resolved ? 'simulator__progress-fill--resolved' : ''}`}
                style={{ width: `${stressPercentage}%` }}
              />
            </div>
            <p className="simulator__subtitle">{t(problemSimulator.subtitle)}</p>

            <div className="simulator__screen-container">
              {/* Simulated phone screen representing state */}
              <div className={`sim-phone ${resolved ? 'sim-phone--clear' : 'sim-phone--stressed'}`}>
                {resolved ? (
                  /* Clean transformed Sakeenah state */
                  <div className="sim-phone__clear-state">
                    <div className="clear-state__icon-wrap">
                      <Compass className="clear-state__compass" size={36} />
                    </div>
                    <p className="clear-state__instruction">{t(problemSimulator.resolvedInstruction)}</p>
                    <div className="clear-state__voice">
                      <Volume2 className="clear-state__voice-icon" size={18} />
                      <div className="clear-state__wave" aria-hidden="true">
                        <span className="wave-bar" />
                        <span className="wave-bar" />
                        <span className="wave-bar" />
                      </div>
                    </div>
                    <span className="clear-state__sub">{t(problemSimulator.resolvedSubtext)}</span>
                  </div>
                ) : (
                  /* Messy Stressed state showing active barriers */
                  <div className="sim-phone__stress-state">
                    {activeBarriers.length === 0 ? (
                      <div className="stress-state__empty">
                        <p>{lang === 'ar' ? 'لا توجد عوائق نشطة. اضغط على العوائق على اليسار.' : 'No active barriers. Select barriers on the left.'}</p>
                      </div>
                    ) : (
                      <ul className="stress-state__errors">
                        {activeBarriers.includes('language') && (
                          <li className="error-item error-item--language">
                            {t(problemSimulator.errors.language)}
                          </li>
                        )}
                        {activeBarriers.includes('accessibility') && (
                          <li className="error-item error-item--ui">
                            {t(problemSimulator.errors.ui)}
                          </li>
                        )}
                        {activeBarriers.includes('connectivity') && (
                          <li className="error-item error-item--offline">
                            {t(problemSimulator.errors.offline)}
                          </li>
                        )}
                        {activeBarriers.includes('coordination') && (
                          <li className="error-item error-item--lost">
                            {t(problemSimulator.errors.lost)}
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="simulator__actions">
              {resolved ? (
                <button
                  onClick={() => setResolved(false)}
                  className="btn btn--secondary btn--full"
                >
                  {t(problemSimulator.resetBtn)}
                </button>
              ) : (
                <button
                  onClick={() => setResolved(true)}
                  className="btn btn--primary btn--full"
                  disabled={activeBarriers.length === 0}
                >
                  {t(problemSimulator.resolveBtn)}
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
