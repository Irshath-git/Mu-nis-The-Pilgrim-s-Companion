import type { Bilingual } from '../types/content'

export const accessibilitySection = {
  eyebrow: { en: 'Accessibility by Design', ar: 'إمكانية الوصول بالتصميم' },
  heading: {
    en: `Accessibility is not an additional feature. It is the foundation of Mu'nis.`,
    ar: 'إمكانية الوصول ليست ميزة إضافية، بل هي أساس مُؤْنِس.',
  },
  previewHeading: { en: 'Try the accessibility modes', ar: 'جرّب أوضاع إمكانية الوصول' },
  previewLead: {
    en: 'Select a mode to see how the same guidance adapts in the interface.',
    ar: 'اختر وضعًا لترى كيف تتكيف الإرشادات نفسها داخل الواجهة.',
  },
  previewModesLabel: { en: 'Accessibility modes', ar: 'أوضاع إمكانية الوصول' },
} as const

export interface AccessibilityCapability {
  id: string
  icon: string
  label: Bilingual
}

export const accessibilityCapabilities: AccessibilityCapability[] = [
  { id: 'voice-nav', icon: 'mic', label: { en: 'Voice-first navigation', ar: 'تنقّل بالصوت أولًا' } },
  { id: 'touch', icon: 'pointer', label: { en: 'Large touch targets', ar: 'أزرار لمس كبيرة' } },
  { id: 'contrast', icon: 'contrast', label: { en: 'High contrast', ar: 'تباين عالٍ' } },
  { id: 'screen-reader', icon: 'speech', label: { en: 'Screen-reader support', ar: 'دعم قارئ الشاشة' } },
  { id: 'simple-language', icon: 'message-square', label: { en: 'Simplified language', ar: 'لغة مبسّطة' } },
  { id: 'multilingual', icon: 'languages', label: { en: 'Multilingual guidance', ar: 'إرشاد متعدد اللغات' } },
  { id: 'visual-alt', icon: 'eye', label: { en: 'Visual alternatives to audio', ar: 'بدائل مرئية للصوت' } },
  { id: 'haptic', icon: 'vibrate', label: { en: 'Haptic confirmation', ar: 'تأكيد بالاهتزاز' } },
  { id: 'one-hand', icon: 'hand', label: { en: 'One-handed use', ar: 'استخدام بيد واحدة' } },
  { id: 'offline', icon: 'cloud-off', label: { en: 'Offline essentials', ar: 'أساسيات دون اتصال' } },
  { id: 'caregiver', icon: 'heart-handshake', label: { en: 'Caregiver mode', ar: 'وضع مقدم الرعاية' } },
  { id: 'guide', icon: 'users', label: { en: 'Guide mode', ar: 'وضع المرشد' } },
  { id: 'speech-speed', icon: 'gauge', label: { en: 'Adjustable speech speed', ar: 'سرعة نطق قابلة للضبط' } },
  { id: 'repeat', icon: 'message-square', label: { en: 'Repeat instruction', ar: 'إعادة التعليمات' } },
  { id: 'reduced-motion', icon: 'type', label: { en: 'Reduced motion', ar: 'حركة مخفّفة' } },
  { id: 'large-text', icon: 'type', label: { en: 'Large-text mode', ar: 'وضع النص الكبير' } },
]

export type PreviewMode = 'standard' | 'large-text' | 'high-contrast' | 'simplified' | 'voice-first'

export interface PreviewModeOption {
  id: PreviewMode
  label: Bilingual
}

export const previewModes: PreviewModeOption[] = [
  { id: 'standard', label: { en: 'Standard', ar: 'قياسي' } },
  { id: 'large-text', label: { en: 'Large text', ar: 'نص كبير' } },
  { id: 'high-contrast', label: { en: 'High contrast', ar: 'تباين عالٍ' } },
  { id: 'simplified', label: { en: 'Simplified', ar: 'مبسّط' } },
  { id: 'voice-first', label: { en: 'Voice-first', ar: 'الصوت أولًا' } },
]

export const previewContent = {
  title: { en: 'Next step', ar: 'الخطوة التالية' },
  standardBody: {
    en: 'Walk 120 metres to Gate 3, then follow the accessible corridor to the rest area.',
    ar: 'امشِ 120 مترًا إلى البوابة 3، ثم اتبع الممر الميسّر إلى منطقة الاستراحة.',
  },
  simplifiedBody: { en: 'Go right. Gate 3.', ar: 'اتجه يمينًا. البوابة 3.' },
  voiceBody: {
    en: 'Speaking: “Walk one hundred and twenty metres to Gate three…”',
    ar: 'يُنطق الآن: «امشِ مئة وعشرين مترًا إلى البوابة الثالثة…»',
  },
  action: { en: 'Guide me', ar: 'أرشدني' },
  secondary: { en: 'Repeat', ar: 'أعد' },
  meta: { en: 'About 4 minutes · step-free', ar: 'نحو 4 دقائق · بدون درج' },
} as const

export interface AccessibilityProfile {
  id: string
  name: Bilingual
  description: Bilingual
  explanation: Bilingual
  adaptedInstruction: Bilingual
  adaptedMeta: Bilingual
  adaptedUi: {
    titleSize: string
    fontSize: string
    highContrast: boolean
    voicePlaying: boolean
    stepFreeHighlighted: boolean
  }
}

