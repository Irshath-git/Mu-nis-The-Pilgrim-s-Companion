import {
  Building,
  ClipboardList,
  Footprints,
  HandHelping,
  ListChecks,
  PlaneLanding,
  PlaneTakeoff,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { journeySection, journeyStages, type JourneyStage } from '../../data/journey'
import { useLanguage } from '../../hooks/useLanguage'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Section } from '../common/Section'
import { Tabs } from '../common/Tabs'
import { Accordion } from '../common/Accordion'
import './journey.css'

const ICONS: Record<JourneyStage['icon'], LucideIcon> = {
  'clipboard-list': ClipboardList,
  'plane-landing': PlaneLanding,
  building: Building,
  'list-checks': ListChecks,
  footprints: Footprints,
  users: Users,
  'hand-helping': HandHelping,
  'plane-takeoff': PlaneTakeoff,
}

function StagePanel({ stage }: { stage: JourneyStage }) {
  const { t } = useLanguage()
  return (
    <ul className="journey__items">
      {stage.items.map((item) => (
        <li key={item.en} className="journey__item">
          {t(item)}
        </li>
      ))}
    </ul>
  )
}

export function Journey() {
  const { t } = useLanguage()
  const isDesktop = useMediaQuery('(min-width: 821px)')

  return (
    <Section
      id="journey"
      eyebrow={journeySection.eyebrow}
      title={journeySection.heading}
    >
      {isDesktop ? (
        <Tabs
          idPrefix="journey"
          label={t(journeySection.stageLabel)}
          items={journeyStages.map((stage, index) => {
            const Icon = ICONS[stage.icon]
            return {
              id: stage.id,
              label: (
                <>
                  <span className="journey__tab-step" aria-hidden="true">
                    {index + 1}
                  </span>
                  <Icon size={15} aria-hidden="true" />
                  {t(stage.title)}
                </>
              ),
              panel: <StagePanel stage={stage} />,
            }
          })}
        />
      ) : (
        <Accordion
          idPrefix="journey"
          items={journeyStages.map((stage, index) => {
            const Icon = ICONS[stage.icon]
            return {
              id: stage.id,
              header: (
                <span className="journey__acc-header">
                  <span className="journey__tab-step" aria-hidden="true">
                    {index + 1}
                  </span>
                  <Icon size={16} aria-hidden="true" />
                  {t(stage.title)}
                </span>
              ),
              panel: <StagePanel stage={stage} />,
            }
          })}
        />
      )}
    </Section>
  )
}
