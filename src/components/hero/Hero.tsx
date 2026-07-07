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
      <div className="hero__bg" aria-hidden="true">
        {/* Cinematic layers: slow-moving photograph, emerald grade, drifting
            aurora glow, vignette and fine grain — a "living" backdrop with
            no video file required. All motion pauses under reduced-motion. */}
        <div className="hero__bg-image" />
        <div className="hero__bg-overlay" />
        <div className="hero__bg-aurora" />
        <div className="hero__bg-vignette" />
        <div className="hero__bg-grain" />

        {/* Subtle emerald guidance route + gold destination point */}
        <svg className="hero__decor-route" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path
            className="hero__route-glow"
            d="M-120 520 C 220 470, 360 250, 720 300 C 1080 350, 1220 150, 1400 200"
            stroke="var(--luminous-emerald)"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.14"
          />
          <path
            className="hero__route-dash"
            d="M-120 520 C 220 470, 360 250, 720 300 C 1080 350, 1220 150, 1400 200"
            stroke="var(--luminous-emerald)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 14"
            opacity="0.55"
          />
          <circle cx="1400" cy="200" r="6" fill="var(--sacred-gold)" opacity="0.9" />
          <circle className="hero__decor-pulse" cx="1400" cy="200" r="12" stroke="var(--sacred-gold)" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>
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
