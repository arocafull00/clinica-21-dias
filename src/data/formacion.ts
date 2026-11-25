// Datos de ejemplo (mock) de la sección Formación.
// No hay pagos reales: el modal de pago solo enseña el flujo y lleva al reproductor.
import type { ImageMetadata } from 'astro';
import miniatura1 from '../assets/formacion/miniatura-1.webp';
import miniatura2 from '../assets/formacion/miniatura-2.webp';
import miniatura3 from '../assets/formacion/miniatura-3.webp';

export const PONENTE = 'Clara Franco';

// Vídeo de ejemplo para el reproductor. Cada contenido puede tener el suyo en `video`.
export const VIDEO_DEMO = 'https://cdn.pixabay.com/video/2015/08/08/125-135736646_medium.mp4';

export const ACCESO_VITALICIO = {
	precio: 149,
	moneda: '€',
	resumen: 'Un único pago. Acceso para siempre a todos los cursos y a los que vayan llegando.',
	incluye: [
		'Todos los cursos, clases y vídeos de la plataforma',
		'Contenido nuevo cada mes sin coste adicional',
		'Materiales descargables en PDF',
		'Acceso desde ordenador, tablet y móvil',
	],
};

// Clave de localStorage que marca el acceso simulado tras el "pago".
export const ACCESO_STORAGE_KEY = 'formacion-acceso-demo';

const miniaturas = [miniatura1, miniatura2, miniatura3];

export type Audiencia = 'psicologos' | 'familias';
export type Formato = 'Curso' | 'Clase' | 'Divulgación';
export type Tema =
	| 'TEA'
	| 'TDAH'
	| 'Altas capacidades'
	| 'Dislexia'
	| 'TDL'
	| 'Procesamiento sensorial'
	| 'Tourette';

type ContenidoBase = {
	slug: string;
	titulo: string;
	descripcion: string;
	lecciones: string[];
	tema: Tema;
	formato: Formato;
	audiencia: Audiencia[];
	minutos: number;
	valoracion: number;
	gratis: boolean;
	publicado: string; // ISO
	video?: string;
};

export type Contenido = ContenidoBase & {
	ponente: string;
	miniatura: ImageMetadata;
	video: string;
};

