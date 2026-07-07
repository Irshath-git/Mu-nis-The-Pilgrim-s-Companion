import type { Bilingual } from '../types/content'

export const finalCta = {
  headline: {
    en: 'Let every pilgrim move with clarity, dignity and confidence.',
    ar: 'ليتحرك كل ضيف من ضيوف الرحمن بوضوحٍ وكرامةٍ وثقة.',
  },
  supporting: {
    en: `Mu'nis transforms trusted guidance into personal companionship throughout the sacred journey.`,
    ar: 'يحوِّل مُؤْنِس الإرشادات الموثوقة إلى رفقةٍ شخصية طوال الرحلة المباركة.',
  },
  earlyAccessLabel: {
    en: 'Request early access',
    ar: 'طلب الوصول المبكر',
  },
  emailPlaceholder: {
    en: 'Enter your email address',
    ar: 'أدخل البريد الإلكتروني',
  },
  notifyBtn: {
    en: 'Notify Me',
    ar: 'أشعرني',
  },
  successMsg: {
    en: "You're on the list! We will notify you when early access opens.",
    ar: 'تم تسجيلك بنجاح! سنقوم بإشعارك فور فتح باب الوصول المبكر.',
  },
  comingSoonStore: {
    en: 'Coming Soon on the',
    ar: 'قريباً على',
  },
  comingSoonPlay: {
    en: 'Coming Soon on',
    ar: 'قريباً على',
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
    { id: 'about', label: { en: 'About Us', ar: 'عن التطبيق' } },
    { id: 'problem', label: { en: 'The Problem', ar: 'المشكلة' } },
    { id: 'solution', label: { en: 'The Solution', ar: 'الحل' } },
    { id: 'how-it-works', label: { en: 'How It Works', ar: 'كيف يعمل' } },
    { id: 'ar-maps', label: { en: 'AR Maps', ar: 'خرائط الواقع المعزز' } },
    { id: 'accessibility', label: { en: 'Accessibility', ar: 'إمكانية الوصول' } },
    { id: 'prototype', label: { en: 'Experience Prototype', ar: 'جرِّب النموذج' } },
  ] satisfies { id: string; label: Bilingual }[],
  disclaimer: {
    en: "Mu'nis is currently a prototype. Live routing, AR, crowd and assistance capabilities require testing, validation and authorised integration.",
    ar: 'مُؤْنِس حالياً نموذج أولي. تتطلب قدرات التوجيه الحي والواقع المعزز وإدارة الحشود والمساعدة اختباراً وتحققاً وتكاملاً معتمداً.',
  },
  copyright: {
    en: "Mu'nis prototype — built for competition demonstration.",
    ar: 'نموذج مُؤْنِس الأولي — أُعدّ لأغراض العرض في المسابقة.',
  },
} as const
