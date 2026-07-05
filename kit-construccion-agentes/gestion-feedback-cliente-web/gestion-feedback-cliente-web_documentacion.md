# Documentación Skill WEB-08
**Kit de Construcción de Agentes**
**Servicio:** Desarrollo Web
**Versión:** 1.4 · Junio 2026
**Responsable:** Hernán
**Estado:** Listo para producción ✅

---

## ¿Qué hace?

Recibe feedback de un cliente sobre un entregable web, lo convierte en tareas priorizadas y clasificadas en ClickUp, y verifica que cada ítem fue resuelto antes de notificar la entrega.

El problema que resuelve: el feedback de los clientes llegaba por múltiples canales (email, grabación, chat) y se perdía o se procesaba inconsistentemente. Sin este skill, cada analista interpretaba el feedback de forma distinta — sin clasificación por tipo, sin cruce contra tareas existentes y sin confirmación de cierre antes de avisar al cliente.

El diferenciador: el agente no crea tareas ciegamente. Antes de crear, verifica si el ítem ya existe en ClickUp — tanto en el backlog como en el sprint activo. Antes de notificar, verifica que todas las tareas derivadas del feedback estén completadas.

### Los dos modos de operación

| Modo | Cuándo se activa | Qué hace |
|---|---|---|
| **MODO 1 · Procesar feedback** | El usuario proporciona feedback nuevo | Extrae ítems → cruza ClickUp (backlog + sprint) → clasifica → genera tabla de tareas |
| **MODO 2 · Verificar entrega** | El usuario pregunta "¿está todo resuelto?" | Consulta ClickUp (backlog + sprint) → si todo COMPLETADO: notificación al cliente / si hay pendientes: reporte al equipo |

### Los 3 pasos del MODO 1

| Paso | Qué hace |
|---|---|
| **1 · Extracción** | Lee el feedback, extrae ítems con descripción + ubicación en sitio + señal exacta + confianza |
| **2 · Cruce ClickUp** | Busca en backlog Y sprint activo — CREAR / ACTUALIZAR / AMBIGUO / SOLO REGISTRO |
| **3 · Clasificación** | Asigna tipo (BUG/DISEÑO/CONTENIDO/GESTIÓN) y prioridad (URGENTE/ALTA/MEDIA/BAJA) |

### Reglas de extracción (anti-alucinación)

1. Sin descripción específica → ítem clasificado INCOMPLETO, no se crea tarea.
2. Sin ubicación mencionada → campo "no especificada", nunca inferir.
3. Sin búsqueda en ClickUp previa → no clasificar como ACTUALIZAR.
4. Sin asignado en ClickUp → Responsable = "—", nunca inferir nombre.
5. Sin fecha en ClickUp → Plazo = "—", nunca inferir fecha.

---

## ¿Para qué?

El entregable del skill varía según el modo activo:

### MODO 1 — Output A

```
## FEEDBACK PROCESADO — [cliente]
Canal · Fecha · Tono del cliente · Conteo de ítems

Tabla de tareas:
| # | Descripción | Tipo | Prioridad | Ubicación | Confianza | Estado |

[Ítems incompletos — si los hay]
[Ítems ambiguos con opciones A/B/C — si los hay]
[Confirmación obligatoria antes de ejecutar]
```

**Regla de escritura:** el agente nunca escribe en ClickUp en el mismo turno en que presenta el plan. Si hay ítems AMBIGUO sin resolver, presenta solo las preguntas de clarificación — la confirmación de escritura va en un turno separado.

### MODO 2 — Output B

```
Si TODO completado → Notificación formal al cliente
Si hay pendientes  → Reporte de pendientes al equipo (tabla: tarea / estado / responsable / plazo)
```

### Cuándo usarlo

- Cuando el cliente envía feedback sobre un sitio web (email, grabación, documento)
- Cuando el equipo necesita convertir una revisión de cliente en tareas de ClickUp
- Cuando se quiere verificar si todo el feedback fue resuelto antes de avisar al cliente

