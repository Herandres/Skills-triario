# D06 · Base de la Parte 2: los loops construidos con los equipos

Rama: `claude/doc-le-d06-equipos` · Fecha: 2026-11-23 · Brief: `documento/cierre-loop-engineering/BRIEF.md`.

**Tarea D06: agente especialista de la Parte 2 leyó la investigación y, tomando como base la evidencia de T06, los patrones de T15, el radar de T14, el esqueleto de D01 y los entregables del repositorio, propone la base de la Parte 2 (una ficha por equipo con flujo, árbol y proceso) para que Hernán la defina.**

**Esta parte se define con Hernán** (BRIEF §3). Este archivo no la escribe por él: ordena lo que ya tiene evidencia y deja a la vista, con «[confirmar con Hernán]», todo lo que no la tiene. Las preguntas que la completan están en `preguntas-parte2.md` (P1 a P10) y la ficha que se llenará con las respuestas, en `plantilla-caso.md`.

Sellos: [Fuente primaria] (archivo o commit del proyecto, o fuente externa abierta por T01 a T16 con ese sello) · [Fuente secundaria] · [Visto solo en buscador] · [Hipótesis] (deducción de D06). **Toda ruta interna citada sin sello explícito es [Fuente primaria].** Las rutas cortas (`t06-evidencia/...`) son de `investigacion/cierre-loop-engineering/` en `Herandres/Skills-triario`, rama `claude/doc-le-base`. «[hecho interno]» es un hecho que Hernán dio como contexto del encargo a T06 y T15 (`t06-evidencia/evidencia.md` §3, encabezado); se cita así, no como fuente externa.

---

## 1. Lo que leí de la pizarra

Comandos: `git fetch origin --prune`, `git branch -r | grep doc-le-d`, `git show <rama>:<ruta>`. Ramas encontradas: `doc-le-d01-arquitectura`, `d02-marco`, `d03-radar`, `d04-sistema`, `d05-figuras`.

| Archivo (rama) | Qué tomé |
|---|---|
| `d01-arquitectura/esqueleto.md` (`claude/doc-le-d01-arquitectura`) | El molde de la Parte 2: fichas 2.1 a 2.4, una por equipo (flujo, árbol, proceso) y 2.5 «Desempeño contra el criterio». La advertencia clave: **ningún archivo de la investigación dice qué caso de T06 pertenece a qué equipo**. |
| `d01-arquitectura/datos-faltantes.md` (misma rama) | DF-03, DF-05 a DF-10 y DF-13: los datos de la Parte 2 que solo Hernán puede dar. Las preguntas de este relevo los ordenan y los cierran (ver `preguntas-parte2.md`, columna «Cierra»). |
| `d02-marco/parte1.md` (`claude/doc-le-d02-marco`) | El par «megaagente ↔ orquestador» de T01 fila 1 y la marca «[confirmar con Hernán]» sobre el orden fijo de las skills (líneas 80 y 127). |
| `d03-radar/radar.md` (`claude/doc-le-d03-radar`) | El punto de los equipos en el radar sale de `t14-aterrizador/radar.md` §3, armado con el contexto del encargo y no con registros de los equipos (línea 22). Lo respeto: la Parte 2 no mueve ningún punto del radar. |
| `d04-sistema/parte3.md`, `d05-figuras/README.md` | Solo para no repetir: la Parte 3 cuenta El Relevo y El Taller; las figuras de D05 no cubren a los equipos. Las figuras de esta parte se especifican en §5. |

---

## 2. Qué dice la evidencia sobre los equipos

### 2.1 Lo que sí está escrito