const base: ContenidoBase[] = [
	{
		slug: 'procesamiento-sensorial-autismo',
		titulo: 'Procesamiento sensorial en el autismo',
		descripcion:
			'Qué significa ser hiper o hiposensible, cómo se manifiesta en el día a día y qué ajustes del entorno ayudan de verdad.',
		lecciones: [
			'Los ocho sentidos: más allá de los cinco clásicos',
			'Hipersensibilidad e hiposensibilidad',
			'Cómo leer las señales de sobrecarga',
			'Adaptaciones en casa y en el aula',
			'Construir una dieta sensorial',
		],
		tema: 'Procesamiento sensorial',
		formato: 'Curso',
		audiencia: ['psicologos', 'familias'],
		minutos: 95,
		valoracion: 4.9,
		gratis: false,
		publicado: '2026-11-18',
	},
	{
		slug: 'tea-en-adultos-evaluacion',
		titulo: 'Evaluación del autismo en la edad adulta',
		descripcion:
			'Herramientas y criterios para evaluar el TEA en adultos, con especial atención a los perfiles que pasaron desapercibidos en la infancia.',
		lecciones: [
			'Por qué se diagnostica tarde',
			'Entrevista clínica y anamnesis',
			'Instrumentos estandarizados: usos y límites',
			'Diagnóstico diferencial',
			'Devolución del diagnóstico',
		],
		tema: 'TEA',
		formato: 'Curso',
		audiencia: ['psicologos'],
		minutos: 110,
		valoracion: 4.9,
		gratis: false,
		publicado: '2026-11-12',
	},
	{
		slug: 'que-es-el-tdah',
		titulo: 'Qué es el TDAH (y qué no es)',
		descripcion: 'Una explicación clara del TDAH, sin tecnicismos, para desmontar los mitos más habituales.',
		lecciones: ['Qué es el TDAH', 'Mitos frecuentes', 'Cuándo consultar'],
		tema: 'TDAH',
		formato: 'Divulgación',
		audiencia: ['familias', 'psicologos'],
		minutos: 12,
		valoracion: 4.8,
		gratis: true,
		publicado: '2026-11-03',
	},
	{
		slug: 'rutinas-tdah-en-casa',
		titulo: 'Rutinas que funcionan en casa con TDAH',
		descripcion: 'Estrategias concretas para organizar mañanas, deberes y noches con menos conflicto.',
		lecciones: ['Anticipar y visualizar', 'Mañanas sin prisas', 'Deberes por bloques', 'Rutina de sueño'],
		tema: 'TDAH',
		formato: 'Clase',
		audiencia: ['familias'],
		minutos: 28,
		valoracion: 4.7,
		gratis: false,
		publicado: '2026-10-28',
	},
	{
		slug: 'enmascaramiento-en-ninas',
		titulo: 'Enmascaramiento: el autismo que no se ve en niñas',
		descripcion: 'Por qué tantas niñas autistas pasan desapercibidas y qué señales conviene mirar.',
		lecciones: ['Qué es el camuflaje social', 'Señales tempranas', 'El coste del enmascaramiento'],
		tema: 'TEA',
		formato: 'Divulgación',
		audiencia: ['familias', 'psicologos'],
		minutos: 18,
		valoracion: 4.9,
		gratis: true,
		publicado: '2026-10-20',
	},
	{
		slug: 'intervencion-tdah-adolescentes',
		titulo: 'Intervención en TDAH durante la adolescencia',
		descripcion: 'Un programa de intervención paso a paso para trabajar con adolescentes con TDAH y sus familias.',
		lecciones: [
			'Cambios propios de la adolescencia',
			'Funciones ejecutivas en el instituto',
			'Motivación y autonomía',
			'Trabajo con la familia',
			'Coordinación con el centro educativo',
		],
		tema: 'TDAH',
		formato: 'Curso',
		audiencia: ['psicologos'],
		minutos: 120,
		valoracion: 4.8,
		gratis: false,
		publicado: '2026-10-09',
	},
	{
		slug: 'altas-capacidades-mitos',
		titulo: 'Altas capacidades: cinco mitos frecuentes',
		descripcion: 'Lo que las altas capacidades son y no son, contado en diez minutos.',
		lecciones: ['Cinco mitos, cinco realidades', 'Cuándo pedir una evaluación'],
		tema: 'Altas capacidades',
		formato: 'Divulgación',
		audiencia: ['familias'],
		minutos: 10,
		valoracion: 4.6,
		gratis: true,
		publicado: '2026-09-30',
	},
	{
		slug: 'dislexia-deteccion-temprana',
		titulo: 'Detección temprana de la dislexia en el aula',
		descripcion: 'Señales de alerta en infantil y primaria, y cómo coordinarse entre familia, escuela y clínica.',
		lecciones: ['Primeras señales', 'Cribado en el aula', 'Derivación y evaluación', 'Adaptaciones básicas'],
		tema: 'Dislexia',
		formato: 'Clase',
		audiencia: ['psicologos', 'familias'],
		minutos: 35,
		valoracion: 4.7,
		gratis: false,
		publicado: '2026-09-18',
	},
	{
		slug: 'tdl-lenguaje-y-escuela',
		titulo: 'TDL: lenguaje, escuela y autoestima',
		descripcion: 'El trastorno del desarrollo del lenguaje explicado desde la evaluación hasta el día a día en clase.',
		lecciones: ['Qué es el TDL', 'Evaluación del lenguaje', 'Impacto académico', 'Autoestima y relaciones'],
		tema: 'TDL',
		formato: 'Curso',
		audiencia: ['psicologos', 'familias'],
		minutos: 80,
		valoracion: 4.6,
		gratis: false,
		publicado: '2026-08-22',
	},
	{
		slug: 'tourette-en-el-colegio',
		titulo: 'Tics y Tourette: cómo explicarlo en el colegio',
		descripcion: 'Ideas sencillas para explicar los tics a compañeros y profesorado.',
		lecciones: ['Qué son los tics', 'Hablarlo en clase'],
		tema: 'Tourette',
		formato: 'Divulgación',
		audiencia: ['familias'],
		minutos: 14,
		valoracion: 4.5,
		gratis: true,
		publicado: '2026-08-10',
	},
	{
		slug: 'informe-diagnostico-neurodesarrollo',
		titulo: 'Cómo redactar un informe de neurodesarrollo claro',
		descripcion: 'Estructura, lenguaje y recomendaciones para informes útiles para familias y centros educativos.',
		lecciones: ['Estructura del informe', 'Lenguaje accesible', 'Recomendaciones prácticas'],
		tema: 'TEA',
		formato: 'Clase',
		audiencia: ['psicologos'],
		minutos: 42,
		valoracion: 4.9,
		gratis: false,
		publicado: '2026-07-29',
	},
	{
		slug: 'altas-capacidades-acompanamiento',
		titulo: 'Acompañar las altas capacidades en consulta',
		descripcion: 'Intervención emocional y social con niños y adolescentes con altas capacidades.',
		lecciones: ['Perfil emocional', 'Perfeccionismo y frustración', 'Relaciones con iguales', 'Orientación a familias'],
		tema: 'Altas capacidades',
		formato: 'Curso',
		audiencia: ['psicologos'],
		minutos: 70,
		valoracion: 4.7,
		gratis: false,
		publicado: '2026-07-15',
	},
];

