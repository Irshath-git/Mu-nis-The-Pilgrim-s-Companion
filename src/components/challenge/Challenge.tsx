import { Accessibility, Languages, Users, WifiOff, type LucideIcon } from 'lucide-react'
import { challengeSection, challenges } from '../../data/challenges'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './challenge.css'

const ICONS: Record<string, LucideIcon> = {
  languages: Languages,
  accessibility: Accessibility,
  'wifi-off': WifiOff,
  users: Users,
}

export function Challenge() {
  const { t } = useLanguage()

  return (
    <Section
      id="challenge"
      variant="soft"
      eyebrow={challengeSection.eyebrow}
      title={challengeSection.heading}
      lead={challengeSection.lead}
    >
      <ul className="grid grid--2 challenge__list">
        {challenges.map((challenge, index) => {
          const Icon = ICONS[challenge.icon]
          return (
            <Reveal as="li" key={challenge.id} delay={index * 70} className="card challenge__card">
              <span className="challenge__icon">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="challenge__title">{t(challenge.title)}</h3>
              <p className="challenge__body">{t(challenge.body)}</p>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