1. **Hay cuatro equipos con megaagente:** Implementaciones, dos células de marketing y Web. [hecho interno] (`t06-evidencia/evidencia.md` Caso 6; `t02-cierre/estandares.md` §3.1 punto 4 y §3.2 lámina 8; `t05-deck/deck.md` lámina 4). Los nombres **GDO MKT1, GDO MKT2 y GDO Web** vienen del BRIEF §3; en la investigación solo aparece «dos células de marketing» y «Web». Que MKT1 y MKT2 sean esas dos células, y qué significa GDO, es [confirmar con Hernán] (P1).
2. **El árbol común:** cada equipo tiene un repositorio con CLAUDE.md (archivo de memoria que carga cada sesión), skills (habilidades: instrucciones reutilizables), agentes y «algún hook» (gancho de control que corre antes o después de una acción). [hecho interno] (`t06-evidencia/evidencia.md` Caso 6; `t15-patrones/patrones.md` A7, línea 214, y B3, línea 278: «los repos de los cuatro equipos tienen CLAUDE.md, que cada sesión carga»). **Límite declarado:** no se sabe qué hook está en qué repo ni qué verifica; no se presenta como práctica general (`t06-evidencia/evidencia.md` Caso 6; `t05-deck/deck.md` lámina 4).
3. **Cinco loops descritos como hechos internos**, sin equipo asignado (`t06-evidencia/evidencia.md` §3, Casos 1 a 5; `t15-patrones/patrones.md`):

| ID D06 | Loop o mecanismo | Qué hace | Patrón T15 | Fuente |
|---|---|---|---|---|
| L1 | Generador y auditor ciego con contrato fijo | El auditor corre en un subagente aparte que solo recibe la salida. Con el criterio movido a mitad no cerró en 3 vueltas; con el contrato fijo desde el inicio aprobó en la primera. | A1, A2 | Caso 1; `patrones.md` líneas 92 y 112 |
| L2 | Reintento acotado y archivo | El reintento vuelve a la capa que falló, máximo 3 vueltas; lo que no pasa se archiva como «sin recomendación defendible». | A3, A6 | Caso 2; `patrones.md` líneas 133 y 194 |
| L3 | Abstención por volumen | Antes de recomendar ensancha la ventana (ayer, 3 días, una semana, dos semanas); si no hay volumen, se calla. | B4 | Caso 3; `patrones.md` línea 298 |
| L4 | Loop de contenido | Para en «listo para publicar»; publica una persona. Es la única «Fortaleza» del radar en los equipos. | E1 | Caso 4; `patrones.md` línea 443; `t14-aterrizador/fichas/human-in-the-loop.md` |
| L5 | Loop de ciclo largo | Mide un resultado a 30 días con bitácora y línea base. | B1, B3 | Caso 5; `patrones.md` líneas 238 y 278 |

4. **Cómo orquesta el megaagente:** «llama las skills en orden y decide si hay otra vuelta» (`t01-tesis/tesis.md` §3 fila 1). T01 advierte que, si el orden es fijo, el patrón se llama prompt chaining (encadenamiento de pasos), no orchestrator-workers (orquestador con trabajadores). Cuál de los dos es, por equipo: [confirmar con Hernán] (P4; DF-13).
5. **Comparación externa:** T13 vio en Itaú un «orquestador con especialistas, pruebas automáticas y validación humana» y lo marcó **Sí, parecido a nuestros megaagentes con auditor y persona al final** (`t13-explorador/diario.md` línea 114) [Fuente secundaria, solo buscador] (sello de la fuente en `t13-explorador/diario.md` línea 101; HR-008 de `t16-supervisor/huecos.md`). También marcó que los repos con CLAUDE.md y skills «son para quien programa» [Hipótesis de T13].

### 2.2 Lo que no está escrito

- Qué loop (L1 a L5) construyó cada equipo. Ningún archivo lo dice (`d01-arquitectura/esqueleto.md` Parte 2; DF-05).
- Nombres y accesos de los repositorios de los equipos (DF-06), personas de cada célula y crédito de cada regla (DF-10).
- Cualquier número: adopción, piezas por vuelta, archivadas, abstenciones, devoluciones, tiempo de ciclo, resultado a 30 días (DF-07 a DF-09). T06 los dejó como marcadores; aquí siguen siendo marcadores.
- Hitos e historias de usuario (HU) de ClickUp, el informe del 04/11/2026 y las reuniones de Fathom (BRIEF §4).

