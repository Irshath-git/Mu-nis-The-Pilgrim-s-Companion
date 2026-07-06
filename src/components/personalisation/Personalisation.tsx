import { useState } from 'react'
import {
  Armchair,
  ArrowRight,
  CornerUpRight,
  EyeOff,
  MessageCircle,
  PersonStanding,
  Play,
  RotateCcw,
  Vibrate,
  Volume2,
  type LucideIcon,
} from 'lucide-react'
import { personalisationSection, personas, type Persona } from '../../data/personas'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './personalisation.css'

const ICONS: Record<Persona['icon'], LucideIcon> = {
  'person-standing': PersonStanding,
  armchair: Armchair,
  'eye-off': EyeOff,
  'message-circle': MessageCircle,
}

function AdaptedPanel({ persona }: { persona: Persona }) {
  const { t } = useLanguage()

  return (
    <div
      className={`persona-panel persona-panel--${persona.presentation}`}
      data-testid="persona-panel"
    >
      <div className="persona-panel__instruction" aria-live="polite">
        {persona.presentation === 'simple' && (
          <span className="persona-panel__arrow" aria-hidden="true">
            <CornerUpRight size={44} />
          </span>
        )}
        <p className="persona-panel__text">{t(persona.renderedInstruction)}</p>
        {persona.presentation === 'audio' && (
          <span className="persona-panel__audio" aria-hidden="true">
            <Volume2 size={18} />
            <span className="persona-panel__haptic">
              <Vibrate size={15} />
              <i /> <i />
            </span>
          </span>
        )}
      </div>
      <div className="persona-panel__controls" aria-hidden="true">
        {persona.presentation === 'simple' ? (
          <span className="persona-panel__control">
            <Play size={14} /> {t({ en: 'Play', ar: 'تشغيل' })}
          </span>
        ) : (
          <span className="persona-panel__control">
            <RotateCcw size={14} /> {t({ en: 'Repeat', ar: 'إعادة' })}
          </span>
        )}
        <span className="persona-panel__control persona-panel__control--ghost">
          <ArrowRight size={14} className="flip-rtl" />
          {t({ en: 'One next action', ar: 'إجراء تالٍ واحد' })}
        </span>
      </div>
      <h4 className="persona-panel__adapt-heading">
        {t(personalisationSection.adaptationsLabel)}
      </h4>
      <ul className="persona-panel__adaptations">
        {persona.adaptations.map((adaptation) => (
          <li key={adaptation.en}>{t(adaptation)}</li>
        ))}
      </ul>
    </div>
  )
}

export function Personalisation() {
  const { t } = useLanguage()
  const [activeId, setActiveId] = useState(personas[0].id)
  const active = personas.find((p) => p.id === activeId) ?? personas[0]

  return (
    <Section
      id="personalisation"
      variant="soft"
      eyebrow={personalisationSection.eyebrow}
      title={personalisationSection.heading}
    >
      <div className="persona__layout">
        <Reveal className="persona__source">
          <div className="card persona__shared">
            <p className="persona__shared-label">{t(personalisationSection.sharedLabel)}</p>
            <p className="persona__shared-text">
              {t(personalisationSection.sharedInstruction)}
            </p>
          </div>

          <div
            className="persona__choices"
            role="group"
            aria-label={t(personalisationSection.profilesLabel)}
          >
            {personas.map((persona) => {
              const Icon = ICONS[persona.icon]
              return (
                <button
                  key={persona.id}
                  className="persona__choice"
                  aria-pressed={persona.id === activeId}
                  onClick={() => setActiveId(persona.id)}
                >
                  <span className="persona__choice-icon">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  {t(persona.name)}
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={120} className="persona__result card">
          <AdaptedPanel persona={active} />
        </Reveal>
      </div>

      <Reveal className="persona__closing">
        <p>{t(personalisationSection.closing)}</p>
      </Reveal>
    </Section>
  )
}
