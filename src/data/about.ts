import type { Bilingual } from '../types/content'

export const aboutSection = {
  eyebrow: { en: 'About Us', ar: 'عن التطبيق' },
  heading: {
    en: 'Guidance should feel personal, not complicated.',
    ar: 'يجب أن يكون الإرشاد شخصياً، وليس معقداً.',
  },
  lead: {
    en: "Mu'nis was designed around a simple belief: receiving information is not enough. Every pilgrim must be able to understand it, trust it and act with confidence.",
    ar: 'تأسس مُؤْنِس على إيمان بسيط: تلقي المعلومات ليس كافياً؛ بل يجب على كل حاج أن يفهمها، ويثق بها، ويتصرف بثقة وطمأنينة.',
  },
  vision: {
    en: '',
    ar: '',
  },
  closing: {
    en: '',
    ar: '',
  },
} as const

export interface AboutValue {
  id: string
  icon: 'heart' | 'lightbulb' | 'shield'
  title: Bilingual
  description: Bilingual
}

export const aboutValues: AboutValue[] = [
  {
    id: 'understand-pilgrim',
    icon: 'heart',
    title: { en: 'Understand the pilgrim', ar: 'فهم ضيف الرحمن' },
    description: {
      en: 'Recognise language preference, physical capability, age, and location context instantly.',
      ar: 'التعرف الفوري على تفضيلات اللغة، والقدرة البدنية، والعمر، وسياق الموقع.',
    },
  },
  {
    id: 'adapt-guidance',
    icon: 'lightbulb',
    title: { en: 'Adapt the guidance', ar: 'تكييف الإرشاد' },
    description: {
      en: 'Tailor routing, safety alerts, and cognitive load dynamically to the pilgrim’s profile.',
      ar: 'تخصيص المسارات، وتنبيهات السلامة، والعبء المعرفي ديناميكيًا ليناسب ملف ضيف الرحمن.',
    },
  },
  {
    id: 'confirm-action',
    icon: 'shield',
    title: { en: 'Confirm the next action', ar: 'تأكيد الخطوة التالية' },
    description: {
      en: 'Deliver one clear, actionable instruction at a time, ensuring stress-free progress.',
      ar: 'تقديم إرشاد واحد واضح وقابل للتنفيذ في كل مرة، لضمان الحركة بطمأنينة ودون توتر.',
    },
  },
]
