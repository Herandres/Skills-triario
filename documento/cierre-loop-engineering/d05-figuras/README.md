# D05 · Figuras del documento de cierre

**Tarea D05: agente especialista de figuras leyó la investigación, la pizarra del Relevo de documentación (D01 a D04) y la memoria de El Taller y, tomando como base lo siguiente, propone las 10 figuras del documento: 8 nuevas (4 especificaciones de Archify y 4 SVG) y 2 que ya existían y solo se referencian.**

Rama: `claude/doc-le-d05-figuras` · Fecha: 23/11/2026 · Brief: `documento/cierre-loop-engineering/BRIEF.md`.

## Bases leídas

- **Pizarra:** `d01-arquitectura/esqueleto.md` (catálogo de figuras F1 a F18 y reparto: «D05 figuras: todas las figuras; anexos D y E»), `d02-marco/parte1.md`, `d03-radar/radar.md`, `radar.json` y `radar.svg`, `d04-sistema/parte3.md`, `conteo-agentes.md` y `linea-de-tiempo.md`, leídos con `git show origin/claude/doc-le-dNN-*:<ruta>`.
- **Investigación:** `investigacion/cierre-loop-engineering/t01-tesis/tesis.md` §3 y §5; `t16-supervisor/estado-final.md`; `t13-explorador/informe-de-viaje.md` (índice).
- **El Taller:** `Herandres/oficina-relevo`, rama `claude/taller`, solo lectura, corte en `d24488d` («[CICLO-022] Memoria», 23/11/2026 12:59 UTC): `estado.json`, `bitacora/ciclos.md` completa, `proceso/ciclo.md`, `proceso/retro.md`, `proceso/limpieza.md`, `decisiones/ADR-004-isometrico-por-capas.md` y `git log origin/claude/taller`.
- **Insumos:** `insumos/ciclo-taller.workflow.json` (esquema de referencia) e `insumos/evolucion-oficina/README.md`.

## Cómo leer las fuentes

- Sellos: [Fuente primaria] · [Fuente secundaria] · [Visto solo en buscador] · [Hipótesis]. **Toda ruta interna o commit citado sin sello es [Fuente primaria].** Las fuentes externas conservan el sello que les puso la investigación de origen; D05 no abrió páginas web.
- Rutas sin prefijo: `Herandres/Skills-triario`, dentro de `documento/cierre-loop-engineering/` o de `investigacion/cierre-loop-engineering/` según el caso. Rutas de El Taller: `oficina-relevo:<ruta>`.
- Paleta (BRIEF §3): rojo `#EF2222`, ciruela `#361133`, azul `#534DFF`, amarillo `#F8D53C`, texto `#1E0C21`, fondo claro `#FFFFFF`. Los SVG usan además gris `#6B5E6E` para notas y tintes de la ciruela para la escala del mapa de calor y de la escalera, y el tinte azul `#DCDBFF` para la columna «Madurez afuera» del mapa de calor. Las especificaciones de Archify no fijan colores: la piel Triario se aplica en el render local.

## La lista de figuras

