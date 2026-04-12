# CLAUDE.md — Mica Glow Up

Guía de contexto para Claude Code. Leer completo antes de tocar cualquier archivo.

---

## El proyecto

Landing page para **Mica Glow Up**, emprendimiento de venta de productos de maquillaje femenino de Mendoza, Argentina. El objetivo de esta etapa es conseguir clientes rápidamente: la landing debe lucir profesional, vibrante y generar confianza inmediata. El canal de venta es WhatsApp e Instagram — no hay carrito de compras en esta versión.

**Slogan:** ¡Brilla, sé tú, Glow Up!
**Instagram:** @mica.glowup → https://instagram.com/mica.glowup
**WhatsApp:** +5492617060496 → https://wa.me/5492617060496

---

## Stack técnico

- **Framework:** React 18 + TypeScript (strict mode)
- **Build tool:** Vite
- **Estilos:** Tailwind CSS v3
- **Animaciones:** Framer Motion
- **Íconos:** lucide-react
- **Tipografías:** Fredoka One (títulos) + Nunito (cuerpo) — via @fontsource
- **Linter:** ESLint + Prettier
- **Deploy:** Vercel (frontend only, sin backend por ahora)

No agregar dependencias sin justificación. No usar CSS-in-JS. No usar styled-components.

---

## Estructura del proyecto

```
mica-glow-up/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── logo.png               ← logo oficial de la marca
│   │   └── products/              ← imágenes de productos (PNG)
│   │       ├── labiales-matte.png
│   │       ├── mascara-peel-off.png
│   │       ├── lip-oil-frutal.png
│   │       ├── super-glow-stay.png
│   │       ├── corrector-anti-ojeras.png
│   │       ├── delineador-perfect-duo.png
│   │       ├── lip-balm-color-change.png
│   │       ├── serum-grippy.png
│   │       ├── base-hd-skin.png
│   │       ├── delineador-labios-angels.png
│   │       ├── delineadores-oro.png
│   │       ├── lip-gloss-perfect-finish.png
│   │       └── lip-glow-oil.png
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Products.tsx
│   │   ├── ProductCard.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── products.ts            ← catálogo de productos (tipado)
│   ├── types/
│   │   └── index.ts               ← interfaces TypeScript
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  ← Tailwind directives + fuentes + variables CSS
├── CLAUDE.md
├── index.html
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Diseño y estética

### Identidad visual
El logo es estilo cartoon/sticker: colorido, playful, con gradiente fucsia → violeta → celeste. **Toda la UI debe estar alineada con esa energía: vibrante, femenina, moderna.** No oscura, no minimalista. El referente estético es Instagram + tiendas de beauty coreanas.

### Paleta de colores

```ts
// tailwind.config.ts — extend.colors
colors: {
  glow: {
    pink:    '#ec4899',   // fucsia principal
    violet:  '#a855f7',   // violeta
    cyan:    '#06b6d4',   // celeste
    soft:    '#fff0f8',   // fondo general (casi blanco rosado)
    card:    '#ffffff',   // fondo de cards
    border:  '#fce7f3',   // bordes suaves
    text:    '#2d1a2e',   // texto principal (casi negro violáceo)
    muted:   '#9333ea',   // texto secundario
  }
}
```

### Tipografía

```css
/* En index.css */
.font-display { font-family: 'Fredoka One', cursive; }   /* títulos, logo, CTAs */
.font-body    { font-family: 'Nunito', sans-serif; }     /* todo lo demás */
```

Jerarquía:
- H1 hero: `text-5xl md:text-6xl font-display text-glow-pink`
- H2 secciones: `text-3xl font-display text-glow-pink`
- Body: `text-sm md:text-base font-body font-semibold text-glow-text`
- Badges/tags: `text-xs font-body font-extrabold uppercase tracking-widest`

### Fondo con sparkles
El fondo `#fff0f8` debe tener un patrón sutil de puntitos/estrellas animadas en CSS puro — no usar librerías externas para esto. Implementar con `radial-gradient` o SVG inline repetido como `background-image`.

