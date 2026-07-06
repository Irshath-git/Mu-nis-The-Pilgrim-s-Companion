import type { ReactNode } from 'react'
import { Signal, Wifi, BatteryFull, WifiOff } from 'lucide-react'
import './phone.css'

interface PhoneFrameProps {
  children: ReactNode
  /** Shows the offline glyph in the status bar. */
  offline?: boolean
  className?: string
  /** Accessible description of what the phone demo shows. */
  label?: string
  hudaState?: 'active' | 'listening' | 'understanding'
}

/** Realistic smartphone shell shared by the hero visual and the prototype. */
export function PhoneFrame({
  children,
  offline = false,
  className,
  label,
  hudaState = 'active',
}: PhoneFrameProps) {
  return (
    <div
      className={`phone${className ? ` ${className}` : ''}`}
      role={label ? 'group' : undefined}
      aria-label={label}
    >
      <div className="phone__screen">
        <div className="phone__statusbar" aria-hidden="true">
          <span className="phone__time">09:41</span>
          <span className="phone__notch" />
          <span className="phone__status-icons">
            {offline ? <WifiOff size={11} /> : <Wifi size={11} />}
            <Signal size={11} />
            <BatteryFull size={13} />
          </span>
        </div>

        {/* Huda Companion Status Overlay Bar */}
        <div className="phone__huda-companion-bar" aria-hidden="true">
          <div className="huda-companion-bar__left">
            <span className={`huda-companion-pulse huda-companion-pulse--${hudaState}`} />
            <span className="huda-companion-text">
              {hudaState === 'listening' && 'هُدى: تستمع... / Huda: Listening...'}
              {hudaState === 'understanding' && 'هُدى: تفهم... / Huda: Thinking...'}
              {hudaState === 'active' && 'هُدى متصلة / Huda Companion'}
            </span>
          </div>
          {offline && <span className="huda-companion-offline-badge">Synced</span>}
        </div>

        <div className="phone__content">{children}</div>
      </div>
    </div>
  )
}
