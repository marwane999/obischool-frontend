import type { Metadata } from 'next';
import { Cairo, Noto_Naskh_Arabic } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-naskh',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'OBISCHOOL | تعلم اللغة الألمانية في سطات - المغرب',
    template: '%s | OBISCHOOL',
  },
  description:
    'مدرستكم الرائدة في تعليم اللغة الألمانية والتكوين المهني في سطات، المغرب. أكثر من 14 عاماً من الخبرة، دروس حضورية وعن بُعد، فرص العمل والدراسة في ألمانيا.',
  keywords: [
    'تعلم اللغة الألمانية',
    'دروس ألمانية سطات',
    'مدرسة لغة ألمانية المغرب',
    'تكوين مهني ألمانيا',
    'OBISCHOOL',
    'دراسة في ألمانيا',
    'عمل في ألمانيا',
  ],
  authors: [{ name: 'OBISCHOOL' }],
  creator: 'OBISCHOOL',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'ar_AR',
    siteName: 'OBISCHOOL',
    title: 'OBISCHOOL | تعلم اللغة الألمانية في سطات - المغرب',
    description:
      'مدرستكم الرائدة في تعليم اللغة الألمانية والتكوين المهني في سطات، المغرب.',
    images: [
      {
        url: 'https://obischool.com/wp-content/uploads/2025/12/cropped-logo-obis-3-133x67.png',
        width: 133,
        height: 67,
        alt: 'OBISCHOOL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OBISCHOOL | تعلم اللغة الألمانية في سطات - المغرب',
    description:
      'مدرستكم الرائدة في تعليم اللغة الألمانية والتكوين المهني في سطات، المغرب.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${notoNaskhArabic.variable}`}
    >
      <body className="min-h-screen bg-white font-arabic">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              fontFamily: 'Cairo, sans-serif',
              direction: 'rtl',
              textAlign: 'right',
              borderRadius: '12px',
            },
            success: {
              style: {
                background: '#F0FFF4',
                color: '#22543D',
                border: '1px solid #C6F6D5',
              },
            },
            error: {
              style: {
                background: '#FFF5F5',
                color: '#9B2C2C',
                border: '1px solid #FED7D7',
              },
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
