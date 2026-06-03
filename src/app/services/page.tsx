import { Metadata } from 'next';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import ServicesGrid from '@/components/sections/ServicesGrid';
import CTASection from '@/components/sections/CTASection';
import { getWhatsAppMorocco } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'خدماتنا',
  description: 'خدمات OBISCHOOL المتكاملة: دورات اللغة الألمانية، التوجيه المهني، التسجيل في السفارة، معادلة الشهادات، التأمين الصحي والمزيد.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-primary relative min-h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: "url('https://obischool.com/wp-content/uploads/2025/12/p4.webp')" }} />
        <div className="container-main relative z-10 text-center">
          <Badge variant="gold" className="mb-4">خدمات متكاملة</Badge>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">خدماتنا</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">نقدم لكم مجموعة متكاملة من الخدمات لمرافقتكم في كل خطوة من رحلتكم نحو ألمانيا</p>
        </div>
      </section>

      <ServicesGrid />

      <section className="section-padding gradient-primary">
        <div className="container-main text-center text-white">
          <Badge variant="gold" className="mb-4">كيف نعمل؟</Badge>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">خطوات الاستفادة من خدماتنا</h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A843] text-xl font-bold text-white mx-auto">1</span>
              <h3 className="mb-2 text-lg font-bold">تواصل معنا</h3>
              <p className="text-sm text-white/70">تواصل معنا عبر واتساب أو املأ استمارة الاتصال</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A843] text-xl font-bold text-white mx-auto">2</span>
              <h3 className="mb-2 text-lg font-bold">استشارة مجانية</h3>
              <p className="text-sm text-white/70">نقدم لك استشارة مجانية لتقييم وضعك وتحديد احتياجاتك</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A843] text-xl font-bold text-white mx-auto">3</span>
              <h3 className="mb-2 text-lg font-bold">انطلاق الرحلة</h3>
              <p className="text-sm text-white/70">نبدأ في تنفيذ الخطة المناسبة لك خطوة بخطوة</p>
            </div>
          </div>
          <a href={getWhatsAppMorocco('أهلاً، أود الاستفادة من خدماتكم.')} target="_blank" rel="noopener noreferrer" className="whatsapp-btn mt-8 inline-flex">
            <MessageCircle className="h-5 w-5" />
            <span>احصل على استشارة مجانية</span>
          </a>
        </div>
      </section>

      <section className="section-padding section-bg-light">
        <div className="container-main text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <Badge variant="blue" className="mb-3">ملاحظة مهمة</Badge>
            <h3 className="mb-4 text-2xl font-bold text-[#1B3A5C]">خدماتنا متاحة للجميع</h3>
            <p className="text-base leading-relaxed text-[#6B7280]">
              جميع خدماتنا متاحة للطلاب من جميع المدن المغربية عبر الإنترنت، وللمقيمين في 
              سطات والمناطق المجاورة يمكنهم الاستفادة من الخدمات الحضورية في مركزنا. 
              لا تتردد في الاتصال بنا لأي استفسار.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
