import {
	Baby,
	Brain,
	ClipboardList,
	GraduationCap,
	HeartHandshake,
	Speech,
	UsersRound,
} from 'lucide-astro';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

type Service = {
	icon: AstroComponentFactory;
	title: string;
	description: string;
	url: string;
};

export const services: Service[] = [
	{
		icon: Brain,
		title: 'Terapia cognitivo-conductual',
		description:
			'Enfoque terapéutico basado en evidencia científica que ayuda a identificar y modificar pensamientos, emociones y conductas disfuncionales.',
		url: '/servicios/terapia-cognitivo-conductual',
	},
	{
		icon: Baby,
		title: 'Psicología Infantil',
		description:
			'Terapia especializada para niños que les ayuda a comprender y gestionar sus emociones, mejorar su conducta y desarrollar habilidades sociales.',
		url: '/servicios/psicologia-infantil',
	},
	{
		icon: HeartHandshake,
		title: 'Terapia de Pareja',
		description:
			'Espacio seguro para mejorar la comunicación, fortalecer el vínculo emocional y resolver conflictos en la relación.',
		url: '/servicios/terapia-pareja',
	},
	{
		icon: UsersRound,
		title: 'Terapia sistémica o familiar',
		description:
			'Abordaje terapéutico que trabaja con la familia como sistema para mejorar la comunicación y resolver conflictos.',
		url: '/servicios/terapia-sistemica-familiar',
	},
	{
		icon: ClipboardList,
		title: 'Evaluación Diagnóstica',
		description:
			'Evaluaciones psicológicas completas para niños, adolescentes y adultos, incluyendo trastornos psicológicos y del neurodesarrollo.',
		url: '/servicios/evaluacion-diagnostica',
	},
	{
		icon: Speech,
		title: 'Logopedia',
		description:
			'Tratamiento especializado para dificultades en el habla, el lenguaje, la voz y la comunicación.',
		url: '/servicios/logopedia',
	},
	{
		icon: GraduationCap,
		title: 'Pedagogía',
		description:
			'Apoyo especializado para niños y adolescentes con dificultades en el aprendizaje y necesidades educativas especiales.',
		url: '/servicios/pedagogia',
	},
];
