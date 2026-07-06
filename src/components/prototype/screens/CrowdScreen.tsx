import type { Dispatch } from 'react'
import { CheckCircle2, Info, PhoneCall, Users } from 'lucide-react'
import { crowdScreen } from '../../../data/prototypeScreens'
import { ui } from '../../../data/translations'
import { useLanguage } from '../../../hooks/useLanguage'
import type { DemoAction, DemoState } from '../demoState'

export function CrowdScreen({
  state,
  dispatch,
}: {
  state: DemoState
  dispatch: Dispatch<DemoAction>
}) {
  const { t } = useLanguage()
  const choice = state.crowdChoice

  const statusText =
    choice === 'current'
      ? crowdScreen.continueStatus
      : choice === 'calmer'
        ? crowdScreen.calmerStatus
        : choice === 'guide'
          ? crowdScreen.guideStatus
          : null

  return (
    <div className="ph-screen">
      <p className="ph-heading">{t(crowdScreen.title)}</p>

      <div className="ph-tiles">
        <div className="ph-tile">
          <span className="ph-tile__icon ph-tile__icon--warn">
            <Users size={15} aria-hidden="true" />
          </span>
          <span>
            <span className="ph-tile__label">
              {t(crowdScreen.currentLabel)}
              {state.offline && ` · ${t(ui.cached)}`}
            </span>
            <span className="ph-tile__value">{t(crowdScreen.currentValue)}</span>
          </span>
        </div>
        <div className="ph-tile">
          <span className="ph-tile__icon ph-tile__icon--ok">
            <Users size={15} aria-hidden="true" />
          </span>
          <span>
            <span className="ph-tile__label">{t(crowdScreen.altLabel)}</span>
            <span className="ph-tile__value">{t(crowdScreen.altValue)}</span>
          </span>
        </div>
      </div>

      <div className="ph-card proto-crowd__explain">
        <Info size={15} aria-hidden="true" />
        <p>{t(crowdScreen.explanation)}</p>
      </div>

      {statusText && (
        <div className="ph-card ph-card--dark proto-status" role="status">
          <CheckCircle2 size={15} aria-hidden="true" />
          <p>{t(statusText)}</p>
        </div>
      )}

      <button
        className="ph-btn ph-btn--primary"
        aria-pressed={choice === 'calmer'}
        onClick={() => dispatch({ type: 'crowdChoose', choice: 'calmer' })}
      >
        {t(crowdScreen.calmerBtn)}
      </button>
      <div className="ph-actions">
        <button
          className="ph-btn ph-btn--secondary ph-btn--row"
          aria-pressed={choice === 'current'}
          onClick={() => dispatch({ type: 'crowdChoose', choice: 'current' })}
        >
          {t(crowdScreen.continueBtn)}
        </button>
        <button
          className="ph-btn ph-btn--secondary ph-btn--row"
          aria-pressed={choice === 'guide'}
          onClick={() => dispatch({ type: 'crowdChoose', choice: 'guide' })}
        >
          <PhoneCall size={13} aria-hidden="true" />
          {t(crowdScreen.contactGuide)}
        </button>
      </div>
    </div>
  )
}
