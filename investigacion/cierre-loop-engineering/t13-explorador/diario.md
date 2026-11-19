# Diario del explorador

## Parada 1 · Estados Unidos · 2026-11-19T20:07:28Z
- **Contexto:** la rama `claude/cierre-le-t13-explorador` no existía en el remoto y ninguna otra tenía diario; parto de `origin/master`. Pizarra leída: t15-patrones (ya cubre evaluator-optimizer, maker-checker, DLQ, abstención, blackboard, compaction y human-in-the-loop) y t01/t02. No traigo como nuevo nada de eso.
- **Puertas que toqué:**
  1. [Anthropic, Harness design for long-running apps (generator/evaluator, sprint contracts)](https://www.anthropic.com/engineering/harness-design-long-running-apps) [Fuente primaria] (abierta con WebFetch).
  2. [Anthropic, Effective harnesses for long-running agents (initializer agent, claude-progress.txt, commit inicial)](https://anthropic.com/engineering/effective-harnesses-for-long-running-agents) [Visto solo en buscador]. Ya citada por T01/T15.
  3. [Stripe, Minions Parte 2 (blueprints: nodos deterministas + loops de agente)](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) [Visto solo en buscador]. Apertura fallida: stripe.dev no resuelve desde la nube.
  4. [Uber, Securing AI Agents (seguridad como parte de la arquitectura, no capa añadida)](https://www.uber.com/blog/securing-ai-agents/) [Visto solo en buscador]. Apertura fallida: uber.com no resuelve.
  5. [Airbnb en QCon SF 2026, How Airbnb Guardrailed Its AI Customer Support Agent](https://qconsf.com/presentation/nov2026/how-airbnb-guardrailed-its-ai-customer-support-agent) [Visto solo en buscador]. Solo el resumen de la charla.
  6. [PagerDuty, Production AI Agents: Closing the Gaps](https://www.pagerduty.com/eng/production-ai-agents-closing-the-gaps-between-idea-and-reality/) [Visto solo en buscador]. Supervisor con subagentes especializados y luego jerarquía.
  7. [Resumen secundario de la charla de Airbnb sobre agentes de revisión de confianza (abstención)](https://www.taskade.com/wiki/ai-agent-examples/airbnb-trust-agents) [Fuente secundaria] (solo buscador, no abierta; es resumen de terceros).
- **Qué vi:**
  - Anthropic: el evaluador separado se puede volver escéptico, pero de fábrica era mal QA («notó problemas reales y luego se convenció de aprobarlos»). Lo calibraron leyendo los logs del evaluador y ajustando su prompt en varias rondas, con ejemplos few-shot. Criterios con umbral duro: si uno queda bajo el umbral, falla la vuelta. En la versión simplificada el evaluador corre una vez al final y solo vale la pena si la tarea excede lo que el modelo hace solo. [Fuente primaria]
  - Anthropic: antes de cada sprint, generador y evaluador acuerdan un sprint contract (criterios verificables) antes de escribir código. [Fuente primaria]
  - Stripe: los blueprints mezclan nodos deterministas con loops de agente; la idea es no dejar al LLM las decisiones pequeñas que se resuelven con código. [Visto solo en buscador]
  - Airbnb (trust review): un agente puede abstenerse y pasar el caso a una persona; una respuesta mal formada falla hacia revisión humana. El resumen dice que un primer diseño enviaba cerca de 25% de casos a revisión que debían aprobarse. [Fuente secundaria], sin verificar.
  - Uber: la seguridad debe estar en la arquitectura del agente desde el inicio. [Visto solo en buscador]
  - PagerDuty: de un agente con herramientas a supervisor más subagentes, por exceso de responsabilidades y errores que se acumulan en pasos largos. [Visto solo en buscador]
- **¿Lo hacemos en Triario?**
  - Auditor ciego y contrato fijo desde el inicio: **Sí**. Coincide con lo que Anthropic hace con criterios y umbrales.
  - Calibrar al auditor leyendo sus logs contra el juicio humano: **A medias**. [Hipótesis] No hay evidencia de que lo hagamos de forma sistemática.
  - Nodos deterministas dentro del loop (Stripe): **A medias**. [Hipótesis] Los hooks de los repos apuntan en esa dirección, sin confirmar su uso.
  - Abstención con destino humano y fallo hacia revisión por formato inválido: **A medias**. Ya tenemos «sin recomendación defendible» y el callarse sin volumen; falta, [Hipótesis], el caso de salida mal formada.
  - Seguridad y gobernanza en la arquitectura (Uber): **No**, es el tema que el equipo menciona y todavía no sabe aplicar.
- **La idea para nuestro loop:** una «calibración del auditor»: cada cierto número de corridas, una persona revisa una muestra de aprobaciones y rechazos del auditor y compara; si diverge, se versiona el contrato del auditor entre ciclos (nunca dentro de uno). Mantiene la regla de contrato fijo y cierra el hueco de que el auditor sea indulgente con salida de LLM. Segunda idea: regla explícita de que salida mal formada del generador va a la cola de revisión humana, no a reintento infinito.
- **Pistas para las próximas paradas:** (a) Europa: gobernanza y trazabilidad de agentes (EU AI Act, supervisión humana, Artículo 14), que responde al tema de gobernanza. (b) Ingeniería de software: más casos de harness y hooks deterministas. (c) Banca: maker-checker real con agentes, y modelo de riesgo de modelos (SR 11-7). (d) Buscar el original de Airbnb en vez del resumen.
- **Dominios que no abrieron:** stripe.dev y www.uber.com no resuelven desde la nube. anthropic.com sí abrió. Los demás no se intentaron abrir (presupuesto y aviso de red).
- **Presupuesto usado:** 6 búsquedas de 12; 3 aperturas de 8 (2 fallidas).
