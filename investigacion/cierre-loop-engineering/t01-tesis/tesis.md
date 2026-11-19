# T1 · La tesis: el loop como tubería

Rama: `claude/cierre-le-t01-tesis` · Fecha de la corrida: 2026-11-19 · Proyecto: cierre de Loop Engineering (Triario).

Pregunta: ¿cómo está nombrando y mostrando la industria a los loops de agentes como un sistema de ingeniería, y qué vocabulario comparte con la ingeniería de datos?

Sellos usados: [Fuente primaria] · [Fuente secundaria] · [Visto solo en buscador] · [Hipótesis]. Los hechos internos del proyecto (auditor ciego, contrato fijo, máximo 3 vueltas, etc.) vienen del encargo y se usan como contexto, no como fuente externa.

---

## 1. Lo que leí de la pizarra

Comandos: `git fetch origin --prune`, `git branch -r`, `git ls-tree` sobre cada rama `origin/claude/*`.

| Rama | Archivo | Qué tomé |
|---|---|---|
| `origin/claude/cierre-le-prueba` | `investigacion/cierre-loop-engineering/t00-prueba/prueba.md` | Es una prueba canario, no una investigación. Tomé dos datos operativos: (a) `arxiv.org` no resuelve desde la nube (`getaddrinfo ENOTFOUND`), así que no lo intenté y usé lo que dijo el buscador; (b) `github.com` sí abre (abrió el repo de Pixel Agents) y la herramienta de subagentes funciona. |

No existía todavía ninguna otra tarea del relevo (T2 a T7). Como soy la primera tarea, sigo sin ellas. No modifiqué nada de otra rama.

---

## 2. Qué es loop engineering y de dónde viene

### 2.1 El origen: confirmado con una corrección

La hipótesis de los blogs secundarios era «Addy Osmani lo popularizó en junio de 2026». **Se confirma con un matiz de orden:**

