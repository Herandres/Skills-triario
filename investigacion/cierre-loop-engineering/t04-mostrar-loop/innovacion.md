# T4 · Mostrar el loop: formas nuevas de hacer visible un sistema de agentes

Rama: `claude/cierre-le-t04-mostrar-loop`. Fecha de la corrida: 2026-11-19.

Pregunta: ¿qué formas nuevas está usando la gente para hacer visible un sistema de agentes que corre por detrás?

Respuesta corta: hay tres familias. (1) La oficina o ciudad en pixel art, donde cada agente es un personaje. (2) Los visores de trazas, con grafo, líneas por agente (swim lanes) y replay de una corrida real. (3) El relato guiado por el scroll (scrollytelling) y los lienzos de flujo, que vienen del periodismo de datos y de la ingeniería de datos. Casi todo lo que encontré muestra **qué hace cada agente**. Casi nada muestra **las reglas** (contrato fijo, auditor ciego, tope de vueltas, archivo, persona en la puerta). Ahí está el hueco que el cierre puede llenar [Hipótesis].

---

## 1. Lo que leí de la pizarra

Ramas leídas con `git show`. No modifiqué nada de otras tareas. La rama de T4 salió de `origin/master`.

| Archivo (rama) | Qué tomé |
|---|---|
| `investigacion/cierre-loop-engineering/t01-tesis/tesis.md` (`claude/cierre-le-t01-tesis`) | La definición de una línea del loop como tubería (etapas en orden, contrato que no cambia, revisor que no hizo el trabajo, reintentos con tope, archivo para lo que no pasa, persona en la puerta). La sección 4 «Cómo lo muestra hoy la industria»: Pixel Agents (hooks `PreToolUse`, `PermissionRequest`, `Stop`, o transcripts JSONL), diagramas de Anthropic, vistas de grafo de LangGraph Studio, Langfuse y Orq.ai, y su conclusión de que a Pixel Agents le faltan «el contrato, las vueltas y el veredicto del auditor». Su lista de dominios que no abrieron. |
| `investigacion/cierre-loop-engineering/t15-patrones/patrones.md` (`claude/cierre-le-t15-patrones`) | Las fichas A1 (maker-checker), A2 (data contract), A3 (targeted retry), A6 (dead-letter queue), E1 (persona que publica) y C5 (supervisor que recorre la oficina). Su sección 6, que ya propone un «gesto visible» por patrón: el supervisor que recorre, el auditor que sella, la pieza que vuelve a su cubículo, el archivador con contador, la puerta con una persona, la pizarra del pasillo. Construyo sobre esa idea y no la repito: aquí le doy forma técnica y orden de escenas. |
| `investigacion/cierre-loop-engineering/t14-aterrizador/radar.md` (`claude/cierre-le-t14-aterrizador`) | La tabla del radar: evals, harness y gobernanza como brechas; human-in-the-loop como fortaleza; trazas, costo y barandas «por confirmar». Su sugerencia de oficina: «evals es el supervisor que revisa al auditor; trazas es el registro que deja cada cubículo; harness es el cubículo mismo». Úsala en la idea 8. |
| `investigacion/cierre-loop-engineering/t02-cierre/estandares.md` (`claude/cierre-le-t02-cierre`) | Los tres índices propuestos para el cierre (formal, ejecutivo, narrativo). Lo usé para decidir en qué formato cabe cada idea (documento HTML/PDF o deck). |
| `investigacion/cierre-loop-engineering/t13-explorador/diario.md` (`claude/cierre-le-t13-explorador`) | La idea de «calibración del auditor» y el caso de salida mal formada que va a revisión humana. Los marco como escenas posibles. |
| Ramas sin aporte para T4 | `claude/cierre-le-prueba` (`t00-prueba/prueba.md`, solo confirma `arxiv.org` caído, según lo citan T01 y T15; no lo abrí). |

No existía todavía: ningún archivo de otra tarea sobre visualización. Esperaba, por la numeración, material de una tarea de documento final; no lo hay. Sigo sin él.

Los dominios que ya sabía caídos (`arxiv.org`, `sre.google`, `opentelemetry.io`, `docs.aws.amazon.com`, etc.) no los intenté.

---

## 2. Ocho ideas

