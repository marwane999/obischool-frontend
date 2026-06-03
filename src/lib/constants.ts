export const SITE_NAME = 'OBISCHOOL';
export const SITE_DESCRIPTION =
  'مدرسة ألمانية في سطات — تعلم اللغة + مرافقة نحو ألمانيا. منذ 2012، نقدم تعليماً عالي الجودة وخدمات مخصصة لطلابنا.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const WHATSAPP_MOROCCO =
  process.env.NEXT_PUBLIC_WHATSAPP_MOROCCO || '212709414744';
export const WHATSAPP_GERMANY =
  process.env.NEXT_PUBLIC_WHATSAPP_GERMANY || '4915147376034';

export const ADDRESS = 'الطريق السياحي 73، حي البطوار، سطات';
export const PHONE = '0709 41 47 44';
export const HOURS = '09:00 – 21:00';
export const EMAIL = 'contact@obischool.com';
export const GOOGLE_MAPS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
  'https://maps.app.goo.gl/UiZbpDgQpYqM4K179';

export const NAV_LINKS = [
  { href: '/', label: 'الرئيسية' },
  { href: '/language-courses', label: 'تعلم اللغة الألمانية' },
  { href: '/career-germany', label: 'التكوين والعمل في ألمانيا' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/about', label: 'من نحن' },
  { href: '/testimonials', label: 'آراء المتدربين' },
  { href: '/contact', label: 'اتصل بنا' },
];

export const SOCIAL_LINKS = [
  {
    name: 'X',
    href: 'https://x.com/obischool',
    icon: 'x',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/obischool',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/obischool.maroc/',
    icon: 'instagram',
  },
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/obischool.maroc/',
    icon: 'facebook',
  },
];

export const TRUST_BADGES = [
  { label: 'منذ 2012', icon: 'clock' },
  { label: 'مجموعات صغيرة 6–8', icon: 'users' },
  { label: 'مرافقة حتى ألمانيا', icon: 'compass' },
  { label: 'الأستاذ مروان', icon: 'graduation-cap' },
];

export const STATS = [
  { value: 14, suffix: '+', label: 'سنة من الخبرة', icon: 'clock' },
  { value: 1000, suffix: '+', label: 'متدرب بدأوا رحلتهم', icon: 'users' },
  { value: 8, prefix: '6-', suffix: '', label: 'متدربين فقط في المجموعة', icon: 'users' },
  { value: 100, suffix: '%', label: 'متابعة شخصية', icon: 'target' },
];

export const COURSES = [
  {
    level: 'A1',
    title: 'A1 – دورة A1 للمبتدئين',
    fullTitle: 'A1 – دورة A1 للمبتدئين',
    description: 'انطلق من الصفر في تعلم اللغة الألمانية. أساسيات المحادثة، القواعد، والمفردات اليومية.',
    duration: '8 أسابيع',
    schedule: 'الحصص: 3 مرات في الأسبوع • حضوري أو عن بُعد',
    features: ['المحادثة', 'القواعد', 'المفردات'],
    popular: false,
  },
  {
    level: 'A2',
    title: 'A2 – دورة A2 الأساسية',
    fullTitle: 'A2 – دورة A2 الأساسية',
    description: 'طور مهاراتك في اللغة الألمانية مع تركيز على المحادثة والتطبيق العملي.',
    duration: '8 أسابيع',
    schedule: 'الحصص: 3 مرات في الأسبوع • حضوري أو عن بُعد',
    features: ['المحادثة', 'القواعد', 'المفردات', 'الاستماع'],
    popular: false,
  },
  {
    level: 'B1',
    title: 'B1 – دورة B1 المتوسطة',
    fullTitle: 'B1 – دورة B1 المتوسطة',
    description: 'مستوى متوسط يمكنك من التواصل بطلاقة في مواقف الحياة اليومية والعمل.',
    duration: '8 أسابيع',
    schedule: 'الحصص: 3 مرات في الأسبوع • حضوري أو عن بُعد',
    features: ['المحادثة', 'القواعد', 'الكتابة', 'الاستماع', 'القراءة'],
    popular: true,
  },
  {
    level: 'B2',
    title: 'B2 – دورة B2 المتقدمة',
    fullTitle: 'B2 – دورة B2 المتقدمة',
    description: 'مستوى متقدم يؤهلك للدراسة الجامعية أو العمل المهني في ألمانيا.',
    duration: '8 أسابيع',
    schedule: 'الحصص: 3 مرات في الأسبوع • حضوري أو عن بُعد',
    features: ['محادثة متقدمة', 'كتابة رسمية', 'فهم النصوص', 'تحضير للامتحان'],
    popular: false,
  },
];

