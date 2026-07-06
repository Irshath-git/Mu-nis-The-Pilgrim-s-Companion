export const hero = {
  badge: {
    en: 'Hajj & Umrah Experience Technologies',
    ar: 'تقنيات تجربة الحج والعمرة',
  },
  headline: {
    en: 'Every pilgrim deserves a companion who understands.',
    ar: 'كل ضيفٍ من ضيوف الرحمن يستحق رفيقًا يفهمه.',
  },
  supporting: {
    en: 'MUNIS is a voice-first, offline-ready AI companion that transforms complex journey information into clear, personalised and actionable guidance—regardless of language, literacy, age, disability or connectivity.',
    ar: 'مُؤْنِس رفيق ذكي يعتمد الصوت أولًا ويعمل دون اتصال، يحوِّل معلومات الرحلة المعقدة إلى إرشادات واضحة وشخصية وقابلة للتنفيذ — مهما كانت اللغة أو مستوى القراءة أو العمر أو الإعاقة أو حالة الاتصال.',
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
  listening: { en: 'MUNIS is listening…', ar: 'مُؤْنِس يستمع…' },
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
