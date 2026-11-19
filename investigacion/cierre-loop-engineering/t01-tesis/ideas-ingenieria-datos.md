# T7 · Agente especialista en arquitectura e ingeniería de datos · leyó la investigación T1 y, tomando como base lo siguiente, propone:

### Idea 1 · Write-Audit-Publish como columna vertebral del mapa
- Leí: «Generador más auditor ciego» (2.4), «Parar en "listo para publicar"; publica una persona» (fila 8) y «Capas del loop: insumo crudo → borrador aprobado por el auditor → "listo para publicar"» (fila 9).
- Tomando como base: el patrón Write-Audit-Publish (WAP) de los lakehouses. Se escribe en una rama de staging aislada, se audita con chequeos de calidad y solo si pasa se publica (fast-forward a main). Si falla, se descarta la rama y main nunca se toca. Es como un ingeniero de datos nombra hoy «nadie ve lo que no pasó la auditoría».
- Propongo: agregar una fila **WAP** que agrupe las filas 3, 8 y 10. Write = el generador trabaja en su worktree o borrador. Audit = auditor ciego contra el contrato fijo. Publish = la persona en la puerta. Es un nombre que un ingeniero de datos reconoce al instante y que cuenta tres reglas del loop en una sola palabra. Ajuste honesto: en WAP el publish suele ser automático si la auditoría pasa; en nuestro loop el publish es humano a propósito, porque publicar no es idempotente (fila 10). Hay que decir esa diferencia en voz alta.
- Fuente: [AWS Big Data Blog, WAP con ramas de Iceberg](https://aws.amazon.com/blogs/big-data/build-write-audit-publish-pattern-with-apache-iceberg-branching-and-aws-glue-data-quality) [Visto solo en buscador]; [lakeFS, how to implement WAP](https://lakefs.io/blog/how-to-implement-write-audit-publish/) [Visto solo en buscador].

### Idea 2 · La vuelta como una corrida nueva, no como un ciclo dentro del DAG
- Leí: «Además un DAG no tiene ciclos: la "otra vuelta" es el bucle evaluator-optimizer montado encima. Decirlo así evita que un ingeniero de datos objete "un DAG no se repite".» (fila 1).
- Tomando como base: en Airflow el grafo tiene que ser acíclico. La forma habitual de repetir es sacar la parte que se repite a otro DAG y dispararla de nuevo (TriggerDagRunOperator) o ramificar con branch operators. Cada repetición es una corrida distinta, con su propio identificador. Dynamic task mapping abre en paralelo dentro de una corrida, pero no crea ciclos.
- Propongo: cerrar la objeción de la fila 1 con un modelo explícito. Cada vuelta del loop es una **corrida nueva** (run) del mismo DAG lineal (generar → auditar), con su `run_id` y número de intento. El megaagente funciona como el operador que vuelve a disparar la corrida mientras no se cumpla la condición de parada y no se llegue al tope de 3. Así el dibujo del cierre muestra un DAG limpio más una flecha de redisparo por fuera, que es exactamente como lo dibujaría un ingeniero de datos. De paso, esto le da el `runId` que pide la fila 7a.
- Fuente: [Airflow, Dynamic Task Mapping](https://airflow.apache.org/docs/apache-airflow/3.2.1/authoring-and-scheduling/dynamic-task-mapping.html) [Visto solo en buscador]; [discusión Airflow #21726 sobre condiciones de loop](https://github.com/apache/airflow/discussions/21726) [Visto solo en buscador].

### Idea 3 · Falta el concepto de frescura y SLA
- Leí: «Ensanchar la ventana antes de opinar (ayer, 3 días, 1 semana, 2 semanas) y callar si no hay volumen» (fila 6) y «Loop de ciclo largo (resultado a 30 días) con línea base» (fila 13).
- Tomando como base: las políticas de frescura (freshness policies) de Dagster. Declaran cada cuánto debería tener datos nuevos un activo o un plazo tipo cron, y un freshness check marca como atrasado al activo que no se actualizó a tiempo. En ingeniería de datos un activo que «calla» sin que nadie lo note es un incidente.
- Propongo: agregar una fila **Frescura / SLA del activo**. Cada salida del loop declara cuándo se espera (por ejemplo, el informe semanal). Si el loop calla por falta de volumen (fila 6), eso queda registrado como «sin publicar por umbral», no como silencio. Así se distingue «no había datos» de «el loop no corrió». Sin esto, la regla de callar es imposible de auditar desde afuera.
- Fuente: [Dagster, Data freshness checks](https://docs.dagster.io/guides/test/data-freshness-testing) [Visto solo en buscador].

### Idea 4 · El auditor LLM necesita su propia calibración y severidades
- Leí: «Ajuste: una prueba de datos es **determinista**; nuestro auditor es un LLM (LLM-as-judge, modelo como juez) y puede variar entre corridas.» (fila 3) y «subir de L1 a L3 "only after the verifier has been right for a week"» (fila 15).
- Tomando como base: en datos, un chequeo nuevo no se pone a bloquear sin antes medirlo. Se corre contra datos conocidos y se le asigna severidad (en dbt, `warn` o `error`). Una prueba que a veces pasa y a veces no es una «flaky test», y la práctica es aislarla y no dejar que bloquee producción.
- Propongo: que el cierre diga dónde se rompe la analogía y cómo se arregla. (a) Un **set dorado** fijo de casos ya juzgados por una persona contra el que se corre el auditor cuando cambian el contrato o el modelo. (b) **Severidades** en cada criterio del contrato: bloqueante frente a advertencia. (c) Registrar la tasa de acuerdo con la persona en la puerta como la métrica que habilita la promoción de la fila 15. Así «el verificador acertó una semana» pasa a ser medible.
- Fuente: sin fuente nueva. [Hipótesis] en el diseño del set dorado.

### Idea 5 · Linaje con versiones fijadas, incluido el modelo
- Leí: «Linaje, en nuestro loop, sería poder decir qué insumos, qué versión del contrato y qué versión de la skill produjeron cada salida.» (fila 7b).
- Tomando como base: reproducibilidad en pipelines. Se fijan las versiones de las dependencias y del código de transformación, y cada corrida emite eventos con facets (metadatos adjuntos) en OpenLineage.
- Propongo: completar la fila 7b con dos campos que hoy faltan. El **modelo y su versión** (en un loop de agentes, cambiar de modelo es como cambiar el motor de transformación) y el **número de vuelta** dentro de la corrida. El registro mínimo por salida quedaría: insumos, versión de contrato, versión de skill, modelo, `run_id`, vuelta y veredicto. Con eso la DLQ de la fila 5 hereda gratis el contexto que el texto pide.
- Fuente: sin fuente nueva.

### Idea 6 · Grano y partición: «una cosa por vuelta»
- Leí: «Un `while` de shell que le pasa el mismo PROMPT.md a un agente en cada vuelta [...] "una cosa por vuelta"» (2.3) y «Un **coding agent** (agente de código) avanza una funcionalidad por sesión» (2.5).
- Tomando como base: el grano (grain) de una tabla y el procesamiento por particiones. Se define primero qué es una fila. Luego se procesa, reintenta y rellena por partición, para que una falla no contamine el lote entero.
- Propongo: agregar una fila **Grano / partición**. Antes de diseñar un loop, declarar su unidad de trabajo (un cliente, una pieza, una funcionalidad de la lista JSON). Los reintentos, la DLQ y el tope de 3 vueltas se aplican por unidad, no por corrida completa. Es el concepto que explica por qué el harness de Anthropic funciona con una lista de más de 200 funcionalidades y un campo `passes` por cada una.
- Fuente: sin fuente nueva. [Hipótesis] en el nombre de la fila.

### Idea 7 · La DLQ necesita redrive y alerta de profundidad
- Leí: «Ajuste: una DLQ **no es un basurero**, guarda contexto para revisar y reprocesar. [...] y alguien debería revisarlo con alguna frecuencia [Hipótesis].» (fila 5).
- Tomando como base: en operación de colas, la DLQ se acompaña de dos prácticas. Una alarma sobre cuántos mensajes acumula y un mecanismo de redrive (devolver los mensajes a la cola original cuando se corrigió la causa).
- Propongo: cambiar «alguien debería revisarlo con alguna frecuencia» por dos reglas concretas. (a) **Profundidad de la cola** como indicador visible en la oficina virtual (cuántas salidas archivadas sin recomendación defendible hay por loop). (b) **Redrive**: cuando cambia el contrato o la skill con versión nueva, lo archivado se vuelve a pasar por el loop. Esto conecta la fila 5 con la regla de la fila 2 (el contrato cambia solo entre corridas).
- Fuente: sin fuente nueva.

### Idea 8 · Cómo contarlo: corregir la definición corta y nombrar dónde no calza
- Leí: «Versión corta: *ingeniería de datos aplicada al trabajo de los agentes.*» (sección 5) y «No encontré [...] a nadie de la industria que presente explícitamente los loops de agentes con el vocabulario completo de la ingeniería de datos.» (sección 4).
- Tomando como base: un ingeniero de datos reconoce sus patrones, pero desconfía cuando se los estiran. En su mundo, el contrato es de esquema y la prueba es determinista. Aquí el insumo es texto, el contrato es semántico y el juez es probabilístico.
- Propongo: cambiar la versión corta por una que no prometa de más, por ejemplo «los patrones de operación de pipelines aplicados al trabajo de los agentes». Cerrar el mapa con un recuadro breve de **dónde no calza**: contrato semántico y no de esquema (fila 2), juez probabilístico (fila 3), reintento con crítica y no idéntico (fila 4), ventana adaptativa y no backfill (fila 6). Admitir los límites hace que el ingeniero de datos crea en el resto de las filas. Para la presentación sirve una tabla de dos columnas, «lo que dirías tú / lo que hace el loop», con WAP (Idea 1) como primera fila de entrada.
- Fuente: sin fuente nueva. [Hipótesis] sobre cómo lo recibe la audiencia.
