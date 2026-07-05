# Control de Entregables: ClickUp + M365
## Documentación completa del agente
### Equipo SEO · Junio 2026

---

## Descripción general

Agente de inteligencia operacional para el Equipo SEO y Contenido Digital. Cruza las tareas comprometidas con clientes en ClickUp con los correos del buzón personal de cada integrante y presenta propuestas de acción concretas. El usuario decide qué ejecutar — el agente no actúa solo.

**Entorno de operación:** Claude.ai Project  
**MCPs requeridos:** ClickUp · Microsoft 365  
**Fuente de tareas:** Backlog SEO el equipo — folder `108941352`

**Arquitectura de autenticación (validada en pruebas 09/06/2026):**
- Claude.ai → cuenta compartida del equipo `[cuenta-equipo@agencia.com]`
- M365 MCP → autenticado con el **correo personal de cada integrante** (ej: `[integrante@agencia.com]`)
- Son dos autenticaciones independientes — el agente lee el buzón personal donde están los correos reales de los clientes
- Validado: el MCP lee el buzón de quien tiene la sesión de Microsoft activa, no el de Claude.ai

---

## Historial de versiones

| Versión | Fecha | Cambios principales |
|---|---|---|
| v1.0 | Jun 2026 | Flujo base ClickUp + M365 · jerarquía 0-3 · clasificación · propuestas |
| v1.1 | Jun 2026 | Ciclo de contenidos · informes mensuales · minutas · clientes en silencio · planificación por persona |
| v1.2 | Jun 2026 | Personalización por integrante · ventana correos 7 días · regionalismos colombianos · FEEDBACK_EN_ADJUNTO |
| v1.3 | Jun 2026 | Salud de la relación por cliente (🟢🟡🔴) · borrador de comunicación listo para enviar · 6 correcciones de auditoría |
| v1.3.1 | Jun 2026 | Fix: referencia de buzón M365 corregida — lee correo personal de cada integrante, no [cuenta-equipo@agencia.com] · arquitectura dual-auth documentada · validado en pruebas reales |

---

## Arquitectura técnica

### IDs permanentes de ClickUp

| Elemento | ID |
|---|---|
| Space Equipo SEO | `54949560` |
| Sprint Folder el equipo | `108941480` |
| Backlog SEO el equipo | `108941352` |
| Folder Plantillas (excluir) | `[ID]` |

### Listas internas — excluir siempre del análisis

- Gestión Interna (y variantes)

### Timezone

`America/Bogota` (UTC-5, fija, sin DST) — toda comparación de fechas usa esta zona.

### Regla crítica de operación

**Consultas a ClickUp siempre secuenciales — nunca paralelas.** Las consultas paralelas provocan error "Failed to fetch".

---

## Manual de usuario

### 1. ¿Qué hace este agente por mí?

Hace algo que normalmente toma entre 30 y 45 minutos cada mañana: revisa todas tus tareas pendientes con clientes en ClickUp, cruza esa información con los correos recibidos en `[cuenta-equipo@agencia.com]`, y te dice exactamente qué está atrasado, qué tiene respuesta pendiente, qué ya fue aprobado y qué necesita acción hoy.

Al final te presenta una lista numerada de acciones concretas —comentarios en ClickUp, tareas de seguimiento, borradores de correo— y tú decides cuáles ejecutar. **El agente no toca nada hasta que tú lo confirmes.**

---

### 2. ¿Cuándo lo uso?

- **Al inicio del día** — para saber qué tienes pendiente con clientes antes de abrir ClickUp.
- **Cuando sientes que algo se te está venciendo** — ordena todo por nivel de urgencia.
- **Antes de una reunión de sincronización** — para llevar claros los clientes con riesgo.
- **Cuando llevas días sin respuesta de un cliente** — detecta cuántos días llevas sin noticias y propone un borrador de seguimiento.
- **Cuando quieres saber el estado de una compañera** — puedes pedirle que filtre por Carolina, Salomé, Wilman o Valentina.

---

### 3. ¿Cómo lo activo?

**Paso 1 — Abre una conversación nueva en Claude.ai**
Cada consulta debe ser una conversación nueva. No retomes una anterior — el agente parte de datos frescos de ClickUp cada vez.

