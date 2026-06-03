import { cn } from '@/lib/utils';

interface BadgeProps {
  children: string;
  variant?: 'gold' | 'blue' | 'green' | 'red';
  className?: string;
}

export default function Badge({ children, variant = 'gold', className }: BadgeProps) {
  const variants = {
    gold: 'bg-[#F5ECD0] text-[#D4A843]',
    blue: 'bg-[#E8F0F8] text-[#1B3A5C]',
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-600',
  };

  return (
    <span className={cn('badge-pill', variants[variant], className)}>
      {children}
    </span>
  );
}