| N.º | Título | Tipo | Sección (índice de D01) | Fuente de los datos | Archivo |
|---|---|---|---|---|---|
| 1 | El Relevo de investigación: arquitectura | Arquitectura en carriles (vista de contenedores) | 3.1 | `t16-supervisor/estado-final.md` (`59c639a`); `t14-aterrizador/fichas/archivo.md`; `t15-patrones/patrones.md` §2 y C1; `t15-patrones/archivo.md`; `d04-sistema/parte3.md` §3.1; `d04-sistema/linea-de-tiempo.md` | `fig-01-arquitectura-relevo.archify.json` |
| 2 | La tesis: un loop como tubería medallón | Carriles (flujo de datos con retorno) | 1.2 (F3 de D01) y resumen ejecutivo | `t01-tesis/tesis.md` §3 filas 1 a 10 y §5; BRIEF §2 eje 1 | `fig-02-tuberia-medallon.archify.json` |
| 3 | Un ciclo real: CICLO-010, luces de noche | Secuencia de un ciclo real, dibujada como flujo en carriles (un carril por participante) | 3.2 | `oficina-relevo:bitacora/ciclos.md` entrada CICLO-010; `proceso/ciclo.md` pasos 2 a 8; `git log` (`9c59509`, `3a6f601`) | `fig-03-secuencia-ciclo-010.archify.json` |
| 4 | El Taller: estados de un ciclo frente al tronco | Máquina de estados de los modos del ciclo, en carriles | 3.2 (F13 de D01) | `oficina-relevo:proceso/ciclo.md` pasos 2, 7, 8 y 9; `estado.json`; `bitacora/ciclos.md` | `fig-04-estados-del-tronco.archify.json` |
| 5 | Matriz de trazabilidad IDEA → ADR → CICLO → commit → vN → técnica | Matriz de trazabilidad | Anexo A (F18 de D01) y 3.2 | `oficina-relevo:bitacora/ciclos.md` (CICLO-001 a 022); `git log origin/claude/taller --grep "Integra"`; `CLAUDE.md` «Trazabilidad» | `fig-05-matriz-trazabilidad.svg` |
| 6 | Mapa de calor: los equipos frente al proyecto del cierre | Mapa de calor | 1.5, anexo (F7 de D01) | `d03-radar/radar.json` y `radar.md` (tabla de evidencias); `t14-aterrizador/radar.md` §2 y §3 | `fig-06-mapa-calor-adopcion.svg` |
| 7 | La oficina sube por las 7 capas de ADR-004 | Modelo de madurez (escalera por capas) | 3.4 | `oficina-relevo:decisiones/ADR-004-isometrico-por-capas.md`; `bitacora/ciclos.md`; `git log`; `insumos/evolucion-oficina/README.md`; `estado.json` (`modo_visual`) | `fig-07-escalera-capas-oficina.svg` |
| 8 | Tres sistemas de agentes, un registro: git | Línea de tiempo en carriles | 3.1 y 3.5 (F11 de D01) | `d04-sistema/linea-de-tiempo.md`; `t16-supervisor/estado-final.md` «Horas reales»; `git log` de `origin/claude/doc-le-d0*` | `fig-08-linea-tiempo-carriles.svg` |
| 9 | El Taller: un ciclo de mejora | Carriles | 3.2 (F12 de D01) | Ya existe; no se repite | `insumos/ciclo-taller.workflow.json` |
| 10 | El plano cartesiano: dos puntos por concepto | Cuadrante 2x2 | 1.5 (F6 de D01) | Ya existe, hecho por D03; no se repite | `d03-radar/radar.svg` |

## Qué muestra cada figura y de dónde sale cada dato

### Figura 1 · Arquitectura del Relevo de investigación
- **Nodos y fuente.** Canario `cierre-le-prueba` (`6e87ea4`, HR-006). Pizarra = ramas `claude/cierre-le-*` (`t15-patrones/patrones.md` C1). 8 investigaciones T1 a T6, T14 y T15, 6 especialistas T7 a T12, explorador T13 con 7 paradas cada 4 horas y supervisor T16 (tabla «Las 16 tareas» de `estado-final.md`). Auditor ciego en 2 vueltas en T14 y T15 (`t14-aterrizador/fichas/archivo.md`; `t15-patrones/patrones.md` §2). Archivo con la C3 rechazada dos veces (`t15-patrones/archivo.md`). Unificación de Hernán el 22/11 (`ecbd905` a `444d094`, `d04-sistema/linea-de-tiempo.md`). Relevo de documentación D01 a D07 (BRIEF y ramas `claude/doc-le-d*`).
- **Cifras de las tarjetas.** T14: 6 de 9 y 3 de 3; T15: 21 fichas, 20 aprobadas (`d04-sistema/parte3.md` §3.1). Del canario al estado final: 27 h 1 min (`d04-sistema/linea-de-tiempo.md`, «Duraciones medidas»). «0 rescates» y «16 de 16»: `estado-final.md`.
- **Aristas.** La pizarra se lee y se escribe: cada tarea lee las ramas anteriores y escribe solo en la suya; los especialistas dejan su `ideas-*.md` en la rama de la tarea que apoyan (`estado-final.md`, nota bajo «Las 16 tareas»). «19 minutos antes de T1»: canario `6e87ea4` a las 18:15 UTC y T1 `c7979e6` a las 18:34 UTC (`d04-sistema/linea-de-tiempo.md`). «doc-le-base»: rama donde Hernán publicó el BRIEF y la investigación unificada (`28534c2`, 23/11 01:37 UTC, `git log origin/claude/doc-le-base`).
- **Vistas:** pizarra en git, revisión ciega, canario y supervisor.

