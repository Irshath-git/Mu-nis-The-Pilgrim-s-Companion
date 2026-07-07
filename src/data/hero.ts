export const hero = {
  badge: {
    en: 'AI-powered guidance for every pilgrim',
    ar: 'إرشاد مدعوم بالذكاء الاصطناعي لكل حاج',
  },
  headline: {
    en: 'Every pilgrim deserves a companion who understands.',
    ar: 'كل ضيفٍ من ضيوف الرحمن يستحق رفيقًا يفهمه.',
  },
  supporting: {
    en: "Mu'nis transforms trusted journey information into clear, personalised guidance—spoken by Huda, adapted to each pilgrim and available even when connectivity is limited.",
    ar: 'يحوّل مُؤْنِس معلومات الرحلة الموثوقة إلى إرشاد واضح ومخصص — تنطقه هُدى، ويتكيف مع كل حاج، ويتوفر حتى عند ضعف الاتصال.',
  },
  capabilities: [
    { icon: 'mic', label: { en: 'Voice-first', ar: 'الصوت أولًا' } },
    { icon: 'cloud-off', label: { en: 'Offline-ready', ar: 'يعمل دون اتصال' } },
    { icon: 'accessibility', label: { en: 'Accessibility-first', ar: 'إمكانية الوصول أولًا' } },
    { icon: 'hand-helping', label: { en: 'Human escalation', ar: 'تصعيد إلى دعم بشري' } },
    { icon: 'shield-check', label: { en: 'Privacy by design', ar: 'الخصوصية بالتصميم' } },
  ],
} as const

/** Copy shown inside the hero phone interface. */
export const heroPhone = {
  offlineReady: { en: 'Offline essentials saved', ar: 'الأساسيات محفوظة دون اتصال' },
  stageLabel: { en: 'Current stage', ar: 'المرحلة الحالية' },
  stageValue: { en: 'Ritual journey · Mina', ar: 'رحلة المناسك · منى' },
  /* Huda's cycling listening-state labels (visual demonstration only) */
  hudaStates: {
    idle: { en: 'Huda is with you', ar: 'هُدى معك' },
    listening: { en: 'Huda is listening...', ar: 'هُدى تستمع...' },
    understanding: { en: 'Huda is understanding...', ar: 'هُدى تستوعب...' },
    ready: { en: 'Guidance ready', ar: 'الإرشاد جاهز' },
  },
  heatLabel: { en: 'Heat', ar: 'الحرارة' },
  heatValue: { en: 'High — rest advised', ar: 'مرتفعة — يُنصح بالراحة' },
  crowdLabel: { en: 'Crowd', ar: 'الازدحام' },
  crowdValue: { en: 'Busy ahead', ar: 'ازدحام أمامك' },
  routeTitle: { en: 'Accessible route via Gate 3', ar: 'مسار ميسّر عبر البوابة 3' },
  routeMeta: { en: 'Step-free · 450 m · about 8 min', ar: 'بدون درج · 450 م · نحو 8 دقائق' },
  instruction: {
    en: 'A crowded route is ahead. A calmer accessible path is available 120 metres to your right.',
    ar: 'الطريق أمامك مزدحم. يتوفر مسار ميسّر أكثر هدوءًا على بُعد 120 مترًا إلى يمينك.',
  },
  guideMe: { en: 'Guide me', ar: 'أرشدني' },
  repeat: { en: 'Repeat instruction', ar: 'أعد التعليمات' },
  mapLabel: {
    en: 'Simplified map showing a calm accessible route toward the destination point',
    ar: 'خريطة مبسطة تعرض مسارًا ميسّرًا وهادئًا نحو نقطة الوجهة',
  },
} as const
