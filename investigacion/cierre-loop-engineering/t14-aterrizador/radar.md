# T14 · El aterrizador: radar de lo que sabemos y todavía no hacemos

Rama: `claude/cierre-le-t14-aterrizador` · Fecha de la corrida: 2026-11-19 · Proyecto: cierre de Loop Engineering (Triario).

Pregunta: ¿qué conceptos ya se mencionan en el equipo, están validados afuera y todavía no sabemos aplicar?

Sellos: [Fuente primaria] (paper, documentación oficial, estándar o repositorio original) · [Fuente secundaria] (blog o reseña) · [Visto solo en buscador] (no se pudo abrir o no se intentó) · [Hipótesis] (deducción de esta tarea). Los hechos internos vienen del encargo y se usan como contexto, no como fuente externa. Las fuentes de cada concepto están en su ficha, en `fichas/`.

**El concepto que ordena esta tarea.** *The Knowing-Doing Gap* (la brecha entre saber y hacer), de Jeffrey Pfeffer y Robert I. Sutton (Harvard Business School Press, 2000), sostiene que muchas organizaciones fallan no por falta de conocimiento sino porque no convierten lo que saben en acción, y que esa brecha pesa más que la brecha entre ignorar y saber. [Visto solo en buscador] [nota de prensa de Stanford, 1999](https://news.stanford.edu/pr/99/991027know-do.html), [sitio de Pfeffer](https://jeffreypfeffer.com/?p=105). Aplicado aquí: «gobernanza de IA» y «harness» son palabras que el equipo ya usa; el radar separa lo que está validado afuera de lo que solo suena, y a cada concepto validado le asigna un primer paso de una semana para cruzar la brecha. [Hipótesis]

---

## 1. Lo que leí de la pizarra

Comandos: `git fetch origin --prune`, `git branch -r`, `git ls-tree -r` sobre cada rama `origin/claude/*`. Ramas encontradas: `cierre-le-prueba`, `cierre-le-t01-tesis`, `cierre-le-t02-cierre`, `cierre-le-t13-explorador`, `cierre-le-t15-patrones`. No modifiqué nada de otra rama.

| Archivo (rama) | Qué tomé |
|---|---|
| `investigacion/cierre-loop-engineering/t01-tesis/tesis.md` (`claude/cierre-le-t01-tesis`) | **La tesis.** La definición de una línea: «diseñar la tubería que pone a trabajar a los agentes: etapas en orden, un contrato de calidad que no cambia, un revisor que no hizo el trabajo, reintentos con tope, un archivo para lo que no pasa y una persona en la puerta de producción». La genealogía, donde el harness aparece como capa debajo del loop (Effective harnesses de Anthropic; Harness engineering de OpenAI). La lectura del harness de larga duración (sección 2.5), que reuso en la ficha de harness. Su tabla de dominios que no abrieron. |
| `investigacion/cierre-loop-engineering/t01-tesis/ideas-ingenieria-datos.md` (`claude/cierre-le-t01-tesis`) | Idea 4 (set dorado y calibración del auditor) para la ficha de evals; Idea 5 (campos mínimos de linaje: insumos, versión de contrato, versión de skill, modelo, `run_id`, vuelta, veredicto) para observabilidad y versionado. |
| `investigacion/cierre-loop-engineering/t15-patrones/patrones.md` (`claude/cierre-le-t15-patrones`) | **Los patrones.** A2 (contrato inmutable), A7 (hooks de los repos «sin ejemplo aún»), B2 (radar de tecnología: gobernanza y harness con aplicación interna baja, eje externo sin evaluar, que es justo lo que hace esta tarea), B3 (bitácora como structured note-taking), B4 (abstención), E1 (publica una persona), E2 (comité de cambios) y E3 (auditoría con rastro, «sin ejemplo aún»). Su lista de dominios que no abrieron. |
| `investigacion/cierre-loop-engineering/t15-patrones/archivo.md` (`claude/cierre-le-t15-patrones`) | Solo el formato del archivo de rechazos, que imité en `fichas/archivo.md`. |
| `investigacion/cierre-loop-engineering/t02-cierre/estandares.md` (`claude/cierre-le-t02-cierre`) | **El cierre.** Que los marcos piden un registro de lo no resuelto y que T8 propone tratar los «temas sin aplicar» como límites de alcance declarados. Este radar es ese insumo: dice qué quedó sin aplicar y por qué, sin prometer que se hará. Su lista de dominios caídos (pmi.org, prince2.com, ISO, gov.uk). |
| `investigacion/cierre-loop-engineering/t02-cierre/ideas-pmo.md` (`claude/cierre-le-t02-cierre`) | Solo los títulos. La Idea 8 («reformular temas sin aplicar como límites de alcance declarados») es la que conecta con este radar. |
| `investigacion/cierre-loop-engineering/t13-explorador/diario.md` (`claude/cierre-le-t13-explorador`) | Gobernanza marcada «No»; calibración del auditor «A medias» [Hipótesis de T13]; idea de que una salida mal formada vaya a revisión humana; la pista de Airbnb (barandas y abstención), que usé en guardrails. Su lista de dominios caídos (stripe.dev, uber.com). |
| `investigacion/cierre-loop-engineering/t00-prueba/prueba.md` (`claude/cierre-le-prueba`) | No lo leí; T01 lo resume: github.com abre, arxiv.org no. |

Esperaba encontrar `t01-tesis`, `t15-patrones` y `t02-cierre`: los tres existían.

---

## 2. La vara

Fija desde el inicio, no cambió:

- **Consenso:** lo recogen estándares u organismos (por ejemplo NIST AI RMF o ISO/IEC 42001) o la documentación oficial de los laboratorios.
- **Práctica emergente:** al menos dos fuentes primarias independientes y un caso publicado de uso en producción.
- **Moda:** solo blogs o redes. Se anota, pero no entra al radar.

Adopción aquí, solo con el contexto del encargo o la pizarra: **se habla**, **a medias**, **aplicado**, o **no sé: preguntar a Hernán**.

Zonas del radar (definición de esta tarea): **Brecha** (consenso o emergente y adopción «se habla» o «a medias»), **Fortaleza** (validado y aplicado), **Por confirmar** (validado, adopción desconocida), **Fuera** (no cumple la vara).

Revisión: auditor ciego en subagente aparte, dos vueltas, mismo criterio. Vuelta 1: 6 de 9 aprobadas; 3 rechazadas por citar a T15 sin ruta. Vuelta 2: las 3 aprobadas. Nada quedó en `fichas/archivo.md`. Al auditor le pasé las fichas, el criterio y, para poder juzgar el criterio (b), la lista de hechos internos del encargo y el texto de la vara; nada del proceso ni de las notas de esta tarea.

---

## 3. La tabla del radar

| Concepto | Madurez afuera | Adopción aquí | Zona | Ficha |
|---|---|---|---|---|
| Evaluaciones automáticas de agentes (evals) | Consenso | A medias | **Brecha** | `fichas/evals.md` |
| Arnés del agente (harness) · semilla | Consenso | Se habla | **Brecha** | `fichas/harness.md` |
| Gobernanza de IA (AI governance) · semilla | Consenso | Se habla | **Brecha** | `fichas/gobernanza-ia.md` |
| Ingeniería de contexto (context engineering) | Consenso | A medias | **Brecha** | `fichas/context-engineering.md` |
| Observabilidad y trazas | Consenso | No sé: preguntar a Hernán | Por confirmar | `fichas/observabilidad-trazas.md` |
| Presupuesto de tokens y costo | Consenso | No sé: preguntar a Hernán | Por confirmar | `fichas/presupuesto-tokens-costo.md` |
| Barandas (guardrails) | Consenso | No sé: preguntar a Hernán | Por confirmar | `fichas/guardrails.md` |
| Persona en el circuito (human-in-the-loop) | Consenso | Aplicado | Fortaleza | `fichas/human-in-the-loop.md` |
| Versionado de prompts y skills | No cumple la vara (falta caso de producción publicado) | No sé: preguntar a Hernán | Fuera | `fichas/versionado-prompts-skills.md` |

**Moda anotada, fuera del radar:** el material sobre versionado de prompts en producción que encontré fue de blogs de práctica sin empresa nombrada [Fuente secundaria] ([tianpan.co](https://tianpan.co/blog/2026-04-09-prompt-versioning-production-llm), [metacto](https://www.metacto.com/blogs/prompt-rollback-production-ai)). Esos blogs, por sí solos, son moda; el concepto queda «Fuera» y no «Moda» porque tiene documentación primaria de herramientas (MLflow, Langfuse).

**Por qué casi todo salió «consenso».** La vara cuenta la documentación oficial de los laboratorios como consenso, y Anthropic y OpenAI documentan casi todos estos conceptos. Eso dice que el concepto está reconocido, no que haya un estándar formal: solo gobernanza y human-in-the-loop tienen detrás un organismo o una ley (NIST, ISO, Reglamento europeo de IA). [Hipótesis]

**Otros conceptos.** No apareció en la búsqueda otro concepto que pasara la vara y no estuviera en la lista. La calibración del juez LLM (que proponen T01 y T13) se trató dentro de evals, porque Anthropic la describe como parte del mismo trabajo («human graders… calibrate» a los otros calificadores).

---

## 4. Lo validado que nos falta

Conceptos con madurez de consenso o emergente y adopción «se habla» o «a medias», ordenados por impacto. El orden es juicio de esta tarea [Hipótesis]: pesa más lo que refuerza la pieza central del loop (el auditor ciego con contrato fijo) y lo que el equipo ya nombra.

1. **Evals (a medias).** El auditor ciego ya es un calificador de modelo, pero nada en el contexto dice que alguien mida si el auditor acierta. Anthropic dice que los calificadores de modelo no son deterministas y que los humanos los calibran [Fuente primaria] ([anthropic.com](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)). Es la brecha que más protege lo ya construido. **Primer paso:** 20 salidas pasadas del loop de contenido, juzgadas otra vez por la persona que publica; contar coincidencias con el auditor.
2. **Harness (se habla, semilla).** Las piezas existen en los repos (CLAUDE.md, skills, agentes, algún hook), pero no se sabe qué hace cada hook. Es la palabra que el equipo ya usa y la base sobre la que corre todo el loop. **Primer paso:** un `HARNESS.md` de una página en un repo que liste lo que existe y qué bloquea cada hook.
3. **Gobernanza de IA (se habla, semilla).** Es el único concepto con estándares formales detrás (NIST AI RMF, NIST AI 600-1, ISO/IEC 42001), y Anthropic se certificó en ISO/IEC 42001 [Visto solo en buscador] ([anthropic.com](https://www.anthropic.com/news/anthropic-achieves-iso-42001-certification-for-responsible-ai)). Pesa más hacia afuera (clientes) que hacia la calidad del loop. **Primer paso:** inventario de loops con seis columnas, lleno para el loop de contenido.
4. **Context engineering (a medias).** El auditor ciego ya aplica contexto mínimo y la bitácora del loop de 30 días es structured note-taking (T15, B3). Falta llevar esa disciplina al generador. **Primer paso:** medir con `/context` lo que carga el megaagente al abrir y recortar CLAUDE.md si pasa de 200 líneas, como recomienda la documentación de Claude Code [Fuente primaria] ([code.claude.com](https://code.claude.com/docs/en/costs)).

**Para confirmar con Hernán antes del cierre** (validados afuera, adopción desconocida): observabilidad y trazas, presupuesto de tokens y costo, barandas. Si la respuesta es «no lo hacemos», los tres entran a esta lista. Mi orden propuesto sería: trazas primero (sin ellas no se puede medir ni el costo ni el acierto del auditor), luego costo, luego barandas. [Hipótesis]

**Para el deck** [Hipótesis]: una diapositiva con la frase de Pfeffer y Sutton y cuatro filas «lo sabemos / el primer paso de una semana». Para la oficina virtual: evals es el supervisor que revisa al auditor; trazas es el registro que deja cada cubículo; harness es el cubículo mismo.

---

## 5. Dominios que no abrieron

| Dominio | Error | Qué se perdió | Cómo lo traté |
|---|---|---|---|
| `nvlpubs.nist.gov` | `getaddrinfo ENOTFOUND` | Texto oficial de NIST AI 600-1 | [Visto solo en buscador]; los números de acción (GV-1.6) quedan por verificar. |
| `developers.openai.com` | `getaddrinfo ENOTFOUND` | Guía de OpenAI para migrar desde los objetos de prompt | [Visto solo en buscador]; por eso versionado no sube a consenso. |

**Heredados de la pizarra, no intentados:** `arxiv.org`, `addyosmani.com`, `*.substack.com`, `www.ibm.com`, `thenewstack.io`, `sre.google`, `docs.aws.amazon.com`, `opentelemetry.io`, `www.pmi.org`, `www.prince2.com`, `scrumguides.org`, `stripe.dev`, `www.uber.com`.

**No intentados para ahorrar aperturas** (todo lo de ahí va como [Visto solo en buscador]): `openai.com`, `iso.org`, ISO y vendedores de 42001, `artificialintelligenceact.eu`, `eur-lex.europa.eu`, `ai-act-service-desk.ec.europa.eu`, `manus.im`, `mlflow.org`, `openai.github.io`, `qconsf.com`, `news.stanford.edu`, `jeffreypfeffer.com`, `www.anthropic.com/news`.

**Abrieron bien:** `www.anthropic.com/engineering` (Demystifying evals, multi-agent research system), `code.claude.com` (costs, Agent SDK overview) y `github.com` (openai-agents-python, NeMo-Guardrails, langfuse, semantic-conventions, semantic-conventions-genai). Para leer los demás directo hay que permitirlos en la configuración de red del entorno.

**Presupuesto usado:** 18 búsquedas de 25 y 11 aperturas de 15 (2 fallidas).

**Quedó sin fuente primaria abierta:** el texto de NIST AI RMF y AI 600-1, ISO/IEC 42001 (estándar de pago), el artículo 14 del Reglamento europeo de IA, el post de Harness engineering de OpenAI, el anuncio de Anthropic sobre ISO 42001, el post de Manus, la charla de Airbnb y el libro de Pfeffer y Sutton. Tampoco encontré un caso publicado de versionado de prompts en producción.
