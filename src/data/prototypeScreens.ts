import type { Bilingual } from '../types/content'

export const prototypeSection = {
  eyebrow: { en: `Experience Mu'nis`, ar: 'جرِّب مُؤْنِس' },
  heading: {
    en: 'See how guidance becomes personal assistance.',
    ar: 'شاهد كيف يتحول الإرشاد إلى مساعدة شخصية.',
  },
  notice: {
    en: `This interactive experience demonstrates the proposed Mu'nis journey. Live operational, routing, crowd and emergency integrations require testing, validation and authorisation.`,
    ar: 'تعرض هذه التجربة التفاعلية رحلة مُؤْنِس المقترحة. وتتطلب التكاملات المباشرة للتشغيل والمسارات والحشود والطوارئ اختبارًا وتحققًا وتفويضًا.',
  },
  screenListLabel: { en: 'Prototype screens', ar: 'شاشات النموذج الأولي' },
  previous: { en: 'Previous screen', ar: 'الشاشة السابقة' },
  next: { en: 'Next screen', ar: 'الشاشة التالية' },
  screenOf: { en: 'Screen', ar: 'الشاشة' },
  of: { en: 'of', ar: 'من' },
  simulateOffline: { en: 'Simulate offline mode', ar: 'حاكِ وضع عدم الاتصال' },
  offlineExplainer: {
    en: 'Offline: cached content stays available and is labelled; live information is clearly marked as last-updated.',
    ar: 'دون اتصال: يبقى المحتوى المحفوظ متاحًا ومُعلَّمًا، وتُوسم المعلومات المباشرة بوقت آخر تحديث.',
  },
} as const

export interface ScreenMeta {
  id: string
  name: Bilingual
}

export const screenList: ScreenMeta[] = [
  { id: 'home', name: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'voice', name: { en: 'Voice Companion', ar: 'الرفيق الصوتي' } },
  { id: 'heat', name: { en: 'Heat & Wellbeing', ar: 'الحرارة والعافية' } },
  { id: 'route', name: { en: 'Accessible Route', ar: 'المسار الميسّر' } },
  { id: 'crowd', name: { en: 'Crowd Guidance', ar: 'إرشاد الحشود' } },
  { id: 'lost', name: { en: 'Lost or Separated', ar: 'التوهان أو الانفصال' } },
  { id: 'assist', name: { en: 'Assistance', ar: 'المساعدة' } },
]

export const homeScreen = {
  greeting: { en: 'Assalamu Alaikum, Ahmad', ar: 'السلام عليكم، أحمد' },
  stageLabel: { en: 'Current stage', ar: 'المرحلة الحالية' },
  stageValue: { en: 'Ritual journey · Day 10 · Mina', ar: 'رحلة المناسك · اليوم العاشر · منى' },
  speak: { en: `Speak to Huda`, ar: 'تحدث إلى هوده' },
  todayLabel: { en: 'Today’s essential actions', ar: 'مهام اليوم الأساسية' },
  today: [
    { en: 'Drink water every 30 minutes', ar: 'اشرب الماء كل 30 دقيقة' },
    { en: 'Group departs for Jamarat at 16:30', ar: 'تتحرك المجموعة إلى الجمرات في 16:30' },
    { en: 'Rest before the afternoon walk', ar: 'استرح قبل مسير العصر' },
  ],
  progressLabel: { en: 'Journey progress', ar: 'تقدّم الرحلة' },
  progressValue: { en: '6 of 10 days', ar: '6 من 10 أيام' },
  accessibilityMode: { en: 'Large text · Voice', ar: 'نص كبير · صوت' },
  assistShortcut: { en: 'I need assistance', ar: 'أحتاج مساعدة' },
  offlinePill: { en: 'Offline essentials saved', ar: 'الأساسيات محفوظة دون اتصال' },
  onlinePill: { en: 'Connected', ar: 'متصل' },
} as const

export const voiceScreen = {
  title: { en: 'Voice Companion', ar: 'الرفيق الصوتي' },
  idleHint: { en: 'Tap and ask your question', ar: 'اضغط واسأل سؤالك' },
  ask: { en: `Ask Huda`, ar: 'اسأل هُدى' },
  listening: { en: 'Huda is listening…', ar: 'هُدى تستمع…' },
  processing: { en: 'Huda is understanding…', ar: 'هُدى تفهم سؤالك…' },
  question: { en: 'Where should I go next?', ar: 'إلى أين أذهب الآن؟' },
  youAsked: { en: 'You asked', ar: 'سألت' },
  munisSays: { en: `Huda answers`, ar: 'تُجيب هُدى' },
  response: {
    en: 'Your group is moving toward Mina Gate 3. Follow the green route. It is approximately eight minutes away.',
    ar: 'مجموعتك تتحرك نحو بوابة منى رقم 3. اتبع المسار الأخضر؛ يبعد نحو ثماني دقائق.',
  },
  repeat: { en: 'Repeat', ar: 'أعد' },
  askAgain: { en: 'Ask again', ar: 'اسأل مجددًا' },
} as const

