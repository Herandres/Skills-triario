# T5 · Del documento al deck: cómo se convierte un informe de cierre en una presentación para hablar

Rama: `claude/cierre-le-t05-deck` · Fecha de la corrida: 2026-11-19 · Proyecto: cierre de Loop Engineering (Triario).

Pregunta: ¿cómo se convierte un informe de cierre en una presentación para hablar?

Sellos: [Fuente primaria] · [Fuente secundaria] · [Visto solo en buscador] (no se pudo abrir) · [Hipótesis] (deducción mía). Los hechos internos del proyecto vienen del encargo y se usan como contexto. **No hay cifras de Triario en este archivo**: donde hacen falta van como marcador `[dato de la bitácora]`, `[dato de ClickUp]` o `[confirmar con Hernán]`.

Presupuesto usado: 5 búsquedas de 15 y 2 aperturas de 10 (las 2 fallaron por red).

---

## 1. Lo que leí de la pizarra

Comandos: `git fetch origin --prune`, `git branch -r`, `git ls-tree -r` en cada `origin/claude/*`, y `git show` de lo que sirve. Ramas encontradas: `prueba`, `t01-tesis`, `t02-cierre`, `t03-plantillas`, `t04-mostrar-loop`, `t06-evidencia`, `t13-explorador`, `t14-aterrizador`, `t15-patrones`. No existe carpeta de T7 (anotado, sigo sin ella). No modifiqué nada de otra rama. Leí títulos de todo y a fondo solo lo que usa el deck.

| Archivo (rama `claude/cierre-le-…`) | Qué tomé |
|---|---|
| `t01-tesis/tesis.md` (`t01-tesis`) | **La tesis.** Genealogía del prompt a la tubería (flow engineering de AlphaCodium: el valor está en el flujo; Building effective agents; harness; loop engineering de Steinberger y Osmani). Tomé la definición de una línea: etapas en orden, contrato que no cambia, revisor que no hizo el trabajo, reintentos con tope, archivo para lo que no pasa y una persona en la puerta. Sus citas de Osmani son de reseñas [Visto solo en buscador], y las heredo con ese sello. |
| `t02-cierre/estandares.md` y `ideas-pmo.md` (`t02-cierre`) | **El cierre.** Su índice ejecutivo 3.2 (10 láminas) como esqueleto de partida; la regla de redactar en pasado lo hecho; la Idea 7 (sección «Decisión de cierre» en pasado) y la Idea 8 (temas sin aplicar como límites de alcance declarados). Aviso heredado: los marcos PMI/PRINCE2 solo se vieron en buscador. |
| `t15-patrones/patrones.md` (`t15-patrones`) | **Los patrones.** A1 (el que hace no es el que aprueba), A2 (reglas fijadas antes), A3 (devolver a la estación que falló), A6 (archivo de no resueltos), B1 (viaje de aprendizaje), B3 (bitácora), B4 (abstención), C5 (supervisor que recorre), E1 (publica una persona). La sección 6 trae la tabla «lo que ya hace tu equipo / lo que hace el loop» y la frase para el orador. Tomé también sus advertencias de dónde no calza (el auditor LLM no es determinista; la ventana que se ensancha no es backfill). |
| `t14-aterrizador/radar.md` (`t14-aterrizador`) | **El radar.** Persona en el circuito = fortaleza; evals, harness, gobernanza y context engineering = brecha; observabilidad, costo de tokens y guardrails = por confirmar. Define qué lámina es prueba y cuál es límite. |
| `t06-evidencia/evidencia.md` y `ideas-talento.md` (`t06-evidencia`) | **La evidencia.** Los 6 casos con campos «lo hice yo / lo hicimos», orden de peso de la evidencia (antes y después medido por el sistema pesa más que horas autorreportadas), y la regla «cada número lleva fuente y fecha; si no existe, se omite». Ahí salen los marcadores de datos. |
| `t04-mostrar-loop/innovacion.md` y `ideas-visualizacion.md` (`t04-mostrar-loop`) | **Las ideas visuales.** Idea 1 (la oficina con las reglas a la vista), Idea 3 (dos corridas lado a lado) y el guion de 10 escenas, que uso como material de las láminas 3, 5, 6, 7 y 8. |
| `t03-plantillas/guia-pdf.md` (`t03-plantillas`) | **Plantillas.** Solo confirmé que el informe es HTML a PDF; el deck es un producto aparte que reusa su identidad visual. No usé su contenido técnico. |
| `t00-prueba/prueba.md` (`prueba`), `t13-explorador/diario.md` | Solo el dato de red: `github.com` abre; varios dominios no. El diario no aportó al deck. |

