import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OBISCHOOL | تعلم اللغة الألمانية في سطات - المغرب',
    short_name: 'OBISCHOOL',
    description:
      'مدرستكم الرائدة في تعليم اللغة الألمانية والتكوين المهني في سطات، المغرب.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1B3A5C',
    dir: 'rtl',
    lang: 'ar',
    icons: [
      {
        src: 'https://obischool.com/wp-content/uploads/2025/12/cropped-logo-obis-3-133x67.png',
        sizes: '133x67',
        type: 'image/png',
      },
    ],
  };
}
