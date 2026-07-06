import type { Bilingual } from '../types/content'

export const impactSection = {
  eyebrow: { en: 'Target Impact', ar: 'الأثر المستهدف' },
  heading: {
    en: 'Designed to improve clarity, independence and confidence.',
    ar: 'صُمم لتعزيز الوضوح والاستقلالية والثقة.',
  },
  outcomesLabel: { en: 'Target outcomes', ar: 'نتائج مستهدفة' },
  metricsHeading: { en: 'Proposed pilot measurement', ar: 'القياس المقترح في التجربة التشغيلية' },
  metricsNote: {
    en: 'To be measured during a controlled pilot',
    ar: 'تُقاس خلال تجربة تشغيلية محكومة',
  },
  closing: {
    en: 'MUNIS will measure whether guidance was understood and acted upon—not only whether it was delivered.',
    ar: 'سيقيس مُؤْنِس ما إذا كانت الإرشادات قد فُهمت وطُبِّقت — لا ما إذا كانت قد وصلت فحسب.',
  },
} as const

export interface OutcomeCard {
  id: string
  icon: 'zap' | 'person-standing' | 'route' | 'users' | 'heart'
  text: Bilingual
}

export const targetOutcomes: OutcomeCard[] = [
  {
    id: 'understanding',
    icon: 'zap',
    text: {
      en: 'Faster understanding of important guidance',
      ar: 'فهم أسرع للإرشادات المهمة',
    },
  },
  {
    id: 'independence',
    icon: 'person-standing',
    text: {
      en: 'Greater independence for elderly and disabled pilgrims',
      ar: 'استقلالية أكبر لكبار السن وذوي الإعاقة',
    },
  },
  {
    id: 'confusion',
    icon: 'route',
    text: {
      en: 'Reduced confusion during route changes',
      ar: 'التباس أقل عند تغيّر المسارات',
    },
  },
  {
    id: 'coordination',
    icon: 'users',
    text: {
      en: 'Stronger family and guide coordination',
      ar: 'تنسيق أقوى بين العائلة والمرشد',
    },
  },
  {
    id: 'inclusion',
    icon: 'heart',
    text: {
      en: 'More inclusive participation throughout the journey',
      ar: 'مشاركة أكثر شمولًا على امتداد الرحلة',
    },
  },
]

export const pilotMetrics: Bilingual[] = [
  { en: 'Instruction comprehension', ar: 'استيعاب التعليمات' },
  { en: 'Task completion', ar: 'إتمام المهام' },
  { en: 'Route completion', ar: 'إتمام المسارات' },
  { en: 'Offline task success', ar: 'نجاح المهام دون اتصال' },
  { en: 'Assistance response time', ar: 'زمن الاستجابة للمساعدة' },
  { en: 'Accessible-route completion', ar: 'إتمام المسارات الميسّرة' },
  { en: 'User confidence', ar: 'ثقة المستخدم' },
  { en: 'Family or guide reconnection', ar: 'إعادة الوصل بالعائلة أو المرشد' },
  { en: 'Escalation resolution', ar: 'حسم حالات التصعيد' },
  { en: 'Repeat-instruction frequency', ar: 'معدل طلب إعادة التعليمات' },
]
