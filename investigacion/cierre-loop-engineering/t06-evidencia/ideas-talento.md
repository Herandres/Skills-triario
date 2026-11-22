# T12 · Agente especialista en evaluación de desempeño y desarrollo de talento · leyó la investigación T6 y, tomando como base lo siguiente, propone:

Nota: revisión ciega por subagente; recibió solo el texto de evidencia.md. No hizo búsquedas web.

### Idea 1 · Escalera de evidencia con peso declarado
- Leí: "Qué evidencia pesa más (orden propuesto) [Hipótesis]: 1. Un antes y un después medidos por el sistema… 6. Horas ahorradas autorreportadas: pesa menos."
- Tomando como base: en evaluación de desempeño, los datos observables y verificables por terceros pesan más que la percepción propia. Un evaluador pregunta primero "¿quién más puede comprobarlo?".
- Propongo: que cada fila de los 6 casos lleve una etiqueta de nivel de evidencia (N1 sistema con línea base, N2 contrafactual interno, N3 calidad y control, N4 adopción, N5 tercero, N6 autorreporte). Así quien evalúa ve de un vistazo qué casos son sólidos y cuáles son declaración. Aceptar un caso de nivel bajo es mejor que subirlo con una cifra estimada.
- Fuente: sin fuente nueva.

### Idea 2 · Columna "autor de la medición" para que el número no dependa de quien lo presenta
- Leí: "Cada número lleva fuente y fecha; el que no existe se omite o se marca «no medido», nunca se estima." Y también: "Lección: no afirmar ahorro con encuestas de sensación; usar registros del sistema [Hipótesis]."
- Tomando como base: la separación entre quien ejecuta y quien mide (la misma lógica de A1 de t15, aplicada al número). Una cifra medida por el sistema o por otra persona tiene más credibilidad que una que calcula el propio interesado.
- Propongo: añadir a los seis campos de cada caso un séptimo, "quién midió y de dónde salió" (ClickUp, grabación, bitácora, commits). Si el único origen es Hernán, el número se marca como autorreportado y baja de nivel. Esto no agrega trabajo nuevo: usa las fuentes que el esqueleto ya nombra.
- Fuente: sin fuente nueva.

### Idea 3 · Fijar la métrica y la ventana de comparación antes de mirar el resultado, con registro fechado
- Leí: "Fijar la métrica antes de mirar el resultado [Hipótesis]." Y del estándar: el cierre de pilotos de IA "pide criterios fijados antes".
- Tomando como base: en evaluación por objetivos, los criterios acordados de antemano evitan el sesgo de elegir después el indicador que mejor se ve. La evidencia vale más si se puede demostrar que el criterio existía antes del resultado.
- Propongo: para cada caso, una línea con "métrica, ventana y fecha en que quedó escrita", tomada de la bitácora o del historial de la tarea. Si un caso no tiene criterio previo registrado (por ejemplo el caso 1, donde el criterio se movió), se dice y se cuenta como lección, no se oculta. Esto convierte el propio contrafactual del caso 1 en prueba de por qué importa fijar el criterio.
- Fuente: sin fuente nueva.

### Idea 4 · Redactar el aporte propio con verbo concreto y objeto medible, y reservar "habilité" para el caso 6
- Leí: "nombrar el propio papel dentro del relato del equipo, evitar verbos vagos como «ayudé con», atar el trabajo al objetivo del equipo, contar lo que habilitaste a otros, no exagerar ni minimizar [Fuente secundaria]." Y "Separar «lo hice yo» de «lo hicimos», con nombres."
- Tomando como base: la práctica de la autoevaluación basada en conductas observables: acción propia en voz activa, acción del equipo con nombre, y el resultado atribuido a quien corresponde. Atribuir con precisión da más crédito, no menos.
- Propongo: plantilla de frase para el campo "acción propia": "[verbo concreto] + [artefacto] + [para qué objetivo del equipo]", y para "acción del equipo": "[persona o rol] + [verbo] + [artefacto]". Ejemplo de forma, sin cifras: "Definí el contrato del auditor; [nombre] lo aplicó en [flujo]." Revisar los seis casos y eliminar "apoyé", "participé" y "ayudé".
- Fuente: sin fuente nueva.

