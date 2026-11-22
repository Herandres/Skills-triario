# T13 · El regreso del explorador: informe de viaje

Rama: `claude/cierre-le-t13-explorador` · Fecha: 2026-11-20 · Base: `diario.md` (7 paradas, sin modificar).

**Sellos:** [Fuente primaria], [Fuente secundaria], [Visto solo en buscador], [Hipótesis]. Los enlaces y sellos son los del diario. En esta corrida no abrí páginas nuevas: los dominios del viaje no resuelven desde la nube y el diario ya agotó esas pruebas. Por eso casi todo es de segunda mano y las cifras de terceros van sin verificar. Los hechos internos de Triario son contexto del encargo, no fuente externa.

## Cruce con la pizarra
- **t15-patrones** ya cubre evaluator-optimizer, maker-checker, dead-letter queue (cola de mensajes fallidos), abstención, blackboard, compaction, human-in-the-loop, hooks deterministas (A7) y trazas por corrida (E3). No lo presento como nuevo.
- **t14-aterrizador** ya tiene en el radar, como Brecha, evals (con calibración humana del juez), harness, gobernanza y context engineering; como «por confirmar», observabilidad, presupuesto de tokens y guardrails; human-in-the-loop como Fortaleza.
- **t01-tesis (ideas-ingenieria-datos)**: idea 4 (set dorado y calibración del auditor) e idea 5 (campos mínimos de linaje). Dos de mis hallazgos se solapan con ellas y lo digo en cada ficha.

## 1. El mapa del viaje

| # | Parada | Destino (lo que se fue a buscar) | Calidad de acceso |
|---|---|---|---|
| 1 | Estados Unidos | Harness de Anthropic, Stripe, Uber, Airbnb, PagerDuty: evaluador separado, contratos de sprint, abstención | 1 fuente primaria abierta |
| 2 | Europa | Gobernanza y trazabilidad: Microsoft Agent Governance Toolkit, EU AI Act (Art. 12 y 14), Spotify | 1 primaria (GitHub) |
| 3 | Asia | Grab (SOP en JSON, Palana), IMDA Singapur, Alibaba, Mercari, Tencent | Todo desde buscador |
| 4 | Latinoamérica | Nubank (evaluación y simulación), Mercado Libre, Bancolombia, Itaú | Todo desde buscador |
| 5 | Manufactura | Jidoka, tres zonas de autonomía, control estadístico de procesos (SPC) | Todo desde buscador |
| 6 | Banca | SR 26-2 (reemplaza SR 11-7), JPMorgan, KYC con agentes, maker-checker | Todo desde buscador |
| 7 | Aviación y salud | CRM (crew resource management), fatiga de alertas, overrides clínicos | Todo desde buscador |

## 2. Lo que traigo (7 hallazgos)

