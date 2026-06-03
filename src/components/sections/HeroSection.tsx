'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Award, Clock, GraduationCap, Users, Star } from 'lucide-react';
import { getWhatsAppMorocco } from '@/lib/whatsapp';
import { TRUST_BADGES } from '@/lib/constants';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const badgeIcons: Record<string, React.ReactNode> = {
  award: <Award className="h-4 w-4" />,
  clock: <Clock className="h-4 w-4" />,
  'graduation-cap': <GraduationCap className="h-4 w-4" />,
  certificate: <Award className="h-4 w-4" />,
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="gradient-primary absolute inset-0" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://obischool.com/wp-content/uploads/2026/01/salle-1-1-1024x816.jpg')" }}
      />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container-main w-full pt-20 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-block rounded-full bg-[#D4A843]/20 px-4 py-1.5 text-sm font-medium text-[#D4A843] backdrop-blur-sm">
                  🥇 المدرسة الرائدة في سطات
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              >
                مشروعك نحو ألمانيا…
                <br />
                <span className="text-gradient-gold">يبدأ بقرار صحيح</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl"
              >
                هل تحلم بالدراسة أو العمل في ألمانيا؟ OBISCHOOL ترافقك خطوة بخطوة 
                من تعلم اللغة الألمانية إلى التكوين المهني والتسجيل في السفارة.
                أكثر من 14 عاماً من الخبرة في تحقيق أحلام الطلاب.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href={getWhatsAppMorocco(
                    'مرحباً! أود التسجيل في دورة اللغة الألمانية.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>سجل الآن عبر واتساب</span>
                </a>
                <a
                  href="#courses"
                  className="gold-btn"
                >
                  <span>اكتشف دوراتنا</span>
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-8 flex flex-wrap items-center gap-6"
              >
                <div className="flex items-center gap-2 text-white/70">
                  <Users className="h-5 w-5 text-[#D4A843]" />
                  <span className="text-sm font-semibold text-white">1000+ متدرب</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Star className="h-5 w-5 text-[#D4A843]" />
                  <span className="text-sm font-semibold text-white">4.9 تقييم</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Award className="h-5 w-5 text-[#D4A843]" />
                  <span className="text-sm font-semibold text-white">مؤسسة معتمدة</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={5}
                className="mt-6 flex flex-wrap gap-3"
              >
                {TRUST_BADGES.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    {badgeIcons[badge.icon]}
                    {badge.label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-[#D4A843]/20 blur-2xl" />
                <Image
                  src="https://obischool.com/wp-content/uploads/2026/01/salle-1-1-1024x816.jpg"
                  alt="OBISCHOOL classroom"
                  width={800}
                  height={600}
                  className="relative rounded-2xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
