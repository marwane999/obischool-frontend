import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const routes = [
    { path: '/', priority: 1.0 },
    { path: '/language-courses', priority: 0.9 },
    { path: '/career-germany', priority: 0.8 },
    { path: '/services', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/testimonials', priority: 0.7 },
    { path: '/contact', priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }));
}