### Gradientes de marca
```css
.gradient-brand { background: linear-gradient(135deg, #ec4899, #a855f7, #06b6d4); }
.gradient-soft  { background: linear-gradient(135deg, #fdf2f8, #f5f3ff, #ecfeff); }
```

---

## Secciones de la landing

### 1. Navbar
- Logo (imagen real `assets/logo.png`) a la izquierda, ~48px de alto
- Links de navegación: Productos · Novedades · Contacto
- Sticky, con backdrop blur al hacer scroll (`bg-white/80 backdrop-blur`)
- En mobile: logo centrado, links colapsados (no hace falta hamburger en v1)

### 2. Hero
- Logo grande centrado (120–160px) con sombra brillante animada (pulse glow)
- H1: "¡Brilla, sé tú!" en dos líneas, `font-display`, gradiente de marca
- Subtítulo: "Los mejores productos de maquillaje, al mejor precio"
- Slogan pill: "💖 ¡Brilla, sé tú, Glow Up!"
- Dos CTAs: "Ver productos" (primario, gradiente) + "Escribinos" (secundario, outline)
- Animación de entrada: Framer Motion `fadeInUp` staggered para cada elemento
- Fondo: sparkles/bokeh animados en CSS

### 3. Trust strip
Barra horizontal entre Hero y Productos con 4 íconos + texto:
- 🚀 Envíos rápidos
- 💯 Calidad garantizada
- 💬 Atención personalizada
- ✨ Marcas reconocidas

### 4. Productos destacados
- Título de sección: "⭐ Más vendidos"
- Grid: **4 columnas en desktop, 2 en tablet, 1 en mobile**
- Mostrar los 4 productos destacados (ver `data/products.ts`)
- Cada `ProductCard` tiene:
  - Imagen del producto (aspect-ratio 3/4, object-cover)
  - Badge de categoría con gradiente de marca
  - Nombre del producto
  - Descripción corta (marca · beneficio)
  - Botón "¡Lo quiero!" → abre WhatsApp con mensaje pre-cargado mencionando el producto
- Hover effect en card: `scale-[1.02]` + sombra rosa suave
- Scroll reveal: Framer Motion `fadeInUp` con stagger entre cards

### 5. Contacto
- Bloque con fondo `gradient-soft`, bordes redondeados grandes
- Título: "¿Querés hacer un pedido?"
- Subtítulo: "Escribinos y te respondemos al instante ✨"
- Dos botones grandes:
  - WhatsApp → `https://wa.me/5492617060496?text=Hola!%20Vi%20sus%20productos%20en%20Mica%20Glow%20Up%20y%20quiero%20consultar%20%F0%9F%92%84`
  - Instagram → `https://instagram.com/mica.glowup`

### 6. Footer
- Logo texto a la izquierda
- Slogan centrado
- "© 2026 · Mendoza, Argentina" a la derecha
- Borde superior suave `border-glow-border`

---

## Catálogo de productos (`src/data/products.ts`)

