# Kit de Construcción de Agentes

**Framework para diseñar, construir y documentar agentes de IA desde cero**
**Versión: 1.0 · Junio 2026**

---

## ¿Qué es este kit?

Una guía técnica y práctica para construir agentes de IA funcionales — sin importar la herramienta, el proceso o el nivel de experiencia técnica del equipo.

Nació de un proyecto real: construir un sistema de inteligencia operacional que lee datos de gestión de proyectos, calcula KPIs y genera reportes automáticos para cinco equipos. El sistema tardó un mes en llegar a producción. La mayor parte de ese tiempo no se fue en escribir prompts — se fue en descubrir cómo estaban organizados los datos.

**La lección principal:** el 60% del trabajo de un agente no está en el prompt. Está en entender la arquitectura de los datos antes de escribir una sola línea.

---

## El framework — 5 pasos irrompibles

```
PASO 1 — ARQUITECTURA
  ¿Dónde viven los datos?
  Mapear la fuente antes de cualquier otra cosa.
  Sin esto, el agente consulta en el lugar equivocado.

PASO 2 — PROTOCOLO
  ¿Cómo se accede a esos datos?
  Orden de consulta, límites de paginación, autenticación.

PASO 3 — DICCIONARIO
  ¿Qué significa cada dato en el contexto del negocio?
  Las reglas que convierten datos crudos en información útil.

PASO 4 — OUTPUT
  ¿Qué produce el agente exactamente?
  Formato, estructura y nivel de detalle del resultado esperado.

PASO 5 — CRITERIO DE PARADA
  ¿Cuándo está bien hecho?
  Sin esto el agente no sabe cuándo terminar — loop infinito garantizado.
```

> **Regla de oro:** nunca escribas el prompt antes de tener los 5 pasos respondidos.

---

## Estructura del kit

```
kit-construccion-agentes/
│
├── README.md                                  ← este archivo
│
├── bloques/                                   ← 8 prompts del framework de construcción
│   ├── ARQ-01-mapeador-arquitectura.md
│   ├── ARQ-02-entrevista-experto.md
│   ├── DIS-01-definidor-objetivo.md
│   ├── DIS-02-diccionario-datos.md
│   ├── DIS-03-reglas-anti-alucinacion.md
│   ├── WRT-01-esqueleto-prompt.md
│   ├── WRT-02-validador-casos-borde.md
│   └── TST-01-diagnostico-anti-regresion.md
│
├── auditoria-de-entregables/                  ← QA de contenido · 26 criterios · 3 capas
├── pre-publicacion/                           ← Checklist antes de publicar · 23 criterios · 5 capas
├── reunion-de-seguimiento/                    ← Minuta + tareas desde grabación de reunión
├── gestion-feedback-cliente-web/              ← Feedback de cliente → tareas ClickUp priorizadas
├── presentacion-visual/                       ← Cualquier contenido → slides · dashboard · informe
├── diagnostico-visibilidad-ia/                ← Visibilidad del sitio en LLMs + reporte HTML
├── evaluador-de-calidad/                      ← Score 30 pts para aprobar agentes al repositorio
├── control-de-entregables/                    ← Cruce ClickUp × M365 · estado de cuentas
├── memoria-operativa/                         ← Contexto → SOP · Decisión · Entregable · Pasaporte
└── guia-visual/                               ← Publicación editorial del kit (HTML interactivo)
```

---

## Los 8 prompts — índice

### BLOQUE ARQ — Arquitectura (hacer primero)

| Prompt | Nombre | Cuándo usarlo | Produce |
|---|---|---|---|
| ARQ-01 | Mapeador de arquitectura | Cuando tienes acceso directo a la herramienta | ARCHITECTURE_MAP.md |
| ARQ-02 | Entrevista al experto | Cuando hay alguien que conoce la herramienta pero no tienes acceso directo | ARCHITECTURE_MAP.md |

> ARQ-01 y ARQ-02 son **alternativas**, no pasos secuenciales. Usar uno o el otro según el acceso disponible.

### BLOQUE DIS — Diseño del agente

