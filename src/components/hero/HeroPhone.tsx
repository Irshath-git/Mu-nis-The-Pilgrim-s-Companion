import { useEffect, useState } from 'react'
import { Bell, Check, Flame, Mic, Users } from 'lucide-react'
import { PhoneFrame } from '../common/PhoneFrame'
import { brand } from '../../data/translations'
import { heroPhone } from '../../data/hero'
import { useLanguage } from '../../hooks/useLanguage'

type HudaState = 'idle' | 'listening' | 'understanding' | 'ready'

/** Demonstration cycle: idle → listening → understanding → ready → idle */
const HUDA_CYCLE: Record<HudaState, { next: HudaState; ms: number }> = {
  idle: { next: 'listening', ms: 3200 },
  listening: { next: 'understanding', ms: 5000 },
  understanding: { next: 'ready', ms: 2800 },
  ready: { next: 'idle', ms: 2600 },
}

export function HeroPhone() {
  const { t, lang } = useLanguage()
  const [hudaState, setHudaState] = useState<HudaState>('listening')

  useEffect(() => {
    const id = window.setTimeout(
      () => setHudaState(HUDA_CYCLE[hudaState].next),
      HUDA_CYCLE[hudaState].ms,
    )
    return () => window.clearTimeout(id)
  }, [hudaState])

  return (
    <div className="hero-phone-container" style={{ position: 'relative' }}>
      <PhoneFrame label={t(heroPhone.mapLabel)}>
        <div className="ph-screen ph-screen--calm" data-testid="hero-phone">
          {/* Top App Bar */}
          <div className="ph-appbar ph-appbar--hero">
            <span className="ph-appbar__brand-text">
              {lang === 'ar' ? brand.nameAr : brand.nameEn}
            </span>
            <span className="ph-appbar__icon">
              <Bell size={14} aria-hidden="true" />
            </span>
          </div>

          {/* Central Huda Assistant View — cycles through listening states */}
          <div className="hero-phone__assistant-wrap" data-huda-state={hudaState}>
            <div className="hero-phone__huda-avatar">
              <Mic size={20} className="huda-avatar__icon" aria-hidden="true" />
            </div>
            <p className="hero-phone__status-text">
              <span className="huda-state-dot" aria-hidden="true">
                {hudaState === 'ready' && <Check size={9} strokeWidth={3.5} aria-hidden="true" />}
              </span>
              {t(heroPhone.hudaStates[hudaState])}
            </p>

            {/* Dynamic waveform + understanding progress */}
            <div className="hero-phone__wave-wrapper">
              <div className="ph-wave ph-wave--active ph-wave--premium" aria-hidden="true">
                {Array.from({ length: 15 }).map((_, i) => (
                  <span key={i} className="ph-wave__bar" />
                ))}
              </div>
              <span className="huda-progress" aria-hidden="true" />
            </div>
          </div>

          {/* Current Stage Indicator */}
          <div className="ph-card ph-card--soft hero-phone__stage-card">
            <span className="ph-tile__label">{t(heroPhone.stageLabel)}</span>
            <span className="hero-phone__stage-text">
              {t(heroPhone.stageValue)}
            </span>
          </div>

          {/* Context Guidance Cards */}
          <div className="hero-phone__guidance-cards">
            <div className="ph-card ph-card--guide-item">
              <span className="guide-icon-box guide-icon-box--warn">
                <Flame size={13} />
              </span>
              <div className="guide-content">
                <span className="guide-label">{t(heroPhone.heatLabel)}</span>
                <span className="guide-value">{t(heroPhone.heatValue)}</span>
              </div>
            </div>

            <div className="ph-card ph-card--guide-item">
              <span className="guide-icon-box guide-icon-box--warn">
                <Users size={13} />
              </span>
              <div className="guide-content">
                <span className="guide-label">{t(heroPhone.crowdLabel)}</span>
                <span className="guide-value">{t(heroPhone.crowdValue)}</span>
              </div>
            </div>
          </div>

          {/* Bottom Device Tab Bar */}
          <div className="theater-screen__bottom-nav hero-phone__nav">
            <span className="theater-nav-item">🏠</span>
            <span className="theater-nav-item">👥</span>
            <span className="theater-nav-item theater-nav-item--active">📍</span>
            <span className="theater-nav-item">👤</span>
          </div>
        </div>
      </PhoneFrame>

      {/* Floating badges from Stitch website design */}
      <div className="hero-phone-badge hero-phone-badge--voice">
        <span className="hero-phone-badge__dot" />
        <span className="hero-phone-badge__text">Voice: Huda <strong>Active</strong></span>
      </div>
      <div className="hero-phone-badge hero-phone-badge--offline">
        <span className="hero-phone-badge__dot" />
        <span className="hero-phone-badge__text">Offline LLM: <strong>Synced</strong></span>
      </div>
    </div>
  )
}
