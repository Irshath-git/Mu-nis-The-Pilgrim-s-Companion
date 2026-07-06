import type { Bilingual } from '../types/content'

export const finalCta = {
  headline: {
    en: 'Let every pilgrim move with clarity, dignity and confidence.',
    ar: 'ليتحرك كل ضيف من ضيوف الرحمن بوضوحٍ وكرامةٍ وثقة.',
  },
  supporting: {
    en: 'MUNIS transforms trusted guidance into personal companionship throughout the sacred journey.',
    ar: 'يحوِّل مُؤْنِس الإرشادات الموثوقة إلى رفقةٍ شخصية طوال الرحلة المباركة.',
  },
} as const

export const footer = {
  summary: {
    en: 'A voice-first, offline-ready and accessibility-first AI companion helping Hajj and Umrah pilgrims understand and act on trusted journey guidance.',
    ar: 'رفيق ذكي يعتمد الصوت أولًا ويعمل دون اتصال، يساعد ضيوف الرحمن في الحج والعمرة على فهم إرشادات الرحلة الموثوقة والعمل بها.',
  },
  linksHeading: { en: 'Explore', ar: 'استكشف' },
  links: [
    { id: 'overview', label: { en: 'Overview', ar: 'نظرة عامة' } },
    { id: 'accessibility', label: { en: 'Accessibility', ar: 'إمكانية الوصول' } },
    { id: 'technology', label: { en: 'Technology', ar: 'التقنية' } },
    { id: 'roadmap', label: { en: 'Roadmap', ar: 'خارطة الطريق' } },
    { id: 'privacy', label: { en: 'Privacy', ar: 'الخصوصية' } },
    { id: 'contact', label: { en: 'Contact', ar: 'تواصل معنا' } },
  ] satisfies { id: string; label: Bilingual }[],
  statusHeading: { en: 'Project status', ar: 'حالة المشروع' },
  disclaimer: {
    en: 'MUNIS is currently a prototype. Safety, operational, routing, crowd and emergency integrations require testing, validation and approval from relevant authorities and service providers.',
    ar: 'مُؤْنِس حاليًا نموذج أولي. تتطلب تكاملات السلامة والتشغيل والمسارات والحشود والطوارئ اختبارًا وتحققًا واعتمادًا من الجهات المختصة ومزوّدي الخدمات المعنيين.',
  },
  copyright: {
    en: 'MUNIS prototype — built for competition demonstration.',
    ar: 'نموذج مُؤْنِس الأولي — أُعدّ لأغراض العرض في المسابقة.',
  },
} as const
