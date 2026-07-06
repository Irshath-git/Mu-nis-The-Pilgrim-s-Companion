import type { Dispatch } from 'react'
import {
  CheckCircle2,
  GlassWater,
  HandHelping,
  Navigation,
  ThermometerSun,
  TreePalm,
} from 'lucide-react'
import { heatScreen } from '../../../data/prototypeScreens'
import { ui } from '../../../data/translations'
import { useLanguage } from '../../../hooks/useLanguage'
import type { DemoAction, DemoState } from '../demoState'

export function HeatScreen({
  state,
  dispatch,
}: {
  state: DemoState
  dispatch: Dispatch<DemoAction>
}) {
  const { t } = useLanguage()

  return (
    <div className="ph-screen">
      <p className="ph-heading">{t(heatScreen.title)}</p>

      <div className="ph-tiles">
        <div className="ph-tile">
          <span className="ph-tile__icon ph-tile__icon--warn">
            <ThermometerSun size={15} aria-hidden="true" />
          </span>
          <span>
            <span className="ph-tile__label">{t(heatScreen.riskLabel)}</span>
            <span className="ph-tile__value">{t(heatScreen.riskValue)}</span>
          </span>
        </div>
        <div className="ph-tile">
          <span className="ph-tile__icon ph-tile__icon--ok">
            <TreePalm size={15} aria-hidden="true" />
          </span>
          <span>
            <span className="ph-tile__label">{t(heatScreen.restLabel)}</span>
            <span className="ph-tile__value">
              {t(heatScreen.restMeta)}
              {state.offline && ` · ${t(ui.cached)}`}
            </span>
          </span>
        </div>
      </div>

      <div className="ph-card proto-heat__hydration">
        <GlassWater size={16} aria-hidden="true" />
        <p>{t(heatScreen.hydration)}</p>
      </div>

      {state.heatGuided ? (
        <div className="ph-card ph-card--dark proto-status" role="status">
          <CheckCircle2 size={15} aria-hidden="true" />
          <p>{t(heatScreen.guiding)}</p>
        </div>
      ) : (
        <button className="ph-btn ph-btn--primary" onClick={() => dispatch({ type: 'heatGuide' })}>
          <Navigation size={13} aria-hidden="true" />
          {t(heatScreen.guideMe)}
        </button>
      )}

      <button
        className="ph-btn ph-btn--secondary"
        onClick={() => dispatch({ type: 'goto', screen: 6 })}
      >
        <HandHelping size={13} aria-hidden="true" />
        {t(heatScreen.needAssist)}
      </button>
    </div>
  )
}