**Qué no existía:** el documento de cierre mismo (el informe formal) no está en la pizarra todavía, y no hay números de Triario. Por eso cada lámina apunta a la fuente de la pizarra y a un marcador de dato.

---

## 2. Qué dice la teoría sobre pasar de documento a deck

### 2.1 Nancy Duarte, *Resonate* (sparkline)
La sparkline es un mapa de la presentación que alterna entre «lo que es» (what is) y «lo que podría ser» (what could be), y termina en un «nuevo bienestar» (new bliss). [Visto solo en buscador] ([duarte.com](https://www.duarte.com/resources/secret-structure-great-talks/), [Duarte, estructura y relato](https://www.duarte.com/blog/move-presentation-audience-with-story-techniques-in-presentations/)). La página no abrió desde la nube; el resumen es del buscador. Un resumen secundario añade que la forma tiene vaivén rápido y tres crescendos, y un sitio habla de «tres actos» con «inciting moment» que el buscador no pudo confirmar en material de Duarte; **no uso ese detalle**. [Fuente secundaria] ([resumen](https://library-d7m.pages.dev/communication-framework/storytelling-and-presentation/duarte-sparkline)).
**Qué me llevo:** un informe de cierre mira hacia atrás y es plano; un deck para hablar necesita tensión. Alterno «lo que era» (prompt suelto, criterio móvil) con «lo que podría ser / lo que es ahora» (tubería con reglas fijas) y termino en el nuevo estado. [Hipótesis]

### 2.2 Barbara Minto, pirámide
La conclusión va primero (governing thought, idea rectora), con dos o tres argumentos debajo; SCQA (situación, complicación, pregunta, respuesta) arma la introducción. [Visto solo en buscador] ([ThinkInsights](https://thinkinsights.net/strategy/pyramid-principle), [Road to Offer](https://www.roadtooffer.com/blog/pyramid-principle)). Las fechas de origen difieren entre las fuentes (años 60, 70 o 1987); no las cito.
**Qué me llevo:** el informe puede ir cronológico; el deck, no. La respuesta («Loop Engineering es una tubería») sale en la lámina 2, y las pruebas son tres argumentos. [Hipótesis]

### 2.3 Michael Alley, diapositivas de aserción y evidencia
Cada diapositiva de cuerpo lleva un título en oración completa (la aserción, izquierda, máximo dos líneas) y debajo evidencia visual que la sostiene, en vez de título-tema con viñetas. Las diapositivas ayudan a la audiencia a entender, no sirven de apuntes del orador. [Visto solo en buscador] ([instrucciones de Penn State](https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/7/13153/files/2008/10/Assertion-Evidence-Slides-Instruction_Set.pdf), [ASEE](https://peer.asee.org/28944.pdf)). `writing.engr.psu.edu` no abrió. Un estudio reporta mejor comprensión en conceptos complejos que con viñetas, con resultados mixtos en algunas medidas. [Visto solo en buscador] ([ASEE](https://peer.asee.org/assertion-evidence-slides-appear-to-lead-to-better-comprehension-and-recall-of-more-complex-concepts.pdf)).
**Qué me llevo:** por eso cada lámina de abajo tiene «aserción en una frase» y «evidencia», que es la evidencia visual, no texto.

### 2.4 Tiempos por diapositiva
La regla 10/20/30 de Guy Kawasaki (10 diapositivas, 20 minutos, letra de 30 puntos o más) nació para pitches a inversionistas; los blogs derivan de ahí unos 2 minutos por diapositiva, y no es una frase suya. [Fuente secundaria] ([SlideModel](https://slidemodel.com/the-10-20-30-rule-of-presentations/)). El tope de 20 minutos sirve para dejar espacio a preguntas. **Mi propuesta**: 12 láminas, de 1 a 2 minutos cada una según su peso, unos 18 a 20 minutos más preguntas. Es un presupuesto de trabajo, no una norma. [Hipótesis]

### 2.5 Notas del orador
Las guías coinciden en: notas como pistas cortas (palabras clave, cifras, nombres de fuente), no un guion; marcar transiciones y gestos entre corchetes; escribir completas solo las cifras y citas que exigen precisión; y obtener el tono hablado diciéndolo en voz alta y transcribiendo. [Fuente secundaria] ([Toastmasters](https://toastmasters.org/magazine/magazine-issues/2018/oct2018/22-communication), [The Speaker Lab](https://thespeakerlab.com/blog/speaker-notes/), [GenPPT](https://genppt.com/blog/how-to-write-speaker-notes)). Son blogs y revistas de oratoria, no estándares.

### 2.6 La conversión, en una regla
Informe: sección por tema, evidencia completa, pasado, lectura individual. Deck: **una aserción por lámina, la evidencia como imagen, el detalle en las notas y en el informe**, con la respuesta primero (Minto) y vaivén entre antes y después (Duarte). El informe queda como anexo para quien quiera el detalle. [Hipótesis]

---

## 3. Estructura del deck: 12 diapositivas

Esqueleto: parte del índice ejecutivo 3.2 de `t02-cierre/estandares.md` (10 láminas), reordenado con pirámide y sparkline, y con dos láminas añadidas (reintento y archivo; cierre). Cuatro movimientos:
- **A · Lo que era → lo que podría ser** (láminas 1 a 3, SCQA)
- **B · La respuesta y lo que hay hoy** (láminas 4 y 5)
- **C · Tres pruebas más dos refuerzos** (láminas 6 a 10)
- **D · Del equipo humano al nuevo estado, con límites** (láminas 11 y 12)

Los marcadores en `[corchetes]` quedan para que Hernán los llene. Ninguno se estima aquí.

| # | Min | Mov. | Aserción (título de la lámina) | Evidencia que la sostiene (imagen) | Sale de |
|---|---|---|---|---|---|
| 1 | 1 | A · *lo que es* | Un prompt suelto no escala: el valor está en el flujo que lo rodea. | Una sola burbuja de prompt contra el mapa de un flujo. Dato de apoyo: en AlphaCodium, los autores dicen que ~95 % del esfuerzo fue diseño y datos, no prompts. [Visto solo en buscador] | `t01-tesis/tesis.md` §2.3 |
| 2 | 2 | A · *podría ser* | Loop Engineering es ingeniería de tuberías: se repite solo, se revisa con reglas fijas y sabe cuándo parar. | Diagrama de tubería: etapas → contrato fijo → auditor → reintento con tope → archivo → persona. Comparación con fuentes → transformaciones → controles de datos. **Esta es la respuesta primero (Minto).** | `t01-tesis/tesis.md` (definición y paralelo con ingeniería de datos); `t15-patrones/patrones.md` §6 |
| 3 | 2 | A · puente | Dibujamos el loop como una oficina para que cualquiera lo vea. | Captura de la oficina virtual del compañero y de Pixel Agents ([repo](https://github.com/pablodelucca/pixel-agents), abrió desde GitHub según la pizarra [Fuente primaria]). Lo que falta en ambos: contrato, vueltas y veredicto. | `t04-mostrar-loop/innovacion.md` Idea 1 y guion; `t15-patrones/patrones.md` §6 (gestos por patrón, C5) |
| 4 | 1 | B | Hoy hay cuatro equipos con megaagentes: Implementaciones, dos células de marketing y Web. | Mapa de cuatro cubículos con su repo (CLAUDE.md, skills, agentes) y un hook en uno. Adopción por equipo `[dato de ClickUp / GitHub]`. Límite: los hooks están en «algún» repo, no es práctica general. | `t06-evidencia/evidencia.md` Caso 6; `t14-aterrizador/radar.md`; patrón A7 en `t15-patrones` |
| 5 | 2 | C · prueba 1 | Con el contrato del auditor fijo desde el inicio, el loop aprobó en la primera vuelta. | Dos corridas lado a lado: criterio móvil (no cerró en 3 vueltas) y contrato fijo (primera vuelta). Usar la corrida real si hay registro; si no, rotular «reconstrucción». Corridas comparadas `[dato de la bitácora]`. | `t06-evidencia/evidencia.md` Caso 1; `t04-mostrar-loop/ideas-visualizacion.md` Idea 3; patrones A1 y A2 |
| 6 | 1.5 | C · refuerzo | El reintento vuelve a la capa que falló, con máximo 3 vueltas, y lo que no pasa se archiva. | Una hoja que camina a la capa que falló, contador 1/3, 2/3, 3/3 y archivador «sin recomendación defendible». Piezas por vuelta `[dato de la bitácora]`. | `t06-evidencia/evidencia.md` Caso 2; `t15-patrones/patrones.md` A3 y A6; guion escenas 5 y 6 |
| 7 | 1.5 | C · prueba 2 | Si no hay datos suficientes, el loop se calla. | Ventana de calendario que se ensancha (ayer, 3 días, una semana, dos semanas) y un personaje con el dedo en la boca. Veces que se calló `[dato de la bitácora]`. Sin umbral inventado. | `t06-evidencia/evidencia.md` Caso 3; `t15-patrones/patrones.md` B4 (aviso: no es backfill) |
| 8 | 1.5 | C · prueba 2 | El loop de contenido para en «listo para publicar»: publica una persona. | Bandeja «Listo para publicar» con una puerta y una persona. Piezas devueltas y causa `[dato de ClickUp]`. Es la fortaleza «Aplicado» del radar. | `t06-evidencia/evidencia.md` Caso 4; `t14-aterrizador/fichas/human-in-the-loop.md`; patrón E1 |
| 9 | 1.5 | C · prueba 3 | El loop de ciclo largo midió el resultado a 30 días contra una línea base. | Carril de 30 días con entradas de bitácora y el punto de la línea base. Línea base y resultado `[dato de la bitácora]`; si el ciclo no ha cerrado a la fecha, decirlo. | `t06-evidencia/evidencia.md` Caso 5; `t04-mostrar-loop/ideas-visualizacion.md` Idea 6; patrones B1 y B3 |
| 10 | 1.5 | D · *nuevo estado* | Nada de esto es nuevo para un equipo humano; lo nuevo es escribirlo como reglas que el agente no puede saltarse. | Tabla de dos columnas: «lo que ya hace tu equipo» / «lo que hace el loop» (maker-checker, data contract, reintento, dead-letter queue, viaje de aprendizaje con bitácora, human-in-the-loop). Cinco filas son las cinco piezas de la definición. | `t15-patrones/patrones.md` §6 e índice; `t02-cierre/estandares.md` §3.2 lámina 8 |
| 11 | 1.5 | D · límites | Gobernanza de IA y harness quedaron fuera: el equipo los nombra y aún no sabe aplicarlos. | El plano del edificio con la sala de gobernanza a oscuras y evals, harness y context engineering como «Brecha». Dicho como alcance, no como pendiente. | `t14-aterrizador/radar.md`; `t02-cierre/ideas-pmo.md` Idea 8; `t04-mostrar-loop/ideas-visualizacion.md` Idea 8 |
| 12 | 1.5 | D · cierre | El trabajo quedó como una tubería que cualquier equipo puede copiar; esa fue la decisión de cierre. | Una lámina de tres lecturas: resultado, aporte propio (quién hizo qué, con nombres) y evidencia más débil. Texto de decisión en pasado `[confirmar con Hernán y la gerencia]`. | `t02-cierre/ideas-pmo.md` Idea 7; `t06-evidencia/ideas-talento.md` Ideas 4 y 8; `t06-evidencia/evidencia.md` §2.3 |

Suma: 20 minutos redondos con las láminas de mayor peso (2, 3, 5) en 2 minutos. [Hipótesis]

**Cómo cae la teoría en esa tabla** [Hipótesis]:
- Sparkline: 1 (*es*) → 2 (*podría ser*) → 3 a 4 (puente al presente) → 5 a 9 (pruebas: el *podría ser* se vuelve *es*) → 10 (nuevo bienestar) → 11 (límite honesto) → 12 (cierre).
- Pirámide: respuesta en la 2; tres argumentos = contrato fijo y reintento acotado (confiable), abstención y persona en la puerta (seguro), ciclo largo (medible).
- Aserción y evidencia: todas las columnas «Aserción» son oraciones completas y la evidencia es una imagen, no una lista.

**Nota de coherencia.** El informe usa pasado y no lista pendientes (regla de t02). La lámina 11 se redacta como límite de alcance, y la 12 como decisión tomada. Si la decisión aún no se tomó, se dice «a la fecha, X» y no se inventa.

---

## 4. Notas del orador

### 4.1 Plantilla (una por lámina)

```
LÁMINA N · título corto · minutos: X
ABRE (gesto/pregunta, 1 línea):
DI (3 a 5 pistas, no frases completas):
  - 
  - 
CIFRA/CITA EXACTA (escrita completa, con fuente y fecha, o «no medido»):
CRÉDITO (lo hice yo / lo hicimos, con nombres):
TRANSICIÓN a la siguiente (1 frase, en voz alta):
SI PREGUNTAN (la objeción probable y la respuesta honesta):
[PAUSA] / [SEÑALA LA IMAGEN] / [CAMBIA DE LÁMINA]
FUENTE EN LA PIZARRA: ruta del archivo
```

Reglas [Hipótesis, apoyadas en 2.5]: máximo 6 líneas visibles; solo las cifras y citas se escriben enteras; nada de dato sin fuente; si el dato no existe se dice «no lo medimos» en voz alta; el crédito de otros se nombra en la nota, no se deja implícito.

### 4.2 Ejemplo aplicado · Lámina 5 (contrato fijo)

```
LÁMINA 5 · El contrato que no se mueve · minutos: 2
ABRE: «¿Qué pasa si el examinador cambia el examen mientras usted lo presenta?»
DI:
  - Dos corridas, mismo loop: el auditor es otro agente, en otro cuarto, solo ve la salida.
  - Corrida 1: el criterio se movió a mitad; 3 vueltas y no cerró.
  - Corrida 2: contrato fijo desde el inicio; aprobó en la primera.
  - Lo que cambió no fue el modelo: fue una regla que no se mueve.
CIFRA/CITA EXACTA: «no cerró en 3 vueltas» / «aprobó en la primera vuelta» (hecho interno). Corridas comparadas: [dato de la bitácora]; fechas y versión del contrato: [dato de la bitácora]. Si no hay registro de la corrida, decirlo: «esta es una reconstrucción».
CRÉDITO: Hernán fijó el contrato antes de la corrida [confirmar con Hernán]; quién más diseñó o adoptó el contrato: [confirmar con Hernán, nombres].
TRANSICIÓN: «Fijar la regla no basta: ¿qué pasa cuando igual falla?»
SI PREGUNTAN: «¿El auditor LLM es determinista?» → No. Es un modelo, no un manual con checklist cerrado; por eso el contrato se escribe antes y se versiona (patrón A1, aviso de t15).
[SEÑALA el cartel de la pared en cada corrida] [PAUSA tras «aprobó en la primera»]
FUENTE EN LA PIZARRA: t06-evidencia/evidencia.md (Caso 1); t04-mostrar-loop/ideas-visualizacion.md (Idea 3); t15-patrones/patrones.md (A1, A2)
```

### 4.3 Ejemplo aplicado · Lámina 8 (listo para publicar)

```
LÁMINA 8 · El loop no cruza la puerta · minutos: 1.5
ABRE: «Hasta aquí el loop trabaja solo. Aquí se detiene.»
DI:
  - El loop de contenido termina en «listo para publicar».
  - Publica una persona, no el agente.
  - Separar quien hace de quien decide es el patrón humano de siempre.
  - Es lo que el radar marca como fortaleza «Aplicado».
CIFRA/CITA EXACTA: piezas llevadas a «listo para publicar», piezas devueltas y causa, tiempo de ciclo: [dato de ClickUp]. Línea base sin loop: [dato de ClickUp] o «no medida».
CRÉDITO: el diseño del punto de parada y del contrato de calidad de la pieza [confirmar con Hernán]; la persona que publica [nombre, confirmar].
TRANSICIÓN: «Hasta ahora son cosas que resuelven una vuelta. ¿Y los resultados que tardan 30 días?»
SI PREGUNTAN: «¿Por qué no publicar solo?» → porque el control sobre qué sale al mundo es de una persona; el loop produce y verifica, no responde por la publicación.
[SEÑALA la puerta y la persona] [PAUSA]
FUENTE EN LA PIZARRA: t06-evidencia/evidencia.md (Caso 4); t14-aterrizador/radar.md; t15-patrones/patrones.md (E1)
```

---

## 5. Qué quedó sin fuente

- Duarte y Alley: solo vistos en buscador; no pude confirmar con el texto original los nombres exactos de las partes ni cifras del estudio de comprensión. Minto: la fuente es secundaria y no se verificaron fechas.
- «Dos minutos por diapositiva» y «20 minutos más preguntas» son presupuesto de trabajo mío, no norma.
- Cifras de Triario (corridas, piezas, adopción, línea base y resultado a 30 días): no encontradas; marcadores en las láminas 4 a 9.
- El documento de cierre mismo y T7 no existían en la pizarra al correr.

---

## 6. Dominios que no abrieron

| Dominio | Error | Qué se perdió | Cómo lo traté |
|---|---|---|---|
| `www.duarte.com` | `getaddrinfo ENOTFOUND` | Estructura sparkline en la fuente | [Visto solo en buscador] |
| `writing.engr.psu.edu` | `getaddrinfo ENOTFOUND` | Guía de Alley y checklist | [Visto solo en buscador] |

Heredados de la pizarra y no intentados: `arxiv.org`, `addyosmani.com`, `*.substack.com`, `www.ibm.com`, `thenewstack.io`, `www.pmi.org`, `www.prince2.com`, `scrumguides.org`, `sre.google`, `developer.chrome.com`, `pagedjs.org` y los de T15. Tras los dos fallos no probé otros dominios. Para leerlos directo hay que permitirlos en la red del entorno.
