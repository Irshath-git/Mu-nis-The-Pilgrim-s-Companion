import type { Dispatch } from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  FileQuestion,
  HeartPulse,
  Languages,
  PhoneCall,
  Search,
  ShieldAlert,
  Accessibility,
  type LucideIcon,
} from 'lucide-react'
import { assistScreen } from '../../../data/prototypeScreens'
import { useLanguage } from '../../../hooks/useLanguage'
import type { AssistType, DemoAction, DemoState } from '../demoState'

const OPTIONS: { id: AssistType; icon: LucideIcon }[] = [
  { id: 'medical', icon: HeartPulse },
  { id: 'mobility', icon: Accessibility },
  { id: 'translation', icon: Languages },
  { id: 'document', icon: FileQuestion },
  { id: 'item', icon: Search },
  { id: 'leader', icon: PhoneCall },
]

export function AssistScreen({
  state,
  dispatch,
}: {
  state: DemoState
  dispatch: Dispatch<DemoAction>
}) {
  const { t } = useLanguage()
  const stage = state.assistStage
  const selected = state.assistSelected

  if (stage === 'sent') {
    return (
      <div className="ph-screen">
        <p className="ph-heading">{t(assistScreen.title)}</p>
        <div className="ph-card ph-card--dark proto-assist__sent" role="status">
          <CheckCircle2 size={26} aria-hidden="true" />
          <p className="ph-card__title">{t(assistScreen.sentTitle)}</p>
          {selected && <p className="proto-assist__type">{t(assistScreen.options[selected])}</p>}
          <p>{t(assistScreen.sentBody)}</p>
        </div>
        <button
          className="ph-btn ph-btn--secondary"
          onClick={() => dispatch({ type: 'assistReset' })}
        >
          {t(assistScreen.newRequest)}
        </button>
      </div>
    )
  }

  if (stage === 'confirm' && selected) {
    return (
      <div className="ph-screen">
        <p className="ph-heading">{t(assistScreen.confirmTitle)}</p>
        <div className="ph-card proto-consent">
          <p className="ph-card__title">{t(assistScreen.options[selected])}</p>
          <p className="ph-card__meta">{t(assistScreen.confirmBody)}</p>
        </div>
        <button className="ph-btn ph-btn--primary" onClick={() => dispatch({ type: 'assistConfirm' })}>
          <CheckCircle2 size={13} aria-hidden="true" />
          {t(assistScreen.confirmBtn)}
        </button>
        <button className="ph-btn ph-btn--secondary" onClick={() => dispatch({ type: 'assistBack' })}>
          <ArrowLeft size={13} aria-hidden="true" className="flip-rtl" />
          {t(assistScreen.backBtn)}
        </button>
      </div>
    )
  }

  return (
    <div className="ph-screen">
      <p className="ph-heading">{t(assistScreen.title)}</p>
      <p className="ph-sub">{t(assistScreen.lead)}</p>

      {OPTIONS.map((option) => (
        <button
          key={option.id}
          className="ph-option"
          onClick={() => dispatch({ type: 'assistSelect', assist: option.id })}
        >
          <span className="ph-option__icon">
            <option.icon size={14} aria-hidden="true" />
          </span>
          {t(assistScreen.options[option.id])}
        </button>
      ))}

      <button
        className="ph-btn ph-btn--critical proto-assist__emergency"
        onClick={() => dispatch({ type: 'assistSelect', assist: 'medical' })}
      >
        <ShieldAlert size={14} aria-hidden="true" />
        {t(assistScreen.emergency)}
      </button>
      <p className="ph-sub proto-assist__note">{t(assistScreen.emergencyNote)}</p>
    </div>
  )
}
