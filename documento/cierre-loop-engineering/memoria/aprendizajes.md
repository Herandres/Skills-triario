# Aprendizajes del Relevo de documentación

Alcance: cosecha del 23/11/2026 (21:45 UTC) sobre las ramas `claude/doc-le-d01` a `d08`, `claude/doc-le-unificado` (que contiene D09, porque D09 no tiene rama propia: commit `9e7ba4b`) y `memoria/hechos-del-proceso.md` (HP-001 a HP-019). Entregaron D01 a D09; no faltó ninguna. Los auditores individuales juzgaron D01 a D07 (7 entregas); D08 audita el documento completo; D09 no tiene auditor propio.

Sellos: [Fuente primaria] es un hecho que se puede abrir en la rama o en HP. [Hipótesis] es interpretación de esta cosecha. En las entradas mixtas, la lectura va marcada en la misma línea. Las rutas son de `documento/cierre-loop-engineering/` y se abren con `git show <rama>:<ruta>`. Los números de línea son de la versión de la rama al 23/11.

## Aciertos

**APR-A01 · Brief común antes del primer especialista.** Ninguno de los 6 auditores individuales que tenían ese criterio marcó «no cumple» en decisiones de Hernán (D01 sin observaciones; D02, D03, D04, D06 y D07 con «cumple» o «cumple con observaciones»). D05 lo cubrió dentro de su criterio E (criterio técnico y reglas del BRIEF). Lectura: el brief común (HP-011) ayudó a eso. [Hipótesis]
Evidencia: HP-001, HP-011; veredictos en `d01-arquitectura/esqueleto.md:273`, `d02-marco/parte1.md:250`, `d03-radar/radar.md:72`, `d04-sistema/parte3.md:220`, `d05-figuras/README.md:103`, `d06-equipos/parte2-base.md:184`, `d07-editor/documento-borrador.md:511`.
Sello: [Fuente primaria] (hecho) y [Hipótesis] (causa).

**APR-A02 · Los huecos se marcaron, no se rellenaron.** D08 no encontró ningún número sin fuente (3 casos «dudosos», ninguno inventado). D06 no asignó ningún loop a ningún equipo sin dato y dejó las cifras como marcadores «[confirmar con Hernán]».
Evidencia: `claude/doc-le-d08-auditoria:d08-auditoria/auditoria.md` §3; `claude/doc-le-d06-equipos:d06-equipos/parte2-base.md:184` (criterio b).
Sello: [Fuente primaria].

**APR-A03 · Un auditor que volvió a la fuente encontró lo que los otros no.** D08 abrió la fila 7 de T01 y halló que «dos de los cinco pares no se sostienen» no coincide con la fuente (F1). Ese error había pasado por tres auditores individuales (ver APR-T03).
Evidencia: `claude/doc-le-d08-auditoria:d08-auditoria/auditoria.md` §2 F1 y §3 punto 1.
Sello: [Fuente primaria].

**APR-A04 · Los conteos se pudieron rehacer y cuadraron.** Tres auditores rehicieron las sumas (D04, D07 y D08): 136 = 51 + 85, 177 roles, 153 commits, 142 y 144 de la actualización. Las sumas totales cuadraron. El desglose que reconstruyó el auditor de D07 (18 sesiones y 70 subagentes) difería en dos puntos y D07 lo corrigió a 19 y 72.
Evidencia: veredictos de `d04-sistema/parte3.md:220` y `d07-editor/documento-borrador.md:511`; tabla de verificaciones de `d08-auditoria/auditoria.md`.
Sello: [Fuente primaria].

**APR-A05 · Cada especialista escribió solo en su carpeta y su rama.** D09 unió las 8 ramas con `git merge --no-ff` sin conflictos y no hubo rescates.
Evidencia: `claude/doc-le-unificado:d09-supervisor/estado.md` §1; commits de merge `c8306b8` a `d30dfaa`.
Sello: [Fuente primaria].

**APR-A06 · Auditores que abren la fuente, no solo la entrega.** El auditor de D06 revisó 12 citas al azar (11 fieles) y D08 contrastó 11 afirmaciones con su fuente primaria. Ambos encontraron errores concretos (sello de Itaú mal atribuido, línea corrida, F1).
Evidencia: `d06-equipos/parte2-base.md:184`; `d08-auditoria/auditoria.md` «Resultado de las verificaciones puntuales».
Sello: [Fuente primaria].