Sellos: [Fuente primaria] = repositorio original o documentación oficial que pude abrir. [Fuente secundaria] = blog o reseña. [Visto solo en buscador] = no se pudo abrir. [Hipótesis] = deducción mía.

Datos del loop de Triario: solo los del contexto de la tarea. No invento corridas, cifras ni personas. Toda demostración con «datos» debe decir si usa una corrida real o una ilustrativa.

### Idea 1 · La oficina con las reglas a la vista

- **Qué es:** una oficina en pixel art donde cada agente es un personaje y se ve qué hace en tiempo real. Pixel Agents lo hace con Claude Code: los personajes «walk to their desks, sit down, type when they're editing files, read when they're searching», con globos de voz para permiso o turno terminado, subagentes como personajes propios, editor de plano con áreas con nombre y licencia MIT. Lee eventos por hooks (`SessionStart`, `PreToolUse`, `PermissionRequest`, `Stop`) o, sin hooks, los transcripts JSONL de `~/.claude/projects/`. [Fuente primaria] ([github.com/pablodelucca/pixel-agents](https://github.com/pablodelucca/pixel-agents)). El propio README admite que «most of this is still ahead» para las ideas de juego y orquestación. Hay derivados que van en la misma línea: Bit Office, pixtuoid, claude-office, munder-difflin, Tycono, AgentOffice. [Visto solo en buscador] (búsqueda «pixel art office visualization AI agents», 2026-11-19; no abrí esos repos, así que sus licencias y actividad quedan sin confirmar).
- **Referencia con sello:** la de arriba, más **PixelFloor**: un solo archivo HTML sin dependencias ni build, sobre Canvas, con agentes en escritorios, estados `idle/working/celebrating/error`, partículas luminosas que viajan entre agentes según una lista de `flows`, eventos por WebSocket o por `POST /api/event`, y modo demo si no hay conexión. MIT. [Fuente primaria] ([github.com/fumeilab/pixelfloor](https://github.com/fumeilab/pixelfloor)). Nota: el README es inconsistente sobre el puerto del servidor.
- **Esfuerzo:** medio. Una versión HTML propia con reglas fijas y datos ilustrativos cabe en una tarde [Hipótesis]. Conectarla a corridas reales y pulir sprites, más tiempo.
- **Encaje con el cierre:** alto. Es lo que el compañero de Triario ya mostró, y T01 y T15 piden mostrar lo que Pixel Agents no muestra.
- **Cómo se vería con nuestro loop:** lo que Pixel Agents no dibuja se dibuja como mobiliario: el contrato como cartel en la pared, el auditor tras un vidrio, un contador de vueltas, un archivador, una bandeja. El guion completo está en la sección 3.

### Idea 2 · Replay de una corrida real

- **Qué es:** en vez de una animación inventada, se reproduce el registro de una corrida que ya ocurrió, con control de velocidad. Dos antecedentes. Generative Agents (Stanford) tiene un modo demo/replay local: una URL con nombre de simulación, paso de inicio y velocidad (1 a 5); el README aclara que el replay es sobre todo para depurar. [Visto solo en buscador] ([paper](https://arxiv.org/abs/2304.03442) y repos espejo, vía búsqueda; `arxiv.org` no abre desde la nube). ChatDev 1.x anunció el 30 de julio de 2023 «online Log mode and replay mode». [Fuente primaria] ([github.com/OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev)).
- **Referencia con sello:** Rewind, depurador de agentes con línea de tiempo por carril por agente, y con «fork and replay»: se bifurca la corrida en un paso, los pasos anteriores salen de caché sin gastar tokens y solo se vuelve a ejecutar lo cambiado. MIT. [Fuente primaria] ([github.com/risjai/rewind](https://github.com/risjai/rewind)). Otros visores de transcripts de Claude Code que listó el buscador: Coding Agent Visualizer, agentplay, agent-strace, Zoetrope, claude-code-transcripts de Simon Willison. [Visto solo en buscador] (búsqueda «AI agent trace viewer replay», 2026-11-19; `simonwillison.net` y `everettjf.github.io` no resuelven desde la nube).
- **Esfuerzo:** medio. Exportar el registro de la corrida a un JSON de eventos y escribir un reproductor de 100 a 200 líneas [Hipótesis]. Lo difícil no es el reproductor, es tener el registro: si el loop no guarda un evento por paso, hay que empezar por ahí. Esto conecta con la brecha de trazas de T14.
- **Encaje con el cierre:** alto. «Esto no es una maqueta, es la corrida del día X» es la mejor evidencia de trabajo.
- **Cómo se vería con nuestro loop:** el reproductor avanza por capas (generador, auditor, reintento, archivo o bandeja) y muestra en cada paso el veredicto y el número de vuelta. Regla: si la corrida es real, sale su fecha; si es ilustrativa, el marco lo dice.

### Idea 3 · Dos corridas lado a lado: criterio móvil vs. contrato fijo

- **Qué es:** el hecho interno más didáctico del proyecto, puesto en pantalla: en una corrida el criterio del auditor se movió a mitad y no cerró en 3 vueltas; con el contrato fijo desde el inicio, aprobó en la primera. Dos reproductores sincronizados, el mismo trabajo, dos desenlaces.
- **Referencia con sello:** la comparación de dos ejecuciones es una función conocida de los visores de trazas: Rewind ofrece diff visual entre corridas [Fuente primaria] ([github.com/risjai/rewind](https://github.com/risjai/rewind)); agent-trace-replay ofrece `diff` [Visto solo en buscador] (búsqueda de trazas). Que el contrato se acuerde antes de empezar tiene paralelo en el «sprint contract» de Anthropic, que T13 abrió [Fuente primaria] ([anthropic.com](https://www.anthropic.com/engineering/harness-design-long-running-apps), citado desde `t13-explorador/diario.md`).
- **Esfuerzo:** bajo si ya hay dos registros; medio si hay que reconstruirlos. Si no hay registro, **no se debe reconstruir de memoria como si fuera real**: se marca «reconstrucción».
- **Encaje con el cierre:** muy alto. Es la prueba de A2 (contrato fijo) con un caso propio.
- **Cómo se vería con nuestro loop:** a la izquierda, un cartel en la pared que cambia de texto en la vuelta 2 y el auditor que rechaza tres veces. A la derecha, el cartel quieto y el sello de aprobado en la primera. Sin cifras más allá de «3 vueltas» y «1 vuelta», que son las que tenemos.

### Idea 4 · El loop como diagrama de tubería (DAG con vueltas)

- **Qué es:** el lenguaje visual de la ingeniería de datos: nodos, flechas, estados por nodo. Langfuse dibuja un trace como grafo con dos modos: repetidos colapsados en un nodo con contador, o desplegados; los bucles se dibujan como ciclos o se despliegan en un grafo acíclico. [Visto solo en buscador] ([langfuse.com/docs/observability/features/agent-graphs](https://langfuse.com/docs/observability/features/agent-graphs); el buscador mostró una contradicción entre «beta» y «generally available»). Dagster ofrece un grafo global de linaje de activos [Visto solo en buscador] ([docs.dagster.io](https://docs.dagster.io/concepts/webserver/ui); no la abrí). T01 ya citó LangGraph Studio y Orq.ai.
- **Referencia con sello:** React Flow (`@xyflow/react`) es una librería MIT para lienzos de nodos con aristas animadas y nodos personalizados [Visto solo en buscador] (búsqueda «React Flow node-based UI», 2026-11-19; no abrí `reactflow.dev`). ChatDev 2.0 trae una consola web con pestaña Workflow, un lienzo para diseñar sistemas multiagente, y pestaña Launch con logs en tiempo real, artefactos intermedios y feedback humano. [Fuente primaria] ([github.com/OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev)).
- **Esfuerzo:** bajo con un SVG hecho a mano (la skill `lucid-triario` del equipo ya produce flujos con SVG inline); medio con React Flow si se quiere arrastrar y animar.
- **Encaje con el cierre:** alto para el documento formal (sobrevive al PDF), medio para el deck.
- **Cómo se vería con nuestro loop:** una tubería de izquierda a derecha con generador, auditor, bifurcación «aprobado» (a la bandeja) y «rechazado» (flecha de vuelta a la capa que falló, con contador 1/3, 2/3, 3/3), y una salida inferior al archivo. La flecha de retorno es lo que distingue al loop de un pipeline lineal.

### Idea 5 · Scrollytelling: el documento que se ejecuta mientras se lee

- **Qué es:** un gráfico fijo (sticky) a un lado y texto que avanza paso a paso; al llegar a cada párrafo, el gráfico cambia de estado. Es la técnica del periodismo de datos.
- **Referencia con sello:** Scrollama, librería ligera que detecta pasos con `IntersectionObserver`, con modo de progreso por paso y patrón de gráfico pegado con CSS `position: sticky`; versión 3.2.0 según un espejo. [Visto solo en buscador] ([github.com/russellsamora/scrollama](https://github.com/russellsamora/scrollama), vía búsqueda). Guía comparada de seis librerías: [Fuente secundaria] ([pudding.cool/process/how-to-implement-scrollytelling](https://pudding.cool/process/how-to-implement-scrollytelling), solo buscador).
- **Esfuerzo:** medio. Se puede hacer sin librería con `IntersectionObserver` y `position: sticky` en HTML puro [Hipótesis].
- **Encaje con el cierre:** alto para el documento HTML. Cuidado con el PDF: al exportar, el estado animado se pierde. Habría que imprimir un fotograma por paso.
- **Cómo se vería con nuestro loop:** el texto cuenta las piezas de la definición de T01 una por una (contrato, auditor, reintento, archivo, persona) y a la derecha la tubería de la idea 4 va encendiendo una pieza por vez.

### Idea 6 · Carriles de tiempo: una línea por capa y una para los 30 días

- **Qué es:** una línea de tiempo con un carril por actor, barras de duración y marcas de evento. Sirve para dos cosas distintas del loop: ver las vueltas de una corrida (carril generador, carril auditor) y ver el loop de ciclo largo (resultado a 30 días) con su línea base y su bitácora.
- **Referencia con sello:** Rewind, con carriles por agente, barras de duración, visor de ventana de contexto y diff. [Fuente primaria] ([github.com/risjai/rewind](https://github.com/risjai/rewind)). Dagster y Airflow muestran vistas de tiempo de ejecuciones; la afirmación de un Gantt por activo en Dagster viene de **un solo blog** y no la verifiqué. [Visto solo en buscador] ([docs.dagster.io](https://docs.dagster.io/concepts/webserver/ui)).
- **Esfuerzo:** bajo a medio. Barras en SVG con marcas de texto.
- **Encaje con el cierre:** medio-alto. Es el medio natural para el cierre del proyecto mismo (septiembre a noviembre de 2026), no solo para un loop.
- **Cómo se vería con nuestro loop:** carril superior con la corrida de 3 vueltas; carril inferior con el loop de 30 días: día 0 línea base, marcas de bitácora, día 30 resultado. Las marcas con datos reales solo si están en la bitácora; si no, carril vacío con la etiqueta «sin bitácora disponible».

### Idea 7 · Una sesión real como cinta de terminal

- **Qué es:** reproducir una sesión real de terminal sin video, como texto con tiempos. El reproductor de asciinema usa archivos `.cast` (JSON por líneas) y se incrusta con `AsciinemaPlayer.create('demo.cast', elemento)`; el repo `asciinema` ya graba en formato asciicast v3. [Visto solo en buscador] ([docs.asciinema.org/manual/player](https://docs.asciinema.org/manual/player/), búsqueda; no abrí la página).
- **Referencia con sello:** el mismo anterior. Alternativa: exportar una sesión de Claude Code a páginas HTML estáticas con claude-code-transcripts, de Simon Willison. [Visto solo en buscador] (búsqueda de visores; el sitio no abrió).
- **Esfuerzo:** bajo si alguien ya grabó la corrida; si no, hay que volver a correrla.
- **Encaje con el cierre:** medio. Es evidencia «cruda» y creíble para el anexo, menos atractiva para el deck.
- **Cómo se vería con nuestro loop:** un anexo con la cinta de una corrida del auditor ciego, donde se vea que solo recibe la salida. Revisar antes que no contenga datos de clientes.

### Idea 8 · El radar como plano de un edificio

- **Qué es:** tomar la tabla del radar de T14 y dibujarla como un plano de planta. Cada concepto es una sala; el color indica fortaleza, brecha o por confirmar. Sale de la sugerencia de T14, no de un caso externo. [Hipótesis]
- **Referencia con sello:** el editor de plano con «Areas» con nombre de Pixel Agents [Fuente primaria] ([github.com/pablodelucca/pixel-agents](https://github.com/pablodelucca/pixel-agents)) muestra que una oficina puede tener zonas con nombre; la lectura sala-concepto es mía.
- **Esfuerzo:** bajo (SVG estático) a medio (clic en cada sala).
- **Encaje con el cierre:** medio. Une la oficina del guion con la lámina del radar sin añadir otra metáfora.
- **Cómo se vería con nuestro loop:** sala «Auditor» (evals, brecha), sala «Registro» (trazas, por confirmar), el cubículo mismo (harness, brecha), la puerta con una persona (human-in-the-loop, fortaleza), una sala de gobernanza con la luz apagada (se habla, aún no se aplica). Las salas «por confirmar» se dejan con signo de pregunta hasta hablar con Hernán.

### Cuadro resumen

| # | Idea | Esfuerzo | Encaje | Va mejor en |
|---|---|---|---|---|
| 1 | Oficina con reglas a la vista | Medio | Alto | Deck |
| 2 | Replay de una corrida real | Medio | Alto | Deck y documento |
| 3 | Dos corridas lado a lado | Bajo a medio | Muy alto | Deck |
| 4 | Diagrama de tubería con vueltas | Bajo a medio | Alto | Documento |
| 5 | Scrollytelling | Medio | Alto (documento) | Documento HTML |
| 6 | Carriles de tiempo | Bajo a medio | Medio-alto | Documento |
| 7 | Cinta de terminal | Bajo | Medio | Anexo |
| 8 | Radar como plano | Bajo a medio | Medio | Deck |

Mi recomendación [Hipótesis]: si solo hay tiempo para tres, la 3, la 1 y la 4. La 3 da la evidencia, la 1 da la imagen que cualquiera entiende y la 4 es lo que sobrevive al PDF.

### Lo que encontré y lo que no

- Generative Agents y AI Town son ciudades de personajes que conversan. AI Town es un kit MIT con Convex, PixiJS y Ollama; su README no describe replay ni cómo se ven las conversaciones. [Fuente primaria] ([github.com/a16z-infra/ai-town](https://github.com/a16z-infra/ai-town)). Son referencias de **ambiente**, no de **control**: ninguna muestra reglas de calidad. [Hipótesis]
- ChatDev: reproduce y registra, pero la página no documenta un «Visualizer» como función. Lo que sí documenta es el replay de 2023 y la consola web 2.0 (7 de enero de 2026). [Fuente primaria] ([github.com/OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev)).
- No encontré, en esta corrida, una oficina o visor que dibuje un **contrato fijo** o un **auditor ciego**. No encontrado no es lo mismo que no existir. [Hipótesis]

---

## 3. Guion: «nuestro loop en una oficina con las reglas a la vista»

Pensado para la idea 1, con la idea 3 como escena de cierre. Cada escena trae lo que se ve y lo que dice el orador. Duración sugerida total: 4 a 5 minutos [Hipótesis]. Los patrones son los de `t15-patrones/patrones.md`.

**Escena 1 · La oficina vacía y el contrato en la pared** (A2, contrato de datos)
- Se ve: una oficina con dos zonas, el escritorio del generador y un cuarto de vidrio. En la pared del fondo, un cartel con el contrato: los criterios de aprobación, con el candado cerrado.
- Dice: «Antes de que alguien trabaje, las reglas ya están escritas. Y en este ciclo no se mueven.»
- Anclaje: el hecho interno del contrato fijo.

**Escena 2 · El generador trabaja** (patrón de la tubería)
- Se ve: un personaje en su escritorio teclea. Sale una hoja y se pone en una bandeja de salida.
- Dice: «El generador hace el trabajo. No decide si está bien.»

**Escena 3 · La ventanilla y el cuarto de vidrio** (A1, maker-checker, el auditor ciego)
- Se ve: la hoja viaja por una ventanilla estrecha hacia el cuarto de vidrio. El auditor la recibe y no ve el escritorio del generador: una cortina tapa ese lado. Solo mira la hoja y el cartel de la pared.
- Dice: «El auditor es otro agente, en otro cuarto. Solo recibe la salida. No sabe cómo se hizo.»
- Matiz honesto (de T15): el auditor es un modelo, no un manual determinista.

**Escena 4 · El sello** (veredicto)
- Se ve: un sello rojo («rechazado») o verde («aprobado») sobre la hoja, con el motivo escrito contra un criterio concreto del cartel.
- Dice: «Cada rechazo cita la regla que no se cumplió.»

**Escena 5 · El trabajo vuelve al escritorio de la capa que falló** (A3, targeted retry)
- Se ve: la hoja rechazada no vuelve al inicio de todo, camina hasta la capa que falló. Un contador sobre el escritorio marca 1/3, 2/3, 3/3.
- Dice: «El reintento vuelve a la capa que falló. Y hay un tope de tres vueltas.»

**Escena 6 · La caja de archivo** (A6, dead-letter queue)
- Se ve: tras la tercera vuelta, la hoja va a un archivador con una etiqueta: «sin recomendación defendible», y un contador.
- Dice: «Lo que no pasa no se fuerza ni se pierde: se archiva con su motivo.»

**Escena 7 · El loop se calla** (B4, abstención; la ventana que se ensancha)
- Se ve: antes de recomendar, una ventana de calendario se abre: ayer, 3 días, una semana, dos semanas. Si el volumen no alcanza, el personaje se pone un dedo en la boca y no sale hoja.
- Dice: «Si no hay datos suficientes, el loop no opina.»
- Cuidado: no inventar umbrales; el volumen mínimo no está en el contexto de la tarea.

**Escena 8 · La bandeja de «listo para publicar»** (E1, human-in-the-loop)
- Se ve: la hoja aprobada llega a una bandeja con rótulo «Listo para publicar». Junto a la bandeja hay una puerta con una persona sentada. El loop no cruza la puerta.
- Dice: «El loop termina aquí. Publica una persona.»

**Escena 9 · Corrida con y sin contrato fijo** (idea 3)
- Se ve: la pantalla se parte en dos. Izquierda: el cartel de la pared cambia de texto a mitad y el auditor rechaza tres veces sin cerrar. Derecha: cartel quieto, sello verde en la primera.
- Dice: «Así se ve la diferencia que hace una regla que no se mueve.»
- Condición: usar la corrida real si hay registro; si no, marcar «reconstrucción».

**Escena 10 · El plano completo** (idea 8)
- Se ve: la cámara se aleja y muestra el edificio con las salas del radar: el auditor, el registro, el cubículo, la puerta y la sala de gobernanza a oscuras.
- Dice: «Esto ya lo hacemos. Esto falta.»

---

## 4. Dominios que no abrieron

| Dominio | Qué pasó | Qué se perdió | Cómo lo traté |
|---|---|---|---|
| `simonwillison.net` | `getaddrinfo ENOTFOUND` | Post de claude-code-transcripts | [Visto solo en buscador] |
| `everettjf.github.io` | `getaddrinfo ENOTFOUND` | Página de Coding Agent Visualizer | [Visto solo en buscador] |
| `arxiv.org` | Heredado de la pizarra; no lo intenté | Paper de Generative Agents | [Visto solo en buscador]; el detalle del replay viene del buscador |

Abrieron bien: `github.com` (Pixel Agents, AI Town, ChatDev, PixelFloor, Rewind).

No intenté, para ahorrar aperturas y porque la pizarra los reporta caídos o por criterio propio: `reactflow.dev`, `docs.dagster.io`, `langfuse.com`, `docs.asciinema.org`, `pudding.cool`, el resto de repos de oficinas pixel (Bit Office, pixtuoid, claude-office, munder-difflin, Tycono, AgentOffice) y los de visores de trazas. Todo lo que viene de ahí va como [Visto solo en buscador].

Presupuesto usado: 8 búsquedas de 20 y 7 aperturas de 12 (2 fallidas).

Quedó sin fuente primaria abierta: el paper de Generative Agents, la documentación de React Flow, Scrollama, Langfuse, Dagster y asciinema, los visores de transcripts de Claude Code y los derivados de Pixel Agents. Tampoco hay, en lo que pude ver, ningún caso verificado de una oficina que muestre un contrato o un auditor ciego.
