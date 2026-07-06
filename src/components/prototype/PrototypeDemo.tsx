import { useReducer, type KeyboardEvent } from 'react'
import { ChevronLeft, ChevronRight, CloudOff, Info } from 'lucide-react'
import { prototypeSection, screenList } from '../../data/prototypeScreens'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import { PhoneFrame } from '../common/PhoneFrame'
import { demoReducer, initialDemoState, SCREEN_COUNT } from './demoState'
import { HomeScreen } from './screens/HomeScreen'
import { VoiceScreen } from './screens/VoiceScreen'
import { HeatScreen } from './screens/HeatScreen'
import { RouteScreen } from './screens/RouteScreen'
import { CrowdScreen } from './screens/CrowdScreen'
import { LostScreen } from './screens/LostScreen'
import { AssistScreen } from './screens/AssistScreen'
import './prototype.css'

const SCREENS = [
  HomeScreen,
  VoiceScreen,
  HeatScreen,
  RouteScreen,
  CrowdScreen,
  LostScreen,
  AssistScreen,
]

export function PrototypeDemo() {
  const { t, dir } = useLanguage()
  const [state, dispatch] = useReducer(demoReducer, initialDemoState)

  const ActiveScreen = SCREENS[state.screen]
  const activeMeta = screenList[state.screen]

  function onControlsKeyDown(event: KeyboardEvent) {
    const forward = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
    const backward = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
    if (event.key === forward) {
      event.preventDefault()
      dispatch({ type: 'next' })
    } else if (event.key === backward) {
      event.preventDefault()
      dispatch({ type: 'prev' })
    } else if (event.key === 'Home') {
      event.preventDefault()
      dispatch({ type: 'goto', screen: 0 })
    } else if (event.key === 'End') {
      event.preventDefault()
      dispatch({ type: 'goto', screen: SCREEN_COUNT - 1 })
    }
  }

  return (
    <Section
      id="prototype"
      eyebrow={prototypeSection.eyebrow}
      title={prototypeSection.heading}
    >
      <div className="proto">
        <Reveal className="proto__phone-col">
          <PhoneFrame
            offline={state.offline}
            label={t(activeMeta.name)}
            hudaState={
              state.voice === 'listening'
                ? 'listening'
                : state.voice === 'processing'
                ? 'understanding'
                : 'active'
            }
          >
            <ActiveScreen key={state.screen} state={state} dispatch={dispatch} />
          </PhoneFrame>
        </Reveal>

        <Reveal delay={120} className="proto__controls" >
          <div onKeyDown={onControlsKeyDown}>
            <p className="visually-hidden" aria-live="polite">
              {`${t(prototypeSection.screenOf)} ${state.screen + 1} ${t(prototypeSection.of)} ${SCREEN_COUNT}: ${t(activeMeta.name)}`}
            </p>

            <ol className="proto__screens" aria-label={t(prototypeSection.screenListLabel)}>
              {screenList.map((screen, index) => (
                <li key={screen.id}>
                  <button
                    className="proto__screen-btn"
                    aria-current={index === state.screen ? 'true' : undefined}
                    onClick={() => dispatch({ type: 'goto', screen: index })}
                  >
                    <span className="proto__screen-num" aria-hidden="true">
                      {index + 1}
                    </span>
                    {t(screen.name)}
                  </button>
                </li>
              ))}
            </ol>

            <div className="proto__nav">
              <button
                className="proto__arrow"
                aria-label={t(prototypeSection.previous)}
                onClick={() => dispatch({ type: 'prev' })}
              >
                <ChevronLeft size={20} aria-hidden="true" className="flip-rtl" />
              </button>
              <span className="proto__position" aria-hidden="true">
                {state.screen + 1} / {SCREEN_COUNT}
              </span>
              <button
                className="proto__arrow"
                aria-label={t(prototypeSection.next)}
                onClick={() => dispatch({ type: 'next' })}
              >
                <ChevronRight size={20} aria-hidden="true" className="flip-rtl" />
              </button>
            </div>
          </div>

          <label className="proto__offline">
            <input
              type="checkbox"
              checked={state.offline}
              onChange={(e) => dispatch({ type: 'setOffline', offline: e.target.checked })}
            />
            <CloudOff size={15} aria-hidden="true" />
            {t(prototypeSection.simulateOffline)}
          </label>
          <p className="proto__offline-note">{t(prototypeSection.offlineExplainer)}</p>

          <p className="proto__notice">
            <Info size={15} aria-hidden="true" />
            {t(prototypeSection.notice)}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
