import { useState } from 'react'
import {
  Accessibility,
  CloudOff,
  Footprints,
  Navigation,
  RotateCcw,
  ThermometerSun,
  Users,
} from 'lucide-react'
import { PhoneFrame } from '../common/PhoneFrame'
import { MunisMark } from '../brand/MunisMark'
import { brand } from '../../data/translations'
import { heroPhone } from '../../data/hero'
import { useLanguage } from '../../hooks/useLanguage'
import { useInView } from '../../hooks/useInView'

/**
 * Hero visual: a live MUNIS guidance moment. The route draws itself once
 * visible; "Guide me" starts a traveller dot; "Repeat" replays the drawing.
 */
export function HeroPhone() {
  const { t } = useLanguage()
  const [mapRef, mapInView] = useInView<HTMLDivElement>({ threshold: 0.4 })
  const [guiding, setGuiding] = useState(false)
  const [replayKey, setReplayKey] = useState(0)

  return (
    <PhoneFrame label={t(heroPhone.mapLabel)}>
      <div className="ph-screen" data-testid="hero-phone">
        <div className="ph-appbar">
          <span className="ph-appbar__brand">
            <MunisMark size={20} />
            <span lang="ar">{brand.nameAr}</span>
            <span className="ph-appbar__latin" lang="en">
              {brand.nameEn}
            </span>
          </span>
          <span className="ph-pill ph-pill--ok">
            <CloudOff size={10} aria-hidden="true" />
            {t(heroPhone.offlineReady)}
          </span>
        </div>

        <div className="ph-card ph-card--soft hero-phone__stage">
          <span className="ph-tile__label">{t(heroPhone.stageLabel)}</span>
          <span className="hero-phone__stage-value">
            <Footprints size={13} aria-hidden="true" />
            {t(heroPhone.stageValue)}
          </span>
        </div>

        <div className="ph-card hero-phone__listen">
          <div className="ph-wave ph-wave--active" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="ph-wave__bar" />
            ))}
          </div>
          <p className="ph-sub hero-phone__listen-text">{t(heroPhone.listening)}</p>
        </div>

        <div className="ph-tiles">
          <div className="ph-tile">
            <span className="ph-tile__icon ph-tile__icon--warn">
              <ThermometerSun size={15} aria-hidden="true" />
            </span>
            <span>
              <span className="ph-tile__label">{t(heroPhone.heatLabel)}</span>
              <span className="ph-tile__value">{t(heroPhone.heatValue)}</span>
            </span>
          </div>
          <div className="ph-tile">
            <span className="ph-tile__icon ph-tile__icon--warn">
              <Users size={15} aria-hidden="true" />
            </span>
            <span>
              <span className="ph-tile__label">{t(heroPhone.crowdLabel)}</span>
              <span className="ph-tile__value">{t(heroPhone.crowdValue)}</span>
            </span>
          </div>
        </div>

        <div className="ph-card hero-phone__route" ref={mapRef}>
          <svg
            key={replayKey}
            viewBox="0 0 204 106"
            className={`hero-map${mapInView ? ' hero-map--drawn' : ''}${guiding ? ' hero-map--guiding' : ''}`}
            role="img"
            aria-label={t(heroPhone.mapLabel)}
          >
            <rect x="10" y="12" width="52" height="30" rx="7" className="hero-map__block" />
            <rect x="132" y="58" width="58" height="34" rx="7" className="hero-map__block" />
            <rect x="76" y="70" width="40" height="24" rx="7" className="hero-map__block hero-map__block--soft" />
            <circle cx="88" cy="38" r="17" className="hero-map__crowd" />
            <path
              d="M 20 92 C 48 84, 58 62, 96 58 C 134 54, 152 36, 172 22"
              className="hero-map__route"
              pathLength="100"
            />
            <circle cx="20" cy="92" r="5" className="hero-map__me" />
            <circle cx="20" cy="92" r="5" className="hero-map__me-pulse" />
            <circle className="hero-map__traveller" r="3.4" />
            <circle cx="172" cy="22" r="5.5" className="hero-map__dest" />
          </svg>
          <p className="ph-card__title hero-phone__route-title">
            <Accessibility size={13} aria-hidden="true" />
            {t(heroPhone.routeTitle)}
          </p>
          <p className="ph-card__meta">{t(heroPhone.routeMeta)}</p>
        </div>

        <div className="ph-card ph-card--dark hero-phone__instruction">
          <p>{t(heroPhone.instruction)}</p>
          <div className="ph-actions">
            <button
              className="ph-btn ph-btn--row hero-phone__guide-btn"
              data-active={guiding}
              onClick={() => setGuiding(true)}
            >
              <Navigation size={13} aria-hidden="true" />
              {t(heroPhone.guideMe)}
            </button>
            <button
              className="ph-btn ph-btn--row hero-phone__repeat-btn"
              onClick={() => {
                setGuiding(false)
                setReplayKey((k) => k + 1)
              }}
            >
              <RotateCcw size={13} aria-hidden="true" />
              {t(heroPhone.repeat)}
            </button>
          </div>
          <p className="visually-hidden" role="status">
            {guiding ? t(heroPhone.guideMe) : ''}
          </p>
        </div>
      </div>
    </PhoneFrame>
  )
}
