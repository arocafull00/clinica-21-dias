---
name: Clínica 21 Días Psicoeducación
description: Warm, professional psychology clinic brand — bright clinic light on white, teal as steady guide
colors:
  primary: "#007494"
  primary-deep: "#034b70"
  primary-light: "#e6fdfb"
  primary-tint: "#ccfbf7"
  ink: "#1a1a1a"
  ink-muted: "#666666"
  ink-subtle: "#4b5563"
  surface: "#ffffff"
  surface-muted: "#f9fafb"
  surface-tint: "#e6fdfb"
  border: "#01598b"
  whatsapp: "#22c55e"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "9999px"
  section: "24px"
spacing:
  section-y: "80px"
  page-x: "clamp(1rem, 5vw, 8rem)"
  card: "24px"
  stack: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "8px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "8px 24px"
  card-service:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
---

# Design System: Clínica 21 Días Psicoeducación

## 1. Overview

**Creative North Star: "El Consultorio Luminoso"**

The visual system reads like a well-lit consultation room: white surfaces, generous air, and teal used as a calm guide through the page. Warmth comes from approachable shapes, real clinic photography, and human copy, not from cream backgrounds or decorative gradients. The site should feel local and trustworthy to someone in Torrent comparing clinics, never like a templated healthcare SaaS landing page.

Density stays moderate. Sections breathe with consistent vertical rhythm (`py-20`). The primary teal appears on headings, links, CTAs, and accent words, while body copy stays in readable gray ink on white or very light teal tints. Proof (services, facilities, testimonials) precedes contact; visual hierarchy supports that sequence.

**Key Characteristics:**

- Bright white base with soft teal atmospheric glow, not warm sand or paper tones
- System sans-serif throughout; hierarchy via size and weight, not font pairing
- Hybrid elevation: flat section rhythm, lift on cards and images at rest or hover
- Approachable components: pill primary CTA, rounded cards, underline-reveal navigation
- Real clinic imagery and SVG illustrations; no stock wellness clichés
- Explicit rejection of gradient text, SaaS hero patterns, and identical icon-card grids

## 2. Colors: The Torrent Teal Palette

A restrained clinical-warm palette: one committed teal accent on a true white field, gray ink for prose, and light teal tints for section separation.

### Primary

