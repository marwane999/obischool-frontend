'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppMorocco } from '@/lib/whatsapp';

export default function CTASection() {
  return (
    <section className="gradient-primary section-padding relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#D4A843]/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#D4A843]/10 blur-3xl" />

      <div className="container-main relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
        >
          ابدأ رحلتك نحو ألمانيا اليوم
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl"
        >
          لا تنتظر أكثر! سجل الآن في دورات اللغة الألمانية وابدأ رحلة تحقيق 
          حلمك في الدراسة أو العمل في ألمانيا مع OBISCHOOL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href={getWhatsAppMorocco(
              'مرحباً! أود التسجيل والبدء في رحلتي نحو ألمانيا.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn inline-flex animate-pulse-cta"
          >
            <MessageCircle className="h-5 w-5" />
            <span>تحدث معنا الآن</span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-sm text-white/50"
        >
          * التسجيل متاح طوال السنة. المقاعد محدودة لكل دورة.
        </motion.p>
      </div>
    </section>
  );
}
