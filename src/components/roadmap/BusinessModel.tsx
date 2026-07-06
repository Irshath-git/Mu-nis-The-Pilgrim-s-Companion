import {
  Accessibility,
  BarChart3,
  Boxes,
  Building2,
  HeartHandshake,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import {
  businessSection,
  businessStreams,
  businessPrinciples,
  type BusinessStream,
} from '../../data/roadmap'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './roadmap.css'

const ICONS: Record<BusinessStream['icon'], LucideIcon> = {
  'building-2': Building2,
  users: Users,
  accessibility: Accessibility,
  boxes: Boxes,
  'bar-chart': BarChart3,
  'heart-handshake': HeartHandshake,
}

export function BusinessModel() {
  const { t } = useLanguage()

  return (
    <Section
      id="model"
      eyebrow={businessSection.eyebrow}
      title={businessSection.heading}
    >
      <ul className="grid grid--3 business__streams">
        {businessStreams.map((stream, index) => {
          const Icon = ICONS[stream.icon]
          return (
            <Reveal as="li" key={stream.id} delay={index * 60} className="card business__stream">
              <span className="business__stream-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3>{t(stream.title)}</h3>
              <p>{t(stream.body)}</p>
            </Reveal>
          )
        })}
      </ul>

      <Reveal className="business__pledge">
        <ShieldCheck size={26} aria-hidden="true" />
        <p>{t(businessSection.pledge)}</p>
      </Reveal>

      <Reveal className="business__principles">
        <ul>
          {businessPrinciples.map((principle) => (
            <li key={principle.en}>{t(principle)}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
