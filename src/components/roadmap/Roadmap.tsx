import { roadmapSection, roadmapStages } from '../../data/roadmap'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './roadmap.css'

export function Roadmap() {
  const { t } = useLanguage()

  return (
    <Section
      id="roadmap"
      variant="soft"
      eyebrow={roadmapSection.eyebrow}
      title={roadmapSection.heading}
    >
      <ol className="roadmap">
        {roadmapStages.map((stage, index) => (
          <Reveal
            as="li"
            key={stage.id}
            delay={index * 90}
            className={`roadmap__stage${stage.current ? ' roadmap__stage--current' : ''}`}
          >
            <div className="roadmap__marker" aria-hidden="true">
              <span>{stage.number}</span>
            </div>
            <div className="card roadmap__card">
              <div className="roadmap__card-head">
                <h3>{t(stage.title)}</h3>
                {stage.current && (
                  <span className="badge badge--prototype">{t(roadmapSection.currentLabel)}</span>
                )}
              </div>
              <ul className="roadmap__items">
                {stage.items.map((item) => (
                  <li key={item.en}>{t(item)}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
