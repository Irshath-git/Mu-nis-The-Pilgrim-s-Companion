import {
  Heart,
  PersonStanding,
  Route,
  Users,
  Zap,
  ClipboardCheck,
  type LucideIcon,
} from 'lucide-react'
import { impactSection, targetOutcomes, pilotMetrics, type OutcomeCard } from '../../data/impact'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './impact.css'

const ICONS: Record<OutcomeCard['icon'], LucideIcon> = {
  zap: Zap,
  'person-standing': PersonStanding,
  route: Route,
  users: Users,
  heart: Heart,
}

export function Impact() {
  const { t } = useLanguage()

  return (
    <Section
      id="impact"
      eyebrow={impactSection.eyebrow}
      title={impactSection.heading}
    >
      <p className="impact__outcomes-label">{t(impactSection.outcomesLabel)}</p>
      <ul className="impact__outcomes">
        {targetOutcomes.map((outcome, index) => {
          const Icon = ICONS[outcome.icon]
          return (
            <Reveal as="li" key={outcome.id} delay={index * 70} className="card impact__outcome">
              <span className="impact__outcome-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <p>{t(outcome.text)}</p>
            </Reveal>
          )
        })}
      </ul>

      <Reveal className="card impact__metrics">
        <div className="impact__metrics-head">
          <h3>
            <ClipboardCheck size={20} aria-hidden="true" />
            {t(impactSection.metricsHeading)}
          </h3>
          <span className="badge badge--pilot">{t(impactSection.metricsNote)}</span>
        </div>
        <ul className="impact__metrics-list">
          {pilotMetrics.map((metric) => (
            <li key={metric.en}>{t(metric)}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="impact__closing">
        <p>{t(impactSection.closing)}</p>
      </Reveal>
    </Section>
  )
}
