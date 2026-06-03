'use client';

import { motion } from 'framer-motion';
import { BookOpen, Target, Globe, ArrowLeft } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

const features = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'منهجية تعليمية متطورة',
    description:
      'نعتمد أحدث الأساليب التعليمية في تدريس اللغة الألمانية مع تركيز على المهارات الأربع: القراءة، الكتابة، الاستماع، والمحادثة.',
    link: '/language-courses',
    linkText: 'اكتشف دوراتنا',
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'تكوين مهني موجه',
    description:
      'برامج تكوينية معدة خصيصاً لسوق العمل الألماني، مع التركيز على المهارات المطلوبة والتحضير للمقابلات.',
    link: '/career-germany',
    linkText: 'تعرف على التكوين',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'مرافقة شاملة',
    description:
      'من أول خطوة في تعلم اللغة إلى التسجيل في السفارة والحصول على التأشيرة، نرافقك في كل مرحلة من رحلتك.',
    link: '/services',
    linkText: 'اكتشف خدماتنا',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          title="لماذا OBISCHOOL؟"
          subtitle="نقدم لك أكثر من مجرد دورة لغة - نحن نبني مستقبلك في ألمانيا"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Card className="h-full text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F0F8] text-[#1B3A5C]">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#1B3A5C]">
                  {feature.title}
                </h3>
                <p className="mb-4 text-base leading-relaxed text-[#6B7280]">
                  {feature.description}
                </p>
                <a
                  href={feature.link}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#D4A843] transition-colors hover:text-[#B8922E]"
                >
                  {feature.linkText}
                  <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
