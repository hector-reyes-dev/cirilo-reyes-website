# Plan de Desarrollo — Sitio Web ciriloreyes.com

Este plan guía el trabajo end-to-end para diseñar, construir, validar y operar el sitio web de Cirilo Reyes. Toma como referencia los documentos de `docs/`:

- PRD: `docs/PRD - Sitio Web ciriloreyes com 2a3d6d4981de80b9ba4ad1b0f78419b0.pdf`
- Estructura Home (wireframe/IA): `docs/Estructura Home 2a3d6d4981de80b6b8bec7ea0cd9985e.pdf`
- Alcance/brief general: `docs/Sitio Web ciriloreyes com 2a3d6d4981de80dc8835f96669955dac.pdf`
- Perfil/servicios (base de contenido): `docs/Consultor Senior en Servicios Contables, Fiscales  2a3d6d4981de80f9bf1fcd77f30d8d76.pdf`

> Nota: Este documento no incluye código; define fases, entregables, criterios de aceptación y riesgos. Las decisiones técnicas finales (stack, CMS, hosting) se confirmarán tras el Descubrimiento.

---

## 1) Descubrimiento y Alineación

- Objetivos de negocio y métricas (KPIs) a partir del PRD.
- Audiencias/personas, principales jobs-to-be-done y mensajes clave.
- Alcance inicial (MVP) y backlog de fases futuras.
- Inventario de contenido existente y gap analysis (base en PDF de perfil/servicios).
- Definición de éxito del proyecto y criterios de aceptación globales.

Entregables
- One-pager de objetivos y KPIs.
- Mapa de stakeholders y responsabilidades (RACI).
- Lista priorizada de requerimientos (funcionales y no funcionales) del PRD.

Criterios de aceptación
- KPI(s) acordados y medibles para lanzamiento (p. ej., formularios enviados/mes, tasa de conversión a contacto, CLS/INP/LCP objetivos).
- Alcance MVP firmado y riesgos documentados.

---

## 2) Arquitectura de Información y UX

- Sitemap y estructura global del sitio.
- Flujo de usuario para las rutas clave (Home → Servicios → Caso/Contacto).
- Wireframes de páginas clave, tomando como referencia “Estructura Home”.
- Definición de componentes y CTAs críticos.

Entregables
- Sitemap v1 y flujos (diagramas simples).
- Wireframes low‑fi para Home, Servicios, Sobre mí, Contacto, Artículos/Recursos.
- Lista de componentes UI/UX con estados (botones, cards, navbar, formularios, modales, tabs).

Criterios de aceptación
- Los wireframes cubren móviles, tablet y desktop (breakpoints definidos).
- Navegación coherente y CTA visibles en todas las páginas clave.

---

## 3) Contenido y Mensaje

- Tono y voz a partir del PDF de “Consultor Senior …”.
- Estructura de contenidos para cada plantilla (H1–H3, párrafos, bullets, FAQs).
- Evidencias: bio, credenciales, casos, testimonios, asociaciones.
- Preparación de microcopys (botones, formularios, validaciones, mensajes vacíos).

Entregables
- Guía breve de estilo editorial y glosario.
- Borradores de copy page-by-page listos para implementación.
- Lista de activos: fotos, logotipos, certificados, favicons.

Criterios de aceptación
- Cada página cuenta con copy final y SEO‑title/meta‑description propuestos.
- Se definen variantes cortas para hero y CTAs.

---

## 4) Identidad Visual y UI

- Sistema de color y tipografía; escalas y espaciados.
- Diseño visual de páginas clave (composición, jerarquía, contraste, a11y AA/AAA donde aplique).
- Biblioteca de componentes (tokens: color, tipografía, radios, sombras).

Entregables
- Moodboard y Style Tile.
- UI Kit básico (botones, inputs, tarjetas, banners, alertas, nav, footer).
- Diseños hi‑fi de Home y otra página representativa (p. ej., Servicios).

Criterios de aceptación
- Contraste AA mínimo (WCAG 2.2) y estados de interacción definidos.
- Diseño aprobado por stakeholders.

---

## 5) Arquitectura Técnica (Sin implementar aún)

- Evaluación de stack (criterios: rendimiento, DX, hosting, SEO, i18n):
  - Opción A: Static/SSG (p. ej., Astro)
  - Opción B: SSR/SSG híbrido (p. ej., Next.js)
- Estándares: TypeScript, lint/format, convenciones de carpetas, commit style.
- Estrategia de contenido: fuente (CMS headless, markdown, Notion API) y flujo editorial.
- Accesibilidad, seguridad y performance budgets (p. ej., LCP < 2.5s; CLS < 0.1; INP < 200ms en móviles reales).

Entregables
- ADRs (Architecture Decision Records) para stack, CMS y hosting.
- Esquema de rutas y data models (Servicios, Casos, Blog/Recursos, Testimonios).
- Plan de telemetría (GTM/Plausible), eventos y objetivos.

Criterios de aceptación
- ADRs documentados y firmados; riesgos y mitigaciones listados.
- Presupuesto de rendimiento y check de a11y acordados.