### Figura 2 · La tubería medallón
- Bronce (insumo crudo), plata (borrador aprobado por el auditor) y oro («listo para publicar») son la fila 9 de T01, veredicto **Nueva**; la definición de Databricks va [Visto solo en buscador] como la dejó T01.
- Cada control lleva su par de ingeniería de datos y su fila de T01: etapas en orden = prompt chaining o encadenamiento de prompts (fila 1); contrato fijo ↔ data contract (fila 2); auditor ciego ↔ prueba de calidad independiente (fila 3); reintento ↔ bounded retries, que vuelve **a la capa que falló con la crítica** (fila 4); archivada ↔ dead-letter queue o cola de fallidos (fila 5); persona ↔ approval gate o puerta de aprobación (fila 8).
- La tarjeta «Veredictos de T01» copia los veredictos de `t01-tesis/tesis.md` §3: filas 2, 3, 4 y 5 «Se sostiene con ajuste»; fila 9 «Nueva», con la definición de Databricks [Visto solo en buscador]; y las dos filas que no se sostienen tal cual: backfill o relleno histórico no es ensanchar la ventana (fila 6, «No se sostiene así») y la bitácora se parte en 7a observabilidad y 7b linaje (fila 7). La fila 8 (puerta de aprobación) dice «Se sostiene».

### Figura 3 · Secuencia de un ciclo con auditor ciego y retorno
- Se dibuja un ciclo real y no uno genérico, porque el genérico ya está en `insumos/ciclo-taller.workflow.json`. Se eligió CICLO-010 porque es el **único** ciclo con retorno a la capa que falló: la primera versión medía 1,3× a 1,44× del tiempo de v9 sobre un límite de 1,3× y volvió a un Desarrollador nuevo, que lo resolvió con un velo precalculado (`oficina-relevo:bitacora/ciclos.md`, CICLO-010).
- Datos de los nodos: tronco v9 `9c59509` y v10 `3a6f601` (`git log`); IDEA-006 capa 7; TEC-034 a 036; «Supervisor sin huecos»; QA ciego 9 de 9 en la primera ronda; `qa.mjs` con 16 criterios; todo de la misma entrada.
- La versión del segundo Desarrollador volvió a pasar por el Guardián, que agregó una comprobación a `qa.mjs` y cerró en 16 criterios: por eso hay dos nodos «Guardián» (falla y pasa). La arista de vuelta lleva `role: "return"` y sale del control que falló, sin un nodo «Rechazo» intermedio, porque en este ciclo no rechazó el QA sino el Guardián.
- La rama de rechazo del QA (máximo 2 rondas, `proceso/ciclo.md` paso 7) se nombra en la tarjeta y no como nodo, porque no ocurrió en ningún ciclo (`bitacora/ciclos.md`, CICLO-001 a 022).

### Figura 4 · Estados de un ciclo frente al tronco
- Estados y transiciones de `oficina-relevo:proceso/ciclo.md`. Desde «Inicio» (paso 2, el Supervisor lee `estado.json`): tronco que pasa → «Mejora»; tronco roto → «Reparación», que restaura solo el código desde `commit_ultima_buena` (la memoria nunca se revierte) y termina en «Memoria escrita»; `ciclos_fallidos_seguidos` ≥ 3 → «Diagnóstico», que no agrega nada nuevo y escribe el hueco en `bitacora/huecos.md`. «En revisión» (paso 7): QA ciego con criterios fijos; «corrige (máx. 2)» es la vuelta a un Desarrollador nuevo (`role: "return"`). Aprobado → integra y publica (paso 8) y pone fallidos en 0; rechazado → solo la rama `claude/ciclo-NNN` y fallidos + 1. «Memoria escrita» = Cronista, siempre (paso 9).
- La arista de «Diagnóstico» a «Memoria escrita» no se dibuja: Archify no encontró una ruta legible sin cruces. El diagnóstico escribe en la memoria por sí mismo (paso 2), y la tarjeta lo dice.
- Tarjeta «Al corte»: 22 ciclos aprobados en la primera ronda (`bitacora/ciclos.md`); `ciclos_fallidos_seguidos: 0` (`estado.json`); 0 reparaciones (ninguna entrada de la bitácora menciona reparación y `git log origin/claude/taller` no tiene commits «Repara»).

