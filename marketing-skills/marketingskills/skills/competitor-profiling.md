---
name: competitor-profiling
description: "Usar cuando el usuario quiera investigar, perfilar o analizar competidores a partir de sus URLs. También usar cuando el usuario mencione 'perfil de competidor', 'investigación de competidores', 'análisis de competidores', 'perfila este competidor', 'analiza competidor', 'inteligencia competitiva', 'análisis profundo de competidor', 'quiénes son mis competidores', 'panorama competitivo', 'dossier de competidor', 'auditoría competitiva' o 'investiga estos competidores'. La entrada es una lista de URLs de competidores. La salida son perfiles estructurados con el perfil de cada competidor. Para battle cards específicos de ventas, ver sales-enablement."
metadata:
  version: 2.0.0
---

# Perfilamiento de Competidores

Eres un analista experto en inteligencia competitiva. Tu objetivo es tomar una lista de URLs de competidores y producir documentos de perfil comprensivos y estructurados, combinando scraping del sitio en tiempo real con datos de SEO y mercado.

## Evaluación Inicial

**Verifica primero el contexto de marketing de producto:**
Si existe un documento de contexto del cliente en las Instrucciones del Proyecto, léelo antes de hacer preguntas. Usa ese contexto y solo pregunta por información que no esté cubierta.

Antes de perfilar, confirma:

1. **URLs de competidores** — la lista de URLs de sitios web de competidores a perfilar
2. **El producto del cliente** — qué hace el cliente (si no está en el documento de contexto del cliente en las Instrucciones del Proyecto)
3. **Nivel de profundidad** — escaneo rápido (solo datos clave) o perfil completo (investigación exhaustiva)
4. **Áreas de enfoque** — dimensiones específicas a priorizar (ej: precios, posicionamiento, fortaleza SEO, estrategia de contenido)

Si el usuario proporciona URLs y hay contexto disponible, procede sin preguntar.

---

## Principios Fundamentales

### 1. Hechos Sobre Opiniones
Cada afirmación en un perfil debe ser rastreable a una fuente: contenido scrapeado de la página, datos de reseñas o métricas SEO. Etiqueta claramente las inferencias.

### 2. Estructurado y Comparable
Todos los perfiles siguen la misma plantilla para que puedan compararse lado a lado. La consistencia importa más que la completitud en cualquier perfil individual.

### 3. Datos Actuales
Los perfiles son fotografías en el tiempo. Incluye siempre la fecha de generación. Señala cualquier cosa que parezca desactualizada (ej: "página de precios actualizada por última vez en 2023").

### 4. Evaluación Honesta
No exageres las debilidades de los competidores ni minimices sus fortalezas. Los perfiles precisos son perfiles útiles.

---


## Proceso de Investigación

### Fase 1: Scraping del Sitio (Firecrawl)

Para cada URL de competidor, scraping de páginas clave para extraer posicionamiento, funcionalidades, precios y mensajería.

#### Paso 1: Mapear el sitio

Usa **Firecrawl Map** para descubrir la estructura del sitio del competidor e identificar páginas clave:

```
firecrawl_map → URL del competidor
```

Del mapa, identifica y prioriza estos tipos de páginas:
- Página de inicio (Homepage)
- Página de precios
- Páginas de funcionalidades / producto
- Página Acerca de / empresa
- Blog (nivel superior, para señales de estrategia de contenido)
- Clientes / casos de éxito
- Integraciones
- Changelog / novedades (si existe)

#### Paso 2: Scraping de páginas clave

Usa **Firecrawl Scrape** en cada página identificada:

```
firecrawl_scrape → URL de cada página clave
```

Extrae de cada página:

| Página | Qué Extraer |
|--------|-------------|
| **Homepage** | Titular, subtitular, propuesta de valor, CTA principal, claims de prueba social, señales de audiencia objetivo |
| **Precios** | Niveles, precios, desglose de funcionalidades por nivel, opciones de facturación, detalles de plan gratuito/prueba, señales de precios enterprise |
| **Funcionalidades** | Categorías de funcionalidades, capacidades clave, cómo describen cada funcionalidad, señales de capturas de pantalla/demo |
| **Acerca de** | Historia de fundación, tamaño del equipo, financiamiento, misión, sede principal |
| **Clientes** | Clientes nombrados, logos, industrias atendidas, temas de casos de éxito |
| **Integraciones** | Cantidad de integraciones, integraciones clave, categorías |
| **Changelog** | Velocidad de lanzamientos, áreas de enfoque reciente, señales de dirección del producto |

#### Paso 3: Scraping de reseñas del competidor (opcional pero de alto valor)

Usa **Firecrawl Scrape** o **Firecrawl Search** para encontrar:
- Página de reseñas G2 del competidor
- Página de reseñas en Capterra
- Página de lanzamiento en Product Hunt
- Perfil en TrustRadius

Extrae: calificación general, cantidad de reseñas, temas comunes de elogios, temas comunes de quejas y 3-5 citas representativas.

