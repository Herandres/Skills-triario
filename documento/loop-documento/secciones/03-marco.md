## 3. Marco conceptual: la anatomía de un loop
Responde: P1, P5

Un loop (ciclo) es un sistema que pone a trabajar a un agente de IA, revisa lo que produce con reglas fijas, lo devuelve cuando falla y sabe cuándo parar. La tesis de Triario lo resume como diseñar la tubería que pone a trabajar a los agentes: etapas en orden, un contrato de calidad que no cambia, un revisor que no hizo el trabajo, reintentos con tope, un archivo para lo que no pasa y una persona en la puerta de producción[^1].

<!-- figura: anatomia -->

### Las piezas

**Contrato.** Los criterios de aceptación, escritos antes de empezar, que no cambian mientras corre el ciclo. En el harness (arnés, el entorno donde corre el agente) de larga duración de Anthropic, el agente solo puede cambiar el campo que marca si una prueba pasa y tiene prohibido editar las pruebas[^2].

**Ejecutor.** El agente que hace el trabajo. Recibe la tarea y el contrato, pero no decide si su resultado es aceptable.

**Auditor ciego.** Un revisor separado que solo ve la salida y el contrato, no el proceso. Anthropic lo describe como evaluator-optimizer (evaluador y optimizador): un modelo genera y otro critica hasta refinar; según reseñas del ensayo de Addy Osmani, él lo plantea como «uno escribe, otro revisa»[^3]. Hereda la separación de funciones: quien hace no aprueba[^4].

**Criterio de parada.** La condición verificable que termina el ciclo, por aprobación o por tope. Anthropic considera común incluir stopping conditions (condiciones de parada), como un número máximo de iteraciones[^5].

**Retorno a la capa que falló.** Si el auditor rechaza, la pieza vuelve a la etapa que falló con su crítica, no al inicio. Es un reintento con retroalimentación desde un checkpoint (punto de control), distinto del reintento clásico que repite la misma tarea igual[^6].

**Bitácora.** El registro de cada corrida, fuera de la memoria del agente. El harness de Anthropic deja un archivo de progreso más el historial de git para que la sesión siguiente retome[^2]; un artículo académico le atribuye a Osmani la frase «the agent forgets, the repo doesn't» (el agente olvida, el repo no)[^7].

### El paralelo con la ingeniería de datos

La tesis de Triario no da el parecido por hecho: contrasta cada par con fuentes (en tres, solo vistas en buscador) y le pone un veredicto[^8].

| Pieza del loop | Par en ingeniería de datos | Veredicto de la tesis, con sus palabras |
|---|---|---|
| Contrato | Data contract (contrato de datos) | «Se sostiene con ajuste»[^9] |
| Auditor ciego | Prueba de calidad independiente | «Se sostiene con ajuste»[^10] |
| Archivo de lo que no pasa | Dead-letter queue (cola de fallidos) | «Se sostiene con ajuste»[^11] |
| Ensanchar la ventana antes de opinar | Backfill (relleno histórico) | «No se sostiene así»[^12] |
| Bitácora | Linaje (lineage) | «Se sostiene con ajuste: partir en dos»[^13] |

**Contrato y data contract.** Un data contract (contrato de datos) es un acuerdo legible por máquina entre productor y consumidor sobre esquema, reglas de calidad y nivel de servicio. Ajuste: el par más exacto es una suite de expectativas versionada que solo cambia entre corridas[^9].

**Auditor ciego y prueba de calidad.** Herramientas como dbt o Great Expectations validan datos contra reglas; el checkpoint de Great Expectations detiene la tubería si fallan. Ajuste: «una prueba de datos es determinista; nuestro auditor es un LLM (modelo de lenguaje; LLM-as-judge, modelo como juez) y puede variar entre corridas»[^10].

**Archivo y dead-letter queue.** La cola de fallidos aísla el registro que no se pudo procesar para que el resto siga. El ajuste: «una DLQ no es un basurero, guarda contexto para revisar y reprocesar»[^11].

**Ensanchar la ventana y backfill.** Un loop puede ampliar el periodo que mira antes de opinar y callar si no hay volumen. El backfill vuelve a correr intervalos pasados sin procesar: «Eso es reprocesar historia, no ampliar la muestra». La corrección es una ventana de lookback (ventana hacia atrás que se ensancha) más un umbral de volumen que bloquea la salida[^12].

**Bitácora y linaje.** El par se parte en dos. La bitácora es observabilidad: el registro de cada corrida. El linaje es poder decir qué insumos y qué versiones del contrato y de la habilidad produjeron cada salida. Y «la línea base no es linaje»[^13].

### La tubería medallón

La arquitectura medallón ordena los datos en tres capas, bronze (crudo), silver (validado) y gold (listo para el negocio), y silver se construye leyendo bronze[^14]. Un loop recorre el mismo camino: insumo crudo, borrador aprobado y pieza lista para publicar. Por eso el reintento se reconstruye desde la capa anterior, no desde cero[^14].

<!-- figura: tuberia -->

### Dónde no calza

Un agente de IA especialista en ingeniería de datos advierte que en datos el contrato es de esquema y la prueba es determinista; en un loop el insumo es texto, el contrato es semántico y el juez es probabilístico. Propone nombrar esos límites, porque admitirlos sostiene el resto de los pares[^15].

[^1]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §5 (definición propia de Triario) · [Fuente primaria]
[^2]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §2.5 (Anthropic, Effective harnesses for long-running agents) · [Fuente primaria]
[^3]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §2.4 (Anthropic, Building effective agents) · [Fuente primaria]; §2.1 (Osmani, vía reseñas) · [Visto solo en buscador]
[^4]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §3 fila 3 (maker-checker, lectura de la tesis) · [Hipótesis]
[^5]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §2.3 (Anthropic, Building effective agents) · [Fuente primaria]; §2.2 (IBM Think) · [Visto solo en buscador]
[^6]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §3 fila 4 (MightyBot; Airflow BaseOperator) · [Fuente secundaria]
[^7]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §2.1 (arXiv 2608.21884, Lulla et al.) · [Visto solo en buscador]
[^8]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §3 (mapa de equivalencias, veredictos por fila) · [Fuente primaria]; documento/cierre-loop-engineering/d02-marco/parte1.md §1.2 (agente del marco) · [Fuente primaria]
[^9]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §3 fila 2 (Actian, Coginiti; ODCS) · [Fuente secundaria]
[^10]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §3 fila 3 (dbt docs, Great Expectations docs) · [Visto solo en buscador]
[^11]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §3 fila 5 (Kafka Connect vía MongoDB docs; DZone) · [Fuente secundaria]
[^12]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §3 fila 6 (Airflow DAG runs; Dagster asset checks) · [Visto solo en buscador]; nombre de la corrección · [Hipótesis]
[^13]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §3 filas 7 y 13 (OpenLineage, run cycle) · [Visto solo en buscador]; «línea base no es linaje» · [Hipótesis]
[^14]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §3 fila 9 (Databricks, medallion) · [Visto solo en buscador]; paralelo con el loop · [Hipótesis]
[^15]: investigacion/cierre-loop-engineering/t01-tesis/ideas-ingenieria-datos.md Idea 8 (agente especialista en ingeniería de datos) · [Hipótesis]