| Prompt | Nombre | Cuándo usarlo | Produce |
|---|---|---|---|
| DIS-01 | Definidor de objetivo | Para clarificar qué hace y qué NO hace el agente | AGENT_SPEC.md |
| DIS-02 | Diccionario de datos | Para definir cada campo con tipo, ejemplo y comportamiento en vacío | DATA_DICTIONARY.md |
| DIS-03 | Reglas anti-alucinación | Para blindar el agente contra respuestas inventadas | ANTI_HALLUCINATION_RULES.md |

> DIS-01 → DIS-02 → DIS-03 en ese orden. **DIS-03 requiere ambos documentos anteriores** — no se puede ejecutar directamente desde DIS-01.

### BLOQUE WRT — Escritura del prompt

| Prompt | Nombre | Cuándo usarlo | Produce |
|---|---|---|---|
| WRT-01 | Esqueleto de prompt | Para ensamblar los documentos DIS en el prompt estructurado | PROMPT_SKELETON.md |
| WRT-02 | Validador + casos borde | Para validar el esqueleto y cubrir inputs inusuales antes del deploy | VALIDATION_REPORT.md |

### BLOQUE TST — Prueba y mantenimiento

| Prompt | Nombre | Cuándo usarlo | Produce |
|---|---|---|---|
| TST-01 | Diagnóstico + anti-regresión | Cuando algo falla o antes de cambiar algo que funciona | DIAGNOSIS_REPORT.md |

---

## Cómo usar el kit — flujo recomendado

```
Día 1 — ARQUITECTURA
  Usar ARQ-01 (si tienes acceso directo) o ARQ-02 (si hay un experto disponible)
  Entregable: ARCHITECTURE_MAP.md de la herramienta objetivo

Día 2 — DISEÑO
  Usar DIS-01 → DIS-02 → DIS-03 en ese orden (no saltarse DIS-02)
  Entregables: AGENT_SPEC · DATA_DICTIONARY · ANTI_HALLUCINATION_RULES

Día 3 — PRIMER PROMPT
  Usar WRT-01 → WRT-02
  Requiere: ARCHITECTURE_MAP.md + los 3 documentos DIS
  Entregable: PROMPT_SKELETON.md validado con casos borde cubiertos

Día 4 — PRUEBA CON DATOS REALES
  Probar con datos reales
  Cada resultado inesperado → abrir TST-01 inmediatamente

Día 5 — PRODUCCIÓN
  Aplicar fixes con TST-01
  Entregable: agente en producción con historial de diagnósticos
```

---

## Dependencias entre documentos

```
ARQ-01 o ARQ-02
  └── ARCHITECTURE_MAP.md
        └── DIS-01 → AGENT_SPEC.md
                └── DIS-02 → DATA_DICTIONARY.md
                        └── DIS-03 → ANTI_HALLUCINATION_RULES.md
                                └── WRT-01 ensambla los cuatro → PROMPT_SKELETON.md
                                        └── WRT-02 valida y extiende → PROMPT_SKELETON.md v1.1
                                                └── TST-01 mantiene en producción → PROMPT_SKELETON.md vN
```

Cada prompt consume los documentos de todos los anteriores. Saltarse un paso produce un hueco que se convierte en fallo en producción.

---

## Agentes en producción

Construidos con este framework y operando en contextos reales de agencia digital.
Cada carpeta contiene: `README.md` con descripción del problema y diseño · prompt completo · documentación · recursos visuales donde aplica.

### Auditoría de Entregables
Agente de QA para contenido digital. Evalúa **26 criterios en 3 capas** — calidad general, SEO técnico y citabilidad por LLMs — y emite veredicto con plan de corrección. La capa 3 (citabilidad LLM) no existe en ningún proceso de QA estándar del mercado.

### Pre-publicación
Checklist de **23 criterios en 5 capas** para verificar que un contenido esté listo para generar demanda, no solo para indexar. Cubre conversión, distribución multicanal y LLM readiness — dimensiones que ninguna herramienta SEO convencional evalúa.

### Reunión de Seguimiento
Convierte la grabación de una reunión mensual en minuta oficial, tabla de tareas para ClickUp y resumen ejecutivo. Cruza lo dicho en la reunión contra el estado actual de ClickUp antes de crear nada — elimina duplicados por diseño.

