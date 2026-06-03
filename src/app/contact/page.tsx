import { Metadata } from 'next';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/sections/ContactForm';
import { ADDRESS, PHONE, EMAIL, HOURS, GOOGLE_MAPS_URL, WHATSAPP_MOROCCO, WHATSAPP_GERMANY } from '@/lib/constants';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'اتصل بنا',
  description: 'تواصل مع OBISCHOOL في سطات، المغرب. الهاتف، البريد الإلكتروني، واتساب، وخريطة الموقع.',
};

const contactItems = [
  { icon: <Phone className="h-6 w-6" />, title: 'الهاتف', value: PHONE, href: `tel:${PHONE}` },
  { icon: <Mail className="h-6 w-6" />, title: 'البريد الإلكتروني', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: <MapPin className="h-6 w-6" />, title: 'العنوان', value: ADDRESS },
  { icon: <Clock className="h-6 w-6" />, title: 'ساعات العمل', value: HOURS },
];

export default function ContactPage() {
  return (
    <>
      <section className="gradient-primary relative min-h-[50vh] flex items-center pt-20">
        <div className="container-main relative z-10 text-center">
          <Badge variant="gold" className="mb-4">تواصل معنا</Badge>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">اتصل بنا</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في بدء رحلتكم نحو ألمانيا</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Badge variant="gold" className="mb-3">معلومات الاتصال</Badge>
              <h2 className="mb-8 text-3xl font-bold text-[#1B3A5C] md:text-4xl">نحن هنا لمساعدتك</h2>

              <div className="space-y-4">
                {contactItems.map((item) => (
                  <Card key={item.title} padding="sm" hover={false} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F0F8] text-[#1B3A5C]">{item.icon}</div>
                    <div>
                      <p className="text-sm font-medium text-[#6B7280]">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-[#1B3A5C] transition-colors hover:text-[#D4A843]">{item.value}</a>
                      ) : (
                        <p className="font-semibold text-[#1B3A5C]">{item.value}</p>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <h3 className="mb-4 text-lg font-bold text-[#1B3A5C]">تواصل عبر واتساب</h3>
                <a
                  href={getWhatsAppLink(WHATSAPP_MOROCCO)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/30"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>المغرب: +212 709-414744</span>
                </a>
                <a
                  href={getWhatsAppLink(WHATSAPP_GERMANY)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-6 py-3 font-semibold text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>ألمانيا: +49 1514-7376034</span>
                </a>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-light">
        <div className="container-main">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#1B3A5C]">موقعنا على الخريطة</h2>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src={GOOGLE_MAPS_URL}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OBISCHOOL Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
