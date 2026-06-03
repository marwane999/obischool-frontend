'use client';

import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { COURSES } from '@/lib/constants';
import { getWhatsAppMorocco } from '@/lib/whatsapp';

export default function CoursesSection() {
  return (
    <section id="courses" className="section-padding section-bg-light">
      <div className="container-main">
        <SectionHeading
          title="دورات اللغة الألمانية"
          subtitle="اختر المستوى المناسب لك وابدأ رحلتك نحو إتقان اللغة الألمانية"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.level}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className={`relative h-full ${course.popular ? 'ring-2 ring-[#D4A843]' : ''}`}>
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rtl:translate-x-1/2">
                    <Badge variant="gold">الأكثر طلباً</Badge>
                  </div>
                )}

                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#D4A843]">
                    {course.level}
                  </span>
                  <Badge variant="red">المقاعد محدودة</Badge>
                </div>

                <h3 className="mb-2 text-lg font-bold text-[#1B3A5C]">
                  {course.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-[#6B7280]">
                  {course.description}
                </p>

                <div className="mb-4 rounded-xl bg-[#E8F0F8] p-3">
                  <p className="text-sm font-semibold text-[#1B3A5C]">
                    {course.duration}
                  </p>
                  <p className="text-xs text-[#6B7280]">{course.schedule}</p>
                </div>

                <ul className="mb-6 space-y-2">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#6B7280]"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A843]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppMorocco(
                    `مرحباً! أود الاستفسار عن دورة ${course.level} والتسجيل فيها.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/30"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>سجل الآن</span>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