export const heatScreen = {
  title: { en: 'Heat & Wellbeing', ar: 'الحرارة والعافية' },
  riskLabel: { en: 'Heat risk', ar: 'خطر الحرارة' },
  riskValue: { en: 'High until 16:00', ar: 'مرتفع حتى 16:00' },
  hydration: {
    en: 'Hydration reminder: you last drank 40 minutes ago. Drink water now.',
    ar: 'تذكير بالترطيب: شربت آخر مرة قبل 40 دقيقة. اشرب الماء الآن.',
  },
  restLabel: { en: 'Nearest shaded rest area', ar: 'أقرب استراحة مظللة' },
  restMeta: { en: '80 m · about 2 minutes', ar: '80 م · نحو دقيقتين' },
  guideMe: { en: 'Guide me', ar: 'أرشدني' },
  needAssist: { en: 'I need assistance', ar: 'أحتاج مساعدة' },
  guiding: {
    en: 'Guiding you to the rest area. Follow the shaded side of the path.',
    ar: 'أُرشدك إلى الاستراحة. اسلك الجانب المظلل من الطريق.',
  },
} as const

export const routeScreen = {
  title: { en: 'Accessible Route', ar: 'المسار الميسّر' },
  stepFree: { en: 'Step-free', ar: 'بدون درج' },
  wheelchair: { en: 'Wheelchair-friendly', ar: 'مناسب للكرسي المتحرك' },
  timeLabel: { en: 'Estimated mobility time', ar: 'الزمن التقديري للتنقل' },
  timeValue: { en: '11 minutes', ar: '11 دقيقة' },
  crowdLabel: { en: 'Crowd level', ar: 'مستوى الازدحام' },
  crowdValue: { en: 'Low', ar: 'منخفض' },
  restPoint: { en: 'Rest point midway', ar: 'استراحة في منتصف المسار' },
  confirm: { en: 'Confirm route', ar: 'أكّد المسار' },
  confirmed: { en: 'Route confirmed', ar: 'تم تأكيد المسار' },
  confirmedNote: {
    en: 'Guidance will continue with spoken and haptic cues.',
    ar: 'سيستمر الإرشاد بتنبيهات صوتية واهتزازية.',
  },
  repeat: { en: 'Repeat instruction', ar: 'أعد التعليمات' },
  spokenInstruction: {
    en: '“Follow the level path to Gate 3, then keep right toward the shaded corridor.”',
    ar: '«اتبع الممر المستوي إلى البوابة 3، ثم الزم اليمين نحو الممر المظلل.»',
  },
} as const

export const crowdScreen = {
  title: { en: 'Crowd Guidance', ar: 'إرشاد الحشود' },
  currentLabel: { en: 'Current route', ar: 'المسار الحالي' },
  currentValue: { en: 'Busy and slowing near Gate 2', ar: 'مزدحم ويتباطأ قرب البوابة 2' },
  altLabel: { en: 'Calmer alternative', ar: 'بديل أكثر هدوءًا' },
  altValue: { en: 'Adds about 4 minutes', ar: 'يضيف نحو 4 دقائق' },
  explanation: {
    en: 'There is no danger. The calmer route avoids the busiest section and has shade and rest points.',
    ar: 'لا خطر عليك. المسار الأهدأ يتجنب أكثر المقاطع ازدحامًا وفيه ظل ونقاط استراحة.',
  },
  continueBtn: { en: 'Continue current route', ar: 'واصل المسار الحالي' },
  calmerBtn: { en: 'Choose calmer route', ar: 'اختر المسار الأهدأ' },
  contactGuide: { en: 'Contact guide', ar: 'تواصل مع المرشد' },
  continueStatus: {
    en: 'Continuing current route. Keep to the side and follow your group.',
    ar: 'ستواصل المسار الحالي. الزم الجانب واتبع مجموعتك.',
  },
  calmerStatus: {
    en: 'Calmer route selected. New arrival time: about 24 minutes.',
    ar: 'اختير المسار الأهدأ. زمن الوصول الجديد: نحو 24 دقيقة.',
  },
  guideStatus: {
    en: 'Your guide has been notified and will call you shortly.',
    ar: 'أُبلغ مرشدك وسيتصل بك قريبًا.',
  },
} as const

