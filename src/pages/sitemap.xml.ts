
// src/pages/sitemap.xml.ts
import { MANUALES } from '../data/manuales';

interface SitemapPage {
  url: string;
  priority: string;
  changefreq: string;
  lastmod: string;
}

function today(): string {
  return new Date().toISOString().split('T')[0];
}

function safeDate(fecha: string): string {
  const d = new Date(fecha);
  return isNaN(d.getTime()) ? today() : d.toISOString().split('T')[0];
}

export async function GET() {
  const base = 'https://carpinteriapro.com';

  const staticPages: SitemapPage[] = [
    { url: '/',         priority: '1.0', changefreq: 'daily',  lastmod: today() },
    { url: '/manuales', priority: '0.9', changefreq: 'weekly', lastmod: today() },
  ];

  const manualPages: SitemapPage[] = MANUALES.map(m => ({
    url: `/manuales/${m.slug}`,
    priority: m.destacado ? '0.9' : '0.7',
    changefreq: 'monthly',
    lastmod: safeDate(m.fecha),
  }));

  const pages = [...staticPages, ...manualPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${base}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
