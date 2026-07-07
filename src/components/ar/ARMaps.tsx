import { useState, useEffect, useRef } from 'react'
import {
  Camera,
  CameraOff,
  Compass,
  Users,
  HandHelping,
  Navigation,
  Check,
  Volume2,
  Accessibility,
  Info,
  PhoneCall,
  MapPin,
  Clock,
  Waves,
} from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './armaps.css'

type ARMode = 'route' | 'group' | 'help'

export function ARMaps() {
  const { t, lang } = useLanguage()
  const [mode, setMode] = useState<ARMode>('route')
  const [accessibleMode, setAccessibleMode] = useState(false)
  const [simplifiedMode, setSimplifiedMode] = useState(false)
  const [cameraActive, setCameraActive] = useState(false)
  const [cameraError, setCameraError] = useState<string | null>(null)
  const [callingGuide, setCallingGuide] = useState(false)
  const [callingAlert, setCallingAlert] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // Clean up camera stream on unmount
  useEffect(() => {
    return () => {
      stopCamera()
    }
  }, [])

  const startCamera = async () => {
    setCameraError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setCameraActive(true)
    } catch (err: unknown) {
      console.error('Camera access error:', err)
      setCameraError(
        lang === 'ar'
          ? 'تعذر الوصول إلى الكاميرا. يرجى التحقق من أذونات المتصفح.'
          : 'Could not access camera. Please check browser permissions.'
      )
      setCameraActive(false)
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
    setCameraActive(false)
  }

  const triggerCallGuide = () => {
    setCallingGuide(true)
    setCallingAlert(true)
    setTimeout(() => {
      setCallingGuide(false)
      setTimeout(() => setCallingAlert(false), 2000)
    }, 2500)
  }

  // Dynamic transcripts matrix
  const getHudaTranscript = () => {
    if (mode === 'route') {
      if (accessibleMode) {
        return simplifiedMode
          ? {
              en: 'Go straight. Gate 3 is accessible ahead.',
              ar: 'سر مستقيماً. البوابة ٣ الميسّرة أمامك مباشرة.',
            }
          : {
              en: 'Walk 120 metres to Gate 3, then follow the flat accessible corridor to the rest area.',
              ar: 'امشِ ١٢٠ متراً إلى البوابة ٣، ثم اتبع الممر الميسّر المستوي إلى منطقة الاستراحة.',
            };
      } else {
        return simplifiedMode
          ? {
              en: 'Go straight to Gate 3, then take the escalators.',
              ar: 'سر مستقيماً إلى البوابة ٣، ثم اسلك السلالم الكهربائية.',
            }
          : {
              en: 'Walk 120 metres toward Gate 3, then take the escalators to the upper path.',
              ar: 'امشِ ١٢٠ متراً نحو البوابة ٣، ثم اسلك السلالم الكهربائية للممر العلوي.',
            };
      }
    } else if (mode === 'group') {
      if (accessibleMode) {
        return simplifiedMode
          ? {
              en: 'Guide ahead. Flat path to Zone B.',
              ar: 'المرشد أمامك. مسار ممهد خالٍ من الدرج إلى المنطقة ب.',
            }
          : {
              en: 'Your group guide is 85 metres ahead. Follow the flat ramp to Tent Zone B.',
              ar: 'مرشد مجموعتك على بعد ٨٥ متراً. اتبع المنحدر الممهد إلى منطقة الخيام ب.',
            };
      } else {
        return simplifiedMode
          ? {
              en: 'Guide ahead. Zone B.',
              ar: 'المرشد أمامك. منطقة الخيام ب.',
            }
          : {
              en: 'Your group guide is located 85 metres ahead near Tent Zone B. Proceed past the main steps.',
              ar: 'مرشد مجموعتك متواجد على بعد ٨٥ متراً أمامك قرب منطقة الخيام ب. تابع السير بعد الدرج الرئيسي.',
            };
      }
    } else {
      // mode === 'help'
      if (accessibleMode) {
        return simplifiedMode
          ? {
              en: 'Rest area 60m left. Step-free.',
              ar: 'منطقة استراحة على بعد ٦٠م لليسار. مسار بدون درج.',
            }
          : {
              en: 'The nearest accessible support and shaded rest area is 60 metres to your left via the ramp.',
              ar: 'منطقة الدعم الميسّر والاستراحة المظللة الأقرب تقع على بعد ٦٠ متراً إلى يسارك عبر المنحدر.',
            };
      } else {
        return simplifiedMode
          ? {
              en: 'Help desk 50m straight.',
              ar: 'مكتب المساعدة على بعد ٥٠م للامام مباشرة.',
            }
          : {
              en: 'The nearest medical aid and assistance desk is 50 metres straight ahead.',
              ar: 'نقطة المساعدة الطبية والدعم الأقرب تقع على بعد ٥٠ متراً أمامك مباشرة.',
            };
      }
    }
  }

  const hudaText = getHudaTranscript()

  return (
    <Section
      id="ar-maps"
      eyebrow={{ en: 'AR Guided Journey', ar: 'إرشاد الواقع المعزز' }}
      title={{ en: 'See the next step in the world around you', ar: 'شاهد خطوتك القادمة في العالم الحقيقي' }}
      variant="dark"
    >
      <div className="pattern-overlay" aria-hidden="true" />

      <div className="ar-section">
        <div className="ar-grid grid grid--2">
          {/* Controls Side */}
          <Reveal className="ar-panel">
            <p className="ar-panel__desc">
              {t({
                en: "Mu'nis uses augmented-reality guidance concepts to place simple directions, landmarks and assistance points directly within the pilgrim’s view.",
                ar: 'يستخدم مُؤْنِس مفاهيم إرشاد الواقع المعزز لعرض الاتجاهات البسيطة والمعالم ونقاط المساعدة مباشرة في مجال رؤية الحاج.',
              })}
            </p>

            {/* Mode Selectors */}
            <div className="ar-selectors">
              <h3 className="ar-panel__subtitle">
                {t({ en: 'Select AR Mode', ar: 'اختر وضع الواقع المعزز' })}
              </h3>
              <div className="ar-mode-buttons">
                <button
                  className={`ar-mode-btn ${mode === 'route' ? 'ar-mode-btn--active' : ''}`}
                  onClick={() => setMode('route')}
                >
                  <Navigation size={16} aria-hidden="true" className="flip-rtl" />
                  <span>{t({ en: 'Follow My Route', ar: 'تتبع مساري' })}</span>
                </button>

                <button
                  className={`ar-mode-btn ${mode === 'group' ? 'ar-mode-btn--active' : ''}`}
                  onClick={() => setMode('group')}
                >
                  <Users size={16} aria-hidden="true" />
                  <span>{t({ en: 'Find My Group', ar: 'العثور على مجموعتي' })}</span>
                </button>

                <button
                  className={`ar-mode-btn ${mode === 'help' ? 'ar-mode-btn--active' : ''}`}
                  onClick={() => setMode('help')}
                >
                  <HandHelping size={16} aria-hidden="true" />
                  <span>{t({ en: 'Find Help', ar: 'طلب المساعدة' })}</span>
                </button>
              </div>
            </div>

            {/* Customisation Toggles */}
            <div className="ar-toggles">
              <h3 className="ar-panel__subtitle">
                {t({ en: 'Adapt Interface', ar: 'تخصيص وتكييف العرض' })}
              </h3>
              <div className="ar-toggles-grid">
                <label className="ar-toggle-card">
                  <input
                    type="checkbox"
                    checked={accessibleMode}
                    onChange={(e) => setAccessibleMode(e.target.checked)}
                  />
                  <div className="ar-toggle-card__inner">
                    <Accessibility size={18} className="text-rose" />
                    <div>
                      <span className="ar-toggle-card__label">{t({ en: 'Step-Free Paths', ar: 'مسارات ميسّرة' })}</span>
                      <span className="ar-toggle-card__hint">
                        {t({ en: 'Avoid stairs & inclines', ar: 'تجنب الدرج والارتفاعات' })}
                      </span>
                    </div>
                  </div>
                </label>

                <label className="ar-toggle-card">
                  <input
                    type="checkbox"
                    checked={simplifiedMode}
                    onChange={(e) => setSimplifiedMode(e.target.checked)}
                  />
                  <div className="ar-toggle-card__inner">
                    <Compass size={18} className="text-mist" />
                    <div>
                      <span className="ar-toggle-card__label">{t({ en: 'Simplified HUD', ar: 'إرشادات مبسطة' })}</span>
                      <span className="ar-toggle-card__hint">
                        {t({ en: 'Direct, easy directions', ar: 'تعليمات مباشرة وسهلة' })}
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Huda Speech Box */}
            <div className="ar-huda-box card card--dark">
              <div className="ar-huda-box__header">
                <Volume2 size={16} className="text-rose" />
                <span className="ar-huda-box__title">{t({ en: 'Voice companion: Huda', ar: 'المساعد الصوتي: هُدى' })}</span>
              </div>
              <p className="ar-huda-box__transcript">“{t(hudaText)}”</p>
              <div className="ar-huda-box__voice-visualiser">
                <Waves size={16} className="text-mist animate-pulse" />
                <span className="ar-huda-box__voice-hint">
                  {t({ en: 'Voice instruction matches environment', ar: 'التعليمات الصوتية تتطابق مع البيئة' })}
                </span>
              </div>
            </div>
          </Reveal>

          {/* AR Phone Simulator Side */}
          <Reveal className="ar-simulator" delay={150}>
            <div className="ar-device">
              {/* Phone Frame */}
              <div className="ar-viewport">
                {/* Camera Video Stream */}
                {cameraActive ? (
                  <video ref={videoRef} autoPlay playsInline muted className="ar-camera-feed" />
                ) : (
                  /* Photographic simulated camera feed */
                  <div className="ar-camera-fallback">
                    <img
                      src="/media/ar/pilgrim-path.png"
                      alt={t({ en: 'A pilgrim walking along a mosque walkway', ar: 'حاج يمشي عبر ممر المسجد' })}
                      className="ar-fallback-photo"
                      loading="lazy"
                      width={1024}
                      height={1024}
                    />
                    <div className="ar-fallback-grade" />
                    <div className="ar-fallback-content">
                      <p className="ar-fallback-text">
                        <span className="ar-fallback-live-dot" aria-hidden="true" />
                        {t({ en: 'Camera simulation active', ar: 'محاكاة الكاميرا نشطة' })}
                      </p>
                    </div>
                  </div>
                )}

                {/* Status Bar */}
                <div className="ar-hud-status">
                  <span className="ar-hud-time">12:30</span>
                  <div className="ar-hud-network">
                    <span className="ar-hud-network__dot ar-hud-network__dot--active" />
                    <span>Mu'nis AI HUD v1.0</span>
                  </div>
                </div>

                {/* ==============================================
                    AR Overlays Layer (Absolute Position inside viewport)
                    ============================================== */}
                <div className="ar-overlays">
                  {/* MODE 1: Follow My Route overlays */}
                  {mode === 'route' && (
                    <>
                      {/* Ground Route Path representation */}
                      <svg className="ar-ground-path" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                          d="M 50 100 C 50 80, 40 60, 52 40"
                          fill="none"
                          stroke="var(--mist-blue)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          opacity="0.6"
                          className="ar-ground-path__draw"
                        />
                      </svg>

                      {/* Direction Arrow */}
                      <div className="ar-marker ar-marker--arrow">
                        <div className="ar-arrow-bounce">
                          <Navigation size={24} className="text-night flip-rtl" style={{ transform: 'rotate(45deg)' }} />
                        </div>
                      </div>

                      {/* Distance Badge */}
                      <div className="ar-marker ar-marker--badge">
                        <div className="ar-gate-marker">
                          <span className="ar-gate-circle">3</span>
                          <span className="ar-gate-label">
                            {lang === 'ar' ? 'بوابة ٣' : 'Gate 3'}
                          </span>
                        </div>
                      </div>

                      {/* Instruction Panel */}
                      <div className="ar-instruction-card animate-fade-in">
                        <p className="ar-instruction-card__title">
                          {simplifiedMode
                            ? t({ en: 'Go straight', ar: 'سر مستقيماً' })
                            : t({ en: 'Flat Step-Free Route Active', ar: 'مسار ممهد ميسّر نشط' })}
                        </p>
                        <p className="ar-instruction-card__desc">
                          {accessibleMode
                            ? t({ en: 'Keep right on West Ramp', ar: 'ابق يميناً على المنحدر الغربي' })
                            : t({ en: 'Follow main corridor to entrance', ar: 'اتبع الممر الرئيسي للمدخل' })}
                        </p>
                      </div>
                    </>
                  )}

                  {/* MODE 2: Find My Group overlays */}
                  {mode === 'group' && (
                    <>
                      {/* Guide indicator marker in the distance */}
                      <div className="ar-marker ar-marker--group-leader">
                        <div className="group-marker-pulse" />
                        <div className="ar-leader-label">
                          <Users size={12} className="text-white" />
                          <span>{t({ en: 'Group Leader', ar: 'مشرف المجموعة' })}</span>
                        </div>
                        <span className="ar-leader-distance">85m</span>
                      </div>

                      {/* Tents Zone B Marker */}
                      <div className="ar-marker ar-marker--tent">
                        <div className="ar-landmark-badge">
                          <MapPin size={11} />
                          <span>{t({ en: 'Meeting Point: Zone B', ar: 'نقطة التجمع: المنطقة ب' })}</span>
                        </div>
                      </div>

                      {/* Group Reconnect Card */}
                      <div className="ar-instruction-card animate-fade-in">
                        <p className="ar-instruction-card__title">
                          {t({ en: 'Group Location Synced', ar: 'موقع المجموعة متزامن' })}
                        </p>
                        <button className="ar-contact-btn" onClick={triggerCallGuide} disabled={callingGuide}>
                          <PhoneCall size={12} />
                          <span>
                            {callingGuide
                              ? t({ en: 'Calling guide...', ar: 'جاري الاتصال بالمرشد...' })
                              : t({ en: 'Contact Guide', ar: 'اتصال بالمرشد' })}
                          </span>
                        </button>
                      </div>
                    </>
                  )}

                  {/* MODE 3: Find Help overlays */}
                  {mode === 'help' && (
                    <>
                      {/* Nearest assistance point */}
                      <div className="ar-marker ar-marker--assistance">
                        <div className="assistance-marker-icon">
                          <HandHelping size={14} />
                        </div>
                        <div className="ar-marker-bubble">
                          <span className="ar-bubble-title">{t({ en: 'Support Desk 4', ar: 'مكتب الدعم ٤' })}</span>
                          <span className="ar-bubble-desc">{t({ en: '50m ahead', ar: '٥٠م أمامك' })}</span>
                        </div>
                      </div>

                      {/* Rest point marker */}
                      <div className="ar-marker ar-marker--rest-point">
                        <div className="rest-marker-icon">
                          <Clock size={12} />
                        </div>
                        <div className="ar-marker-bubble">
                          <span className="ar-bubble-title">{t({ en: 'Rest Area 12', ar: 'منطقة الاستراحة ١٢' })}</span>
                          <span className="ar-bubble-desc">{t({ en: '60m left', ar: '٦٠م لليسار' })}</span>
                        </div>
                      </div>

                      {/* Quick Escalation Instructions */}
                      <div className="ar-instruction-card animate-fade-in">
                        <p className="ar-instruction-card__title">{t({ en: 'Assistance Nearby', ar: 'الدعم والمساعدة متوفرة بقربك' })}</p>
                        <p className="ar-instruction-card__desc">
                          {accessibleMode
                            ? t({ en: 'Wheelchair access available at Desk 4', ar: 'خدمات الكراسي متوفرة في مكتب ٤' })
                            : t({ en: 'First aid point active 50m straight', ar: 'نقطة الإسعافات نشطة على بعد ٥٠م' })}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Call guide alert overlay banner */}
                {callingAlert && (
                  <div className="ar-hud-alert animate-fade-in">
                    <Check size={14} className="text-success" />
                    <span>{t({ en: 'Support alert sent to guide', ar: 'تم إرسال إشعار الدعم للمرشد' })}</span>
                  </div>
                )}

                {/* Camera Access Buttons Overlay inside viewport */}
                <div className="ar-hud-controls">
                  {cameraActive ? (
                    <button className="ar-hud-cam-btn" onClick={stopCamera}>
                      <CameraOff size={14} />
                      <span>{t({ en: 'Stop Camera', ar: 'إيقاف الكاميرا' })}</span>
                    </button>
                  ) : (
                    <button className="ar-hud-cam-btn" onClick={startCamera}>
                      <Camera size={14} />
                      <span>{t({ en: 'Start Camera', ar: 'تشغيل الكاميرا' })}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Error notifications */}
            {cameraError && <p className="ar-simulator__error">{cameraError}</p>}

            {/* AR Maps Section Disclaimer */}
            <p className="ar-disclaimer">
              <Info size={12} aria-hidden="true" />
              <span>
                {t({
                  en: 'This AR experience uses simulated journey and location data. Live routing, landmarks, crowd information and assistance integrations require device permissions, validation and authorisation.',
                  ar: 'تستخدم تجربة الواقع المعزز هذه بيانات رحلة وموقع محاكاة. تتطلب تكاملات الإرشاد المباشر والمعالم والمعلومات التشغيلية وطلب المساعدة أذونات جهاز وتحقق واعتماد رسمي.',
                })}
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
