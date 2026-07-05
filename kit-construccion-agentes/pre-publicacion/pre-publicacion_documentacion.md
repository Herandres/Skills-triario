# Documentación Skill QA-02
**Kit de Construcción de Agentes**
**Servicio:** SEO y Contenido Digital
**Versión:** 1.0 · Junio 2026
**Responsable:** Hernán / Valen
**Estado:** Listo para producción ✅

---

## ¿Qué hace?

Verifica que un contenido o cambio técnico esté listo para generar demanda orgánica antes de publicar — no solo para indexar en Google, sino para convertir, distribuir en múltiples canales y ser citado por LLMs.

El problema que resuelve: los equipos SEO tradicionales revisan si el contenido va a posicionar. Un equipo de contenido necesita además verificar que va a convertir, que se va a distribuir bien en redes sociales, y que va a ser citado por ChatGPT, Claude o Perplexity. Ninguna herramienta estándar (Screaming Frog, extensiones SEO) cubre esas tres capas adicionales.

El diferenciador: QA-02 es un checklist de pre-publicación diseñado para equipos que generan demanda orgánica, no solo tráfico orgánico. Evalúa 5 capas en lugar de las 2 que cubre un checklist técnico convencional.

### Las 5 capas

| Capa | Pregunta | ¿La cubre un checklist SEO estándar? |
|---|---|---|
| **1 · Técnico SEO** | ¿Está correctamente implementado en el CMS? | ✅ Sí |
| **2 · LLM Readiness** | ¿Va a ser citado por ChatGPT, Claude o Perplexity? | ❌ No |
| **3 · Conversión** | ¿El CTA está alineado con la etapa del funnel? | ❌ No |
| **4 · Distribución multicanal** | ¿Está listo para LinkedIn, WhatsApp, Google rich snippets? | ❌ No |
| **5 · Web específico** | ¿Los formularios, navegación y tracking funcionan? | Parcialmente |

### Los 23 criterios

#### Capa 1 · Técnico SEO (9 criterios)

| # | Criterio | Parámetro |
|---|---|---|
| 1 | Meta title | 50–60 chars · keyword al inicio |
| 2 | Meta description | 150–160 chars · palabra de acción |
| 3 | Slug / URL | Keyword en el slug · sin stopwords ni caracteres especiales |
| 4 | H1 | Exactamente 1 · contiene keyword principal |
| 5 | H2/H3 | Mínimo según tipo · jerarquía lógica |
| 6 | Alt text | Presente en todas las imágenes · keyword cuando aplica |
| 7 | Enlaces internos | Mínimo 2 · anchor text descriptivo |
| 8 | Indexabilidad | Sin noindex · canonical correcto · no bloqueado en robots |
| 9 | Velocidad básica | Sin recursos bloqueantes evidentes |

#### Capa 2 · LLM Readiness (3 criterios) — N/A para cambio técnico

| # | Criterio | Parámetro |
|---|---|---|
| 10 | Definición | Al menos 1 estructura "X es..." para el tema principal |
| 11 | Respuesta directa | Al menos 1 párrafo que responde una pregunta en sus primeras 2 líneas |
| 12 | Fuentes | Estadísticas con fuente nombrada + año visibles en el contenido |

#### Capa 3 · Conversión (4 criterios) — N/A para cambio técnico

| # | Criterio | Parámetro |
|---|---|---|
| 13 | CTA presente | Verbo de acción en lista válida · visible en la página |
| 14 | CTA + funnel | TOFU: descarga/conoce · MOFU: agenda/solicita · BOFU: cotiza/compra |
| 15 | Interlinking al pilar | Al menos 1 enlace interno al contenido pilar del clúster |
| 16 | Camino de conversión | Existe un camino claro hacia la siguiente conversión |

#### Capa 4 · Distribución multicanal (3 criterios) — N/A para cambio técnico

| # | Criterio | Parámetro |
|---|---|---|
| 17 | Open Graph | og:title + og:description + og:image configurados |
| 18 | Schema markup | Al menos 1 tipo apropiado (Article / WebPage / HowTo / BreadcrumbList) |
| 19 | Search Console | URL enviada a indexar dentro de las 24h post-publicación |

#### Capa 5 · Web específico (4 criterios) — solo landing page y cambio técnico

| # | Criterio | Parámetro |
|---|---|---|
| 20 | Formularios | Envían correctamente y llegan al destino configurado |
| 21 | Navegación | Sin enlaces rotos en el área afectada |
| 22 | Responsividad | Layout correcto en mobile, tablet y desktop |
| 23 | Analytics/Tracking | Eventos de conversión clave configurados |

### N/A automático por tipo de contenido

| Capa | Artículo | Landing Page | Guía | Cambio técnico web |
|---|---|---|---|---|
| Técnico SEO | ✅ | ✅ | ✅ | ✅ |
| LLM Readiness | ✅ | ✅ | ✅ | N/A |
| Conversión | ✅ | ✅ | ✅ | N/A |
| Distribución | ✅ | ✅ | ✅ | N/A |
| Web específico | N/A | ✅ | N/A | ✅ |

---

## ¿Para qué?

El entregable es un reporte con cuatro secciones en orden fijo:

```
## VEREDICTO FINAL
Estado: LISTO PARA PUBLICAR / PUBLICAR CON AJUSTES / NO PUBLICAR
Criterios evaluados: 23 / Cumplidos: N / Observaciones: N / Fallidos: N / N/A: N

## RESUMEN EJECUTIVO
[Máximo 3 líneas: qué impide publicar o qué ajustar]

## DETALLE POR CAPA
[Tabla con 23 filas: capa, criterio, estado, valor medido, hallazgo, corrección requerida]

## PLAN DE CORRECCIÓN
[Solo los ❌, ordenados por impacto — qué corregir antes de presionar publicar]
```

