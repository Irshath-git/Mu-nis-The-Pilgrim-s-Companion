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
    title: { en: 'Unfamiliar language', ar: 'لغة غير مألوفة' },
    body: {
      en: 'Instructions cannot be understood when delivered in a language or dialect the pilgrim does not speak.',
      ar: 'لا يمكن فهم الإرشادات عندما تقدم بلغة أو لهجة لا يتحدث بها الحاج.',
    },
  },
  {
    id: 'accessibility',
    icon: 'accessibility',
    title: { en: 'Complex interface', ar: 'واجهة معقدة' },
    body: {
      en: 'Small text, crowded maps, and multi-step menus create high cognitive load and confusion.',
      ar: 'النصوص الصغيرة والخرائط المزدحمة والقوائم متعددة الخطوات تسبب عبئاً معرفياً كبيراً وارتباكاً.',
    },
  },
  {
    id: 'connectivity',
    icon: 'wifi-off',
    title: { en: 'Loss of connectivity', ar: 'انقطاع الاتصال' },
    body: {
      en: 'Crowded areas block mobile networks, making live maps and translation apps completely unusable.',
      ar: 'المناطق المزدحمة تقطع شبكات الهاتف، مما يجعل الخرائط الحية وتطبيقات الترجمة غير قابلة للاستخدام.',
    },
  },
  {
    id: 'coordination',
    icon: 'users',
    title: { en: 'Separated pilgrim', ar: 'انفصال عن المجموعة' },
    body: {
      en: 'Losing visual contact with the group guide leads to panic and dangerous unscheduled movement.',
      ar: 'فقدان الاتصال البصري مع مرشد المجموعة يؤدي إلى الذعر والتحرك العشوائي غير المخطط له.',
    },
  },
]

export const problemSimulator = {
  title: { en: 'Pilgrim Stress Simulator', ar: 'محاكي توتر الحاج' },
  subtitle: {
    en: 'Toggle the real-world barriers a pilgrim faces to see how stress multiplies. Then, see how Mu’nis resolves them.',
    ar: 'فعِّل الحواجز الحقيقية التي يواجهها ضيف الرحمن لترى كيف يتضاعف القلق، ثم شاهد كيف يحلها مُؤْنِس.',
  },
  stressLevel: { en: 'Stress Level', ar: 'مستوى التوتر' },
  stressHigh: { en: 'Critical (Overwhelmed)', ar: 'حرج (ارتباك شديد)' },
  stressLow: { en: 'Calm & Clear (Sakeenah)', ar: 'طمأنينة ووضوح (سكينة)' },
  resolveBtn: { en: "Resolve with Mu'nis", ar: 'بسطها مع مُؤْنِس' },
  resetBtn: { en: 'Reset Scenario', ar: 'إعادة تعيين السيناريو' },
  errors: {
    language: { en: '⚠️ Error: Code 403 Translate Fail', ar: '⚠️ خطأ: فشل الترجمة ٤٠٣' },
    ui: { en: 'Menu 1.4.2 > Sub-items > System Logs', ar: 'القائمة ١.٤.٢ > القوائم الفرعية > السجلات' },
    offline: { en: '❌ No Network. Sync failed.', ar: '❌ لا يوجد اتصال. فشل المزامنة.' },
    lost: { en: '⚠️ Group leader disconnected', ar: '⚠️ فُقد الاتصال بقائد المجموعة' },
  },
  resolvedInstruction: {
    en: 'Your group is 150m ahead. Walk straight. Huda is guiding you.',
    ar: 'مجموعتك على بعد ١٥٠ مترًا أمامك. تابع السير مستقيمًا. هُدى تُرشدك.',
  },
  resolvedSubtext: {
    en: 'Voice assistance active • Offline maps enabled',
    ar: 'المساعد الصوتي نشط • الخرائط دون اتصال مفعّلة',
  },
} as const
