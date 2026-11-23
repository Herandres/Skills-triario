# Parte 1 · El marco

Rama: `claude/doc-le-d02-marco` · Fecha: 2026-11-23 · Brief: `documento/cierre-loop-engineering/BRIEF.md` · Esqueleto: `origin/claude/doc-le-d01-arquitectura:documento/cierre-loop-engineering/d01-arquitectura/esqueleto.md` (secciones 1.1 a 1.5).

**Tarea D02: agente especialista del marco leyó la investigación y, tomando como base la tesis de T01, el catálogo de patrones de T15, el radar de T14 y la memoria de El Taller, propone el texto de la Parte 1 del documento formal.**

**Bases leídas**
- Investigación del Relevo (rama `claude/doc-le-base`, carpeta `investigacion/cierre-loop-engineering/`): `t01-tesis/tesis.md`, `t01-tesis/ideas-ingenieria-datos.md`, `t15-patrones/patrones.md`, `t15-patrones/archivo.md`, `t14-aterrizador/radar.md`, `t02-cierre/ideas-pmo.md`, `t16-supervisor/estado-final.md`.
- El Taller, repositorio `Herandres/oficina-relevo`, rama `claude/taller` (solo lectura): `CLAUDE.md`, `CONTRATO.md`, `estado.json`, `proceso/ciclo.md`, `proceso/limpieza.md`, `proceso/retro.md`, `decisiones/` (lista de ADR-001 a ADR-008 con `git ls-tree`; leídas completas ADR-005 y ADR-006), `bitacora/ciclos.md`, `bitacora/huecos.md`, `bitacora/limpieza.md`, `retro/2026-11-21.md`, `tools/integridad.mjs` y `git log`.
- Pizarra del relevo de documentación: solo existía D01. Su esqueleto existe y esta parte sigue su reparto: D02 escribe 1.1, 1.2, 1.3 (texto) y 1.4. La sección 1.5 es de D03 según el esqueleto; aquí va el texto de acompañamiento y la lectura general que pide el encargo de D02, con el lugar de la figura marcado.

**Cómo leer las fuentes**
- Sellos: [Fuente primaria] · [Fuente secundaria] · [Visto solo en buscador] · [Hipótesis].
- Toda ruta interna o commit citado sin sello es [Fuente primaria].
- Las rutas sin prefijo son de `Herandres/Skills-triario` y están dentro de `investigacion/cierre-loop-engineering/`. Las de El Taller se escriben `oficina-relevo:<ruta>`.
- Las fuentes externas llevan el sello que les puso la tarea que las abrió (T01, T15 o T14). D02 no abrió páginas web nuevas.

**Glosario de primera aparición:** prompt (instrucción que recibe el modelo) · LLM (modelo de lenguaje) · skill (habilidad empaquetada que el agente carga) · commit (registro de un cambio en git) · merge (integración de una rama en otra) · diff (diferencia entre dos versiones) · QA (control de calidad) · ADR (registro de decisión de arquitectura) · cron (programación por horario) · hooks (ganchos que corren en puntos fijos del agente) · Code Janitor (conserje del código, la rutina que limpia código sin uso) · lakehouse (plataforma de datos que une lago y bodega de datos) · redrive (devolver un mensaje fallido a su cola para reprocesarlo).

---

## 1.1 Alcance y objetivo del proyecto

### Qué se propuso
Loop Engineering es un proyecto de Datos e IA de Triario que va de septiembre a noviembre de 2026 (BRIEF §1). El BRIEF define el loop como un sistema que une flujos de trabajo, se repite solo, se revisa con reglas fijas y sabe cuándo parar (BRIEF §2, eje 1). El objetivo formal del proyecto y su alcance con los equipos están en ClickUp. **[confirmar con Hernán]**

Los hitos, las historias de usuario (HU) y el informe de avance del 04/11/2026 viven en ClickUp («Loop Engineering: Fase 2.0») y no están en el repositorio. **[confirmar con Hernán]**

### Qué cubre este documento con evidencia de git
El cierre se construyó desde el 19 de noviembre de 2026 (primer commit del Relevo, `c7979e6`, en `t16-supervisor/estado-final.md`; línea base de El Taller, `b1d5cfa`) hasta el 23 de noviembre, fecha de este documento, con tres sistemas de agentes. Las rutinas de El Taller siguen programadas hasta el 26/11 (`oficina-relevo:proceso/ciclo.md`); este texto cuenta lo hecho hasta el CICLO-016:
- **El Relevo de investigación:** 16 tareas en rutinas. 8 de 8 investigaciones entregadas, 0 rescatadas (`t16-supervisor/estado-final.md`, commit `59c639a`).
- **El Taller:** la oficina del Relevo construida por ciclos. Va en la versión v16 tras el CICLO-016 (`oficina-relevo:estado.json`, commit `a405c0c`).
- **El Relevo de documentación:** este documento (BRIEF §2, eje 3).