**APR-A07 · Repartir el trabajo por cuota y apagar lo que sobra.** Hernán repartió a los especialistas entre mañana y tarde (HP-012). Con la ventana al 78 % se apagaron dos rutinas y se movieron las siguientes (HP-008). La ventana semanal pasó de 38 % a 44 % en el día (HP-019), y las 8 entregas (D01 a D08) llegaron igual, entre el 22 y el 23/11 (commits en el historial de cada rama).
Sello: [Fuente primaria] (hechos). Que el reparto explique que llegaran todas es [Hipótesis].

**APR-A08 · Declarar el límite de lo verificado.** D08 dice que no pudo abrir `oficina-relevo` y marca lo citado de ahí como «citado, no verificado» (F8). D04 declara [Hipótesis] las 8 sesiones inferidas del explorador (`d04-sistema/conteo-agentes.md:65`), y D08 las carga a la cifra (F3).
Sello: [Fuente primaria].

## Tropiezos

**APR-T01 · D03 se cayó por el tope de la ventana de 5 horas.** Se detuvo a las 11:33 p. m. del 22/11 y lo que no había subido se perdió. Se relanzó a mano el 23/11 a las 8:33 a. m. y entregó a las 8:38 a. m.
Causa: la cuenta llegó al tope de la ventana de 5 horas.
Evidencia: HP-004, HP-006; commit `7f022d0` en `claude/doc-le-d03-radar`.
Sello: [Fuente primaria].

**APR-T02 · D04 corrió sin el radar de D03.** D04 estaba diseñado para correr después de D03, pero corrió antes y entregó a las 8:09 a. m.; el radar llegó a las 8:38 a. m. El relevo siguió sin esperar y la pizarra quedó incompleta.
Causa: no había una regla para qué hace un especialista dependiente cuando su antecesor se cae.
Evidencia: HP-005, HP-006, HP-015; commits `f1b1b3c` y `7f022d0`.
Sello: [Fuente primaria] (hechos). La causa es [Hipótesis].

**APR-T03 · Un error de lectura de la fuente viajó por cuatro entregas.** «Dos de los cinco pares del BRIEF no se sostienen tal cual» nació en D01 (`esqueleto.md:64`), pasó a D02 (`parte1.md:63`), a D07 (`documento-borrador.md:48`, `resumen-ejecutivo.md:17`, notas del `deck.md`) y a D05 (README, Figura 2). T01 dice que solo la fila 6 no se sostiene y que la fila 7 se parte en dos. Los auditores de D01, D02 y D07 recibieron solo el BRIEF y los archivos de la entrega; D08 abrió T01 y lo detectó.
Causa: [Hipótesis] el auditor que solo ve la salida no puede detectar una cita mal leída si no abre la fuente.
Evidencia: ramas y líneas citadas; `d08-auditoria/auditoria.md` §2 F1; descripción de los auditores en `d01-arquitectura/esqueleto.md:275`, `d02-marco/parte1.md:252`, `d07-editor/documento-borrador.md:513`.
Sello: [Fuente primaria] (propagación y hallazgo). La causa es [Hipótesis].

**APR-T04 · D02 fue rechazado y no se volvió a auditar.** Rechazo por un conteo que no cuadraba («seis» frente a siete en la tabla) y tres cifras sin fuente a la vista. D02 aplicó 11 correcciones y declaró «No se volvió a auditar». D04 y D07 declaran lo mismo.
Causa: la regla del encargo pedía una auditoría por entrega, no una segunda tras un rechazo. [Hipótesis]
Evidencia: `claude/doc-le-d02-marco:d02-marco/parte1.md:250`; `d04-sistema/parte3.md:220`; `d07-editor/documento-borrador.md:511`.
Sello: [Fuente primaria] (hechos). La causa es [Hipótesis].

**APR-T05 · D05 fue rechazado en la primera revisión.** Falló el criterio de fuentes y coherencia. El auditor pidió 14 correcciones y pesaron cuatro: la matriz sin ADR-004 en CICLO-001, ADR-008 sin explicar, una tarjeta sin respaldo en el README y la Figura 4 con estados sin salida.
Evidencia: `claude/doc-le-d05-figuras:d05-figuras/README.md:103`.
Sello: [Fuente primaria].