### Gestión de Feedback del Cliente Web
Semiagente con dos modos: procesar feedback entrante del cliente y verificar que todo está resuelto antes de notificar entrega. Antes de crear una tarea, verifica si ya existe en backlog o sprint activo. Incluye diagrama de flujo y manual de uso en HTML.

### Presentación Visual
Convierte cualquier contenido estructurado en la conversación en un artefacto visual profesional: slides HTML, dashboard con KPIs, informe detallado o archivo PPT editable. Sin que el usuario diseñe nada.

### Diagnóstico de Visibilidad IA
Responde la pregunta: "¿Me están encontrando los LLMs? ¿Ese tráfico convierte? ¿Qué debo hacer?" Produce configuración GA4, arquitectura de dashboard y reporte HTML standalone. Incluye demo interactivo.

### Evaluador de Calidad
Determina si un agente (prompt + output) tiene calidad para entrar al repositorio oficial. Evalúa en **6 dimensiones con score de 30 puntos**. Requiere contexto de la organización antes de evaluar — sin ese contexto, el veredicto no sirve.

### Control de Entregables
Cruza tareas de ClickUp con los correos del buzón personal de cada integrante del equipo (Microsoft 365) y presenta propuestas de acción. El usuario decide qué ejecutar. Opera con autenticación dual — la arquitectura técnica es el diferenciador.

### Memoria Operativa
Convierte cualquier contexto en documentación estructurada. Detecta automáticamente el tipo de documento a producir entre cuatro modos: SOP, Decisión, Entregable o Pasaporte de cliente.

---

## Las 3 reglas anti-alucinación universales

Aplican a cualquier agente, en cualquier herramienta:

```
1. DATO FALTANTE
   Si no tienes el dato, escribe "no disponible" — nunca inventes.

2. REGLA CON RAZÓN
   Toda regla necesita explicar el POR QUÉ.
   Una prohibición sin razón se rompe sola en el próximo fix.

3. CRITERIO DE PARADA EXPLÍCITO
   El agente necesita saber cuándo terminó.
   Sin criterio claro → loop infinito o resultado incompleto.
```

---

## El prompt — anatomía de los 4 componentes

```
COMPONENTE 1 — IDENTIDAD
  Quién es el agente, para qué existe, qué NO hace.
  Si no defines lo que NO hace, lo hará.

COMPONENTE 2 — ARQUITECTURA
  Dónde consultar, con qué IDs, en qué orden.
  Es el componente más crítico — si falla, todo falla.

COMPONENTE 3 — REGLAS DE NEGOCIO
  Qué significa cada dato en el contexto de la empresa.
  Incluye ejemplos de casos borde y exclusiones explícitas.

COMPONENTE 4 — OUTPUT
  Formato exacto del resultado esperado.
  Criterios de parada y qué hacer cuando falta un dato.
```

---

## Caso real — sistema de inteligencia operacional

**Herramienta:** ClickUp
**Objetivo:** Reporte de inteligencia operacional de sprint para 5 equipos
**Tiempo de construcción:** 1 mes (aprendiendo desde cero, en paralelo con el trabajo)
**Tiempo estimado aplicando este kit:** 3-5 días

**La lección clave:**
El 60% del tiempo se fue en descubrir la arquitectura de ClickUp a prueba y error.
Con ARQ-01 y ARQ-02 ese tiempo se reduce a medio día.

---

## Guía visual

Publicación editorial del kit — 8 prompts expandibles, 10 reglas de oro y el caso real del sistema de inteligencia operacional.

| Artefacto | Archivo |
|---|---|
| Guía visual interactiva (abrir en browser) | [guia-visual/index.html](guia-visual/index.html) |
| Brief de contenido completo | [GUIDE_CONTENT.md](GUIDE_CONTENT.md) |
| Prompt para regenerar el diseño | [DESIGN_PROMPT.md](DESIGN_PROMPT.md) |

---

## Convenciones de este repositorio

- Cada prompt vive en su propio archivo `.md`
- Cada skill en producción tiene su carpeta con: `README.md` · prompt · documentación · recursos visuales
- Los fixes documentados llevan razón del por qué — nunca solo el qué
- Sin dependencias externas — todo funciona con Claude.ai y los MCPs conectados

---

*kit-construccion-agentes v1.0 · Junio 2026*
