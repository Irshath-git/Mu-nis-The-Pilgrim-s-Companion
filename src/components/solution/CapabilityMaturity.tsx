import { useState, useEffect } from 'react'
import {
  Volume2,
  Languages,
  Accessibility,
  Wifi,
  Footprints,
  Compass,
  Play,
  Sparkles,
} from 'lucide-react'
import { capabilitySection, adaptationModes } from '../../data/capabilities'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './solution.css'

export function CapabilityMaturity() {
  const { t } = useLanguage()
  const [selectedModeId, setSelectedModeId] = useState<string>('elderly')
  const [engineState, setEngineState] = useState<'listening' | 'understanding' | 'adapted'>('adapted')

  const activeMode = adaptationModes.find((m) => m.id === selectedModeId) || adaptationModes[0]

  useEffect(() => {
    setEngineState('listening')
    const t1 = setTimeout(() => setEngineState('understanding'), 600)
    const t2 = setTimeout(() => setEngineState('adapted'), 1300)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [selectedModeId])

  return (
    <Section
      id="how-it-works"
      variant="dark"
      eyebrow={capabilitySection.eyebrow}
      title={capabilitySection.heading}
    >
      <div className="pattern-overlay" aria-hidden="true" />

      <div className="how-works">
        {/* Mode Selector Row */}
        <Reveal className="how-works__selector-wrap">
          <div className="how-works__selectors" role="tablist" aria-label="Adaptation Profiles">
            {adaptationModes.map((mode) => (
              <button
                key={mode.id}
                role="tab"
                aria-selected={selectedModeId === mode.id}
                onClick={() => setSelectedModeId(mode.id)}
                className={`btn btn--outline-light how-works__selector-btn ${
                  selectedModeId === mode.id ? 'how-works__selector-btn--active' : ''
                }`}
              >
                {t(mode.name)}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Adaptive Dashboard Grid */}
        <div className="how-works__dashboard grid grid--2">
          {/* Left Panel: Inputs & Engine */}
          <Reveal className="how-works__panel card card--dark">
            <h3 className="how-works__panel-title">
              <Sparkles size={18} className="text-gold" aria-hidden="true" />
              {t({ en: 'Live Context Signals', ar: 'إشارات السياق الحية' })}
            </h3>

            <div className="how-works__signals">
              <div className="signal-item">
                <Compass size={16} className="signal-item__icon" aria-hidden="true" />
                <span className="signal-item__value">{t(activeMode.signals.route)}</span>
              </div>
              <div className="signal-item">
                <Footprints size={16} className="signal-item__icon" aria-hidden="true" />
                <span className="signal-item__value">{t(activeMode.signals.stage)}</span>
              </div>
              <div className="signal-item">
                <Accessibility size={16} className="signal-item__icon" aria-hidden="true" />
                <span className="signal-item__value">{t(activeMode.signals.profile)}</span>
              </div>
              <div className="signal-item">
                <Languages size={16} className="signal-item__icon" aria-hidden="true" />
                <span className="signal-item__value">{t(activeMode.signals.lang)}</span>
              </div>
              <div className="signal-item">
                <Wifi size={16} className="signal-item__icon" aria-hidden="true" />
                <span className="signal-item__value">{t(activeMode.signals.conn)}</span>
              </div>
            </div>

            <div className="how-works__engine">
              <div className="engine-node">
                <span className={`engine-status-text engine-status-text--${engineState}`}>
                  {engineState === 'listening' && t({ en: 'Huda listening...', ar: 'هُدى تستمع...' })}
                  {engineState === 'understanding' &&
                    t({ en: 'Understanding context...', ar: 'فهم السياق الشخصي...' })}
                  {engineState === 'adapted' && t({ en: 'Context Adapted', ar: 'تم تكييف الإرشاد' })}
                </span>
                <div className="engine-pulser">
                  <div className={`pulser-core pulser-core--${engineState}`} />
                  <div className={`pulser-ring pulser-ring--${engineState}`} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Panel: Adapted Output (Huda Voice Bubble) */}
          <Reveal className="how-works__panel card card--dark output-panel" delay={100}>
            <h3 className="how-works__panel-title">
              <Volume2 size={18} className="text-gold" aria-hidden="true" />
              {t({ en: 'Huda Voice Output', ar: 'مخرجات هُدى الصوتية' })}
            </h3>

            <div className="voice-bubble-container">
              <div className={`voice-bubble voice-bubble--${engineState}`}>
                {engineState === 'adapted' ? (
                  <div className="voice-bubble__content">
                    <p className="voice-bubble__text">{t(activeMode.hudaResponse)}</p>
                    <div className="voice-bubble__waveform" aria-hidden="true">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <span
                          key={i}
                          className="waveform-bar waveform-bar--active"
                          style={{ animationDelay: `${i * 0.08}s` }}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="voice-bubble__loader">
                    <span className="dot-pulse" />
                    <span className="dot-pulse" />
                    <span className="dot-pulse" />
                  </div>
                )}
              </div>
            </div>

            <div className="voice-actions">
              <button
                className="btn btn--light btn--full voice-play-btn"
                disabled={engineState !== 'adapted'}
              >
                <Play size={16} aria-hidden="true" />
                {t({ en: 'Listen to instruction', ar: 'استمع إلى التوجيه' })}
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal className="maturity__honesty">
          <p>{t(capabilitySection.honesty)}</p>
        </Reveal>
      </div>
    </Section>
  )
}
