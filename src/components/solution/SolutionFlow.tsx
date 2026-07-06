import { solutionSection, solutionStages } from '../../data/solution'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './solution.css'

export function SolutionFlow() {
  const { t } = useLanguage()

  return (
    <Section
      id="solution"
      eyebrow={solutionSection.eyebrow}
      title={solutionSection.heading}
    >
      <ol className="solution-flow">
        {solutionStages.map((stage, index) => (
          <Reveal as="li" key={stage.id} delay={index * 110} className="solution-stage">
            <div className="solution-stage__marker" aria-hidden="true">
              <span className="solution-stage__number">{stage.step}</span>
            </div>
            <div className="card solution-stage__card">
              <h3 className="solution-stage__title">{t(stage.title)}</h3>
              <p className="solution-stage__subtitle">{t(stage.subtitle)}</p>
              <ul className="solution-stage__items">
                {stage.items.map((item) => (
                  <li key={item.en}>{t(item)}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
      <Reveal className="solution-flow__closing">
        <p>{t(solutionSection.closing)}</p>
      </Reveal>
    </Section>
  )
}