### Figura 5 · Matriz de trazabilidad
- Una fila por ciclo, CICLO-001 a 022. IDEA y ADR: línea «Idea» de cada entrada de `bitacora/ciclos.md`. Commit: el «[CICLO-NNN] Integra …» del tronco (`git log origin/claude/taller --grep Integra`). Versión: línea «Versión publicada». Técnicas: las fichas que propuso el Investigador en ese ciclo (línea «Investigación»). QA: «aprobado en la primera ronda, n de n criterios».
- CICLO-001 hizo la capa 1 de ADR-004 y creó ADR-007 («ADR-004 · 007 nueva»). ADR-007 es la única ADR creada dentro de un ciclo; los demás desarrollan ADR-004 y ADR-007, y CICLO-005 se apoya en ADR-003. ADR-008 (mudanza de las rutinas a `Sparkon-by-Triario/Data-IA`) existe, pero la escribió Hernán fuera de ciclo, en el commit `424f350` «[MUDANZA] El Taller trabaja desde su subcarpeta en Data-IA (ADR-008)», del 23/11 01:21 UTC (`git log origin/claude/taller`). CICLO-008 y 009 trabajan la capa 6 y tocan IDEA-010, 024 y 027 «en su forma mínima» (texto de la bitácora). CICLO-021 no creó ficha nueva (extendió TEC-057).

### Figura 6 · Mapa de calor
- Es la vista en tabla del radar de D03: 9 conceptos × 3 columnas (madurez afuera, equipos, cierre). No agrega datos; cada celda sale de la tabla de evidencias de `d03-radar/radar.md`.
- Equipos: columna «Adopción aquí» de `t14-aterrizador/radar.md` §3. Los «No sé: preguntar a Hernán» se pintan como **por confirmar** con trama amarilla [confirmar con Hernán]. Cierre: nivel que D03 asignó a la evidencia, [Hipótesis] (juicio de D03). La leyenda incluye la escala de madurez afuera (consenso, no cumple la vara). Legible en blanco y negro: el texto de cada celda dice el nivel.

### Figura 7 · Modelo de madurez por capas
- Los 7 escalones son las 7 capas de ADR-004, en su orden. Ciclo, versión y commit de cada uno salen de `bitacora/ciclos.md` y `git log`: capas 1 a 4 en CICLO-001 a 004; capa 5 en CICLO-006 y 007; capa 6 en CICLO-008 y 009; capa 7 en CICLO-010 («Con esto las 7 capas de ADR-004 están hechas en iso»). Después vienen dos mesetas. CICLO-011 a 015 siguieron el orden que dejó la Retro del 21/11 y las ideas de prioridad alta (líneas «Idea» de esas entradas: «la Retro del 21/11 puso segundo», «tercera del orden de la Retro», IDEA-021 «alta», IDEA-033 «prioridad alta»). CICLO-016 a 022 son la fase de pulido (`oficina-relevo:CLAUDE.md`, `fc532ae`, citado en `d04-sistema/parte3.md` §3.4).
- Las etapas 1 a 4 de la oficina se marcan donde las pone `insumos/evolucion-oficina/README.md` (CICLO-001, 004, 006 y 014). La etapa 4 se llama «estado final» en el BRIEF y «ahora» en el insumo: es la última captura de esa tira, de CICLO-014 (22/11 18:21 UTC), cuando se armó el insumo. La oficina siguió con 8 ciclos más, hasta CICLO-022. CICLO-005 aparece fuera de la escalera: su entrada en la bitácora se titula «Repetición de la corrida real» y no trabaja una capa.
- El modo por defecto sigue en plano y el isométrico se abre con `#iso` (H-016; `estado.json` «modo_visual»). La figura lo dice como estado al corte [confirmar con Hernán].

### Figura 8 · Línea de tiempo en carriles
- Un carril por sistema: Relevo de investigación, El Taller y Relevo de documentación. Cada marca es un commit con su hora UTC, tomada de `d04-sistema/linea-de-tiempo.md`, que la sacó de `git log`. D03 (`7f022d0`, 23/11 13:38 UTC) y D04 (`f1b1b3c`, 23/11 13:09 UTC) salen de `git log` de sus ramas, porque llegaron después del corte de D04.
- Las etapas 1 a 4 se marcan sobre el carril de El Taller; la línea punteada es la mudanza de ADR-008 (`424f350`, 23/11 01:21 UTC).
- Carril de El Taller, verificado con `git show -s` en `oficina-relevo`: canario `b8b8742` (19/11 19:19 UTC); retros `1894166` (20/11 12:32) y `6d8b8a2` (22/11 02:03); Code Janitor `df766b5` (21/11 12:06), `da845dc` (22/11 12:14) y `bba36a9` (23/11 11:37); 153 commits según `git rev-list --count origin/claude/taller` (`d04-sistema/linea-de-tiempo.md`).
- Las 15 marcas del Relevo entre 18:34 y 23:13 del 19/11 (T1 a T6, T14, T15 y sus especialistas) quedan juntas a esta escala; la figura las resume en una nota y la tabla completa está en `t16-supervisor/estado-final.md`.

