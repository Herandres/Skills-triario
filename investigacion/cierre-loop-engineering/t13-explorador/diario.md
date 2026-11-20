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

## Parada 2 · Europa · 2026-11-20T00:15:00Z
- **Contexto:** rama recuperada desde `origin/claude/cierre-le-t13-explorador` (parada 1 leída). Pizarra: t14 (radar y fichas, gobernanza y guardrails ya como Brecha) y t15 (patrones A1 a E2). Sigo la pista (a) de la parada 1 y el orden del itinerario: Europa.
- **Puertas que toqué:**
  1. [Microsoft, Agent Governance Toolkit (repositorio)](https://github.com/microsoft/agent-governance-toolkit) [Fuente primaria] (abierta con WebFetch).
  2. [Microsoft, checklist EU AI Act del toolkit](https://microsoft.github.io/agent-governance-toolkit/compliance/eu-ai-act-checklist/) [Visto solo en buscador]. Apertura fallida: host no resuelve.
  3. [Kaptein, Khan y Podstavnychy, Runtime Governance for AI Agents: Policies on Paths (arXiv 2603.16586, 17 mar 2026)](https://arxiv.org/abs/2603.16586) [Visto solo en buscador]. Autores y tesis tomados del buscador.
  4. [Comisión Europea (Futurium), Article 14 at runtime: oversight of agentic AI evidenced per action](https://futurium.ec.europa.eu/en/node/18812) [Visto solo en buscador]. Apertura fallida: host no resuelve. Es una publicación de la plataforma, no un texto legal.
  5. [ICML 2026, EU AI Act Article 12 and the Interaction-Trace Gap](https://icml.cc/virtual/2026/78635) [Visto solo en buscador].
  6. [Spotify Engineering, Background Coding Agents Part 3: feedback loops](https://engineering.atspotify.com/2025/12/feedback-loops-background-coding-agents-part-3) [Visto solo en buscador]. Apertura fallida: host no resuelve. Cifras vienen de resúmenes ([ZenML](https://www.zenml.io/llmops-database/building-reliable-background-coding-agents-with-verification-loops) [Fuente secundaria]).
  7. [Cequence, plazos del EU AI Act de alto riesgo](https://www.cequence.ai/?p=25259) [Fuente secundaria] (solo buscador).
- **Qué vi:**
  - Microsoft AGT: las llamadas a herramientas se interceptan en código de aplicación antes de ejecutarse, así que una acción denegada se bloquea diga lo que diga el modelo. Políticas en YAML con acciones como denegar o `require_approval` con aprobadores nombrados; registros a prueba de manipulación («tamper-evident») de cada decisión. Declara que la gobernanza opera en la capa de middleware, no en el kernel. No afirma certificación. [Fuente primaria]
  - Paper de Kaptein et al.: la unidad de supervisión es la ruta de acciones del agente; las reglas de cumplimiento son funciones deterministas sobre identidad, ruta parcial, acción propuesta y estado de la organización. Un prompt solo reduce la probabilidad de rutas malas, no hace cumplir nada. [Visto solo en buscador]
  - Lectura de comentaristas sobre los Artículos 12 y 14 (registros y supervisión humana): para agentes la evidencia debe ser por acción, no por modelo; enviar toda acción a una persona cumple la letra y anula el propósito; un registro que nadie lee tampoco sirve. Patrón práctico: registrar por acción «permitida, enviada a revisión o denegada» con motivo. Son interpretaciones, no texto legal. [Visto solo en buscador] / [Fuente secundaria]
  - Plazos: varias fuentes dicen que las obligaciones de alto riesgo pasaron a diciembre de 2027; no verificado en fuente oficial. No encontrado en fuente oficial.
  - Spotify (Honk): verificadores deterministas (compilar, lint, tests) más un juez LLM al final; según resúmenes el juez vetó cerca de 25% de los cambios y el agente se corregía en cerca de la mitad de esos casos; versiones posteriores quitaron el juez porque los modelos mejoraron. [Fuente secundaria], sin verificar contra el original.
  - Búsqueda de blogs de ingeniería de empresas europeas (Zalando, Adyen, Booking, Klarna, Mistral): no encontrado; solo contenido de proveedores.
- **¿Lo hacemos en Triario?**
  - Registro por acción con veredicto y motivo (permitido, a revisión, denegado): **A medias**. [Hipótesis] La bitácora y el archivo de «sin recomendación defendible» son una versión por vuelta, no por acción.
  - Bloqueo determinista antes de ejecutar (política en código, no en prompt): **No** confirmado. [Hipótesis] Los hooks de los repos podrían ser el lugar; no hay evidencia de que lo cumplan.
  - Persona que revisa con autoridad real de parar: **Sí**, el loop de contenido se detiene en «listo para publicar».
  - Evitar revisión humana de todo: **A medias**. La puerta humana está en la salida final, no en cada acción; coincide con la advertencia de los comentaristas, pero el riesgo de una cola ilegible aparece si crece el volumen. [Hipótesis]
  - Auditor LLM que se retira cuando basta con verificadores deterministas (Spotify): **No** lo evaluamos. [Hipótesis]
  - Cumplimiento del EU AI Act como tal: **No aplica directo** a Triario según este contexto; sirve como vocabulario de gobernanza.
- **La idea para nuestro loop:** un «registro de decisiones por acción»: cada vez que el loop deja pasar, reintenta, archiva o escala a una persona, escribe una línea con `run_id`, vuelta, decisión y motivo. Es el equivalente en tubería de datos al log de linaje, y da evidencia de que la supervisión humana existió, sin mandar todo a revisión. Segunda idea: una prueba periódica de «¿este auditor LLM aporta algo sobre los chequeos deterministas?»; si los chequeos de formato, fuentes y reglas ya atrapan lo mismo, el auditor se simplifica (como Spotify, con la cautela de que esa cifra es de segunda mano).
- **Pistas para las próximas paradas:** (a) Ingeniería de software: abrir el original de Spotify por GitHub o buscador, y Honk con hooks deterministas. (b) Banca: maker-checker real y SR 11-7, ahora con la idea de decisión registrada por acción. (c) Asia: no hay pista nueva; seguir el itinerario. (d) Probar `arxiv.org/abs/2603.16586` por otra vía; la prueba previa dice que arxiv.org no abre.
- **Dominios que no abrieron:** engineering.atspotify.com, futurium.ec.europa.eu y microsoft.github.io no resuelven desde la nube (se suman a stripe.dev y www.uber.com). github.com sí abrió.
- **Presupuesto usado:** 6 búsquedas de 12; 4 aperturas de 8 (3 fallidas, 1 exitosa). Buscador: los resultados de la primera búsqueda eran en su mayoría de proveedores; sus afirmaciones legales no se verificaron.