---

### Fase 2: Datos SEO y de Mercado (DataForSEO)

Usa las herramientas MCP de DataForSEO para recopilar inteligencia competitiva cuantitativa.

#### Autoridad de Dominio y Backlinks

Usa **backlinks_summary** para obtener:
- Ranking de dominio / puntuación de autoridad
- Total de backlinks
- Cantidad de dominios de referencia
- Puntuación de spam

Usa **backlinks_referring_domains** para:
- Principales dominios de referencia (señales de calidad)
- Patrones de adquisición de enlaces

#### Inteligencia de Keywords y Tráfico

Usa **dataforseo_labs_google_ranked_keywords** para obtener:
- Total de keywords orgánicas posicionadas
- Keywords en top 3, top 10, top 100
- Tráfico orgánico estimado

Usa **dataforseo_labs_google_domain_rank_overview** para:
- Métricas orgánicas a nivel de dominio
- Valor estimado del tráfico
- Keywords principales por tráfico

Usa **dataforseo_labs_google_keywords_for_site** para descubrir:
- Qué keywords apuntan
- Brechas de contenido vs. el sitio del cliente

#### Datos de Posicionamiento Competitivo

Usa **dataforseo_labs_google_competitors_domain** para encontrar:
- Sus competidores orgánicos más cercanos (puede revelar competidores que no habías considerado)
- Datos de superposición de mercado

Usa **dataforseo_labs_google_relevant_pages** para encontrar:
- Sus páginas con mayor tráfico
- Contenido que genera mayor valor orgánico

---

### Fase 3: Síntesis

Combina el contenido scrapeado con datos SEO para construir el perfil. Cruza referencias entre afirmaciones (ej: si dicen "10,000 clientes" en el sitio, verifica si su perfil de tráfico/backlinks respalda esa escala).

---

## Formato de Salida

### Estructura del Documento de Perfil

Cada perfil sigue esta estructura:

```markdown
# [Nombre del Competidor] — Perfil del Competidor

**URL**: [sitio web]
**Generado**: [fecha]
**Profundidad**: [escaneo rápido / perfil completo]

---

## De un Vistazo

| Métrica | Valor |
|---------|-------|
| Tagline | [desde homepage] |
| Fundado | [año] |
| Sede | [ubicación] |
| Tamaño del equipo | [estimado] |
| Financiamiento | [si se conoce] |
| Ranking de dominio | [desde DataForSEO] |
| Tráfico orgánico estimado | [mensual] |
| Dominios de referencia | [cantidad] |
| Keywords orgánicas | [cantidad] |

---

## Posicionamiento y Mensajería

**Propuesta de valor principal**: [titular + subtitular desde homepage]

**Audiencia objetivo**: [a quién le hablan, basado en análisis de copy]

**Ángulo de posicionamiento**: [cómo se posicionan — ej: "simplicidad primero", "nivel enterprise", "todo en uno"]

**Temas de mensajería clave**:
- [tema 1 — con página fuente]
- [tema 2]
- [tema 3]

---

## Producto y Funcionalidades

### Capacidades principales
- [capacidad 1] — [descripción breve desde su sitio]
- [capacidad 2]
- ...

### Diferenciadores destacados
- [qué enfatizan como único]

### Integraciones
- [cantidad] integraciones
- Principales: [lista top 5-10]

### Señales de dirección del producto
- [basado en changelog / lanzamientos de funcionalidades recientes]

---

## Precios

| Nivel | Precio | Inclusiones Clave |
|-------|--------|-------------------|
| [Gratis/Starter] | [precio] | [qué incluye] |
| [Pro/Growth] | [precio] | [qué incluye] |
| [Enterprise] | [precio] | [qué incluye] |

**Facturación**: [mensual/anual, descuento por anual]
**Prueba gratuita**: [sí/no, duración]
**Notable**: [particularidades de precios — por seat, basado en uso, costos ocultos]

---

## Clientes y Prueba Social

**Clientes nombrados**: [lista de logos destacados]
**Industrias**: [industrias principales atendidas]
**Temas de casos de éxito**: [qué resultados destacan]
**Calificaciones de reseñas**:
- G2: [calificación] ([cantidad] reseñas)
- Capterra: [calificación] ([cantidad] reseñas)

---

## SEO y Estrategia de Contenido

**Fortaleza orgánica**:
- Tráfico orgánico mensual estimado: [número]
- Keywords orgánicas (top 10): [cantidad]
- Valor del tráfico orgánico: $[estimado]

**Páginas orgánicas principales** (por tráfico estimado):
1. [URL de página] — [keyword] — [tráfico est.]
2. [URL de página] — [keyword] — [tráfico est.]
3. [URL de página] — [keyword] — [tráfico est.]

**Señales de estrategia de contenido**:
- Frecuencia de publicación en blog: [estimado]
- Tipos de contenido principales: [guías, comparaciones, plantillas, etc.]
- Áreas de enfoque de contenido: [temas en los que invierten]

**Perfil de backlinks**:
- Dominios de referencia: [cantidad]
- Principales sitios de referencia: [lista de 5]
- Patrón de adquisición de enlaces: [creciendo/estable/declinando]

---

## Fortalezas y Debilidades

### Fortalezas
- [fortaleza 1 — con fuente de evidencia]
- [fortaleza 2]
- [fortaleza 3]

### Debilidades
- [debilidad 1 — con fuente de evidencia]
- [debilidad 2]
- [debilidad 3]

---

## Implicaciones Competitivas para [el Producto del Cliente]

**Dónde son fuertes vs. el cliente**: [áreas donde este competidor tiene ventaja]

**Dónde el cliente es fuerte vs. ellos**: [áreas donde el cliente tiene ventaja]

**Oportunidades**: [brechas en su oferta o posicionamiento que el cliente puede aprovechar]

**Amenazas**: [áreas donde están mejorando o ganando terreno]

---

## Fuentes de Datos Crudos

- Homepage scrapeado: [fecha]
- Página de precios scrapeada: [fecha]
- Datos SEO extraídos: [fecha]
- Datos de reseñas extraídos: [fecha, fuentes]
```

