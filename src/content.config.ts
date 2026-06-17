// src/content.config.ts
// Arquitectura de contenido educativo — Content Collections de Astro.
// Cada colección separa metadatos validados (frontmatter) del contenido
// largo (Markdown), escalable a cientos de páginas sin volverse frágil.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    nivel: z.enum(['Básico', 'Intermedio', 'Avanzado']),
    categoriaMaterial: z.enum(['melamina', 'madera', 'mdf', 'mixto']),
    tiempoEstimado: z.string(),
    dificultad: z.number().min(1).max(5),
    materiales: z.array(z.string()),
    herramientas: z.array(z.string()),
    imagen: z.string().optional(),
    destacado: z.boolean().optional(),
    fecha: z.string(),
    keywords: z.array(z.string()).optional(),
  }),
});

const materiales = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materiales' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    resumen: z.string(),
    costoAprox: z.string(),
    resistencia: z.string(),
    mantenimiento: z.string(),
    pros: z.array(z.string()),
    contras: z.array(z.string()),
    cuandoUsar: z.string(),
    cuandoNoUsar: z.string(),
    imagen: z.string().optional(),
    fecha: z.string(),
    keywords: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    categoria: z.string(),
    fecha: z.string(),
    imagen: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    faq: z.array(z.object({ pregunta: z.string(), respuesta: z.string() })).optional(),
  }),
});

export const collections = { proyectos, materiales, blog };
