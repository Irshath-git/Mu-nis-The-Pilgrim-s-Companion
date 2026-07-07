import type { Bilingual } from '../types/content'

/**
 * Global interface strings shared across the shell (navigation, CTAs,
 * common labels). Section-specific copy lives in that section's data file.
 * Brand rule: the Arabic name is always exactly مُؤْنِس.
 */

export const brand = {
  nameEn: "Mu'nis",
  nameAr: 'مُؤْنِس',
  taglineEn: 'Your companion at every step.',
  taglineAr: 'رفيقك في كل خطوة',
  productTitle: {
    en: 'The Pilgrim’s Companion',
    ar: 'رفيق ضيوف الرحمن',
  } satisfies Bilingual,
}

export interface NavItem {
  id: string
  label: Bilingual
}

export const navItems: NavItem[] = [
  { id: 'overview', label: { en: 'Overview', ar: 'نظرة عامة' } },
  { id: 'about', label: { en: 'About Us', ar: 'عن التطبيق' } },
  { id: 'problem', label: { en: 'The Problem', ar: 'المشكلة' } },
  { id: 'solution', label: { en: 'The Solution', ar: 'الحل' } },
  { id: 'how-it-works', label: { en: 'How It Works', ar: 'كيف يعمل' } },
  { id: 'ar-maps', label: { en: 'AR Maps', ar: 'خرائط الواقع المعزز' } },
  { id: 'accessibility', label: { en: 'Accessibility', ar: 'إمكانية الوصول' } },
  { id: 'prototype', label: { en: 'Experience Prototype', ar: 'جرِّب النموذج' } },
]

export const ui = {
  skipToContent: { en: 'Skip to main content', ar: 'تخطَّ إلى المحتوى الرئيسي' },
  openMenu: { en: 'Open navigation menu', ar: 'افتح قائمة التنقل' },
  closeMenu: { en: 'Close navigation menu', ar: 'أغلق قائمة التنقل' },
  mainNavigation: { en: 'Main navigation', ar: 'التنقل الرئيسي' },
  switchToArabic: { en: 'العربية', ar: 'العربية' },
  switchToEnglish: { en: 'EN', ar: 'EN' },
  languageSelector: { en: 'Language', ar: 'اللغة' },
  ctaPrototype: { en: 'Experience the Prototype', ar: 'جرِّب النموذج الأولي' },
  ctaPrototypeLong: { en: 'Experience the Prototype', ar: 'جرِّب النموذج الأولي' },
  ctaHowItWorks: { en: `See How It Works`, ar: 'شاهد طريقة العمل' },
  ctaReturnOverview: { en: 'Return to Overview', ar: 'العودة إلى النظرة العامة' },
  competitionTrack: {
    en: 'Hajj & Umrah Experience Technologies',
    ar: 'تقنيات تجربة الحج والعمرة',
  },
  maturity: {
    prototype: { en: 'Prototype', ar: 'نموذج أولي' },
    pilot: { en: 'Planned Pilot', ar: 'تجربة تشغيلية مخطَّطة' },
    future: { en: 'Future Authorised Integration', ar: 'تكامل مستقبلي معتمد' },
  },
  offline: { en: 'Offline', ar: 'دون اتصال' },
  cached: { en: 'Saved offline', ar: 'محفوظ دون اتصال' },
  live: { en: 'Live', ar: 'مباشر' },
} as const
