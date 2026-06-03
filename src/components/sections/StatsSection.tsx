'use client';

import { motion } from 'framer-motion';
import StatsCounter from '@/components/ui/StatsCounter';
import { STATS } from '@/lib/constants';

export default function StatsSection() {
  return (
    <section className="gradient-primary section-padding">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <StatsCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
