import type { Bilingual } from '../types/content'

export const accessibilitySection = {
  eyebrow: { en: 'Accessibility by Design', ar: 'إمكانية الوصول بالتصميم' },
  heading: {
    en: 'Accessibility is not an additional feature. It is the foundation of MUNIS.',
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
  { id: 'repeat', icon: 'rotate-ccw', label: { en: 'Repeat instruction', ar: 'إعادة التعليمات' } },
  { id: 'reduced-motion', icon: 'pause', label: { en: 'Reduced motion', ar: 'حركة مخفّفة' } },
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
