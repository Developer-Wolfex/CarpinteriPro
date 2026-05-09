// src/data/manuales.ts
// =====================================================
// ARCHIVO CENTRAL DE DATOS
// Para agregar nuevos manuales, solo agrega un objeto aquí.
// =====================================================

export type Categoria = 'melamina' | 'madera' | 'mdf' | 'bambu' | 'herramientas';

export interface Manual {
  slug: string;
  titulo: string;
  descripcion: string;
  categoria: Categoria;
  imagen: string;
  nivel: 'Básico' | 'Intermedio' | 'Avanzado';
  duracion: string;         // Ej: "2 horas"
  fecha: string;            // ISO: "2024-01-15"
  destacado?: boolean;
  keywords?: string[];      // Para SEO
}

export const CATEGORIAS: Record<Categoria, { label: string; color: string; emoji: string; bgColor: string; textColor: string; imagen: string; descripcion: string }> = {
  melamina:    {
    label: 'Melamina', color: '', emoji: '🪵',
    bgColor: 'rgba(100,255,218,.15)', textColor: '#64ffda',
    // Foto real: tablero melamina blanco con canto — pon en public/img/cats/melamina.jpg
    imagen: '/image/melamina/melamina.png',
    descripcion: 'Muebles modernos',
  },
  madera:      {
    label: 'Madera', color: '', emoji: '🌳',
    bgColor: 'rgba(6,182,212,.2)', textColor: '#a5f3fc',
    // Foto real: madera maciza con veta — pon en public/img/cats/madera.jpg
    imagen: '/image/madera/madera.png',
    descripcion: 'Madera maciza y tablones',
  },
  mdf:         {
    label: 'MDF', color: '', emoji: '📦',
    bgColor: 'rgba(8,145,178,.2)', textColor: '#cffafe',
    // Foto real: tablero MDF cortado — pon en public/img/cats/mdf.jpg
    imagen: '/image/mdf/MDF.png',
    descripcion: 'Fibra de densidad media',
  },
  bambu:       {
    label: 'Bambú', color: '', emoji: '🎋',
    bgColor: 'rgba(14,116,144,.25)', textColor: '#67e8f9',
    // Foto real: bambú natural — pon en public/img/cats/bambu.jpg
    imagen: '/image/bambu/bambu.png',
    descripcion: 'Material sostenible',
  },
  herramientas:{
    label: 'Herramientas', color: '', emoji: '🔧',
    bgColor: 'rgba(21,94,117,.3)', textColor: '#a5f3fc',
    // Foto real: herramientas carpintería — pon en public/img/cats/herramientas.jpg
    imagen: '/image/herramientas/herramientas.png',
    descripcion: 'Guías y técnicas',
  },
};

export const MANUALES: Manual[] = [
  // ─── MELAMINA ───────────────────────────────────────────
  {
    slug: 'cocina-melamina-moderna',
    titulo: 'Cocina Moderna en Melamina paso a paso',
    descripcion: 'Aprende a construir una cocina completa con melamina 18mm, bisagras y cajones deslizantes. Incluye planos y lista de materiales.',
    categoria: 'melamina',
    imagen: '/image/melamina/cocinamelamina2.png',
    nivel: 'Intermedio',
    duracion: '30 min',
    fecha: '08-08-2026',
    destacado: true,
    keywords: ['cocina melamina', 'mueble cocina', 'melamina 18mm', 'conceptos de melamina'],
  },
  

  // ─── MADERA ─────────────────────────────────────────────
  {
    slug: 'mesa-madera-maciza',
    titulo: 'Mesa de Madera Maciza Rústica',
    descripcion: 'Construye una mesa de comedor sólida con madera pino o eucalipto. Técnicas de ensamble y acabado natural.',
    categoria: 'madera',
    imagen: '/image/madera/mesamadera3.png',
    nivel: 'Intermedio',
    duracion: '30 min',
    fecha: '08-08-2026',
    destacado: true,
    keywords: ['mesa madera maciza', 'mesa rustica madera'],
  },
  

  // ─── MDF ────────────────────────────────────────────────
  {
    slug: 'cabecera-cama-mdf',
    titulo: 'Cabecera de Cama Tapizada en MDF',
    descripcion: 'Crea una cabecera acolchonada con MDF, espuma y tela. Resultado profesional a bajo costo.',
    categoria: 'mdf',
    imagen: '/image/mdf/cabeceracama1.png',
    nivel: 'Básico',
    duracion: '4 horas',
    fecha: '2024-03-15',
    destacado: true,
    keywords: ['cabecera cama mdf', 'cabecero tapizado'],
  },
  

  // ─── BAMBÚ ──────────────────────────────────────────────
  {
    slug: 'mueble-bambu-moderno',
    titulo: 'Mueble Moderno con Bambú',
    descripcion: 'El bambú como material sostenible y moderno. Técnicas de corte, unión y acabado.',
    categoria: 'bambu',
    imagen: '/image/bambu/bambu2.jpg',
    nivel: 'Intermedio',
    duracion: '5 horas',
    fecha: '2024-03-20',
    keywords: ['mueble bambu', 'carpinteria bambu'],
  },

  // ─── HERRAMIENTAS ───────────────────────────────────────
  {
    slug: 'guia-sierra-circular',
    titulo: 'Guía Completa: Sierra Circular',
    descripcion: 'Domina la sierra circular para cortes perfectos en melamina y madera. Seguridad, accesorios y técnicas.',
    categoria: 'herramientas',
    imagen: '/image/herramientas/sierracircular.png',
    nivel: 'Básico',
    duracion: '15 min minutos',
    fecha: '2024-03-05',
    destacado: true,
    keywords: ['sierra circular carpinteria', 'como usar sierra circular'],
  }
];

// ─── HELPERS ────────────────────────────────────────────
export function getManualesByCategoria(cat: Categoria): Manual[] {
  return MANUALES.filter(m => m.categoria === cat);
}

export function getManualBySlug(slug: string): Manual | undefined {
  return MANUALES.find(m => m.slug === slug);
}

export function getManualesDestacados(): Manual[] {
  return MANUALES.filter(m => m.destacado);
}
