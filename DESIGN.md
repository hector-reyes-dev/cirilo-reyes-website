---
name: Cirilo Reyes
colors:
  primary: "#C9A24B"
  gold-highlight: "#E8CE8A"
  gold-shadow: "#8C6D1F"
  surface: "#0B0E13"
  surface-raised: "#141A24"
  on-surface: "#F5F1E6"
  on-surface-muted: "#A7A294"
  on-primary: "#0B0E13"
  border-gold: "#3A3320"
  white: "#FFFFFF"
  error: "#C0492E"
typography:
  display:
    fontFamily: Cormorant Garamond
    fontSize: 4rem
    fontWeight: 600
    textTransform: uppercase
    letterSpacing: 0.15em
  headline-lg:
    fontFamily: Cormorant Garamond
    fontSize: 2.5rem
    fontWeight: 600
    letterSpacing: -0.01em
  accent-italic:
    fontFamily: Cormorant Garamond
    fontSize: 1.25rem
    fontWeight: 400
    fontStyle: italic
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Jost
    fontSize: 0.8125rem
    fontWeight: 500
    textTransform: uppercase
    letterSpacing: 0.22em
  body-md:
    fontFamily: Jost
    fontSize: 1rem
    fontWeight: 400
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Jost
    fontSize: 0.875rem
    fontWeight: 400
    letterSpacing: 0.01em
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary-hover:
    backgroundColor: "{colors.gold-highlight}"
    textColor: "{colors.on-primary}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm} {spacing.lg}"
  card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  icon-circle:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 64px
---

## Cirilo Reyes — Sistema de Diseño

Identidad visual para **Cirilo Reyes**, despacho de servicios contables, fiscales y jurídicos. La marca proyecta **autoridad, confianza y sobriedad de lujo**: oro sobre negro, no ostentación. Cada decisión de diseño refuerza la promesa de tranquilidad ejecutiva — precisión sin ruido.

---

## Color

La paleta se organiza en torno a una tensión deliberada: **fondo casi negro** (`surface`) contra **oro escaso y preciso** (`primary`). El oro nunca rellena bloques grandes; actúa como acento quirúrgico — líneas divisoras, anillos de icono, negritas de acento, botones de llamada a la acción.

| Token | Hex | Rol |
|---|---|---|
| `primary` | `#C9A24B` | Acento de marca: iconos, botones, líneas, highlights |
| `gold-highlight` | `#E8CE8A` | Champaña metálica — degradado superior del wordmark |
| `gold-shadow` | `#8C6D1F` | Bronce — degradado inferior del wordmark (**solo decorativo**) |
| `surface` | `#0B0E13` | Lienzo principal: near-black con matiz azulado |
| `surface-raised` | `#141A24` | Tarjetas y paneles elevados |
| `on-surface` | `#F5F1E6` | Texto principal crema/blanco cálido |
| `on-surface-muted` | `#A7A294` | Texto secundario apagado |
| `on-primary` | `#0B0E13` | Texto oscuro sobre relleno dorado (botones) |
| `border-gold` | `#3A3320` | Anillos de icono y divisores dorados tenues |
| `white` | `#FFFFFF` | Labels nítidos en contextos de máximo contraste |
| `error` | `#C0492E` | Estados de error — terracota que armoniza con la paleta cálida |

### Contraste y accesibilidad

- `on-surface` (`#F5F1E6`) sobre `surface` (`#0B0E13`) → **≥ 14:1** — AAA.
- `primary` (`#C9A24B`) sobre `surface` → **≥ 5.2:1** — AA para texto grande e iconos.
- `gold-shadow` (`#8C6D1F`) sobre `surface` → **~3.1:1** — NO pasa AA. Usar **solo en degradados decorativos** (wordmark, texturas). Nunca como color de texto funcional.

---

## Tipografía

Dos familias, propósitos estrictos:

**Cormorant Garamond** trae autoridad editorial serif de alto contraste — el mismo ADN que el wordmark de lujo. Se usa para el display (wordmark en caps), headlines y la tagline italic. Su alto contraste eje-grueso/eje-fino amplifica la sensación premium.