- **Torrent Teal** (#007494): Brand anchor. Hero H1, section accent words, primary buttons, footer links, star ratings, logo wordmark. The color of steady professional guidance.
- **Deep Clinic Teal** (#034b70): Hover and pressed states for buttons and darker heading accents (primary-600).
- **Teal Mist** (#e6fdfb / #ccfbf7): Section backgrounds (testimonials band, service callout boxes) and the soft blur orb behind the page. Atmosphere, not structure.
- **Teal Border** (#01598b): Service card borders (primary-300). Structural outline at low saturation.

### Secondary

- **Neutral Ink** (#666666): Body text, nav links default, contact rows. Must stay dark enough for 4.5:1 on white; prefer this over lighter gray-400 for prose.
- **Strong Ink** (#1a1a1a / gray-800): Section headings, card titles, emphasis within body copy.

### Tertiary

- **WhatsApp Green** (#22c55e): Reserved exclusively for the floating WhatsApp FAB. Not a brand accent; signals the channel, not the clinic identity.

### Neutral

- **Clinic White** (#ffffff): Page background, card surfaces, nav bar base.
- **Soft Gray** (#f9fafb): Gallery section fill (gray-50). Separates content blocks without tinting toward cream.
- **Divider Gray** (#e5e7eb): Horizontal rules, image caption borders.

### Named Rules

**The One Teal Voice Rule.** Teal carries identity on headings, links, CTAs, and small accent spans. It does not flood large surfaces except intentional tint bands (testimonials, callout boxes). Rarity preserves trust; saturation everywhere reads as marketing template.

**The No-Cream Rule.** Body backgrounds stay true white or neutral gray. Warm sand, parchment, or beige tints are prohibited; warmth is carried by photography, copy tone, and teal accent, not page color.

## 3. Typography

**Display Font:** System UI sans-serif (Tailwind `font-sans`, no custom webfont loaded)
**Body Font:** Same stack
**Label Font:** Same stack

**Character:** Clear, direct, and locally legible. No display serif or geometric startup sans. Weight and size do the hierarchy work; the voice stays professional without feeling institutional.

### Hierarchy

- **Display** (700, clamp 2.5rem–3.75rem / text-5xl–6xl, line-height 1.15): Page hero H1 only. Primary teal color. `text-wrap: balance` recommended.
- **Headline** (700, 2.25rem / text-4xl, line-height 1.2): Section H2 ("Nuestros Servicios", "Contacta con nosotros"). Gray-800 or primary accent span.
- **Title** (600, 1.25rem–1.5rem / text-xl–2xl): Card titles, contact subheads, service page H2.
- **Body** (400, 1.125rem / text-xl for lead, 1rem default, line-height 1.625): Hero subcopy, card descriptions, contact details. Max ~65ch in prose blocks. Gray-600 on white.
- **Label** (400–600, 0.875rem / text-sm): Footer service links, metadata, captions.

### Named Rules

**The System Sans Rule.** One sans family for all roles until a deliberate pairing is chosen. Do not add Inter, DM Sans, or other reflex fonts without explicit brand reason.

**The Solid Headline Rule.** Section and card titles use solid primary or ink colors. Gradient text (`background-clip: text`) is prohibited; it reads as generic SaaS decoration and fails PRODUCT.md anti-references.

## 4. Elevation

Hybrid depth: the page rhythm stays mostly flat (white and tinted sections, border-defined cards), while interactive surfaces and media gain lift through shadow.

Section backgrounds alternate white, gray-50, and primary-100/40 bands with rounded top corners on the testimonials block (`rounded-t-3xl`). A fixed soft teal blur orb (`blur-[80px]`, primary-100 at 50% opacity) sits behind content as ambient light, not glassmorphism.

### Shadow Vocabulary

- **CTA shadow** (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)` / `shadow-md`): Hero primary button at rest.
- **Card rest** (`shadow-md`): Testimonial cards.
- **Card hover** (`shadow-lg`): Service cards on hover; gallery figures use `shadow-lg` at rest, `shadow-xl` on hover.
- **FAB shadow** (`shadow-lg`): WhatsApp floating button.

### Named Rules

**The Flat-Until-Interactive Rule.** Default section layout has no shadow. Shadows appear on CTAs, cards, gallery images, and the WhatsApp FAB. Do not pair 1px borders with wide soft shadows on the same element.

**The Blur-Once Rule.** Backdrop blur appears on the sticky navbar (`bg-white/80 backdrop-blur-sm`) and mobile menu overlay only. Decorative glass cards elsewhere are prohibited.

## 5. Components

Components feel approachable and clear: friendly radii, obvious CTAs, underline-reveal navigation. Nothing toy-like; nothing sterile-hospital.

### Buttons

- **Shape:** Hero primary uses full pill (`rounded-full`, 9999px). Service pages and skip link use `rounded-lg` (8px).
- **Primary:** Torrent Teal background (#007494), white text, semibold. Hero: `px-8 py-4 text-lg`. Service CTA: `px-6 py-2`.
- **Hover / Focus:** Background shifts to Deep Clinic Teal (#034b70). Focus-visible: 2px solid primary-400 outline with 2px offset (global base style).
- **Labels:** Verb + object in Spanish ("Pide tu cita", "Contactar"). Standalone meaning required.

### Service Cards

- **Corner Style:** 8px (`rounded-lg`).
- **Background:** White with 1px teal border (`border-primary-300`).
- **Shadow Strategy:** Flat at rest; `shadow-lg` on hover with 300ms transition.
- **Internal Padding:** 24px (`p-6`).
- **Content:** Emoji icon (decorative, `aria-hidden`), solid-color title (no gradient), gray-600 description. Entire card is a link.

### Cards / Containers (Testimonials)

- **Corner Style:** 8px.
- **Background:** White on primary-100/40 section tint.
- **Shadow:** `shadow-md` at rest.
- **Internal Padding:** 24px.
- **Content:** Primary teal stars, italic quote, right-aligned attribution.

### Navigation

- **Desktop:** Fixed top bar, white/80 with blur. Logo + wordmark in primary-500. Links gray-600, hover gray-900, underline reveal via scaled `after` pseudo-element in primary-400. Text-xl.
- **Mobile:** Full-screen white overlay, text-4xl links, same underline treatment. Dialog with focus trap and escape close.
- **Skip link:** Fixed, hidden until focus; primary-600 background, white text.

### Gallery Figures

- **Corner Style:** 8px overflow hidden.
- **Shadow:** `shadow-lg` default, `shadow-xl` hover.
- **Caption:** gray-100 bar, semibold gray-800 title.

### WhatsApp FAB

- **Shape:** Circular pill, fixed bottom-right.
- **Color:** WhatsApp green (#22c55e), not brand teal.
- **Shadow:** `shadow-lg`, hover darkens to green-600.

### Signature: Section Accent Spans

- **Pattern:** H2 with one word in `text-primary-500` ("Contacta", "Instalaciones", "pacientes"). Solid color only. No gradient underline bars on new work (legacy gradient underline on Services heading should be removed when touched).

## 6. Do's and Don'ts

### Do:

- **Do** keep page backgrounds true white or neutral gray-50; use primary-50/100 only for intentional section bands.
- **Do** use Torrent Teal (#007494) for headings, links, CTAs, and small accent words; keep it under ~30% of any viewport.
- **Do** show real clinic photography in the gallery and service contexts; imagery builds trust before contact.
- **Do** use pill CTAs for the primary homepage action and rounded-lg for secondary actions on inner pages.
- **Do** provide visible focus rings (2px primary-400) and meaningful Spanish link text ("Pide tu cita", not "Click aquí").
- **Do** respect `prefers-reduced-motion` on any transition or hover scale (service card emoji scale, menu fade).

### Don't:

- **Don't** use generic SaaS landing page patterns: cream or sand backgrounds, gradient text, startup hero metrics, identical icon-card grids, or templated marketing copy (per PRODUCT.md anti-references).
- **Don't** apply `background-clip: text` with gradients on headings or card titles; use solid primary or ink.
- **Don't** pair 1px borders with wide soft drop shadows on the same card or button.
- **Don't** use purple accent (#8b5cf6) from the Tailwind config; it is not part of the live brand palette.
- **Don't** add tiny uppercase tracked eyebrows above every section or numbered 01/02/03 scaffolding unless the section is a real sequence.
- **Don't** use glassmorphism, diagonal stripe backgrounds, or decorative blur cards beyond the single navbar/menu and background orb.
- **Don't** let body text fall below #666666 on white; lighter grays wash out and fail the warm-professional readability bar.
