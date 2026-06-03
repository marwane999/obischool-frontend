import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export default function Card({
  children,
  className,
  padding = 'md',
  hover = true,
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
  };

  return (
    <div
      className={cn(
        'rounded-2xl bg-white shadow-lg',
        hover && 'card-hover',
        paddings[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