**Jost** es geométrico sans de trazo uniforme — técnico, claro, moderno. Domina labels en mayúsculas con tracking amplio, body copy y textos de soporte. Su geometría limpia contrarresta el dramatismo de Cormorant sin romper la sobriedad.

| Nivel | Familia | Tamaño | Peso | Uso |
|---|---|---|---|---|
| `display` | Cormorant Garamond | 4rem | 600 | Wordmark, títulos de hero |
| `headline-lg` | Cormorant Garamond | 2.5rem | 600 | H1, H2 de secciones |
| `accent-italic` | Cormorant Garamond italic | 1.25rem | 400 | Taglines, subtítulos emocionales |
| `label-caps` | Jost | 0.8125rem | 500 | Eyebrows, labels de servicios, nav |
| `body-md` | Jost | 1rem | 400 | Cuerpo de texto principal |
| `body-sm` | Jost | 0.875rem | 400 | Notas de apoyo, metadatos |

**Regla de los dos pesos:** no más de 2 pesos tipográficos por pantalla. Combinar `display` (600) con `body-md` (400) es la combinación canónica; añadir un tercer peso rompe la jerarquía.

---

## Forma y espaciado

**Círculos perfectos** para los iconos de servicio — el anillo dorado fino (`border-gold`) sobre fondo oscuro evoca la moneda, el sello, la autoridad formal. No usar bordes cuadrados en iconos.

La escala de radios progresa de `sm` (4px, elementos de formulario) a `full` (9999px, botones pill) — nunca bordes cero ni ángulos agresivos que comuniquen frialdad corporativa.

El ritmo de espaciado sigue base 8px. Las separaciones de sección usan `xl` (40px) o `2xl` (64px) para dar la respiración que el lujo requiere — el espacio en blanco (oscuro) es parte del diseño, no un vacío.

---

## Componentes

**`button-primary`** — pill dorado, texto oscuro. El único elemento que usa `primary` como fondo masivo, justificado porque es el único CTA en pantalla. Hover a `gold-highlight` para dar feedback metálico.

**`button-outline`** — borde `border-gold` tenue, texto en `primary`. Para acciones secundarias donde el oro como fondo sería demasiado.

**`card`** — superficie `surface-raised` con borde `border-gold` tenue. La elevación se comunica por diferencia de valor (not shadow), coherente con el estilo flat-luxury de la marca.

**`icon-circle`** — círculo perfecto, borde `border-gold`, icono en `primary`. Tamaño 64px en desktop, no menor de 48px (objetivo táctil). No rellenar el círculo — el fondo transparente preserva la textura de superficie.

---

## Do's y Don'ts

**Do:**
- Usar `primary` (oro) como acento puntual: líneas, iconos, un botón CTA por sección.
- Mantener el wordmark siempre en `display` (caps + tracking 0.15em). Nunca reducir sin tracking.
- Usar `accent-italic` (Cormorant italic) solo para taglines o citas de una línea — no para párrafos.
- Dejar respirar las secciones con `xl`/`2xl` de padding — el espacio oscuro tiene peso visual.
- Aplicar la textura de líneas geométricas doradas como overlay semitransparente en heroes, nunca en tarjetas de contenido.

**Don't:**
- No usar `gold-shadow` (`#8C6D1F`) como color de texto sobre `surface` — contraste insuficiente.
- No rellenar bloques de contenido con `primary` — el oro pierde impacto si satura la interfaz.
- No combinar más de 2 pesos tipográficos por pantalla.
- No usar fondos blancos o grises claros — la identidad es **dark-first**. Si se necesita variante light, definir un tema derivado explícito.
- No escalar el `icon-circle` por debajo de 48px — rompe la legibilidad del anillo dorado fino.
- No usar Cormorant Garamond para body copy — su alto contraste de trazo lo hace ilegible en tamaños pequeños.
- No mezclar `border-gold` con bordes grises neutros en la misma sección — la coherencia tonal es parte de la identidad.