- **El detonante fue Peter Steinberger, el 7 de junio de 2026.** Varias reseñas citan su publicación: «You should be designing loops that prompt your agents» (deberías diseñar loops que les den las instrucciones a tus agentes). [Visto solo en buscador] Reseñas: [The New Stack](https://thenewstack.io/loop-engineering/), [DEV Community](https://dev.to/shittu_olumide_/everything-to-know-about-loop-engineering-41an), [36Kr](https://eu.36kr.com/en/p/3904771418867330).
- **Addy Osmani le puso nombre y anatomía al día siguiente** en el ensayo «Loop Engineering»: [addyosmani.com/blog/loop-engineering](https://addyosmani.com/blog/loop-engineering/), con espejos en [Substack](https://addyo.substack.com/p/loop-engineering) y [X](https://x.com/addyosmani/status/2064127981161959567). [Visto solo en buscador] La mayoría de las reseñas lo fechan el 8 de junio de 2026; un resumen del buscador lo fecha el 7. **No pude abrir el texto original** (addyosmani.com y substack.com bloqueados), así que la fecha exacta queda entre 7 y 8 de junio de 2026 y las citas de Osmani que siguen vienen de reseñas.
- Lo que las reseñas atribuyen a Osmani: la idea de «replacing yourself as the person who prompts the agent» (reemplazarte como la persona que le da instrucciones al agente); los loops viven un nivel por encima del harness (arnés, el entorno donde corre un agente); y sus bloques: **automations** (automatizaciones programadas que descubren y clasifican trabajo), **worktrees** (copias aisladas del repo para que agentes en paralelo no choquen), **skills**, **connectors** (conectores) y **sub-agents** (subagentes: uno escribe y otro revisa), todo apoyado en **estado en disco** porque el agente olvida entre corridas. [Visto solo en buscador] [aibuilderclub](https://www.aibuilderclub.com/blog/loop-engineering-addy-osmani), [MachineLearningMastery](https://machinelearningmastery.com/an-introduction-to-loop-engineering/). Un paper posterior le cita la frase «the agent forgets, the repo doesn't» (el agente olvida, el repo no). [Visto solo en buscador] [arXiv 2608.21884](https://arxiv.org/pdf/2608.21884)
- Osmani también advierte, según las reseñas, que la verificación sigue siendo trabajo del desarrollador: «done» (terminado) es una afirmación, no una prueba. [Visto solo en buscador] Mismas reseñas.
- El 18 de julio de 2026 Steinberger volvió a escribir que la era del loop da paso a **grafos de loops interconectados**. [Visto solo en buscador] [36Kr](https://eu.36kr.com/en/p/3904771418867330). Esto es relevante para Triario: cuatro equipos con megaagentes son, en la práctica, un grafo de loops. [Hipótesis]

### 2.2 Definición que circula

IBM lo define como diseñar flujos agénticos que guían repetidamente a los agentes hacia metas definidas por el usuario con poca intervención humana, e incluye **criterios de parada claros y verificables** como parte del diseño. [Visto solo en buscador] [IBM Think](https://www.ibm.com/think/topics/loop-engineering) (la página no abrió). Unas notas de curso advierten que las piezas (retroalimentación, verificación, estado, condiciones de parada) son práctica de ingeniería establecida y lo nuevo es el nombre. [Visto solo en buscador] [tds.s-anand.net](https://tds.s-anand.net/2026-02/docs/week-5/loop-engineering/)

En agosto de 2026 apareció un estudio empírico, «Loop Engineering: Building Blocks, Adoption, and Impact» (Lulla et al.), que minó repositorios abiertos buscando invocaciones programadas o disparadas por eventos de herramientas de código. Las reseñas dan cifras que se contradicen en el denominador (217 loops confirmados sobre 36.710 o sobre 256 repos), así que **no cito la cifra**. [Visto solo en buscador] [arXiv 2608.21884](https://arxiv.org/pdf/2608.21884)

### 2.3 La genealogía: del prompt a la tubería

| Año | Nombre | Qué aporta a la tesis | Sello |
|---|---|---|---|
| Ene 2024 | **Flow engineering** (ingeniería de flujo), AlphaCodium | Un flujo «test-based, multi-stage, code-oriented iterative» (basado en pruebas, en varias etapas e iterativo) que corre el código contra pruebas y lo corrige. GPT-4 pasó de 19 % a 44 % (pass@5, validación de CodeContests). Los autores dicen que ~95 % del esfuerzo fue «high-level design, reasoning, and injecting data at the correct places» (diseño de alto nivel, razonamiento e inyectar datos en el lugar correcto), no ajuste de prompts. Es el antecedente directo: **el valor está en el flujo, no en el prompt.** | [Fuente primaria] [repo oficial Codium-ai/AlphaCodium](https://github.com/Codium-ai/AlphaCodium) · paper [arXiv 2401.08500](https://arxiv.org/abs/2401.08500) [Visto solo en buscador] |
| Dic 2024 | **Building effective agents**, Anthropic | Separa **workflows** («systems where LLMs and tools are orchestrated through predefined code paths», caminos de código predefinidos) de **agents** («systems where LLMs dynamically direct their own processes and tool usage»). Cataloga patrones (ver 2.4) y dice que es común incluir «stopping conditions (such as a maximum number of iterations) to maintain control». | [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/building-effective-agents) |
| Jul 2025 | **Ralph loop**, Geoffrey Huntley | Un `while` de shell que le pasa el mismo PROMPT.md a un agente en cada vuelta, con contexto limpio y estado en disco; «una cosa por vuelta». Anthropic lo formalizó luego como plugin con Stop hooks. | [Visto solo en buscador] [Steve Kinney](https://stevekinney.com/writing/the-ralph-loop), [Future AGI](https://futureagi.com/blog/loop-engineering/ralph-loop/) |
| Nov 2025 | **Effective harnesses for long-running agents**, Anthropic (Justin Young, 26 nov 2025) | Ver 2.5. Es el manual de un loop de ciclo largo con bitácora. | [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) |
| Feb 2026 | **Harness engineering**, OpenAI (Ryan Lopopolo, 11 feb 2026) | El trabajo del equipo pasa a ser «design environments, specify intent, and build feedback loops» (diseñar entornos, especificar intención y construir ciclos de retroalimentación). | [Visto solo en buscador] [openai.com](https://openai.com/index/harness-engineering/), [InfoQ](https://www.infoq.com/news/2026/02/openai-harness-engineering-codex) |
| Jun 2026 | **Loop engineering**, Steinberger y Osmani | Sube un nivel: el sistema que dispara, revisa y reintenta al agente. | ver 2.1 |

### 2.4 Los patrones de «Building effective agents» [Fuente primaria] ([enlace](https://www.anthropic.com/engineering/building-effective-agents))

| Patrón | Qué es (resumen de la fuente) | Lo que construimos |
|---|---|---|
| **Prompt chaining** (encadenamiento) con **gates** (compuertas) | Pasos secuenciales con chequeos programáticos entre pasos. | El megaagente que llama skills en orden. |
| **Routing** (enrutamiento) | Clasifica la entrada y la manda a una tarea especializada. | Reintento que vuelve a la capa que falló. [Hipótesis] |
| **Parallelization** (paralelización) | Secciones en paralelo o votación de varias corridas. | No encontrado en lo construido. |
| **Orchestrator-workers** (orquestador y trabajadores) | Un LLM central descompone la tarea en subtareas decididas sobre la marcha y delega. | Solo aplica si el megaagente decide las subtareas; si las llama en orden fijo, es prompt chaining. |
| **Evaluator-optimizer** (evaluador y optimizador) | Un LLM genera y otro critica, en bucle hasta refinar. | Generador más auditor ciego. |
| **Agents** | El LLM elige sus pasos según la retroalimentación del entorno. | Partes del megaagente. |

### 2.5 El harness de larga duración [Fuente primaria] ([enlace](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents))

- Un **initializer agent** (agente inicializador) prepara el entorno en la primera sesión: script `init.sh`, archivo de progreso `claude-progress.txt` y commit inicial.
- Un **coding agent** (agente de código) avanza una funcionalidad por sesión y deja actualizaciones estructuradas para la siguiente.
- Una **lista de funcionalidades en JSON** (más de 200 en el ejemplo), todas marcadas como fallidas al inicio. Los agentes solo pueden cambiar el campo `passes`; el prompt prohíbe borrar o editar las pruebas. Eligieron JSON porque el modelo tiende menos a sobrescribirlo que un Markdown.
- Cada sesión arranca leyendo progreso, git log y lista, y corre una prueba de punta a punta antes de trabajar.
- Hallazgo: el agente marcaba cosas como terminadas sin verificarlas; pedir pruebas explícitas con automatización de navegador mejoró mucho el resultado. Queda abierto si un agente de QA aparte supera a uno solo.

Esto respalda con fuente primaria dos reglas nuestras: **el contrato no se toca durante el ciclo** (las pruebas no se editan, solo el estado `passes`) y **la bitácora vive fuera del contexto** (archivo de progreso más git).

---

## 3. El mapa de equivalencias, fila por fila

Veredictos: **Se sostiene** · **Se sostiene con ajuste** · **No se sostiene así** (con la corrección propuesta) · **Nueva**.

| # | Ingeniería de datos | Nuestro loop | Veredicto | Por qué y fuente |
|---|---|---|---|---|
| 1 | **Orquestador** (orchestrator: Airflow, Dagster) | Megaagente que llama las skills en orden y decide si hay otra vuelta | **Se sostiene con ajuste** | En datos, el orquestador ejecuta un DAG (grafo dirigido sin ciclos) definido de antemano, con reintentos y ventanas por corrida [Fuente primaria] [Airflow, DAG runs](https://airflow.apache.org/docs/stable/core-concepts/dag-run.html) [Visto solo en buscador]. Ajuste: llamar skills **en orden fijo** es lo que Anthropic llama **workflow / prompt chaining**, no orchestrator-workers; ese nombre corresponde solo si el megaagente decide las subtareas sobre la marcha [Fuente primaria] [Anthropic](https://www.anthropic.com/engineering/building-effective-agents). Además un DAG no tiene ciclos: la «otra vuelta» es el bucle evaluator-optimizer montado encima. Decirlo así evita que un ingeniero de datos objete «un DAG no se repite». [Hipótesis] |
| 2 | **Contrato de datos** (data contract) | Contrato fijo del auditor | **Se sostiene con ajuste** | Un data contract es un acuerdo legible por máquina entre productor y consumidor sobre esquema, reglas de calidad y SLA (acuerdo de nivel de servicio), con versionado; el estándar abierto es ODCS (Open Data Contract Standard), proyecto de la Linux Foundation mantenido por Bitol [Fuente secundaria] [Actian](https://www.actian.com/glossary/data-contracts/), [Coginiti](https://coginiti.co/glossary/data-contracts/); repo ODCS [Visto solo en buscador]. Ajuste: el equivalente más exacto de «criterios que no cambian durante el ciclo» es una **suite de expectativas versionada** (expectation suite) más la regla de que un contrato solo cambia con versión nueva, entre corridas. La prueba directa en agentes: el harness de Anthropic prohíbe editar las pruebas y solo deja cambiar `passes` [Fuente primaria] [Anthropic](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents). Nuestro caso (criterio movido a mitad: no cerró en 3 vueltas; fijo: aprobó en la primera) es interno y no se cita como fuente externa. |
| 3 | **Prueba de calidad independiente** (data quality test: dbt tests, Great Expectations checkpoints) | Auditor ciego en subagente aparte | **Se sostiene con ajuste** | dbt trae pruebas genéricas (`unique`, `not_null`, `accepted_values`, `relationships`) y las singulares pasan si devuelven cero filas [Fuente primaria] [dbt docs](https://docs.getdbt.com/docs/build/data-tests) [Visto solo en buscador]. Un checkpoint de Great Expectations valida un lote contra una suite y dispara acciones; desde la CLI devuelve código de salida 1 si falla, lo que detiene la tubería [Fuente primaria] [GX docs](https://docs.greatexpectations.io/docs/terms/checkpoint/) [Visto solo en buscador]. En agentes: evaluator-optimizer [Fuente primaria] [Anthropic](https://www.anthropic.com/engineering/building-effective-agents) y «uno escribe, otro revisa» de Osmani [Visto solo en buscador]. Ajuste: una prueba de datos es **determinista**; nuestro auditor es un LLM (LLM-as-judge, modelo como juez) y puede variar entre corridas. Lo que sí hereda es la **separación de funciones** (maker-checker: quien hace no aprueba) [Hipótesis]. |
| 4 | **Reintentos con tope** (bounded retries) | Reintento a la capa que falló, máximo 3 | **Se sostiene con ajuste** | Airflow: `retries` es el número de reintentos antes de marcar la tarea como fallida, con `retry_delay`, backoff exponencial y `max_retry_delay` [Fuente primaria] [Airflow BaseOperator](https://airflow.apache.org/docs/apache-airflow/2.6.0/_api/airflow/models/baseoperator) [Visto solo en buscador]. Anthropic: «maximum number of iterations» como condición de parada [Fuente primaria]. Ajuste: un reintento de Airflow repite **la misma tarea igual**, pensado para fallas transitorias. El nuestro vuelve **a la capa que falló con la crítica del auditor**, o sea un reintento con retroalimentación que reanuda desde un punto de control (checkpoint) y no repite toda la tubería; una reseña lo describe así para agentes [Fuente secundaria] [MightyBot](https://mightybot.ai/blog/fault-tolerant-ai-agent-pipelines/). El tope existe por costo: una reseña cuenta un equipo que gastó 3 veces su presupuesto mensual en una noche por un bucle de validación sin tope [Fuente secundaria] [Blue Orange](https://blueorange.digital/blog/agentic-data-pipelines-what-actually-runs-in-production/). |
| 5 | **Cola de fallidos** (dead-letter queue, DLQ) | Archivada «sin recomendación defendible» | **Se sostiene con ajuste** | En Kafka Connect la DLQ se activa con `errors.deadletterqueue.topic.name` y puede adjuntar cabeceras de contexto (tópico, offset, conector, etapa de la falla) a cada registro fallido [Fuente primaria] [MongoDB Kafka Connector, error handling](https://www.mongodb.com/docs/kafka-connector/v2.2/sink-connector/configuration-properties/error-handling/) [Visto solo en buscador]. La DLQ aísla el fallido para que el resto siga [Fuente secundaria] [DZone](https://dzone.com/articles/coordinating-ai-agents-aws-sqs). Ajuste: una DLQ **no es un basurero**, guarda contexto para revisar y reprocesar. Para sostener la fila, lo archivado debería guardar la última salida, el veredicto del auditor por vuelta y la capa que falló, y alguien debería revisarlo con alguna frecuencia [Hipótesis]. |
| 6 | **Ventana de datos y backfill** (relleno histórico) | Ensanchar la ventana antes de opinar (ayer, 3 días, 1 semana, 2 semanas) y callar si no hay volumen | **No se sostiene así** · corrección | En Airflow cada corrida cubre un **data interval** (intervalo de datos) fijo; **catchup** y **backfill** vuelven a correr intervalos pasados que no se procesaron [Fuente primaria] [Airflow DAG runs](https://airflow.apache.org/docs/stable/core-concepts/dag-run.html) [Visto solo en buscador]. Eso es reprocesar historia, no ampliar la muestra. Lo nuestro se parece más a una **ventana de lookback adaptativa** (ventana hacia atrás que se ensancha) más una **prueba de volumen mínimo** que bloquea si no se cumple, como un asset check con `blocking=True` en Dagster, que impide que se materialice lo de abajo si la prueba falla [Fuente primaria] [Dagster asset checks](https://docs-preview.dagster.io/guides/asset-checks) [Visto solo en buscador]. «Callar» equivale a no publicar el activo de salida. Propuesta de fila: **Ventana de lookback + umbral de volumen (bloqueante)** [Hipótesis en el nombre]. |
| 7 | **Linaje y observabilidad** (lineage, observability) | Bitácora con línea base | **Se sostiene con ajuste: partir en dos** | OpenLineage modela **Job, Run y Dataset**; cada corrida emite eventos START y uno terminal (COMPLETE, FAIL o ABORT) con el mismo `runId` [Fuente primaria] [OpenLineage, run cycle](https://openlineage.io/docs/spec/run-cycle/) [Visto solo en buscador]. La bitácora del loop sí es observabilidad: el harness de Anthropic usa `claude-progress.txt` más git como registro que la siguiente sesión lee [Fuente primaria]. Pero **la línea base no es linaje**: es el punto de comparación de una métrica (en datos se usa para detectar anomalías; en experimentos, como control) [Hipótesis]. Linaje, en nuestro loop, sería poder decir qué insumos, qué versión del contrato y qué versión de la skill produjeron cada salida. Propuesta: fila 7a **Observabilidad → bitácora por corrida**; fila 7b **Linaje → registro de insumos, versión de contrato y de skill por salida**; la línea base va a la fila 13. |
| 8 | **Aprobación antes de producción** (approval gate) | Parar en «listo para publicar»; publica una persona | **Se sostiene** | En GitHub Actions un entorno con **required reviewers** (revisores obligatorios) pausa el job y notifica; solo sigue con aprobación [Fuente secundaria] [OneUptime](https://oneuptime.com/blog/post/2026-01-25-github-actions-environment-protection-rules/view), [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/continuous-deployment-for-machine-learning/3-control-deployments-approval-gates) [Visto solo en buscador]. Osmani, según reseñas: la verificación y la responsabilidad siguen siendo humanas [Visto solo en buscador]. En LangGraph Studio se puede pausar antes de una herramienta para que una persona apruebe [Fuente secundaria] [markaicode](https://www.markaicode.com/langgraph-studio-visual-debugger-agent-graphs/) [Visto solo en buscador]. |
| 9 | **Arquitectura medallón** (bronze, silver, gold) | Capas del loop: insumo crudo → borrador aprobado por el auditor → «listo para publicar» | **Nueva** | Databricks: bronze (crudo), silver (validado), gold (enriquecido, listo para negocio); las tablas silver se construyen leyendo de bronze, no directo de la ingesta [Fuente primaria] [Databricks docs](https://docs.databricks.com/aws/en/lakehouse/medallion) [Visto solo en buscador]. El paralelo explica por qué el reintento vuelve **a la capa que falló**: se reconstruye desde la capa anterior, no desde cero [Hipótesis]. |
| 10 | **Idempotencia** (idempotency: correr dos veces no duplica efectos) | El loop no publica ni envía nada por sí solo | **Nueva** | Los reintentos solo son seguros si repetir no hace daño; enviar un correo o publicar no es idempotente [Fuente secundaria] [DZone](https://dzone.com/articles/failure-handling-in-ai-pipelines-designing-retries). Es la razón técnica de la fila 8: el efecto irreversible queda fuera del loop [Hipótesis]. |
| 11 | **Checkpoint y estado persistente** (state store) | Estado en disco: CLAUDE.md, archivos de progreso, repo | **Nueva** | Anthropic: archivo de progreso, lista JSON y commits como estado entre sesiones [Fuente primaria]. Osmani: «the agent forgets, the repo doesn't» [Visto solo en buscador]. El repo de patrones de Cobus Greyling usa `STATE.md`, un log de corridas y un archivo de presupuesto [Fuente primaria] [github.com/cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering). |
| 12 | **Scheduler y triggers** (programador y disparadores) | Las automations que arrancan el loop solas | **Nueva** | Osmani lista las automations como lo que hace recurrente al loop [Visto solo en buscador]. El estudio Lulla et al. detecta loops justamente por invocaciones programadas o por eventos [Visto solo en buscador] [arXiv 2608.21884](https://arxiv.org/pdf/2608.21884). |
| 13 | **Línea base y monitoreo de métricas** (baseline, anomaly detection) | Loop de ciclo largo (resultado a 30 días) con línea base | **Nueva** (sale de la fila 7) | No encontré una fuente de ingeniería de datos abierta en esta corrida que lo defina; queda como [Hipótesis]. El loop largo de Anthropic sí usa un registro de progreso entre sesiones [Fuente primaria]. |
| 14 | **Aislamiento de entornos** (dev, staging, prod; sandbox) | Worktrees: cada agente en su copia | **Nueva** | Osmani, según reseñas: worktrees para que agentes paralelos no choquen [Visto solo en buscador]. |
| 15 | **Niveles de madurez y promoción** | Pasar de supervisado a autónomo | **Nueva** | El repo de Greyling recomienda subir de L1 a L3 «only after the verifier has been right for a week» (solo cuando el verificador haya acertado una semana) [Fuente primaria] [GitHub](https://github.com/cobusgreyling/loop-engineering). Es una regla de promoción como las de un pipeline a producción [Hipótesis]. |

**Filas que no se sostienen tal como estaban:** la 6 (backfill no es ensanchar la ventana) y la parte de «línea base» de la 7 (la línea base no es linaje). Las demás se sostienen con los ajustes indicados.

---

## 4. Cómo lo muestra hoy la industria

1. **Pixel Agents** (Pablo De Lucca, licencia MIT). Convierte cada terminal de agente en un personaje pixel art en una oficina: camina al escritorio, teclea cuando edita, lee cuando busca, muestra una burbuja cuando necesita permiso o terminó; los subagentes aparecen como personajes propios. Lee los eventos de Claude Code por hooks (`PreToolUse`, `PermissionRequest`, `Stop`) o, si no hay hooks, los transcripts JSONL. [Fuente primaria] [github.com/pablodelucca/pixel-agents](https://github.com/pablodelucca/pixel-agents). Es la referencia más cercana a la oficina virtual del compañero de Triario. Le falta lo que nuestro loop tiene: no muestra el contrato, las vueltas ni el veredicto del auditor [Hipótesis].
2. **Diagramas de patrones de Anthropic.** Muestran cada patrón como cajas y flechas: el evaluator-optimizer es un bucle explícito entre generador y evaluador con salida «aceptado». [Fuente primaria] [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
3. **El harness de larga duración de Anthropic**, mostrado como dos roles (inicializador y agente de código) más artefactos en disco (progreso, lista JSON, git). [Fuente primaria] [Effective harnesses](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
4. **Vistas de grafo para observabilidad de agentes.** LangGraph Studio dibuja nodos, aristas y el estado en cada paso, con puntos de pausa; Langfuse agregó vistas de grafo de agentes (en beta); Orq.ai dibuja cada paso o subagente como un nodo de un grafo dirigido. [Visto solo en buscador] [LangSmith Studio](https://docs.langchain.com/langsmith/studio.md), [Langfuse agent graphs](https://langfuse.com/docs/observability/features/agent-graphs), [Orq.ai](https://docs.orq.ai/docs/ai-studio/observability/agent-graphs). Es el mismo lenguaje visual que usa la ingeniería de datos para un DAG [Hipótesis].
5. **Plantillas de loops como repos.** El repo de Cobus Greyling empaqueta loops con nombre de oficio (Daily Triage, PR Babysitter, CI Sweeper) y una CLI con `init`, `audit` y `cost`. [Fuente primaria] [github.com/cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)

No encontré, en esta corrida, a nadie de la industria que presente explícitamente los loops de agentes con el vocabulario completo de la ingeniería de datos. Hay piezas sueltas (DLQ, reintentos, idempotencia en blogs de práctica) pero no un mapa como el nuestro. Eso es una oportunidad para el cierre, no un hecho verificado de ausencia. [Hipótesis]

---

## 5. Definición de una línea para el cierre

> **Loop Engineering es diseñar la tubería que pone a trabajar a los agentes: etapas en orden, un contrato de calidad que no cambia, un revisor que no hizo el trabajo, reintentos con tope, un archivo para lo que no pasa y una persona en la puerta de producción.**

Versión corta: *ingeniería de datos aplicada al trabajo de los agentes.*

---

## 6. Dominios que no abrieron

| Dominio | Error | Cómo lo traté |
|---|---|---|
| `arxiv.org` | `ENOTFOUND` (reportado en la pizarra, `t00-prueba/prueba.md`) | No lo intenté; usé el buscador y el repo de GitHub de AlphaCodium. |
| `addyosmani.com` | `getaddrinfo ENOTFOUND` | Ensayo original de Osmani sin leer directo: [Visto solo en buscador]. |
| `addyo.substack.com` | `getaddrinfo ENOTFOUND` | Ídem. Probablemente todo `*.substack.com` está fuera. |
| `www.ibm.com` | `getaddrinfo ENOTFOUND` | Definición de IBM: [Visto solo en buscador]. |
| `thenewstack.io` | `getaddrinfo ENOTFOUND` | Fechas de Steinberger y Osmani: [Visto solo en buscador]. |

Abrieron bien: `www.anthropic.com` y `github.com`. No intenté airflow.apache.org, docs.getdbt.com, docs.databricks.com, openlineage.io ni docs.dagster.io para ahorrar aperturas; todo lo de esos sitios va como [Visto solo en buscador]. Para permitirlos, hay que agregarlos en la configuración de red del entorno.

Presupuesto usado: 16 búsquedas de 25 y 9 aperturas de 15 (4 fallidas).

---

## Nota de la fase 2

La revisión del especialista en ingeniería de datos está en `ideas-ingenieria-datos.md`, guardada tal cual. El subagente recibió como única entrada este archivo (`tesis.md`, leído desde su ruta con la instrucción de no abrir nada más del repo ni la historia de git) y la instrucción del encargo; no recibió notas ni proceso de esta tarea. Sus propuestas no se incorporaron a este documento: quedan para las tareas siguientes del relevo.
