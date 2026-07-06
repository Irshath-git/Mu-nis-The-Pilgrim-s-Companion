import { Check, Minus } from 'lucide-react'
import { comparisonSection, conventionalPoints, munisPoints } from '../../data/comparison'
import { brand } from '../../data/translations'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import { MunisMark } from '../brand/MunisMark'
import './differentiation.css'

export function Differentiation() {
  const { t, lang } = useLanguage()

  return (
    <Section
      id="why-munis"
      variant="soft"
      eyebrow={comparisonSection.eyebrow}
      title={comparisonSection.heading}
      lead={comparisonSection.lead}
    >
      <div className="compare">
        <Reveal className="card compare__col compare__col--conventional">
          <h3 className="compare__heading">{t(comparisonSection.conventionalTitle)}</h3>
          <ul>
            {conventionalPoints.map((point) => (
              <li key={point.en}>
                <Minus size={16} aria-hidden="true" />
                {t(point)}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="card compare__col compare__col--munis">
          <h3 className="compare__heading compare__heading--munis">
            <MunisMark size={24} variant="white" />
            {lang === 'ar' ? brand.nameAr : brand.nameEn}
          </h3>
          <ul>
            {munisPoints.map((point) => (
              <li key={point.en}>
                <Check size={16} aria-hidden="true" />
                {t(point)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
