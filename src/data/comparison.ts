import type { Bilingual } from '../types/content'

export const comparisonSection = {
  eyebrow: { en: 'Why MUNIS', ar: 'لماذا مُؤْنِس' },
  heading: { en: 'Not another information app.', ar: 'ليس مجرد تطبيق معلومات آخر.' },
  lead: {
    en: 'MUNIS is a complementary guidance, accessibility and assistance layer — designed around the moment a pilgrim must act, not only the moment information is published.',
    ar: 'مُؤْنِس طبقة مكمّلة للإرشاد وإمكانية الوصول والمساعدة — صُممت حول اللحظة التي يجب أن يتصرف فيها ضيف الرحمن، لا لحظة نشر المعلومة فقط.',
  },
  conventionalTitle: {
    en: 'Conventional information experience',
    ar: 'تجربة المعلومات التقليدية',
  },
  munisTitle: { en: 'MUNIS', ar: 'مُؤْنِس' },
} as const

export const conventionalPoints: Bilingual[] = [
  { en: 'The pilgrim searches for information.', ar: 'ضيف الرحمن هو من يبحث عن المعلومة.' },
  { en: 'The interface may assume digital literacy.', ar: 'قد تفترض الواجهة إلمامًا رقميًا.' },
  {
    en: 'The same instruction is displayed to everyone.',
    ar: 'تُعرض التعليمات نفسها للجميع بالصيغة نفسها.',
  },
  { en: 'Connectivity may be necessary.', ar: 'قد يكون الاتصال شرطًا للاستخدام.' },
  { en: 'The user interprets the next action.', ar: 'يُترك للمستخدم تفسير الخطوة التالية.' },
  { en: 'Accessibility may be secondary.', ar: 'قد تأتي إمكانية الوصول في مرتبة ثانوية.' },
  { en: 'Assistance may be separate.', ar: 'قد تكون المساعدة في نظام منفصل.' },
  { en: 'Understanding may not be confirmed.', ar: 'قد لا يجري التأكد من الفهم.' },
]

export const munisPoints: Bilingual[] = [
  { en: 'Proactive contextual guidance', ar: 'إرشاد استباقي حسب السياق' },
  { en: 'Voice-first interaction', ar: 'تفاعل بالصوت أولًا' },
  { en: 'Adapted delivery', ar: 'إيصال متكيّف مع كل شخص' },
  { en: 'Essential offline access', ar: 'وصول أساسي دون اتصال' },
  { en: 'Clear next action', ar: 'خطوة تالية واضحة' },
  { en: 'Accessibility at the foundation', ar: 'إمكانية الوصول في الأساس' },
  { en: 'Understanding confirmation', ar: 'تأكيد الفهم' },
  { en: 'Human escalation', ar: 'تصعيد إلى دعم بشري' },
  { en: 'Family and guide coordination', ar: 'تنسيق العائلة والمرشد' },
  { en: 'Journey-stage awareness', ar: 'وعي بمرحلة الرحلة' },
]
