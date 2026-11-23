# D06 · Preguntas para Hernán: Parte 2

**Tarea D06: agente especialista de la Parte 2 leyó la investigación y, tomando como base los huecos de `parte2-base.md` §2.2 y la lista DF de `d01-arquitectura/datos-faltantes.md` (rama `claude/doc-le-d01-arquitectura`), propone 10 preguntas cerradas, ordenadas por importancia: va primero la que, sin respuesta, deja más fichas vacías.**

Cómo responder: marque una opción o escriba el dato. Si un dato no existe, la respuesta válida es «no medido» y el documento lo escribe así (regla de `investigacion/cierre-loop-engineering/t06-evidencia/evidencia.md` §2.3). La columna «Cierra» dice qué hueco de D01 resuelve cada respuesta.

| # | Pregunta | Opciones | Cierra |
|---|---|---|---|
| P1 | ¿Los cuatro equipos de la Parte 2 son exactamente estos: GDO MKT1 y GDO MKT2 (las «dos células de marketing» de T06), GDO Web e Implementaciones? | a) Sí · b) No, la lista correcta es: ____ · Dato aparte para la portada de la Parte 2: GDO significa ____ | Nombres de las fichas 3.1 a 3.4 |
| P2 | Para cada equipo, ¿qué loop construyó? Marque uno o varios por equipo. | L1 generador + auditor ciego con contrato fijo · L2 reintento a la capa que falló (máx. 3) + archivo · L3 abstención por volumen (ventana que se ensancha) · L4 contenido que para en «listo para publicar» · L5 ciclo largo de 30 días con línea base · Otro: ____ · **Una fila por equipo:** MKT1 __ · MKT2 __ · Web __ · Implementaciones __ | DF-05 |
| P3 | ¿Los entregables de junio de 2026 que están en Skills-triario son la base de algún loop de la Parte 2? | **WEB-08:** a) base del loop de GDO Web · b) solo antecedente · c) no entra. **Kit Loop Marketing:** a) base de MKT1 · b) base de MKT2 · c) base de ambas · d) solo antecedente · e) no entra | Antecedentes de `parte2-base.md` §2.3 |
| P4 | ¿El megaagente de cada equipo llama las skills en un orden fijo o decide sobre la marcha qué skill usar? | a) Orden fijo en los cuatro (prompt chaining, encadenamiento de pasos) · b) Decide sobre la marcha en los cuatro (orchestrator-workers, orquestador con trabajadores) · c) Depende del equipo: MKT1 __ · MKT2 __ · Web __ · Implementaciones __ | DF-13 |
| P5 | ¿El documento puede leer los repositorios de los equipos para contar el árbol (CLAUDE.md, skills o habilidades, agentes, hooks o ganchos de control)? | a) Sí, son: ____ (dueño/nombre) · b) No; le doy el conteo: skills __ · agentes __ · hooks __ (y qué bloquea cada hook) · c) No se publican | DF-06; patrón A7 |
| P6 | ¿Existen registros de las corridas (bitácora, `archivo.md`, ClickUp) de donde salgan los números de la tabla de desempeño? | a) Sí, en: ____ · b) Solo para algunos loops: ____ · c) No hay registro; se escribe «no medido» | DF-07, DF-08, DF-09 |
| P7 | ¿Quién ocupa cada carril del proceso en cada equipo (persona que pide, persona que publica o aprueba)? | a) Puedo nombrarlas: ____ · b) Solo por rol, sin nombres · c) No se publica | Carriles F-D06-3; DF-10 |
| P8 | Para el crédito: ¿qué construyó usted y qué construyó cada equipo? | a) Yo diseñé los loops y los equipos los operan · b) Diseño conjunto: ____ · c) Por equipo: MKT1 __ · MKT2 __ · Web __ · Implementaciones __ | DF-10; «lo hice yo» / «lo hicimos» |
| P9 | ¿Cómo se mide la adopción de cada megaagente? | a) Personas que lo usan y desde cuándo (ClickUp o Fathom) · b) Commits por equipo en GitHub · c) Ambas · d) No medido | Caso 6 de T06; DF-03 |
| P10 | ¿Las reuniones de Fathom con los equipos se pueden citar como fuente del flujo y del proceso? | a) Sí, con fecha y título · b) Solo como contexto, sin cita · c) No | DF-03 |

## Dónde está la innovación

El orden por importancia coincide con la dependencia de la Parte 2: primero quién (P1), luego qué loop (P2 a P4), luego cómo está armado (P5 a P7) y al final el crédito y la adopción (P8 a P10). Así una respuesta parcial ya deja publicables las primeras fichas, y cada respuesta se puede pegar directo en `plantilla-caso.md`.
