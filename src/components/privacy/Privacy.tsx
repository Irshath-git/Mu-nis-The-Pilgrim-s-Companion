import {
  Ban,
  BarChart3,
  CheckCircle2,
  Database,
  FileText,
  Lock,
  MapPin,
  Minimize2,
  Timer,
  Trash2,
  UserCheck,
  UserCog,
  type LucideIcon,
} from 'lucide-react'
import { privacySection, privacyItems } from '../../data/privacy'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './privacy.css'

const ICONS: Record<string, LucideIcon> = {
  'minimize-2': Minimize2,
  'check-circle': CheckCircle2,
  'map-pin': MapPin,
  'user-check': UserCheck,
  lock: Lock,
  database: Database,
  'user-cog': UserCog,
  timer: Timer,
  'trash-2': Trash2,
  'bar-chart': BarChart3,
  ban: Ban,
  'file-text': FileText,
}

export function Privacy() {
  const { t } = useLanguage()

  return (
    <Section
      id="privacy"
      variant="soft"
      eyebrow={privacySection.eyebrow}
      title={privacySection.heading}
      lead={privacySection.note}
    >
      <ul className="privacy__grid">
        {privacyItems.map((item, index) => {
          const Icon = ICONS[item.icon]
          return (
            <Reveal as="li" key={item.id} delay={(index % 4) * 60} className="privacy__item">
              <span className="privacy__icon">
                <Icon size={17} aria-hidden="true" />
              </span>
              <div>
                <h3>{t(item.title)}</h3>
                <p>{t(item.body)}</p>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
