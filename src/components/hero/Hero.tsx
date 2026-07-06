import {
  Accessibility,
  CloudOff,
  HeartHandshake,
  Mic,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { hero, heroStatus } from '../../data/hero'
import { ui } from '../../data/translations'
import { useLanguage } from '../../hooks/useLanguage'
import { HeroPhone } from './HeroPhone'
import './hero.css'

const CAPABILITY_ICONS: Record<string, LucideIcon> = {
  mic: Mic,
  'cloud-off': CloudOff,
  accessibility: Accessibility,
  'hand-helping': HeartHandshake,
  'shield-check': ShieldCheck,
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="overview" className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true">
        <svg className="hero__decor-route" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 480 C 200 440, 300 200, 700 280 C 1100 360, 1200 120, 1380 180" stroke="var(--mist-blue)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.25" />
          <circle cx="1380" cy="180" r="5" fill="var(--rose-clay)" opacity="0.8" />
          <circle cx="1380" cy="180" r="10" stroke="var(--rose-clay)" strokeWidth="1" opacity="0.3" className="hero__decor-pulse" />
        </svg>
      </div>
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            {t(hero.badge)}
          </p>
          <div className="hero__status-bar">
            <span className="hero__status-item">
              <span className="hero__status-dot hero__status-dot--pulse" aria-hidden="true" />
              {t(heroStatus.hudaStatus)}
            </span>
            <span className="hero__status-item">
              <span className="hero__status-dot" aria-hidden="true" />
              {t(heroStatus.modelStatus)}
            </span>
          </div>
          <h1 id="hero-heading" className="hero__headline">
            {t(hero.headline)}
          </h1>
          <p className="hero__supporting">{t(hero.supporting)}</p>
          <div className="hero__ctas">
            <a href="#prototype" className="btn btn--primary">
              {t(ui.ctaPrototypeLong)}
            </a>
            <a href="#how-it-works" className="btn btn--secondary">
              {t(ui.ctaHowItWorks)}
            </a>
          </div>
          <ul className="hero__capabilities" aria-label={t(ui.competitionTrack)}>
            {hero.capabilities.map((cap) => {
              const Icon = CAPABILITY_ICONS[cap.icon]
              return (
                <li key={cap.icon} className="chip">
                  <Icon size={15} aria-hidden="true" />
                  {t(cap.label)}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="hero__visual">
          <HeroPhone />
        </div>
      </div>
    </section>
  )
}