export const SERVICES = [
  {
    number: 1,
    title: 'التوجيه واختيار المسار',
    description: 'تكوين/عمل/إقامة — نساعدك في اختيار المسار المناسب حسب مؤهلاتك وأهدافك.',
    icon: 'compass',
  },
  {
    number: 2,
    title: 'السيرة الذاتية ورسالة التحفيز',
    description: 'إعداد السيرة الذاتية ورسالة التحفيز وفق المعايير الألمانية المعتمدة.',
    icon: 'file-text',
  },
  {
    number: 3,
    title: 'ترتيب وتدقيق الملف',
    description: 'ترتيب وتدقيق جميع الوثائق المطلوبة مع ملاحظات وتنظيم كامل.',
    icon: 'folder-check',
  },
  {
    number: 4,
    title: 'تحضير المقابلات',
    description: 'تحضير كامل للمقابلات مع نصائح عملية للتواصل الفعال.',
    icon: 'message-square',
  },
  {
    number: 5,
    title: 'فهم عقود العمل والتكوين',
    description: 'شرح وتحليل عقود العمل وعقود التكوين المهني (Ausbildung).',
    icon: 'file-signature',
  },
  {
    number: 6,
    title: 'ترجمة الوثائق',
    description: 'ترجمة الوثائق الرسمية عند الحاجة من وإلى الألمانية.',
    icon: 'languages',
  },
  {
    number: 7,
    title: 'معادلة الشهادات والاعتراف',
    description: 'مساعدة في معادلة الشهادات والاعتراف بها في ألمانيا (Anerkennung).',
    icon: 'award',
  },
  {
    number: 8,
    title: 'مرافقة إجراءات التأشيرة',
    description: 'توجيه ومتابعة في إجراءات التأشيرة — دون وعود غير واقعية.',
    icon: 'passport',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'حنان',
    text: '"الأستاذ مروان الله يعمرها دار والمدرسة واعرة."',
    rating: 5,
  },
  {
    id: 2,
    name: 'يوسف عفيف',
    text: '"أنا كنت عند الأستاذ مروان فسطات عاوني بزاف الله يرحم الوالدين."',
    rating: 5,
  },
  {
    id: 3,
    name: 'متدربة',
    text: '"بكل صراحة وصدق ربي يسعدكم ويوفقكم… ممتعة دروسك… وأنا فهمت الكثير من اللغة الألمانية معك 💛"',
    rating: 5,
  },
];

export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'سجل في قائمة الانتظار',
    description: 'ضع اسمك ورقم هاتفك للانضمام إلى أقرب مجموعة.',
    icon: 'clipboard-list',
  },
  {
    number: 2,
    title: 'تواصل معنا',
    description: 'نؤكد معك الوقت المناسب للمجموعة.',
    icon: 'message-circle',
  },
  {
    number: 3,
    title: 'انطلق في مجموعتك',
    description: 'فور اكتمال العدد (6–8 متدربين)، تنطلق المجموعة.',
    icon: 'rocket',
  },
];

export const CAREER_STEPS = [
  {
    number: 1,
    title: 'تواصل أولي عبر واتساب',
    description: 'لفهم هدفك ووضعيتك',
    icon: 'message-circle',
  },
  {
    number: 2,
    title: 'توجيه عملي وخطة واضحة',
    description: 'حسب ملفك الشخصي وأهدافك',
    icon: 'map',
  },
  {
    number: 3,
    title: 'متابعة خطوة بخطوة',
    description: 'حتى تحقق هدفك',
    icon: 'check-circle',
  },
];

export const CONTACT_INFO = {
  address: 'الطريق السياحي 73، حي البطوار، سطات',
  phone: '0709 41 47 44',
  hours: '09:00 – 21:00',
  email: 'contact@obischool.com',
};
