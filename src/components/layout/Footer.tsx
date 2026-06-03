import Link from 'next/link';
import Image from 'next/image';
import {
  NAV_LINKS,
  SERVICES,
  ADDRESS,
  PHONE,
  EMAIL,
  SOCIAL_LINKS,
} from '@/lib/constants';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, ArrowLeft, Linkedin, X } from 'lucide-react';

const socialIcons: Record<string, React.ReactNode> = {
  whatsapp: <MessageCircle className="h-5 w-5" />,
  facebook: <Facebook className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  x: <X className="h-5 w-5" />,
};

export default function Footer() {
  return (
    <footer className="gradient-primary text-white">
      <div className="container-main py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="https://obischool.com/wp-content/uploads/2025/12/cropped-logo-obis-3-133x67.png"
                alt="OBISCHOOL"
                width={120}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              مدرستكم الرائدة في تعليم اللغة الألمانية والتكوين المهني في سطات، المغرب. خبرة أكثر من 14 عاماً في تدريس اللغة الألمانية ومرافقة الطلاب نحو تحقيق حلمهم في ألمانيا.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#D4A843]"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">روابط سريعة</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#D4A843]"
                  >
                    <ArrowLeft className="h-3 w-3 rtl:rotate-180" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">خدماتنا</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.number}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#D4A843]"
                  >
                    <ArrowLeft className="h-3 w-3 rtl:rotate-180" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">معلومات الاتصال</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A843]" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-[#D4A843]"
                >
                  <Phone className="h-5 w-5 shrink-0 text-[#D4A843]" />
                  <span>{PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-[#D4A843]"
                >
                  <Mail className="h-5 w-5 shrink-0 text-[#D4A843]" />
                  <span>{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-sm text-white/50">
            © 2012–2026 OM Group 🥇 — Präsentiert von OBISCHOOL
          </p>
        </div>
      </div>
    </footer>
  );
}
