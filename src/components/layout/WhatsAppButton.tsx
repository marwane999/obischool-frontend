'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppMorocco } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppMorocco()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-[#25D366]/40 rtl:bottom-6 rtl:left-auto rtl:right-6"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="h-7 w-7 animate-pulse-cta" />
    </a>
  );
}
