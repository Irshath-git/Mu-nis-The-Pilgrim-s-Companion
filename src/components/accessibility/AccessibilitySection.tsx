import { useState } from 'react'
import {
  Ban,
  CloudOff,
  Contrast,
  CornerUpRight,
  Eye,
  Gauge,
  Hand,
  HeartHandshake,
  Languages,
  MessageSquare,
  Mic,
  MousePointerClick,
  Pause,
  Play,
  RotateCcw,
  Speech,
  Type,
  Users,
  Vibrate,
  Volume2,
  type LucideIcon,
} from 'lucide-react'
import {
  accessibilitySection,
  accessibilityCapabilities,
  previewModes,
  previewContent,
  type PreviewMode,
} from '../../data/accessibility'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './accessibility.css'

const ICONS: Record<string, LucideIcon> = {
  mic: Mic,
  pointer: MousePointerClick,
  contrast: Contrast,
  speech: Speech,
  'message-square': MessageSquare,
  languages: Languages,
  eye: Eye,
  vibrate: Vibrate,
  hand: Hand,
  'cloud-off': CloudOff,
  'heart-handshake': HeartHandshake,
  users: Users,
  gauge: Gauge,
  'rotate-ccw': RotateCcw,
  pause: Pause,
  type: Type,
  ban: Ban,
}

function PreviewSample({ mode }: { mode: PreviewMode }) {
  const { t } = useLanguage()

  const body =
    mode === 'simplified'
      ? previewContent.simplifiedBody
      : mode === 'voice-first'
        ? previewContent.voiceBody
        : previewContent.standardBody

  return (
    <div className={`a11y-demo a11y-demo--${mode}`} data-testid="a11y-demo">
      <p className="a11y-demo__title">{t(previewContent.title)}</p>
      <div className="a11y-demo__body-wrap">
        {mode === 'simplified' && (
          <span className="a11y-demo__arrow" aria-hidden="true">
            <CornerUpRight size={40} />
          </span>
        )}
        {mode === 'voice-first' && (
          <span className="a11y-demo__speaker" aria-hidden="true">
            <Volume2 size={26} />
          </span>
        )}
        <p className="a11y-demo__body" aria-live="polite">
          {t(body)}
        </p>
      </div>
      {mode !== 'simplified' && <p className="a11y-demo__meta">{t(previewContent.meta)}</p>}
      <div className="a11y-demo__actions" aria-hidden="true">
        <span className="a11y-demo__btn a11y-demo__btn--primary">
          {mode === 'voice-first' ? <Play size={15} /> : null}
          {t(previewContent.action)}
        </span>
        <span className="a11y-demo__btn">
          <RotateCcw size={15} />
          {t(previewContent.secondary)}
        </span>
      </div>
    </div>
  )
}

export function AccessibilitySection() {
  const { t } = useLanguage()
  const [mode, setMode] = useState<PreviewMode>('standard')

  return (
    <Section
      id="accessibility"
      eyebrow={accessibilitySection.eyebrow}
      title={accessibilitySection.heading}
    >
      <ul className="a11y__capabilities">
        {accessibilityCapabilities.map((capability, index) => {
          const Icon = ICONS[capability.icon]
          return (
            <Reveal as="li" key={capability.id} delay={(index % 4) * 60} className="a11y__capability">
              <Icon size={17} aria-hidden="true" />
              {t(capability.label)}
            </Reveal>
          )
        })}
      </ul>

      <Reveal className="a11y__preview card">
        <div className="a11y__preview-head">
          <h3>{t(accessibilitySection.previewHeading)}</h3>
          <p>{t(accessibilitySection.previewLead)}</p>
        </div>
        <div
          className="a11y__modes"
          role="group"
          aria-label={t(accessibilitySection.previewModesLabel)}
        >
          {previewModes.map((option) => (
            <button
              key={option.id}
              className="a11y__mode"
              aria-pressed={mode === option.id}
              onClick={() => setMode(option.id)}
            >
              {t(option.label)}
            </button>
          ))}
        </div>
        <PreviewSample mode={mode} />
      </Reveal>
    </Section>
  )
}
