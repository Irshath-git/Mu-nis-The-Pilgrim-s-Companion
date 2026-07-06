import type { ReactNode } from 'react'
import type { Bilingual } from '../../types/content'
import { useLanguage } from '../../hooks/useLanguage'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  eyebrow?: Bilingual
  title?: Bilingual
  lead?: Bilingual
  variant?: 'default' | 'soft' | 'dark'
  center?: boolean
  children?: ReactNode
  className?: string
}

/**
 * Standard page section: landmark with aria-labelledby, eyebrow label,
 * editorial heading and lead paragraph.
 */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  variant = 'default',
  center = false,
  children,
  className,
}: SectionProps) {
  const { t } = useLanguage()
  const headingId = `${id}-heading`

  const sectionClass = [
    'section',
    variant === 'soft' ? 'section--soft' : '',
    variant === 'dark' ? 'section--dark on-dark' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={sectionClass} aria-labelledby={title ? headingId : undefined}>
      <div className="container">
        {(eyebrow || title || lead) && (
          <Reveal className={`section-head${center ? ' section-head--center' : ''}`}>
            {eyebrow && <p className="eyebrow">{t(eyebrow)}</p>}
            {title && (
              <h2 id={headingId} className="section-title">
                {t(title)}
              </h2>
            )}
            {lead && <p className="section-lead">{t(lead)}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
