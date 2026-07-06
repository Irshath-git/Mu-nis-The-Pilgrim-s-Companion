import { FlaskConical, CalendarClock, Lock } from 'lucide-react'
import type { MaturityLevel } from '../../types/content'
import { ui } from '../../data/translations'
import { useLanguage } from '../../hooks/useLanguage'

const ICONS = {
  prototype: FlaskConical,
  pilot: CalendarClock,
  future: Lock,
} as const

/** Honesty label: Prototype / Planned Pilot / Future Authorised Integration. */
export function MaturityBadge({ level }: { level: MaturityLevel }) {
  const { t } = useLanguage()
  const Icon = ICONS[level]
  return (
    <span className={`badge badge--${level}`}>
      <Icon size={13} aria-hidden="true" />
      {t(ui.maturity[level])}
    </span>
  )
}
