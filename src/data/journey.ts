import type { Bilingual } from '../types/content'

export const journeySection = {
  eyebrow: { en: 'Across the Journey', ar: 'عبر الرحلة' },
  heading: {
    en: 'A companion throughout the entire sacred journey.',
    ar: 'رفيقٌ على امتداد الرحلة المباركة كلها.',
  },
  stageLabel: { en: 'Journey stages', ar: 'مراحل الرحلة' },
} as const

export interface JourneyStage {
  id: string
  icon:
    | 'clipboard-list'
    | 'plane-landing'
    | 'building'
    | 'list-checks'
    | 'footprints'
    | 'users'
    | 'hand-helping'
    | 'plane-takeoff'
  title: Bilingual
  items: Bilingual[]
}

export const journeyStages: JourneyStage[] = [
  {
    id: 'before-arrival',
    icon: 'clipboard-list',
    title: { en: 'Before arrival', ar: 'قبل الوصول' },
    items: [
      { en: 'Preparation checklist', ar: 'قائمة الاستعداد' },
      { en: 'Document reminders', ar: 'تذكيرات الوثائق' },
      { en: 'Ihram guidance', ar: 'إرشادات الإحرام' },
      { en: 'Accessibility preference setup', ar: 'إعداد تفضيلات إمكانية الوصول' },
      { en: 'Family and group connection', ar: 'ربط العائلة والمجموعة' },
      { en: 'Offline-content download', ar: 'تنزيل المحتوى للعمل دون اتصال' },
    ],
  },
  {
    id: 'arrival',
    icon: 'plane-landing',
    title: { en: 'Arrival', ar: 'الوصول' },
    items: [
      { en: 'Voice-based arrival guidance', ar: 'إرشاد صوتي عند الوصول' },
      { en: 'Transport information', ar: 'معلومات النقل' },
      { en: 'Group meeting point', ar: 'نقطة تجمع المجموعة' },
      { en: 'Luggage reminder', ar: 'تذكير بالأمتعة' },
      { en: 'Offline hotel directions', ar: 'اتجاهات الفندق دون اتصال' },
    ],
  },
  {
    id: 'accommodation',
    icon: 'building',
    title: { en: 'Accommodation', ar: 'السكن' },
    items: [
      { en: 'Saved hotel location', ar: 'موقع الفندق المحفوظ' },
      { en: 'Return guidance', ar: 'إرشادات العودة إلى السكن' },
      { en: 'Group-guide contact', ar: 'التواصل مع مرشد المجموعة' },
      { en: 'Daily reminders', ar: 'تذكيرات يومية' },
      { en: 'Nearby support points', ar: 'نقاط الدعم القريبة' },
    ],
  },
  {
    id: 'ritual-preparation',
    icon: 'list-checks',
    title: { en: 'Ritual preparation', ar: 'الاستعداد للمناسك' },
    items: [
      { en: 'Step-by-step preparation', ar: 'استعداد خطوة بخطوة' },
      { en: 'Ritual checklist', ar: 'قائمة المناسك' },
      { en: 'Voice guidance', ar: 'إرشاد صوتي' },
      { en: 'Simplified mode', ar: 'الوضع المبسّط' },
      { en: 'Personal reminders', ar: 'تذكيرات شخصية' },
    ],
  },
  {
    id: 'ritual-journey',
    icon: 'footprints',
    title: { en: 'Ritual journey', ar: 'رحلة المناسك' },
    items: [
      { en: 'Contextual ritual guidance', ar: 'إرشاد مناسك حسب السياق' },
      { en: 'Progress confirmation', ar: 'تأكيد التقدم' },
      { en: 'Hydration reminders', ar: 'تذكيرات شرب الماء' },
      { en: 'Rest reminders', ar: 'تذكيرات الراحة' },
      { en: 'Accessible instructions', ar: 'تعليمات ميسّرة' },
      { en: 'Repeat guidance', ar: 'إعادة الإرشاد' },
    ],
  },
  {
    id: 'crowd-movement',
    icon: 'users',
    title: { en: 'Crowd movement', ar: 'حركة الحشود' },
    items: [
      { en: 'Crowd-awareness notification', ar: 'تنبيه بحالة الازدحام' },
      { en: 'Calm alternative route', ar: 'مسار بديل أكثر هدوءًا' },
      { en: 'Accessible movement option', ar: 'خيار تنقّل ميسّر' },
      { en: 'Group coordination', ar: 'تنسيق المجموعة' },
      { en: 'Saved meeting point', ar: 'نقطة التجمع المحفوظة' },
      { en: 'Assistance request', ar: 'طلب المساعدة' },
    ],
  },
  {
    id: 'assistance',
    icon: 'hand-helping',
    title: { en: 'Assistance', ar: 'المساعدة' },
    items: [
      { en: 'Voice-triggered request', ar: 'طلب مساعدة بالصوت' },
      { en: 'One-tap support', ar: 'دعم بلمسة واحدة' },
      { en: 'Consent-based location sharing', ar: 'مشاركة الموقع بعد الموافقة' },
      { en: 'Guide notification', ar: 'إشعار المرشد' },
      {
        en: 'Instructions while support is arranged',
        ar: 'تعليمات ريثما يُرتَّب الدعم',
      },
    ],
  },
  {
    id: 'return-journey',
    icon: 'plane-takeoff',
    title: { en: 'Return journey', ar: 'رحلة العودة' },
    items: [
      { en: 'Departure checklist', ar: 'قائمة المغادرة' },
      { en: 'Transport reminders', ar: 'تذكيرات النقل' },
      { en: 'Saved documents', ar: 'الوثائق المحفوظة' },
      { en: 'Group confirmation', ar: 'تأكيد المجموعة' },
      { en: 'Journey completion summary', ar: 'ملخص إتمام الرحلة' },
    ],
  },
]
