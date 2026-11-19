# T15 · El traductor de prácticas: lenguaje de patrones

Rama: `claude/cierre-le-t15-patrones` · Carpeta: `investigacion/cierre-loop-engineering/t15-patrones/` · Fecha de la corrida: 2026-11-19 · Proyecto: cierre de Loop Engineering (Triario).

Pregunta: ¿qué prácticas de equipos humanos tienen una técnica equivalente con agentes de IA, y cómo se arma cada una?

Sellos: [Fuente primaria] (paper, documentación oficial, estándar o repositorio original) · [Fuente secundaria] · [Visto solo en buscador] (no se pudo abrir o no se intentó abrir; el enlace es el que dio el buscador) · [Hipótesis] (deducción de esta tarea). Los hechos internos del proyecto vienen del encargo y se usan como contexto, no como fuente externa.

---

## 1. Lo que leí de la pizarra

Comandos: `git fetch origin --prune`, `git branch -r` y `git ls-tree -r --name-only <rama> -- investigacion/cierre-loop-engineering/` sobre cada rama `origin/claude/*`. Ramas encontradas: `origin/claude/cierre-le-prueba`, `origin/claude/cierre-le-t01-tesis` y `origin/master`.

| Rama | Archivo | Qué tomé |
|---|---|---|
| `origin/claude/cierre-le-prueba` | `t00-prueba/prueba.md` | Datos de red: `arxiv.org` no resuelve desde la nube y `github.com` sí abre. No intenté abrir arxiv.org. |
| `origin/claude/cierre-le-t01-tesis` | `t01-tesis/tesis.md` | **La tesis.** La definición de una línea («diseñar la tubería que pone a trabajar a los agentes: etapas en orden, un contrato de calidad que no cambia, un revisor que no hizo el trabajo, reintentos con tope, un archivo para lo que no pasa y una persona en la puerta de producción»). Los patrones de Anthropic (2.4) y el harness de larga duración (2.5), que T01 abrió y cito como fuente primaria en A2, B3 y C2. El ajuste de la fila 1 (orden fijo = prompt chaining, no orchestrator-workers), que uso en C5. La fila 6 (ventana de lookback con umbral bloqueante), que uso en B4. Pixel Agents (sección 4), que uso en C5. La tabla «Dominios que no abrieron», para no gastar aperturas. |
| `origin/claude/cierre-le-t01-tesis` | `t01-tesis/ideas-ingenieria-datos.md` | Propuestas del especialista en ingeniería de datos: Idea 3 (registrar «sin publicar por umbral»), en B4; Idea 5 (campos mínimos de linaje), en E3; Idea 7 (redrive y profundidad de la DLQ), en A6. El archivo completo es el ejemplo de Triario de A4 (segunda opinión de un especialista). |

No existían todavía otras tareas del relevo (T02 a T14) en el repo. Sigo sin ellas. No modifiqué nada de otra rama.

**Cómo encaja este catálogo con la tesis.** Cada pieza de la definición de T01 tiene aquí su práctica humana: «un contrato de calidad que no cambia» es A2, «un revisor que no hizo el trabajo» es A1, «reintentos con tope» es A3, «un archivo para lo que no pasa» es A6 y «una persona en la puerta» es E1. Las fichas B, C, D y E agregan lo que la tubería necesita cuando dura semanas, coordina a varios agentes o se gobierna desde afuera.

---

## 2. Método