### Criterios de aceptación fijados antes
El cierre se juzga con la misma regla que el loop: los criterios se escriben antes de empezar y no se mueven (`t02-cierre/ideas-pmo.md` Idea 2).

| Criterio fijado antes | Dónde quedó escrito | Resultado |
|---|---|---|
| 11 criterios de aceptación de la oficina | `oficina-relevo:CONTRATO.md`, commit `b1d5cfa` (19/11/2026). Es el único commit que toca ese archivo en la historia del tronco. | Cumplido: el QA ciego aprobó en la primera ronda los ciclos CICLO-001 a CICLO-016 (`oficina-relevo:bitacora/ciclos.md`). |
| Criterio fijo del auditor del catálogo de patrones | `t15-patrones/patrones.md` §2 | Cumplido: el criterio no cambió entre vueltas; 20 fichas aprobadas y 1 archivada. |
| Vara fija del radar | `t14-aterrizador/radar.md` §2 («Fija desde el inicio, no cambió») | Cumplido: 6 de 9 fichas aprobadas en la vuelta 1 y las 3 restantes en la vuelta 2. |
| Criterios de los loops de los equipos | ClickUp y casos de T06 | **[confirmar con Hernán]** |

---

## 1.2 La tesis: Loop Engineering como ingeniería de tuberías

### La definición
> **Loop Engineering es diseñar la tubería que pone a trabajar a los agentes: etapas en orden, un contrato de calidad que no cambia, un revisor que no hizo el trabajo, reintentos con tope, un archivo para lo que no pasa y una persona en la puerta de producción.**

Fuente: `t01-tesis/tesis.md` §5. Versión corta: *ingeniería de datos aplicada al trabajo de los agentes*.

Un ingeniero de datos ya conoce cada pieza: fuentes, transformaciones, controles de calidad, reintentos y una cola para lo que falla. Lo que cambia es quién trabaja dentro de la tubería: agentes de IA en lugar de consultas SQL.