**Regla de veredicto:**
- `LISTO PARA PUBLICAR` → 0 criterios con ❌
- `PUBLICAR CON AJUSTES` → 1 o más ⚠️ y 0 ❌
- `NO PUBLICAR` → cualquier criterio con ❌

### Cuándo usarlo

- Inmediatamente antes de publicar cualquier contenido en el CMS
- Antes de hacer live un cambio técnico en el sitio
- Como checklist final en el proceso de aprobación antes de notificar al cliente

No usar para:
- Auditorías de contenido antes de entregar al cliente → usar QA-01
- Contenido interno sin destino público

### Diferencia con QA-01

| | QA-01 | QA-02 |
|---|---|---|
| **Cuándo** | Antes de entregar al cliente | Antes de publicar en el sitio |
| **Qué evalúa** | Calidad del contenido escrito | Implementación técnica + publicación |
| **Veredicto** | APROBADO / RECHAZADO | LISTO / PUBLICAR CON AJUSTES / NO PUBLICAR |
| **Criterios** | 26 | 23 |
| **Capas** | Calidad · SEO · LLM (capa de calidad profunda) | Técnico · LLM · Conversión · Distribución · Web |

Los dos skills son complementarios y se usan en secuencia:
```
QA-01 → contenido aprobado por el cliente
    └── QA-02 → listo para publicar en el sitio
```

---

## ¿Qué usa?

### Prompt
El skill corre en Claude.ai con el prompt de `QA-02_skill_prompt.md` como Project Instructions.
No requiere MCPs para funcionar con HTML pegado o screenshot.

### Canales de entrada aceptados

| Formato | Cómo lo procesa |
|---|---|
| URL de la página | WebFetch para obtener el HTML completo |
| HTML pegado | Procesa directamente |
| Screenshot / imagen | Análisis visual · valores aproximados marcados como "(estimado visual)" |

Si la URL está bloqueada (HubSpot preview, staging con autenticación): el agente pide que se pegue el HTML directamente.

### MCPs útiles (no requeridos)

| MCP | Herramienta | Uso |
|---|---|---|
| **WebFetch** | Integrado en Claude.ai | Leer HTML de URL publicada o en staging |

Sin MCP adicional el skill funciona con HTML pegado o screenshot.

### Conexión con otros skills del kit

```
Producción de contenido (redacción / generación con IA)
        │
        ▼
QA-01 · Auditoría de Entregables     ← verifica calidad antes de entregar al cliente
        │
        ▼
[Cliente aprueba el entregable]
        │
        ▼
QA-02 · Pre-publicación          ← este skill — verifica antes de publicar
        │
        ├── LISTO → Publicar
        ├── PUBLICAR CON AJUSTES → Corregir ⚠️ y publicar
        └── NO PUBLICAR → Corregir ❌ → volver a QA-02
                │
                ▼
        [Publicado → enviar a Search Console]
```

---

## Flujo de creación del prompt

### El problema de diseño

Los equipos de contenido necesitan un checklist de pre-publicación que vaya más allá de los criterios técnicos SEO estándar. El inventario de procesos de agentización identificó QA-02 como proceso de alta prioridad y alto potencial de IA. La hipótesis de diseño fue: si QA-01 ya cubre la calidad del contenido, QA-02 puede enfocarse exclusivamente en la publicación — y agregar las capas que distinguen un equipo de contenido de un equipo SEO tradicional.

### Decisiones de diseño

**5 capas en lugar de 3.** QA-01 tiene 3 capas (calidad, SEO, LLM). QA-02 añade conversión y distribución multicanal — las dos capas que definen el trabajo de un equipo de contenido versus un equipo SEO. Sin estas capas, QA-02 sería equivalente a cualquier herramienta gratuita de auditoría técnica.

**CTA evaluado contra el funnel.** No es suficiente verificar si hay un CTA — hay que verificar si el CTA está alineado con la etapa del funnel donde está el usuario. Un artículo TOFU con un CTA de "Cotiza ahora" (BOFU) no convierte. El skill exige que el verbo del CTA corresponda a la etapa declarada en los inputs.

**Verbos de CTA como lista cerrada.** Para evitar que el agente apruebe CTAs vagos ("click aquí", "más información"), el prompt define listas explícitas de verbos válidos por etapa de funnel. Si el verbo no está en la lista, el criterio no cumple — sin interpretación semántica.

**N/A automático por tipo.** Un cambio técnico web no necesita verificación de LLM readiness ni de CTA de funnel. Un artículo no necesita prueba de formularios. La tabla de N/A automáticos evita que el agente evalúe criterios irrelevantes para el tipo de contenido.

**23 criterios, no más.** El número es suficiente para ser exhaustivo en los 5 dominios sin volverse una lista que nadie completa. La meta-instrucción interna verifica que siempre sumen 23 (sin omisiones ni doble conteo).

### Validación de producción

Validado el 03/06/2026 con la landing page de cliente demo (tesorería corporativa).
URL: `[url-cliente]`

| Comportamiento validado | Resultado |
|---|---|
| 5 capas evaluadas en LP | ✅ |
| N/A automático aplicado correctamente por tipo | ✅ |
| Veredicto NO PUBLICAR con 7 criterios ❌ | ✅ |
| Auditoría multi-agente detectó errores de ejecución del agente | ✅ — las reglas del prompt estaban correctas |
| Prompt diferencia entre ⚠️ (parcial) y ❌ (ausente total) | ✅ |

### Versiones

| Versión | Cambio principal |
|---|---|
| v1.0 | Prompt inicial — 5 capas, 23 criterios, CTA por funnel, LLM readiness, distribución multicanal |

---

*Documentación Skill QA-02 · kit-construccion-agentes v1.0 · Junio 2026*