**Paso 2 — Escribe tu solicitud**
Cualquiera de estas frases sirve:
- "Revisa los entregables del equipo"
- "Dame el estado de aprobaciones"
- "¿Qué hay pendiente con los clientes?"
- "Revisa mis entregables, soy Salomé"

**Paso 3 — El agente pregunta quién eres**
Si no incluiste tu nombre, el agente pregunta: *"¿Para quién es el análisis?"*
Responde con tu nombre. Ejemplo: "Para Carolina" o "Wilman".

**Paso 4 — El agente trabaja**
Consulta ClickUp y el correo del equipo. Puede tomar 1 a 3 minutos. No escribas nada en ese lapso.

**Paso 5 — Recibes el reporte**
Reporte completo con tus entregables clasificados por urgencia y lista de acciones al final.

---

### 4. ¿Qué me muestra el agente?

| Sección | Qué significa |
|---|---|
| **Encabezado** | Sprint activo, días restantes, cuántos clientes y entregables revisó |
| **Resumen ejecutivo** | Una frase: estado general + acción más urgente del día |
| 🔴 **CRÍTICO** | Tareas vencidas sin respuesta del cliente hace ≥3 días — acción inmediata |
| 🟠 **ALTO RIESGO** | Tareas vencidas sin respuesta — no pueden esperar hasta mañana |
| 🟡 **SEGUIMIENTO** | Próximas a vencer — vale enviar recordatorio hoy |
| 🔵 **FEEDBACK** | El cliente respondió con comentarios — falta aplicarlos |
| ⚠️ **AMBIGUO** | El agente no pudo clasificar el correo — te muestra el fragmento y te pregunta |
| ✅ **APROBADOS** | El cliente dijo que sí — solo falta registrarlo en ClickUp |
| **ALERTAS** | Clientes con varios riesgos, riesgo de arrastre al siguiente sprint, carga concentrada |
| 📋 **Minutas sin enviar** | Acuerdos de reuniones que no se han enviado al cliente |
| 📤 **Contenidos sin publicar** | Cliente aprobó, solo falta publicar en el sitio |
| 🔇 **Clientes en silencio** | Sin contacto en 7 días (solo aparece si quedan ≤7 días del sprint) |
| **Propuesta de acciones** | Lista numerada — nada se ejecuta hasta que tú confirmes |

**Indicador de salud de la relación** — aparece junto a cada cliente:
- 🟢 **ACTIVA** — contacto en los últimos 3 días
- 🟡 **ENFRIANDO** — sin contacto hace 4–7 días
- 🔴 **EN_SILENCIO** — sin actividad en los últimos 7 días

---

### 5. ¿Cómo confirmo las acciones?

Al final del reporte verás algo así:

```
[1] Fepasde · Comentario en tarea
    "Aprobado por Stefanía el 06/06..."
    Tarea: [URL]

[2] cliente demo · Nueva tarea de seguimiento
    Nombre: "Seguimiento cliente demo: informe mensual..."
    Assignee: Salomé · Due: 10/06

[3] Internexa · Borrador de correo listo para enviar

Dime qué números confirmas y ejecuto solo esas.
```

Respuestas posibles:
- **"Confirmo 1 y 3"** → ejecuta solo esas dos
- **"Confirmo todas"** → ejecuta todas en orden, una por una
- **"Confirmo 2 pero cambia el nombre a X"** → ajusta antes de ejecutar
- **"Ninguna por ahora"** → el agente no toca nada

Cada acción ejecutada confirma con URL: `✓ [acción] completada · [URL]`

---

### 6. ¿Qué NO hace el agente?

- **No ejecuta nada sin tu confirmación** — ni un comentario, ni una tarea
- **No lee archivos adjuntos** — si el feedback está en un PDF, te avisa pero el contenido lo revisas tú
- **No compara con sprints anteriores** — cada conversación parte de cero
- **No analiza otros equipos** — solo el Backlog del equipo, nunca Tech, operaciones u otros
- **No envía correos** — redacta el borrador, enviarlo es tu decisión
- **No trabaja con listas internas** — Gestión Interna está excluida
- **No predice comportamientos** — trabaja solo con lo que está en ClickUp y en el correo

