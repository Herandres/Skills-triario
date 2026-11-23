## 4. Estado del arte de la industria
Responde: P2

La práctica con agentes se ordena alrededor de un grupo de conceptos. Para medir la madurez de cada uno, un radar de la investigación usó una vara fija: hay **consenso** cuando lo recogen estándares u organismos, o la documentación oficial de los laboratorios; hay **práctica emergente** cuando lo sostienen dos fuentes primarias independientes y un caso publicado en producción; y es **moda** cuando solo aparece en blogs o redes[^1].

<!-- figura: radar-industria -->

| Concepto | Qué es | Madurez en la industria |
|---|---|---|
| Context engineering (ingeniería de contexto) | Decidir qué entra en la ventana de contexto del agente en cada paso y qué se resume o se saca[^2] | Consenso |
| Evals (evaluaciones automáticas de agentes) | Tareas fijas con su calificación, que se corren cada vez que cambia el modelo, el prompt o la skill[^3] | Consenso |
| Guardrails (barandas) | Chequeos programados sobre entradas, salidas o herramientas que detienen al agente fuera de lo permitido[^4] | Consenso |
| Harness (arnés) | Lo que rodea al modelo para que trabaje como agente: bucle, herramientas, permisos, hooks (ganchos), memoria en disco y pruebas[^5] | Consenso |
| Observabilidad y trazas | Registrar cada paso del agente fuera de él para reconstruir qué pasó y por qué falló[^6] | Consenso, con el estándar abierto todavía en desarrollo |
| Human-in-the-loop (persona en el circuito) | Puntos fijos donde una persona aprueba, corrige o detiene al agente[^7] | Consenso, con respaldo legal |
| Gobernanza de IA | Roles, políticas, inventarios y controles para decidir qué IA se usa y quién responde por ella[^8] | Consenso, con estándares formales |
| Versionado de prompts y skills | Cada prompt y skill con versiones inmutables y un puntero a la versión en producción[^9] | No alcanza la vara: falta un caso publicado en producción |
| Costo de tokens | Medir cuántos tokens gasta cada agente por corrida y ponerle un tope[^10] | Consenso |

**Qué significa «consenso» en esta tabla.** Casi todo quedó en consenso porque Anthropic y OpenAI documentan casi todos estos conceptos; en evals, contexto y costo de tokens, solo Anthropic. Eso indica que el concepto está reconocido, no que exista un estándar formal: solo la gobernanza y la persona en el circuito tienen detrás un organismo o una ley[^11]. La gobernanza se apoya en el marco de riesgo de NIST (AI RMF) y en la norma ISO/IEC 42001, en la que Anthropic anunció su certificación[^8]; la supervisión humana aparece en el artículo 14 del Reglamento europeo de IA[^7].

**Lo que reportan los laboratorios.** Anthropic informa que su sistema de investigación multiagente usa cerca de 15 veces más tokens que un chat, y que en su evaluación el uso de tokens explica por sí solo el 80 % de la variación del desempeño[^10]. La misma empresa recomienda empezar los evals con 20 a 50 tareas tomadas de fallas reales y que personas calibren a los calificadores automáticos[^3]. En su diseño de harness para aplicaciones de larga duración, el evaluador de fábrica «notó problemas reales y luego se convenció de aprobarlos»[^12]. OpenAI trae barandas, trazas y human-in-the-loop en su Agents SDK (kit de agentes)[^4]. Son datos de cada laboratorio sobre sí mismo, no promedios de la industria.

**Los patrones que se repiten.**

- **Evaluator-optimizer** (evaluador y optimizador): una llamada al modelo genera y otra evalúa y devuelve retroalimentación en ciclo, según Anthropic[^13].
- **Prompt chaining** (encadenamiento) con compuertas programáticas entre pasos y condiciones de parada, como un máximo de iteraciones, también de Anthropic[^13].
- **Orchestrator-workers** (orquestador y trabajadores): un agente líder reparte subtareas y sintetiza resultados[^13].
- **Hooks deterministas:** scripts que corren en puntos fijos del ciclo y pueden bloquear una acción, documentados en Claude Code[^14].
- **Compaction** (compactación) y **structured note-taking** (notas estructuradas fuera de la ventana de contexto), descritas por Anthropic[^2].
- **Dead-letter queue** (cola de mensajes fallidos), heredada de los sistemas de colas como Amazon SQS[^15].
- **Abstención:** que el modelo se niegue a responder, total o parcialmente, recogida en una revisión académica de Wen y coautores[^16].
- **Registro por decisión:** cada permiso, rechazo o pedido de aprobación queda en un registro a prueba de manipulación, en el kit de gobernanza de Microsoft[^17].

Otros casos circulan en charlas y resúmenes: Nubank prueba cambios con clientes sintéticos antes de producción y Grab corta la red del agente desde afuera en lugar de pedirle que pare[^18].

