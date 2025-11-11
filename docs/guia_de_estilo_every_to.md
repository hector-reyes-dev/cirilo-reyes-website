
# Guía de Estilo del Sitio every.to

## 1. Identidad Visual

### Paleta de Colores
La paleta es minimalista y se centra en la legibilidad, con un color de acento distintivo para las acciones.

- **Primario (Acento):** Verde Bosque (`#004D45`) - Usado en botones principales, enlaces importantes y elementos interactivos clave.
- **Secundario:** No se identifica un color secundario consistente. El sistema se basa en la interacción entre el primario y los neutros.
- **Neutros:**
  - **Fondo Principal:** Blanco (`#FFFFFF`)
  - **Texto Principal:** Casi Negro (`#121212`)
  - **Texto Secundario/Metadatos:** Gris Medio (`#666666`)
  - **Bordes/Líneas:** Gris Claro (`#E5E5E5`)
  - **Fondo Footer:** Negro Intenso (`#000000`)
  - **Texto Footer:** Blanco (`#FFFFFF`)

### Tipografía
El sitio combina una fuente serif para los titulares, aportando una sensación editorial y clásica, con una sans-serif para el cuerpo de texto, garantizando una excelente legibilidad.

- **Principal (Títulos):** `Source Serif Pro` (o una serif similar como `Georgia`).
  - **Uso:** Títulos de artículos (`h1`, `h2`, `h3`) y encabezados de sección.
  - **Peso:** Generalmente `600` (Semibold) o `700` (Bold).
- **Secundaria (Cuerpo de texto)::** `Inter` (o una sans-serif de sistema como `Helvetica` o `Arial`).
  - **Uso:** Párrafos, metadatos (fecha, autor), etiquetas, y texto de navegación.
  - **Peso:** `400` (Regular) para el texto general y `500` (Medium) o `600` (Semibold) para enlaces y botones.

## 2. Componentes UI

- **Botones:**
  - **Primarios:** Fondo color Verde Bosque (`#004D45`), texto blanco, sin bordes, con un `border-radius` de aproximadamente `4px` a `6px`. En estado `hover`, el color de fondo se oscurece ligeramente.
  - **Secundarios/Etiquetas:** A menudo se presentan como texto simple con un fondo de color gris muy claro o sin fondo, pero con un borde sutil. Los botones de autor (`uid=1_65`) tienen un estilo de "píldora" con borde fino.

- **Formularios:**
  - **Campos de Texto (`input`):** Borde sólido de `1px` de color Gris Claro (`#E5E5E5`), `border-radius` de `4px-6px`, y un `padding` interno generoso. El `label` suele estar fuera del campo, con una tipografía sans-serif.

- **Enlaces:**
  - **Estándar:** Color del texto principal (`#121212`) con un `text-decoration: underline` en el estado `hover`.
  - **De acento:** Utilizan el color Verde Bosque (`#004D45`) directamente, a menudo sin subrayado hasta el `hover`.

- **Tarjetas o contenedores:**
  - **Artículos:** No tienen bordes visibles, la separación se logra a través de espaciado (márgenes). La sombra no es un elemento prominente; el diseño es mayormente plano.
  - **Secciones:** Las divisiones se marcan con líneas horizontales finas (`1px`, color `#E5E5E5`).

## 3. Layout

- **Sistema de grillas o columnas:** El layout principal para el contenido es de una sola columna central con un ancho máximo (aproximadamente `700px-800px`), lo que centra la atención en la lectura. Las secciones de la página de inicio se organizan en bloques apilados verticalmente, a veces con grillas internas de 2 o 3 columnas para listas de artículos o productos.
- **Márgenes y espaciados:** El espaciado es generoso y consistente, basado probablemente en una escala de `8px`. Hay un espacio vertical notable entre artículos y secciones, lo que contribuye a una experiencia de lectura aireada y sin desorden.
- **Jerarquía visual y proporciones:** La jerarquía es muy clara. Los títulos serif de gran tamaño captan la atención inmediatamente, seguidos por los metadatos en gris y finalmente el cuerpo del texto. El uso del color de acento está reservado para las acciones más importantes, guiando al usuario de forma efectiva.

## 4. Tono Estético

El diseño de `every.to` proyecta una atmósfera **editorial, minimalista y profesional**. Combina la seriedad y la tradición de una publicación impresa (a través de la tipografía serif y el amplio espacio en blanco) con la claridad y funcionalidad de una interfaz digital moderna.

Adjetivos que lo describen:
- **Intelectual y sobrio:** El enfoque está en el contenido escrito.
- **Limpio y estructurado:** La organización es impecable y predecible.
- **Moderno con un toque clásico:** La mezcla de tipografías es clave para este balance.
- **Enfocado en el contenido:** No hay distracciones visuales; cada elemento tiene un propósito funcional.

El sitio no parece depender de un framework CSS popular como Bootstrap o Material Design de forma evidente; su diseño se siente más a medida (`custom`), probablemente implementado con una herramienta como Tailwind CSS o CSS-in-JS, lo que permite un control granular sobre el sistema de diseño.
