'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Send, Loader2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { submitContact } from '@/lib/api';

const contactSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يحتوي على حرفين على الأقل'),
  phone: z
    .string()
    .min(10, 'رقم الهاتف غير صحيح')
    .regex(/^[0-9+\-\s()]+$/, 'رقم الهاتف غير صحيح'),
  email: z.string().email('البريد الإلكتروني غير صحيح').optional().or(z.literal('')),
  message: z
    .string()
    .min(10, 'الرسالة يجب أن تحتوي على 10 أحرف على الأقل'),
});

type FormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  showHeading?: boolean;
  buttonText?: string;
}

export default function ContactForm({
  showHeading = true,
  buttonText = 'إرسال الرسالة',
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast.error('يرجى تصحيح الأخطاء في النموذج');
      return;
    }

    setLoading(true);
    try {
      await submitContact(result.data);
      toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch {
      toast.error('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-right text-base text-[#2D2D2D] transition-colors placeholder:text-[#6B7280]/60 focus:border-[#D4A843] focus:outline-none focus:ring-2 focus:ring-[#D4A843]/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {showHeading && (
        <SectionHeading
          title="أرسل لنا رسالة"
          subtitle="املأ النموذج وسنعود إليك في أقرب وقت"
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#1B3A5C]">
            الاسم الكامل *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="مثال: أحمد محمد"
            className={inputClass}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#1B3A5C]">
            رقم الهاتف *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="مثال: 0612345678"
            className={inputClass}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#1B3A5C]">
            البريد الإلكتروني (اختياري)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#1B3A5C]">
            الرسالة *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="اكتب رسالتك هنا..."
            className={`${inputClass} resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          icon={!loading ? <Send className="h-5 w-5" /> : undefined}
        >
          {buttonText}
        </Button>
      </form>
    </motion.div>
  );
}