export const contenidos: Contenido[] = base.map((c, i) => ({
	...c,
	ponente: PONENTE,
	miniatura: miniaturas[i % miniaturas.length],
	video: c.video ?? VIDEO_DEMO,
}));

export const urlContenido = (c: Contenido) => `/formacion/curso/${c.slug}`;
export const urlReproductor = (c: Contenido) => `/formacion/curso/${c.slug}/ver`;

export type Categoria = {
	slug: string;
	nombre: string;
	titulo: string;
	descripcion: string;
	filtro: (c: Contenido) => boolean;
};

export const categorias: Categoria[] = [
	{
		slug: 'cursos',
		nombre: 'Cursos',
		titulo: 'Cursos',
		descripcion: 'Formación completa, de principio a fin, sobre cada neurodivergencia. Incluida en el acceso vitalicio.',
		filtro: (c) => c.formato === 'Curso',
	},
	{
		slug: 'material-gratuito',
		nombre: 'Material gratuito',
		titulo: 'Material gratuito',
		descripcion: 'Vídeos divulgativos abiertos para entender las neurodivergencias sin tecnicismos.',
		filtro: (c) => c.gratis,
	},
	{
		slug: 'para-psicologos',
		nombre: 'Para psicólogos',
		titulo: 'Para psicólogos',
		descripcion: 'Evaluación, diagnóstico e intervención: formación práctica para profesionales.',
		filtro: (c) => c.audiencia.includes('psicologos'),
	},
	{
		slug: 'para-familias',
		nombre: 'Para familias',
		titulo: 'Para familias',
		descripcion: 'Claves para entender, acompañar y explicar la neurodivergencia en casa y en el colegio.',
		filtro: (c) => c.audiencia.includes('familias'),
	},
];

export const AUDIENCIA_LABEL: Record<Audiencia, string> = {
	psicologos: 'Psicólogos',
	familias: 'Familias',
};

export function rangoDuracion(minutos: number): string {
	if (minutos < 15) return 'Menos de 15 min';
	if (minutos <= 45) return 'De 15 a 45 min';
	return 'Más de 45 min';
}

export const RANGOS_DURACION = ['Menos de 15 min', 'De 15 a 45 min', 'Más de 45 min'];

export function formatoDuracion(minutos: number): string {
	if (minutos < 60) return `${minutos} min`;
	const h = Math.floor(minutos / 60);
	const m = minutos % 60;
	return m ? `${h} h ${m} min` : `${h} h`;
}
