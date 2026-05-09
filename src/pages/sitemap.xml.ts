// src/pages/sitemap.xml.ts
import { MANUALES } from '../data/manuales';

interface SitemapPage {
  url: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

export async function GET() {
  const baseUrl = 'https://tu-dominio.com';

  const staticPages: SitemapPage[] = [
    { url: '/',                        priority: '1.0', changefreq: 'daily' },
    { url: '/manuales',                priority: '0.9', changefreq: 'daily' },
    { url: '/manuales?cat=melamina',   priority: '0.8', changefreq: 'weekly' },
    { url: '/manuales?cat=madera',     priority: '0.8', changefreq: 'weekly' },
    { url: '/manuales?cat=mdf',        priority: '0.8', changefreq: 'weekly' },
    { url: '/manuales?cat=bambu',      priority: '0.7', changefreq: 'weekly' },
    { url: '/manuales?cat=herramientas', priority: '0.7', changefreq: 'weekly' },
  ];

  const manualPages: SitemapPage[] = MANUALES.map(m => ({
    url: `/manuales/${m.slug}`,
    priority: m.destacado ? '0.9' : '0.7',
    changefreq: 'monthly',
    lastmod: m.fecha,
  }));

  const allPages: SitemapPage[] = [...staticPages, ...manualPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${baseUrl}${p.url}</loc>
    <priority>${p.priority}</priority>
    <changefreq>${p.changefreq}</changefreq>
    ${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
