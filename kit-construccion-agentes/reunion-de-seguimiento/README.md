# Reunión de Seguimiento

> Agente que convierte la grabación de una reunión mensual de seguimiento en tres outputs operativos: minuta oficial, tabla de tareas lista para ClickUp y resumen ejecutivo.

---

## El problema que resuelve

Las grabaciones de reuniones producen resúmenes de texto que no se pueden operar directamente. El equipo debía volver a leer la transcripción para extraer compromisos, verificar cuáles ya estaban en el sistema de tareas y decidir cuáles crear — un proceso manual propenso a duplicados y omisiones.

## Quién lo usa

Gestores de cuenta y líderes de proyecto después de reuniones mensuales de seguimiento con clientes.

## Qué produce

Tres outputs por reunión:

1. **Minuta oficial** — estructura estándar con asistentes, temas tratados, decisiones y próximos pasos
2. **Tabla de tareas** — lista de compromisos con campos listos para crear o actualizar en ClickUp
3. **Resumen ejecutivo** — versión adaptada al tipo de audiencia (cliente externo o equipo interno)

## Por qué este diseño

El diferenciador frente a un resumen genérico: el agente cruza lo que se dijo en la reunión con el estado actual de las tareas en ClickUp antes de crear nada. Si una tarea ya existe, la marca como VERIFICAR en lugar de duplicarla. Esto evita el problema más común en equipos con múltiples reuniones activas.

## Stack

`Claude.ai` · `ClickUp MCP` · `Fathom MCP` (transcripción de reuniones)
