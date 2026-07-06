import type { Bilingual, MaturityLevel } from '../types/content'

export const capabilitySection = {
  eyebrow: { en: 'Safety Intelligence', ar: 'ذكاء السلامة' },
  heading: {
    en: 'Guidance that responds before confusion becomes danger.',
    ar: 'إرشاد يستجيب قبل أن يتحول الالتباس إلى خطر.',
  },
  flowLabel: {
    en: `How Mu'nis turns information into safe action`,
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

export interface AdaptationMode {
  id: string
  name: Bilingual
  signals: {
    route: Bilingual
    stage: Bilingual
    profile: Bilingual
    lang: Bilingual
    conn: Bilingual
  }
  hudaResponse: Bilingual
}

export const adaptationModes: AdaptationMode[] = [
  {
    id: 'elderly',
    name: { en: 'Elderly Mode', ar: 'وضع كبار السن' },
    signals: {
      route: { en: 'Route: Crowded', ar: 'المسار: مزدحم' },
      stage: { en: 'Stage: Mina Walk', ar: 'المرحلة: مسار منى' },
      profile: { en: 'Profile: Assist Active', ar: 'الملف: تذكير بالراحة' },
      lang: { en: 'Language: English', ar: 'اللغة: الإنجليزية' },
      conn: { en: 'Connection: Weak', ar: 'الاتصال: ضعيف' },
    },
    hudaResponse: {
      en: 'A calmer step-free route with rest benches is available on your right. It will take approximately three additional minutes.',
      ar: 'يتوفر مسار أكثر هدوءًا وخالٍ من الدرج مع مقاعد للراحة على يمينك. يستغرق ذلك حوالي ثلاث دقائق إضافية.',
    },
  },
  {
    id: 'wheelchair',
    name: { en: 'Wheelchair Mode', ar: 'وضع الكرسي المتحرك' },
    signals: {
      route: { en: 'Route: Steps Ahead', ar: 'المسار: درج أمامك' },
      stage: { en: 'Stage: Mina Gates', ar: 'المرحلة: بوابات منى' },
      profile: { en: 'Profile: Wheelchair', ar: 'الملف: كرسي متحرك' },
      lang: { en: 'Language: Urdu', ar: 'اللغة: الأوردو' },
      conn: { en: 'Connection: Connected', ar: 'الاتصال: متصل' },
    },
    hudaResponse: {
      en: 'A step-free ramp is available 30 metres to your left. Follow the blue arrow. Accessible facilities are nearby.',
      ar: 'يتوفر منحدر ممهد وخالٍ من الدرج على بعد ٣٠ مترًا إلى يسارك. اتبع السهم الأزرق. تتوفر مرافق ميسرة بالقرب منك.',
    },
  },
  {
    id: 'visual',
    name: { en: 'Visual Assistance', ar: 'المساعدة البصرية' },
    signals: {
      route: { en: 'Route: Obstacle', ar: 'المسار: عائق مؤقت' },
      stage: { en: 'Stage: Jamarat', ar: 'المرحلة: الجمرات' },
      profile: { en: 'Profile: Audio + Haptics', ar: 'الملف: صوت واهتزاز' },
      lang: { en: 'Language: Arabic', ar: 'اللغة: العربية' },
      conn: { en: 'Connection: Connected', ar: 'الاتصال: متصل' },
    },
    hudaResponse: {
      en: 'Approaching high density area. Keep right, follow the tactile paving. Huda will vibrate once when it is time to turn.',
      ar: 'تقترب من منطقة عالية الازدحام. الزم اليمين واتبع المسار الحسي. ستهتز هُدى مرة واحدة عندما يحين وقت المنعطف.',
    },
  },
  {
    id: 'simplified',
    name: { en: 'Simplified Language', ar: 'لغة مبسطة' },
    signals: {
      route: { en: 'Route: Rerouted', ar: 'المسار: تحويل اتجاه' },
      stage: { en: 'Stage: Arafat Exit', ar: 'المرحلة: مخرج عرفات' },
      profile: { en: 'Profile: Easy Read', ar: 'الملف: قراءة سهلة' },
      lang: { en: 'Language: Malay', ar: 'اللغة: الملايو' },
      conn: { en: 'Connection: Offline', ar: 'الاتصال: دون اتصال' },
    },
    hudaResponse: {
      en: 'The main road is closed. Walk to the green tents on your right. Your group is waiting for you there.',
      ar: 'الطريق الرئيسي مغلق. سر نحو الخيام الخضراء على يمينك. مجموعتك تنتظرك هناك.',
    },
  },
]
