export function getWhatsAppLink(phone: string, message?: string): string {
  const base = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export const WHATSAPP_MESSAGE_DEFAULT =
  'مرحباً! أود الاستفسار عن دورة اللغة الألمانية في OBISCHOOL.';

export function getWhatsAppMorocco(message?: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_MOROCCO || '212709414744';
  return getWhatsAppLink(phone, message || WHATSAPP_MESSAGE_DEFAULT);
}

export function getWhatsAppGermany(message?: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_GERMANY || '4915147376034';
  return getWhatsAppLink(phone, message || WHATSAPP_MESSAGE_DEFAULT);
}
