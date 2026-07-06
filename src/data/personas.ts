import type { Bilingual } from '../types/content'

export const personalisationSection = {
  eyebrow: { en: 'One Message, Adapted Personally', ar: 'رسالة واحدة، تصل لكلٍّ بطريقته' },
  heading: {
    en: 'The same instruction should not be delivered in the same way to everyone.',
    ar: 'التعليمات نفسها لا ينبغي أن تصل إلى الجميع بالطريقة نفسها.',
  },
  sharedLabel: { en: 'Shared instruction', ar: 'التعليمات المشتركة' },
  sharedInstruction: {
    en: 'The original route is becoming crowded. Use the alternative route on your right.',
    ar: 'المسار الأصلي بدأ يزدحم. استخدم المسار البديل على يمينك.',
  },
  adaptationsLabel: { en: 'How MUNIS adapts the delivery', ar: 'كيف يكيّف مُؤْنِس طريقة الإيصال' },
  closing: {
    en: 'Personalisation should increase independence—not create dependence.',
    ar: 'التخصيص ينبغي أن يعزز الاستقلالية — لا أن يخلق الاعتماد على الآخرين.',
  },
  profilesLabel: { en: 'Choose a pilgrim profile', ar: 'اختر ملف ضيف الرحمن' },
} as const

export interface Persona {
  id: string
  icon: 'person-standing' | 'armchair' | 'eye-off' | 'message-circle'
  name: Bilingual
  /** How the shared instruction is actually rendered for this pilgrim. */
  renderedInstruction: Bilingual
  presentation: 'calm-large' | 'mobility' | 'audio' | 'simple'
  adaptations: Bilingual[]
}

export const personas: Persona[] = [
  {
    id: 'elderly',
    icon: 'person-standing',
    name: { en: 'Elderly first-time pilgrim', ar: 'حاج مسنّ لأول مرة' },
    renderedInstruction: {
      en: 'The path ahead is busy. Please turn right. I will guide you step by step.',
      ar: 'الطريق أمامك مزدحم. من فضلك اتجه يمينًا، وسأرشدك خطوةً خطوة.',
    },
    presentation: 'calm-large',
    adaptations: [
      { en: 'Slower spoken guidance', ar: 'إرشاد صوتي أبطأ' },
      { en: 'Larger text', ar: 'نص أكبر' },
      { en: 'One action at a time', ar: 'إجراء واحد في كل مرة' },
      { en: 'Rest-point details', ar: 'تفاصيل نقاط الاستراحة' },
      { en: 'Repeat option', ar: 'خيار الإعادة' },
    ],
  },
  {
    id: 'wheelchair',
    icon: 'armchair',
    name: { en: 'Wheelchair user', ar: 'مستخدم كرسي متحرك' },
    renderedInstruction: {
      en: 'A step-free route is on your right: level ground, gentle slope, accessible entry at Gate 3. About 11 minutes.',
      ar: 'مسار بدون درج على يمينك: أرض مستوية وميل خفيف، ومدخل ميسّر عند البوابة 3. نحو 11 دقيقة.',
    },
    presentation: 'mobility',
    adaptations: [
      { en: 'Step-free route', ar: 'مسار بدون درج' },
      { en: 'Accessible entry', ar: 'مدخل ميسّر' },
      { en: 'Gradient information', ar: 'معلومات الميل والانحدار' },
      { en: 'Mobility time', ar: 'زمن التنقل الواقعي' },
      { en: 'Rest locations', ar: 'مواقع الاستراحة' },
    ],
  },
  {
    id: 'visual',
    icon: 'eye-off',
    name: { en: 'Visually impaired pilgrim', ar: 'حاج من ذوي الإعاقة البصرية' },
    renderedInstruction: {
      en: 'In twenty steps, turn right at the water station. You will feel two short vibrations at the turn.',
      ar: 'بعد عشرين خطوة، اتجه يمينًا عند محطة المياه. ستشعر باهتزازتين قصيرتين عند المنعطف.',
    },
    presentation: 'audio',
    adaptations: [
      { en: 'Detailed spoken direction', ar: 'اتجاهات منطوقة مفصّلة' },
      { en: 'Haptic-turn representation', ar: 'تمثيل المنعطفات بالاهتزاز' },
      { en: 'Audible landmarks', ar: 'معالم مسموعة' },
      { en: 'Repeat option', ar: 'خيار الإعادة' },
      { en: 'Guide shortcut', ar: 'اختصار الوصول إلى المرشد' },
    ],
  },
  {
    id: 'simplified',
    icon: 'message-circle',
    name: {
      en: 'Pilgrim with limited literacy or unfamiliar language',
      ar: 'حاج محدود القراءة أو بلغة غير مألوفة',
    },
    renderedInstruction: {
      en: 'Go right. Follow the green line.',
      ar: 'اتجه يمينًا. اتبع الخط الأخضر.',
    },
    presentation: 'simple',
    adaptations: [
      { en: 'Short sentence', ar: 'جملة قصيرة' },
      { en: 'Clear arrow', ar: 'سهم واضح' },
      { en: 'Familiar icon', ar: 'أيقونة مألوفة' },
      { en: 'Voice playback', ar: 'تشغيل صوتي' },
      { en: 'Translation', ar: 'ترجمة' },
      { en: 'One next action', ar: 'إجراء تالٍ واحد' },
    ],
  },
]
