# Clínica 21 Días Psicoeducación

Web corporativa de la clínica de psicología en Torrent. Presenta los servicios terapéuticos y permite contactar para solicitar cita.

## Servicios

- Terapia cognitivo-conductual
- Psicología infantil
- Terapia de pareja
- Terapia sistémica o familiar
- Evaluación diagnóstica
- Logopedia
- Pedagogía

## Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)

## Estructura

```
/
├── public/
│   └── svg/
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── ServiceCard.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Gallery.astro
│   │   ├── Navbar.astro
│   │   └── WhatsAppButton.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── ServiceLayout.astro
│   └── pages/
│       ├── index.astro
│       └── servicios/
└── package.json
```

## Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instalar dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build de producción en `./dist/` |
| `npm run preview` | Vista previa del build |
