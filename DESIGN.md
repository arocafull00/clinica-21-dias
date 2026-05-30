---
name: Clínica 21 Días Psicoeducación
description: Clínica luminosa en blanco — teal como guía, tipografía system sans, solo utilidades Tailwind
source: tailwind.config.mjs
colors:
  brand: primary-500
  brand-hover: primary-600
  brand-deep: primary-400
  brand-border: primary-300
  brand-tint: primary-50
  brand-band: primary-100/40
  ink: secondary-900
  ink-heading: secondary-800
  ink-body: secondary-500
  ink-nav: secondary-500
  ink-nav-hover: secondary-900
  surface: white
  surface-muted: secondary-50
  whatsapp: green-500
  whatsapp-hover: green-600
typography:
  display: text-5xl md:text-6xl font-bold leading-tight text-primary-500
  headline: text-4xl font-bold text-secondary-800
  headline-accent: text-primary-500
  title: text-xl md:text-2xl font-semibold text-secondary-800
  body-lead: text-xl text-secondary-500 leading-relaxed
  body: text-base text-secondary-500 leading-relaxed
  label: text-sm text-secondary-500
layout:
  page: bg-white font-sans scroll-smooth
  section: py-20
  container: container mx-auto px-4
  hero-offset: pt-32
rounded:
  card: rounded-lg
  section-top: rounded-t-3xl
  cta-hero: rounded-full
  logo: rounded-full
shadow:
  cta: shadow-md
  card: shadow-md
  card-hover: shadow-lg
  gallery: shadow-lg hover:shadow-xl
  fab: shadow-lg
---

# Design System: Clínica 21 Días Psicoeducación

Fuente única de tokens de color: `tailwind.config.mjs`. Todo el UI se implementa con **utilidades Tailwind** (`bg-primary-500`, `text-secondary-500`, etc.). No añadir CSS custom salvo `src/styles/global.css` (balance de texto y `prefers-reduced-motion`).

## 1. Visión

**North star: "El Consultorio Luminoso"**

Fondo blanco, aire entre secciones, teal como guía calmada. Calidez por formas accesibles, fotografía real y copy humano — no fondos crema ni gradientes decorativos en titulares.

| Característica | Clases Tailwind habituales |
| --- | --- |
| Base luminosa | `bg-white`, bandas `bg-primary-100/40` |
| Marca teal | `text-primary-500`, `bg-primary-500`, `border-primary-300` |
| Prosa legible | `text-secondary-500` sobre `bg-white` |
| CTA principal | `rounded-full`, `shadow-md`, hover `bg-primary-600` |
| Foco accesible | Plugin base → `outline` con `primary-400` (automático en `a`/`button`) |
| Contenedor | `container mx-auto px-4` (centro + `padding: 1rem` en config) |

## 2. Paleta (`theme.extend.colors`)

### Primary — Torrent Teal

| Escala | Hex | Uso Tailwind |
| --- | --- | --- |
| `primary-50` | `#e6fdfb` | Tintes muy suaves, fondos atmosféricos |
| `primary-100` | `#ccfbf7` | Orbe de fondo (`bg-primary-100 opacity-50 blur-[80px]`) |
| `primary-200` | `#99f7ef` | Acentos claros puntuales |
| `primary-300` | `#01598b` | Bordes de tarjetas (`border-primary-300`) |
| `primary-400` | `#034b70` | Subrayado nav (`after:bg-primary-400`), anillo skip link |
| `primary-500` | `#007494` | **Marca principal**: H1, enlaces marca, botones, estrellas |
| `primary-600` | `#034b70` | Hover botones (`hover:bg-primary-600`), skip link |
| `primary-700` | `#007f73` | Acentos oscuros alternativos |
| `primary-800` | `#00554c` | — |
| `primary-900` | `#002a26` | — |

**Regla:** Teal en titulares, CTAs, acentos en H2 y elementos pequeños. No cubrir viewport completo salvo bandas (`bg-primary-100/40`).

### Secondary — Tinta neutra (sustituye `gray-*` en código nuevo)

| Escala | Hex | Uso Tailwind |
| --- | --- | --- |
| `secondary-50` | `#f7f7f7` | Superficies suaves alternativas |
| `secondary-100`–`400` | Grises progresivos | Bordes, iconos secundarios |
| `secondary-500` | `#666666` | **Cuerpo y nav por defecto** (`text-secondary-500`) |
| `secondary-600`–`700` | — | Énfasis medio |
| `secondary-800` | `#383838` | Títulos de sección (`text-secondary-800`) |
| `secondary-900` | `#000000` | Máximo contraste si hace falta |

**Regla:** Prosa mínimo `text-secondary-500` sobre blanco. No bajar a `secondary-300`/`400` en párrafos largos.

### Accent — No usar en marca

La escala `accent-*` (violeta) está en config pero **no forma parte del sitio**. Prohibido `text-accent-*`, `bg-accent-*`, etc.

### Colores fuera del theme extend

| Uso | Clases |
| --- | --- |
| Página / tarjetas | `bg-white`, `text-white` en botones |
| Galería separador | `bg-secondary-100` (migrar desde `gray-100` al refactorizar) |
| WhatsApp FAB | `bg-green-500 hover:bg-green-600` |
| Divisores | `border-secondary-200` o `border-primary-300` según contexto |

## 3. Tipografía