### H1. Calibrar al auditor contra el juicio humano
- **Dónde lo vi:** [Anthropic, Harness design for long-running apps](https://www.anthropic.com/engineering/harness-design-long-running-apps) [Fuente primaria]: el evaluador de fábrica «notó problemas reales y luego se convenció de aprobarlos»; lo calibraron leyendo sus logs y ajustando el prompt con ejemplos few-shot. Parada 4: Nubank usa juez LLM con personas que iteran el prompt [Visto solo en buscador].
- **Qué es:** cada cierto número de corridas una persona revisa una muestra de aprobaciones y rechazos del auditor y compara con su propio juicio.
- **Por qué es nuevo para nosotros:** tenemos auditor ciego y contrato fijo, pero nada indica que alguien mida si el auditor acierta [Hipótesis].
- **Cómo entra al loop:** muestra periódica; si diverge, se versiona el contrato **entre ciclos**, nunca dentro de uno.
- **Esfuerzo:** bajo.
- **Concepto de IA:** LLM-as-a-judge con calibración humana (evals).
- **Cruce:** t14 (`fichas/evals.md`) y la idea 4 de t01 ya lo plantean como brecha. Aquí aporta la evidencia primaria de Anthropic. No es idea nueva, es confirmación externa.

### H2. Registro de decisiones por acción, no solo por corrida
- **Dónde lo vi:** [Microsoft Agent Governance Toolkit](https://github.com/microsoft/agent-governance-toolkit) [Fuente primaria]: cada decisión de política (permitir, denegar, `require_approval`) queda en un registro a prueba de manipulación (tamper-evident). Lectura de comentaristas sobre los Artículos 12 y 14 del EU AI Act: la evidencia debe ser por acción [Visto solo en buscador]. JPMorgan ante el FSB: identificador documentado por agente y trazabilidad de acciones [Visto solo en buscador]. Bancolombia advierte que con agentes es difícil rastrear qué se decidió y con qué información [Visto solo en buscador].
- **Qué es:** una línea por cada vez que el loop deja pasar, reintenta, archiva o escala, con `run_id`, vuelta, decisión y motivo.
- **Por qué es nuevo para nosotros:** la bitácora de 30 días y el archivo de «sin recomendación defendible» son por vuelta o por resultado, no por acción [Hipótesis].
- **Cómo entra al loop:** el generador y el auditor escriben el registro; vive fuera del agente.
- **Esfuerzo:** medio.
- **Concepto de IA:** trazabilidad y auditoría (observabilidad con linaje).
- **Cruce:** coincide en parte con t14 (`fichas/observabilidad-trazas.md`, campos de la idea 5 de t01) y t15 E3. Lo nuevo es la granularidad por acción y el motivo explícito. Es el equivalente al log de linaje en una tubería de datos.

### H3. Estado «requiere revisión» y fallo hacia la persona
- **Dónde lo vi:** resumen de la charla de Airbnb: una respuesta mal formada falla hacia revisión humana [Fuente secundaria](https://www.taskade.com/wiki/ai-agent-examples/airbnb-trust-agents). Sutherland usa «Pass, Review Required, Pending Documents»; KPMG menciona revisión maker-checker con evidencia completa [Visto solo en buscador]. Verificar contra el original de Airbnb sigue pendiente.
- **Qué es:** tres salidas en vez de dos (aprobado, requiere revisión, pendiente de datos), y regla de que la salida mal formada va a la cola humana, no a reintento infinito. Más un «paquete de revisión» en la compuerta: salida, veredicto, versión del contrato, vueltas, ventana de datos y fuentes.
- **Por qué es nuevo para nosotros:** hoy el resultado es aprobado o archivado; no hay estado intermedio ni definición de qué ve quien aprueba [Hipótesis].
- **Cómo entra al loop:** se añade un estado a la salida del auditor y una plantilla al paso «listo para publicar».
- **Esfuerzo:** bajo a medio.
- **Concepto de IA:** abstención con escalamiento, human-in-the-loop.
- **Cruce:** la abstención y la DLQ están en t15 (B4, A6). Lo nuevo es el tercer estado y el paquete de revisión.

### H4. Carta de control del loop y tasa de override humano
- **Dónde lo vi:** SPC (control estadístico de procesos) aplicado a agentes: límites fijos dan falsas alarmas y hay que recalcularlos al cambiar de versión [Visto solo en buscador] (reseña de un paper y página de proveedor; no pude ver el paper original). Salud: la fatiga de alertas se mide con overrides, con cifras muy dispares entre estudios y un estudio de 2017 que cuestiona que el volumen explique el override [Visto solo en buscador]. Manufactura: revisar todo equivale a inspección al 100% y los operadores acaban aprobando por costumbre; es opinión de prensa [Visto solo en buscador].
- **Qué es:** por corrida, registrar vueltas, tasa de aprobación del auditor y porcentaje archivado; marcar «causa especial» cuando salga de su banda. Junto a eso, por cada pieza «lista para publicar», anotar si la persona la publicó tal cual, la editó o la rechazó.
- **Por qué es nuevo para nosotros:** la línea base de 30 días mide el resultado de negocio, no la deriva del propio loop ni cuánto corrige la persona [Hipótesis].
- **Cómo entra al loop:** dos o tres columnas más en la bitácora; la señal dispara pausa y la calibración de H1. Límites recalculados entre ciclos.
- **Esfuerzo:** medio.
- **Concepto de IA:** monitoreo de deriva (drift) y evaluación continua.
- **Cautela:** la tasa de override sola no distingue fatiga de acierto. No encontré repositorio público que implemente SPC sobre agentes.

### H5. Corte externo, tres zonas de autonomía y botón humano
- **Dónde lo vi:** Grab, Palana: kill switch que corta la ruta de red en vez de pedirle al agente que pare, con el matiz de que conexiones abiertas pueden sobrevivir [Fuente secundaria](https://www.zenml.io/llmops-database/building-a-secure-kubernetes-platform-for-autonomous-ai-agents). Jidoka y «agent circuit breaker» por presupuesto de llamadas [Visto solo en buscador](https://gravitee.io/corpus/gen-2093/toyota-production-system/jidoka-for-ai-security.html) (proveedor). Tres zonas proceed, pause y escalate por riesgo y novedad [Visto solo en buscador](https://www.mbtmag.com/quality-control/blog/22971222/the-real-bottleneck-in-agentic-ai-is-not-the-model-it-is-the-handoff) (opinión de prensa). IMDA Singapur: puntos de control que exigen aprobación humana [Fuente secundaria](https://cm.twobirds.com/en/insights/2026/singapore/singapore-introduces-new-model-ai-governance-framework-for-agentic-ai). JPMorgan: circuit breakers y human override [Visto solo en buscador].
- **Qué es:** un límite de vueltas, tiempo y costo que vive fuera del agente, una zona intermedia «pausar y explicar» además de seguir o escalar, y alguien nombrado que puede liberar una parada.
- **Por qué es nuevo para nosotros:** el tope de 3 vueltas lo aplica el propio loop; no hay corte por presupuesto de llamadas ni zona de pausa [Hipótesis].
- **Cómo entra al loop:** declarar las tres zonas por loop y probar el corte, no solo declararlo.
- **Esfuerzo:** medio a alto.
- **Concepto de IA:** circuit breaker, guardrails, human-on-the-loop.
- **Cruce:** t14 trata presupuesto de tokens y guardrails como «por confirmar» y t15 tiene hooks deterministas (A7). Esto agrega que el corte sea externo y probado.

### H6. Banco de pruebas previo con casos simulados
- **Dónde lo vi:** Nubank: cambios probados con clientes sintéticos y herramientas simuladas antes de producción; las cifras de correlación, A/B y ciclo «20 veces más rápido» vienen de resúmenes y de la propia charla, sin verificar [Fuente secundaria](https://www.zenml.io/llmops-database/accelerating-ai-agent-development-through-simulation-based-evaluation) y [charla](https://ai.engineer/talks/simulation-maxxing-how-nubank-ships-agents-20-faster-with-simulations) [Visto solo en buscador].
- **Qué es:** un conjunto fijo de entradas, incluidas las malas (sin volumen, fuentes dudosas), que el loop debe pasar antes de cambiar el contrato del auditor o una skill.
- **Por qué es nuevo para nosotros:** la línea base mide después de publicar; no hay evidencia de un banco previo [Hipótesis].
- **Cómo entra al loop:** requisito del comité de cambios antes de versionar contrato o skill.
- **Esfuerzo:** medio.
- **Concepto de IA:** evals offline y pruebas de regresión; equivale a la prueba de regresión de una tubería de datos antes de desplegar.
- **Cruce:** la idea 4 de t01 (set dorado) y `fichas/evals.md` de t14 ya apuntan a un conjunto fijo de casos. Lo nuevo es el caso de Nubank y la simulación de herramientas. Complementa a H1: simulación antes, muestra humana después.

### H7. «Ficha de loop» con dueño, criterios por paso y responsable por agente
- **Dónde lo vi:** Grab, framework SOP-driven: un SOP en JSON con criterios por paso que deciden el siguiente [Visto solo en buscador](https://engineering.grab.com/introducing-the-sop-drive-llm-agent-framework); las cifras de ahorro de Grab no están verificadas. IMDA Singapur: identidad de cada agente ligada a un humano o área responsable [Fuente secundaria]. JPMorgan: responsabilidad humana clara por agente [Visto solo en buscador]. Mercari: AGENTS.md y paso de human-in-the-loop a human-on-the-loop [Visto solo en buscador].
- **Qué es:** un archivo por loop con pasos y criterio de salida, responsable humano nombrado, acciones que exigen aprobación y el corte externo de H5.
- **Por qué es nuevo para nosotros:** nuestras skills y el contrato son un SOP en texto; no vi dueño nombrado del contrato ni registro de quién lo cambia entre ciclos [Hipótesis]. Es el tema de gobernanza que el equipo menciona sin saber aplicar.
- **Cómo entra al loop:** plantilla junto al CLAUDE.md de cada repo.
- **Esfuerzo:** bajo a medio.
- **Concepto de IA:** gobernanza de agentes, agent identity, spec-driven development.
- **Cruce:** t14 (`fichas/gobernanza-ia.md`, `fichas/harness.md`) ya marcan gobernanza y harness como brecha. Este hallazgo es una forma concreta de cruzarla, no un concepto nuevo.

## 3. Lo que vi y ya hacemos
- Generador y auditor ciego con contrato fijo (Anthropic, Alibaba Manage-Execute-Audit en el rol de auditoría).
- Persona con decisión final en «listo para publicar» (aviación, Itaú, BCG).
- Tope duro de pasos: máximo 3 vueltas.
- Abstención y archivo de lo defendible: «sin recomendación defendible» y callarse sin volumen.
- Verificar que la corrección funcionó: el reintento vuelve a la capa que falló y el auditor re-evalúa.
- Orquestador con especialistas y validación humana (Itaú), parecido a los megaagentes.
- CLAUDE.md o AGENTS.md por repo (Mercari).

## 4. Dominios que no abrieron
Desde la nube no resuelven (hay que permitirlos en la red de la sesión): stripe.dev, www.uber.com, engineering.atspotify.com, futurium.ec.europa.eu, microsoft.github.io, engineering.grab.com, infoq.com, engineering.mercari.com, building.nubank.com, arxiv.org, www.manufacturing.net, dev.to, www.themoonlight.io, www.gravitee.io, www.fsb.org, www.garp.org, www.bcg.com, ntrs.nasa.gov, www.jmir.org. github.com y anthropic.com sí abrieron; un repositorio dio 404.

## 5. Límites
- Solo una fuente primaria se abrió completa en todo el viaje (Anthropic) más el repositorio de Microsoft. El resto es buscador o resúmenes de terceros; las cifras de Airbnb, Spotify, Nubank, Grab, Itaú, Mercari y Deloitte no están verificadas.
- No hay hallazgo sobre Triario más allá de los hechos internos del encargo; las lecturas de «ya lo hacemos» marcadas [Hipótesis] deben confirmarse con Hernán.
- SR 26-2, EU AI Act y el marco de Singapur son vocabulario de gobernanza, no obligaciones de Triario. Los plazos del EU AI Act no se verificaron en fuente oficial.
- Quedaron sin cubrir: ingeniería de software (original de Spotify, hooks), registros de auditoría por acción en salud, y el texto oficial de SR 26-2 y del documento de JPMorgan.