**Qué falta afuera.** Las piezas están documentadas por separado y varias siguen inmaduras. Del versionado de prompts no se halló un caso de producción publicado con nombre de empresa[^9]. Las convenciones abiertas de trazas para IA generativa de OpenTelemetry están marcadas como en desarrollo[^6]. No se encontró un repositorio público que aplique control estadístico de procesos a agentes, y la mayoría de los casos de empresas se conocen por resúmenes, con cifras sin verificar[^19]. Que todavía no exista una documentación sólida que integre estas piezas como una disciplina de loops es una lectura de esas fuentes, no la afirmación de ninguna[^20]. [Hipótesis] Triario se compara en las secciones 5 y 6.

[^1]: investigacion/cierre-loop-engineering/t14-aterrizador/radar.md §2 La vara (criterio propio del radar) · [Hipótesis]
[^2]: investigacion/cierre-loop-engineering/t14-aterrizador/fichas/context-engineering.md §Por qué está validado (Anthropic, Effective context engineering for AI agents) · [Fuente primaria]; caso Manus · [Visto solo en buscador]
[^3]: investigacion/cierre-loop-engineering/t14-aterrizador/fichas/evals.md §Por qué está validado (Anthropic, Demystifying evals for AI agents) · [Fuente primaria]
[^4]: investigacion/cierre-loop-engineering/t14-aterrizador/fichas/guardrails.md §Por qué está validado (OpenAI Agents SDK y NVIDIA NeMo Guardrails, repositorios oficiales) · [Fuente primaria]; fichas/human-in-the-loop.md y fichas/observabilidad-trazas.md (OpenAI Agents SDK) · [Fuente primaria]
[^5]: investigacion/cierre-loop-engineering/t14-aterrizador/fichas/harness.md §Por qué está validado (Anthropic, Claude Agent SDK y Effective harnesses for long-running agents) · [Fuente primaria]; OpenAI, Harness engineering · [Visto solo en buscador]
[^6]: investigacion/cierre-loop-engineering/t14-aterrizador/fichas/observabilidad-trazas.md §Por qué está validado (OpenAI Agents SDK; OpenTelemetry semantic-conventions-genai) · [Fuente primaria]; estado «en desarrollo» en opentelemetry.io · [Visto solo en buscador]
[^7]: investigacion/cierre-loop-engineering/t14-aterrizador/fichas/human-in-the-loop.md §Por qué está validado (Reglamento (UE) 2024/1689, art. 14) · [Visto solo en buscador]; Anthropic, Building effective agents · [Fuente primaria]
[^8]: investigacion/cierre-loop-engineering/t14-aterrizador/fichas/gobernanza-ia.md §Por qué está validado (NIST AI RMF, ISO/IEC 42001 y anuncio de Anthropic, vía resúmenes) · [Visto solo en buscador]
[^9]: investigacion/cierre-loop-engineering/t14-aterrizador/fichas/versionado-prompts-skills.md §Por qué está validado (Langfuse, repositorio oficial) · [Fuente primaria]; MLflow y OpenAI · [Visto solo en buscador]
[^10]: investigacion/cierre-loop-engineering/t14-aterrizador/fichas/presupuesto-tokens-costo.md §Por qué está validado (Anthropic, multi-agent research system; Claude Code, Manage costs) · [Fuente primaria]
[^11]: investigacion/cierre-loop-engineering/t14-aterrizador/radar.md §3 «Por qué casi todo salió consenso» (lectura del radar) · [Hipótesis]
[^12]: investigacion/cierre-loop-engineering/t13-explorador/informe-de-viaje.md §2 H1 (Anthropic, Harness design for long-running apps) · [Fuente primaria]
[^13]: investigacion/cierre-loop-engineering/t15-patrones/patrones.md §4 A1, A3 y C5 (Anthropic, Building effective agents) · [Fuente primaria]
[^14]: investigacion/cierre-loop-engineering/t15-patrones/patrones.md §4 A7 (Claude Code, hooks) · [Fuente primaria]
[^15]: investigacion/cierre-loop-engineering/t15-patrones/patrones.md §4 A6 (AWS, SQS dead-letter queues) · [Visto solo en buscador]
[^16]: investigacion/cierre-loop-engineering/t15-patrones/patrones.md §4 B4 (Wen et al., Know Your Limits, TACL) · [Visto solo en buscador]
[^17]: investigacion/cierre-loop-engineering/t13-explorador/informe-de-viaje.md §2 H2 (Microsoft Agent Governance Toolkit, repositorio) · [Fuente primaria]
[^18]: investigacion/cierre-loop-engineering/t13-explorador/informe-de-viaje.md §2 H6 y H5 (resúmenes de ZenML sobre Nubank y Grab) · [Fuente secundaria]
[^19]: investigacion/cierre-loop-engineering/t13-explorador/informe-de-viaje.md §2 H4 y §5 Límites (explorador, sobre reseñas y resúmenes) · [Visto solo en buscador]
[^20]: Lectura del escritor sobre radar.md §3 y §5, e informe-de-viaje.md §5 · [Hipótesis]
