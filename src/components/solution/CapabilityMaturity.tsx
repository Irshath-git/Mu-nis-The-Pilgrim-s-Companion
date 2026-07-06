import { MoveRight } from 'lucide-react'
import { capabilitySection, capabilityGroups, safetyFlow } from '../../data/capabilities'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import { MaturityBadge } from '../common/MaturityBadge'
import './solution.css'

export function CapabilityMaturity() {
  const { t } = useLanguage()

  return (
    <Section
      id="capabilities"
      variant="soft"
      eyebrow={capabilitySection.eyebrow}
      title={capabilitySection.heading}
    >
      <Reveal className="safety-flow-wrap">
        <p className="safety-flow__label">{t(capabilitySection.flowLabel)}</p>
        <ol className="safety-flow" aria-label={t(capabilitySection.flowLabel)}>
          {safetyFlow.map((step, index) => (
            <li key={step.en} className="safety-flow__step">
              <span className="safety-flow__pill">{t(step)}</span>
              {index < safetyFlow.length - 1 && (
                <MoveRight size={16} className="safety-flow__arrow" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="grid grid--3 maturity__grid">
        {capabilityGroups.map((group, index) => (
          <Reveal key={group.level} delay={index * 100} className="card maturity__card">
            <MaturityBadge level={group.level} />
            <p className="maturity__description">{t(group.description)}</p>
            <ul className="maturity__items">
              {group.items.map((item) => (
                <li key={item.en}>{t(item)}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="maturity__honesty">
        <p>{t(capabilitySection.honesty)}</p>
      </Reveal>
    </Section>
  )
}