### Figuras 9 y 10 · Referenciadas
- `insumos/ciclo-taller.workflow.json`: el ciclo genérico de El Taller con 8 roles. La figura 3 es su instancia real y la figura 4 su vista de estados.
- `d03-radar/radar.svg`: el cuadrante 2x2 de D03. La figura 6 es su vista en tabla.

## Criterio técnico

- **Por qué Archify en carriles para los cuatro diagramas.** El encargo pide el mismo esquema que `insumos/ciclo-taller.workflow.json`: `schema_version` 2, `meta` con `legend.entries` y `views`, `lanes`, `phases`, `nodes` con `col` y `type`, y `edges` con `role`. Por eso las cuatro especificaciones usan `diagram_type: "workflow"`. La arquitectura, la secuencia y los estados se leen por carriles: los carriles son los contenedores en la figura 1, los participantes en la 3 y los tipos de estado en la 4. Las cuatro pasan `node bin/archify.mjs validate workflow <archivo> --quality showcase` sin errores, igual que el insumo de referencia. Archify tiene tipos propios `sequence` y `lifecycle`, con otro esquema; no se usaron para cumplir el esquema pedido, y por eso las figuras 3 y 4 se rotulan como secuencia y estados «en carriles». `meta.subtitle` y `meta.visual_preset` se omiten a propósito: la guía de Archify los deja fuera por defecto y el título ya dice lo necesario. Archify limita a 6 columnas (0 a 5) y a 140 caracteres por nota de vista; las figuras respetan los dos límites.
- **Por qué SVG para el resto.** Archify no dibuja matrices, mapas de calor, escaleras de madurez ni líneas de tiempo con escala real. Los 4 SVG son autocontenidos: sin imágenes, sin scripts y sin recursos externos. Llevan `<title>` y `<desc>` y la fuente de los datos al pie. La tipografía pide Plus Jakarta Sans y cae a Segoe UI o Arial si no está instalada.
- **Tamaño.** Las figuras 7 y 8 son apaisadas (1500 y 1440 px de ancho) y usan texto de 13 px; van a página completa en horizontal o como lámina, no en media columna.
- **Legibilidad sin color.** El mapa de calor escribe el nivel en cada celda y usa trama para «por confirmar». La línea de tiempo usa formas distintas por tipo de agente. La escalera escribe el nombre de cada capa.

## Alcance decidido frente al catálogo de D01

El encargo de D05 fija entre 6 y 10 figuras. Con ese límite se eligió así:

- La línea de tiempo del proyecto completo (F2 de D01) depende de hitos de ClickUp que no están en el repositorio [confirmar con Hernán]. Por eso la figura 8 cubre el cierre, del 19 al 23/11, que sí está en git.
- Las figuras de la Parte 2 (F9 y F10 de D01) no se dibujaron: el repositorio no tiene registro de los loops de los equipos [confirmar con Hernán].
- Se priorizó lo que pide el encargo (arquitectura del Relevo, tubería medallón y secuencia con retorno) y los tipos de figura del BRIEF que no existían (estados, matriz, calor, madurez y línea de tiempo). La figura 2 cubre la tubería de F1 y F3. La figura 7, junto con las capturas de `insumos/evolucion-oficina/`, cubre la tira de F15. F4, F5, F14, F16 y F17 quedaron fuera del límite de 10.

## Dónde está la innovación

Las figuras no ilustran el sistema: lo dibujan con su propio registro. Cada nodo, cada hora y cada hash sale de un archivo o de un commit que se puede abrir. La innovación más visible está en tres figuras. La figura 2 pone el vocabulario de la ingeniería de datos (medallón, contrato, prueba independiente, cola de fallidos y puerta de aprobación) sobre un loop de agentes, con los veredictos de T01, incluidos los dos pares que no se sostienen tal cual. La figura 3 muestra el retorno a la capa que falló en el único ciclo en que pasó, con la medida que lo causó (1,3× a 1,44× sobre un límite de 1,3×), en lugar de un caso de ejemplo. La figura 5 hace auditable la cadena IDEA → ADR → CICLO → commit → versión → técnica en 22 de 22 ciclos. Según T04, los visores conocidos muestran la actividad de los agentes y no sus reglas [Hipótesis] (de T04, `t04-mostrar-loop/innovacion.md` §2). Estas figuras dibujan las reglas: contrato, auditor ciego, tope, archivo y persona en la puerta.

