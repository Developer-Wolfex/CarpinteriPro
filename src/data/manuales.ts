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
    fecha: '2026-05-01',
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
    fecha: '2026-05-01',
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
    duracion: '30 min',
    fecha: '2026-05-01',
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
    duracion: '30 min',
    fecha: '2026-05-01',
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
    duracion: '15 min',
    fecha: '2026-05-01',
    destacado: true,
    keywords: ['sierra circular carpinteria', 'como usar sierra circular'],
  },

  // ─── AGREGADOS: tenían contenido en src/content/manuales pero
  // faltaban aquí, por lo que getStaticPaths nunca generaba su página ───
  {
    slug: 'ropero-melamina-3-puertas',
    titulo: 'Ropero de Melamina con 3 Puertas Corredizas y Espejo',
    descripcion: 'Construye un ropero amplio con puertas corredizas, espejo y barra porta ropa. Medidas estándar, materiales y guía de ensamblaje.',
    categoria: 'melamina',
    imagen: '',
    nivel: 'Intermedio',
    duracion: '35 min',
    fecha: '2026-05-10',
    keywords: ['ropero melamina', 'closet corredizo', 'ropero con espejo'],
  },
  {
    slug: 'escritorio-melamina',
    titulo: 'Escritorio Esquinero de Melamina para Espacios Pequeños',
    descripcion: 'Aprovecha cada rincón con un escritorio en L hecho en melamina. Diseño, medidas y lista de materiales paso a paso.',
    categoria: 'melamina',
    imagen: '',
    nivel: 'Básico',
    duracion: '25 min',
    fecha: '2026-05-12',
    keywords: ['escritorio melamina', 'escritorio esquinero', 'mueble oficina melamina'],
  },
  {
    slug: 'estante-melamina-flotante',
    titulo: 'Estante Flotante de Melamina sin Soportes Visibles',
    descripcion: 'Instala repisas flotantes con anclaje oculto. Capacidad de carga según grosor y vano, y guía de instalación segura.',
    categoria: 'melamina',
    imagen: '',
    nivel: 'Básico',
    duracion: '15 min',
    fecha: '2026-05-14',
    keywords: ['estante flotante', 'repisa melamina', 'anclaje oculto'],
  },
  {
    slug: 'silla-madera-basica',
    titulo: 'Silla de Madera Maciza: Guía para Principiantes',
    descripcion: 'Domina uno de los retos más exigentes de la carpintería: ángulos, uniones y medidas estándar para una silla resistente y cómoda.',
    categoria: 'madera',
    imagen: '',
    nivel: 'Avanzado',
    duracion: '40 min',
    fecha: '2026-05-16',
    keywords: ['silla madera', 'silla artesanal', 'carpinteria sillas'],
  },
  {
    slug: 'tarima-madera-exterior',
    titulo: 'Tarima de Madera para Exterior (Deck)',
    descripcion: 'Transforma tu jardín o terraza con un deck de madera. Comparativa de maderas, fijación y mantenimiento para exteriores.',
    categoria: 'madera',
    imagen: '',
    nivel: 'Intermedio',
    duracion: '30 min',
    fecha: '2026-05-18',
    keywords: ['deck madera', 'tarima exterior', 'terraza de madera'],
  },
  {
    slug: 'molduras-decorativas-mdf',
    titulo: 'Molduras Decorativas en MDF para Interiores',
    descripcion: 'Zócalos, cornisas y paneles tipo wainscoting en MDF. Tipos de moldura, materiales y técnicas de instalación.',
    categoria: 'mdf',
    imagen: '',
    nivel: 'Básico',
    duracion: '20 min',
    fecha: '2026-05-20',
    keywords: ['molduras mdf', 'zocalos mdf', 'paneles decorativos'],
  },
  {
    slug: 'guia-router-fresadora',
    titulo: 'Guía Completa: Fresadora o Router de Carpintería',
    descripcion: 'Tipos de fresadora, anatomía y usos. Aprende a elegir y usar esta herramienta versátil para bordes, ranuras y encastres.',
    categoria: 'herramientas',
    imagen: '',
    nivel: 'Intermedio',
    duracion: '20 min',
    fecha: '2026-05-22',
    keywords: ['fresadora carpinteria', 'router de madera', 'tupi'],
  },
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
