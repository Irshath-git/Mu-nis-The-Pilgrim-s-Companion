import type { Dispatch } from 'react'
import {
  HandHelping,
  MapPin,
  Navigation,
  PhoneCall,
  QrCode,
  Volume2,
  X,
} from 'lucide-react'
import { lostScreen } from '../../../data/prototypeScreens'
import { useLanguage } from '../../../hooks/useLanguage'
import type { DemoAction, DemoState } from '../demoState'

/** Fixed decorative pattern for the demonstration QR code. */
const QR_PATTERN =
  '1111111,1000101,1011101,1010011,1011101,1000101,1111111'.split(',')

export function LostScreen({
  state,
  dispatch,
}: {
  state: DemoState
  dispatch: Dispatch<DemoAction>
}) {
  const { t } = useLanguage()
  const action = state.lostAction

  const status =
    action === 'guide'
      ? lostScreen.guideStatus
      : action === 'location'
        ? lostScreen.locationStatus
        : action === 'meeting'
          ? lostScreen.meetingStatus
          : action === 'sound'
            ? lostScreen.soundStatus
            : action === 'qr'
              ? lostScreen.qrStatus
              : null

  return (
    <div className="ph-screen">
      <p className="ph-heading">{t(lostScreen.title)}</p>
      <p className="ph-sub">{t(lostScreen.reassure)}</p>

      {action === 'location-consent' ? (
        <div className="ph-card proto-consent">
          <p className="ph-card__title">{t(lostScreen.consentTitle)}</p>
          <p className="ph-card__meta">{t(lostScreen.consentBody)}</p>
          <div className="ph-actions">
            <button
              className="ph-btn ph-btn--primary ph-btn--row"
              onClick={() => dispatch({ type: 'lost', action: 'location' })}
            >
              {t(lostScreen.consentAgree)}
            </button>
            <button
              className="ph-btn ph-btn--secondary ph-btn--row"
              onClick={() => dispatch({ type: 'lost', action: 'none' })}
            >
              <X size={13} aria-hidden="true" />
              {t(lostScreen.consentCancel)}
            </button>
          </div>
        </div>
      ) : (
        <>
          {status && (
            <div className="ph-card ph-card--dark proto-status" role="status">
              {action === 'sound' && (
                <span className="proto-sound-pulse" aria-hidden="true">
                  <Volume2 size={15} />
                </span>
              )}
              <p>{t(status)}</p>
              {action === 'sound' && (
                <button
                  className="ph-btn ph-btn--row proto-status__stop"
                  onClick={() => dispatch({ type: 'lost', action: 'none' })}
                >
                  {t(lostScreen.soundStop)}
                </button>
              )}
            </div>
          )}

          {action === 'qr' && (
            <div className="ph-qr" role="img" aria-label={t(lostScreen.options.qr)}>
              {QR_PATTERN.flatMap((row, y) =>
                row.split('').map((cell, x) => (
                  <span key={`${y}-${x}`} data-on={cell === '1'} />
                )),
              )}
            </div>
          )}

          <button
            className="ph-option"
            aria-pressed={action === 'guide'}
            onClick={() => dispatch({ type: 'lost', action: 'guide' })}
          >
            <span className="ph-option__icon">
              <PhoneCall size={14} aria-hidden="true" />
            </span>
            {t(lostScreen.options.guide)}
          </button>
          <button
            className="ph-option"
            aria-pressed={action === 'location'}
            onClick={() => dispatch({ type: 'lost', action: 'location-consent' })}
          >
            <span className="ph-option__icon">
              <MapPin size={14} aria-hidden="true" />
            </span>
            {t(lostScreen.options.location)}
          </button>
          <button
            className="ph-option"
            aria-pressed={action === 'meeting'}
            onClick={() => dispatch({ type: 'lost', action: 'meeting' })}
          >
            <span className="ph-option__icon">
              <Navigation size={14} aria-hidden="true" />
            </span>
            {t(lostScreen.options.meeting)}
          </button>
          <button
            className="ph-option"
            aria-pressed={action === 'sound'}
            onClick={() => dispatch({ type: 'lost', action: 'sound' })}
          >
            <span className="ph-option__icon">
              <Volume2 size={14} aria-hidden="true" />
            </span>
            {t(lostScreen.options.sound)}
          </button>
          <button
            className="ph-option"
            aria-pressed={action === 'qr'}
            onClick={() => dispatch({ type: 'lost', action: 'qr' })}
          >
            <span className="ph-option__icon">
              <QrCode size={14} aria-hidden="true" />
            </span>
            {t(lostScreen.options.qr)}
          </button>
          <button className="ph-option" onClick={() => dispatch({ type: 'goto', screen: 6 })}>
            <span className="ph-option__icon">
              <HandHelping size={14} aria-hidden="true" />
            </span>
            {t(lostScreen.options.assist)}
          </button>
        </>
      )}
    </div>
  )
}
