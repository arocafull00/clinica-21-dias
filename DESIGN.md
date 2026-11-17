---
name: Clínica 21 Días Psicoeducación
description: Editorial y sereno — papel cálido, serif de display, verde salvia y lavanda en formas orgánicas, fotos de la clínica en blanco y negro
source: tailwind.config.mjs + src/styles/global.css
colors:
  paper: "#f7f6f2"
  ink: "#1d1d1b"
  ink-soft: "#55554f"
  ink-line: "#e2e0d8"
  sage: primary-300 (#acc0a4) para formas, primary-600 (#56734f) para acciones
  lavender: lavender-200 (#ddd3ec)
typography:
  display: Instrument Serif 400 (.display), titulares grandes, interlineado ~1
  body: Manrope 400–700
  eyebrow: .eyebrow — 11px, mayúsculas, tracking 0.22em, línea a la derecha
---

# Design System: Clínica 21 Días Psicoeducación

## Visión

Página editorial y tranquila: mucho aire, titulares serif grandes, poco texto. La calidez la ponen las formas orgánicas (salvia y lavanda) que asoman detrás de las fotos, no las tarjetas ni los iconos.

## Paleta

| Token | Uso |
| --- | --- |
| `bg-paper` | Fondo de toda la web |
| `text-ink` / `text-ink-soft` | Titulares y texto / texto secundario |
| `border-ink-line` | Divisores finos entre bloques |
| `bg-primary-300` | Formas orgánicas verdes detrás de fotos |
| `bg-lavender-200` | Formas orgánicas lilas (esquinas de sección) |
| `primary-600` | Acciones y hover de enlaces |

`secondary-*` se mantiene como escala neutra cálida por compatibilidad.

## Componentes

- **Botón**: `.btn` (salvia) y `.btn btn-dark` (tinta). Degradado + sombras interiores y halo del color. `.btn-sm` para la cabecera. Sin iconos.
- **Enlace secundario**: `.link-line` (subrayado de 1px que se recoge al hover).
- **Eyebrow**: `<p class="eyebrow">` encima de cada `h2`.
- **Fotos**: siempre `.photo` (escala de grises) dentro de un contenedor con `border-radius` asimétrico; en la galería recuperan el color al hover.
- **Formas**: `.blob` (absolute, z-index -1). La sección que las contiene necesita `isolate` y normalmente `overflow-hidden`.
- **Bordes de página**: `.wrap` para contenido centrado; `.pl-edge` / `lg:pr-edge` cuando una imagen debe llegar al borde de la ventana.
- **Servicios**: lista en rejilla con divisores interiores, nombre corto (`name` en `src/data/services.ts`) y flecha.
- **Páginas de servicio**: `ServiceLayout` con cabecera (eyebrow, h1, descripción, foto con formas), contenido en `.service-content` (estiliza h2/h3/p/ul del slot) y aside fijo con CTA.

## Do / Don't

- Do: jerarquía con tamaño de letra, aire y divisores finos.
- Do: textos cortos; una frase de apoyo por sección como máximo.
- Don't: tarjetas con sombra, iconos decorativos, degradados en titulares, colores fuera de la paleta.
