import type { Bilingual } from '../types/content'

export const privacySection = {
  eyebrow: { en: 'Privacy and Trust', ar: 'الخصوصية والثقة' },
  heading: {
    en: 'Trust must be designed into every interaction.',
    ar: 'الثقة يجب أن تُصمَّم في كل تفاعل.',
  },
  note: {
    en: 'MUNIS is a prototype: no certification or regulatory approval is claimed. These are the commitments the product is being built around.',
    ar: 'مُؤْنِس نموذج أولي: لا يُدَّعى أي اعتماد أو موافقة تنظيمية. هذه هي الالتزامات التي يُبنى المنتج حولها.',
  },
} as const

export interface PrivacyItem {
  id: string
  icon: string
  title: Bilingual
  body: Bilingual
}

export const privacyItems: PrivacyItem[] = [
  {
    id: 'minimisation',
    icon: 'minimize-2',
    title: { en: 'Data minimisation', ar: 'تقليل البيانات' },
    body: {
      en: 'Only the data needed for guidance and safety is collected.',
      ar: 'لا يُجمع إلا ما تحتاجه خدمات الإرشاد والسلامة.',
    },
  },
  {
    id: 'consent',
    icon: 'check-circle',
    title: { en: 'Explicit consent', ar: 'موافقة صريحة' },
    body: {
      en: 'Sensitive capabilities are off until the pilgrim clearly agrees.',
      ar: 'تبقى القدرات الحساسة معطّلة حتى يوافق ضيف الرحمن بوضوح.',
    },
  },
  {
    id: 'location',
    icon: 'map-pin',
    title: { en: 'Location-sharing controls', ar: 'ضوابط مشاركة الموقع' },
    body: {
      en: 'The pilgrim chooses who can see their location, and when.',
      ar: 'يختار ضيف الرحمن من يرى موقعه ومتى.',
    },
  },
  {
    id: 'roles',
    icon: 'user-check',
    title: { en: 'Role-based visibility', ar: 'اطلاع حسب الدور' },
    body: {
      en: 'Family, guides and responders each see only what their role requires.',
      ar: 'ترى العائلة والمرشدون والمستجيبون ما يقتضيه دورهم فقط.',
    },
  },
  {
    id: 'transmission',
    icon: 'lock',
    title: { en: 'Secure transmission', ar: 'نقل آمن' },
    body: { en: 'Data is encrypted in transit.', ar: 'تُشفَّر البيانات أثناء النقل.' },
  },
  {
    id: 'storage',
    icon: 'database',
    title: { en: 'Secure storage', ar: 'تخزين آمن' },
    body: { en: 'Data is encrypted and protected at rest.', ar: 'تُشفَّر البيانات وتُحمى أثناء التخزين.' },
  },
  {
    id: 'human-review',
    icon: 'user-cog',
    title: { en: 'Human review for escalations', ar: 'مراجعة بشرية للتصعيد' },
    body: {
      en: 'Escalated assistance is reviewed and handled by people, not only systems.',
      ar: 'حالات المساعدة المصعَّدة يراجعها ويتولاها بشر، لا الأنظمة وحدها.',
    },
  },
  {
    id: 'retention',
    icon: 'timer',
    title: { en: 'Retention limits', ar: 'حدود الاحتفاظ' },
    body: {
      en: 'Data is kept only as long as it serves the pilgrim.',
      ar: 'يُحتفظ بالبيانات ما دامت تخدم ضيف الرحمن فقط.',
    },
  },
  {
    id: 'deletion',
    icon: 'trash-2',
    title: { en: 'Deletion controls', ar: 'ضوابط الحذف' },
    body: {
      en: 'Pilgrims can request deletion of their personal data.',
      ar: 'يمكن لضيوف الرحمن طلب حذف بياناتهم الشخصية.',
    },
  },
  {
    id: 'anonymised',
    icon: 'bar-chart',
    title: { en: 'Anonymised analysis', ar: 'تحليل مجهول الهوية' },
    body: {
      en: 'Improvement analytics are aggregated and de-identified.',
      ar: 'تحليلات التحسين مجمّعة ومنزوعة الهوية.',
    },
  },
  {
    id: 'no-sale',
    icon: 'ban',
    title: { en: 'No sale of identifiable data', ar: 'لا بيع للبيانات المعرِّفة' },
    body: {
      en: 'Identifiable personal information is never sold.',
      ar: 'لا تُباع المعلومات الشخصية المعرِّفة بالهوية أبدًا.',
    },
  },
  {
    id: 'transparency',
    icon: 'file-text',
    title: { en: 'Transparent limitations', ar: 'شفافية حدود النموذج' },
    body: {
      en: 'Prototype boundaries are stated openly, including here on this site.',
      ar: 'تُذكر حدود النموذج الأولي بوضوح، بما في ذلك في هذا الموقع.',
    },
  },
]
