import type { Dispatch } from 'react'
import {
  Accessibility,
  CalendarClock,
  CheckCircle2,
  CloudOff,
  Footprints,
  HandHelping,
  Mic,
  Wifi,
} from 'lucide-react'
import { MunisMark } from '../../brand/MunisMark'
import { brand } from '../../../data/translations'
import { homeScreen } from '../../../data/prototypeScreens'
import { useLanguage } from '../../../hooks/useLanguage'
import type { DemoAction, DemoState } from '../demoState'

export function HomeScreen({
  state,
  dispatch,
}: {
  state: DemoState
  dispatch: Dispatch<DemoAction>
}) {
  const { t } = useLanguage()

  return (
    <div className="ph-screen">
      <div className="ph-appbar">
        <span className="ph-appbar__brand">
          <MunisMark size={20} />
          <span lang="ar">{brand.nameAr}</span>
          <span className="ph-appbar__latin" lang="en">
            {brand.nameEn}
          </span>
        </span>
        <span className={`ph-pill ${state.offline ? 'ph-pill--warn' : 'ph-pill--ok'}`}>
          {state.offline ? <CloudOff size={10} aria-hidden="true" /> : <Wifi size={10} aria-hidden="true" />}
          {state.offline ? t(homeScreen.offlinePill) : t(homeScreen.onlinePill)}
        </span>
      </div>

      <p className="ph-heading">{t(homeScreen.greeting)}</p>

      <div className="ph-card ph-card--soft proto-home__stage">
        <span className="ph-tile__label">{t(homeScreen.stageLabel)}</span>
        <span className="proto-home__stage-value">
          <Footprints size={13} aria-hidden="true" />
          {t(homeScreen.stageValue)}
        </span>
      </div>

      <button
        className="ph-mic"
        onClick={() => {
          dispatch({ type: 'voice', state: 'listening' })
          dispatch({ type: 'goto', screen: 1 })
        }}
      >
        <Mic size={18} aria-hidden="true" />
        {t(homeScreen.speak)}
      </button>

      <div className="ph-card">
        <p className="ph-card__title">
          <CalendarClock size={13} aria-hidden="true" className="proto-inline-icon" />
          {t(homeScreen.todayLabel)}
        </p>
        <ul className="proto-home__today">
          {homeScreen.today.map((item) => (
            <li key={item.en}>
              <CheckCircle2 size={12} aria-hidden="true" />
              {t(item)}
            </li>
          ))}
        </ul>
      </div>

      <div className="ph-card">
        <div className="proto-home__progress-head">
          <span className="ph-tile__label">{t(homeScreen.progressLabel)}</span>
          <span className="ph-card__meta">{t(homeScreen.progressValue)}</span>
        </div>
        <div
          className="ph-progress"
          role="progressbar"
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t(homeScreen.progressLabel)}
        >
          <span className="ph-progress__fill" style={{ inlineSize: '60%' }} />
        </div>
      </div>

      <div className="proto-home__foot">
        <span className="ph-pill ph-pill--emerald">
          <Accessibility size={10} aria-hidden="true" />
          {t(homeScreen.accessibilityMode)}
        </span>
        <button
          className="ph-btn ph-btn--secondary proto-home__assist"
          onClick={() => dispatch({ type: 'goto', screen: 6 })}
        >
          <HandHelping size={13} aria-hidden="true" />
          {t(homeScreen.assistShortcut)}
        </button>
      </div>
    </div>
  )
}
