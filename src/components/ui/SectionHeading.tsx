import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  accent = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12 md:mb-16', className)}>
      {accent && (
        <div
          className={cn(
            'mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#D4A843] to-[#E8C76A]',
            !centered && 'ms-0',
          )}
        />
      )}
      <h2
        className={cn(
          'text-3xl font-bold leading-tight text-[#1B3A5C] md:text-4xl lg:text-5xl',
          !centered && 'text-right',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-3xl text-lg leading-relaxed text-[#6B7280] md:text-xl',
            centered && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
