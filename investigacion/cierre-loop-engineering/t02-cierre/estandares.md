# T2 · Cómo se cierra un proyecto: qué piden los marcos reconocidos

Rama: `claude/cierre-le-t02-cierre` · Fecha de la corrida: 2026-11-19 · Proyecto: cierre de Loop Engineering (Triario).

Pregunta: ¿qué documento de cierre piden los marcos reconocidos y qué secciones trae cada uno?

Sellos: [Fuente primaria] (estándar, guía oficial o repositorio original) · [Fuente secundaria] (blog, reseña, material de estudio) · [Visto solo en buscador] (no se pudo abrir) · [Hipótesis] (deducción mía). Los hechos internos del proyecto vienen del encargo y se usan como contexto, no como fuente externa.

**Advertencia central:** ninguna fuente primaria abrió desde la nube (PMI, PRINCE2/PeopleCert, ISO, Scrum Guide y los demás fallaron al resolver el dominio). Todo lo externo es [Visto solo en buscador] o [Fuente secundaria]. Los nombres de secciones de cada marco deben verificarse contra el texto oficial antes de citarlos en el documento final.

---

## 1. Lo que leí de la pizarra

Comandos: `git fetch origin --prune`, `git branch -r`, `git ls-tree -r` sobre cada rama `origin/claude/*`. Ramas: `cierre-le-prueba`, `cierre-le-t01-tesis`, `cierre-le-t15-patrones`.

| Archivo | Qué tomé |
|---|---|
| `investigacion/cierre-loop-engineering/t01-tesis/tesis.md` (rama `claude/cierre-le-t01-tesis`) | **La tesis.** Loop engineering como tubería: etapas en orden, contrato de calidad fijo, revisor que no hizo el trabajo, reintentos con tope, archivo para lo que no pasa, persona en la puerta de producción. Los patrones de Anthropic (evaluator-optimizer, prompt chaining con gates) y el harness de larga duración (bitácora, `passes`, pruebas que no se editan). Tomé también su tabla de dominios que no abrieron: `arxiv.org`, `addyosmani.com`, `substack.com`, `ibm.com`, `thenewstack.io`; no los intenté. |
| `investigacion/cierre-loop-engineering/t15-patrones/patrones.md` (rama `claude/cierre-le-t15-patrones`) | **El catálogo de 20 fichas** en familias A (verificación), B (exploración, incluye B1 viaje de aprendizaje y B3 bitácora), C (memoria y coordinación, incluye C5 supervisor que recorre la oficina), D (deliberación) y E (gobierno, incluye E1 «publica una persona» y E3 auditoría con rastro). Lo uso para que los índices tengan dónde contar los patrones. Su tabla de dominios sin abrir (`sre.google`, `docs.aws.amazon.com`, `opentelemetry.io`, entre otros) también me sirvió. |
| `t15-patrones/archivo.md`, `t01-tesis/ideas-ingenieria-datos.md`, `t00-prueba/prueba.md` | Solo vi que existen; no los leí a fondo (la prueba la resume T01: `github.com` abre, `arxiv.org` no). |

No existían otras tareas del relevo. No modifiqué nada de otra rama.

---

## 2. Tabla comparativa