export const lostScreen = {
  title: { en: 'Lost or Separated', ar: 'التوهان أو الانفصال' },
  reassure: {
    en: 'You are safe. Choose one action below.',
    ar: 'أنت بأمان. اختر إجراءً واحدًا مما يلي.',
  },
  options: {
    guide: { en: 'Contact group guide', ar: 'تواصل مع مرشد المجموعة' },
    location: { en: 'Share location', ar: 'شارك موقعك' },
    meeting: { en: 'Navigate to saved meeting point', ar: 'انتقل إلى نقطة التجمع المحفوظة' },
    sound: { en: 'Play audible identification', ar: 'شغّل صوت التعريف' },
    qr: { en: 'Identification QR demonstration', ar: 'عرض رمز QR التعريفي' },
    assist: { en: 'Request human assistance', ar: 'اطلب مساعدة بشرية' },
  },
  consentTitle: { en: 'Share your location?', ar: 'مشاركة موقعك؟' },
  consentBody: {
    en: 'Your live location will be visible to your group guide for 30 minutes. You can stop sharing at any time.',
    ar: 'سيتمكن مرشد مجموعتك من رؤية موقعك المباشر لمدة 30 دقيقة، ويمكنك إيقاف المشاركة في أي وقت.',
  },
  consentAgree: { en: 'Share for 30 minutes', ar: 'شارك لمدة 30 دقيقة' },
  consentCancel: { en: 'Cancel', ar: 'إلغاء' },
  guideStatus: {
    en: 'Guide notified. Amir will call you within two minutes.',
    ar: 'أُبلغ المرشد. سيتصل بك عامر خلال دقيقتين.',
  },
  locationStatus: {
    en: 'Location shared with your guide for 30 minutes.',
    ar: 'شوركَ موقعك مع مرشدك لمدة 30 دقيقة.',
  },
  meetingStatus: {
    en: 'Guiding you to the saved meeting point: Mina Gate 3 plaza, about 6 minutes.',
    ar: 'أُرشدك إلى نقطة التجمع المحفوظة: ساحة بوابة منى 3، نحو 6 دقائق.',
  },
  soundStatus: {
    en: 'Playing a gentle identification sound so nearby companions can find you.',
    ar: 'يُشغَّل صوت تعريف لطيف ليتمكن المرافقون القريبون من إيجادك.',
  },
  soundStop: { en: 'Stop sound', ar: 'أوقف الصوت' },
  qrStatus: {
    en: 'Show this code to any authorised helper. It shares your group and guide contact — demonstration only.',
    ar: 'أظهر هذا الرمز لأي مساعد معتمد؛ يعرض مجموعتك وبيانات مرشدك — للعرض فقط.',
  },
} as const

export const assistScreen = {
  title: { en: 'Assistance', ar: 'المساعدة' },
  lead: { en: 'What do you need help with?', ar: 'بمَ تحتاج المساعدة؟' },
  options: {
    medical: { en: 'Medical assistance', ar: 'مساعدة طبية' },
    mobility: { en: 'Mobility assistance', ar: 'مساعدة على التنقل' },
    translation: { en: 'Translation assistance', ar: 'مساعدة في الترجمة' },
    document: { en: 'Lost document', ar: 'وثيقة مفقودة' },
    item: { en: 'Lost item', ar: 'غرض مفقود' },
    leader: { en: 'Contact group leader', ar: 'تواصل مع قائد المجموعة' },
  },
  emergency: { en: 'Emergency', ar: 'طوارئ' },
  emergencyNote: {
    en: 'In the released product this would connect to authorised emergency workflows.',
    ar: 'في المنتج النهائي سيرتبط هذا بمسارات الطوارئ المعتمدة.',
  },
  confirmTitle: { en: 'Confirm request', ar: 'تأكيد الطلب' },
  confirmBody: {
    en: 'Your location and request will be shared with the assistance team and your group guide after you confirm.',
    ar: 'بعد تأكيدك، سيُشارك موقعك وطلبك مع فريق المساعدة ومرشد مجموعتك.',
  },
  confirmBtn: { en: 'Confirm and share', ar: 'أكّد وشارك' },
  backBtn: { en: 'Back', ar: 'رجوع' },
  sentTitle: { en: 'Request sent', ar: 'أُرسل الطلب' },
  sentBody: {
    en: 'Stay where you are if it is safe. The assistance team and your guide have been notified.',
    ar: 'ابقَ مكانك إن كان آمنًا. أُبلغ فريق المساعدة ومرشدك.',
  },
  newRequest: { en: 'New request', ar: 'طلب جديد' },
} as const