---

## Auditor ciego: veredicto y cambios

**Cómo se hizo.** Un subagente nuevo, que no vio el proceso de D05, recibió solo `BRIEF.md`, este `README.md`, las 8 figuras y el insumo de referencia `insumos/ciclo-taller.workflow.json`. No podía abrir otras rutas, ni `git log`, ni la web. Parseó los JSON y los SVG con Python. Además renderizó los SVG en color y en escala de grises y midió si había textos cortados o tapados. Juzgó cinco criterios: A fuentes y coherencia, B esquema JSON, C legibilidad de los SVG, D paleta y E criterio técnico y reglas del BRIEF.

**Veredicto: rechazado en la primera revisión.** A no cumplió. B, C, D y E cumplieron con observaciones. El auditor confirmó que las cifras de las figuras 1, 3 y 5 coinciden con el README, que hay 10 figuras, que no se usan guiones largos y que ningún SVG tiene recursos externos. Pidió 14 correcciones. Las que pesaron en el rechazo fueron cuatro: la matriz no citaba ADR-004 en CICLO-001; ADR-008 no se explicaba; la tarjeta de veredictos de T01 no tenía respaldo en el README; y la figura 4 tenía estados sin salida.

**Qué cambió D05 tras la auditoría:**
1. **Figura 5:** CICLO-001 dice ahora «ADR-004 · 007 nueva». La nota al pie y el README explican que ADR-008 (mudanza, `424f350`) la escribió Hernán fuera de ciclo.
2. **Figura 2:** la tarjeta cita las filas de T01 (2 a 5 con ajuste, 6 no se sostiene, 7 partida, 9 nueva) y usa el sello [Visto solo en buscador]. El README transcribe esos veredictos de `t01-tesis/tesis.md` §3.
3. **Figura 4:** se rehízo con nombres de estado (Inicio, Mejora, En revisión, Aprobado, Rechazado, Reparación, Diagnóstico, Memoria escrita). El diagnóstico sale ahora de «Inicio» (paso 2). La reparación termina en «Memoria escrita». La corrección del QA es una arista `return` «corrige (máx. 2)». La arista del diagnóstico a la memoria no cabe sin cruces en Archify: se explica en la tarjeta y en el README.
4. **Figura 1:** la pizarra se lee y se escribe, y los especialistas escriben su `ideas-*.md` en la pizarra. El README cita la fuente de «19 minutos antes de T1» y de «doc-le-base».
5. **Figura 3:** el segundo Desarrollador vuelve a pasar por el Guardián (nodo «Guardián · 16 criterios pasan»), como dice la bitácora. El README explica por qué el `return` sale del Guardián sin nodo de rechazo.
6. **Tipos de las figuras 3 y 4:** se rotulan «secuencia… en carriles» y «máquina de estados… en carriles», y el README explica por qué no se usaron los tipos `sequence` y `lifecycle` de Archify.
7. **Figura 7:** la meseta se llama «Orden de la Retro y alta», con su fuente. CICLO-005 se cita por el título de su entrada. Se explica por qué la etapa 4 cae en CICLO-014. Los textos pasaron de 11 a 13 px.
8. **Figura 8:** el canario ya no tapa la línea base, y D03 y D04 tienen etiquetas separadas. Una nota resume las 15 marcas del Relevo que quedan juntas a esta escala. Se citan los commits de las retros, del Code Janitor y del canario, verificados con `git show -s`, y el conteo de 153 commits. Los textos pasaron a 13 px.
9. **Figura 6:** la leyenda incluye la escala de madurez afuera. Se tradujeron context engineering y human-in-the-loop. El tinte `#DCDBFF` quedó declarado en «Cómo leer las fuentes». Los sellos usan la forma «[Hipótesis] (juicio de D03)».
10. **README:** se tradujeron prompt chaining y backfill. Se corrigió «e CICLO» por «y CICLO». La sección del catálogo de D01 se reescribió como alcance decidido. Se anota por qué se omiten `meta.subtitle` y `meta.visual_preset`.

Las cuatro especificaciones de Archify se validaron de nuevo tras los cambios: `validate workflow --quality showcase` pasa en las cuatro.