```ts
export interface Product {
  id: string
  name: string
  brand: string
  description: string
  badge: string
  badgeEmoji: string
  image: string          // path relativo a src/assets/products/
  featured: boolean      // true = aparece en la sección de 4 destacados
  whatsappText: string   // texto pre-cargado para el link de WA
}

export const products: Product[] = [
  {
    id: 'labiales-matte',
    name: 'Labiales Matte',
    brand: 'Pink21',
    description: 'Tentadores y duraderos',
    badge: 'Top ventas',
    badgeEmoji: '🔥',
    image: 'labiales-matte.png',
    featured: true,
    whatsappText: 'Hola! Me interesan los Labiales Matte de Pink21 💄',
  },
  {
    id: 'mascara-peel-off',
    name: 'Máscara Peel Off',
    brand: '4Angels',
    description: 'Volumen + definición instantánea',
    badge: 'Nuevo',
    badgeEmoji: '✨',
    image: 'mascara-peel-off.png',
    featured: true,
    whatsappText: 'Hola! Me interesa la Máscara Peel Off de 4Angels 👁️',
  },
  {
    id: 'lip-oil-frutal',
    name: 'Lip Oil Frutal',
    brand: 'TEI',
    description: 'Hidrata y da color',
    badge: 'Hidratante',
    badgeEmoji: '💧',
    image: 'lip-oil-frutal.png',
    featured: true,
    whatsappText: 'Hola! Me interesa el Lip Oil Frutal de TEI 🍓',
  },
  {
    id: 'super-glow-stay',
    name: 'Super Glow Stay',
    brand: 'Pink21',
    description: 'Destello luminoso · Alta duración',
    badge: 'Glow',
    badgeEmoji: '🌟',
    image: 'super-glow-stay.png',
    featured: true,
    whatsappText: 'Hola! Me interesa el Super Glow Stay de Pink21 ✨',
  },
  {
    id: 'corrector-anti-ojeras',
    name: 'Corrector Anti Ojeras',
    brand: 'Pink21',
    description: 'Cubrir ojeras nunca fue tan fácil',
    badge: 'Nuevo',
    badgeEmoji: '✨',
    image: 'corrector-anti-ojeras.png',
    featured: false,
    whatsappText: 'Hola! Me interesa el Corrector Anti Ojeras de Pink21 💜',
  },
  {
    id: 'delineador-perfect-duo',
    name: 'Delineador Perfect Duo',
    brand: 'Pink21',
    description: 'Mirada impactante y definida',
    badge: 'Bestseller',
    badgeEmoji: '👁️',
    image: 'delineador-perfect-duo.png',
    featured: false,
    whatsappText: 'Hola! Me interesa el Delineador Perfect Duo de Pink21 🖤',
  },
  {
    id: 'lip-balm-color-change',
    name: 'Lip Balm Color Change',
    brand: 'TEI',
    description: 'Labios efecto glow en segundos',
    badge: 'Glow',
    badgeEmoji: '💋',
    image: 'lip-balm-color-change.png',
    featured: false,
    whatsappText: 'Hola! Me interesa el Lip Balm Color Change de TEI 💋',
  },
  {
    id: 'serum-grippy',
    name: 'Serum Grippy',
    brand: 'TEI',
    description: 'Hidrata y mejora la piel en minutos',
    badge: 'Piel',
    badgeEmoji: '🧴',
    image: 'serum-grippy.png',
    featured: false,
    whatsappText: 'Hola! Me interesa el Serum Grippy de TEI Cosmética ✨',
  },
  {
    id: 'base-hd-skin',
    name: 'Base HD Skin',
    brand: 'TEI',
    description: 'Cobertura total · Acabado natural',
    badge: 'Foundation',
    badgeEmoji: '🎨',
    image: 'base-hd-skin.png',
    featured: false,
    whatsappText: 'Hola! Me interesa la Base HD Skin de TEI Cosmética 💛',
  },
  {
    id: 'delineador-labios-angels',
    name: 'Delineador de Labios',
    brand: '4Angels',
    description: 'Ultra pigmentados · 8 tonos',
    badge: 'Pigmentado',
    badgeEmoji: '💄',
    image: 'delineador-labios-angels.png',
    featured: false,
    whatsappText: 'Hola! Me interesan los Delineadores de Labios de 4Angels 💄',
  },
  {
    id: 'delineadores-oro',
    name: 'Delineadores Retráctiles Oro',
    brand: 'Angels',
    description: 'Delinea con estilo y precisión',
    badge: 'Premium',
    badgeEmoji: '✏️',
    image: 'delineadores-oro.png',
    featured: false,
    whatsappText: 'Hola! Me interesan los Delineadores Retráctiles Oro de Angels ✨',
  },
  {
    id: 'lip-gloss-perfect-finish',
    name: 'Lip Gloss Perfect Finish',
    brand: 'Pink21',
    description: 'Brillo & color perfecto',
    badge: 'Gloss',
    badgeEmoji: '💖',
    image: 'lip-gloss-perfect-finish.png',
    featured: false,
    whatsappText: 'Hola! Me interesa el Lip Gloss Perfect Finish de Pink21 💖',
  },
  {
    id: 'lip-glow-oil',
    name: 'Lip Glow Oil',
    brand: 'HuxiaBeauty',
    description: 'Hidratación profunda · Efecto glossy',
    badge: 'Glossy',
    badgeEmoji: '💧',
    image: 'lip-glow-oil.png',
    featured: false,
    whatsappText: 'Hola! Me interesa el Lip Glow Oil de HuxiaBeauty 💋',
  },
]
```