### 2.3 Antecedentes en el repositorio (fuera del periodo, para que Hernán decida)

El repositorio `Herandres/Skills-triario` tiene entregables de Hernán que nombran a dos de los equipos. **Están fechados en junio de 2026, antes del proyecto** (septiembre a noviembre de 2026, BRIEF §1), y su único commit (registro de cambio en git) visible en la rama base es `2ba7557` del 2026-07-05. No prueban que sean los loops de la Parte 2. Los listo porque el BRIEF pide usar «los entregables, con su ruta», y el alcance es solo el proyecto: si entran, entran como antecedente (P3).

| Entregable | Qué dice de sí mismo | Equipo que nombra | Rasgos de loop que ya tiene | Ruta |
|---|---|---|---|---|
| WEB-08 · Gestión de Feedback Web, v1.4 | «Servicio: Desarrollo Web», «Junio 2026», «Responsable: Hernán». Convierte feedback del cliente en tareas de ClickUp sin duplicados (doble búsqueda en el backlog, o lista de pendientes, y en el sprint, o iteración corta) y, en MODO 2, verifica la entrega antes de notificar al cliente. Construido desde REP-03. Validado el 02/06/2026 con una transcripción de Fathom. | «El equipo Web» | Confirmación explícita antes de escribir en ClickUp (persona en la puerta, E1); «MODO 2: loop de verificación de entrega»; versiones v0.1 a v1.4 con la causa de cada cambio | `kit-construccion-agentes/gestion-feedback-cliente-web/gestion-feedback-cliente-web_documentacion.md` |
| Kit Loop Marketing | «Kit de Skills IA — el equipo de marketing digital», 26 skills por fases del servicio (AI Discovery, Sprint Loop, Express, Tailor, Amplify, Evolve, operación mensual y trimestral). Documentación «v1.0 · Junio 2026». | «el equipo de marketing digital» (no dice MKT1 ni MKT2; los «MKT-0NN» del documento son IDs de procesos, no de equipos) | «Human in the loop» escrito como regla en varias skills: el Estratega ejecutivo aprueba antes de ejecutar (`ab-testing.md`, `campaign-assets/prompt.md`, `experimentation/prompt.md`, `reporting/prompt.md`) | `marketing-skills/DOC_Skills_Loop_Marketing.md`; `marketing-skills/loop-marketing-skills/` |
| Implementaciones | No encontré un entregable que nombre al equipo de Implementaciones. | (sin dato) | (sin dato) | (sin dato) |

---

## 3. Las cuatro fichas (molde común)

Cada ficha tiene la misma forma, la de `d01-arquitectura/esqueleto.md` §2.1 a 2.4: **loop o megaagente**, **flujo**, **árbol de documentos**, **proceso** y **qué piezas de la tesis tiene**. Las piezas de la tesis son las cinco de la definición de T01 (`t01-tesis/tesis.md` §5; `t15-patrones/patrones.md` §1): contrato fijo (A2), revisor que no hizo el trabajo (A1), reintento con tope (A3), archivo de lo que no pasa (A6) y persona en la puerta (E1).

### 3.0 Lo que comparten las cuatro (con evidencia)

**Árbol de documentos común** [hecho interno, `t06-evidencia/evidencia.md` Caso 6]. Los nombres de las carpetas son [Hipótesis] de D06 según la convención de Claude Code; los reales, [confirmar con Hernán] (P5):

```
<repo del equipo>            [nombre: confirmar con Hernán]
├── CLAUDE.md                 memoria que carga cada sesión (T15 B3)
├── skills/                   las skills que el megaagente llama
├── agentes/                  el megaagente y, si existe, el auditor en subagente aparte
└── hooks/                    «algún hook», solo en algún repo (T15 A7: sin ejemplo aún)
```

**Flujo de referencia** (la tubería de T01, no el flujo de un equipo):

