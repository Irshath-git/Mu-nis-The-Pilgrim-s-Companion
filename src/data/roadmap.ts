import type { Bilingual } from '../types/content'

export const roadmapSection = {
  eyebrow: { en: 'Roadmap', ar: 'خارطة الطريق' },
  heading: {
    en: 'From prototype to a validated ecosystem.',
    ar: 'من نموذج أولي إلى منظومة متحقَّق منها.',
  },
  currentLabel: { en: 'Current stage', ar: 'المرحلة الحالية' },
} as const

export interface RoadmapStage {
  id: string
  number: number
  current?: boolean
  title: Bilingual
  items: Bilingual[]
}

export const roadmapStages: RoadmapStage[] = [
  {
    id: 'prototype',
    number: 1,
    current: true,
    title: { en: 'Prototype', ar: 'النموذج الأولي' },
    items: [
      { en: 'Voice interaction', ar: 'تفاعل صوتي' },
      { en: 'Journey guidance', ar: 'إرشاد الرحلة' },
      { en: 'Accessibility modes', ar: 'أوضاع إمكانية الوصول' },
      { en: 'Offline essentials', ar: 'الأساسيات دون اتصال' },
      { en: 'Assistance flow', ar: 'مسار المساعدة' },
      { en: 'Interactive demonstration', ar: 'عرض تفاعلي' },
      { en: 'Competition submission', ar: 'المشاركة في المسابقة' },
    ],
  },
  {
    id: 'controlled-testing',
    number: 2,
    title: { en: 'Controlled Testing', ar: 'اختبار محكوم' },
    items: [
      { en: 'Pilgrim usability testing', ar: 'اختبار قابلية الاستخدام مع الحجاج' },
      { en: 'Elderly-user testing', ar: 'اختبار مع كبار السن' },
      { en: 'Accessibility review', ar: 'مراجعة إمكانية الوصول' },
      { en: 'Guide feedback', ar: 'ملاحظات المرشدين' },
      { en: 'Operator feedback', ar: 'ملاحظات المشغّلين' },
      { en: 'Multilingual validation', ar: 'تحقق متعدد اللغات' },
      { en: 'Safety scenarios', ar: 'سيناريوهات السلامة' },
      { en: 'Privacy review', ar: 'مراجعة الخصوصية' },
    ],
  },
  {
    id: 'limited-pilot',
    number: 3,
    title: { en: 'Limited Pilot', ar: 'تجربة تشغيلية محدودة' },
    items: [
      { en: 'Selected journey scenarios', ar: 'سيناريوهات رحلة مختارة' },
      { en: 'Controlled operator participation', ar: 'مشاركة مشغّلين بشكل محكوم' },
      { en: 'Operational validation', ar: 'تحقق تشغيلي' },
      { en: 'Defined escalation', ar: 'تصعيد محدد الإجراءات' },
      { en: 'Pilot measurement', ar: 'قياس نتائج التجربة' },
      { en: 'Reliability testing', ar: 'اختبار الموثوقية' },
    ],
  },
  {
    id: 'scaled-ecosystem',
    number: 4,
    title: { en: 'Scaled Ecosystem', ar: 'منظومة قابلة للتوسع' },
    items: [
      { en: 'Secure authorised integrations', ar: 'تكاملات معتمدة وآمنة' },
      { en: 'Institutional deployment', ar: 'نشر مؤسسي' },
      { en: 'Operator coordination', ar: 'تنسيق المشغّلين' },
      { en: 'Extended accessibility support', ar: 'دعم موسّع لإمكانية الوصول' },
      { en: 'Continuous monitoring', ar: 'مراقبة مستمرة' },
      { en: 'Language expansion', ar: 'توسيع اللغات' },
    ],
  },
]

/* ---- Responsible business model ---- */

export const businessSection = {
  eyebrow: { en: 'Sustainable Delivery', ar: 'استدامة التشغيل' },
  heading: {
    en: 'A responsible model for long-term impact.',
    ar: 'نموذج مسؤول لأثرٍ طويل الأمد.',
  },
  pledge: {
    en: 'Core emergency assistance should never depend on a pilgrim’s ability to pay.',
    ar: 'المساعدة الأساسية في الطوارئ يجب ألا تتوقف يومًا على قدرة ضيف الرحمن على الدفع.',
  },
} as const

export interface BusinessStream {
  id: string
  icon: 'building-2' | 'users' | 'accessibility' | 'boxes' | 'bar-chart' | 'heart-handshake'
  title: Bilingual
  body: Bilingual
}

export const businessStreams: BusinessStream[] = [
  {
    id: 'licences',
    icon: 'building-2',
    title: { en: 'B2B operator licences', ar: 'تراخيص للمشغّلين' },
    body: {
      en: 'Licensing for authorised Hajj and Umrah operators serving their pilgrims.',
      ar: 'ترخيص لمشغّلي الحج والعمرة المعتمدين لخدمة حجاجهم ومعتمريهم.',
    },
  },
  {
    id: 'guide-packages',
    icon: 'users',
    title: { en: 'Group-guide coordination packages', ar: 'باقات تنسيق لمرشدي المجموعات' },
    body: {
      en: 'Tools that help guides keep groups informed, connected and supported.',
      ar: 'أدوات تساعد المرشدين على إبقاء المجموعات على اطلاع وتواصل ودعم.',
    },
  },
  {
    id: 'accessibility-modules',
    icon: 'accessibility',
    title: { en: 'Accessibility and safety modules', ar: 'وحدات إمكانية الوصول والسلامة' },
    body: {
      en: 'Specialised capability modules for operators with additional-needs pilgrims.',
      ar: 'وحدات قدرات متخصصة للمشغّلين الذين يخدمون حجاجًا من ذوي الاحتياجات الإضافية.',
    },
  },
  {
    id: 'white-label',
    icon: 'boxes',
    title: { en: 'White-label institutional deployment', ar: 'نشر مؤسسي بعلامة الجهة' },
    body: {
      en: 'Institutional deployments under the partner’s identity where appropriate.',
      ar: 'عمليات نشر مؤسسية بهوية الشريك حيثما كان ذلك مناسبًا.',
    },
  },
  {
    id: 'insights',
    icon: 'bar-chart',
    title: { en: 'Anonymised aggregated insights', ar: 'مؤشرات مجمّعة ومجهولة الهوية' },
    body: {
      en: 'Aggregated operational insights that never identify an individual pilgrim.',
      ar: 'مؤشرات تشغيلية مجمّعة لا تكشف هوية أي ضيف من ضيوف الرحمن.',
    },
  },
  {
    id: 'sponsored',
    icon: 'heart-handshake',
    title: { en: 'Sponsored access', ar: 'وصول مدعوم' },
    body: {
      en: 'Access funded through CSR, charitable or waqf partnerships.',
      ar: 'وصول يُموَّل عبر المسؤولية الاجتماعية أو الشراكات الخيرية أو الوقفية.',
    },
  },
]

export const businessPrinciples: Bilingual[] = [
  {
    en: 'Identifiable personal information must not be sold.',
    ar: 'لا تُباع المعلومات الشخصية التي تكشف الهوية.',
  },
  { en: 'Data collection should be limited.', ar: 'جمع البيانات يبقى في حدوده الدنيا.' },
  {
    en: 'Analytics should be anonymised and aggregated.',
    ar: 'التحليلات تكون مجهولة الهوية ومجمّعة.',
  },
  { en: 'Location sharing must require consent.', ar: 'مشاركة الموقع تتطلب موافقة صريحة.' },
  { en: 'Safety takes priority over monetisation.', ar: 'السلامة مقدَّمة على تحقيق العائد.' },
]
