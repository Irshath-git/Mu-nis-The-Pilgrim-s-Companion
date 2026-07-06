import { Heart, Lightbulb, Shield } from 'lucide-react'
import { aboutSection, aboutValues } from '../../data/about'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './about.css'

const ICONS = {
  heart: Heart,
  lightbulb: Lightbulb,
  shield: Shield,
}

export function About() {
  const { t } = useLanguage()

  return (
    <Section
      id="about"
      variant="soft"
      eyebrow={aboutSection.eyebrow}
      title={aboutSection.heading}
      lead={aboutSection.lead}
    >
      <div className="about__content">
        <div className="about__values grid grid--3">
          {aboutValues.map((value, index) => {
            const Icon = ICONS[value.icon as keyof typeof ICONS]
            return (
              <Reveal key={value.id} delay={index * 100} className="card about__value-card">
                <div className="about__value-icon">
                  <Icon size={32} aria-hidden="true" />
                </div>
                <h3>{t(value.title)}</h3>
                <p>{t(value.description)}</p>
              </Reveal>
            )
          })}
        </div>

        {/* Editorial Image Panel displaying Image B */}
        <Reveal className="about__image-panel" delay={150}>
          <div className="about__image-overlay" />
          <img
            src="/media/about/mecca-crowd.jpg"
            alt={t({ en: 'Sacred Grand Mosque and pilgrims', ar: 'المسجد الحرام وضيوف الرحمن' })}
            className="about__image"
          />
          <div className="about__image-quote">
            <p>
              {t({
                en: '“And proclaim to the people the Pilgrimage...”',
                ar: '«وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ...»',
              })}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