```
insumo → megaagente llama skills (orden fijo o decidido: P4) → salida
       → auditor ciego con contrato fijo → aprueba → «listo para publicar» → persona publica
                                         → rechaza → vuelve a la capa que falló (máx. 3)
                                                   → tras 3 vueltas: archivo «sin recomendación defendible»
```

Fuente: `t01-tesis/tesis.md` §3 filas 1 a 5 y 8; `t06-evidencia/evidencia.md` Casos 1, 2 y 4. Qué equipo tiene la tubería completa y cuál solo partes: [confirmar con Hernán] (P2).

**Proceso de referencia** (carriles): Persona del equipo (pide y recibe) · Megaagente (genera) · Auditor ciego (aprueba o devuelve) · Persona que publica (decide). Los nombres de las personas por equipo: [confirmar con Hernán] (P7).

### 3.1 GDO · MKT1

| Campo | Contenido | Fuente o marca |
|---|---|---|
| Qué es | Una de las «dos células de marketing» con megaagente | [hecho interno] `t06-evidencia/evidencia.md` Caso 6; equivalencia MKT1 = célula: [confirmar con Hernán] (P1) |
| Loop o megaagente | [confirmar con Hernán] (P2). Ningún archivo asigna L1 a L5 a esta célula. | DF-05 |
| Flujo | [confirmar con Hernán]. Se dibuja sobre el flujo de referencia de §3.0, marcando qué pasos existen. | (sin dato) |
| Árbol | Repo con CLAUDE.md, skills, agentes; hook sí o no: [confirmar con Hernán] (P5) | Caso 6 |
| Proceso | [confirmar con Hernán] (P7) | (sin dato) |
| Antecedente posible | Kit Loop Marketing (junio de 2026), sin saber si lo usa MKT1, MKT2 o ambas (P3) | `marketing-skills/DOC_Skills_Loop_Marketing.md` |
| Piezas de la tesis | A2 [ ] · A1 [ ] · A3 [ ] · A6 [ ] · E1 [ ]: [confirmar con Hernán] (P2) | (sin dato) |

### 3.2 GDO · MKT2

| Campo | Contenido | Fuente o marca |
|---|---|---|
| Qué es | La otra de las «dos células de marketing» | Igual que MKT1 (P1) |
| Loop o megaagente | [confirmar con Hernán] (P2) | DF-05 |
| Flujo | [confirmar con Hernán] | (sin dato) |
| Árbol | Repo con CLAUDE.md, skills, agentes; hook: [confirmar con Hernán] (P5) | Caso 6 |
| Proceso | [confirmar con Hernán] (P7) | (sin dato) |
| Antecedente posible | Kit Loop Marketing (P3) | `marketing-skills/loop-marketing-skills/` |
| Piezas de la tesis | [confirmar con Hernán] (P2) | (sin dato) |

**Nota de diseño para MKT1 y MKT2** [Hipótesis]: si las dos células usan el mismo kit con loops distintos, la ficha más fuerte es una comparación lado a lado (mismo kit, dos tuberías), al estilo de las dos corridas de `t04-mostrar-loop/innovacion.md` Idea 3. Solo si P2 lo confirma.

### 3.3 GDO · Web

| Campo | Contenido | Fuente o marca |
|---|---|---|
| Qué es | Equipo Web con megaagente | [hecho interno] Caso 6 |
| Loop o megaagente | [confirmar con Hernán] (P2) | DF-05 |
| Flujo | Si P3 confirma WEB-08 como base: feedback del cliente (correo, Fathom, texto o documento) → extracción de ítems → cruce con ClickUp (backlog y sprint activo) → clasificación CREAR, ACTUALIZAR, AMBIGUO, SOLO REGISTRO → confirmación explícita de la persona → escritura en ClickUp → MODO 2: verificación de entrega → notificación al cliente o reporte de pendientes. **Si no se confirma, el flujo es [confirmar con Hernán].** | `kit-construccion-agentes/gestion-feedback-cliente-web/gestion-feedback-cliente-web_documentacion.md` (junio de 2026) |
| Árbol | Repo con CLAUDE.md, skills, agentes; hook: [confirmar con Hernán] (P5). WEB-08 en junio vivía como Proyecto de Claude.ai («Project Instructions → WEB-08_skill_prompt.md»), no como repo. | misma ruta, línea 102 |
| Proceso | [confirmar con Hernán] (P7) | (sin dato) |
| Piezas de la tesis | Si WEB-08 es la base: E1 sí (nada se escribe sin confirmación). A1, A2, A3, A6: no aparecen en el documento de WEB-08. [confirmar con Hernán] | misma ruta |

