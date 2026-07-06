import type { Bilingual } from '../types/content'

export const teamSection = {
  eyebrow: { en: 'Team', ar: 'الفريق' },
  heading: {
    en: 'Built by a multidisciplinary team focused on dignity, safety and inclusion.',
    ar: 'فريق متعدد التخصصات يعمل من أجل الكرامة والسلامة والشمول.',
  },
  collaboration: {
    en: 'We welcome collaboration with accessibility specialists, Hajj and Umrah operators, healthcare professionals, pilgrim guides, researchers and authorised technology partners.',
    ar: 'نرحّب بالتعاون مع مختصي إمكانية الوصول، ومشغّلي الحج والعمرة، والعاملين في الرعاية الصحية، ومرشدي الحجاج، والباحثين، وشركاء التقنية المعتمدين.',
  },
  photoPlaceholder: { en: 'Photo', ar: 'الصورة' },
  linkedinPlaceholder: { en: 'LinkedIn profile', ar: 'حساب لينكد إن' },
} as const

/**
 * Editable placeholders — replace with real team details before presenting.
 * Deliberately generic: no invented names, employers or credentials.
 */
export interface TeamMember {
  id: string
  name: Bilingual
  role: Bilingual
  experience: Bilingual
  contribution: Bilingual
}

export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: { en: '[Full name]', ar: '[الاسم الكامل]' },
    role: { en: 'Product & experience lead', ar: 'قيادة المنتج والتجربة' },
    experience: {
      en: '[Relevant experience — e.g. service design, pilgrim services]',
      ar: '[الخبرة ذات الصلة — مثال: تصميم الخدمات، خدمات ضيوف الرحمن]',
    },
    contribution: {
      en: 'Journey design and product direction',
      ar: 'تصميم الرحلة وتوجيه المنتج',
    },
  },
  {
    id: 'member-2',
    name: { en: '[Full name]', ar: '[الاسم الكامل]' },
    role: { en: 'Engineering lead', ar: 'قيادة الهندسة' },
    experience: {
      en: '[Relevant experience — e.g. mobile, voice or offline-first systems]',
      ar: '[الخبرة ذات الصلة — مثال: أنظمة الجوال أو الصوت أو العمل دون اتصال]',
    },
    contribution: {
      en: 'Prototype architecture and voice interaction',
      ar: 'بنية النموذج الأولي والتفاعل الصوتي',
    },
  },
  {
    id: 'member-3',
    name: { en: '[Full name]', ar: '[الاسم الكامل]' },
    role: { en: 'Accessibility & inclusion specialist', ar: 'اختصاص إمكانية الوصول والشمول' },
    experience: {
      en: '[Relevant experience — e.g. assistive technology, WCAG auditing]',
      ar: '[الخبرة ذات الصلة — مثال: التقنيات المساعدة، تدقيق معايير الوصول]',
    },
    contribution: {
      en: 'Accessibility modes and inclusive research',
      ar: 'أوضاع إمكانية الوصول والبحث الشامل',
    },
  },
  {
    id: 'member-4',
    name: { en: '[Full name]', ar: '[الاسم الكامل]' },
    role: { en: 'Safety & operations advisor', ar: 'استشارات السلامة والتشغيل' },
    experience: {
      en: '[Relevant experience — e.g. crowd safety, healthcare, field operations]',
      ar: '[الخبرة ذات الصلة — مثال: سلامة الحشود، الرعاية الصحية، التشغيل الميداني]',
    },
    contribution: {
      en: 'Escalation design and pilot planning',
      ar: 'تصميم التصعيد وتخطيط التجربة التشغيلية',
    },
  },
]

/* ---- Contact / pilot-interest form ---- */

export const contactSection = {
  eyebrow: { en: 'Contact', ar: 'تواصل معنا' },
  heading: {
    en: 'Interested in the pilot, a partnership or a deeper look?',
    ar: 'مهتم بالتجربة التشغيلية أو بشراكة أو باطلاع أعمق؟',
  },
  fields: {
    name: { en: 'Full name', ar: 'الاسم الكامل' },
    organisation: { en: 'Organisation', ar: 'الجهة' },
    role: { en: 'Role', ar: 'الدور الوظيفي' },
    email: { en: 'Email', ar: 'البريد الإلكتروني' },
    interest: { en: 'Interest type', ar: 'نوع الاهتمام' },
    message: { en: 'Message', ar: 'الرسالة' },
  },
  interestOptions: [
    { value: 'judge', label: { en: 'Competition judge', ar: 'محكّم في المسابقة' } },
    { value: 'operator', label: { en: 'Hajj or Umrah operator', ar: 'مشغّل حج أو عمرة' } },
    {
      value: 'accessibility',
      label: { en: 'Accessibility specialist', ar: 'مختص إمكانية الوصول' },
    },
    { value: 'technology', label: { en: 'Technology partner', ar: 'شريك تقني' } },
    {
      value: 'healthcare',
      label: { en: 'Healthcare or safety specialist', ar: 'مختص رعاية صحية أو سلامة' },
    },
    { value: 'investor', label: { en: 'Investor or accelerator', ar: 'مستثمر أو مسرّعة أعمال' } },
    { value: 'research', label: { en: 'Research collaboration', ar: 'تعاون بحثي' } },
    { value: 'other', label: { en: 'Other', ar: 'أخرى' } },
  ],
  submit: { en: 'Send message', ar: 'أرسل الرسالة' },
  sending: { en: 'Sending…', ar: 'جارٍ الإرسال…' },
  privacyNotice: {
    en: 'Your details are used only to respond to this enquiry. They are never sold or shared beyond that purpose.',
    ar: 'تُستخدم بياناتك للرد على هذا الاستفسار فقط، ولا تُباع أو تُشارك خارج هذا الغرض أبدًا.',
  },
  successTitle: { en: 'Message sent', ar: 'أُرسلت الرسالة' },
  successBody: {
    en: 'Thank you — we will respond as soon as possible.',
    ar: 'شكرًا لك — سنرد في أقرب وقت ممكن.',
  },
  errorRequired: { en: 'This field is required.', ar: 'هذا الحقل مطلوب.' },
  errorEmail: { en: 'Enter a valid email address.', ar: 'أدخل بريدًا إلكترونيًا صحيحًا.' },
  errorSummary: {
    en: 'Please correct the highlighted fields.',
    ar: 'يرجى تصحيح الحقول المحددة.',
  },
  submitFailed: {
    en: 'The form could not be submitted from this environment. On the deployed site, submissions are handled by Netlify Forms. You can also reach us directly by email.',
    ar: 'تعذّر إرسال النموذج من هذه البيئة. في الموقع المنشور تُعالج الرسائل عبر Netlify Forms، ويمكنك أيضًا مراسلتنا مباشرة عبر البريد الإلكتروني.',
  },
} as const
