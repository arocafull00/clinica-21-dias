type Service = {
	name: string;
	title: string;
	description: string;
	url: string;
};

export const services: Service[] = [
	{
		name: 'Neurodivergencias',
		title: 'Evaluación, diagnóstico e intervención psicológica de neurodivergencias',
		description:
			'Enfoque terapéutico basado en evidencia científica que ayuda a identificar y modificar pensamientos, emociones y conductas disfuncionales.',
		url: '/servicios/terapia-cognitivo-conductual',
	},
	{
		name: 'Psicología infantil',
		title: 'Psicología Infantil',
		description:
			'Terapia especializada para niños que les ayuda a comprender y gestionar sus emociones, mejorar su conducta y desarrollar habilidades sociales.',
		url: '/servicios/psicologia-infantil',
	},
	{
		name: 'Terapia de pareja',
		title: 'Terapia de Pareja',
		description:
			'Espacio seguro para mejorar la comunicación, fortalecer el vínculo emocional y resolver conflictos en la relación.',
		url: '/servicios/terapia-pareja',
	},
	{
		name: 'Evaluación diagnóstica',
		title: 'Evaluación Diagnóstica',
		description:
			'Evaluaciones psicológicas completas para niños, adolescentes y adultos, incluyendo trastornos psicológicos y del neurodesarrollo.',
		url: '/servicios/evaluacion-diagnostica',
	},
	{
		name: 'Logopedia',
		title: 'Logopedia',
		description:
			'Tratamiento especializado para dificultades en el habla, el lenguaje, la voz y la comunicación.',
		url: '/servicios/logopedia',
	},
	{
		name: 'Terapia sistémica o familiar',
		title: 'Terapia sistémica o familiar',
		description:
			'Abordaje terapéutico que trabaja con la familia como sistema para mejorar la comunicación y resolver conflictos.',
		url: '/servicios/terapia-sistemica-familiar',
	},
	{
		name: 'Pedagogía',
		title: 'Pedagogía',
		description:
			'Apoyo especializado para niños y adolescentes con dificultades en el aprendizaje y necesidades educativas especiales.',
		url: '/servicios/pedagogia',
	},
	{
		name: 'Fisioterapia',
		title: 'Fisioterapia',
		description:
			'Tratamiento para recuperar movilidad, aliviar dolor y prevenir lesiones mediante ejercicio terapéutico y técnicas manuales.',
		url: '/servicios/fisioterapia',
	},
	{
		name: 'Nutrición',
		title: 'Nutrición',
		description:
			'Asesoramiento nutricional personalizado para mejorar hábitos alimentarios, control de peso y bienestar integral.',
		url: '/servicios/nutricion',
	},
];