export const accessibilityProfiles: AccessibilityProfile[] = [
  {
    id: 'elderly',
    name: { en: 'Elderly Mode', ar: 'وضع كبار السن' },
    description: {
      en: 'Increases readability and provides voice guidance to reduce cognitive load.',
      ar: 'يزيد من وضوح القراءة ويوفّر إرشادًا صوتيًا لتقليل العبء المعرفي.',
    },
    explanation: {
      en: 'Buttons are expanded to a minimum of 48px, text size is scaled up by 30%, and Huda automatically reads instructions aloud.',
      ar: 'يتم تكبير أزرار اللمس إلى ٤٨ بكسل كحد أدنى، وزيادة حجم النص بنسبة ٣٠٪، وتقوم هُدى بقراءة التعليمات تلقائيًا بصوت واضح.',
    },
    adaptedInstruction: {
      en: 'Walk 120 metres toward Gate 3. Shaded rest benches are available.',
      ar: 'امشِ ١٢٠ مترًا نحو البوابة ٣. تتوفر مقاعد استراحة مظللة.',
    },
    adaptedMeta: {
      en: 'Large Font • Voice Guided • Rest Advisories',
      ar: 'خط كبير • توجيه صوتي • تنبيهات الراحة',
    },
    adaptedUi: {
      titleSize: '1.4rem',
      fontSize: '1.18rem',
      highContrast: false,
      voicePlaying: true,
      stepFreeHighlighted: false,
    },
  },
  {
    id: 'wheelchair',
    name: { en: 'Wheelchair Mode', ar: 'وضع الكرسي المتحرك' },
    description: {
      en: 'Filters all routing instructions to ensure 100% barrier-free paths.',
      ar: 'يُصفّي جميع إرشادات التوجيه لضمان مسارات خالية تمامًا من العوائق.',
    },
    explanation: {
      en: 'Reroutes the pilgrim away from stairs, escalators, and steep inclines, highlighting step-free ramps and wide gates.',
      ar: 'يعيد توجيه الحاج بعيدًا عن الدرج، والسلالم المتحركة، والمنحدرات الشديدة، مع إبراز المنحدرات الممهدة والمداخل الواسعة.',
    },
    adaptedInstruction: {
      en: 'Flat step-free path. 120 metres to Gate 3 via West Ramp.',
      ar: 'مسار ممهد خالٍ من الدرج. ١٢٠ مترًا إلى البوابة ٣ عبر المنحدر الغربي.',
    },
    adaptedMeta: {
      en: 'Step-Free Routing • Width Verified • Low Incline',
      ar: 'مسارات ممهدة • تم التحقق من العرض • ميل خفيف',
    },
    adaptedUi: {
      titleSize: '1.1rem',
      fontSize: '0.95rem',
      highContrast: false,
      voicePlaying: false,
      stepFreeHighlighted: true,
    },
  },
  {
    id: 'visual',
    name: { en: 'Visual Assistance', ar: 'المساعدة البصرية' },
    description: {
      en: 'Adapts UI for high-contrast visibility and screen reader optimization.',
      ar: 'يوائم الواجهة لضمان تباين عالٍ للرؤية والتوافق مع قارئات الشاشة.',
    },
    explanation: {
      en: 'Swaps colors to high-contrast emerald and gold, formats text for screen readers, and activates tactile vibration patterns at turns.',
      ar: 'يستبدل الألوان بتباين عالٍ (زمردي وذهبي)، ويُهيئ النص لقارئات الشاشة، ويُفعّل أنماط اهتزاز حسية عند المنعطفات.',
    },
    adaptedInstruction: {
      en: 'Gate 3 is 120m ahead. Turn right at the tactile path. Phone will vibrate.',
      ar: 'البوابة ٣ على بعد ١٢٠م أمامك. انعطف يمينًا عند المسار الحسي. سيهتز الهاتف.',
    },
    adaptedMeta: {
      en: 'High Contrast Mode • Audio Screen Reader • Haptic Alerts',
      ar: 'وضع التباين العالي • قارئ الشاشة • تنبيهات الاهتزاز',
    },
    adaptedUi: {
      titleSize: '1.15rem',
      fontSize: '1rem',
      highContrast: true,
      voicePlaying: true,
      stepFreeHighlighted: false,
    },
  },
  {
    id: 'simplified',
    name: { en: 'Simplified Language', ar: 'اللغة المبسطة' },
    description: {
      en: 'Reduces language complexity to basic terms and highly direct instructions.',
      ar: 'يُبسّط المصطلحات اللغوية المعقدة إلى عبارات أساسية وإرشادات مباشرة للغاية.',
    },
    explanation: {
      en: 'Removes extraneous distance numbers and complex terminology. Employs direct visual indicators and simplified Arabic/English.',
      ar: 'يزيل تفاصيل المسافات غير الضرورية والمصطلحات المعقدة. يعتمد على اتجاهات مرئية مباشرة ولغة مبسطة.',
    },
    adaptedInstruction: {
      en: 'Go straight. Walk to Gate 3.',
      ar: 'سر مستقيمًا. اذهب إلى البوابة ٣.',
    },
    adaptedMeta: {
      en: 'Easy Read • Core Instructions • Clear Graphics',
      ar: 'سهل القراءة • إرشادات أساسية • رسومات واضحة',
    },
    adaptedUi: {
      titleSize: '1.25rem',
      fontSize: '1.1rem',
      highContrast: false,
      voicePlaying: false,
      stepFreeHighlighted: false,
    },
  },
]