### De dónde viene la idea
- **Flow engineering** (ingeniería de flujo), AlphaCodium, enero de 2024: el valor está en el flujo, no en el prompt. [Fuente primaria] repositorio [Codium-ai/AlphaCodium](https://github.com/Codium-ai/AlphaCodium) (`t01-tesis/tesis.md` §2.3).
- **Building effective agents**, Anthropic, diciembre de 2024: separa workflows (caminos de código predefinidos) de agents, y recomienda stopping conditions (condiciones de parada) como un número máximo de vueltas. [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/building-effective-agents)
- **Effective harnesses for long-running agents** (arneses para agentes de larga duración), Anthropic, noviembre de 2025: el agente solo puede cambiar el campo `passes` de la lista de pruebas y deja su progreso en un archivo y en git. [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- **Loop engineering**, Peter Steinberger y Addy Osmani, 7 y 8 de junio de 2026: el sistema que dispara, revisa y reintenta al agente. [Visto solo en buscador] (`t01-tesis/tesis.md` §2.1; addyosmani.com no abrió).

### Las cinco reglas del loop y su par en ingeniería de datos
La tabla presenta el par que pide el BRIEF y, al lado, el veredicto de T01. Dos pares no se sostienen tal cual y se muestran con su corrección, sin ocultarlos.

| Regla del loop | Par en ingeniería de datos (BRIEF) | Veredicto de T01 | Ajuste | Dónde se aplicó en el proyecto |
|---|---|---|---|---|
| Contrato inmutable | Data contract (contrato de datos) | Se sostiene con ajuste (fila 2) | El par más exacto es una suite de expectativas versionada que solo cambia entre corridas. | `oficina-relevo:CONTRATO.md` («Este contrato no cambia durante los ciclos»), commit `b1d5cfa`. |
| Auditor ciego | Prueba de calidad independiente (dbt tests, checkpoints de Great Expectations) | Se sostiene con ajuste (fila 3) | La prueba de datos es determinista; el auditor es un modelo como juez (LLM-as-judge) y puede variar. Hereda la separación de funciones. | `oficina-relevo:proceso/ciclo.md` paso 7 (QA ciego en subagente nuevo). |
| Archivada | Dead-letter queue (cola de fallidos) | Se sostiene con ajuste (fila 5) | Una cola de fallidos no es un basurero: guarda el contexto para revisar y reprocesar. | `t15-patrones/archivo.md`: cada analogía rechazada con su razón y «qué faltaría para reabrirla». |
| Ensanchar la ventana | Backfill (relleno histórico) | **No se sostiene así** (fila 6) | Backfill reprocesa intervalos pasados. El par correcto es una **ventana de lookback** (ventana hacia atrás que se ensancha) más un **umbral de volumen bloqueante**, como un asset check (prueba sobre un activo de datos) con `blocking=True` en Dagster [Visto solo en buscador]. | En los loops de los equipos (`t15-patrones/patrones.md` B4, hecho interno del encargo). Datos del caso: **[confirmar con Hernán]** |
| Bitácora | Linaje (lineage) | **Se sostiene con ajuste: partir en dos** (fila 7) | 7a: bitácora = observabilidad por corrida. 7b: linaje = qué insumos, qué versión del contrato y de la skill produjeron cada salida. La línea base no es linaje: es una métrica de comparación (fila 13). | 7a: `oficina-relevo:bitacora/ciclos.md`. 7b: a medias, ver «Dónde no calza». |

Fuentes de los pares: `t01-tesis/tesis.md` §3, filas 2, 3, 5, 6, 7 y 13, con sus enlaces (Airflow, dbt, Great Expectations, Kafka Connect, Dagster, OpenLineage) [Visto solo en buscador], salvo Anthropic [Fuente primaria].

### Los pares que completan la tubería
T01 encontró diez pares más. Siete son nuevos frente a la lista original (`t01-tesis/tesis.md` §3):

| Ingeniería de datos | Loop | Veredicto |
|---|---|---|
| Orquestador (Airflow, Dagster) | Megaagente que llama las skills | Se sostiene con ajuste: en orden fijo es prompt chaining (encadenamiento de pasos), no orchestrator-workers (orquestador con trabajadores). |
| Reintentos con tope | Reintento a la capa que falló, máximo 3 vueltas en los loops de los equipos (T01) | Se sostiene con ajuste: el loop reintenta con la crítica del auditor, no repite igual. En El Taller el tope es de 2 rondas de corrección (`oficina-relevo:proceso/ciclo.md` paso 7). |
| Aprobación antes de producción | Parar en «listo para publicar» | Se sostiene. |
| Arquitectura medallón (bronze, silver, gold) | Insumo crudo → borrador aprobado → listo para publicar | Nueva. |
| Idempotencia (repetir no duplica efectos) | El loop no publica ni envía solo | Nueva. |
| Checkpoint y estado persistente | Estado en disco: CLAUDE.md, archivos de progreso, repo | Nueva. |
| Scheduler y triggers (programador y disparadores) | Las rutinas que arrancan el loop | Nueva. |
| Línea base y monitoreo de métricas | Loop de ciclo largo con línea base | Nueva [Hipótesis de T01: sin fuente de datos abierta]. |
| Aislamiento de entornos | Cada agente en su copia o rama | Nueva. |
| Niveles de madurez y promoción | Pasar de supervisado a autónomo | Nueva. |

### Dónde no calza, dicho en voz alta
- **Un DAG no se repite.** Un DAG (grafo dirigido sin ciclos) no tiene vueltas: la «otra vuelta» es el bucle de evaluación montado encima (`t01-tesis/tesis.md` fila 1).
- **El auditor no es determinista.** Una prueba de dbt da siempre el mismo resultado; un auditor LLM puede variar (fila 3).
- **El linaje está a medias.** El Taller versiona en git sus instrucciones (`oficina-relevo:proceso/*.md`, línea «Versión»), pero no registra qué versión produjo cada salida (fila 7b).

---

## 1.3 Arquitectura de referencia de un loop

**[FIGURA F4 · arquitectura C4 en dos niveles, contexto y contenedores · Archify `architecture`]**

### Lo que la figura muestra
Un loop no es un prompt largo. Es un sistema con piezas separadas, cada una con un solo trabajo:

1. **Disparador.** Una rutina programada arranca la corrida (`oficina-relevo:proceso/ciclo.md`: cron `0 14,18,22 21-26 11 *` y `30 3,6,9 21-26 11 *`).
2. **Memoria.** Archivos en git que todo agente lee antes de actuar (`oficina-relevo:decisiones/ADR-006-memoria-compartida.md`).
3. **Supervisor.** Compara el estado deseado con el real antes de trabajar (`oficina-relevo:proceso/ciclo.md` paso 2).
4. **Generador.** Investigador y Desarrollador, en subagentes (pasos 3 y 5).
5. **Contrato.** Criterios que el generador no puede cambiar (`oficina-relevo:CONTRATO.md`).
6. **Auditor ciego.** Recibe solo la salida y el criterio (paso 7).
7. **Archivo.** Lo rechazado queda como evidencia en su rama (`oficina-relevo:CLAUDE.md`, sección Ramas).
8. **Puerta.** Integrar al tronco y publicar solo si el QA aprobó (`oficina-relevo:decisiones/ADR-005-tronco-y-publicacion.md`).

### Su nombre en ingeniería de datos: Write-Audit-Publish
La secuencia generador → auditor → puerta es el patrón **Write-Audit-Publish** (escribir, auditar y publicar) de los lakehouses: se escribe en una rama aislada, se audita y solo si pasa se publica (`t01-tesis/ideas-ingenieria-datos.md` Idea 1; AWS y lakeFS [Visto solo en buscador]).

El Taller lo aplica tal cual (ADR-005):
- **Write:** el ciclo trabaja en `claude/ciclo-NNN`.
- **Audit:** QA ciego contra el contrato.
- **Publish:** merge a `claude/taller` y publicación de la oficina.

**Diferencia honesta.** En El Taller el publish lo hace un agente (el Publicador), como en WAP. La persona está en otra puerta: solo Hernán cambia el contrato y las instrucciones de las rutinas (`oficina-relevo:CONTRATO.md`; `oficina-relevo:proceso/ciclo.md`, «lo cambia Hernán»). Es posible porque publicar la oficina no tiene efectos irreversibles hacia afuera [Hipótesis, con base en `t01-tesis/tesis.md` fila 10].

### El patrón de Anthropic que corresponde
El Taller llama a sus pasos en orden fijo (pasos 0 a 10 de `proceso/ciclo.md`). Según T01 (fila 1), eso es **prompt chaining con compuertas** más un bucle **evaluator-optimizer** (evaluador y optimizador), no orchestrator-workers. [Fuente primaria] [Anthropic](https://www.anthropic.com/engineering/building-effective-agents)

Si los megaagentes de los equipos deciden las subtareas sobre la marcha o las llaman en orden fijo cambia el nombre del patrón. **[confirmar con Hernán]**

---

## 1.4 Las técnicas de loop engineering

### Cómo se armó el catálogo
T15 tradujo prácticas de equipos humanos a técnicas con agentes (`t15-patrones/patrones.md` §2):
- Cada técnica tiene una práctica humana, un concepto de IA con fuente y un mapeo rol a rol.
- Una analogía entra solo si conserva las relaciones, no el parecido de superficie (mapeo estructural de Gentner, 1983 [Visto solo en buscador]).
- Un auditor ciego revisó 21 fichas en dos vueltas con el mismo criterio. Aprobó 20 en 5 familias. La C3 (postmortem sin culpables) se rechazó dos veces y quedó en `t15-patrones/archivo.md` junto con otras cuatro candidatas descartadas antes del auditor.

El catálogo se escribió el 19/11 (commits `e7bd15e` y `2cfc0c3`, `t16-supervisor/estado-final.md`). Entonces muchas fichas decían «sin ejemplo aún». La columna «Dónde se aplicó» suma la evidencia que dejaron después El Taller y el propio Relevo.

**[FIGURA F5 · matriz de trazabilidad: técnica × pieza de la tesis × dónde se usó · SVG · datos: la columna «Dónde se aplicó» de las tablas siguientes]**

### Familia A · Verificación

| Técnica | Qué es para un equipo | Dónde se aplicó en el proyecto | Equivalente en la industria |
|---|---|---|---|
| **A1 · El que hace no aprueba** (maker-checker) | Uno registra la operación, otro que no participó la autoriza. | QA ciego de cada ciclo, que solo recibe contrato, criterios, salida de pruebas y capturas (`oficina-relevo:proceso/ciclo.md` paso 7). Auditor ciego del Code Janitor: el 22/11 marcó «dudoso» seis cambios y los seis se devolvieron (`oficina-relevo:bitacora/limpieza.md`, nota 1). | Evaluator-optimizer, Anthropic [Fuente primaria] [enlace](https://www.anthropic.com/engineering/building-effective-agents). Separación de funciones, NIST SP 800-53 AC-5 [Visto solo en buscador]. |
| **A2 · Reglas fijadas antes** (data contract) | Las reglas del torneo se publican antes y no cambian mientras se juega. | `oficina-relevo:CONTRATO.md`, 11 criterios, un solo commit (`b1d5cfa`, 19/11/2026). | Open Data Contract Standard (ODCS) de Bitol [Fuente primaria] [GitHub](https://github.com/bitol-io/open-data-contract-standard). Harness de Anthropic: solo se cambia `passes` [Fuente primaria]. |
| **A3 · Devolver la pieza a la estación que falló** (targeted retry, reintento dirigido) | La pieza defectuosa vuelve a su estación con una nota, no al inicio de la línea. | Paso 6: si algo falla, vuelve a un Desarrollador nuevo con el plan, el diff y lo que falla. Paso 7: máximo 2 rondas de corrección con los mismos criterios (`oficina-relevo:proceso/ciclo.md`). En T15 la vuelta 2 revisó solo la ficha C3 (`t15-patrones/patrones.md` §2). | Prompt chaining con compuertas y condiciones de parada, Anthropic [Fuente primaria]. Reflexion [Fuente primaria] [repositorio](https://github.com/noahshinn/reflexion). |
| **A4 · Segunda opinión de un especialista** | Un experto revisa y propone; no decide. | Especialista en ingeniería de datos (T7): ocho propuestas en archivo aparte, sin tocar la tesis (`t01-tesis/ideas-ingenieria-datos.md`, commit `668a666`). Investigador de cada ciclo que propone técnicas (paso 3). | Subagentes de solo lectura de Claude Code [Fuente primaria] [docs](https://code.claude.com/docs/en/sub-agents). |
| **A5 · Equipo rojo** (red team) | Alguien ataca el sistema para encontrar fallas antes que el cliente. | Sin aplicación registrada en el cierre. | Red teaming con LLM, Perez et al., EMNLP 2022 [Visto solo en buscador]. |
| **A6 · Archivo de no resueltos** (dead-letter queue) | Lo que no se resuelve se guarda con su razón, no se bota. | `t15-patrones/archivo.md` (5 analogías con «qué faltaría para reabrirla»). Ramas de ciclo que se quedan como evidencia aunque se rechacen (`oficina-relevo:CLAUDE.md`). Sección «Se quitó y se devolvió» de `oficina-relevo:bitacora/limpieza.md`. | Dead-letter queue y redrive de Amazon SQS [Visto solo en buscador] (`t15-patrones/patrones.md` A6). |
| **A7 · Lista de verificación de cabina** (pre-flight checklist) | Antes de despegar se lee la lista; si algo falla, no se despega. | `oficina-relevo:tools/qa.mjs`: de 10 pruebas automáticas (CICLO-001) a 22 (CICLO-016), según `bitacora/ciclos.md`. `tools/integridad.mjs`: el Guardián de la memoria, chequeos M1 a M8. Los llama la rutina, no son hooks. | Hooks (ganchos) de Claude Code que bloquean con código de salida 2 [Fuente primaria] [docs](https://code.claude.com/docs/en/hooks). |

### Familia B · Exploración

| Técnica | Qué es para un equipo | Dónde se aplicó en el proyecto | Equivalente en la industria |
|---|---|---|---|
| **B1 · Viaje de aprendizaje** | Salir a ver cómo trabajan otros, aparte del trabajo diario. | El explorador (T13): 7 de 7 paradas y su informe de viaje (`t13-explorador/diario.md`, `informe-de-viaje.md`, commit `f40bd13`). | Exploración frente a explotación, March 1991 [Visto solo en buscador]. |
| **B2 · Radar de tecnología** | Ubicar cada tema por madurez y por adopción propia. | El aterrizador (T14): 9 conceptos con una vara fija (`t14-aterrizador/radar.md`, commit `628300d`). | LLM como juez con rúbrica, sistema de investigación multiagente de Anthropic [Fuente primaria] [enlace](https://www.anthropic.com/engineering/multi-agent-research-system). |
| **B3 · Bitácora** (memoria externa) | El diario que permite retomar donde se quedó. | `oficina-relevo:bitacora/ciclos.md` (una entrada por ciclo con el veredicto del QA) y ADR-006. | Structured note-taking (notas estructuradas fuera del contexto), Anthropic [Fuente primaria] [enlace](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). |
| **B4 · El analista que no opina sin datos** (abstención) | Si no hay datos suficientes, no se opina. | En El Taller, como regla de datos: «Una hora que no esté en git no se inventa: se queda la del plan» (`oficina-relevo:proceso/ciclo.md` paso 4) y las horas sin git quedaron registradas en H-010 (`bitacora/huecos.md`). La ventana que se ensancha vive en los loops de los equipos: **[confirmar con Hernán]**. | Abstención en LLM, Wen et al., TACL [Visto solo en buscador]. |

### Familia C · Memoria y coordinación

| Técnica | Qué es para un equipo | Dónde se aplicó en el proyecto | Equivalente en la industria |
|---|---|---|---|
| **C1 · Relevo con pizarra común** | Cada turno lee lo que dejó el anterior antes de empezar. | El Relevo de investigación: cada tarea abre con «Lo que leí de la pizarra» (`t01-tesis/tesis.md` §1, `t15-patrones/patrones.md` §1). Este Relevo de documentación: D02 leyó el esqueleto de D01. | Arquitectura de pizarra (blackboard), Hearsay-II [Visto solo en buscador]; versión con LLM, Han y Zhang [Visto solo en buscador]. |
| **C2 · Traspaso de turno** (handoff) | Quien llega revisa el estado antes de trabajar. | Cada ciclo lee la memoria (paso 1) y corre el Guardián y las pruebas sobre el tronco antes de tocar nada (paso 2, `oficina-relevo:proceso/ciclo.md`). | Harness de Anthropic: cada sesión lee progreso y git log y corre una prueba de punta a punta antes de trabajar [Fuente primaria]. |
| **C4 · Tablero kanban** | Cada quien toma la siguiente tarea libre. | Sin aplicación registrada: las tareas se asignaron por horario fijo, no por autoasignación. | Lista de tareas compartida de agent teams, Claude Code [Fuente primaria] [docs](https://code.claude.com/docs/en/agent-teams). |
| **C5 · Supervisor que recorre la oficina** | Alguien compara lo que debería estar hecho con lo que está. | T16, bucle de reconciliación sobre las 11 ramas (`t16-supervisor/estado-final.md`, commit `59c639a`). Supervisor de cada ciclo (paso 2). Con la salvedad de T01: en orden fijo es encadenamiento, no orquestador. | Orchestrator-workers, Anthropic [Fuente primaria]. |

### Familia D · Deliberación

| Técnica | Qué es para un equipo | Dónde se aplicó en el proyecto | Equivalente en la industria |
|---|---|---|---|
| **D1 · Abogado del diablo** | Alguien defiende la posición contraria para probar la idea. | Sin aplicación registrada. | Debate multiagente, Du et al., ICML 2023 [Visto solo en buscador]. |
| **D2 · Jurado de evaluadores independientes** | Varios jueces votan por separado. | Sin aplicación registrada: cada auditoría usó un solo auditor. | Self-consistency (autoconsistencia por voto), Wang et al. [Visto solo en buscador]; votación, Anthropic [Fuente primaria]. |

### Familia E · Gobierno

| Técnica | Qué es para un equipo | Dónde se aplicó en el proyecto | Equivalente en la industria |
|---|---|---|---|
| **E1 · Publica una persona** (human-in-the-loop, persona en el circuito) | Lo aprobado espera a una persona antes de salir. | En El Taller la persona decide las reglas, no cada publicación: «solo lo cambia Hernán» (`oficina-relevo:CONTRATO.md`). En este documento el render final lo hace Hernán en local (BRIEF §3). | Pausa en puntos de control para retroalimentación humana, Anthropic [Fuente primaria]; `interrupt()` de LangGraph [Visto solo en buscador]. |
| **E2 · Comité de cambios** | Las reglas cambian solo con aprobación y entre ciclos. | Un criterio que estorba se anota en `bitacora/restricciones.md` y lo decide Hernán (`oficina-relevo:CLAUDE.md`). Las decisiones de arquitectura van como ADR-001 a ADR-008 (`oficina-relevo:decisiones/`). | Plan approval (aprobación del plan) de agent teams, Claude Code [Fuente primaria], que por defecto se aprueba solo. |
| **E3 · Auditoría con rastro** (audit trail) | Cada decisión deja una huella que se puede seguir. | Cadena IDEA → ADR → CICLO → commits → versión → ficha (`oficina-relevo:CLAUDE.md`, sección Trazabilidad). Commits con prefijo `[CICLO-NNN]`. Chequeo M2 de IDs en `tools/integridad.mjs`. El rastro es por corrida, no por acción. | Convenciones de OpenTelemetry para agentes de IA generativa [Visto solo en buscador]. |

### Lo que se archivó
- **C3 · Postmortem sin culpables.** Rechazada dos veces: el mapeo no daba par a quien redacta ni a la relación «sin culpables» (`t15-patrones/archivo.md` §1).
- **Reunión diaria, pre-mortem, prueba A/B y cuaderno de laboratorio.** Descartadas antes del auditor por mapeo estructural o por duplicado (`t15-patrones/archivo.md` §2).
- **Dato curioso:** la retro de El Taller del 21/11 usó un pre-mortem del estado final como práctica humana (`oficina-relevo:retro/2026-11-21.md`; `bitacora/huecos.md` H-015). La técnica de agentes equivalente sigue sin fuente primaria.

### Lectura del catálogo
- **Aplicadas en el cierre:** 16 de 20 técnicas tienen ruta o commit en el Relevo o en El Taller; 15 completas y una en parte (B4).
- **Sin aplicación registrada:** A5, C4, D1 y D2.
- **Aplicada solo en parte:** B4, que en El Taller se aplica como regla de datos y cuya forma original, la ventana que se ensancha, depende de los loops de los equipos.
- **Uso en los equipos:** qué técnicas aplica cada equipo **[confirmar con Hernán]**.

---

## 1.5 El plano cartesiano: los equipos frente al proyecto del cierre

**[FIGURA F6 · cuadrante 2x2 con dos puntos por concepto · SVG]**
**[FIGURA F7 · mapa de calor concepto × (equipos, cierre), en el anexo]**

### Lectura general
El radar de T14 ubica 9 conceptos con dos ejes (`t14-aterrizador/radar.md` §2 y §3):
- **Madurez afuera:** consenso, práctica emergente o moda, con una vara fija.
- **Adopción aquí:** se habla, a medias, aplicado o «no sé: preguntar a Hernán».

El plano de este documento pone **dos puntos por concepto**: dónde están los equipos y dónde está el proyecto del cierre. Cada punto lleva su archivo o commit. La flecha entre los dos muestra el desplazamiento.

Hernán afirma que los equipos no han llegado a cuatro conceptos que el cierre sí implementa: observabilidad, guardrails (barandas), versionado de prompts y skills, y costo de tokens. En el radar de T14 esos cuatro quedaron como «No sé: preguntar a Hernán» del lado de los equipos (`t14-aterrizador/radar.md` §3).

D01 dejó la primera evidencia para el punto del cierre (`d01-arquitectura/esqueleto.md` §1.5). Lo que D02 confirmó con lo leído:
- **Guardrails:** el contrato de 11 criterios (`oficina-relevo:CONTRATO.md`) y las pruebas automáticas, que crecieron de 10 a 22 criterios (`oficina-relevo:bitacora/ciclos.md`).
- **Observabilidad por corrida:** una entrada por ciclo con el veredicto del QA (`oficina-relevo:bitacora/ciclos.md`).
- **Versionado de prompts y skills, a medias:** las instrucciones de las rutinas están versionadas en git (`oficina-relevo:proceso/*.md`), sin registro de qué versión produjo cada salida.
- **Costo de tokens:** **por confirmar** [confirmar con Hernán]. No se encontró una medición.

### Los dos puntos por concepto
Punto de los equipos: columna «Adopción aquí» de `t14-aterrizador/radar.md` §3. Punto del cierre: evidencia que D02 leyó; donde no la hay, se marca.

| Concepto | Madurez afuera (T14) | Equipos (T14) | Cierre | Evidencia del cierre |
|---|---|---|---|---|
| Evals (evaluaciones automáticas) | Consenso | A medias | A medias | QA ciego y `tools/qa.mjs` en cada ciclo; sin set de prueba que mida si el auditor acierta (`oficina-relevo:retro/2026-11-21.md`). |
| Harness (arnés del agente) | Consenso | Se habla | Aplicado | `oficina-relevo:CLAUDE.md`, `proceso/ciclo.md` y `tools/`. |
| Gobernanza de IA | Consenso | Se habla | A medias [Hipótesis de D02] | Contrato y ADR que solo cambia Hernán (`oficina-relevo:CONTRATO.md`, `decisiones/`); sin marco formal como NIST o ISO. |
| Context engineering (ingeniería de contexto) | Consenso | A medias | Aplicado [Hipótesis de D02] | Memoria que todo agente lee primero, en orden fijo (`oficina-relevo:decisiones/ADR-006-memoria-compartida.md`). |
| Observabilidad y trazas | Consenso | No sé: [confirmar con Hernán] | Aplicado por corrida, no por acción | `oficina-relevo:bitacora/ciclos.md`. |
| Presupuesto de tokens y costo | Consenso | No sé: [confirmar con Hernán] | [confirmar con Hernán] | No se encontró medición. |
| Guardrails (barandas) | Consenso | No sé: [confirmar con Hernán] | Aplicado | `oficina-relevo:CONTRATO.md`, `tools/qa.mjs`, `tools/integridad.mjs`. |
| Human-in-the-loop | Consenso | Aplicado | Aplicado sobre las reglas | `oficina-relevo:CONTRATO.md` («solo lo cambia Hernán»). |
| Versionado de prompts y skills | No cumple la vara | No sé: [confirmar con Hernán] | A medias | `oficina-relevo:proceso/*.md` con línea «Versión»; sin versión por salida. |

**Nota 1.** Reverts del 22/11 en El Taller: `48c77e5`, `bf4baef`, `a87abdf`, `3f18023`, `185a87a` y `fcee9a4`.

---

## Dónde está la innovación

1. **Una tesis con veredictos, no un eslogan.** El marco no dice «los loops son como la ingeniería de datos». Prueba cada par fila por fila y muestra los que no se sostienen: backfill no es ensanchar la ventana, y la bitácora no es linaje (`t01-tesis/tesis.md` §3). T01 no encontró a nadie en la industria (`t01-tesis/tesis.md` §4) que presente los loops con el vocabulario completo de la ingeniería de datos [Hipótesis de T01: «no encontrado» no es «no existe»].
2. **Un catálogo que se aplica a sí mismo.** Las 20 técnicas pasaron por un auditor ciego con criterio fijo y lo rechazado quedó archivado con su razón. El catálogo usa sus propias técnicas A1, A2 y A6 (`t15-patrones/patrones.md` §2, `archivo.md`).
3. **El marco tiene evidencia de uso.** De 20 técnicas, 16 tienen ruta o commit (una de ellas, B4, solo en parte) en los sistemas que construyeron el cierre. Muchas fichas que el 19/11 decían «sin ejemplo aún» se aplicaron después en El Taller: traspaso de turno, lista de verificación y rastro (`oficina-relevo:proceso/ciclo.md`, `tools/`, `CLAUDE.md`).
4. **El auditor sí rechaza.** El QA ciego de los ciclos aprobó siempre en la primera ronda, y la retro del 21/11 lo notó (`oficina-relevo:retro/2026-11-21.md`). Pero el auditor ciego del Code Janitor devolvió seis de los siete cambios que revisó el 22/11 (`oficina-relevo:bitacora/limpieza.md`: `e3ad398` «seguro», seis «dudoso»), y el de T15 rechazó la C3 dos veces. La separación de funciones produjo rechazos reales y registrados.
5. **Write-Audit-Publish con agentes.** El Taller aplica el patrón de los lakehouses con ramas de git, y la puerta humana se mueve de cada publicación a las reglas (ADR-005; `CONTRATO.md`).

---

## Auditor ciego: veredicto y cambios

**Cómo se hizo.** Un subagente nuevo, que no vio el proceso de D02, recibió solo `BRIEF.md` y este archivo. Juzgó cinco criterios: fuentes, datos inventados, decisiones de Hernán, innovación visible y claridad ejecutiva.

**Veredicto: rechazado en la primera revisión.**
- Fuentes: cumple con observaciones.
- Datos inventados: no cumple, por un conteo que no cuadraba con su tabla («seis» pares nuevos cuando la tabla marca siete) y tres cifras sin fuente a la vista.
- Decisiones de Hernán: cumple con observaciones.
- Innovación visible: cumple.
- Claridad: cumple con observaciones.

El auditor contó por su cuenta y confirmó: 20 técnicas (7, 4, 4, 2 y 3 por familia), 16 con ruta o commit, 4 sin aplicación, 21 fichas revisadas y 5 analogías archivadas.

**Qué cambió D02:**
1. «Seis son nuevos» pasó a «Siete son nuevos», como dice la tabla.
2. Los siete cambios del Code Janitor ahora citan `bitacora/limpieza.md` (uno «seguro» y seis «dudoso»). Los hashes de los reverts pasaron a la nota 1.
3. Las bases leídas declaran `decisiones/` completo (ADR-001 a ADR-008).
4. Las fechas del cierre citan sus commits (`c7979e6`, `b1d5cfa`) y aclaran que las rutinas de El Taller siguen programadas hasta el 26/11.
5. El objetivo del proyecto ya no se afirma sin fuente: se cita la definición del BRIEF y el resto va «[confirmar con Hernán]».
6. Se agregaron las secciones de `tesis.md` §4 y `radar.md` §3 donde faltaban.
7. El reparto con D03 quedó explicado en las bases, y se quitaron de las figuras las notas de quién las entrega.
8. La sección 1.5 trae ahora los dos puntos de los 9 conceptos, cada uno con evidencia, con «[confirmar con Hernán]» o con «[Hipótesis de D02]».
9. El tope de 3 vueltas se atribuye a T01 y el de 2 rondas a El Taller.
10. Se agregó un glosario de primera aparición y se tradujeron asset check, hooks, self-consistency y plan approval.
11. La celda A7 se partió en frases cortas.

No se volvió a auditar: las correcciones siguen la lista del auditor sin cambiar el criterio.
