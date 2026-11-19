# T6 · Evidencia de impacto propio: cómo mostrar lo que uno hizo dentro de un proyecto de equipo

Rama: `claude/cierre-le-t06-evidencia` · Fecha de la corrida: 2026-11-19 · Proyecto: cierre de Loop Engineering (Triario).

Pregunta: ¿cómo se muestra lo que uno hizo dentro de un proyecto de equipo, con números y sin quitarle crédito a nadie?

Sellos: [Fuente primaria], [Fuente secundaria], [Visto solo en buscador], [Hipótesis]. Presupuesto usado: 8 búsquedas de 20 y 2 aperturas de 12 (las 2 fallaron).

## 1. Lo que leí de la pizarra

Ramas listadas: `prueba`, `t01-tesis`, `t02-cierre`, `t04-mostrar-loop`, `t13-explorador`, `t14-aterrizador`, `t15-patrones`. No existe todavía ninguna carpeta de T3, T5 ni T7 (anotado, sigo sin ellas). Leí títulos de todo y a fondo solo lo que sirve aquí.

| Archivo (rama) | Qué tomé |
|---|---|
| `investigacion/cierre-loop-engineering/t02-cierre/estandares.md` (`claude/cierre-le-t02-cierre`) | **El cierre.** Los marcos (PMBOK, PRINCE2, plantillas de closure report) piden comparar plan contra resultado, y el cierre de pilotos de IA pide criterios fijados antes y evidencia en calidad, adopción, soporte, costo e incidentes. Tomé el índice formal 3.1 como el lugar donde cae la evidencia. Tomé también la regla de redactar en pasado lo hecho, sin lista de pendientes. Heredé su lista de dominios caídos (pmi.org, prince2.com, ISO, gov.uk, arxiv.org, substack.com). |
| `investigacion/cierre-loop-engineering/t02-cierre/ideas-pmo.md` (`claude/cierre-le-t02-cierre`) | Idea 2 (tabla «Criterios de aceptación y su resultado»: criterio fijado, evidencia, resultado en pasado), Idea 5 (lecciones en seis columnas con enlace a bitácora), Idea 6 (lecciones recogidas durante el proyecto, redactadas en términos de decisiones y condiciones del sistema, no de personas) e Idea 8 («límites del alcance»). Ahí va la evidencia personal: dentro de «Desempeño contra el criterio» y en la columna «Evidencia». |
| `investigacion/cierre-loop-engineering/t15-patrones/patrones.md` (`claude/cierre-le-t15-patrones`) | **Los patrones.** Cada caso de la sección 4 de este archivo se amarra a un patrón: A1 (el que hace no es el que aprueba), A2 (reglas fijadas antes), A3 (devolver a la estación que falló), A6 (archivo de no resueltos), B1 (viaje de aprendizaje), B3 (bitácora), B4 (abstención) y E1 (publica una persona). Solo leí los títulos y las fichas que cito; no verifiqué el texto interno de cada una. |
| `investigacion/cierre-loop-engineering/t14-aterrizador/radar.md` (`claude/cierre-le-t14-aterrizador`) | **El radar.** Persona en el circuito (human-in-the-loop) figura como «Aplicado, fortaleza»; evals, harness, gobernanza y context engineering como «Brecha»; observabilidad, costo de tokens y guardrails como «Por confirmar». Lo uso para decidir qué casos sí llevan evidencia (fortalezas) y qué va como límite declarado (brechas), sin inflar. |
| `t01-tesis/tesis.md`, `t13-explorador/diario.md`, `t04-mostrar-loop/*`, `t00-prueba/prueba.md` | Solo los dominios que no abrieron, vía otras tareas. No usé su contenido. |

## 2. Guía corta: qué evidencia pesa más y cómo se presenta

### 2.1 Hallazgos externos