1. **Lenguaje de patrones.** Cada ficha sigue la forma de Christopher Alexander (*A Pattern Language*, 1977) y de Gamma, Helm, Johnson y Vlissides (*Design Patterns*, 1994): nombre, práctica humana, problema, concepto de IA con fuente, técnica, mapeo rol a rol, ejemplo en Triario, cuándo usarlo y relacionados.
2. **Mapeo estructural** (structure-mapping, mapeo de estructuras). Gentner sostiene que una analogía vale por la coincidencia de las relaciones, no por el parecido de la superficie. [Fuente primaria] [Gentner 1983, Cognitive Science 7(2):155-170](https://groups.psych.northwestern.edu/gentner/papers/Gentner83.2b.pdf) [Visto solo en buscador]. Regla aplicada: si un rol clave no tiene par o una relación no se conserva, la analogía va a `archivo.md`. Cada ficha dice qué relación se conserva y dónde se separa la analogía.
3. **Auditor ciego.** Con el borrador listo lancé un subagente aparte con la herramienta Agent. Recibió solo el archivo de fichas, el criterio fijo (a, b, c) y, para el criterio (c), la lista de hechos internos del encargo más permiso de leer los dos archivos de T01 en la pizarra. Este último punto lo declaro porque sin él no podía juzgar el criterio (c).
   - **Vuelta 1:** 21 fichas, 20 aprobadas y 1 rechazada (C3 · Postmortem, por el criterio c: le atribuía al equipo una lección que el contexto no atribuye).
   - Corregí solo C3 (el ejemplo pasó a «sin ejemplo aún»).
   - **Vuelta 2** (subagente nuevo, mismo criterio, solo la ficha C3): rechazada por el criterio b (el mapeo no da par al rol de quien redacta ni a la relación «sin culpables»). Era la última vuelta, así que C3 pasa a `archivo.md` con su razón.
   - El criterio no cambió entre vueltas.
4. **Presupuesto usado:** 20 búsquedas de 25 y 9 aperturas de 15 (1 fallida).

---

## 3. Índice por familias

| Familia | Ficha | Práctica humana | Concepto de IA | ¿De las semillas? |
|---|---|---|---|---|
| A · Verificación | A1 | Maker-checker de la banca | Evaluator-optimizer | Semilla 1 |
| | A2 | Reglas fijadas antes de empezar | Data contract | Semilla 5 |
| | A3 | Devolver la pieza a la estación que falló | Prompt chaining con gates + Reflexion | Semilla 6 |
| | A4 | Segunda opinión de un especialista | Subagentes especialistas de solo lectura | Semilla 9 |
| | A5 | Equipo rojo | Red teaming con LLM | Nueva |
| | A6 | Archivo de casos no resueltos | Dead-letter queue | Semilla 7 |
| | A7 | Lista de verificación de cabina | Hooks deterministas | Nueva |
| B · Exploración | B1 | Viaje de aprendizaje | Exploration vs. exploitation | Semilla 2 |
| | B2 | Radar de tecnología | LLM juez con rúbrica + votación | Semilla 10 |
| | B3 | Bitácora o diario de viaje | Memoria externa persistente | Semilla 3 |
| | B4 | Analista que no opina sin datos | Abstención | Semilla 11 |
| C · Memoria y coordinación | C1 | Relevo con pizarra común | Blackboard y estigmergia | Semilla 8 |
| | C2 | Traspaso de turno | Compaction y nota de progreso | Nueva |
| | C4 | Tablero kanban | Lista de tareas compartida (agent teams) | Nueva |
| | C5 | Supervisor que recorre la oficina | Orchestrator-workers | Semilla 4 |
| D · Deliberación | D1 | Abogado del diablo | Debate multiagente | Nueva |
| | D2 | Jurado de evaluadores independientes | Self-consistency y voting | Nueva |
| E · Gobierno | E1 | Publica una persona | Human-in-the-loop | Semilla 12 |
| | E2 | Comité de cambios | Plan approval | Nueva |
| | E3 | Auditoría con rastro | Trazas OpenTelemetry GenAI | Nueva |

Las 12 semillas quedaron aprobadas. Nuevas aprobadas: 8 (A5, A7, C2, C4, D1, D2, E2, E3). La C3 (postmortem) y otras cuatro candidatas están en `archivo.md`.

---

## 4. Fichas aprobadas

## Familia A · Verificación

### A1. El que hace no es el que aprueba (maker-checker · «méiker-chéker»)
- **La práctica humana:** en la banca, una persona registra la operación (maker) y otra distinta la revisa y la autoriza (checker) antes de que tenga efecto. Si el revisor la rechaza, vuelve a quien la hizo.
- **El problema que resuelve:** quien produce algo no ve sus propios errores y tiene incentivo para darlo por bueno; además, un solo par de manos puede cometer fraude sin que nadie lo note.
- **El concepto de IA:** **evaluator-optimizer** (evaluador y optimizador): «one LLM call generates a response while another provides evaluation and feedback in a loop». [Fuente primaria] [Anthropic, Building effective agents, 19 dic 2024](https://www.anthropic.com/engineering/building-effective-agents). En control de acceso, el principio humano se llama **separation of duties** (separación de funciones), control AC-5 de NIST SP 800-53. [Visto solo en buscador] [NIST SP 800-53 AC-5, espejo](https://www.upguard.com/compliance/nist-sp-800-53/ac/ac-5)
- **La técnica con agentes:** un generador produce la salida; un **subagente aparte** (otra ventana de contexto, otro prompt) la evalúa contra un criterio escrito y devuelve aprobada o rechazada con razón. «Ciego» significa que el auditor solo recibe la salida y el criterio, no el razonamiento ni las notas del generador. Herramientas del auditor: solo lectura. Regla de parada: aprobación o tope de vueltas. Claude Code permite que cada subagente tenga «its own context window with a custom system prompt, specific tool access, and independent permissions». [Fuente primaria] [Claude Code, subagents](https://code.claude.com/docs/en/sub-agents)
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Maker (registra la operación) | Generador |
| Checker (autoriza, no participó) | Auditor en subagente aparte, sin herramientas de escritura |
| Política o manual de autorización | Criterio escrito del auditor (contrato) |
| La operación registrada | La salida del generador |
| Rechazo devuelto al maker | Veredicto «rechazada» con razón, que vuelve al generador |
| El checker no puede editar la operación | El auditor no edita la salida, solo dictamina |

  Relación que se conserva: quien aprueba no produjo y no puede modificar lo que aprueba. Diferencia honesta: un LLM juez puede variar entre corridas, el checker humano sigue un manual (ver T01, fila 3, `t01-tesis/tesis.md`).
- **Ejemplo en Triario:** los loops con generador y auditor ciego en un subagente aparte que solo recibe la salida.
- **Cuándo usarlo y cuándo no:** úsalo cuando el error cuesta más que una segunda llamada al modelo. No lo uses si el criterio no se puede escribir: un auditor sin contrato aprueba por gusto.
- **Patrones relacionados:** A2 (contrato inmutable), A3 (reintento dirigido), E1 (puerta humana), A4 (segunda opinión).

### A2. Reglas del juego fijadas antes de empezar (data contract · «déita cóntract»)
- **La práctica humana:** en un torneo o una licitación, las reglas y los criterios de evaluación se publican antes y no cambian mientras se juega.
- **El problema que resuelve:** si el criterio se mueve a mitad, nadie puede ganar ni perder de forma justa y el proceso no converge.
- **El concepto de IA:** **contrato de datos** (data contract), «the agreement between a data producer and its consumers», con secciones de esquema, calidad y SLA (acuerdo de nivel de servicio), estándar ODCS v3.2.0 de Bitol en LF AI & Data. [Fuente primaria] [github.com/bitol-io/open-data-contract-standard](https://github.com/bitol-io/open-data-contract-standard). En agentes, el harness de larga duración de Anthropic deja que el agente cambie solo el campo `passes` de la lista de pruebas y prohíbe editarlas. [Fuente primaria] [Anthropic, Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) (leído por T01, `t01-tesis/tesis.md`, sección 2.5)
- **La técnica con agentes:** el criterio del auditor vive en un archivo versionado que el generador no puede escribir. Se carga al inicio del ciclo y no se toca hasta que el ciclo cierre; cambiarlo exige versión nueva y aplica en la corrida siguiente. Un hook o un permiso de solo lectura protege el archivo.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Organizador que publica las reglas | Persona que escribe el contrato del auditor |
| Reglamento publicado antes | Archivo de contrato versionado, cargado al inicio |
| Jugadores | Generador |
| Árbitro que aplica el reglamento | Auditor |
| Prohibición de cambiar reglas a mitad | El contrato solo cambia entre ciclos, con versión nueva |

  Relación que se conserva: las reglas son anteriores al juego y externas a los jugadores y al árbitro.
- **Ejemplo en Triario:** en una corrida el criterio del auditor se movió a mitad y no cerró en 3 vueltas; con el contrato fijo desde el inicio, aprobó en la primera.
- **Cuándo usarlo y cuándo no:** siempre que haya auditor. No sirve para exploración abierta, donde el criterio todavía se está descubriendo (ver B2).
- **Patrones relacionados:** A1, A3, E2 (comité de cambios), B2.

### A3. Devolver la pieza a la estación que falló (targeted retry · «tárgueted rítrai»)
- **La práctica humana:** en una línea de manufactura, cada estación tiene su inspección; la pieza defectuosa vuelve a la estación donde se originó el defecto con una nota de no conformidad, no al inicio de la línea. Hay un límite de reprocesos antes de desecharla.
- **El problema que resuelve:** rehacer todo desde cero gasta tiempo y puede romper lo que ya estaba bien.
- **El concepto de IA:** **prompt chaining with gates** (encadenamiento con compuertas): «You can add programmatic checks» en los pasos intermedios, más **stopping conditions** «such as a maximum number of iterations». [Fuente primaria] [Anthropic, Building effective agents](https://www.anthropic.com/engineering/building-effective-agents). La crítica verbal que guía el reintento es la idea de **Reflexion**: el agente reflexiona en lenguaje sobre la señal de error y usa esa reflexión en el intento siguiente. [Fuente primaria] [github.com/noahshinn/reflexion](https://github.com/noahshinn/reflexion), paper [arXiv 2303.11366](https://arxiv.org/abs/2303.11366) [Visto solo en buscador]
- **La técnica con agentes:** el flujo se divide en capas (por ejemplo: datos, análisis, redacción). El auditor dice qué capa falló y por qué. El orquestador relanza solo esa capa con la crítica como insumo y reutiliza las capas anteriores ya aprobadas. Contador de vueltas por unidad de trabajo, tope 3.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Estación de la línea | Capa o skill del loop |
| Inspector de calidad | Auditor (o compuerta programática por capa) |
| Nota de no conformidad | Razón del rechazo, con la capa señalada |
| Jefe de línea que enruta la pieza | Orquestador que relanza la capa |
| Límite de reprocesos | Máximo 3 vueltas |
| Pieza desechada | Salida archivada (ver A6) |

  Relación que se conserva: el defecto se corrige donde nació y lo anterior se reutiliza.
- **Ejemplo en Triario:** el reintento vuelve a la capa que falló, con máximo 3 vueltas.
- **Cuándo usarlo y cuándo no:** cuando las capas son separables y el auditor puede señalar cuál falló. No sirve si la falla es del planteamiento completo: ahí conviene archivar o rediseñar.
- **Patrones relacionados:** A1, A6, C3 (postmortem, en archivo.md).

### A4. Segunda opinión de un especialista (specialist review · «espéshalist riviú»)
- **La práctica humana:** un médico pide la opinión de un especialista; el especialista lee el caso, opina desde su disciplina y no cambia la historia clínica: el médico tratante decide.
- **El problema que resuelve:** quien lleva el caso tiene un solo punto de vista; el especialista ve lo que su disciplina enseña a ver.
- **El concepto de IA:** **subagentes especialistas de solo lectura**. Claude Code documenta un revisor «read-only» definido con `tools: Read, Grep, Glob`, sin herramientas de escritura. [Fuente primaria] [Claude Code, subagents](https://code.claude.com/docs/en/sub-agents). La revisión paralela con lentes distintos («One focused on security implications / One checking performance impact / One validating test coverage») aparece en la documentación de agent teams. [Fuente primaria] [Claude Code, agent teams](https://code.claude.com/docs/en/agent-teams)
- **La técnica con agentes:** se lanza un subagente con un rol de especialista, acceso de lectura al documento y permiso de escritura solo sobre su propio archivo de propuestas. Cada propuesta cita lo que leyó. El autor original decide qué incorpora.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Médico tratante | Agente o tarea dueña de la investigación |
| Especialista consultado | Subagente con rol de especialista |
| Historia clínica | Documento de la investigación (solo lectura) |
| Interconsulta escrita | Archivo de propuestas aparte |
| El tratante decide | La tarea dueña, o la persona, decide qué entra |

  Relación que se conserva: el especialista aporta sin tocar y la decisión queda en quien lleva el caso.
- **Ejemplo en Triario:** `t01-tesis/ideas-ingenieria-datos.md` en la rama `claude/cierre-le-t01-tesis`: un agente especialista en ingeniería de datos leyó `tesis.md` y dejó ocho propuestas en archivo aparte; la tesis dice que «Sus propuestas no se incorporaron a este documento».
- **Cuándo usarlo y cuándo no:** cuando el tema cruza una disciplina que el autor no domina. No lo uses como auditor: el especialista propone, no aprueba ni rechaza.
- **Patrones relacionados:** A1 (la diferencia: el checker dictamina), C1 (la pizarra donde queda la propuesta), A5.

### A5. Equipo rojo (red team · «red tim»)
- **La práctica humana:** un equipo se dedica a atacar el propio sistema o plan, como lo haría un adversario, para encontrar fallas antes de que las encuentre alguien de afuera.
- **El problema que resuelve:** quien construye prueba los casos que imagina; el adversario prueba los que no imaginó.
- **El concepto de IA:** **red teaming con modelos de lenguaje**: un modelo genera casos de prueba para provocar fallas en otro modelo objetivo y un clasificador detecta las salidas dañinas. Perez et al., EMNLP 2022. [Fuente primaria] [ACL Anthology 2022.emnlp-main.225](https://aclanthology.org/2022.emnlp-main.225) [Visto solo en buscador]
- **La técnica con agentes:** un agente atacante, con un objetivo escrito («haz que el loop recomiende sin datos suficientes», «haz que publique sin aprobación»), genera entradas contra el loop. Un juez fijo marca qué entradas rompieron una regla. Las que rompen pasan a un set de pruebas que el loop debe pasar en cada versión nueva.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Equipo rojo | Agente atacante (red LM) |
| Sistema defendido | Loop objetivo |
| Reglas de enfrentamiento | Lista escrita de fallas a provocar |
| Árbitro que registra los hallazgos | Clasificador o juez fijo |
| Informe de vulnerabilidades | Set de casos que rompieron el loop |
| Equipo azul que corrige | Persona o agente que ajusta el loop |

  Relación que se conserva: el atacante es distinto del constructor y su éxito se mide por fallas encontradas.
- **Ejemplo en Triario:** sin ejemplo aún.
- **Cuándo usarlo y cuándo no:** antes de dar más autonomía a un loop o cuando toca datos sensibles. No reemplaza al auditor de cada salida: el red team prueba el sistema, no cada pieza.
- **Patrones relacionados:** A1, A7 (lista de verificación), D1 (abogado del diablo), E2.

### A6. Archivo de casos no resueltos (dead-letter queue · «ded léter kiú»)
- **La práctica humana:** la policía o un juzgado archiva los casos que no se pudieron resolver, con su expediente, para reabrirlos si aparece evidencia nueva.
- **El problema que resuelve:** sin archivo, lo que no se resuelve bloquea la cola o se pierde sin rastro.
- **El concepto de IA:** **dead-letter queue** (DLQ, cola de mensajes fallidos). En Amazon SQS, si un consumidor recibe un mensaje `maxReceiveCount` veces sin procesarlo, SQS lo mueve a la DLQ; luego se puede hacer **redrive** (devolverlo a la cola original). [Fuente primaria] [AWS, SQS dead-letter queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html) [Visto solo en buscador]
- **La técnica con agentes:** al llegar al tope de vueltas, la salida pasa a un archivo con su expediente: última versión, veredicto del auditor por vuelta y capa que falló. Un contador de profundidad hace visible cuántas hay. Cuando cambia el contrato o la skill con versión nueva, se reprocesan (redrive). Propuesta de redrive y profundidad tomada de T7, `t01-tesis/ideas-ingenieria-datos.md`, Idea 7.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Caso no resuelto | Salida que no aprobó en 3 vueltas |
| Expediente | Registro con salida, veredictos y capa que falló |
| Regla para archivar | `maxReceiveCount` = tope de 3 vueltas |
| Archivo de casos | DLQ: carpeta o tabla de archivadas |
| Reapertura con evidencia nueva | Redrive con contrato o skill nueva |

  Relación que se conserva: lo archivado no bloquea al resto y puede volver con contexto.
- **Ejemplo en Triario:** lo que no pasa en 3 vueltas se archiva como «sin recomendación defendible».
- **Cuándo usarlo y cuándo no:** en todo loop con tope de vueltas. No es un basurero: si nadie lo revisa, sobra.
- **Patrones relacionados:** A3, A2, C3 (en archivo.md).

### A7. Lista de verificación antes de despegar (pre-flight checklist · «prí-flait chéklist»)
- **La práctica humana:** en cabina, antes de cada fase de vuelo, la tripulación recorre una lista fija; uno lee el ítem y el otro confirma. Sin lista completa, no se despega. Degani y Wiener la estudiaron como base de la estandarización y la seguridad en cabina. [Fuente primaria] [NASA CR-177549, 1990](https://ntrs.nasa.gov/citations/19910017830) [Visto solo en buscador]
- **El problema que resuelve:** la memoria y la atención fallan con la rutina; la lista no depende de que alguien se acuerde.
- **El concepto de IA:** **hooks** (ganchos) de Claude Code: comandos que corren automáticamente en puntos fijos del ciclo del agente. «Exit with code 2 to block the action»: un hook `PreToolUse` bloquea la llamada a la herramienta y un hook `Stop` «Prevents Claude from stopping». [Fuente primaria] [Claude Code, hooks](https://code.claude.com/docs/en/hooks)
- **La técnica con agentes:** la lista se escribe como script determinista (no como instrucción en el prompt) y se engancha a un evento: antes de una herramienta, antes de terminar, al completar una tarea. Si algún ítem falla, el script sale con código 2 y le explica al agente qué falta.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Piloto que ejecuta | Agente |
| Piloto que lee la lista y verifica | Script del hook |
| Lista impresa, igual para todos los vuelos | Script versionado en el repo |
| Momento fijo (antes de despegar) | Evento fijo (`PreToolUse`, `Stop`, `TaskCompleted`) |
| «No se despega» | Código de salida 2: acción bloqueada |

  Relación que se conserva: la verificación no depende de la memoria de quien ejecuta y bloquea el avance. Advertencia de la fuente: un hook `PreToolUse` que se vence por tiempo no bloquea por defecto.
- **Ejemplo en Triario:** los repos de los megaagentes tienen «algún hook» según el contexto del proyecto; no hay detalle de qué verifican, así que el ejemplo concreto queda sin ejemplo aún.
- **Cuándo usarlo y cuándo no:** para lo verificable por máquina (archivo existe, prueba pasa, formato válido). No para juicios de calidad: eso es del auditor (A1).
- **Patrones relacionados:** A1, A2, E1.

## Familia B · Exploración

### B1. Viaje de aprendizaje (learning expedition · «lérnin ekspedíshon»)
- **La práctica humana:** una empresa manda a alguien, con tiempo y presupuesto apartados, a conocer qué hacen otras; la persona lleva diario, vuelve con un informe y la empresa decide qué adopta.
- **El problema que resuelve:** una organización que solo perfecciona lo que ya sabe hacer se vuelve eficiente a corto plazo y obsoleta a largo plazo.
- **El concepto de IA:** **exploration vs. exploitation** (explorar o explotar). James G. March lo formuló para organizaciones: los procesos adaptativos refinan la explotación más rápido que la exploración, lo que funciona a corto plazo y es autodestructivo a largo plazo. [Fuente primaria] [March 1991, Organization Science 2(1):71-87](https://ideas.repec.org/a/inm/ororsc/v2y1991i1p71-87.html) [Visto solo en buscador]. En agentes, Anthropic describe el balance entre profundidad y amplitud: «recognizing when to focus on depth (investigating one topic in detail) vs. breadth (exploring many topics in parallel)» y «Start wide, then narrow down». [Fuente primaria] [Anthropic, multi-agent research system, 13 jun 2025](https://www.anthropic.com/engineering/multi-agent-research-system)
- **La técnica con agentes:** un loop explorador separado del loop productivo, con presupuesto propio (por ejemplo, una corrida a la semana). Corre en ciclo largo, deja bitácora en disco entre sesiones (ver B3) y entrega un informe con lo encontrado; la decisión de adoptar es humana (E1). El loop productivo no se toca mientras el explorador corre.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Empresa que opera como siempre | Loop productivo (explotación) |
| Persona enviada de viaje | Agente explorador |
| Tiempo y presupuesto apartados | Cuota de corridas o tokens reservada |
| Empresas visitadas | Fuentes externas (web, repos, papers) |
| Diario de viaje | Bitácora en disco |
| Informe de regreso | Informe del explorador |
| Gerencia que decide adoptar | Persona en la puerta (E1) |

  Relación que se conserva: el explorador gasta hoy sin retorno seguro y la decisión de adoptar es de otro. Diferencia honesta: en March el balance es de toda la organización; en un loop hay que fijarlo a mano con la cuota [Hipótesis].
- **Ejemplo en Triario:** el loop de ciclo largo (resultado a 30 días) con bitácora y línea base aporta la mecánica (ciclo largo, bitácora). Ese loop mide un resultado, no explora; un explorador propiamente dicho no aparece en el contexto, así que el ejemplo es parcial.
- **Cuándo usarlo y cuándo no:** cuando el entorno cambia más rápido que el ciclo de mejora del loop. No cuando el loop productivo todavía no es estable: primero explotar bien.
- **Patrones relacionados:** B3, B2, E1, C2.

### B2. Radar de tecnología (technology radar · «teknólochi réidar»)
- **La práctica humana:** Thoughtworks clasifica técnicas y herramientas en cuatro anillos (adopt, trial, assess, hold); cada persona recoge datos de su región, quien nomina un ítem lo explica y el grupo lo discute y vota. [Fuente primaria] [Thoughtworks, How we create the Technology Radar](https://www.thoughtworks.com/insights/blog/how-we-create-technology-radar) [Visto solo en buscador]
- **El problema que resuelve:** decidir con criterio común qué adoptar, qué probar, qué solo mirar y qué evitar.
- **El concepto de IA:** **LLM como juez con rúbrica** más **votación**. Anthropic usa un juez con criterios como «factual accuracy (do claims match sources?)» y una salida de 0.0 a 1.0 con pass-fail. [Fuente primaria] [Anthropic, multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system). La votación es una de las dos formas de paralelización: «Running the same task multiple times to get diverse outputs». [Fuente primaria] [Anthropic, Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- **La técnica con agentes:** subagentes buscadores, cada uno con una zona de fuentes asignada, nominan conceptos con evidencia. Varios jueces con la misma rúbrica fija ubican cada concepto en dos ejes (qué tan validado está afuera, qué tanto se aplica adentro) y se toma la mayoría. El radar se publica con la evidencia de cada ítem. [Hipótesis] en el diseño de los dos ejes.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Personas con regiones asignadas | Subagentes buscadores por zona de fuentes |
| Quien nomina y explica | Nominación con evidencia citada |
| Definición de los anillos | Rúbrica fija del juez |
| Discusión y voto del grupo | Varios jueces y voto por mayoría |
| Radar publicado | Tabla o gráfico con ubicación y evidencia |

  Relación que se conserva: la ubicación sale de un criterio común aplicado por varios, no de una sola opinión.
- **Ejemplo en Triario:** gobernanza de IA y harness son temas que el equipo menciona pero todavía no sabe aplicar: en un radar quedarían con aplicación interna baja. Su ubicación en el eje externo no se evaluó aquí.
- **Cuándo usarlo y cuándo no:** para priorizar qué aprender o adoptar en el siguiente periodo. No para decidir una sola herramienta urgente: es caro para eso.
- **Patrones relacionados:** B1, D2 (jurado), A2.

### B3. Bitácora o diario de viaje (external memory · «ekstérnal mémori»)
- **La práctica humana:** quien viaja o investiga escribe a diario qué hizo, qué encontró y qué sigue; al día siguiente relee antes de seguir. El cuaderno de laboratorio cumple el mismo papel.
- **El problema que resuelve:** la memoria de un día no llega intacta al siguiente.
- **El concepto de IA:** **memoria externa persistente**. Anthropic llama **structured note-taking** a «a technique where the agent regularly writes notes persisted to memory outside of the context window». [Fuente primaria] [Anthropic, Effective context engineering for AI agents, 29 sep 2025](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). El harness de larga duración usa `claude-progress.txt` y git como registro que la siguiente sesión lee. [Fuente primaria] [Anthropic, Effective harnesses](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) (leído por T01)
- **La técnica con agentes:** un archivo en git con formato fijo (fecha, qué se hizo, resultado, siguiente paso, línea base). Cada sesión lo lee antes de empezar y escribe al terminar. Se prefiere un formato estructurado que el agente no reescriba entero (Anthropic eligió JSON para la lista de funcionalidades por esa razón, según T01).
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Viajero o investigador | Agente en cada sesión |
| Cuaderno | Archivo en git |
| Entrada diaria | Commit o bloque al final de la sesión |
| Releer antes de seguir | Leer el archivo al inicio de la sesión |
| Primera medición de referencia | Línea base registrada en la bitácora |

  Relación que se conserva: la continuidad vive en el cuaderno, no en la cabeza de quien escribe.
- **Ejemplo en Triario:** el loop de ciclo largo (resultado a 30 días) con bitácora y línea base; los repos de los cuatro equipos tienen CLAUDE.md, que cada sesión carga.
- **Cuándo usarlo y cuándo no:** en todo loop que dure más de una sesión. Para tareas de una sola sesión sobra.
- **Patrones relacionados:** B1, C2 (traspaso de turno), C1 (pizarra), C3 (en archivo.md).

### B4. El analista que no opina sin datos suficientes (abstention · «abstén-shon»)
- **La práctica humana:** un analista responsable dice «con estos datos no puedo concluir» antes que dar una opinión débil; primero intenta ampliar el periodo de análisis.
- **El problema que resuelve:** una recomendación sin base hace más daño que ninguna, porque alguien la ejecuta.
- **El concepto de IA:** **abstención** (abstention): que el modelo se niegue a responder o lo haga parcialmente, como forma de reducir alucinaciones y mejorar la seguridad. Wen et al., «Know Your Limits: A Survey of Abstention in Large Language Models», TACL. [Fuente primaria] [arXiv 2407.18418](https://arxiv.org/abs/2407.18418) [Visto solo en buscador]
- **La técnica con agentes:** antes de recomendar, el loop cuenta el volumen en la ventana actual; si no alcanza el umbral, ensancha la ventana por pasos fijos; si en la última ventana tampoco alcanza, no recomienda y registra «sin publicar por umbral» para distinguirlo de «el loop no corrió» (propuesta de T7, `t01-tesis/ideas-ingenieria-datos.md`, Idea 3). T01 lo nombra «ventana de lookback + umbral de volumen (bloqueante)» (`t01-tesis/tesis.md`, fila 6).
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Analista | Agente que recomienda |
| Periodo de análisis | Ventana de datos |
| «Déjame ver más atrás» | Ensanchar: ayer, 3 días, 1 semana, 2 semanas |
| Criterio profesional de suficiencia | Umbral de volumen escrito |
| «No puedo concluir» | Abstención registrada |

  Relación que se conserva: la falta de evidencia produce silencio explícito, no una respuesta débil.
- **Ejemplo en Triario:** antes de recomendar, el loop ensancha la ventana (ayer, 3 días, una semana, dos semanas); si no hay volumen suficiente, se calla.
- **Cuándo usarlo y cuándo no:** cuando una recomendación dispara acción. No para exploración, donde una hipótesis débil marcada como tal sí sirve.
- **Patrones relacionados:** A6, A2, B3.

## Familia C · Memoria y coordinación

### C1. Relevo con pizarra común (blackboard architecture y stigmergy · «blákbord árquitekchur», «estíg-merchi»)
- **La práctica humana:** equipos que trabajan en turnos o en tareas distintas dejan su avance en una pizarra común; quien llega lee la pizarra antes de empezar y construye sobre lo que hay.
- **El problema que resuelve:** coordinar a muchos sin reuniones y sin que nadie tenga que dar órdenes una por una.
- **El concepto de IA:** **arquitectura de pizarra** (blackboard): en Hearsay-II, fuentes de conocimiento independientes se comunican a través de una pizarra compartida y se activan por cambios en ella. Erman, Hayes-Roth, Lesser y Reddy, ACM Computing Surveys 12(2), 1980. [Visto solo en buscador] [ficha y resumen](https://en.wikipedia.org/wiki/Blackboard_system). Versión con LLM: cada agente toma el contenido de la pizarra como prompt y escribe de vuelta su salida. [Fuente primaria] [Han y Zhang, arXiv 2507.01701](https://arxiv.org/abs/2507.01701) [Visto solo en buscador]. **Estigmergia** (stigmergy), término de Grassé (1959): la huella que deja una acción en el entorno estimula la acción siguiente. [Visto solo en buscador] [resumen](https://en.wikipedia.org/wiki/Stigmergy)
- **La técnica con agentes:** tareas programadas a horas distintas; cada una lee las ramas del repo antes de empezar, cita lo que usa, escribe solo en su carpeta y su rama. El control es el calendario (quién corre cuándo), no un orquestador.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Pizarra común | Ramas y carpetas del repo |
| Cada equipo o turno | Cada tarea programada |
| Leer la pizarra al llegar | `git fetch` y lectura de las ramas antes de investigar |
| Escribir solo en tu espacio | Cada tarea escribe en su carpeta y su rama |
| Quién toma el turno | Calendario de tareas (control) |

  Relación que se conserva: los participantes no se hablan; se coordinan por lo que dejan escrito. Diferencia: en Hearsay-II un control elige qué fuente actúa según el estado de la pizarra; aquí el orden lo fija el calendario.
- **Ejemplo en Triario:** este mismo relevo del cierre: T01 dejó `t01-tesis/tesis.md` y esta tarea lo leyó antes de investigar.
- **Cuándo usarlo y cuándo no:** cuando las tareas se pueden separar en el tiempo y dejan artefactos legibles. No cuando dos tareas necesitan escribir el mismo archivo.
- **Patrones relacionados:** B3, C4 (kanban), A4.

### C2. Traspaso de turno (handoff · «jándof»)
- **La práctica humana:** al cambiar de turno, quien sale deja una nota estructurada (qué pasó, qué está pendiente, qué vigilar) y quien entra la lee y verifica el estado antes de actuar.
- **El problema que resuelve:** en el cambio de turno se pierde información y quien entra actúa sobre supuestos viejos.
- **El concepto de IA:** **compaction** (compactación): «taking a conversation nearing the context window limit, summarizing its contents» y reiniciar con ese resumen. [Fuente primaria] [Anthropic, Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). En el harness de larga duración, cada sesión deja actualizaciones estructuradas para la siguiente y arranca leyendo progreso y git log y corriendo una prueba de punta a punta antes de trabajar. [Fuente primaria] [Anthropic, Effective harnesses](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) (leído por T01)
- **La técnica con agentes:** al cerrar, el agente escribe una nota con formato fijo (hecho, pendiente, riesgos). Al abrir, el siguiente agente lee la nota y corre una verificación del estado real antes de tocar nada.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Turno saliente | Sesión que termina |
| Nota de entrega con formato | Resumen estructurado (compaction o nota de progreso) |
| Turno entrante | Sesión nueva, contexto limpio |
| Verificar al paciente o la máquina | Prueba de punta a punta al inicio |

  Relación que se conserva: quien entra no confía solo en la nota, la contrasta con el estado real. Diferencia con B3: la bitácora es el archivo; el traspaso es el ritual de cerrar y abrir.
- **Ejemplo en Triario:** sin ejemplo aún (el loop de 30 días tiene bitácora, pero el contexto no dice que verifique el estado al abrir).
- **Cuándo usarlo y cuándo no:** en loops que cruzan sesiones o pasan de un agente a otro. Sobra en tareas cortas de una sesión.
- **Patrones relacionados:** B3, C1.

### C4. Tablero kanban (shared task list · «sherd task list»)
- **La práctica humana:** el equipo tiene un tablero con tarjetas en columnas (pendiente, en curso, hecho); cada persona toma la siguiente tarjeta libre y nadie toma una bloqueada.
- **El problema que resuelve:** repartir trabajo sin un jefe que asigne cada pieza y sin que dos personas hagan lo mismo.
- **El concepto de IA:** **lista de tareas compartida de agent teams** en Claude Code: las tareas tienen tres estados (pending, in progress, completed), pueden depender de otras y quedan bloqueadas hasta que se completen; un compañero que termina «picks up the next unassigned, unblocked task on its own», y el reclamo usa bloqueo de archivos para evitar que dos tomen la misma. [Fuente primaria] [Claude Code, agent teams](https://code.claude.com/docs/en/agent-teams)
- **La técnica con agentes:** un líder crea las tareas con dependencias; los compañeros (cada uno en su contexto) reclaman la siguiente libre; un hook `TaskCompleted` puede impedir marcar una tarea como hecha si no pasa una verificación.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Tablero | Lista de tareas compartida |
| Tarjeta | Tarea |
| Columnas | Estados pending, in progress, completed |
| Tarjeta bloqueada | Tarea con dependencia sin cerrar |
| Persona que toma la siguiente | Compañero que reclama la siguiente libre |
| Definición de «hecho» | Hook `TaskCompleted` |

  Relación que se conserva: el trabajo se toma del tablero, no se recibe de un jefe, y el estado es visible para todos.
- **Ejemplo en Triario:** sin ejemplo aún.
- **Cuándo usarlo y cuándo no:** con muchas tareas independientes de tamaño parecido. La documentación advierte que para tareas secuenciales o que editan el mismo archivo conviene una sola sesión o subagentes.
- **Patrones relacionados:** C5 (supervisor), C1, A7.

### C5. Supervisor que recorre la oficina (orchestrator-workers · «órquestreitor wórkers»)
- **La práctica humana:** un supervisor reparte el trabajo, pasa por los puestos, revisa lo que cada uno entrega y arma el resultado final.
- **El problema que resuelve:** una tarea grande que nadie puede hacer solo y cuyas partes no se conocen del todo al inicio.
- **El concepto de IA:** **orchestrator-workers**: «a central LLM dynamically breaks down tasks, delegates them to worker LLMs, and synthesizes their results». [Fuente primaria] [Anthropic, Building effective agents](https://www.anthropic.com/engineering/building-effective-agents). En el sistema de investigación de Anthropic, «a lead agent coordinates the process while delegating to specialized subagents that operate in parallel», y el líder guarda su plan en memoria. [Fuente primaria] [Anthropic, multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- **La técnica con agentes:** un agente líder descompone la tarea sobre la marcha, lanza subagentes con su propia ventana de contexto y herramientas limitadas, recibe resúmenes y sintetiza. Guarda su plan en disco. Se visualiza como en Pixel Agents: cada agente es un personaje en su escritorio y los subagentes aparecen como personajes propios. [Fuente primaria] [github.com/pablodelucca/pixel-agents](https://github.com/pablodelucca/pixel-agents) (leído por T01)
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Supervisor | Agente líder (orquestador) |
| Trabajadores en cubículos | Subagentes, cada uno con su ventana de contexto |
| Reparto de tareas | Delegación decidida sobre la marcha |
| Recorrido para revisar | Recepción de resultados y síntesis |
| Agenda del supervisor | Plan guardado en memoria |

  Relación que se conserva: uno decide y reparte, muchos ejecutan aislados, uno integra. Ajuste de T01 (`t01-tesis/tesis.md`, fila 1): si el megaagente llama las skills en orden fijo, el nombre correcto es prompt chaining, no orchestrator-workers.
- **Ejemplo en Triario:** la oficina virtual del compañero de Triario (orquestador que recorre cubículos); los megaagentes de Implementaciones, las dos células de marketing y Web, con la salvedad de T01 sobre el orden fijo.
- **Cuándo usarlo y cuándo no:** cuando las subtareas no se pueden prever. Si el orden es fijo, una cadena es más barata y predecible.
- **Patrones relacionados:** C4, A1, C1.

## Familia D · Deliberación

### D1. Abogado del diablo (multi-agent debate · «málti éichent dibéit»)
- **La práctica humana:** en una decisión importante, alguien recibe el encargo de argumentar en contra; las posturas se confrontan en varias rondas antes de decidir.
- **El problema que resuelve:** el anclaje: el grupo se queda con la primera explicación plausible.
- **El concepto de IA:** **debate multiagente**: varias instancias del modelo proponen respuestas y debaten en varias rondas hasta converger; mejora razonamiento y factualidad frente a un solo agente. Du, Li, Torralba, Tenenbaum y Mordatch, ICML 2023. [Fuente primaria] [arXiv 2305.14325](https://arxiv.org/abs/2305.14325) [Visto solo en buscador]. La documentación de agent teams propone un compañero «playing devil's advocate» y equipos que intentan refutar las hipótesis de los otros «like a scientific debate». [Fuente primaria] [Claude Code, agent teams](https://code.claude.com/docs/en/agent-teams)
- **La técnica con agentes:** dos o más agentes con posturas asignadas (a favor, en contra) o con hipótesis distintas; rondas fijas (por ejemplo 2); en cada ronda leen los argumentos de los otros; un moderador o juez con criterio fijo cierra y deja registrada la postura que sobrevivió.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Proponente | Agente a favor |
| Abogado del diablo | Agente en contra o con hipótesis rival |
| Rondas de discusión | Rondas fijas de debate |
| Moderador que cierra | Juez o líder con criterio fijo |
| Acta de la decisión | Registro de la postura ganadora y sus razones |

  Relación que se conserva: la conclusión tiene que sobrevivir a un oponente con encargo de atacarla.
- **Ejemplo en Triario:** sin ejemplo aún.
- **Cuándo usarlo y cuándo no:** en diagnósticos con varias causas posibles o decisiones con alto costo de error. Es caro: no lo uses para salidas rutinarias.
- **Patrones relacionados:** A5, D2, A1.

### D2. Jurado de evaluadores independientes (self-consistency y voting · «self-consístensi», «vóutin»)
- **La práctica humana:** varias personas califican lo mismo por separado, sin hablar entre ellas, y se toma la decisión de la mayoría.
- **El problema que resuelve:** el juicio de una sola persona tiene ruido; varios juicios independientes lo reducen.
- **El concepto de IA:** **self-consistency**: muestrear varias cadenas de razonamiento y quedarse con la respuesta más frecuente por voto de mayoría. Wang et al., 2022 (ICLR 2023). [Fuente primaria] [arXiv 2203.11171](https://arxiv.org/abs/2203.11171) [Visto solo en buscador]. En Anthropic, la variante de paralelización «voting»: «Running the same task multiple times to get diverse outputs». [Fuente primaria] [Anthropic, Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- **La técnica con agentes:** N jueces (por ejemplo 3), cada uno en su propio subagente, con la misma rúbrica y la misma salida, sin ver los veredictos de los otros. Se aprueba por mayoría; un empate o una división se registra como señal de criterio ambiguo.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Jurados | Jueces en subagentes separados |
| Aislamiento entre jurados | Contextos separados, sin ver otros veredictos |
| Instrucciones al jurado | Rúbrica fija |
| Veredicto por mayoría | Voto de mayoría |

  Relación que se conserva: los votos son independientes y la decisión es agregada. Límite: si todos los jueces comparten el mismo sesgo, el voto no lo corrige [Hipótesis].
- **Ejemplo en Triario:** sin ejemplo aún (el auditor ciego actual es uno solo).
- **Cuándo usarlo y cuándo no:** cuando el auditor único da veredictos inestables. Multiplica el costo por N.
- **Patrones relacionados:** A1, B2, D1.

## Familia E · Gobierno

### E1. Separación de funciones: publica una persona (human-in-the-loop · «jiúman in de lup»)
- **La práctica humana:** el que redacta no publica; una persona con autoridad revisa y aprieta el botón.
- **El problema que resuelve:** las acciones irreversibles (publicar, enviar, pagar) necesitan un responsable humano.
- **El concepto de IA:** **human-in-the-loop** con **puerta de aprobación**: «Agents can then pause for human feedback at checkpoints or when encountering blockers». [Fuente primaria] [Anthropic, Building effective agents](https://www.anthropic.com/engineering/building-effective-agents). En LangGraph, `interrupt()` guarda el estado y espera indefinidamente hasta que una persona reanuda con aprobar o rechazar. [Fuente primaria] [LangGraph, human-in-the-loop](https://docs.langchain.com/oss/python/langgraph/human-in-the-loop) [Visto solo en buscador]
- **La técnica con agentes:** el loop no tiene la herramienta de publicar. Su último estado es «listo para publicar», con la salida y el veredicto del auditor. La persona revisa y publica fuera del loop.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Redactor | Generador |
| Revisor interno | Auditor |
| Editor que publica | Persona en la puerta |
| Botón de publicar | Herramienta fuera del alcance del loop |
| Bandeja de pendientes por aprobar | Estado «listo para publicar» |

  Relación que se conserva: la acción irreversible la ejecuta alguien que no produjo la pieza y que responde por ella.
- **Ejemplo en Triario:** el loop de contenido para en «listo para publicar»: publica una persona.
- **Cuándo usarlo y cuándo no:** siempre que la acción no se pueda deshacer. Para pasos internos reversibles, la puerta humana solo agrega espera.
- **Patrones relacionados:** A1, A7, E2.

### E2. Comité de cambios (plan approval · «plan apruval»)
- **La práctica humana:** antes de cambiar algo en producción, el responsable presenta un plan; un comité lo aprueba o lo devuelve con observaciones; solo con aprobación se ejecuta.
- **El problema que resuelve:** cambios con riesgo que se hacen sin que otro los mire antes.
- **El concepto de IA:** **plan approval** en agent teams de Claude Code: un compañero en plan mode, al terminar de planear, «sends a plan approval request to the lead»; el líder «approves it or sends it back for revision», y solo con aprobación sale de plan mode e implementa. Ojo: la misma página dice que por defecto Claude Code aprueba el plan solo, salvo que se haya cambiado el modo de permisos del compañero. [Fuente primaria] [Claude Code, agent teams](https://code.claude.com/docs/en/agent-teams)
- **La técnica con agentes:** el agente que va a cambiar un contrato, una skill o un CLAUDE.md trabaja primero en modo plan (sin escribir), entrega el plan, y un revisor (líder o persona) lo aprueba o lo devuelve. Para que la puerta sea real hay que desactivar la aprobación automática.
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Solicitante del cambio | Compañero en plan mode |
| Solicitud de cambio | Plan approval request |
| Comité | Líder del equipo o persona |
| Aprobado / devuelto | Aprobar / enviar a revisión |
| Ejecución tras aprobación | Salida de plan mode e implementación |

  Relación que se conserva: nadie ejecuta un cambio sin que otro apruebe el plan primero.
- **Ejemplo en Triario:** sin ejemplo aún. Encaja con la regla de A2 (el contrato cambia solo entre ciclos) y con gobernanza de IA, tema que el equipo menciona pero no sabe aplicar.
- **Cuándo usarlo y cuándo no:** para cambios a contratos, skills, hooks o permisos. No para cada salida: eso es A1.
- **Patrones relacionados:** A2, C3 (en archivo.md), E1, E3.

### E3. Auditoría con rastro (audit trail · «ódit treil»)
- **La práctica humana:** cada operación deja un registro con quién, qué, cuándo y con qué autorización; un auditor revisa después los registros, no la operación en vivo.
- **El problema que resuelve:** sin rastro, nadie puede reconstruir por qué se tomó una decisión ni detectar abusos.
- **El concepto de IA:** **trazas de agentes con las convenciones semánticas de OpenTelemetry para IA generativa**: operaciones como `invoke_agent` y `execute_tool`, atributos como `gen_ai.agent.name` y `gen_ai.tool.name`; por defecto se registran solo metadatos (modelo, tokens, duración). Estado: en desarrollo. [Fuente primaria] [OpenTelemetry, GenAI agent spans](https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/) [Visto solo en buscador]
- **La técnica con agentes:** cada llamada a agente y a herramienta emite un span con identificador de corrida, agente, herramienta, modelo y resultado; las trazas se guardan fuera del agente, que no puede editarlas. Un revisor (persona o agente de solo lectura) las muestrea con una frecuencia fija. Campos mínimos propuestos por T7: insumos, versión de contrato, versión de skill, modelo, `run_id`, vuelta y veredicto (`t01-tesis/ideas-ingenieria-datos.md`, Idea 5).
- **Mapeo rol a rol:**

| En la práctica humana | En el sistema de agentes |
|---|---|
| Operador | Agente |
| Registro de cada operación | Span de `invoke_agent` / `execute_tool` |
| Libro que el operador no puede alterar | Almacén de trazas fuera del alcance del agente |
| Auditor que revisa después | Revisor que muestrea trazas |
| Hallazgo de auditoría | Incidente que alimenta la revisión del sistema |

  Relación que se conserva: el registro lo produce el sistema, no el relato del operador, y se revisa después.
- **Ejemplo en Triario:** sin ejemplo aún.
- **Cuándo usarlo y cuándo no:** cuando los loops corren sin supervisión o tocan datos de clientes. Ojo con registrar contenido sensible: la convención lo deja apagado por defecto.
- **Patrones relacionados:** B3, E2, C3 (en archivo.md).

---

## 5. Mapa de relaciones entre patrones

La tubería básica de la tesis de T01, de izquierda a derecha, con lo que la rodea:

```
                 B2 Radar ─┐            ┌─ E2 Comité de cambios (cambia A2 entre ciclos)
 B1 Viaje de aprendizaje ──┤            │
        (explora aparte)   ▼            ▼
 C5 Supervisor ──► generador ──► A1 Maker-checker ──(aprueba)──► E1 Publica una persona
   │  reparte        ▲  │            │  usa A2 Contrato fijo
   │  (o C4 Kanban)  │  │            │  (o D2 Jurado, D1 Debate)
   │                 │  │       (rechaza)
   │                 │  └─ A7 Checklist (hooks) bloquea antes de avanzar
   │                 └──── A3 Reintento a la capa que falló (máx. 3)
   │                                 │ (tope)
   │                                 ▼
   │                         A6 Archivo de no resueltos ──(redrive)──► vuelve tras E2
   │
 B4 Abstención: antes de generar, ensancha la ventana o se calla
 Memoria que cruza todo: B3 Bitácora · C2 Traspaso de turno · C1 Pizarra común · E3 Rastro de auditoría
 Prueba del sistema completo: A5 Equipo rojo · A4 Segunda opinión (propone, no dictamina)
```

| Relación | Patrones | Qué significa |
|---|---|---|
| Depende de | A1 → A2 | Sin contrato fijo, el auditor no converge. |
| Sigue a | A1 → A3 → A6 | Rechazo, reintento dirigido, archivo al tope. |
| Cierra con | A1 → E1 | Lo aprobado espera a la persona. |
| Cambia a | E2 → A2 | El contrato solo cambia con plan aprobado, entre ciclos. |
| Alimenta | A6 → E2 | Lo archivado indica qué cambiar; tras el cambio, redrive. |
| Alternativa a | D2, D1 ↔ A1 | Varios jueces o debate cuando un solo auditor es inestable. |
| Alternativa a | C4 ↔ C5 | Tablero que se autoasigna frente a supervisor que reparte. |
| Se distingue de | A4 ≠ A1 | El especialista propone; el checker dictamina. |
| Se distingue de | B3 ≠ C2 | La bitácora es el archivo; el traspaso es el ritual de cerrar y abrir. |
| Se apoya en | B1 → B3 | El explorador necesita bitácora porque su ciclo es largo. |
| Prueba a | A5 → todo el loop | El equipo rojo ataca el sistema, no cada salida. |

---

## 6. Ideas para el cierre (deck y documento) [Hipótesis]

- **Diapositiva de una tabla:** «Lo que ya hace tu equipo / lo que hace el loop», con A1, A2, A3, A6 y E1 como filas: son las cinco piezas de la definición de T01.
- **Para la oficina virtual:** cada patrón tiene un gesto visible. El supervisor que recorre (C5), el auditor que sella aprobado o rechazado (A1), la pieza que vuelve a su cubículo (A3), el archivador de no resueltos con su contador (A6), la puerta con una persona (E1), la pizarra del pasillo (C1). Pixel Agents ya muestra personajes y subagentes; le faltan el contrato, las vueltas y el veredicto (T01, sección 4).
- **Frase para el orador:** «Nada de esto es nuevo para un equipo humano. Lo nuevo es escribirlo como reglas que un agente no se puede saltar.»
- **Dónde no calza, dicho en voz alta:** el auditor LLM no es determinista como un checker con manual (A1); la ventana que se ensancha no es backfill (B4, T01 fila 6); el plan approval de Claude Code viene con aprobación automática por defecto (E2).

---

## 7. Dominios que no abrieron

| Dominio | Error | Cómo lo traté |
|---|---|---|
| `sre.google` | `getaddrinfo ENOTFOUND` | El libro de SRE (postmortem) queda [Visto solo en buscador]. Esa ficha además se archivó. |
| `arxiv.org` | `ENOTFOUND` (reportado en la pizarra: `t00-prueba/prueba.md` y `t01-tesis/tesis.md`) | No lo intenté. Papers (Reflexion, debate, self-consistency, abstención, blackboard LLM) van con enlace a arXiv y sello [Visto solo en buscador]; Reflexion además se verificó en su repo de GitHub. |
| `addyosmani.com`, `*.substack.com`, `www.ibm.com`, `thenewstack.io` | `ENOTFOUND` (reportado por T01) | No los necesité ni los intenté. |

**Abrieron bien:** `www.anthropic.com` (Building effective agents, multi-agent research system, effective context engineering), `code.claude.com` (agent teams, hooks, subagents) y `github.com` (Reflexion, ODCS).

**No intenté, para ahorrar aperturas** (todo lo que viene de ahí va como [Visto solo en buscador]): `docs.aws.amazon.com`, `docs.langchain.com`, `opentelemetry.io`, `ntrs.nasa.gov`, `www.thoughtworks.com`, `aclanthology.org`, `ideas.repec.org`, `groups.psych.northwestern.edu`. Para leerlos directo hay que permitirlos en la configuración de red del entorno.
