# Cómo crear una Skill en Claude.ai
## Guía rápida · Equipo el equipo de marketing digital · 

---

## Antes de empezar

Necesitas dos cosas activas en Claude.ai:
- **Las skills del kit el equipo de marketing digital** — las creas siguiendo los pasos de abajo
- **Los conectores MCP** — actívalos una sola vez para que las skills puedan leer HubSpot, ClickUp y M365

---

## Paso 1 — Abre "Personalizar" y ve a Habilidades

En Claude.ai, haz clic en tu perfil (esquina inferior izquierda) → **Personalizar** → **Habilidades**.

Verás dos secciones: *Habilidades personales* (solo tú las ves) y *Habilidades compartidas* (todo el equipo las usa).

> Las skills de el equipo de marketing digital van en **Habilidades compartidas** para que el equipo entero las tenga disponibles.

---

## Paso 2 — Crea la habilidad

Haz clic en **+** (al lado del buscador) → **Crear habilidad** → **Escribe las instrucciones de la habilidad**.

Se abre el formulario con tres campos:

| Campo | Qué escribir |
|---|---|
| **Nombre de la habilidad** | El nombre del comando sin `/`. Ej: `ab-testing` |
| **Descripción** | Una línea de cuándo activarla. Ej: `Úsala para crear hipótesis del sprint, priorizar experimentos y evaluar resultados vs meta.` |
| **Instrucciones** | Pega aquí el contenido completo del archivo `.md` correspondiente |

Haz clic en **Crear**. La skill queda activa de inmediato.

---

## Paso 3 — Activa los conectores MCP

Los conectores permiten que las skills lean datos reales de tus herramientas. Solo se activan una vez.

En cualquier conversación → haz clic en el ícono **+** (parte inferior) → **Conectores**.

Activa los siguientes según tu rol:

| Conector | Para qué sirve en el equipo de marketing digital | Quién lo necesita |
|---|---|---|
| **ClickUp** | Leer tareas, sprints activos y backlog del cliente | Todo el equipo |
| **Microsoft 365** | Leer correos, calendario y archivos de SharePoint | Todo el equipo |
| **HubSpot** | Leer CRM, contactos, listas y campañas activas | Estrategas de implementación |
| **GitHub** | Acceder a documentación técnica del kit | Líder de agentización |

> Si un conector aparece en azul (toggle activado), ya está listo. No necesitas hacer nada más.

---

## Paso 4 — Usa la skill

En cualquier conversación nueva, escribe `/` y el nombre de la skill. Ejemplos:

```
/ab-testing  necesito crear la hipótesis del sprint para [cliente]
/analytics   revisa las métricas de la campaña activa de [cliente]
/cro         audita esta landing page: [URL]
/ai-seo      diagnóstico AEO inicial para [cliente], sector [industria]
/copywriting escribe el brief del sprint — objetivo: [objetivo], ICP: [perfil]
```

Claude activa la skill, lee el contexto del cliente (si hay archivos en el proyecto) y entrega el resultado listo para revisar.

---

## Skills disponibles — referencia rápida

| Comando | Cuándo usarla |
|---|---|
| `/ab-testing` | Hipótesis del sprint, priorización, evaluación de resultados |
| `/analytics` | Dashboard, lectura de métricas, configuración de eventos |
| `/ai-seo` | Diagnóstico AEO, contenido para LLMs, medición de menciones |
| `/ads` | Estructura de campañas, audiencias y sincronización CRM-Ads |
| `/ad-creative` | Copy de anuncios, headlines, variaciones de pauta |
| `/cro` | Auditoría de landing pages, formularios, QA pre-lanzamiento |
| `/copywriting` | Brief del sprint, mensajes por ICP, copy de activos |
| `/content-strategy` | Plan de contenido, pilares, remix multiformato |
| `/emails` | Workflows de nurturing, campañas de email en HubSpot |
| `/launch` | Definición del objetivo y lanzamiento del sprint |
| `/revops` | Propiedades HubSpot, segmentación dinámica, ruteo de leads |
| `/social` | Contenido orgánico para LinkedIn e Instagram |
| `/customer-research` | Síntesis del cliente, ICP, preparación de kickoff |
| `/competitor-profiling` | Análisis de competidores y brechas del mercado |
| `/sales-enablement` | Feedback comercial y coordinación con ventas |
| `/marketing-plan` | OKRs trimestrales y planes de campaña |

> Consulta `DOC_Skills_Loop_Marketing.md` para ver qué proceso del inventario cubre cada skill.

---

*Tutorial v1.0 · el equipo de marketing digital ·  · Junio 2026*