| Marco | Nombre del documento | Secciones (según lo que encontré) | Para quién se escribe | Fuente |
|---|---|---|---|---|
| **PMBOK 6.ª ed.** (PMI), proceso 4.7 Close Project or Phase (cerrar proyecto o fase) | **Final report** (informe final) más actualización del repositorio de **lecciones aprendidas** (lessons learned repository). Salidas del proceso: actualizaciones de documentos del proyecto, transición del producto/servicio/resultado final, informe final, actualización de activos de los procesos de la organización. | El informe final resume el desempeño del proyecto y cuenta riesgos o problemas y cómo se manejaron. El registro de lecciones se consolida al cierre, pero se recoge durante todo el proyecto. No encontré lista oficial de secciones. | Patrocinador y gerencia; la organización futura (repositorio). [Hipótesis] | [Visto solo en buscador] [Brainscape](https://www.brainscape.com/flashcards/project-management-basics-47-close-proje-9550946/packs/16902905), [SlideShare](https://pt.slideshare.net/ShamilHabet/pmp-chapter-6-of-6-closing-process-group-1-process-based-on-pmbok-6th-edition-and-code-of-ethics), [Lecturio](https://lecturio.com/business-career-courses/pmp-close-project-or-phase.lecture) · [Fuente secundaria] [ResumeLens](https://www.resumelens.org/blog/project-management/lessons-learned-process) |
| **PMBOK 7.ª ed.** (PMI) | No encontré un documento de cierre con nombre propio. Mi conocimiento previo, **no confirmado en la búsqueda**: la 7.ª edición pasó de procesos a principios y dominios de desempeño, y el proceso «Close Project or Phase» ya no aparece como tal. | No encontrado. | No encontrado. | [Hipótesis] La búsqueda no lo confirmó: [Project Management Compass](https://projectmanagementcompass.substack.com/p/inside-pmbok-7-project-work-performance) [Visto solo en buscador] |
| **PRINCE2** (2009 y v7), proceso Closing a Project (cerrar un proyecto) | **End Project Report** (informe de fin de proyecto), con el **Lessons Report** (informe de lecciones) y las **Follow-on Action Recommendations** (recomendaciones de acciones de seguimiento). | End Project Report: se apoya en PID (documentación de inicio), Business Case, Project Plan, Benefits Management Approach, y los registros de incidencias, calidad y riesgos, más el Lessons Report. Revisa el desempeño contra el plan y el Business Case y cierra con una recomendación de cierre. Lessons Report: resumen ejecutivo, revisión general, revisión de medidas útiles y lecciones significativas, con acciones recomendadas por lección (según una plantilla). **Choca con la regla de documentar solo lo hecho:** las Follow-on Action Recommendations (acciones para quienes soportan los productos tras el proyecto) y las «acciones recomendadas» por lección. Conflicto de versiones: material 2009 las trata como producto aparte; un material de estudio dice que en v7 van dentro del End Project Report. No lo verifiqué en el manual oficial. | La Junta del Proyecto (Project Board), que aprueba el informe; quienes darán soporte a los productos (seguimiento); otros proyectos (lecciones). | [Visto solo en buscador] [PRINCE2.com](https://www.prince2.com/uk/blog/prince2-project-closure), [Lessons Report plantilla](https://www.stakeholdermap.com/project-templates/Lessons%20Report.pdf), [ILX process map](https://www.ilxgroup.com/prince2-overview/story_content/external_files/processmap.pdf), [open-exam-prep](https://open-exam-prep.com/study-guides/prince2-practitioner/processes-boundary-closing-tailoring/closing). Aplica también a proyectos terminados antes de tiempo. |
| **ISO 21502:2020** (guía de gestión de proyectos) | Cláusula 6.8 «Closing or terminating a project» (cerrar o terminar un proyecto), 6.9 «Post-project activities» (actividades posproyecto) y 7.18 lecciones aprendidas (visión general, identificar, difundir). Sin nombre de documento encontrado. | Solo vi los títulos de cláusulas en el índice de DIN. El contenido **no encontrado** (el estándar es de pago). La sección 6.9 por su nombre **parece chocar con la regla de documentar solo lo hecho**, pero no pude leer su texto. [Hipótesis] | No encontrado. | [Visto solo en buscador] [índice DIN](https://www.din.de/de/mitwirken/normenausschuesse/nqsz/veroeffentlichungen/wdc-beuth:din21:334145134/toc-3233385/download), [ISO TC258](https://committee.iso.org/sites/tc258/home/projects/published/iso-21502.html) |
| **Plantillas de closure report** (práctica común, sin marco único) | Project closure report / completion report (informe de cierre). | Propósito y alcance; comparación plan vs. resultado; aceptación final del producto; transición y soporte; cuestiones abiertas con responsable y fecha; costos y presupuesto; proveedores; liberación de recursos; archivo de documentos; lecciones aprendidas; recomendaciones para proyectos futuros. **Choca con la regla de documentar solo lo hecho:** «cuestiones abiertas» y «recomendaciones para proyectos futuros». | Gerencia sénior, que juzga el éxito del proyecto. | [Fuente secundaria] [ProjectManagement.com](https://www.projectmanagement.com/deliverables/475521/project-completion-report), [U. de Waterloo](https://uwaterloo.ca/ist-project-management-office/methodologies/project-management/closure/closure-report) (solo en listado), [Rework](https://resources.rework.com/de/libraries/project-management/project-closure) [Visto solo en buscador] |
| **Scrum** (Scrum Guide 2020), Sprint Review y Sprint Retrospective | No son documentos; son eventos. Review (revisión del sprint) y Retrospective (retrospectiva). | Review: inspeccionar el resultado del sprint y decidir adaptaciones; el incremento debe cumplir la definición de «hecho» (Definition of Done). Retrospective: inspeccionar personas, relaciones, proceso y herramientas y planear mejoras; cierra el sprint. **La retro termina en un plan de mejoras: choca con la regla de documentar solo lo hecho** (si se registra como pendiente). | Review: equipo e interesados. Retro: solo el equipo Scrum. | [Visto solo en buscador] [Scrum.org](https://www.scrum.org/resources/what-is-a-sprint-review), [open-exam-prep](https://open-exam-prep.com/study-guides/pspo-i/review-and-retrospective/sprint-retrospective) |
| **Retrospectivas ágiles** (Kerth, Derby y Larsen) | *Project Retrospectives* (Kerth) y *Agile Retrospectives* (Derby y Larsen, 2006). | Kerth: la «directiva primaria» (nadie hizo menos que lo mejor que pudo con lo que sabía) como regla de seguridad, sin culpables. Derby y Larsen: agenda de cinco fases, de la observación a la decisión; solo confirmé el nombre de la primera («Set the stage»). Las otras cuatro: no confirmadas. | El equipo que hizo el trabajo. | [Visto solo en buscador] [InfoQ](https://www.infoq.com/articles/retrospective-prime-directive), [Fowler](https://www.martinfowler.com/bliki/PrimingPrimeDirective.html) |
| **Fin de fase en servicios digitales** (GDS Service Manual, Reino Unido) | Service assessment (evaluación de servicio) al final de alpha, beta y live. | Pregunta central: ¿pasa a la siguiente fase? Resultado tipo semáforo (verde: avanza; ámbar: condicional con revisión de seguimiento), según una fuente secundaria. Términos oficiales de la salida: no encontrado. **El ámbar condicional choca con la regla de documentar solo lo hecho.** | Comité evaluador; condición para aprobar presupuesto. | [Fuente primaria] [Service Manual, beta](https://www.gov.uk/service-manual/phases/beta) (solo en buscador) · [Fuente secundaria] [Manchester Digital](https://www.manchesterdigital.com/post/ve3/gds-assesment), [blog GDS](https://services.blog.gov.uk/2020/02/05/service-assessments-improvements-life-after-live/) [Visto solo en buscador] |
| **Cierre de pilotos de IA** (no hay estándar; prácticas de consultoras) | Informe o scorecard de cierre del piloto. | Criterios de decisión fijados **antes** del lanzamiento; cuatro salidas nombradas: escalar, seguir aprendiendo, rediseñar, parar; evidencia en calidad, adopción, soporte, costo e incidentes; decisión documentada con dueño, evidencia y qué la haría reconsiderar; si la evidencia es escasa, dice que no alcanza para expandir. «Seguir explorando» no es decisión sin una pregunta abierta y un plan. **«Qué haría reconsiderar» y «seguir aprendiendo» chocan con la regla de documentar solo lo hecho.** No encontré estándar; los umbrales son ilustrativos. | Quien decide la inversión. | [Fuente secundaria] [GovTech](https://www.govtech.com/voices/the-question-to-ask-after-an-ai-pilot-revise-scale-or-retire), [Virtasant](https://virtasant.com/ai-today/a-smarter-enterprise-ai-strategy-starts-with-knowing-when-to-stop), [Wavect](https://wavect.io/de/blog/ai-pilot-kill-or-scale-scorecard.md), [SoftwareSeni](https://www.softwareseni.com/when-to-kill-revive-or-restructure-a-stalled-ai-pilot/) [Visto solo en buscador] |

### Lo que se repite en los marcos

1. Un informe de desempeño contra lo planeado (plan, Business Case, criterios de éxito). [Hipótesis de síntesis sobre las filas de arriba]
2. Un registro de lecciones aprendidas, recogido durante el proyecto y consolidado al cierre.
3. Aceptación o transición del resultado, y registro de lo no resuelto.
4. Una decisión explícita ante quien tiene autoridad (aprobar el cierre, pasar de fase, escalar o parar).

### Regla de documentar solo lo hecho: dónde choca

Reporto tal cual, sin eliminar: Follow-on Action Recommendations y acciones por lección (PRINCE2), 6.9 actividades posproyecto (ISO 21502, solo por su título), cuestiones abiertas y recomendaciones futuras (plantillas), plan de mejoras de la retro (Scrum), ámbar condicional (GDS) y «seguir aprendiendo» (pilotos). **Qué hacer con ellas queda a decisión de Hernán.** [Hipótesis] Una forma de conservar la función sin lista de pendientes: registrar lo hecho en pasado («se archivó como sin recomendación defendible», «se fijó el contrato antes de la corrida») y dejar las recomendaciones de seguimiento fuera del documento.

---

## 3. Tres índices propuestos para el cierre de Loop Engineering

Los tres cuentan solo lo hecho. Las secciones que normalmente traen pendientes aparecen reformuladas en pasado o marcadas como opcionales.

### 3.1 Formal (documento HTML/PDF para la gerencia, al estilo End Project Report)

1. **Resumen ejecutivo**: qué se construyó, en una página y en pasado.
2. **Alcance y objetivo del proyecto**: qué se propuso en septiembre de 2026 y qué cubrió hasta noviembre.
3. **La tesis: el loop como tubería**: la definición de t01-tesis y por qué es ingeniería de datos aplicada a agentes.
4. **Entregables producidos**: loops (generador y auditor ciego), megaagentes de los cuatro equipos, repos con CLAUDE.md, skills, agentes y hooks.
5. **Desempeño contra el criterio**: qué se aprobó, qué no cerró (la corrida que no cerró en 3 vueltas frente a la que aprobó en la primera con el contrato fijo).
6. **Catálogo de patrones aplicados**: las fichas de t15-patrones y cuáles se usaron.
7. **Controles y gobierno**: contrato fijo, tope de 3 vueltas, archivo de «sin recomendación defendible», persona que publica.
8. **Lecciones aprendidas registradas**: tabla de lecciones en pasado (ver idea de formato en 3.3).
9. **Temas mencionados sin aplicar**: gobernanza de IA y harness, declarados como no cubiertos, sin plan. (Choca con la regla solo si se agrega «siguientes pasos»; aquí solo se declara el estado.)
10. **Anexos**: bitácoras, línea base, enlaces a los repos.

### 3.2 Ejecutivo (deck de 8 a 10 láminas con notas del orador)

1. **El problema**: por qué un prompt suelto no escala.
2. **La idea**: Loop Engineering como tubería que se repite sola, se revisa con reglas fijas y sabe cuándo parar.
3. **Mapa visual**: la oficina virtual (referencia: Pixel Agents), un orquestador que recorre los cubículos.
4. **Qué hay hoy**: cuatro equipos, sus megaagentes y repos.
5. **Prueba 1**: el contrato fijo (no cerró en 3 vueltas frente a aprobó en la primera).
6. **Prueba 2**: el loop que se calla si no hay datos y el de contenido que para en «listo para publicar».
7. **Prueba 3**: el loop de ciclo largo con bitácora y línea base a 30 días.
8. **Del equipo humano al equipo de agentes**: tabla de equivalencias (viaje de aprendizaje, maker-checker, reintento).
9. **Qué quedó fuera**: gobernanza de IA y harness, dicho como alcance.
10. **Decisión solicitada**: el marco de cierre de pilotos usa seguir, ajustar o parar; la lámina indica la decisión tomada o a tomar por la gerencia. (Choca con la regla si se redacta como pendiente.)

### 3.3 Narrativo (relato del proyecto de septiembre a noviembre de 2026)

1. **El punto de partida**: cómo se trabajaba antes de los loops.
2. **La oficina virtual**: qué mostró el compañero y por qué convenció de dibujar el loop.
3. **El primer loop**: generador y auditor ciego, qué falló y qué se corrigió.
4. **La corrida que no cerraba**: el criterio se movió y no cerró en 3 vueltas; con el contrato fijo, aprobó en la primera.
5. **Aprender a callarse**: la ventana de datos que se ensancha (ayer, 3 días, una semana, dos semanas).
6. **Parar antes de publicar**: el loop de contenido y la persona en la puerta.
7. **El ciclo de 30 días**: bitácora y línea base.
8. **Cuatro equipos, cuatro megaagentes**: Implementaciones, dos células de marketing y Web.
9. **Lo que el equipo ya nombra y aún no sabe aplicar**: gobernanza de IA y harness.
10. **Qué cambió en cómo se trabaja**: cierre en pasado con la tesis de la tubería.

Fuentes sugeridas para cada índice: pizarra (`t01-tesis/tesis.md`, `t15-patrones/patrones.md`) y los marcos de la sección 2 solo como respaldo del formato.

---

## 4. Dominios que no abrieron

Todos con `getaddrinfo ENOTFOUND` (fuera de los dominios permitidos de la sesión). Para leerlos directo hay que agregarlos en la configuración de red del entorno.

| Dominio | Qué se perdió | Cómo lo traté |
|---|---|---|
| `www.pmi.org` | PMBOK y lecciones aprendidas | [Visto solo en buscador] |
| `www.prince2.com`, `prince2.wiki` | End Project Report, Lessons Report | [Visto solo en buscador] |
| `scrumguides.org` | Scrum Guide 2020 | [Visto solo en buscador] |
| `www.govtech.com` | Revisar, escalar o retirar un piloto de IA | [Visto solo en buscador] |
| ISO, DIN, `gov.uk` y demás | No los intenté tras los fallos anteriores | Lo que dijo el buscador |

Heredados de la pizarra y no intentados: `arxiv.org`, `addyosmani.com`, `*.substack.com`, `www.ibm.com`, `thenewstack.io`, `sre.google`, `docs.aws.amazon.com`, `opentelemetry.io`.

Presupuesto usado: 10 búsquedas de 20 y 5 aperturas de 12 (las 5 fallaron).

**Quedó sin fuente primaria:** todo lo de PMI, PRINCE2, ISO 21502, Scrum Guide y GDS; la composición oficial del End Project Report en v7; el contenido de ISO 6.8, 6.9 y 7.18; las cinco fases de la retro de Derby y Larsen salvo la primera; y el estado de «Close Project or Phase» en PMBOK 7.
