# Kit de Skills Comerciales — Ventas
**Versión:** v1.1 · Junio 2026 · 12 Skills · Ciclo completo de ventas

---

## Ciclo de ventas

### VENTAS-BriefProspecto
Pre-llamada de conexión. Lee HubSpot, interacciones previas del prospecto y web para entregar un brief de 1 página con perfil, señales y 5 preguntas específicas.
**Stack:** HubSpot MCP · Wayne MCP

### VENTAS-RecapReunion
Post-reunión. Procesa grabación (Fathom, Zoom, Meet, Teams) o transcripción pegada y genera recap estructurado, nota lista para HubSpot y email de seguimiento.
**Stack:** get_call_transcription · HubSpot MCP

### VENTAS-DiagnosticoCliente
Análisis antes de cotizar. Cruza todas las fuentes disponibles, evalúa al cliente en 4 dimensiones (Negocio, Tecnología, Datos, Equipo) y entrega perfil de compra, oportunidades, riesgos y argumentario específico.
**Stack:** HubSpot MCP · Wayne MCP

### VENTAS-PropuestaComercial
Deal de un solo servicio. Genera el borrador completo de la propuesta adaptando tono y lenguaje al perfil de compra del cliente (QUIERE CRECER o QUIERE NO PERDER).
**Stack:** Sin MCP obligatorio

### VENTAS-PropuestaTransformacion
Deal enterprise o multi-servicio con sponsor C-level. Construye la narrativa HOY → MAÑANA → EL CAMINO con fases de negocio, resumen ejecutivo adaptado al cargo del sponsor y tabla de primeros 90 días.
**Stack:** Sin MCP obligatorio

### VENTAS-ManejoObjeciones
Respuesta a objeciones en tiempo real. Clasifica la objeción en 6 categorías, calibra según el perfil del cliente y la etapa del deal, y entrega 3 respuestas con enfoques distintos. Incluye modo anticompetencia (Cebra, Vambe, Keybe).
**Stack:** Sin MCP

### VENTAS-HandoffServicio
Cierre del deal. Construye el brief de contexto para el equipo de entrega: quién es el cliente, qué prometimos, qué espera y qué riesgos operativos hay desde el día uno.
**Stack:** HubSpot MCP

---

## Skills de amplificación

Cada una opera de forma autónoma — no requieren haber usado otra skill antes.

### VENTAS-CalificadorLead
Lead nuevo. Evalúa en 5 criterios (dolor, encaje de servicio, madurez para decidir, tamaño y urgencia) con puntaje CUMPLE / PARCIAL / NO CUMPLE y entrega decisión IR · CALIFICAR PRIMERO · DESCARTAR.
**Stack:** HubSpot MCP

### VENTAS-AgendaExploracion
Pre-exploratoria. Lee el contexto disponible del prospecto, identifica gaps, define los 3 objetivos de la reunión y genera preguntas específicas (no genéricas) organizadas por apertura, discovery y cierre.
**Stack:** HubSpot MCP (opcional)

### VENTAS-SeguimientoPropuesta
Propuesta enviada sin respuesta. Genera secuencia de 3 toques con ángulo diferente cada uno: email de valor agregado (día 3), llamada o WhatsApp para resolver dudas (día 7) y email de cierre abierto (día 14).
**Stack:** HubSpot MCP

### VENTAS-CierreDelDeal
Deal avanzado que no cierra. Diagnostica el tipo de hesitación (racional, emocional, de proceso o real), define la estrategia de cierre y entrega frases concretas adaptadas al caso — incluyendo cierre abierto si el deal debe soltarse.
**Stack:** HubSpot MCP (opcional)

### VENTAS-RevisionPipeline
Revisión semanal del equipo. Lee todos los deals activos en HubSpot, aplica semáforo por inactividad (🔴🟡🟢), detecta patrones y entrega los 3 deals prioritarios de la semana con acción concreta para cada uno.
**Stack:** HubSpot MCP

---

## Stack del sistema

| MCP | Función |
|---|---|
| **HubSpot MCP** | Lee deals, companies, contacts, notes · Escribe solo con confirmación explícita |
| **Wayne MCP** | Interacciones y conversaciones previas del prospecto desde cualquier canal |
| **get_call_transcription** | Procesa grabaciones de Fathom, Zoom, Meet, Teams o cualquier URL de audio |

---

## Activar en Claude.ai

1. Abrir un Project en Claude.ai
2. Pegar el contenido del archivo `.md` en las instrucciones del Project
3. Conectar los MCPs del stack de la Skill
4. Escribir el trigger — Deal ID, nombre de empresa, objeción, transcripción, lo que tengas