1. **Llevar un registro continuo, no reconstruir de memoria.** Julia Evans propone un «brag document»: una lista corriente de lo que uno hizo, para consultarla al momento de la evaluación en lugar de recordar todo. Su post es «Get your work recognized: write a brag document» en jvns.ca. [Visto solo en buscador] ([resumen en Changelog](https://changelog.com/news/71ya), [su balance de 2019](https://jvns.ca/blog/2019-year-in-review/)). jvns.ca no abrió desde la nube (`ENOTFOUND`), así que **no pude confirmar los encabezados del original**. Una adaptación de terceros menciona cinco encabezados: Projects (proyectos), People work (trabajo con personas), Praise (reconocimientos), Skills (habilidades) y Lessons (lecciones) [Visto solo en buscador] ([Paulund](https://paulund.co.uk/create-a-brag-document)); no es el original, trátalo como adaptación. El capítulo del libro *97 Things Every SRE Should Know* coescrito por Evans y Karla Burnett repite la idea [Visto solo en buscador] ([O'Reilly](https://www.oreilly.com/library/view/97-things-every/9781492081487/ch35.html)).
2. **STAR y CAR.** STAR = Situation, Task, Action, Result (situación, tarea, acción, resultado). CAR junta situación y tarea en un solo «Context» (contexto, acción, resultado), más corto. [Fuente secundaria] ([Creately](https://creately.com/guides/star-vs-car-method/)). Casi toda la literatura es de entrevistas de trabajo, no de evaluación de desempeño; aplicarlo a un cierre de proyecto es extrapolación [Hipótesis]. Para autoevaluaciones, una guía pide que la Acción sean pasos concretos «en tus palabras», que el Resultado lleve un número si lo hay, que **si falta la cifra se omita en vez de estimarla**, y de cinco a ocho ejemplos fuertes repartidos entre las responsabilidades principales. [Visto solo en buscador] ([EverUpward](https://everupward.lovable.app/performance-review-examples)). Fuente débil, la uso solo como orientación.
3. **Hacerlo legible sin quitar crédito.** Las guías de autoevaluación coinciden en: nombrar el propio papel dentro del relato del equipo («desarrollé el marco y el equipo lo ejecutó»), evitar verbos vagos como «ayudé con», atar el trabajo al objetivo del equipo, contar lo que habilitaste a otros, y no exagerar ni minimizar. [Fuente secundaria] ([Lattice](https://lattice.com/articles/how-to-write-a-performance-review-self-assessment), [Nulab](https://nulab.com/learn/collaboration/self-evaluation/), [Culture Amp](https://www.cultureamp.com/blog/self-performance-review-examples)); son blogs y páginas de proveedores, no estándares.
4. **Glue work (trabajo de pegamento: coordinar, documentar, habilitar).** Will Larson aconseja un registro corrido y dar al glue work su propia entrada con el impacto declarado; también distingue crear impacto de que el impacto sea legible, y advierte contra confundir visibilidad con impacto. [Visto solo en buscador] ([resumen en Critical Path](https://buttondown.com/critical-path/archive/glue-work-is-leadership-make-it-countable-or-stop/)). No abrí StaffEng; el detalle es de segunda mano.
5. **Medir impacto de IA y habilitación.** Las guías coinciden en tres capas: uso (adopción), impacto (calidad, tiempo de ciclo) y costo, con **línea base antes del despliegue** y nueva medición a las 8 o 12 semanas. «Horas ahorradas» autorreportadas es el número más citado y el más débil; hay que descontar retrabajo y mostrar a dónde fue el tiempo liberado. [Fuente secundaria] ([Folio3](https://www.folio3.ai/blog/guide-to-measuring-ai-enablement-roi), [ClaudeLog](https://claudelog.com/faqs/how-to-measure-ai-enablement/), [Master of Code](https://masterofcode.com/blog/ai-impact-measurement-framework/amp)); son contenido de proveedores y sus porcentajes no están verificados. [Visto solo en buscador]
6. **La percepción engaña.** Un ensayo aleatorizado de METR con 16 desarrolladores experimentados halló que con IA tardaron 19 % más, aunque ellos creían ir 20 % más rápido. Google y Copilot hallaron aceleraciones en otros diseños. [Visto solo en buscador] ([InfoWorld](https://www.infoworld.com/article/4020931/ai-coding-tools-can-slow-down-seasoned-developers-by-19.html), [InfoQ](https://www.infoq.com/news/2025/07/ai-productivity), [arXiv 2507.00788](https://arxiv.org/pdf/2507.00788v3), [arXiv 2410.12944](https://arxiv.org/html/2410.12944v2)). Lección para el cierre: **no afirmar ahorro de tiempo con encuestas de sensación**; usar registros del sistema. [Hipótesis]
7. **Más velocidad no es más estabilidad.** Comentarios sobre el informe DORA 2025 dicen que la adopción de IA mejora la eficacia individual pero se asocia a más inestabilidad de entrega, y que el cuello de botella pasa de escribir código a validarlo. [Visto solo en buscador] ([Faros](https://faros.ai/blog/key-takeaways-from-the-dora-report-2025), [Typo](https://typoapp.io/blog/ai-impact-dora-metrics)). Es de segunda mano; habría que leer el informe DORA. Aplica directo a Loop Engineering: el auditor ciego es justo el control de validación. [Hipótesis]

### 2.2 Qué evidencia pesa más (orden propuesto) [Hipótesis, apoyada en los puntos 1 a 7]

1. **Un antes y un después medidos por el sistema** (bitácora, ClickUp, grabaciones), con línea base. Pesa más que cualquier opinión.
2. **Un contrafactual dentro del propio proyecto.** Ejemplo ya existente: criterio movido a mitad, sin cierre en 3 vueltas; contrato fijo desde el inicio, aprobó en la primera. Un par con y sin la práctica es más fuerte que un promedio.
3. **Evidencia de calidad y control**, no solo de velocidad: tasa de aprobación en la primera vuelta, casos archivados como «sin recomendación defendible», abstenciones por falta de volumen.
4. **Adopción por otros**: cuántas personas o equipos usan lo construido, con fecha. Es lo que prueba habilitación y reparte el crédito de forma natural.
5. **Testimonio o reconocimiento de terceros**, citado con nombre y fecha solo si existe.
6. **Horas ahorradas autorreportadas**: pesa menos; incluir solo con método y descontando retrabajo.

### 2.3 Cómo se presenta (reglas para el cierre)

- **Una fila por caso, en pasado**, con seis campos: contexto, acción propia, acción del equipo, resultado, evidencia (enlace o dato), qué patrón de t15 lo sostiene. Encaja con la tabla de lecciones de seis columnas de `ideas-pmo.md` (Idea 5).
- **Separar «lo hice yo» de «lo hicimos»** en dos campos, con nombres. Así el crédito de otros queda escrito, no implícito.
- **Cada número lleva fuente y fecha**; el que no existe se omite o se marca «no medido», nunca se estima.
- **Fijar la métrica antes de mirar el resultado** (misma lógica que el contrato del auditor). [Hipótesis]
- **Los límites van a la vista**: gobernanza de IA y harness quedaron «Brecha» en el radar; se declaran como límites de alcance, no se rellenan con evidencia inventada.
- **Dónde va en el documento:** dentro de «Desempeño contra el criterio» (tabla de casos) y en el registro de lecciones (columna Evidencia) del índice formal 3.1 de t02; en el deck, una lámina «Qué se hizo y con qué resultado» con una fila por caso y los detalles de autoría en las notas del orador. La autoevaluación personal (brag document) queda como anexo o documento aparte para Hernán, no dentro del informe de equipo. [Hipótesis]

## 3. Esqueleto de 6 casos para Loop Engineering

No hay números de Triario en esta investigación. Marcadores: **[dato de ClickUp]**, **[dato de la grabación]**, **[dato de la bitácora]**, **[confirmar con Hernán]**. Los hechos del encabezado vienen de lo que Hernán dio como contexto interno; los resultados numéricos no se conocen.

### Caso 1 · Contrato del auditor fijo (patrón A2 y A1)
- **Contexto:** loop con generador y auditor ciego en un subagente aparte. En una corrida el criterio se movió a mitad y no cerró en 3 vueltas. [hecho interno]
- **Acción propia:** fijar el contrato antes de la corrida. [confirmar con Hernán quién propuso la regla y cuándo]
- **Acción del equipo:** [confirmar quién más participó en el diseño del contrato y los equipos que lo adoptaron]
- **Resultado:** con contrato fijo, aprobó en la primera vuelta. [hecho interno] Número de corridas comparadas: [dato de la bitácora].
- **Evidencia:** enlace a las dos corridas, fechas, versión del contrato [dato de la bitácora].
- **Métrica a buscar:** tasa de aprobación en primera vuelta antes y después de fijar el contrato.

### Caso 2 · Reintento acotado y archivo de rechazos (A3 y A6)
- **Contexto:** reintentos sin tope no convergen; lo que no pasa se archiva como «sin recomendación defendible». [hecho interno]
- **Acción propia:** diseñar el retorno a la capa que falló con máximo de 3 vueltas y el archivo de rechazos. [confirmar con Hernán]
- **Resultado:** cuántas piezas pasaron en la vuelta 1, 2, 3 y cuántas se archivaron [dato de la bitácora]. Horas de revisión evitadas: **solo si hay método de medición** [dato de ClickUp].
- **Evidencia:** `archivo.md` de las corridas; formato del archivo en `t15-patrones/archivo.md`.

### Caso 3 · Abstención por volumen insuficiente (B4)
- **Contexto:** antes de recomendar, el loop ensancha la ventana (ayer, 3 días, una semana, dos semanas); si no hay volumen, se calla. [hecho interno]
- **Acción propia:** definir la escalera de ventanas y la regla de silencio. [confirmar con Hernán]
- **Resultado:** número de ocasiones en que se calló y número de recomendaciones emitidas [dato de la bitácora]. Recomendaciones erróneas evitadas: **no afirmar sin caso verificado**; si hay un caso, citarlo con fecha [dato de la grabación o ClickUp].
- **Evidencia:** registros de ventanas usadas por corrida.

### Caso 4 · Loop de contenido que para en «listo para publicar» (E1)
- **Contexto:** publica una persona. Fortaleza «Aplicado» en el radar de t14. [hecho interno]
- **Acción propia:** diseñar el punto de parada y el contrato de calidad de la pieza. [confirmar con Hernán]
- **Resultado:** piezas llevadas a «listo para publicar», piezas que la persona devolvió y causa, tiempo de ciclo del brief a «listo» [dato de ClickUp]. Línea base de tiempo de ciclo sin loop: [dato de ClickUp o ausente].
- **Evidencia:** tareas de ClickUp con fechas; si hay QA previo a publicación, su veredicto.

### Caso 5 · Loop de ciclo largo con bitácora y línea base (B1 y B3)
- **Contexto:** resultado a 30 días, con bitácora y línea base. Es el equivalente técnico del viaje de aprendizaje de un equipo humano. [hecho interno]
- **Acción propia:** montar la bitácora y fijar la línea base antes de actuar. [confirmar con Hernán]
- **Resultado:** línea base [dato de la bitácora], resultado a 30 días [dato de la bitácora], decisión tomada con ese dato. Si el ciclo no ha cerrado a la fecha del documento, escribirlo así.
- **Evidencia:** entradas de la bitácora con fecha (la tabla de lecciones puede citar cada entrada, Idea 6 de `ideas-pmo.md`).

### Caso 6 · Habilitación: megaagentes en cuatro equipos (Implementaciones, dos células de marketing y Web)
- **Contexto:** repos con CLAUDE.md, skills, agentes y algún hook. [hecho interno]
- **Acción propia:** [confirmar con Hernán: ¿qué construyó, qué enseñó, qué documentó?]. Separar de lo que construyó cada equipo; nombrar a las personas de cada célula.
- **Resultado:** adopción por equipo (personas que lo usan, frecuencia semanal, desde cuándo) [dato de la grabación o ClickUp]; tareas ejecutadas con skills [dato de ClickUp]. Horas ahorradas: **solo con método, descontando retrabajo** (punto 5 de 2.1).
- **Evidencia:** repos y commits por equipo (GitHub abre desde la nube; ver fecha y autoría de cada commit).
- **Límite declarado:** los hooks existen en «algún» repo; el radar los marca sin ejemplo aún en patrones (A7). No presentarlos como práctica general.

### Caso opcional (no incluido) · Gobernanza y harness
Quedan como **límites del alcance** (brecha en el radar de t14), sin caso de evidencia. Agregarlos como caso habría que sostenerlo con datos que hoy no existen.

## 4. Dominios que no abrieron

| Dominio | Error | Qué se perdió | Cómo lo traté |
|---|---|---|---|
| `jvns.ca` | `getaddrinfo ENOTFOUND` | Texto original del brag document (secciones exactas, ejemplos) | [Visto solo en buscador]; el buscador devolvió resúmenes y adaptaciones, no el original. |
| `newjersey.github.io` | `getaddrinfo ENOTFOUND` | Adaptación del brag document de una oficina pública | [Visto solo en buscador]. |

No intenté abrir (para ahorrar aperturas, tras dos fallos consecutivos de resolución): `lattice.com`, `creately.com`, `faros.ai`, `infoworld.com`, `infoq.com`, `arxiv.org` (ya caído en la pizarra), `buttondown.com`, `larridin.com`, `masterofcode.com`. Todo lo de ahí va como [Visto solo en buscador].

Heredados de la pizarra y saltados: `arxiv.org`, `addyosmani.com`, `*.substack.com`, `www.ibm.com`, `thenewstack.io`, `sre.google`, `docs.aws.amazon.com`, `opentelemetry.io`, `www.pmi.org`, `www.prince2.com`, `scrumguides.org`, `stripe.dev`, `www.uber.com`, `nvlpubs.nist.gov`, `developers.openai.com`.

**Quedó sin fuente primaria abierta:** el original del brag document de Julia Evans; el texto de Will Larson sobre promotion packets; el informe DORA 2025; los artículos de METR, Google y Copilot (solo vistos en buscador); toda la literatura STAR/CAR para evaluación de desempeño (solo hay material de entrevistas y blogs). **No encontrado:** un estándar o marco oficial para medir impacto de habilitación en IA; un caso publicado de autoevaluación con loops de agentes. Los números de Triario quedan como marcadores.
