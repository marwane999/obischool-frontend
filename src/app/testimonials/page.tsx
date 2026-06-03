import { Metadata } from 'next';
import Image from 'next/image';
import { MessageCircle, Star, ThumbsUp, Users, Award, Heart } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import TestimonialCard from '@/components/ui/TestimonialCard';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import { TESTIMONIALS } from '@/lib/constants';
import { getWhatsAppMorocco } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'آراء المتدربين',
  description: 'ماذا يقول طلاب OBISCHOOL عن تجربتهم في تعلم اللغة الألمانية والتكوين المهني.',
};

const whyChooseUs = [
  { icon: <Star className="h-6 w-6" />, text: 'تقييم 4.9/5 من المتدربين' },
  { icon: <Users className="h-6 w-6" />, text: 'أكثر من 1000 متدرب متخرج' },
  { icon: <Award className="h-6 w-6" />, text: 'مدرسون معتمدون دولياً' },
  { icon: <Heart className="h-6 w-6" />, text: 'متابعة فردية لكل متدرب' },
];

const galleryImages = [
  'https://obischool.com/wp-content/uploads/2026/01/salle-1-1-1024x816.jpg',
  'https://obischool.com/wp-content/uploads/2025/12/p2-4-1024x683.png',
  'https://obischool.com/wp-content/uploads/2025/12/p3-1024x683.png',
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="gradient-primary relative min-h-[50vh] flex items-center pt-20">
        <div className="container-main relative z-10 text-center">
          <Badge variant="gold" className="mb-4">آراء المتدربين</Badge>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">ماذا يقول طلابنا عنا</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">نفخر بثقة متدربينا ويسعدنا مشاركة تجاربهم معكم</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading title="تجارب حقيقية" subtitle="كلمات من متدربينا عن رحلتهم مع OBISCHOOL" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-light">
        <div className="container-main">
          <SectionHeading title="لماذا يختارون OBISCHOOL؟" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-md card-hover">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4A843]/10 text-[#D4A843]">{item.icon}</div>
                <span className="font-semibold text-[#1B3A5C]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading title="معرض الصور" subtitle="لقطات من مركزنا وأجواء التدريب" />
          <div className="grid gap-4 md:grid-cols-3">
            {galleryImages.map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={src}
                  alt={`OBISCHOOL gallery ${i + 1}`}
                  width={800}
                  height={600}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary">
        <div className="container-main text-center text-white">
          <Badge variant="gold" className="mb-4">شاركنا رأيك</Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">هل أنت متدرب معنا؟ شاركنا تجربتك!</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            رأيك يهمنا ويساعد الآخرين على اتخاذ القرار الصحيح. تواصل معنا عبر واتساب وشاركنا تجربتك.
          </p>
          <a
            href={getWhatsAppMorocco('مرحباً! أود مشاركة تجربتي مع OBISCHOOL.')}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn inline-flex"
          >
            <MessageCircle className="h-5 w-5" />
            <span>شاركنا رأيك</span>
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
