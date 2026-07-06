import { Brain, Scale, Shield, Smartphone, type LucideIcon } from 'lucide-react'
import {
  technologySection,
  architectureLayers,
  architecturePrinciples,
  technicalDetail,
  type ArchitectureLayer,
} from '../../data/architecture'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import { Accordion } from '../common/Accordion'
import './architecture.css'

const ICONS: Record<ArchitectureLayer['icon'], LucideIcon> = {
  smartphone: Smartphone,
  brain: Brain,
  shield: Shield,
  scale: Scale,
}

export function Technology() {
  const { t } = useLanguage()

  return (
    <Section
      id="technology"
      variant="dark"
      eyebrow={technologySection.eyebrow}
      title={technologySection.heading}
    >
      <div className="pattern-overlay" aria-hidden="true" />
      <ol className="arch__layers" aria-label={t(technologySection.layersLabel)}>
        {architectureLayers.map((layer, index) => {
          const Icon = ICONS[layer.icon]
          return (
            <Reveal as="li" key={layer.id} delay={index * 90} className="arch__layer">
              <div className="arch__layer-head">
                <span className="arch__layer-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="arch__layer-number">
                    {t({ en: `Layer ${layer.number}`, ar: `الطبقة ${layer.number}` })}
                  </p>
                  <h3 className="arch__layer-title">{t(layer.title)}</h3>
                </div>
              </div>
              <ul className="arch__layer-items">
                {layer.items.map((item) => (
                  <li key={item.en}>{t(item)}</li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </ol>

      <Reveal className="arch__principles">
        <h3 className="arch__principles-heading">{t(technologySection.principlesHeading)}</h3>
        <ul>
          {architecturePrinciples.map((principle) => (
            <li key={principle.en}>{t(principle)}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="arch__detail">
        <Accordion
          idPrefix="tech-detail"
          defaultOpen={null}
          items={technicalDetail.map((detail, index) => ({
            id: `detail-${index}`,
            header: t(detail.title),
            panel: <p className="arch__detail-body">{t(detail.body)}</p>,
          }))}
        />
      </Reveal>
    </Section>
  )
}
