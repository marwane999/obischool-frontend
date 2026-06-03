import HeroSection from '@/components/sections/HeroSection';
import TrustBadges from '@/components/sections/TrustBadges';
import FeaturesSection from '@/components/sections/FeaturesSection';
import StatsSection from '@/components/sections/StatsSection';
import CoursesSection from '@/components/sections/CoursesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <FeaturesSection />
      <StatsSection />
      <CoursesSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
