import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, MessageCircle, BookOpen, Monitor, Users, Award } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import CoursesSection from '@/components/sections/CoursesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import { getWhatsAppMorocco } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'دورات اللغة الألمانية',
  description: 'دورات مكثفة في اللغة الألمانية من A1 إلى B2 في OBISCHOOL سطات. تعلم الألمانية مع مدرسين معتمدين، حضوري أو عن بُعد.',
};

const benefits = [
  { icon: <BookOpen className="h-6 w-6" />, title: 'منهجية ألمانية أصيلة', text: 'نعتمد أحدث المناهج التعليمية المعتمدة من معهد Goethe.' },
  { icon: <Monitor className="h-6 w-6" />, title: 'دروس حضورية وعن بُعد', text: 'اختر ما يناسبك: احضر في مركزنا أو تابع الدروس أونلاين.' },
  { icon: <Users className="h-6 w-6" />, title: 'مجموعات صغيرة (6-8)', text: 'تعلّم في مجموعات صغيرة لضمان التفاعل والمتابعة الفردية.' },
  { icon: <Award className="h-6 w-6" />, title: 'شهادة معتمدة', text: 'تحصل على شهادة معتمدة بعد اجتياز الدورة بنجاح.' },
];

const levels = [
  { level: 'A1', title: 'مبتدئ', color: 'bg-green-100 text-green-700' },
  { level: 'A2', title: 'أساسي', color: 'bg-blue-100 text-blue-700' },
  { level: 'B1', title: 'متوسط', color: 'bg-[#F5ECD0] text-[#D4A843]' },
  { level: 'B2', title: 'متقدم', color: 'bg-purple-100 text-purple-700' },
];

export default function LanguageCoursesPage() {
  return (
    <>
      <section className="gradient-primary relative min-h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: "url('https://obischool.com/wp-content/uploads/2025/12/p2-4-1024x683.png')" }} />
        <div className="container-main relative z-10 text-center">
          <Badge variant="gold" className="mb-4">دورات معتمدة</Badge>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">تعلم اللغة الألمانية</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">من الصفر إلى الاحتراف مع مدرسين معتمدين ومنهجية تعليمية متطورة</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading title="لماذا تتعلم الألمانية مع OBISCHOOL؟" subtitle="نقدم لك بيئة تعليمية مثالية لتعلم اللغة الألمانية بسرعة وفعالية" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <Card key={benefit.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F0F8] text-[#1B3A5C]">{benefit.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-[#1B3A5C]">{benefit.title}</h3>
                <p className="text-sm text-[#6B7280]">{benefit.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-light">
        <div className="container-main">
          <SectionHeading title="مستوياتنا التعليمية" subtitle="نغطي جميع المستويات من A1 إلى B2 حسب الإطار الأوروبي المرجعي للغات" />
          <div className="grid gap-4 md:grid-cols-4">
            {levels.map((l) => (
              <div key={l.level} className="rounded-2xl bg-white p-6 text-center shadow-lg card-hover">
                <div className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${l.color}`}>{l.level}</div>
                <h3 className="font-bold text-[#1B3A5C]">{l.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoursesSection />

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading title="جدول المرونة" subtitle="اختر الوقت والطريقة التي تناسبك" />
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <h3 className="mb-2 text-xl font-bold text-[#1B3A5C]">دروس صباحية</h3>
              <p className="text-[#6B7280]">09:00 – 12:00</p>
              <p className="mt-2 text-sm text-[#6B7280]">مناسبة للطلاب والمتفرغين</p>
            </Card>
            <Card className="text-center ring-2 ring-[#D4A843]">
              <Badge variant="gold" className="mb-2">الأكثر طلباً</Badge>
              <h3 className="mb-2 text-xl font-bold text-[#1B3A5C]">دروس مسائية</h3>
              <p className="text-[#6B7280]">16:00 – 19:00</p>
              <p className="mt-2 text-sm text-[#6B7280]">مناسبة للموظفين والعاملين</p>
            </Card>
            <Card className="text-center">
              <h3 className="mb-2 text-xl font-bold text-[#1B3A5C]">دروس عن بُعد</h3>
              <p className="text-[#6B7280]">حسب الاتفاق</p>
              <p className="mt-2 text-sm text-[#6B7280]">للمقيمين خارج سطات</p>
            </Card>
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
}