No usar para:
- Feedback interno del equipo sin cliente involucrado
- Proyectos que no están en el Backlog de ClickUp
- Fragmentos de feedback menores a 1 ítem accionable

---

## ¿Qué usa?

### Cómo desplegarlo — Skill o Project

El prompt puede usarse de dos formas en Claude.ai:

| Forma | Cuándo | Cómo |
|---|---|---|
| **Project** (recomendado) | Uso recurrente del equipo — el flujo completo con MCP | Crear proyecto en Claude.ai → pegar `WEB-08_skill_prompt.md` como Project Instructions → conectar los 3 MCPs |
| **Skill / prompt pegado** | Uso puntual o sin MCPs activos | Copiar el prompt al inicio de cualquier conversación → pegar el feedback → recibir la tabla para ejecución manual |

**Diferencia práctica:**
- Como **Project**: los MCPs ya están conectados, el agente ejecuta en ClickUp después de confirmación. El equipo abre una conversación nueva por cada feedback y el agente actúa.
- Como **Skill pegado**: el agente analiza y clasifica, pero la ejecución en ClickUp la hace el operador manualmente.

### Setup del Project en Claude.ai

```
Claude.ai Project "WEB-08 · Feedback Web"
    ├── Project Instructions → WEB-08_skill_prompt.md
    ├── MCP: ClickUp      → conectar (backlog + sprint)
    ├── MCP: Fathom       → conectar (transcripciones)
    └── MCP: M365         → conectar (emails)
```

### MCPs requeridos

| MCP | Herramienta | Uso |
|---|---|---|
| **Fathom** | `get_call_transcription` | Obtener transcripción si el feedback viene de una grabación |
| **M365** | `outlook_email_search` | Leer el email del cliente si el feedback viene por correo |
| **ClickUp** | `clickup_filter_tasks` | Verificar si el ítem ya existe — backlog Y sprint activo |
| **ClickUp** | `clickup_create_task` | Crear tareas nuevas (solo con confirmación del usuario) |
| **ClickUp** | `clickup_update_task` | Actualizar tareas existentes (solo con confirmación del usuario) |

### Fallbacks si un MCP no está disponible

| Situación | Comportamiento |
|---|---|
| Fathom caído | Pide al usuario que pegue el texto de la grabación directamente |
| M365 no disponible | Pide al usuario que copie y pegue el email |
| ClickUp sin acceso | Entrega la tabla clasificada para ejecución manual |
| Sin ningún MCP | Funciona como analizador puro: clasifica y entrega tabla — el operador ejecuta |

### Canales de entrada aceptados

| Canal | Cómo lo procesa |
|---|---|
| Texto pegado (email, notas, doc) | Procesa directamente |
| URL de grabación Fathom | `get_call_transcription(call_id=URL)` |
| Búsqueda en M365 | `outlook_email_search` con asunto o fecha |
| Cualquier combinación | El agente detecta el formato y aplica la ruta correcta |

### Referencia ClickUp
- Backlog por cliente: Folder `108941352` — búsqueda a)
- Sprint activo: Folder `108941480` — búsqueda b)
- Workspace: `3025127`
- Lista por cliente: tabla completa en `WEB-08_skill_prompt.md`

### Conexión con otros skills del kit

```
Cliente envía feedback (email / grabación / documento)
        │
        ▼
WEB-08 · Gestión de Feedback Web      ← este skill
        │
        ├── MODO 1 → Tareas creadas/actualizadas en ClickUp
        │
        └── MODO 2 → Notificación al cliente (todo resuelto)
                     o Reporte de pendientes al equipo
```

---

## Flujo de creación del prompt

### El problema de diseño

El equipo Web necesitaba un agente que convirtiera feedback de cliente en tareas de ClickUp sin crear duplicados y sin ejecutar nada sin aprobación. El primer diseño (WEB-08 AGENT_SPEC v0.1) definía el flujo correctamente pero no tenía prompt.

### Decisión de construcción: reusar REP-03

