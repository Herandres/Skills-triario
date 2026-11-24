## 6. Discusión: innovación y límites
Responde: P2, P4, P5

El eje horizontal del plano mide la madurez afuera con una vara fija: consenso si lo recogen estándares o la documentación oficial de los laboratorios, emergente si hay dos fuentes primarias y un caso en producción[^1]. El vertical mide la adopción aquí. Cada concepto lleva dos puntos: los equipos y el sistema de agentes, el nivel más alto de la escalera[^2].

<!-- figura: plano -->

**Dónde va adelante.** Human-in-the-loop (persona en el circuito) es el único concepto que los equipos ya aplican[^2]. En el nivel más alto suben a aplicado el harness (arnés del agente), el context engineering (ingeniería de contexto), la observabilidad y los guardrails (barandas)[^2].

**Dónde va a la par o atrás.** Del harness y la gobernanza los equipos todavía solo hablan[^2]. En evals (evaluaciones automáticas) ambos puntos quedan a medias: hay un revisor ciego, pero ningún conjunto fijo de casos que mida si acierta; aprobó 22 de 22 ciclos en la primera ronda[^2]. Anthropic describe que personas calibran a esos calificadores[^3]. La gobernanza de IA sube solo a medias: hay dueño humano de las reglas, pero no inventario de loops ni un marco como NIST AI RMF o ISO/IEC 42001[^2].

**Límites de la evidencia.**

- La columna de los equipos se armó con el contexto de un encargo, no con registros de los equipos[^2]. Que los equipos no llegaron a observabilidad, guardrails, versionado y costo de tokens está pendiente de confirmar [confirmar con Hernán].
- El costo de tokens no tiene registro en ningún nivel; el único indicio es que las rutinas agotaban el uso de una cuenta, una consecuencia y no una medición[^2].
- La observabilidad del nivel más alto es por corrida, no por llamada al modelo ni con tokens, que es como lo define el radar; sus guardrails son chequeos deterministas, no hooks (ganchos) sobre las herramientas[^2].
- «Consenso» casi siempre significa documentación de Anthropic y OpenAI, no un estándar formal; solo gobernanza y human-in-the-loop tienen detrás un organismo o una ley[^1]. El consenso en gobernanza descansa en fuentes vistas solo en el buscador, y el versionado de prompts y skills queda fuera porque no apareció un caso publicado en producción[^4].

El sistema aplica 5 de 9 conceptos[^2]; evals, gobernanza, versionado y costo de tokens siguen a medias o sin medir. La innovación: cada punto apunta a su evidencia[^5].

[^1]: investigacion/cierre-loop-engineering/t14-aterrizador/radar.md §2 y §3 (vara fija y tabla del radar) · [Fuente primaria]; §3 «Por qué casi todo salió consenso» (juicio del autor) · [Hipótesis]
[^2]: documento/cierre-loop-engineering/d03-radar/radar.md «Lectura por zona» y «Tabla de evidencias» (rama origin/claude/doc-le-d03-radar) · evidencia [Fuente primaria]; niveles aplicado y a medias [Hipótesis]
[^3]: investigacion/cierre-loop-engineering/t14-aterrizador/radar.md §4 punto 1 (Anthropic, Demystifying evals for AI agents) · [Fuente primaria]
[^4]: investigacion/cierre-loop-engineering/t14-aterrizador/radar.md §3 y §5 (fichas de gobernanza y versionado); t16-supervisor/huecos.md HR-005 (fuentes primarias débiles) · [Visto solo en buscador]
[^5]: documento/cierre-loop-engineering/d03-radar/radar.md «Dónde está la innovación» (lectura del autor del plano) · [Hipótesis]