**APR-T06 · Los términos en inglés salieron sin traducir en las 7 entregas, aunque el BRIEF §5 pedía la traducción la primera vez.** Cada auditor individual lo pidió (D01 #6, D02 #10, D03 #4, D04 #12, D05 #9, D06 #4, D07 #14).
Causa: [Hipótesis] el BRIEF fija la regla, pero no trae una lista de términos que obligue a revisar uno por uno.
Evidencia: BRIEF §5; los 7 veredictos citados en APR-A01.
Sello: [Fuente primaria] (hecho). La causa es [Hipótesis].

**APR-T07 · Tres cifras de agentes con tres cortes distintos.** D01 contó 95, D04 contó 136 y D07 actualizó a 144, más 177 roles. D08 dice que el lector ejecutivo necesita una sola cifra principal con su corte. Además, 8 de las 136 sesiones son inferidas (F3) y 2 de las 144 descansan en el registro del propio D07 (F4). D04 contó antes de que corrieran D05 a D09.
Evidencia: HP-016; `d08-auditoria/auditoria.md` §2 F3, F4 y §6 punto 5; `d04-sistema/conteo-agentes.md`.
Sello: [Fuente primaria].

**APR-T08 · La figura C4 que pedía el BRIEF no se dibujó.** D05 se fijó un límite de 10 figuras y la dejó fuera; D07 la dejó «para que lo decida Hernán». D08 la cuenta como decisión de Hernán no respetada, la única de las 10 revisadas.
Evidencia: `d08-auditoria/auditoria.md` §4 (fila «Figuras con criterio técnico: C4») y §7 punto 2; `d07-editor/documento-borrador.md:511` (cambio 7).
Sello: [Fuente primaria].

**APR-T09 · Se creó un sello que el BRIEF no tiene.** D07 declaró que «[hecho interno]» equivale a [Fuente primaria] sin registro en git (`documento-borrador.md` línea 22). El BRIEF §4 manda marcar esos datos «[confirmar con Hernán]». Los resultados L1 a L5 y el título de la lámina 5 se apoyan en eso, y la Parte 2 lo llama «la evidencia más fuerte».
Evidencia: `d08-auditoria/auditoria.md` §2 F2 y §7 punto 4; BRIEF §4.
Sello: [Fuente primaria].

**APR-T10 · Lenguaje que se lee como pendiente, aunque el BRIEF prohíbe la sección de pendientes.** Los auditores lo señalaron en 5 de las 7 entregas: D01 («Pendientes de Hernán» pasó a «sin dato al cierre»), D03 (sección vacía), D04 (frase de tarea pendiente y etiqueta «Hecho abierto»), D06 (columna «Cuándo se puede hacer») y D07 («[pendiente de D05]»). D08 suma tres roces más en el documento: «Lo que no se sostiene todavía», la lección 9 y la leyenda «[pendiente de D0N]». También dos títulos de láminas (9 y 12) afirman en pasado hechos sin registro (DF-08 y DF-19).
Evidencia: veredictos de D03, D04, D06 y D07 (rutas en APR-A01); `d08-auditoria/auditoria.md` §3 y §4.
Sello: [Fuente primaria].

**APR-T11 · La memoria del relevo se pensó después de que corrieran los especialistas.** Hernán señaló el hueco al mediodía del 23/11 (HP-014). Para entonces las 6 entregas D01 a D06 tenían su veredicto, pero cada uno en su archivo y sin consolidar (HP-017). Esta cosecha existe por esa observación.
Evidencia: HP-014, HP-017.
Sello: [Fuente primaria].

**APR-T12 · Una rutina quedó encendida después de su última corrida útil.** El Pulido A siguió activo con su siguiente corrida para el 23/11/2027 y se apagó el 23/11 a las 12:38 p. m. Antes, con la ventana al 78 %, se apagaron el Pulido B y el Code Janitor (HP-008).
Causa: [Hipótesis] el diseño de las rutinas no incluía un paso de apagado al terminar.
Evidencia: HP-008, HP-010.
Sello: [Fuente primaria] (hechos). La causa es [Hipótesis].

**APR-T13 · Poca fuente en la misma línea y cuerpo largo.** En las Partes 1 y 3, de 144 líneas de contenido, 64 (44 %) tienen fuente en la línea, 12 (8 %) están por confirmar y 68 (47 %) no tienen fuente en la misma línea (conteo aproximado con `grep`). El cuerpo suma unas 11.582 palabras sin la Parte 2. Hernán pidió que no hubiera «un montón de información que no sustente el proyecto». Los 7 auditores individuales calificaron las fuentes como «cumple» o «cumple con observaciones»; solo D05 la dio por incumplida (criterio A, en su rechazo).
Causa: [Hipótesis] los auditores aceptaron la fuente citada al nivel de la sección. HP-018 avisa que ese método es aproximado.
Evidencia: HP-014, HP-018; veredictos citados en APR-A01.
Sello: [Fuente primaria] (cifras de HP-018). La causa es [Hipótesis].

**APR-T14 · El auditor final no pudo abrir el repositorio donde viven las fuentes del Taller.** `Herandres/oficina-relevo` no estaba en su alcance, así que lo citado como `oficina-relevo:` (contrato, bitácora, `estado.json`, 153 commits) quedó «citado, no verificado» en la auditoría final. D05 dice haberlo verificado con `git show -s` y `git log`.
Evidencia: `d08-auditoria/auditoria.md` «Qué leí y qué no» y §2 F8.
Sello: [Fuente primaria].

## Patrones de los auditores

Conteo sobre los 7 auditores individuales (D01 a D07); la auditoría final de D08 va aparte, en «Otros conteos». Cada celda cuenta entregas donde el auditor pidió una corrección de ese tipo, según su lista de cambios o su veredicto. No es un conteo de correcciones sueltas.

| Tipo de hallazgo | Entregas (de 7) | Cuáles | Evidencia |
|---|---|---|---|
| Fuentes: sello faltante o mal atribuido, cita sin respaldo, ruta sin prefijo | 7 | D01 (cambios 5 y 8), D02 (2, 4, 5, 6), D03 (1), D04 (2, 3, 4, 7, 9), D05 (2 y la matriz sin ADR-004), D06 (1 y 2), D07 (9) | veredictos de cada rama |
| Términos técnicos sin traducir | 7 | D01 a D07 | ver APR-T06 |
| Claridad ejecutiva con observaciones | 6 | D01 a D04, D06 y D07 (D05: legibilidad de las figuras, con observaciones) | veredictos |
| Cifras o textos que no coinciden entre sí | 6 | D01 (2), D02 («seis»/siete), D03 («25 entradas»/23 ciclos), D04 (hora y 153/152), D05 (matriz sin ADR-004 en CICLO-001), D07 (deck sin 144; 18/19 sesiones) | veredictos |
| Lenguaje que se lee como pendiente | 5 | D01, D03, D04, D06, D07 | ver APR-T10 |
| Innovación débil o ausente en alguna parte | 3 | D01 (secciones 2.1 a 2.4 y 3.7), D06 (WEB-08 es de antes del periodo), D07 (deck sin el Guardián) | veredictos |
| Datos inventados («no cumple») | 1 | D02 (conteo y tres cifras sin fuente) | `d02-marco/parte1.md:250` |
| Decisiones de Hernán no respetadas | 0 en los 7 individuales | el único caso es C4, hallado por D08 (APR-T08) | `d08-auditoria/auditoria.md` §4 |

Otros conteos:
- Rechazos en la primera revisión: 2 de 7 (D02 y D05). Los otros 5 salieron aprobados o «cumple» con correcciones.
- Correcciones aplicadas o pedidas: D01 10, D02 11, D03 6, D04 13, D05 14 pedidas (10 grupos aplicados), D06 8, D07 15. Suma de las aplicadas: 73. D08 pide 16 correcciones al documento completo.
- Entregas que declaran «No se volvió a auditar»: 3 (D02, D04, D07).
- D08 sobre el documento completo: 0 datos inventados, 3 casos dudosos (F1 y los títulos de las láminas 9 y 12), 9 afirmaciones con fuente débil (F1 a F9).
- Lectura: el error más repetido es de forma (fuentes, traducción, claridad) y se da en todas las entregas. El error de fondo más caro (F1) lo vio solo el auditor que abrió la fuente. [Hipótesis]

## Reglas para el próximo relevo

**APR-R01 · Citar un veredicto con su grado exacto y abrir su fila antes de repetirlo.** Todo veredicto de una fuente (por ejemplo «se sostiene con ajuste» o «no se sostiene») se copia con las mismas palabras, y el editor abre la fila de la fuente antes de usarlo en un resumen o en un deck. Se verifica con una búsqueda de la frase del veredicto en todos los archivos del relevo y su comparación con la fila fuente. Nace de APR-T03 y APR-A03.

**APR-R02 · Al menos un auditor por relevo abre las fuentes primarias, no solo la entrega.** La instrucción del auditor lista las rutas que puede abrir, y su veredicto reporta cuántas citas contrastó y cuántas resultaron fieles, como hicieron D06 y D08. Se verifica por ese conteo en el veredicto. Nace de APR-A06 y APR-T03.

**APR-R03 · Tras un rechazo, segunda auditoría registrada.** Una entrega rechazada en la primera revisión se vuelve a auditar con un subagente nuevo, y el veredicto de la segunda vuelta se escribe en la misma sección del veredicto. Se verifica porque esa sección tiene dos veredictos con su fecha. Nace de APR-T04. (APR-T05 muestra el rechazo de D05, pero ninguna fuente dice si se volvió a auditar.)

**APR-R04 · Glosario obligatorio en el BRIEF.** El BRIEF trae la lista de términos en inglés con su traducción, y el auditor ciego marca cada término de la lista que aparezca sin traducir en su primer uso. Se verifica con una búsqueda de cada término de la lista contra su primera aparición. Nace de APR-T06.

**APR-R05 · Una cifra acumulada lleva su corte, su método y el peso de lo inferido.** Toda cifra que crece con el relevo (agentes, commits, roles) se escribe con fecha y hora de corte, y se declara cuántos de sus componentes son inferidos o autodeclarados. El documento final tiene una sola cifra principal y las demás van en nota. Se verifica abriendo la línea de cada cifra. Nace de APR-T07 y APR-A04.

**APR-R06 · Las figuras que pide el BRIEF se dibujan o las retira Hernán, nunca el especialista.** Antes de arrancar, el BRIEF numera cada figura exigida. Un especialista que no puede dibujar una la devuelve a la pizarra como decisión para Hernán, y el documento no la declara «alcance decidido». Se verifica contra la lista de figuras del BRIEF. Nace de APR-T08.

**APR-R07 · Solo valen los sellos del BRIEF.** Un dato que no tiene registro se marca «[confirmar con Hernán]», y ningún especialista define un sello nuevo ni lo equipara a [Fuente primaria]. Se verifica buscando en el documento todo sello entre corchetes y comparándolo con los de la lista de sellos del BRIEF §5. Nace de APR-T09 y APR-A02.

**APR-R08 · Un especialista caído no se salta en silencio.** Si un especialista no entregó, el siguiente que depende de él se detiene o declara al inicio de su entrega «sin la salida de DNN», y el supervisor lista en su estado qué entregas faltaban en cada corrida. Se verifica por esa línea en la entrega o en el estado. Nace de APR-T01 y APR-T02.

**APR-R09 · La memoria se programa desde el diseño y cada rutina tiene su paso de cierre.** El diseño del relevo incluye, antes de lanzar al primer especialista, la rutina de cosecha de aprendizajes y, por cada rutina, la fecha en que se apaga. Se verifica por la lista de rutinas del diseño con su fecha de apagado y la cosecha ya programada. Nace de APR-T11, APR-T12 y APR-A07.

**APR-R10 · Cada entrega mide y reporta cuántas de sus líneas con cifra o afirmación llevan su fuente en la misma línea.** El método es el de HP-018 (conteo con `grep`) y la medición va en la sección del veredicto, junto al conteo de palabras. Así Hernán puede decidir la extensión con el dato a la vista. Se verifica con el conteo en la sección del veredicto. El conteo es aproximado, porque una línea puede apoyarse en una fuente citada al nivel de la sección (HP-018), y la entrega lo dice. Nace de APR-T13 y HP-014.

## Veredicto del auditor ciego

Auditor: subagente nuevo que recibió solo `hechos-del-proceso.md`, este archivo y los nombres de las ramas, y verificó las citas con `git show` y `git grep`.

**Veredicto: aprobado con ajustes.** No encontró nada inventado. De 8 aciertos y 14 tropiezos, sostuvo 16 sin cambios y pidió ajustes en 6 (A01, A04, A07, T10, T12, T13). De las 10 reglas, sostuvo 7 y pidió ajustes en 3 (R03, R07, R10). Todas nacen de aprendizajes citados que existen. Encontró 3 errores de hecho (A07, T13 y el conteo de T10) y 4 sobreafirmaciones menores.

**Qué cambié:**
1. A01: pasó de 7 a 6 auditores, porque D05 no tuvo ese criterio y lo cubrió dentro de su criterio E.
2. A04: ya no dice que todo cuadró; las sumas totales cuadraron y el desglose del auditor de D07 tuvo dos diferencias que D07 corrigió (18/70 a 19/72).
3. A07: las entregas llegaron entre el 22 y el 23/11, no solo el 23/11.
4. T10 y la tabla de patrones: 5 entregas, no 4; se agregó D01.
5. T12: quité «a mano», que HP-008 no dice.
6. T13: quité a D02; solo D05 dio por incumplidas las fuentes.
7. Tabla de patrones: claridad ejecutiva pasó a 6 de 7 (D05 tuvo legibilidad); en «cifras que no coinciden» la cita de D05 ahora es la matriz sin ADR-004. Se aclaró que D08 va en «Otros conteos».
8. R03: nace solo de T04; ninguna fuente dice si D05 se volvió a auditar.
9. R07: la lista de sellos está en BRIEF §5, no en §4.
10. R10: se quitó T10 como origen, se citó HP-014 y se dice que el método es aproximado (HP-018).

**No cambié:** la hora de corte de la cosecha (21:45 UTC) no es verificable desde las ramas; es la salida de `date -u` de esta corrida.
