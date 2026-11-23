## 5. El modelo de Triario: la escalera de madurez
Responde: P3, P4

Triario aplica Loop Engineering en tres niveles, y cada uno supera al anterior: primero las reglas, luego los equipos y, en la cima, un sistema de agentes que se aplica las reglas a sí mismo.

<!-- figura: escalera -->

**Primer nivel: el concepto y sus reglas.** La tesis del proyecto define un loop (ciclo) como una tubería de etapas en orden con cinco piezas: un contrato de calidad que no cambia, un revisor que no hizo el trabajo, reintentos con tope, un archivo para lo que no pasa y una persona en la puerta de producción[^1]. Cada pieza tiene un par humano. El revisor es el maker-checker (quien hace no es quien aprueba) de la banca, que Anthropic llama evaluator-optimizer (evaluador y optimizador) en agentes[^2]. Aquí se llama auditor ciego: un agente aparte que solo recibe la salida y el criterio, nunca el razonamiento de quien la produjo[^2]. El contrato es un data contract (contrato de datos) que no se edita durante el ciclo; el targeted retry (reintento dirigido) vuelve solo a la capa que falló, con tope de 3 vueltas; lo que no aprueba va a una dead-letter queue (archivo de no resueltos); y lo irreversible lo decide una persona: human-in-the-loop (persona en el circuito)[^3]. El catálogo de Triario reúne 20 patrones así, cada uno aprobado por un auditor ciego[^4].

<!-- figura: estados -->

Un ciclo recorre pocos estados: generada, aprobada o rechazada, devuelta a su capa con contador de vueltas, archivada al tope con su motivo, o «listo para publicar»[^3].

**Segundo nivel: los equipos.** Cuatro equipos trabajan con un megaagente: Implementaciones, dos células de marketing y Web[^5]. Que esas células sean MKT1 y MKT2 de GDO está [confirmar con Hernán]. Cada equipo tiene un repositorio con CLAUDE.md (memoria que carga cada sesión), skills (instrucciones reutilizables), agentes y, en algún caso, un hook (control que corre antes o después de una acción)[^5]. El megaagente llama las skills en orden y decide si hay otra vuelta; si el orden es fijo, el patrón es prompt chaining (encadenamiento de pasos), no orchestrator-workers (orquestador con trabajadores) [confirmar con Hernán][^6].

Hay cinco loops descritos en ese trabajo: generador con auditor ciego y contrato fijo; reintento acotado que archiva como «sin recomendación defendible» lo que no pasa en 3 vueltas; abstención, que ensancha la ventana de datos y se calla si no hay volumen; contenido que para en «listo para publicar»; y un ciclo largo que mide un resultado a 30 días con línea base y bitácora[^7]. La evidencia más fuerte es interna: con el criterio movido a mitad, el auditor no cerró en 3 vueltas; con el contrato fijo, aprobó en la primera[^7]. Qué equipo construyó cada loop está [confirmar con Hernán], y no hay cifras de resultados: se reportan como no medidas[^8].

**Tercer nivel: el sistema de agentes en relevo.** Es el sistema que construyó el área de Datos e IA. Agentes programados a horas distintas tienen cada uno una tarea, escriben solo en su carpeta y su rama, y se coordinan por lo que dejan en el repositorio[^9]. Un supervisor reconcilia lo que dejan los demás [confirmar con Hernán][^10]. Cada ciclo pasa por un control de calidad ciego contra un contrato de 11 criterios que no cambió[^11]. La memoria vive en git (control de versiones): todo agente la lee primero, en orden fijo, y un Guardián revisa que solo crezca[^11]. El Taller, la oficina donde se ve el trabajo, mejora por ciclos: su bitácora registra 22, y la prueba automática pasó de 10 a 28 criterios[^11].

