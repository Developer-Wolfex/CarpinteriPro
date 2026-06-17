
// src/pages/sitemap.xml.ts
import { MANUALES } from '../data/manuales';
import { getCollection } from 'astro:content';

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
    { url: '/',                   priority: '1.0', changefreq: 'daily',  lastmod: today() },
    { url: '/aprende',            priority: '0.9', changefreq: 'monthly', lastmod: today() },
    { url: '/aprende/basico',     priority: '0.8', changefreq: 'monthly', lastmod: today() },
    { url: '/aprende/intermedio', priority: '0.8', changefreq: 'monthly', lastmod: today() },
    { url: '/aprende/avanzado',   priority: '0.8', changefreq: 'monthly', lastmod: today() },
    { url: '/materiales',         priority: '0.9', changefreq: 'weekly', lastmod: today() },
    { url: '/melamina',           priority: '0.9', changefreq: 'monthly', lastmod: today() },
    { url: '/proyectos',          priority: '0.9', changefreq: 'weekly', lastmod: today() },
    { url: '/manuales',           priority: '0.9', changefreq: 'weekly', lastmod: today() },
    { url: '/blog',                priority: '0.8', changefreq: 'weekly', lastmod: today() },
    { url: '/glosario',           priority: '0.7', changefreq: 'monthly', lastmod: today() },
    { url: '/recursos',           priority: '0.7', changefreq: 'monthly', lastmod: today() },
  ];

  const manualPages: SitemapPage[] = MANUALES.map(m => ({
    url: `/manuales/${m.slug}`,
    priority: m.destacado ? '0.9' : '0.7',
    changefreq: 'monthly',
    lastmod: safeDate(m.fecha),
  }));

  const materiales = await getCollection('materiales');
  const materialPages: SitemapPage[] = materiales.map(m => ({
    url: `/materiales/${m.id}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: safeDate(m.data.fecha),
  }));

  const proyectos = await getCollection('proyectos');
  const proyectoPages: SitemapPage[] = proyectos.map(p => ({
    url: `/proyectos/${p.id}`,
    priority: p.data.destacado ? '0.9' : '0.7',
    changefreq: 'monthly',
    lastmod: safeDate(p.data.fecha),
  }));

  const blogPosts = await getCollection('blog');
  const blogPages: SitemapPage[] = blogPosts.map(post => ({
    url: `/blog/${post.id}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: safeDate(post.data.fecha),
  }));

  const pages = [...staticPages, ...manualPages, ...materialPages, ...proyectoPages, ...blogPages];

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