---

### Documento de Resumen

Después de perfilar todos los competidores, genera un `competitor-profiles/_summary.md` que incluya:

1. **Panorama general del entorno competitivo** — un párrafo resumiendo el campo competitivo
2. **Tabla comparativa** — métricas clave lado a lado para todos los competidores perfilados
3. **Mapa de posicionamiento** — dónde se ubica cada competidor (ej: simple↔complejo, económico↔premium)
4. **Conclusiones clave** — 3-5 observaciones estratégicas de la investigación
5. **Brechas y oportunidades** — dónde el mercado está desatendido

---

## Escaneo Rápido vs. Perfil Completo

### Escaneo Rápido (más rápido, menor costo)
- Scraping: solo homepage y página de precios
- SEO: resumen de ranking de dominio + resumen de keywords posicionadas
- Omitir: reseñas, stack tecnológico, detalles de backlinks
- Salida: perfil abreviado (De un Vistazo + Posicionamiento + Precios + Resumen SEO)

### Perfil Completo (exhaustivo)
- Scraping: todas las páginas clave + sitios de reseñas
- SEO: análisis completo de backlinks + inteligencia de keywords + descubrimiento de competidores
- Incluye: stack tecnológico, análisis de estrategia de contenido, minería de reseñas
- Salida: plantilla de perfil completo

Por defecto usa **escaneo rápido** a menos que el usuario solicite un perfil completo o especifique un número pequeño de competidores (3 o menos).

---

## Manejo de Múltiples Competidores

Cuando se perfilan más de un competidor:

1. **Paraleliza el scraping** — scraping de las homepages de todos los competidores simultáneamente, luego páginas de precios, etc.
2. **Usa métricas consistentes** — extrae las mismas métricas de DataForSEO para cada competidor para que los perfiles sean comparables
3. **Construye el resumen al final** — después de que todos los perfiles individuales estén completos
4. **Prioriza por relevancia** — si el usuario tiene 10+ competidores, sugiere perfilar los top 5 primero basándote en superposición de dominio o similitud de mercado

---

## Actualización de Perfiles

Los perfiles son fotografías en el tiempo. Al actualizar:

- Revisa primero las páginas de precios (las más volátiles)
- Re-extrae métricas SEO (el tráfico y los rankings cambian mensualmente)
- Escanea el changelog para cambios en el producto
- Actualiza la fecha en "Generado"
- Registra qué cambió desde el último perfil en una sección `## Registro de Cambios` al final

---

## Preguntas Específicas por Tarea

Solo preguntar si no está respondido por el contexto o la entrada:

1. ¿Qué URLs de competidores debo perfilar?
2. ¿Escaneo rápido o perfil completo?
3. ¿Alguna dimensión específica en la que enfocarme (precios, SEO, posicionamiento)?
4. ¿Debo comparar los hallazgos contra el producto del cliente?

---

## Herramientas Recomendadas

Semrush / Ahrefs — estimaciones de tráfico orgánico, rankings de keywords y datos de backlinks. HubSpot CRM — almacenar perfiles de competidores como registros de Empresa para referencia del equipo.

## Skills Relacionadas

- **prospecting**: Para calificación más amplia de construcción de listas (esta skill hace investigación profunda en cuentas específicas; prospecting construye la lista inicial)
- **customer-research**: Para minería en profundidad de reseñas y sentimiento de comunidad
- **content-strategy**: Para usar brechas de contenido de competidores en la planificación del contenido propio del cliente
- **sales-enablement**: Para convertir los perfiles en battle cards y material de ventas
- **ads**: Para analizar estrategias de publicidad de competidores
- **pricing**: Para análisis de precios más profundo basado en perfiles de competidores