### 3.4 Implementaciones

| Campo | Contenido | Fuente o marca |
|---|---|---|
| Qué es | Equipo de Implementaciones con megaagente | [hecho interno] Caso 6 |
| Loop o megaagente | [confirmar con Hernán] (P2). No hay entregable en el repositorio que nombre al equipo. | (sin dato) |
| Flujo | [confirmar con Hernán] | (sin dato) |
| Árbol | Repo con CLAUDE.md, skills, agentes; hook: [confirmar con Hernán] (P5) | Caso 6 |
| Proceso | [confirmar con Hernán] (P7). T14 sugiere nombrar qué acciones del megaagente son irreversibles (cambiar datos de un cliente) y dónde está la persona [Hipótesis de T14]. | `t14-aterrizador/fichas/human-in-the-loop.md` |
| Piezas de la tesis | [confirmar con Hernán] (P2) | (sin dato) |

---

## 4. Desempeño contra el criterio (2.5)

La tabla de `t06-evidencia/evidencia.md` §2.3: una fila por caso, en pasado, con «lo hice yo» y «lo hicimos» separados. **Todas las celdas de resultado siguen vacías**: no hay ningún número de los equipos en la investigación.

| Caso | Equipo | Acción propia | Acción del equipo | Resultado | Evidencia | Patrón |
|---|---|---|---|---|---|---|
| L1 Contrato fijo | [P2] | [P8] | [P8] | Criterio móvil: no cerró en 3 vueltas; contrato fijo: primera vuelta [hecho interno]. Corridas comparadas: [P6] | [P6] | A1, A2 |
| L2 Reintento y archivo | [P2] | [P8] | [P8] | Piezas por vuelta y archivadas: [P6] | [P6] | A3, A6 |
| L3 Abstención | [P2] | [P8] | [P8] | Veces que se calló: [P6] | [P6] | B4 |
| L4 Contenido | [P2] | [P8] | [P8] | Piezas listas, devueltas y causa: [P6] | [P6] | E1 |
| L5 Ciclo de 30 días | [P2] | [P8] | [P8] | Línea base y resultado: [P6] | [P6] | B1, B3 |
| Habilitación (Caso 6) | Los cuatro | [P8] | [P8] | Adopción por equipo: [P9] | [P5, P9] | C5 |

Regla heredada de T06 §2.3: el número que no exista se escribe «no medido»; nunca se estima.

---

## 5. Figuras propuestas (especificación, sin render)

Siguen el esqueleto de D01 (§2.1 a 2.4) y la paleta Triario del BRIEF §3. Solo se dibujan con las respuestas de Hernán; mientras tanto no se entrega ningún JSON, para no dibujar un flujo inventado.

| Figura | Tipo | Herramienta | Contenido | Dato que la habilita |
|---|---|---|---|---|
| F-D06-1 | Flujo del loop por equipo | Archify `workflow` (flujo) (schema v2, como `insumos/ciclo-taller.workflow.json`) | Los pasos del flujo de referencia que el equipo sí tiene; los que no, en gris | Con P2 y P4 |
| F-D06-2 | Árbol del repo por equipo | SVG | CLAUDE.md, skills, agentes, hooks con su conteo real | Con P5 |
| F-D06-3 | Carriles del proceso | Archify `workflow` con `lanes` (carriles) | Persona del equipo · megaagente · auditor · persona que publica | Con P7 |
| F-D06-4 | Matriz equipo × pieza de la tesis | SVG (matriz de trazabilidad) | 4 equipos × 5 piezas (A2, A1, A3, A6, E1); celda con ruta o vacía | Con P2 |

