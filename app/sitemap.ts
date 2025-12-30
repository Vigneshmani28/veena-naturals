import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.veenanaturals.in';
  
  const routes = [
    '/',
    '/products',
    '/products/face-packs',
    '/products/hair-oils',
    '/about',
    '/contact',
    '/blog',
    '/faq',
    '/privacy-policy',
    '/terms-conditions',
    '/shipping-returns',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}