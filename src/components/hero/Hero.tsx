import {
  Accessibility,
  CloudOff,
  HeartHandshake,
  Mic,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { hero } from '../../data/hero'
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
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            {t(hero.badge)}
          </p>
          <h1 id="hero-heading" className="hero__headline">
            {t(hero.headline)}
          </h1>
          <p className="hero__supporting">{t(hero.supporting)}</p>
          <div className="hero__ctas">
            <a href="#experience" className="btn btn--primary">
              {t(ui.ctaPrototypeLong)}
            </a>
            <a href="#solution" className="btn btn--secondary">
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