---

## 6. Dónde está la innovación

1. **El mismo molde y el mismo examen para cuatro equipos.** Cada equipo se mide contra las cinco piezas de la tesis de T01 con los patrones de T15 (matriz F-D06-4). Lo nuevo no es tener agentes: es que cada loop se puede leer como una tubería con contrato, auditor, tope, archivo y persona, y ver de un vistazo qué pieza le falta (`d01-arquitectura/esqueleto.md` Parte 2, «Innovación»).
2. **El loop vive como sistema en un repositorio, no como prompt.** CLAUDE.md, skills, agentes y hooks por equipo [hecho interno, Caso 6]. El antecedente de junio de 2026 lo muestra en pequeño (fuera del periodo del proyecto; entra solo si P3 lo confirma): WEB-08 pasó de v0.1 a v1.4 con la causa de cada versión escrita, y nada se escribe en ClickUp sin confirmación humana (`gestion-feedback-cliente-web_documentacion.md`).
3. **La evidencia más fuerte de la parte es interna y contrafactual:** la misma tubería con criterio móvil no cerró en 3 vueltas y con contrato fijo aprobó en la primera (`t06-evidencia/evidencia.md` Caso 1; segundo lugar en el orden de peso de §2.2). Falta el registro de las corridas (P6).
4. **La parte aplica a sí misma la regla de abstención (B4).** Donde no hay registro, la ficha lo dice en vez de rellenar. Es la misma conducta que se le pide al loop.
5. **Frente a la industria:** el explorador encontró en Itaú una arquitectura parecida (orquestador, especialistas, validación humana) y la marcó «Sí, parecido» (`t13-explorador/diario.md` línea 114) [Fuente secundaria, solo buscador]. El aporte de la Parte 2 sería mostrarlo con repositorio y bitácora propios, cosa que la fuente externa no permitió verificar.

---

## 7. Veredicto del auditor ciego y lo que cambié

Auditor: subagente nuevo que recibió solo `BRIEF.md` y los tres entregables de D06, con permiso de abrir las rutas citadas para verificarlas. Una vuelta. Revisó 12 citas al azar; 11 fieles.

| Criterio | Veredicto |
|---|---|
| a) Fuentes en cada afirmación | Cumple con ajuste: el sello de Itaú estaba mal atribuido y una línea citada estaba corrida |
| b) Datos inventados | Cumple: ninguna asignación equipo-loop, cifras como marcadores, nombres de carpetas marcados [Hipótesis] |
| c) Decisiones de Hernán | Cumple con ajuste: términos en inglés sin traducir; una columna de §5 se leía como pendiente |
| d) Innovación visible | Cumple, con el reparo de que WEB-08 es de antes del periodo |
| e) Claridad de las preguntas | Cumple con ajuste: P1 eran dos preguntas, P3 tenía opciones que se solapaban y el criterio de orden era doble |

**Lo que cambié:**
1. Itaú pasa a [Fuente secundaria, solo buscador], el sello que le da `t13-explorador/diario.md` línea 101 (§2.1 punto 5 y §6 punto 5).
2. La cita de «Project Instructions» de WEB-08 pasa de la línea 101 a la 102.
3. §6 punto 2 dice ahora que WEB-08 es antecedente de junio de 2026, fuera del periodo, y que entra solo si P3 lo confirma.
4. Términos traducidos la primera vez: hook, skills, backlog, sprint, commit, workflow, lanes; HU desplegado como historias de usuario. También en P4, P5 y en `plantilla-caso.md` (prompt chaining, orchestrator-workers).
5. §5: la columna «Cuándo se puede hacer» pasa a «Dato que la habilita».
6. P1 queda como una sola pregunta cerrada; el significado de GDO va como dato aparte en la misma fila.
7. P3 se rehízo con opciones excluyentes por entregable.
8. El orden de las preguntas queda declarado como «por importancia» en el encabezado y en la sección de innovación.
