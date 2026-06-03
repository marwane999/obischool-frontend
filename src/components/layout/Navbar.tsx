'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { getWhatsAppMorocco } from '@/lib/whatsapp';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-md backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="https://obischool.com/wp-content/uploads/2025/12/cropped-logo-obis-3-133x67.png"
              alt={NAV_LINKS[0].label}
              width={100}
              height={50}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#D4A843]'
                      : 'text-[#1B3A5C] hover:text-[#D4A843]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppMorocco()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/30 md:flex"
            >
              <MessageCircle className="h-4 w-4" />
              <span>اتصل بنا</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex items-center justify-center rounded-lg p-2 text-[#1B3A5C] transition-colors hover:bg-[#E8F0F8] lg:hidden"
              aria-label="فتح القائمة"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
