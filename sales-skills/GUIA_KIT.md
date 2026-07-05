# Guía de Uso — Kit de Skills Comerciales

## Qué es este kit

Un conjunto de 12 skills para Claude.ai diseñadas para asistir a equipos comerciales en cada etapa del ciclo de ventas — desde el primer contacto con un prospecto hasta el cierre y el handoff al equipo de servicio.

Cada skill es un agente especializado que se activa pegando su contenido como instrucciones de un Project en Claude.ai. El AE lleva la conversación; la skill asiste con contexto, análisis y borradores listos para adaptar.

**El principio de diseño:** el equipo decide, la skill prepara.

---

## Cómo activar una skill

1. Abrir un **Project** en Claude.ai
2. Ir a **Project Instructions**
3. Pegar el contenido del archivo `.md` de la skill elegida
4. Conectar los MCPs que requiere la skill (ver stack en cada archivo)
5. Escribir el trigger en el chat — Deal ID, nombre de empresa, objeción, transcripción

---

## Stack tecnológico del sistema

| MCP | Función |
|---|---|
| **HubSpot MCP** | Lee deals, companies, contacts, notes · Escribe solo con confirmación explícita |
| **Wayne MCP** | Interacciones y conversaciones previas del prospecto desde cualquier canal |
| **get_call_transcription** | Procesa grabaciones de Fathom, Zoom, Meet, Teams o cualquier URL de audio |

---

## Ciclo de ventas — flujo recomendado

```
Prospecto nuevo
      │
      ▼
VENTAS-CalificadorLead       → ¿Vale la pena invertir tiempo?
      │
      ▼
VENTAS-BriefProspecto        → Prepara la llamada de conexión
      │
      ▼
VENTAS-AgendaExploracion     → Estructura la reunión exploratoria
      │
      ▼
VENTAS-RecapReunion          → Procesa la grabación y genera el recap
      │
      ▼
VENTAS-DiagnosticoCliente    → Análisis profundo antes de cotizar
      │
      ▼
VENTAS-PropuestaComercial    → Un servicio
VENTAS-PropuestaTransformacion → Multi-servicio / C-level
      │
      ▼
VENTAS-ManejoObjeciones      → Respuestas calibradas en tiempo real
      │
      ▼
VENTAS-SeguimientoPropuesta  → Secuencia 3 toques si no responde
      │
      ▼
VENTAS-CierreDelDeal         → Playbook de cierre según hesitación
      │
      ▼
VENTAS-HandoffServicio       → Brief para el equipo de entrega
      │
      ▼
VENTAS-RevisionPipeline      → Vista semanal del pipeline completo
```

---

## Notas de diseño

- **Autonomía controlada:** cada skill lee de HubSpot sin pedir permiso, pero nunca escribe sin confirmación explícita del AE.
- **Sin inventar:** si falta un dato, la skill lo pide o lo marca como "Por confirmar" — nunca asume.
- **Perfil de compra:** todas las skills diferencian entre clientes QUIERE CRECER y QUIERE NO PERDER para ajustar tono y argumentos.
- **Regla de parada:** cada skill tiene inputs bloqueantes definidos — si faltan, detiene y pide el dato.
