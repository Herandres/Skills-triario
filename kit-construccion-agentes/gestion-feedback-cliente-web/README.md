# Gestión de Feedback del Cliente Web

> Semiagente que recibe feedback de un cliente sobre un entregable web, lo convierte en tareas clasificadas y priorizadas en ClickUp, y verifica que todo esté resuelto antes de notificar la entrega.

---

## El problema que resuelve

El feedback de clientes web llegaba por múltiples canales (email, grabación de reunión, notas en chat) y se procesaba de forma inconsistente. Sin un estándar, cada analista interpretaba el feedback de manera distinta: sin clasificación por tipo, sin cruce contra tareas ya existentes, y sin verificación de cierre antes de avisar al cliente que estaba listo.

## Quién lo usa

Desarrolladores web y gestores de proyecto durante el ciclo de revisión y entrega de sitios.

## Qué produce

Opera en dos modos según el momento del proceso:

| Modo | Cuándo | Qué hace |
|---|---|---|
| **Procesar feedback** | El cliente entrega feedback nuevo | Extrae ítems → cruza ClickUp → clasifica → genera tabla de tareas |
| **Verificar entrega** | El equipo pregunta "¿está todo resuelto?" | Consulta ClickUp → si todo COMPLETADO: draft de notificación al cliente / si hay pendientes: reporte al equipo |

Cada ítem se clasifica por tipo (BUG / DISEÑO / CONTENIDO / GESTIÓN) y prioridad (URGENTE / ALTA / MEDIA / BAJA).

## Por qué este diseño

El agente no crea tareas ciegamente. Antes de crear, verifica si el ítem ya existe en ClickUp — tanto en el backlog como en el sprint activo — y decide entre CREAR / ACTUALIZAR / AMBIGUO / SOLO REGISTRO. Esto resuelve el problema de duplicación que ocurre cuando el mismo comentario del cliente llega en múltiples reuniones.

## Recursos incluidos

- `diagrama-de-flujo.html` — flujo completo del semiagente, interactivo
- `manual-de-uso.html` — guía de uso paso a paso para el equipo

## Stack

`Claude.ai Project` · `ClickUp MCP` · Versión 1.4
