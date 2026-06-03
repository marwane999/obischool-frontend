import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, MessageCircle, Briefcase, GraduationCap, FileCheck, Plane } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import CTASection from '@/components/sections/CTASection';
import { getWhatsAppMorocco } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'التكوين والعمل في ألمانيا',
  description: 'برامج التكوين المهني والتوظيف في ألمانيا مع OBISCHOOL. نرافقك من التعلم إلى الحصول على عقد عمل.',
};

const targetAudience = [
  'الطلاب الذين يرغبون في متابعة الدراسة في ألمانيا',
  'المهنيون الباحثون عن فرص عمل في السوق الألماني',
  'الذين يرغبون في التكوين المهني المعترف به دولياً',
  'الأشخاص الذين لديهم عائلة في ألمانيا ويريدون الاندماج',
];

const offerings = [
  { icon: <GraduationCap className="h-8 w-8" />, title: 'التوجيه الأكاديمي', text: 'نساعدك في اختيار التخصص الجامعي المناسب والتسجيل في الجامعات الألمانية.' },
  { icon: <Briefcase className="h-8 w-8" />, title: 'التكوين المهني', text: 'برامج تكوينية معتمدة تؤهلك لسوق العمل الألماني في مختلف المجالات.' },
  { icon: <FileCheck className="h-8 w-8" />, title: 'معادلة الشهادات', text: 'نرافقك في إجراءات معادلة شهاداتك الدراسية والمهنية في ألمانيا.' },
  { icon: <Plane className="h-8 w-8" />, title: 'التحضير للسفر', text: 'مساعدة شاملة في التجهيز للسفر والإقامة والتأقلم مع الحياة في ألمانيا.' },
];

const steps = [
  { number: '01', title: 'التقييم', text: 'نقيم مستواك الحالي في اللغة ونحدد أهدافك المهنية والأكاديمية.' },
  { number: '02', title: 'البرنامج', text: 'نصمم برنامجاً مخصصاً يجمع بين تعلم اللغة والتكوين المهني.' },
  { number: '03', title: 'التسجيل', text: 'نساعدك في إجراءات التسجيل في الجامعات أو برامج التكوين المهني.' },
  { number: '04', title: 'الانطلاق', text: 'نرافقك حتى وصولك إلى ألمانيا وبدء حياتك الجديدة.' },
];

export default function CareerGermanyPage() {
  return (
    <>
      <section className="gradient-primary relative min-h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: "url('https://obischool.com/wp-content/uploads/2025/12/p3-1024x683.png')" }} />
        <div className="container-main relative z-10 text-center">
          <Badge variant="gold" className="mb-4">فرص مهنية</Badge>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">التكوين والعمل في ألمانيا</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">نحوِّل حلم العمل والدراسة في ألمانيا إلى واقع ملموس مع برامج متكاملة</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="gold" className="mb-3">لمن هذه الخدمة؟</Badge>
              <h2 className="mb-6 text-3xl font-bold text-[#1B3A5C] md:text-4xl">طور مسيرتك المهنية والأكاديمية</h2>
              <p className="mb-6 text-lg leading-relaxed text-[#6B7280]">
                ألمانيا تفتح أبوابها للكفاءات المغربية. مع OBISCHOOL، نقدم لك برامج متكاملة 
                تجمع بين تعلم اللغة والتكوين المهني لضمان اندماجك السريع في سوق العمل الألماني أو الجامعات.
              </p>
              <ul className="space-y-3">
                {targetAudience.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#6B7280]">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A843]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppMorocco('أهلاً، أود الاستفسار عن التكوين المهني والعمل في ألمانيا.')} target="_blank" rel="noopener noreferrer" className="whatsapp-btn mt-6 inline-flex">
                <MessageCircle className="h-5 w-5" />
                <span>استشرنا الآن</span>
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[#D4A843]/10 blur-2xl" />
              <Image src="https://obischool.com/wp-content/uploads/2025/12/p3-1024x683.png" alt="Career Germany" width={800} height={600} className="relative rounded-2xl object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-light">
        <div className="container-main">
          <SectionHeading title="ماذا نقدم لك؟" subtitle="خدمات متكاملة لرحلتك المهنية والأكاديمية إلى ألمانيا" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item) => (
              <Card key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A843]/10 text-[#D4A843]">{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-[#1B3A5C]">{item.title}</h3>
                <p className="text-sm text-[#6B7280]">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading title="كيف نعمل؟" subtitle="خطوات واضحة ومنظمة لتحقيق هدفك" />
          <div className="relative">
            <div className="absolute right-1/2 top-0 hidden h-full w-0.5 translate-x-1/2 bg-[#E8F0F8] md:block" />
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={step.number} className={`relative flex items-center md:flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:ps-12' : 'md:pe-12'}`}>
                    <Card>
                      <span className="text-4xl font-bold text-[#D4A843]/20">{step.number}</span>
                      <h3 className="mt-2 text-xl font-bold text-[#1B3A5C]">{step.title}</h3>
                      <p className="mt-2 text-[#6B7280]">{step.text}</p>
                    </Card>
                  </div>
                  <div className="hidden md:flex md:w-1/2 justify-center">
                    <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#E8F0F8] bg-[#D4A843] text-lg font-bold text-white shadow-md">{step.number}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-light">
        <div className="container-main text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <Badge variant="blue" className="mb-3">تنبيه مهم</Badge>
            <h3 className="mb-4 text-2xl font-bold text-[#1B3A5C]">معلومات هامة</h3>
            <p className="text-base leading-relaxed text-[#6B7280]">
              نحن نقدم المساعدة في التوجيه والتسجيل والتكوين، ولكن لا نضمن بشكل مطلق الحصول على 
              تأشيرة أو عقد عمل. نجاحك يعتمد على عدة عوامل منها مستواك في اللغة، مؤهلاتك، 
              واستيفاء شروط السفارة الألمانية. نلتزم بتقديم أفضل الدعم والمشورة لزيادة فرص نجاحك.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
