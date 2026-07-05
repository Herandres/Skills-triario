# REP-03 · Reunión de Seguimiento Mensual
**Kit de Construcción de Agentes**
**Servicio:** Analítica y Reporting — SEO y Contenido Digital + Web
**Versión:** 1.2 · Junio 2026
**Responsable:** Hernán / Diego O

---

## ¿Qué hace este skill?

Convierte la grabación de una reunión de seguimiento en tres outputs operativos:
una minuta oficial, una tabla de tareas lista para ClickUp, y un resumen ejecutivo
adaptado al tipo de audiencia (cliente externo o equipo interno).

El diferenciador técnico frente a un resumen genérico: el skill cruza lo que
se dijo en la reunión con el estado actual de las tareas en ClickUp antes de
crear nada. Si una tarea ya existe, la marca como VERIFICAR — no duplica.

---

## Cuándo usarlo

- Después de cada reunión mensual de seguimiento con clientes de contenido o Web
- Cuando la reunión fue grabada con Fathom y se necesita minuta + tareas
- Cuando el equipo necesita separar los avances reales de los compromisos nuevos
- Como insumo para actualizar el roadmap del cliente

No usar para:
- Reuniones de planning interno sin cliente (usar el Intelligence Report del sprint)
- Reuniones de kickoff de proyecto nuevo (requiere contexto de contrato, no de sprint)
- Fragmentos de reunión menores a 10 minutos

---

## Prerequisitos

Antes de invocar el skill tener listos:

| Input | Descripción | Si no está disponible |
|---|---|---|
| **1. Transcripción** | Texto de Fathom o grabación | El skill no corre — bloqueante |
| **2. Tipo de reunión** | Cliente externo / Interno | Por defecto: cliente externo |
| **3. Cliente / Proyecto** | Nombre del proyecto en ClickUp | Necesario para buscar tareas |
| **4. Período cubierto** | Sprint N o fechas | Por defecto: mes en curso |
| **5. Participantes** | Lista de asistentes | Tomar de la transcripción si está |
| **6. Contexto ClickUp** | Tareas activas del proyecto (opcional) | Sin él, el paso 2 es estimado |

El input 1 (transcripción) es bloqueante — el skill no corre sin él.

---

## Los 4 pasos del skill

| Paso | Qué hace | Output |
|---|---|---|
| **1 · Extracción** | Lee la transcripción, separa avances / bloqueos / decisiones / compromisos | Datos estructurados |
| **2 · Cruce ClickUp** | Evalúa si cada compromiso ya existe como tarea | Clasificación: CREAR / VERIFICAR / ACTUALIZAR / SOLO REGISTRO |
| **3 · Clasificación** | Asigna tipo (bug/diseño/contenido/gestión/técnico) y prioridad | Tabla de tareas lista para ejecutar |
| **4 · Outputs** | Genera minuta oficial + tabla ClickUp + resumen ejecutivo | 3 documentos en una ejecución |

---

## Los 3 outputs del skill

### Output 1 · Minuta oficial
Documento formal con avances, bloqueos, decisiones y compromisos en tabla.
Incluye indicador de confianza por compromiso (EXPLÍCITA / INFERIDA).
Apto para archivar en el expediente del cliente.

### Output 2 · Tareas para ClickUp
Tabla operativa con las acciones a crear o verificar en ClickUp.
Cada fila incluye tipo, prioridad, responsable, plazo y estado de ejecución.
Si hay acceso MCP en la sesión, el skill puede crear las tareas directamente.

**Referencias ClickUp del equipo:**
- Backlog por cliente: Folder `108941352`
- Sprint activo: Folder `108941480`
- Workspace: `3025127`

### Output 3 · Resumen ejecutivo
5 líneas adaptadas al tipo de reunión:
- **Cliente externo:** tono formal, sin bloqueos internos, listo para enviar por email
- **Interno:** tono directo, incluye bloqueos y responsables, para Slack o WhatsApp

---

## Reglas de extracción (anti-alucinación)

El skill aplica 3 reglas estrictas para no inventar información:

1. **Sin responsable ni acción específica → no crear compromiso.** El ítem va a "Puntos pendientes de clarificar".
2. **Sin fuente en la transcripción → no afirmar como avance.** Solo marca lo que fue confirmado explícitamente.
3. **Sin comparación con ClickUp → marcar como VERIFICAR, no CREAR.** El operador decide.

---

## Conexión con otras herramientas

```
Fathom (grabación reunión)
        │
        ▼
REP-03 · Skill de seguimiento  ← este skill
        │
        ├── Output 1 → Minuta oficial (Google Doc / email cliente)
        ├── Output 2 → Tareas ClickUp (MCP o ejecución manual)
        └── Output 3 → Resumen ejecutivo (Slack / email equipo)
                │
                ▼
        ClickUp Backlog del equipo (108941352)
        Tareas creadas/actualizadas
```

---

## Conexión con otros skills del kit

```
QA-01 · Auditoría de entregables   ← verifica el contenido antes de entregar
        │
        ▼
[entrega al cliente]
        │
        ▼
REP-03 · Reunión de Seguimiento        ← captura el feedback post-entrega
        │
        ▼
WEB-08 · Gestión de Feedback Web       ← convierte el feedback en tareas ejecutables
```

---

## Cómo invocarlo

1. Abre una conversación nueva en Claude.ai
2. Copia el prompt completo de `REP-03_skill_prompt.md`
3. Pégalo como primer mensaje
4. En el siguiente mensaje proporciona los inputs (mínimo: transcripción + tipo + cliente)
5. Si tienes el MCP de ClickUp activo en el proyecto, el agente puede crear las tareas directamente
6. Recibe los 3 outputs en un solo response

---

*REP-03 · kit-construccion-agentes v1.0 · Junio 2026*