Una sola familia: `font-sans` (system UI). Jerarquía solo con tamaño y peso.

| Rol | Utilidades |
| --- | --- |
| Display (hero H1) | `text-5xl md:text-6xl font-bold leading-tight text-primary-500` |
| Headline (H2 sección) | `text-4xl font-bold text-secondary-800` + span `text-primary-500` |
| Title (H3 tarjeta) | `text-xl font-semibold text-secondary-800` — **color sólido**, sin gradiente |
| Body lead | `text-xl text-secondary-500 leading-relaxed max-w-xl` |
| Body | `text-base text-secondary-500 leading-relaxed` |
| Label / footer | `text-sm text-secondary-500` |

`global.css`: `text-wrap: balance` en `h1–h3`, `pretty` en `.prose p`. Respetar `prefers-reduced-motion` (ya en global).

## 4. Layout y espaciado

| Patrón | Utilidades |
| --- | --- |
| `<html>` | `bg-white scroll-smooth font-sans` |
| Sección estándar | `py-20` |
| Hero | `pt-32` + `container` o `mx-auto` según bloque |
| Grid servicios | `grid` + `gap-8` / flex wrap en cards |
| Testimonios | `py-20 bg-primary-100/40 rounded-t-3xl` |
| Fondo ambiental | `fixed` orb: `bg-primary-100 opacity-50 blur-[80px]` (`Background.astro`) |

## 5. Elevación y profundidad

| Elemento | Clases |
| --- | --- |
| CTA hero | `shadow-md` |
| Tarjeta testimonio | `shadow-md` |
| Tarjeta servicio hover | `hover:shadow-lg transition-all duration-300` |
| Galería | `shadow-lg hover:shadow-xl` |
| Nav sticky | `bg-white/80 backdrop-blur-sm` |
| FAB | `shadow-lg` |

**Reglas:** Sombra en interactivos y media, no en ritmo de sección plano. No mezclar borde fino + sombra amplia en el mismo control. Blur decorativo solo: navbar, menú móvil, orbe de fondo.

## 6. Componentes (recetas Tailwind)

### Botón primario (hero)

```
inline-block text-white bg-primary-500 px-8 py-4 rounded-full text-lg font-semibold
hover:bg-primary-600 transition-colors shadow-md
```

### Botón secundario (páginas servicio)

```
text-white bg-primary-500 px-6 py-2 rounded-lg font-semibold hover:bg-primary-600 transition-colors
```

### Tarjeta servicio (enlace)

```
border border-primary-300 p-6 rounded-lg hover:shadow-lg transition-all duration-300
```

Título: `text-xl font-semibold text-primary-600` o `text-secondary-800` — **sin** `bg-clip-text` ni `bg-gradient-to-r`.

Descripción: `text-secondary-500`.

### Tarjeta testimonio

```
bg-white p-6 rounded-lg shadow-md
```

Estrellas: `text-primary-500`. Cita: cursiva + atribución alineada.

### Navegación

- Barra: `fixed w-full z-50 bg-white/80 backdrop-blur-sm`
- Logo texto: `text-primary-500 text-2xl font-bold`
- Enlaces: `text-secondary-500 text-xl hover:text-secondary-900` + pseudo `after:bg-primary-400` escala en hover
- Móvil: overlay `bg-white`, enlaces grandes

### Skip link

```
fixed left-4 top-0 z-[100] -translate-y-full px-4 py-2 bg-primary-600 text-white rounded-lg shadow-md
focus:translate-y-4 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
```

### H2 con acento

```html
<h2 class="text-4xl font-bold text-center text-secondary-800 mb-12">
  <span class="text-primary-500">Palabra</span> resto del título
</h2>
```

### WhatsApp FAB

```
fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 z-50
```

### Focus global (plugin en config)

`a:focus-visible` y `button:focus-visible`: outline `2px` `primary-400`, offset `2px`. No quitar salvo reemplazo equivalente visible.

## 7. Configuración Tailwind (referencia)

```js
content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']
container: { center: true, padding: '1rem' }
```

Importar estilos vía integración Astro + `@tailwind` en el pipeline del proyecto; componentes `.astro` solo con clases utilitarias.

## 8. Do / Don't

### Do

- Usar `primary-*` y `secondary-*` del theme extend.
- Mantener fondos `bg-white` o `bg-primary-100/40` en bandas.
- CTAs en español con verbo claro (`Pide tu cita`, `Contactar`).
- `container mx-auto px-4` para bloques centrados.
- Fotografía e ilustración reales de la clínica.

### Don't

- `accent-*`, gradientes en títulos, fondos crema/arena.
- `gray-*` en código nuevo (migrar a `secondary-*`).
- Patrones SaaS genéricos: métricas hero, grids de iconos idénticos, texto gradiente.
- Glassmorphism extra, stripes diagonales, eyebrows `uppercase tracking-widest` decorativos.
- CSS inline o `<style>` por componente si una utilidad Tailwind basta.

## 9. Checklist al tocar UI

1. ¿El color está en `primary` / `secondary` (o `green` solo para WhatsApp)?
2. ¿Hay clase Tailwind equivalente antes de escribir CSS?
3. ¿Hover/focus usan `primary-600` / foco del plugin?
4. ¿La sección respeta `py-20` y contenedor?
5. ¿Texto de cuerpo es `text-secondary-500` o más oscuro?
