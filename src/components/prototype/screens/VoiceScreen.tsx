import { useEffect, useState, type Dispatch } from 'react'
import { Mic, RotateCcw, Volume2 } from 'lucide-react'
import { voiceScreen } from '../../../data/prototypeScreens'
import { useLanguage } from '../../../hooks/useLanguage'
import type { DemoAction, DemoState } from '../demoState'

export function VoiceScreen({
  state,
  dispatch,
}: {
  state: DemoState
  dispatch: Dispatch<DemoAction>
}) {
  const { t } = useLanguage()
  const voice = state.voice
  const [replaying, setReplaying] = useState(false)

  // "Repeat" visually replays the spoken answer for a moment
  useEffect(() => {
    if (!replaying) return
    const id = window.setTimeout(() => setReplaying(false), 1600)
    return () => window.clearTimeout(id)
  }, [replaying])

  // Simulated recognition pipeline: listening → processing → response
  useEffect(() => {
    if (voice === 'listening') {
      const id = window.setTimeout(() => dispatch({ type: 'voice', state: 'processing' }), 1500)
      return () => window.clearTimeout(id)
    }
    if (voice === 'processing') {
      const id = window.setTimeout(() => dispatch({ type: 'voice', state: 'response' }), 1200)
      return () => window.clearTimeout(id)
    }
  }, [voice, dispatch])

  return (
    <div className="ph-screen">
      <p className="ph-heading">{t(voiceScreen.title)}</p>

      <div className="ph-card proto-voice__stage" aria-live="polite">
        {voice === 'idle' && (
          <>
            <p className="ph-sub">{t(voiceScreen.idleHint)}</p>
            <button
              className="ph-mic"
              onClick={() => dispatch({ type: 'voice', state: 'listening' })}
            >
              <Mic size={18} aria-hidden="true" />
              {t(voiceScreen.ask)}
            </button>
          </>
        )}

        {voice === 'listening' && (
          <>
            <div className="ph-wave ph-wave--active" aria-hidden="true">
              {Array.from({ length: 13 }).map((_, i) => (
                <span key={i} className="ph-wave__bar" />
              ))}
            </div>
            <p className="proto-voice__state">{t(voiceScreen.listening)}</p>
          </>
        )}

        {voice === 'processing' && (
          <>
            <div className="proto-voice__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="proto-voice__state">{t(voiceScreen.processing)}</p>
          </>
        )}

        {voice === 'response' && (
          <div className="proto-voice__transcript">
            <p className="ph-tile__label">{t(voiceScreen.youAsked)}</p>
            <p className="proto-voice__question">“{t(voiceScreen.question)}”</p>
            <p className="ph-tile__label">{t(voiceScreen.munisSays)}</p>
            <div className={`proto-voice__answer${replaying ? ' proto-voice__answer--speaking' : ''}`}>
              <Volume2 size={14} aria-hidden="true" />
              <p>{t(voiceScreen.response)}</p>
            </div>
          </div>
        )}
      </div>

      {voice === 'response' && (
        <div className="ph-actions">
          <button
            className="ph-btn ph-btn--primary ph-btn--row"
            aria-pressed={replaying}
            onClick={() => setReplaying(true)}
          >
            <Volume2 size={13} aria-hidden="true" />
            {t(voiceScreen.repeat)}
          </button>
          <button
            className="ph-btn ph-btn--secondary ph-btn--row"
            onClick={() => dispatch({ type: 'voice', state: 'listening' })}
          >
            <RotateCcw size={13} aria-hidden="true" />
            {t(voiceScreen.askAgain)}
          </button>
        </div>
      )}
    </div>
  )
}
