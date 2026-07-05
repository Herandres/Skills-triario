# Control de Entregables

> Agente de inteligencia operacional que cruza las tareas comprometidas con clientes en ClickUp con los correos del buzón del integrante del equipo, y presenta propuestas de acción concretas. El usuario decide qué ejecutar — el agente no actúa solo.

---

## El problema que resuelve

Los compromisos con clientes vivían en dos lugares desconectados: el sistema de tareas (ClickUp) y el correo personal de cada integrante del equipo. Para saber el estado real de una cuenta, había que revisar ambos manualmente. Sin cruce automático, los pendientes caían entre los dos sistemas.

## Quién lo usa

Analistas y gestores de cuenta que gestionan múltiples clientes simultáneamente y necesitan visibilidad del estado real de cada relación.

## Qué produce

Un informe operativo por integrante con:

- Estado de tareas activas cruzado contra los correos de los últimos 7 días
- Salud de la relación por cliente (🟢 activa / 🟡 en riesgo / 🔴 crítica)
- Clientes en silencio (sin comunicación reciente)
- Propuestas de acción con borrador de comunicación listo para enviar

## Por qué este diseño

El agente usa autenticación dual: Claude.ai con la cuenta del equipo y Microsoft 365 MCP con el correo personal de cada integrante. Esta separación es intencional — el correo personal es donde están los mensajes reales de los clientes, no en una bandeja compartida. Sin esta arquitectura, el agente leería el buzón equivocado.

## Stack

`Claude.ai Project` · `ClickUp MCP` · `Microsoft 365 MCP` · Versión 1.3