---

## Reglas de desarrollo

### TypeScript
- Strict mode activado en `tsconfig.json`
- Todas las props tipadas con interfaces en `src/types/index.ts`
- No usar `any`. No usar `as` para castear salvo casos extremos documentados.
- Preferir `const` sobre `let`. Nunca `var`.

### Componentes
- Un componente por archivo
- Props siempre tipadas con `interface`, nunca `type` inline en el componente
- Nombres en PascalCase para componentes, camelCase para funciones y variables

### Tailwind
- No mezclar clases de Tailwind con CSS custom salvo en `index.css`
- Usar `cn()` (clsx + tailwind-merge) para clases condicionales
- No hardcodear colores con `#hex` en className — usar las variables de `tailwind.config.ts`

### Animaciones (Framer Motion)
- Todas las animaciones deben respetar `prefers-reduced-motion`
- Patrón estándar para scroll reveal:
```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}
// Usar con <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
```

### Accesibilidad mínima
- Todas las imágenes con `alt` descriptivo
- Botones con texto visible (no solo íconos)
- Links externos con `target="_blank" rel="noopener noreferrer"`

### Mobile first
- Breakpoints: `sm:` (640px) `md:` (768px) `lg:` (1024px)
- El grid de productos es `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Navbar en mobile: logo centrado, sin links visibles (se agregan en v2)

---

## Assets

### Logo
`src/assets/logo.png` — imagen oficial de la marca. Usarla siempre como `<img>`, nunca reemplazar con texto.

### Imágenes de productos
Todas en `src/assets/products/`. Son fotos reales de los productos con fondo bokeh rosado/brillante. Aspect ratio aproximado 3:4 (portrait). Usar `object-cover` con `aspect-[3/4]`.

### Renombrado de imágenes
Al inicializar el proyecto, las imágenes subidas deben renombrarse según el mapeo del catálogo anterior. Claude Code puede hacer esto con un script bash si es necesario.

---

## Variables de contacto (no hardcodear en componentes, importar desde aquí)

```ts
// src/data/contact.ts
export const CONTACT = {
  whatsapp: {
    number: '+5492617060496',
    url: 'https://wa.me/5492617060496',
    defaultMessage: 'Hola!%20Vi%20sus%20productos%20en%20Mica%20Glow%20Up%20y%20quiero%20consultar%20%F0%9F%92%84',
  },
  instagram: {
    handle: '@mica.glowup',
    url: 'https://instagram.com/mica.glowup',
  },
} as const
```

---

## Roadmap (para contexto — no implementar en v1)

- **v2:** Backend Node.js + Express, catálogo dinámico desde Google Drive o base de datos, formulario de pedido
- **v2:** Panel de administración para gestionar productos y precios
- **v3:** Integración con Mercado Pago para cobros online
- **v3:** Historial de pedidos por cliente

---

## Lo que NO hacer

- No agregar backend en esta etapa
- No agregar autenticación
- No usar `localStorage` para nada en v1
- No instalar librerías de UI externas (MUI, shadcn, Chakra) — solo Tailwind
- No usar `useEffect` para cosas que se pueden hacer con CSS
- No agregar páginas adicionales — es una single page (todo en `App.tsx` con scroll)
- No poner precios en el código — los precios se consultan por WhatsApp