| Nivel | Qué es | Evidencia |
|---|---|---|
| Concepto | Cinco piezas y un catálogo de patrones con par humano | Tesis del proyecto y 20 patrones auditados[^1][^4] |
| Equipos | Megaagentes con loops en el trabajo real | Cinco loops descritos; resultados no medidos, equipo sin confirmar[^7] |
| Sistema en relevo | Agentes con tarea propia, auditor ciego, supervisor, memoria en git y oficina | Bitácora de 22 ciclos y contrato sin cambios[^11] |

Hasta dónde llega: la cima tiene límites declarados. Los 22 ciclos aprobaron en la primera ronda, lo que no prueba que el auditor acierte[^12]. No hay registro del costo en tokens (unidades de texto)[^13]. Una persona fija las reglas, pero cada versión se publica cuando el control aprueba[^14]. Lo distintivo es que el sistema se construyó con su propia técnica: sus fortalezas descansan en archivos que produjo para mejorarse[^15].

[^1]: investigacion/cierre-loop-engineering/t15-patrones/patrones.md §1 (definición de una línea de la tesis del proyecto, t01-tesis/tesis.md) · [Fuente primaria]
[^2]: investigacion/cierre-loop-engineering/t15-patrones/patrones.md §4 A1 (Anthropic, Building effective agents; Claude Code, subagents) · [Fuente primaria]
[^3]: investigacion/cierre-loop-engineering/t15-patrones/patrones.md §4 A2, A3, A6 y E1; §5 mapa de relaciones (ODCS de Bitol; Anthropic, Building effective agents) · [Fuente primaria]
[^4]: investigacion/cierre-loop-engineering/t15-patrones/patrones.md encabezado y §3 (20 fichas aprobadas por el auditor ciego) · [Fuente primaria]
[^5]: documento/cierre-loop-engineering/d06-equipos/parte2-base.md §2.1 puntos 1 y 2 (rama origin/claude/doc-le-d06-equipos; hecho interno de t06-evidencia/evidencia.md Caso 6) · [Fuente primaria]; nombres GDO MKT1, MKT2 y Web · [confirmar con Hernán]
[^6]: documento/cierre-loop-engineering/d06-equipos/parte2-base.md §2.1 punto 4 (t01-tesis/tesis.md §3 fila 1) · [confirmar con Hernán]
[^7]: documento/cierre-loop-engineering/d06-equipos/parte2-base.md §2.1 punto 3, tabla L1 a L5 (hechos internos de t06-evidencia/evidencia.md Casos 1 a 5) · [Fuente primaria]
[^8]: documento/cierre-loop-engineering/d06-equipos/parte2-base.md §2.2 y §4 (regla «no medido») · [Fuente primaria]
[^9]: investigacion/cierre-loop-engineering/t15-patrones/patrones.md §4 C1 (relevo con pizarra común, ejemplo en Triario) · [Fuente primaria]
[^10]: documento/cierre-loop-engineering/d03-radar/radar.md §Bases leídas (t16-supervisor/estado-final.md); la función de reconciliación no está descrita en el paquete · [confirmar con Hernán]
[^11]: documento/cierre-loop-engineering/d03-radar/radar.md §Lectura por zona, Fortaleza, y §Tabla de evidencias filas 1, 2 y 8 (rama origin/claude/doc-le-d03-radar; oficina-relevo, commit d24488d: bitacora/ciclos.md, CONTRATO.md, tools/qa.mjs, tools/integridad.mjs, decisiones/ADR-006) · [Fuente primaria]
[^12]: documento/cierre-loop-engineering/d03-radar/radar.md §Lectura por zona, Brecha (bitacora/ciclos.md; retro/2026-11-21.md, commit 0455d88) · [Fuente primaria]
[^13]: documento/cierre-loop-engineering/d03-radar/radar.md §Lectura por zona, Por confirmar (ADR-008, commit 424f350) · [Fuente primaria]
[^14]: documento/cierre-loop-engineering/d03-radar/radar.md §Tabla de evidencias fila 9 y §Diferencias con la pizarra (proceso/ciclo.md paso 8) · [Fuente primaria]
[^15]: documento/cierre-loop-engineering/d03-radar/radar.md §Dónde está la innovación (dogfooding, lectura de D03) · [Hipótesis]
