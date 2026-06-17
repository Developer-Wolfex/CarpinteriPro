// src/data/glosario.ts
export interface TerminoGlosario {
  termino: string;
  definicion: string;
}

export interface CategoriaGlosario {
  categoria: string;
  emoji: string;
  terminos: TerminoGlosario[];
}

export const GLOSARIO: CategoriaGlosario[] = [
  {
    categoria: 'Carpintería general',
    emoji: '🪵',
    terminos: [
      { termino: 'Veta', definicion: 'Dirección y patrón de las fibras de la madera, visible en su superficie. Cortar o lijar a favor de la veta da mejores resultados.' },
      { termino: 'Escuadra', definicion: 'Herramienta para verificar o trazar ángulos de 90°. También se usa para describir que una pieza está "a escuadra" (perfectamente recta).' },
      { termino: 'Tarugo', definicion: 'Pieza cilíndrica de madera o plástico que se inserta en un orificio para reforzar una unión o rellenar un agujero.' },
      { termino: 'Inglete', definicion: 'Corte en ángulo (normalmente 45°) usado para unir dos piezas formando una esquina, como en marcos de cuadros.' },
      { termino: 'Testa', definicion: 'El extremo de una pieza de madera cortado transversalmente a la veta — la zona por donde la madera absorbe humedad más rápido.' },
      { termino: 'Avellanado', definicion: 'Rebaje cónico hecho antes de atornillar para que la cabeza del tornillo quede al ras o enterrada en la superficie.' },
      { termino: 'Pretaladrar', definicion: 'Hacer un orificio guía antes de atornillar, para evitar que la madera o el tablero se rajen.' },
      { termino: 'Encolado', definicion: 'Proceso de unir piezas con pegamento, generalmente reforzado con prensas mientras seca.' },
      { termino: 'Aparejo / sellador', definicion: 'Producto que se aplica antes de pintar para uniformar la absorción de la superficie, especialmente en MDF.' },
    ],
  },
  {
    categoria: 'Melamina y tableros',
    emoji: '📐',
    terminos: [
      { termino: 'MDP', definicion: 'Tablero de partículas de densidad media, el núcleo más común bajo el papel melamínico en muebles modulares.' },
      { termino: 'Confirmat', definicion: 'Tornillo de rosca gruesa diseñado para unir tableros canto a canto, el estándar en muebles de melamina.' },
      { termino: 'Canteado', definicion: 'Proceso de cubrir el borde cortado de un tablero con cinta de canto (PVC, ABS o melamínico) para sellarlo y darle terminación.' },
      { termino: 'Cazoleta / tapa tornillo', definicion: 'Pieza pequeña que cubre la cabeza de un tornillo confirmat visto, a juego con el color del tablero.' },
      { termino: 'Fresado de bisagra', definicion: 'Orificio circular (normalmente de 35mm) hecho en una puerta para alojar el cuerpo de una bisagra de copa.' },
      { termino: 'Despiece', definicion: 'Lista detallada de todas las piezas que componen un mueble, con sus medidas exactas, lista para cortar.' },
      { termino: 'Modulación', definicion: 'Diseño de un mueble (o conjunto de muebles) en unidades estándar combinables, en vez de medidas únicas para cada espacio.' },
    ],
  },
  {
    categoria: 'Herrajes',
    emoji: '🔩',
    terminos: [
      { termino: 'Bisagra de copa', definicion: 'Bisagra oculta europea que se instala en un orificio fresado en la puerta, regulable en tres ejes.' },
      { termino: 'Corredera telescópica', definicion: 'Sistema de rieles que permite que un cajón se deslice hacia afuera en todo su recorrido.' },
      { termino: 'Cierre suave (soft-close)', definicion: 'Mecanismo amortiguador que frena el cierre de una puerta o cajón, evitando golpes y dando sensación de calidad.' },
      { termino: 'Push-to-open', definicion: 'Sistema que abre una puerta o cajón con un simple empuje, sin necesidad de tirador visible.' },
      { termino: 'Soporte de repisa regulable', definicion: 'Pieza metálica o plástica que se inserta en una hilera de orificios para sostener una repisa a distintas alturas.' },
      { termino: 'Bisagra de codo / medio codo', definicion: 'Variantes de bisagra de copa diseñadas para puertas de muebles de esquina.' },
    ],
  },
  {
    categoria: 'Acabados',
    emoji: '🎨',
    terminos: [
      { termino: 'Veta abierta / poro abierto', definicion: 'Acabado que deja visible (o simula) la textura porosa natural de la madera, sin rellenarla por completo.' },
      { termino: 'Laca', definicion: 'Acabado líquido que forma una película dura y brillante o mate sobre la superficie, muy usado en muebles pintados.' },
      { termino: 'Imprimante / fondo', definicion: 'Primera capa aplicada antes del color final, que mejora la adherencia y uniforma la absorción del material.' },
      { termino: 'Símil madera', definicion: 'Acabado impreso (en melamina o enchapado sintético) que imita la apariencia de una veta de madera real.' },
      { termino: 'Mate / satinado / brillante', definicion: 'Niveles de reflejo de un acabado, de menor a mayor brillo respectivamente.' },
    ],
  },
];
