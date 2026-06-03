'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { getWhatsAppMorocco } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-[70] flex w-72 flex-col bg-white shadow-2xl transition-transform duration-300 rtl:left-auto rtl:right-0',
          isOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-[#E8F0F8] p-4">
          <span className="text-lg font-bold text-[#1B3A5C]">القائمة</span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-[#6B7280] transition-colors hover:bg-[#E8F0F8] hover:text-[#1B3A5C]"
            aria-label="إغلاق القائمة"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      isActive
                        ? 'bg-[#E8F0F8] text-[#D4A843]'
                        : 'text-[#1B3A5C] hover:bg-[#E8F0F8] hover:text-[#D4A843]',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-[#E8F0F8] p-4">
          <a
            href={getWhatsAppMorocco()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#20BD5A]"
          >
            <MessageCircle className="h-5 w-5" />
            <span>تواصل معنا عبر واتساب</span>
          </a>
        </div>
      </div>
    </>
  );
}
