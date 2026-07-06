import { useState, useMemo } from 'react'
import {
  Building,
  ClipboardList,
  Footprints,
  HandHelping,
  ListChecks,
  PlaneLanding,
  PlaneTakeoff,
  Users,
  type LucideIcon,
  CheckCircle2,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { journeySection, journeyStages, type JourneyStage } from '../../data/journey'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './journey.css'

const ICONS: Record<JourneyStage['icon'], LucideIcon> = {
  'clipboard-list': ClipboardList,
  'plane-landing': PlaneLanding,
  building: Building,
  'list-checks': ListChecks,
  footprints: Footprints,
  users: Users,
  'hand-helping': HandHelping,
  'plane-takeoff': PlaneTakeoff,
}

const MOCK_SCREENS: Record<string, { en: string; ar: string }> = {
  'before-arrival': {
    en: 'System ready. 6 essential files saved offline. Share group link with family.',
    ar: 'النظام جاهز. تم حفظ ٦ ملفات أساسية دون اتصال. شارك رابط المجموعة مع العائلة.',
  },
  'arrival': {
    en: 'Welcome to Jeddah. Shuttle bus departs from Gate 4 in 12 minutes.',
    ar: 'مرحبًا بك في جدة. حافلة النقل تغادر من البوابة ٤ خلال ١٢ دقيقة.',
  },
  'accommodation': {
    en: 'Hotel saved: Makkah Grand. Tap "Return to hotel" for offline routing.',
    ar: 'تم حفظ الفندق: جراند مكة. اضغط "العودة للفندق" للإرشاد دون اتصال.',
  },
  'ritual-preparation': {
    en: 'Ihram check: complete. Ready for Tawaf. Review 4 essential steps.',
    ar: 'فحص الإحرام: مكتمل. جاهز للطواف. راجع ٤ خطوات أساسية.',
  },
  'ritual-journey': {
    en: 'Currently in Mina. Shaded path is on your right. Stay hydrated.',
    ar: 'متواجد حاليًا في منى. الممر المظلل على يمينك. حافظ على ترطيب جسمك.',
  },
  'crowd-movement': {
    en: 'Caution: Jamarat route busy. A calmer alternative path is available.',
    ar: 'تنبيه: طريق الجمرات مزدحم. يتوفر مسار بديل أكثر هدوءًا.',
  },
  'assistance': {
    en: 'Support request sent to leader. Keep walking straight. Help is nearby.',
    ar: 'تم إرسال طلب الدعم للمشرف. تابع السير مستقيمًا. المساعدة قريبة منك.',
  },
  'return-journey': {
    en: 'Hajj completed successfully. Flight SV102 departure in 4 hours.',
    ar: 'تم إتمام الحج بنجاح. مغادرة الرحلة SV102 خلال ٤ ساعات.',
  },
}

export function Journey() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState<number>(4) // Default to Ritual Journey

  const activeStage = useMemo(() => journeyStages[activeIndex], [activeIndex])

  return (
    <Section
      id="journey"
      eyebrow={journeySection.eyebrow}
      title={journeySection.heading}
    >
      <div className="journey-cinematic">
        {/* Desktop connected progress timeline */}
        <Reveal className="journey-timeline-wrap">
          <div className="journey-timeline" role="tablist" aria-label="Journey stages">
            {/* The continuous thin emerald line */}
            <div className="journey-timeline__line" aria-hidden="true">
              <div
                className="journey-timeline__fill"
                style={{ width: `${(activeIndex / (journeyStages.length - 1)) * 100}%` }}
              />
            </div>

            {journeyStages.map((stage, index) => {
              const Icon = ICONS[stage.icon]
              const isActive = index === activeIndex
              return (
                <button
                  key={stage.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`journey-timeline__node ${isActive ? 'journey-timeline__node--active' : ''}`}
                  aria-label={t(stage.title)}
                >
                  <span className="journey-timeline__dot">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <span className="journey-timeline__label">{t(stage.title)}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Cinematic Content split view */}
        <div className="journey-cinematic__main grid grid--2">
          {/* Left panel: simulated screen/visual */}
          <Reveal className="journey-visual-card card card--dark">
            <div className="journey-visual-card__overlay" aria-hidden="true" />
            <div className="journey-visual-card__content">
              <div className="visual-card__header">
                <span className="visual-card__badge">
                  <MapPin size={12} className="text-gold" aria-hidden="true" />
                  {t({ en: `Stage ${activeIndex + 1} of 8`, ar: `المرحلة ${activeIndex + 1} من ٨` })}
                </span>
                <span className="visual-card__status">
                  <Sparkles size={12} className="text-gold animate-pulse" aria-hidden="true" />
                  {t({ en: 'Companion Live', ar: 'الرفيق متصل' })}
                </span>
              </div>

              <div className="visual-card__screen">
                <div className="visual-card__screen-inner">
                  <div className="visual-card__app-bar">
                    <span className="dot dot--red" />
                    <span className="dot dot--yellow" />
                    <span className="dot dot--green" />
                  </div>
                  <div className="visual-card__app-body">
                    <div className="app-body__icon-wrap">
                      {(() => {
                        const StageIcon = ICONS[activeStage.icon]
                        return <StageIcon size={24} className="text-gold" aria-hidden="true" />
                      })()}
                    </div>
                    <p className="app-body__title">{t(activeStage.title)}</p>
                    <p className="app-body__instruction">
                      {t(MOCK_SCREENS[activeStage.id] || MOCK_SCREENS['ritual-journey'])}
                    </p>
                  </div>
                </div>
              </div>

              {/* Glowing active gold destination point marker */}
              <div className="visual-card__dest-marker">
                <span className="dest-marker-pulse" />
                <span className="dest-marker-label">{t({ en: "Mu'nis Point", ar: 'موقع مُؤْنِس' })}</span>
              </div>
            </div>
          </Reveal>

          {/* Right panel: details checklist */}
          <Reveal className="journey-details" delay={100}>
            <div className="card journey-details-card">
              <div className="journey-details__title-wrap">
                {(() => {
                  const StageIcon = ICONS[activeStage.icon]
                  return <StageIcon size={24} className="journey-details__icon" aria-hidden="true" />
                })()}
                <h3 className="journey-details__heading">{t(activeStage.title)}</h3>
              </div>
              <ul className="journey-details__list">
                {activeStage.items.map((item, i) => (
                  <li key={i} className="journey-details__item">
                    <CheckCircle2 size={16} className="journey-details__check-icon" aria-hidden="true" />
                    <span className="journey-details__item-text">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Mobile vertical connected path */}
        <div className="journey-mobile">
          <div className="journey-mobile__line" aria-hidden="true" />
          <ul className="journey-mobile__list">
            {journeyStages.map((stage, index) => {
              const Icon = ICONS[stage.icon]
              const isActive = index === activeIndex
              return (
                <li
                  key={stage.id}
                  className={`journey-mobile__item ${isActive ? 'journey-mobile__item--active' : ''}`}
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="journey-mobile__header-btn"
                    aria-expanded={isActive}
                  >
                    <span className="journey-mobile__node-dot">
                      <Icon size={14} aria-hidden="true" />
                    </span>
                    <span className="journey-mobile__title">{t(stage.title)}</span>
                  </button>

                  <div
                    className={`journey-mobile__collapse ${
                      isActive ? 'journey-mobile__collapse--open' : ''
                    }`}
                  >
                    <div className="journey-mobile__collapse-inner card">
                      <p className="journey-mobile__mock-instruction">
                        {t(MOCK_SCREENS[stage.id] || MOCK_SCREENS['ritual-journey'])}
                      </p>
                      <ul className="journey-mobile__checklist">
                        {stage.items.map((item, i) => (
                          <li key={i} className="journey-mobile__check-item">
                            <CheckCircle2 size={14} className="journey-mobile__check-icon" aria-hidden="true" />
                            <span>{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