### Idea 5 · Un número por caso, no una batería de métricas
- Leí: "Métrica: tasa de aprobación en primera vuelta antes y después" (caso 1) y la guía de autoevaluación que pide "de 5 a 8 ejemplos fuertes" con "Resultado lleve número si existe [Visto solo en buscador, fuente débil]."
- Tomando como base: en evaluación pesa más un indicador claro, comparable y entendible por quien no estuvo en el proyecto que varios indicadores sueltos. Cada caso debe contestar una sola pregunta de resultado.
- Propongo: elegir un indicador principal por caso, con forma de razón o conteo comparable antes/después: casos 1 y 2, aprobación en primera vuelta y vueltas por entrega; caso 3, abstenciones frente a recomendaciones emitidas; caso 4, tiempo de ciclo del brief a "listo"; caso 5, resultado frente a línea base a 30 días; caso 6, número de equipos que usan lo construido con fecha. Los secundarios van en notas. Si el denominador es pequeño (pocas corridas), declararlo junto al número en lugar de presentarlo como porcentaje contundente.
- Fuente: sin fuente nueva.

### Idea 6 · Mostrar la corrección propia como evidencia de calidad
- Leí: "Evidencia de calidad y control, no solo velocidad: aprobación en primera vuelta, casos archivados como «sin recomendación defendible», abstenciones por falta de volumen." Y "Gobernanza y harness: límites del alcance, sin caso."
- Tomando como base: en desarrollo de talento, el criterio de juicio y la capacidad de reconocer límites se valoran como competencia, no como debilidad. Un evaluador desconfía de un expediente donde todo salió bien.
- Propongo: incluir una entrada breve, en el mismo formato de seis campos, de algo que no salió (la corrida del caso 1 que no cerró en 3 vueltas, o un loop del caso 5 que no cerró) con la lección redactada como decisión del sistema. Junto con los límites de alcance declarados (gobernanza, harness, evals), muestra autoconocimiento y acota lo que el cierre promete. Es la forma más económica de dar credibilidad al resto de los números.
- Fuente: sin fuente nueva.

### Idea 7 · El caso 6 (habilitación) se mide por adopción y trazas, y se presenta como crédito compartido con nombre
- Leí: "6. Habilitación: megaagentes en cuatro equipos… adopción por equipo [dato de la grabación o ClickUp], autoría en commits de GitHub; el hook no se presenta como práctica general." Y: "Glue work: … distingue crear impacto de que sea legible; advierte contra confundir visibilidad con impacto [Visto solo en buscador]."
- Tomando como base: el trabajo de habilitación (documentar, dejar plantillas, enseñar) se evalúa por lo que otros hacen después de él, no por lo que el autor hizo. Por eso es donde más conviene separar el aporte propio del de cada equipo.
- Propongo: para cada uno de los cuatro equipos, una fila mínima: qué se entregó (repo con CLAUDE.md, skills, agentes), qué hizo Hernán, qué hizo el equipo receptor (nombre del responsable) y qué evidencia de uso existe con fecha (commits de otros, grabaciones). La medida de éxito es el uso sin presencia del autor. Si en algún equipo solo hay entrega y no uso comprobado, se anota "entregado, uso no medido" en lugar de contarlo como adopción.
- Fuente: sin fuente nueva.

### Idea 8 · Cierre de una lámina con tres lecturas: resultado, aporte propio, evidencia más débil
- Leí: "en el deck, una lámina «Qué se hizo y con qué resultado» con detalle de autoría en las notas del orador. El brag document personal de Hernán queda como anexo o documento aparte [Hipótesis]."
- Tomando como base: en una conversación de evaluación, quien decide recuerda poco; conviene que la pieza principal diga qué concluir y que el detalle quede disponible para quien pregunte. Mostrar de antemano el punto más débil de la propia evidencia refuerza la confianza en el resto.
- Propongo: la lámina con una tabla corta de seis filas (caso, indicador principal, antes/después o estado, nivel de evidencia de la Idea 1) y una línea al pie con "Lo que no se pudo medir". Las notas del orador llevan la autoría por nombre y el anexo conserva el brag document corrido (con la regla de una entrada propia para glue work) como respaldo para preguntas. No se agregan casos nuevos ni cifras: se reordena lo que ya está en el esqueleto.
- Fuente: sin fuente nueva.
