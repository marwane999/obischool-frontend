import { formatDate } from '@/lib/utils';
import { Star } from 'lucide-react';
import Card from './Card';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  date?: string;
  location?: string;
}

export default function TestimonialCard({
  name,
  text,
  rating,
  date,
  location,
}: TestimonialCardProps) {
  return (
    <Card className="relative">
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'fill-[#D4A843] text-[#D4A843]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <p className="mb-6 text-base leading-relaxed text-[#6B7280] md:text-lg">
        "{text}"
      </p>

      <div className="flex items-center justify-between border-t border-[#E8F0F8] pt-4">
        <div>
          <p className="font-semibold text-[#1B3A5C]">{name}</p>
          {location && (
            <p className="text-sm text-[#6B7280]">{location}</p>
          )}
        </div>
        {date && (
          <span className="text-sm text-[#6B7280]">{formatDate(date)}</span>
        )}
      </div>

      <div className="absolute -top-2 -left-2 text-6xl text-[#D4A843]/10 leading-none rtl:left-auto rtl:right-2">
        "
      </div>
    </Card>
  );
}
