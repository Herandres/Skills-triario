# Barandas o salvaguardas (guardrails)

- **Inglés:** guardrails · **Español:** barandas, salvaguardas · **Pronunciación aproximada:** «gárdreils».

## Qué es, en una frase
Chequeos programados que revisan la entrada, la salida o las llamadas a herramientas del agente y lo detienen o lo desvían cuando algo cae fuera de lo permitido.

## Por qué está validado
**Nivel: consenso** (documentación oficial de un laboratorio, con una librería abierta independiente y un caso de producción).

- **OpenAI Agents SDK:** «Guardrails: Configurable safety checks for input and output validation». [Fuente primaria] [github.com/openai/openai-agents-python](https://github.com/openai/openai-agents-python). La documentación describe barandas de entrada, de salida y de herramientas, y un «tripwire» (disparador) que lanza una excepción. [Visto solo en buscador] [openai.github.io, guardrails](https://openai.github.io/openai-agents-python/guardrails/)
- **NVIDIA NeMo Guardrails:** «an open-source library for applying programmable safety and security controls»; las barandas de entrada pueden bloquear una petición antes de que llegue al modelo, las de salida revisan la respuesta y las llamadas a herramientas se revisan antes y después. Licencia Apache 2.0. [Fuente primaria] [github.com/NVIDIA/NeMo-Guardrails](https://github.com/NVIDIA/NeMo-Guardrails)
- **Caso en producción:** charla «How Airbnb Guardrailed Its AI Customer Support Agent», QCon San Francisco, noviembre de 2026, sobre la capa de barandas del asistente de soporte de Airbnb. Solo se vio el resumen. [Visto solo en buscador] [qconsf.com](https://qconsf.com/presentation/nov2026/how-airbnb-guardrailed-its-ai-customer-support-agent)

## Dónde estamos
**No sé: preguntar a Hernán.** El contexto dice que los repos tienen «algún hook», y un hook puede ser una baranda, pero no dice qué revisan (T15 tampoco lo sabe: ficha A7 de `t15-patrones/patrones.md`, rama `claude/cierre-le-t15-patrones`). El loop que se calla cuando no hay volumen suficiente es una regla de abstención (ficha B4 de `t15-patrones/patrones.md`, rama `claude/cierre-le-t15-patrones`), no una baranda sobre entradas o herramientas.

## Cómo se vería en nuestro loop [Hipótesis]
Tres barandas simples y deterministas: (1) de entrada, si faltan datos obligatorios no arranca; (2) de herramienta, el generador no puede escribir el archivo del contrato del auditor; (3) de salida, si la salida no tiene el formato esperado va a revisión humana y no a reintento infinito (la idea de T13, `t13-explorador/diario.md`).

## Primer paso pequeño (una semana)
Escribir un hook `PreToolUse` en un repo que bloquee cualquier edición del archivo de contrato del auditor durante una corrida, y probarlo pidiéndole al agente que lo edite. Si bloquea, queda documentado en el repo.

## Qué necesita y qué riesgo tiene
- **Necesita:** saber dónde vive el contrato del auditor en ese repo y permiso para agregar un hook.
- **Riesgo:** barandas demasiado estrictas que frenan trabajo legítimo, o la falsa seguridad de creer que una baranda reemplaza al auditor. Son complementarios.