---

## 6) SEO Técnico y Contenidos

- Estructura semántica: headings, landmarks ARIA, schema.org.
- Metadatos: title/description, OG/Twitter, canonical.
- Estrategia de palabras clave (navegacionales/informacionales/transaccionales) alineada al PRD.

Entregables
- Checklist de SEO on‑page por plantilla.
- Matriz de keywords → páginas → intenciones.
- Reglas para URLs, breadcrumbs y redirecciones (si aplica).

Criterios de aceptación
- Páginas clave con esquema estructurado (Organization, LocalBusiness, Service, Article).
- Metadatos definidos y consistentes con el copy aprobado.

---

## 7) Plan de Implementación (Sin escribir código aún)

- Roadmap por lotes:
  1) Base del sitio (Layout, Nav, Footer, Home)
  2) Páginas de Servicios y Contacto
  3) Sobre mí + Recursos/Blog
  4) Testimonios/Casos + Mejoras de performance
- Definición de ramas y PRs, CI básica (build, lint, pruebas de a11y/lighthouse en CI si procede).

Entregables
- Backlog en tickets atómicos con criterios de aceptación.
- Definición de DoD (Definition of Done) por tipo de tarea.

Criterios de aceptación
- Cada lote tiene objetivos, dependencias y señales de salida claras.

---

## 8) QA, Accesibilidad y Performance

- Pruebas manuales y automatizadas (a11y: axe; performance: Lighthouse presupuestado).
- Responsive en breakpoints principales; cross‑browser de soporte (Chrome, Safari, Firefox, iOS/Android n‑1).
- Formularios: validaciones, errores, confirmaciones y entregabilidad (si hay correo).

Entregables
- Matriz de pruebas y evidencias (capturas, reportes Lighthouse/a11y).
- Lista de issues y remediaciones.

Criterios de aceptación
- Cumplimiento de AA en color/contraste; foco visible; navegación por teclado.
- LCP/CLS/INP dentro del presupuesto en móvil 4G.

---

## 9) Infraestructura, Seguridad y Lanzamiento

- Hosting y dominio (`ciriloreyes.com`), DNS, certificados, redirects.
- Observabilidad: logs mínimos, disponibilidad, alertas de uptime.
- Privacidad y cumplimiento: aviso de privacidad, cookies, términos.

Entregables
- Checklist de go‑live, plan de rollback y backups.
- Configuración de analytics y objetivos de conversión.

Criterios de aceptación
- Dominio activo con HTTPS; sin errores 4xx/5xx en rutas clave.
- Píxeles/analytics funcionando y validados.

---

## 10) Operación y Mantenimiento

- Cadencia editorial (mensual/trimestral) y flujo de publicación.
- SLA de cambios, gestión de incidencias y mejora continua.
- Roadmap post‑lanzamiento (A/B tests, nuevos servicios, automatizaciones).

Entregables
- Calendario de contenidos y tablero de backlog.
- Guía de actualización (CMS o archivos fuente) y de despliegue.

Criterios de aceptación
- Procedimientos documentados; responsables asignados y métricas de seguimiento.

---

## Cronograma Sugerido (8–10 semanas)

- Sem 1: Descubrimiento y KPIs
- Sem 2: IA + Wireframes
- Sem 3: Contenido + UI Kit
- Sem 4: Diseños hi‑fi (Home/Servicios)
- Sem 5–6: Implementación Lote 1–2
- Sem 7: Implementación Lote 3 + SEO
- Sem 8: QA/a11y/perf + Go‑Live
- Sem 9–10: Ajustes post‑lanzamiento y contenido

---

## Roles y RACI (resumen)

- Propietario del producto: define KPIs, aprueba alcance y contenidos.
- Diseño UX/UI: IA, wireframes, UI kit, hi‑fi.
- Ingeniería: arquitectura técnica, implementación, CI/CD, QA técnica.
- Contenido/SEO: copy, metadatos, esquema, calendario editorial.

---

## Riesgos y Supuestos

- Activos (fotos, logotipos, testimonios) se entregan a tiempo.
- Decisión de stack y CMS en Descubrimiento; cambios posteriores impactan cronograma.
- Requisitos legales (privacidad/cookies) confirmados antes del go‑live.
- Mitigación: fases por lotes, feature flags, ADRs, checklist de calidad.

---

## Mapeo de Documentos → Artefactos

- PRD → Objetivos, KPIs, alcance, requerimientos.
- Estructura Home → IA, wireframes y componentes base.
- Sitio Web (brief) → Sitemap y prioridades de contenido.
- Consultor Senior → Tono de voz, propuestas de valor, secciones de Servicios y Sobre mí.

---

## Próximos Pasos Inmediatos

1) Workshop de Descubrimiento (60–90 min) para cerrar KPIs y alcance del MVP.
2) Elaborar sitemap y wireframes low‑fi de Home y Servicios.
3) Aterrizar copy inicial de Home (hero, propuesta de valor, CTAs) y Servicios.
4) Definir criterios de selección de stack y CMS; redactar ADR inicial.

