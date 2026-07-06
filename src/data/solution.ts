import type { Bilingual } from '../types/content'

export const solutionSection = {
  eyebrow: { en: 'The MUNIS Approach', ar: 'منهجية مُؤْنِس' },
  heading: {
    en: 'One trusted companion. Adapted to every pilgrim.',
    ar: 'رفيق واحد موثوق، يتكيّف مع كل ضيف من ضيوف الرحمن.',
  },
  closing: {
    en: 'MUNIS does not simply display information. It helps the pilgrim understand what to do next.',
    ar: 'مُؤْنِس لا يكتفي بعرض المعلومات، بل يساعد ضيف الرحمن على فهم ما ينبغي فعله تاليًا.',
  },
} as const

export interface SolutionStage {
  id: string
  step: number
  title: Bilingual
  subtitle: Bilingual
  items: Bilingual[]
}

export const solutionStages: SolutionStage[] = [
  {
    id: 'trusted-info',
    step: 1,
    title: { en: 'Trusted information', ar: 'معلومات موثوقة' },
    subtitle: {
      en: 'What the ecosystem communicates',
      ar: 'ما تُبلّغه المنظومة',
    },
    items: [
      { en: 'Safety guidance', ar: 'إرشادات السلامة' },
      { en: 'Route changes', ar: 'تغيّرات المسارات' },
      { en: 'Heat alerts', ar: 'تنبيهات الحرارة' },
      { en: 'Ritual guidance', ar: 'إرشادات المناسك' },
      { en: 'Transport updates', ar: 'مستجدات النقل' },
      { en: 'Group instructions', ar: 'تعليمات المجموعة' },
      { en: 'Emergency information', ar: 'معلومات الطوارئ' },
    ],
  },
  {
    id: 'personal-context',
    step: 2,
    title: { en: 'Personal context', ar: 'السياق الشخصي' },
    subtitle: {
      en: 'What MUNIS understands about the pilgrim',
      ar: 'ما يفهمه مُؤْنِس عن ضيف الرحمن',
    },
    items: [
      { en: 'Preferred language', ar: 'اللغة المفضلة' },
      { en: 'Literacy level', ar: 'مستوى القراءة' },
      { en: 'Journey stage', ar: 'مرحلة الرحلة' },
      { en: 'Location', ar: 'الموقع' },
      { en: 'Mobility requirements', ar: 'متطلبات الحركة' },
      { en: 'Visual or hearing needs', ar: 'الاحتياجات البصرية أو السمعية' },
      { en: 'Connectivity state', ar: 'حالة الاتصال' },
      { en: 'Consent', ar: 'الموافقة' },
      { en: 'Family or group relationship', ar: 'صلة العائلة أو المجموعة' },
    ],
  },
  {
    id: 'actionable-guidance',
    step: 3,
    title: { en: 'Actionable guidance', ar: 'إرشاد قابل للتنفيذ' },
    subtitle: {
      en: 'How the pilgrim receives it',
      ar: 'كيف يتلقّاه ضيف الرحمن',
    },
    items: [
      { en: 'Spoken instruction', ar: 'تعليمات منطوقة' },
      { en: 'Large visual direction', ar: 'اتجاه مرئي كبير' },
      { en: 'Simplified next step', ar: 'خطوة تالية مبسّطة' },
      { en: 'Haptic confirmation', ar: 'تأكيد باللمس والاهتزاز' },
      { en: 'Accessible route', ar: 'مسار ميسّر' },
      { en: 'Offline instruction', ar: 'تعليمات دون اتصال' },
      { en: 'Guide notification', ar: 'إشعار المرشد' },
      { en: 'Human escalation', ar: 'تصعيد إلى دعم بشري' },
    ],
  },
]
