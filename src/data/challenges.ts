import type { Bilingual } from '../types/content'

export const challengeSection = {
  eyebrow: { en: 'The Challenge', ar: 'التحدي' },
  heading: {
    en: 'The journey becomes difficult when guidance cannot be understood or acted upon.',
    ar: 'تصبح الرحلة صعبة عندما يتعذّر فهم الإرشادات أو العمل بها.',
  },
  lead: {
    en: 'The problem is not always the absence of information. It is the gap between receiving information and safely acting on it.',
    ar: 'المشكلة ليست دائمًا غياب المعلومات، بل الفجوة بين تلقّي المعلومة والعمل بها بأمان.',
  },
} as const

export interface ChallengeCard {
  id: string
  icon: 'languages' | 'accessibility' | 'wifi-off' | 'users'
  title: Bilingual
  body: Bilingual
}

export const challenges: ChallengeCard[] = [
  {
    id: 'language',
    icon: 'languages',
    title: { en: 'Language and literacy', ar: 'اللغة والقراءة' },
    body: {
      en: 'Critical instructions may be missed when they are delivered in unfamiliar or complicated language.',
      ar: 'قد تفوت التعليمات المهمة عندما تصل بلغةٍ غير مألوفة أو بصياغةٍ معقّدة.',
    },
  },
  {
    id: 'accessibility',
    icon: 'accessibility',
    title: { en: 'Accessibility', ar: 'إمكانية الوصول' },
    body: {
      en: 'Elderly and disabled pilgrims may struggle with small controls, visual complexity and multi-step interfaces.',
      ar: 'قد يواجه كبار السن وذوو الإعاقة صعوبة مع الأزرار الصغيرة والواجهات المعقّدة متعددة الخطوات.',
    },
  },
  {
    id: 'connectivity',
    icon: 'wifi-off',
    title: { en: 'Connectivity', ar: 'الاتصال' },
    body: {
      en: 'Weak or unavailable connectivity can interrupt navigation and important journey guidance.',
      ar: 'قد يؤدي ضعف الاتصال أو انقطاعه إلى تعطّل الملاحة وانقطاع إرشادات الرحلة المهمة.',
    },
  },
  {
    id: 'coordination',
    icon: 'users',
    title: { en: 'Assistance coordination', ar: 'تنسيق المساعدة' },
    body: {
      en: 'Families and group leaders may not immediately know when a pilgrim is lost, unwell or requesting support.',
      ar: 'قد لا تعلم العائلات وقادة المجموعات فورًا عندما يتوه أحد الحجاج أو يتوعّك أو يطلب المساعدة.',
    },
  },
]
