import type { Bilingual } from '../types/content'

export const technologySection = {
  eyebrow: { en: 'Technology', ar: 'التقنية' },
  heading: {
    en: 'Built as a resilient guidance and assistance layer.',
    ar: 'بُني ليكون طبقة إرشاد ومساعدة مرنة وموثوقة.',
  },
  layersLabel: { en: 'Architecture layers', ar: 'طبقات البنية' },
  principlesHeading: { en: 'Engineering principles', ar: 'مبادئ الهندسة' },
  detailToggle: { en: 'Technical detail', ar: 'التفاصيل التقنية' },
} as const

export interface ArchitectureLayer {
  id: string
  number: number
  icon: 'smartphone' | 'brain' | 'shield' | 'scale'
  title: Bilingual
  items: Bilingual[]
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'experience',
    number: 1,
    icon: 'smartphone',
    title: { en: 'Pilgrim Experience', ar: 'تجربة ضيف الرحمن' },
    items: [
      { en: 'Mobile application', ar: 'تطبيق جوال' },
      { en: 'Progressive Web App', ar: 'تطبيق ويب تقدّمي' },
      { en: 'Voice interface', ar: 'واجهة صوتية' },
      { en: 'Accessible interface', ar: 'واجهة ميسّرة' },
      { en: 'Offline content', ar: 'محتوى دون اتصال' },
      { en: 'Haptic feedback', ar: 'تغذية راجعة باللمس' },
      { en: 'Family experience', ar: 'تجربة العائلة' },
      { en: 'Guide experience', ar: 'تجربة المرشد' },
    ],
  },
  {
    id: 'intelligence',
    number: 2,
    icon: 'brain',
    title: { en: 'MUNIS Intelligence', ar: 'ذكاء مُؤْنِس' },
    items: [
      { en: 'Journey-state engine', ar: 'محرك حالة الرحلة' },
      { en: 'Context engine', ar: 'محرك السياق' },
      { en: 'Personalisation engine', ar: 'محرك التخصيص' },
      { en: 'Multilingual assistant', ar: 'مساعد متعدد اللغات' },
      { en: 'Safety rules', ar: 'قواعد السلامة' },
      { en: 'Route interpretation', ar: 'تفسير المسارات' },
      { en: 'Assistance orchestration', ar: 'تنسيق المساعدة' },
      { en: 'Notification engine', ar: 'محرك الإشعارات' },
    ],
  },
  {
    id: 'trust',
    number: 3,
    icon: 'shield',
    title: { en: 'Trust and Integration', ar: 'الثقة والتكامل' },
    items: [
      { en: 'Verified content', ar: 'محتوى موثّق' },
      { en: 'Maps and geospatial services', ar: 'خدمات الخرائط والمواقع' },
      { en: 'Weather and heat data', ar: 'بيانات الطقس والحرارة' },
      { en: 'Approved operational information', ar: 'معلومات تشغيلية معتمدة' },
      { en: 'Operator services', ar: 'خدمات المشغّلين' },
      { en: 'Authorised assistance services', ar: 'خدمات مساعدة معتمدة' },
      { en: 'Consent controls', ar: 'ضوابط الموافقة' },
      { en: 'Identity controls', ar: 'ضوابط الهوية' },
    ],
  },
  {
    id: 'governance',
    number: 4,
    icon: 'scale',
    title: { en: 'Governance', ar: 'الحوكمة' },
    items: [
      { en: 'Privacy controls', ar: 'ضوابط الخصوصية' },
      { en: 'Audit logs', ar: 'سجلات التدقيق' },
      { en: 'Human-in-the-loop escalation', ar: 'تصعيد بإشراف بشري' },
      { en: 'Model monitoring', ar: 'مراقبة النماذج' },
      { en: 'Content approval', ar: 'اعتماد المحتوى' },
      { en: 'Security monitoring', ar: 'مراقبة أمنية' },
      { en: 'Incident review', ar: 'مراجعة الحوادث' },
      { en: 'Role-based access', ar: 'صلاحيات حسب الدور' },
    ],
  },
]

export const architecturePrinciples: Bilingual[] = [
  { en: 'Privacy by design', ar: 'الخصوصية بالتصميم' },
  { en: 'Consent-based sharing', ar: 'مشاركة قائمة على الموافقة' },
  { en: 'Minimal data collection', ar: 'حد أدنى من جمع البيانات' },
  { en: 'Encryption', ar: 'تشفير' },
  { en: 'Role-based access', ar: 'صلاحيات حسب الدور' },
  { en: 'Explainable guidance', ar: 'إرشاد قابل للتفسير' },
  { en: 'Offline resilience', ar: 'مرونة العمل دون اتصال' },
  { en: 'Human escalation', ar: 'تصعيد بشري' },
  { en: 'Authorised integration only', ar: 'تكامل معتمد فقط' },
  { en: 'Graceful fallback', ar: 'تراجع آمن عند الأعطال' },
]

export const technicalDetail: { title: Bilingual; body: Bilingual }[] = [
  {
    title: { en: 'Voice pipeline', ar: 'خط المعالجة الصوتية' },
    body: {
      en: 'Speech recognition and synthesis with adjustable speed, designed to degrade gracefully to large-text and haptic interaction when audio is impractical. On-device wake and short-command handling are planned so essential commands work with limited connectivity.',
      ar: 'التعرف على الكلام وتوليده بسرعة قابلة للضبط، مع تصميم يتراجع بأمان إلى النص الكبير والتفاعل بالاهتزاز عندما يتعذر الصوت. ويُخطط لمعالجة أوامر قصيرة على الجهاز لتعمل الأوامر الأساسية مع اتصال محدود.',
    },
  },
  {
    title: { en: 'Offline strategy', ar: 'استراتيجية العمل دون اتصال' },
    body: {
      en: 'Essential guidance, saved locations, checklists and emergency instructions are cached on the device with clear freshness labels. Live data is never simulated: when connectivity drops, MUNIS shows what is cached and when it was last updated.',
      ar: 'تُحفظ الإرشادات الأساسية والمواقع وقوائم التحقق وتعليمات الطوارئ على الجهاز مع بيان واضح لحداثتها. لا تُحاكى البيانات المباشرة أبدًا: عند انقطاع الاتصال يعرض مُؤْنِس ما هو محفوظ وتاريخ آخر تحديث له.',
    },
  },
  {
    title: { en: 'Safety rules before models', ar: 'قواعد السلامة قبل النماذج' },
    body: {
      en: 'Deterministic safety rules take precedence over model-generated content for any guidance affecting movement, health or emergencies. Model output is constrained to approved content templates, and unresolved situations escalate to a human.',
      ar: 'تتقدم قواعد السلامة الحتمية على المحتوى المولَّد بالنماذج في أي إرشاد يمس الحركة أو الصحة أو الطوارئ. ويُقيَّد ناتج النماذج بقوالب محتوى معتمدة، وتُصعَّد الحالات غير المحسومة إلى إنسان.',
    },
  },
  {
    title: { en: 'Integration posture', ar: 'نهج التكامل' },
    body: {
      en: 'All operational, routing, crowd and emergency integrations are designed as authorised, auditable interfaces to be enabled only after formal agreements. The prototype uses representative scenario data and clearly labels it as such.',
      ar: 'صُممت جميع تكاملات التشغيل والمسارات والحشود والطوارئ كواجهات معتمدة وقابلة للتدقيق لا تُفعَّل إلا بعد اتفاقات رسمية. ويستخدم النموذج الأولي بيانات سيناريوهات تمثيلية ويصرّح بذلك بوضوح.',
    },
  },
]