---

### 7. Preguntas frecuentes

**¿Qué pasa si el agente dice que no encontró correos?**
Puede ser que el MCP de M365 no esté autenticado sobre `[cuenta-equipo@agencia.com]`. El agente lo avisa y detiene el análisis para no reportar falsos "sin respuesta". Si ves ese aviso, verifica que Claude.ai esté conectado con la cuenta del equipo y abre una conversación nueva.

**¿Qué pasa si veo tareas de otra compañera?**
No debería pasar — el agente filtra exactamente por tu nombre en ClickUp. Si ves algo raro, dile: "Solo muéstrame lo mío" y verifica que tu nombre quedó bien capturado al inicio de la conversación.

**¿Puedo pedirle que revise solo un cliente específico?**
Sí. Después del reporte puedes escribir: "¿Qué hay pendiente con [cliente]?" y filtra en el contexto ya cargado.

**¿Qué pasa si confirmo todas las acciones y una falla?**
El agente reporta el error de esa acción específica y continúa con las siguientes. Las que salgan bien quedan confirmadas con su URL.

**¿Qué hago si el agente clasifica algo como AMBIGUO?**
Te muestra el fragmento del correo y pregunta: "¿Lo registro como aprobación, como feedback, o lo ignoro?" Tú decides.

**¿Puedo pedirle el estado de una compañera?**
Sí. Escribe "¿Qué tiene pendiente Valentina?" y el agente filtra su portafolio mostrando: minutas e informes prioritarios → entregables por cliente → contenidos sin publicar → días restantes → sugerencia de prioridad.

---

## Flujo del agente — pasos

| Paso | Qué hace |
|---|---|
| **1 · Trigger** | El usuario escribe su solicitud. El agente pregunta "¿Para quién es el análisis?" si el nombre no viene en el mensaje. |
| **2 · Sprint** | Consulta ClickUp para identificar el sprint activo y calcular días consumidos y restantes. |
| **3 · Retrieval** | Descarga todas las tareas del Backlog del equipo y filtra las asignadas a la persona. Identifica su portafolio de clientes. |
| **4 · M365** | Busca en `[cuenta-equipo@agencia.com]` los correos de los últimos 7 días para cada cliente del portafolio. |
| **5 · Analizar** | Cruza tareas con correos: clasifica cada entregable (APROBADO / FEEDBACK / PENDIENTE / SIN_RESPUESTA / AMBIGUO) y calcula el riesgo y la salud de la relación con cada cliente. |
| **6 · Revisar y proponer** | Presenta el reporte ordenado por urgencia con acciones numeradas. El usuario confirma cuáles ejecutar — el agente no actúa sin aprobación. |

---

## Decisiones de diseño — qué NO se agregó y por qué

| Idea descartada | Razón |
|---|---|
| Predecir si el cliente va a aprobar | Sin histórico entre conversaciones = alucinación garantizada |
| Calcular satisfacción del cliente | No hay señales suficientes en correo/ClickUp |
| Comparar con sprints anteriores | Cada conversación es fresca por diseño |
| Leer adjuntos de correo | MCP puede no soportarlo — el agente detecta la señal y alerta |
| Sugerir texto de respuesta al cliente | Riesgo de mensajes inapropiados enviados sin revisión |
| Conectar con otros agentes del equipo | OPS-02 debe ser autónomo — sin dependencias entre skills |
| Vista consolidada del equipo completo | No hay caso de uso validado para vista global |
| Envío automático de correos | Fuera del modelo — toda acción requiere confirmación humana |

---

## Pendientes para próximas versiones

| Versión | Qué incluye |
|---|---|
| **v1.3** *(actual)* | Personalización · salud relación · borradores · 6 fixes de auditoría |
| **v1.4** | Tabla de contactos por cliente (mejora matching M365) · co-owners en propuestas de seguimiento |
| **v2.0** | Bloqueadores internos — tareas internas atrasadas que bloquean entregables de cliente |

---

*Control de Entregables: ClickUp + M365 · Documentación v1.3*
*Equipo SEO · Junio 2026*
*Documentación v1.3*
