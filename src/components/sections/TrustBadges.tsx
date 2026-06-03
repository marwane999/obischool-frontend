import { TRUST_BADGES } from '@/lib/constants';
import { Award, Clock, GraduationCap, ShieldCheck } from 'lucide-react';

const badgeIcons: Record<string, React.ReactNode> = {
  award: <Award className="h-6 w-6" />,
  clock: <Clock className="h-6 w-6" />,
  'graduation-cap': <GraduationCap className="h-6 w-6" />,
  certificate: <ShieldCheck className="h-6 w-6" />,
};

export default function TrustBadges() {
  return (
    <section className="border-b border-[#E8F0F8] bg-white py-8">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-sm font-medium text-[#6B7280]"
            >
              <span className="text-[#D4A843]">{badgeIcons[badge.icon]}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
