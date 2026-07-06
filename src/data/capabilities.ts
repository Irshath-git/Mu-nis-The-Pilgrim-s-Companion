import type { Bilingual, MaturityLevel } from '../types/content'

export const capabilitySection = {
  eyebrow: { en: 'Safety Intelligence', ar: 'ذكاء السلامة' },
  heading: {
    en: 'Guidance that responds before confusion becomes danger.',
    ar: 'إرشاد يستجيب قبل أن يتحول الالتباس إلى خطر.',
  },
  flowLabel: {
    en: 'How MUNIS turns information into safe action',
    ar: 'كيف يحوّل مُؤْنِس المعلومة إلى تصرف آمن',
  },
  honesty: {
    en: 'Capabilities are labelled by maturity. Nothing shown here implies an existing official integration.',
    ar: 'القدرات مصنّفة حسب مستوى نضجها، ولا يعني أيٌّ مما يُعرض هنا وجود تكامل رسمي قائم.',
  },
} as const

export const safetyFlow: Bilingual[] = [
  { en: 'Trusted information', ar: 'معلومات موثوقة' },
  { en: 'Context interpretation', ar: 'تفسير السياق' },
  { en: 'Personalised instruction', ar: 'تعليمات مخصّصة' },
  { en: 'Understanding confirmation', ar: 'تأكيد الفهم' },
  { en: 'Human escalation when required', ar: 'تصعيد بشري عند الحاجة' },
]

export interface CapabilityGroup {
  level: MaturityLevel
  title: Bilingual
  description: Bilingual
  items: Bilingual[]
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    level: 'prototype',
    title: { en: 'Prototype', ar: 'النموذج الأولي' },
    description: {
      en: 'Demonstrated today in the interactive prototype.',
      ar: 'قدرات معروضة اليوم في النموذج الأولي التفاعلي.',
    },
    items: [
      { en: 'Voice-guided assistance', ar: 'مساعدة موجهة بالصوت' },
      { en: 'Accessibility preferences', ar: 'تفضيلات إمكانية الوصول' },
      { en: 'Offline essentials', ar: 'الأساسيات دون اتصال' },
      { en: 'Saved meeting points', ar: 'نقاط تجمع محفوظة' },
      { en: 'Assistance request flow', ar: 'مسار طلب المساعدة' },
      {
        en: 'Family and guide connection concept',
        ar: 'مفهوم ربط العائلة والمرشد',
      },
      { en: 'Simplified route guidance', ar: 'إرشاد مسارات مبسّط' },
      { en: 'Journey-stage reminders', ar: 'تذكيرات مراحل الرحلة' },
    ],
  },
  {
    level: 'pilot',
    title: { en: 'Planned Pilot', ar: 'التجربة التشغيلية المخطَّطة' },
    description: {
      en: 'To be validated with pilgrims, guides and operators in a controlled pilot.',
      ar: 'سيجري التحقق منها مع الحجاج والمرشدين والمشغّلين في تجربة تشغيلية محكومة.',
    },
    items: [
      { en: 'Heat-risk guidance', ar: 'إرشادات مخاطر الحرارة' },
      { en: 'Location-aware prompts', ar: 'تنبيهات مرتبطة بالموقع' },
      { en: 'Accessible rerouting', ar: 'إعادة توجيه ميسّرة' },
      { en: 'Group-guide coordination', ar: 'تنسيق مرشدي المجموعات' },
      {
        en: 'Controlled crowd-awareness scenarios',
        ar: 'سيناريوهات محكومة للوعي بالحشود',
      },
      { en: 'Operator assistance workflow', ar: 'مسار مساعدة عبر المشغّل' },
      { en: 'Defined escalation procedure', ar: 'إجراء تصعيد محدد' },
      { en: 'Multilingual validation', ar: 'تحقق متعدد اللغات' },
    ],
  },
  {
    level: 'future',
    title: { en: 'Future Authorised Integration', ar: 'التكامل المستقبلي المعتمد' },
    description: {
      en: 'Possible only with formal authorisation from relevant authorities and providers.',
      ar: 'لا تتم إلا بتفويض رسمي من الجهات المختصة ومزوّدي الخدمات.',
    },
    items: [
      { en: 'Live operational information', ar: 'معلومات تشغيلية مباشرة' },
      { en: 'Official routing information', ar: 'معلومات المسارات الرسمية' },
      { en: 'Emergency-service workflows', ar: 'مسارات خدمات الطوارئ' },
      { en: 'Authorised transport information', ar: 'معلومات نقل معتمدة' },
      {
        en: 'Secure institutional data exchange',
        ar: 'تبادل بيانات مؤسسي آمن',
      },
      { en: 'Verified responder coordination', ar: 'تنسيق مستجيبين معتمدين' },
      { en: 'Approved sensor or IoT feeds', ar: 'مصادر استشعار معتمدة' },
      { en: 'Authorised operator dashboards', ar: 'لوحات تحكم معتمدة للمشغّلين' },
    ],
  },
]
