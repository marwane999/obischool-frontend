'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/lib/constants';

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          title="خدماتنا المتكاملة"
          subtitle="نقدم لكم مجموعة متكاملة من الخدمات لمرافقتكم في كل خطوة من رحلتكم نحو ألمانيا"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-[#E8F0F8] bg-white p-6 transition-all duration-300 hover:border-[#D4A843] hover:shadow-xl hover:-translate-y-1 md:p-8"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F0F8] text-xl font-bold text-[#D4A843] transition-colors group-hover:bg-[#D4A843] group-hover:text-white">
                  {service.number.toString().padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-[#1B3A5C] md:text-xl">
                  {service.title}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-[#6B7280]">
                {service.description}
              </p>

              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#D4A843]/5 transition-all duration-300 group-hover:scale-[3]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
