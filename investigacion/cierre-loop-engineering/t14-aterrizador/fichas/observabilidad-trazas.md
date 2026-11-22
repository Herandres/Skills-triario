# Observabilidad y trazas (observability and tracing)

- **Inglés:** observability / agent tracing · **Español:** observabilidad y trazas de agentes · **Pronunciación aproximada:** «obsérvabíliti» y «tréisin».

## Qué es, en una frase
Registrar cada paso del agente (llamadas al modelo, herramientas usadas, tokens, duración, resultado) en un almacén fuera del agente para poder reconstruir qué pasó y por qué falló.

## Por qué está validado
**Nivel: consenso** (documentación oficial de dos laboratorios y un organismo de estándares abiertos con trabajo en curso).

- **OpenAI Agents SDK:** entre sus conceptos centrales, «Tracing: Built-in tracking of agent runs, allowing you to view, debug and optimize your workflows». [Fuente primaria] [github.com/openai/openai-agents-python](https://github.com/openai/openai-agents-python)
- **Claude Code:** la exportación por OpenTelemetry «works on every setup and is the only option that streams per-user token and cost metrics into your own observability stack in near real time». [Fuente primaria] [code.claude.com, costs](https://code.claude.com/docs/en/costs)
- **OpenTelemetry:** las convenciones semánticas de IA generativa se movieron a su propio repositorio, que cubre «spans, metrics, and events for GenAI clients, MCP (Model Context Protocol), and provider-specific conventions». [Fuente primaria] [github.com/open-telemetry/semantic-conventions-genai](https://github.com/open-telemetry/semantic-conventions-genai). La página oficial marca su estado como en desarrollo. [Visto solo en buscador] [opentelemetry.io](https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/) (citada por T15, ficha E3).
- **Caso en producción:** Anthropic, sistema de investigación multiagente: «Adding full production tracing let us diagnose why agents failed and fix issues systematically», sin monitorear el contenido de las conversaciones. [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/multi-agent-research-system)
- Herramienta abierta independiente: Langfuse se declara «built on OpenTelemetry». [Fuente primaria] [github.com/langfuse/langfuse](https://github.com/langfuse/langfuse)

## Dónde estamos
**No sé: preguntar a Hernán.** El contexto del proyecto no dice si los loops dejan trazas. T15 dejó su ficha E3 (auditoría con rastro) «sin ejemplo aún» (`t15-patrones/patrones.md`, rama `claude/cierre-le-t15-patrones`). Lo único cercano en el contexto es la bitácora del loop de 30 días, que registra el avance del loop, no cada paso del agente.

## Cómo se vería en nuestro loop [Hipótesis]
Cada corrida emite un registro con los campos que propuso T7: insumos, versión del contrato, versión de la skill, modelo, `run_id`, vuelta y veredicto (`t01-tesis/ideas-ingenieria-datos.md`, Idea 5). En la oficina virtual, esto es lo que permite que el orquestador «recorra los cubículos» con datos y no con suposiciones.

## Primer paso pequeño (una semana)
En un solo loop, agregar al final de cada corrida una línea en un archivo `runs.jsonl` del repo con esos siete campos. Sin herramienta nueva. Al final de la semana, contar cuántas corridas hubo, cuántas vueltas promedio y cuántas cayeron en «sin recomendación defendible».

## Qué necesita y qué riesgo tiene
- **Necesita:** que el loop sepa su propia versión de contrato y skill (ver ficha de versionado) y un lugar fijo donde escribir.
- **Riesgo:** guardar contenido sensible de clientes en las trazas. Por defecto, solo metadatos; el contenido, únicamente si hay una razón y una regla de retención.
