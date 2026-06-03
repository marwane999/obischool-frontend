'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, BookOpen, Plane } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROCESS_STEPS } from '@/lib/constants';

const stepIcons: Record<string, React.ReactNode> = {
  'clipboard-check': <ClipboardCheck className="h-8 w-8" />,
  'book-open': <BookOpen className="h-8 w-8" />,
  plane: <Plane className="h-8 w-8" />,
};

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          title="كيف تعمل العملية؟"
          subtitle="ثلاث خطوات بسيطة لتحقيق حلمك في ألمانيا"
        />

        <div className="relative">
          <div className="absolute right-1/2 top-0 hidden h-full w-0.5 translate-x-1/2 bg-[#E8F0F8] md:block rtl:right-1/2" />

          <div className="space-y-12 md:space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`relative md:flex md:items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`md:w-1/2 ${i % 2 === 0 ? 'md:ps-12' : 'md:pe-12'}`}
                >
                  <div
                    className={`rounded-2xl bg-white p-6 shadow-lg md:p-8 ${
                      i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F0F8] text-[#1B3A5C] ${
                        i % 2 === 0 ? '' : 'md:ms-auto'
                      }`}
                    >
                      {stepIcons[step.icon]}
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4A843] text-sm font-bold text-white">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-[#1B3A5C]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-[#6B7280]">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex md:w-1/2 justify-center">
                  <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#E8F0F8] bg-[#D4A843] text-lg font-bold text-white shadow-md">
                    {step.number}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
