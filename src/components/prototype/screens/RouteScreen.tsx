import type { Dispatch } from 'react'
import { Accessibility, Check, TreePalm, Users, Volume2 } from 'lucide-react'
import { routeScreen } from '../../../data/prototypeScreens'
import { ui } from '../../../data/translations'
import { useLanguage } from '../../../hooks/useLanguage'
import type { DemoAction, DemoState } from '../demoState'

export function RouteScreen({
  state,
  dispatch,
}: {
  state: DemoState
  dispatch: Dispatch<DemoAction>
}) {
  const { t } = useLanguage()

  return (
    <div className="ph-screen">
      <p className="ph-heading">{t(routeScreen.title)}</p>

      <div className="ph-card proto-route__map-card">
        <svg viewBox="0 0 204 96" className="hero-map" role="img" aria-label={t(routeScreen.title)}>
          <rect x="12" y="10" width="48" height="26" rx="6" className="hero-map__block" />
          <rect x="140" y="52" width="50" height="30" rx="6" className="hero-map__block" />
          <path
            d="M 18 84 C 52 78, 74 58, 104 52 C 136 46, 154 34, 176 20"
            className={`hero-map__route${state.routeConfirmed ? ' proto-route__path--confirmed' : ''}`}
            style={{ strokeDashoffset: 0 }}
            pathLength="100"
          />
          <circle cx="104" cy="52" r="4" className="proto-route__rest" />
          <circle cx="18" cy="84" r="5" className="hero-map__me" />
          <circle cx="176" cy="20" r="5.5" className="hero-map__dest" />
        </svg>
        <div className="proto-route__pills">
          <span className="ph-pill ph-pill--emerald">
            <Accessibility size={10} aria-hidden="true" />
            {t(routeScreen.stepFree)}
          </span>
          <span className="ph-pill ph-pill--emerald">{t(routeScreen.wheelchair)}</span>
          <span className="ph-pill ph-pill--ok">
            <TreePalm size={10} aria-hidden="true" />
            {t(routeScreen.restPoint)}
          </span>
        </div>
      </div>

      <div className="ph-tiles">
        <div className="ph-tile">
          <span className="ph-tile__icon ph-tile__icon--info">
            <Accessibility size={15} aria-hidden="true" />
          </span>
          <span>
            <span className="ph-tile__label">{t(routeScreen.timeLabel)}</span>
            <span className="ph-tile__value">{t(routeScreen.timeValue)}</span>
          </span>
        </div>
        <div className="ph-tile">
          <span className="ph-tile__icon ph-tile__icon--ok">
            <Users size={15} aria-hidden="true" />
          </span>
          <span>
            <span className="ph-tile__label">
              {t(routeScreen.crowdLabel)}
              {state.offline && ` · ${t(ui.cached)}`}
            </span>
            <span className="ph-tile__value">{t(routeScreen.crowdValue)}</span>
          </span>
        </div>
      </div>

      {state.routeRepeatKey > 0 && (
        <div className="ph-card proto-route__spoken" key={state.routeRepeatKey} role="status">
          <Volume2 size={14} aria-hidden="true" />
          <p>{t(routeScreen.spokenInstruction)}</p>
        </div>
      )}

      {state.routeConfirmed ? (
        <div className="ph-card ph-card--dark proto-status" role="status">
          <Check size={15} aria-hidden="true" />
          <p>
            <strong>{t(routeScreen.confirmed)}</strong> — {t(routeScreen.confirmedNote)}
          </p>
        </div>
      ) : (
        <button className="ph-btn ph-btn--primary" onClick={() => dispatch({ type: 'routeConfirm' })}>
          <Check size={13} aria-hidden="true" />
          {t(routeScreen.confirm)}
        </button>
      )}

      <button className="ph-btn ph-btn--secondary" onClick={() => dispatch({ type: 'routeRepeat' })}>
        <Volume2 size={13} aria-hidden="true" />
        {t(routeScreen.repeat)}
      </button>
    </div>
  )
}
