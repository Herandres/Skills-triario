# D06 · Plantilla de caso para la Parte 2 (estilo 04 Portafolio)

**Tarea D06: agente especialista de la Parte 2 leyó la investigación y, tomando como base la plantilla `investigacion/cierre-loop-engineering/t03-plantillas/plantillas/04-portafolio-casos.html` y la regla de seis campos de `t06-evidencia/evidencia.md` §2.3, propone esta ficha, una por equipo, para llenarla con las respuestas de `preguntas-parte2.md`.**

Base de la forma [Fuente primaria]: la plantilla 04 tiene una página de «Mapa de casos» (tarjetas con etiqueta, nombre, resumen en una línea y resultado con dato) y una página por caso con encabezado «[Caso N] · [Equipo] [Título del caso]» y los campos Contexto, Acción propia, Acción del equipo, Resultado, Evidencia y Patrón, más un recuadro «[Captura o diagrama del caso]». Aquí se agregan tres bloques que pide el BRIEF §3 para la Parte 2: flujo, árbol y proceso. Riesgo de la 04 según T03: el aire vacío (`t03-plantillas/ideas-diseno-editorial.md` línea 44); por eso cada campo vacío lleva su marca, no se deja en blanco.

Reglas: todo en pasado; cada dato con fuente; lo que no exista, «no medido» o «[confirmar con Hernán]»; sin próximos pasos.

---

## A. Tarjeta del mapa de casos (página 1 de la Parte 2)

```
[Etiqueta: equipo]           ← P1
[Nombre del loop]            ← P2
[Resumen en una línea]       ← qué hace el loop, en pasado
[Resultado con dato]         ← P6 / P9, o «no medido»
```

## B. Página del caso

```
[Caso N] · [GDO MKT1 | GDO MKT2 | GDO Web | Implementaciones]      ← P1
[Título del caso: aserción en una oración, en pasado]
```

| Campo | Qué va | Sale de |
|---|---|---|
| **Contexto** | Situación del equipo antes del loop | P1, P10 |
| **Loop o megaagente** | Cuál de L1 a L5 (u otro) y cómo orquesta: orden fijo (prompt chaining, encadenamiento de pasos) o decidido sobre la marcha (orchestrator-workers, orquestador con trabajadores) | P2, P4 |
| **Flujo** | Pasos del flujo de referencia (`parte2-base.md` §3.0) que el equipo sí tiene | P2, P3 |
| **Árbol** | Repo · CLAUDE.md · skills o habilidades (n) · agentes (n) · hooks o ganchos de control (n, y qué bloquea cada uno) | P5 |
| **Proceso** | Carriles: persona que pide · megaagente · auditor · persona que publica | P7 |
| **Acción propia** | «Lo hice yo», con verbo concreto | P8 |
| **Acción del equipo** | «Lo hicimos», con nombres si se publican | P7, P8 |
| **Resultado** | Dato con fecha y fuente, o «no medido» | P6, P9 |
| **Evidencia** | Ruta, commit, tarea de ClickUp o reunión de Fathom | P5, P6, P10 |
| **Patrón** | Fichas de `t15-patrones/patrones.md` que lo sostienen | P2 |
| **Piezas de la tesis** | A2 contrato · A1 auditor · A3 tope · A6 archivo · E1 persona: ✔ con ruta, o vacío | P2 |
| **Dónde está la innovación** | Una o dos frases, con la evidencia | Todo lo anterior |

**Recuadro de figura:** flujo del loop (Archify `workflow`, flujo) o carriles (Archify `workflow` con `lanes`, carriles), según `parte2-base.md` §5. Si no hay registro real, la figura se rotula «reconstrucción» (`t05-deck/deck.md` lámina 5).

---

## Dónde está la innovación

La plantilla junta dos cosas que la 04 de T03 tenía separadas: la ficha de evidencia personal de T06 (seis campos, crédito separado) y el examen de la tesis (cinco piezas). Cada caso queda como un registro con la misma forma que la bitácora del loop: campos fijos, fuente por campo y la marca a la vista cuando falta el dato.