REP-03 (Skill de Reunión de Seguimiento) ya tenía construido el núcleo exacto que WEB-08 necesitaba: extracción de ítems + cruce ClickUp + clasificación + confirmación obligatoria antes de escribir. En lugar de construir desde cero, WEB-08 se adaptó desde REP-03 (Opción A).

Lo que se quitó de REP-03:
- Minuta oficial (no requerida para feedback web operacional)
- Resumen ejecutivo (overhead innecesario para el ciclo de feedback)
- Extracción de avances/bloqueos/decisiones de reunión

Lo que se añadió:
- Soporte multi-canal: M365 + Fathom + texto + documento
- Encabezado mínimo con tono del cliente
- MODO 2: loop de verificación de entrega + notificación al cliente
- Doble búsqueda ClickUp: backlog + sprint activo (evita duplicados)

### Decisiones de diseño

**Doble búsqueda ClickUp (v1.4).** El agente busca en el backlog del cliente Y en el sprint activo antes de clasificar. Si un ítem existe solo en el sprint (ya siendo trabajado), se clasifica ACTUALIZAR — no CREAR. Evita duplicados cuando las tareas fueron movidas al sprint. La versión del sprint siempre prevalece sobre la del backlog cuando hay coincidencia en ambos.

**Evaluación secuencial en Paso 2.** Primero evalúa SOLO REGISTRO (contexto sin acción). Luego busca en ClickUp para todos los ítems accionables. Elimina el caso donde un ítem puede ser clasificado como ACTUALIZAR sin verificación previa.

**Dos nombres para dos tipos de ambigüedad.** INCOMPLETO = ítem sin descripción suficiente. AMBIGUO = ítem con descripción clara pero múltiples candidatos en ClickUp. Separados para que el usuario sepa exactamente qué información falta en cada caso.

**Separación de turnos para AMBIGUO.** Si hay ítems AMBIGUO, el agente presenta solo las preguntas de clarificación en ese turno. La confirmación de escritura va en el turno siguiente, después de resolver los AMBIGUOS. Elimina el riesgo de que el usuario responda "A" a una opción y el agente lo interprete como confirmación de escritura.

**Confirmación explícita requerida.** "Ok" o "sí" sin contexto no activan la escritura. El agente pregunta nuevamente si la respuesta es ambigua. Protege contra escrituras accidentales en ClickUp.

### Validación de producción

Validado el 02/06/2026 con transcripción real de Fathom — Biweekly SEO cliente demo | 19 de mayo de 2026.

| Comportamiento validado | Resultado |
|---|---|
| Doble búsqueda backlog + sprint activo | ✅ Ejecutada correctamente |
| SOLO REGISTRO identificó tareas ya entregadas | ✅ Contactless, infografía y 3 URLs (ya en ClickUp) |
| AMBIGUO separó casos de ambigüedad real | ✅ 2 ítems marcados (enviar ≠ aprobar; producir ≠ obtener datos) |
| Tarea atrasada surfaceada automáticamente | ✅ `86e19naya` flaggeada ⚠️ |
| Checkpoint de escritura protegido | ✅ Nada escrito — esperando resolución AMBIGUO |
| Fallbacks sin MCP | ✅ Instrucciones claras en cada canal |

### Versiones

| Versión | Cambio principal |
|---|---|
| v0.1 | AGENT_SPEC — diseño del flujo, sin prompt |
| v1.0 | Prompt inicial construido desde REP-03 — 2 modos, multi-canal, cruce ClickUp |
| v1.1 | Encabezado mínimo con tono del cliente + multi-opción para ítems AMBIGUO |
| v1.2 | 7 bugs críticos: separación INCOMPLETO/AMBIGUO, evaluación secuencial Paso 2, checkpoint escritura, memoria MODO 2, fallbacks Responsable/Plazo |
| v1.3 | Fix B-F-08: doble búsqueda backlog + sprint activo |
| v1.4 | 5 bugs del audit del fix: lógica Paso B unificada, paginación sprint, MODO 2 cobertura completa, versión sprint prevalece, filtro literal por cliente |

---

*Documentación Skill WEB-08 · kit-construccion-agentes v1.4 · Junio 2026*
