# DESIGN_PROMPT.md
# Prompt completo para Claude.ai — Guía Visual Kit de Construcción de Agentes
# Instrucción: pegar TODO este contenido en un solo mensaje en Claude.ai
# ─────────────────────────────────────────────────────────────────────────

Eres un diseñador editorial senior especializado en publicaciones digitales.
Voy a darte todo lo que necesitas para crear una guía visual completa.
Lee el brief completo antes de generar cualquier cosa.

════════════════════════════════════════════════════════════
CONCEPTO VISUAL — "EL EDITORIAL"
════════════════════════════════════════════════════════════

Mood: Revista de diseño premium aplicada a tecnología.
Tipografía dominante, espacio en blanco generoso, contenido técnico
presentado como artículo de fondo. Cada sección es un "spread" editorial.

IDENTIDAD VISUAL — OBLIGATORIA, NO MODIFICAR:
· Fuente títulos: Gabarito 900 (Google Fonts)
· Fuente cuerpo:  Plus Jakarta Sans 400/600/700 (Google Fonts)
· Rojo acento:    #EF2222
· Oscuro:         #111827
· Neutro:         #f9fafb
· Borde:          #e5e7eb
· Verde:          #16a34a
· Amarillo:       #d97706
· Logo siempre:   [logo-agencia]
· Footer siempre: [logo-agencia]

Google Fonts (incluir en <head>):
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

ESTRUCTURA GENERAL:
· Una sola página HTML con scroll
· 6 bloques + footer
· Portada: fondo #111827
· Bloques 2-5: fondo blanco y #f9fafb alternados
· Bloque 6 cierre: fondo #111827
· Imprimible: @media print, cada bloque como página A4

LAYOUT PORTADA:
· Tipografía hero: "CONSTRUYE / AGENTES / QUE / FUNCIONAN." Gabarito 900 ~80px, interlineado 0.9
· Bloque rojo decorativo (#EF2222) como elemento geométrico a la derecha del titular
· Acróstico : letras en columna vertical, cada letra en #EF2222, principio en blanco 60% opacity
· Caption inferior: "T R I A R I O · 7 principios para construir bien"
· Tags de navegación: "ARQ · DIS · WRT · TST · 8 prompts · 5 días"

LAYOUT FICHAS DE PROMPTS (Bloque 3):
· Grid 3 columnas en desktop, 1 columna en mobile
· Cada ficha: card blanca, borde 1px #e5e7eb, hover con box-shadow rojo suave
· Header de ficha: ID del bloque (ARQ-01) en #EF2222 Gabarito 900 + dot de color por grupo
  - ARQ = #EF2222 (rojo)
  - DIS = #2563eb (azul)
  - WRT = #16a34a (verde)
  - TST = #d97706 (amarillo)
· Nombre del prompt en Gabarito 700 18px
· "Cuándo usarlo" en Plus Jakarta Sans 13px color #6b7280
· "Produce →" con el nombre del artefacto en negrita
· Botón expandir: "+ Ver prompt completo" en rojo, texto pequeño

COMPORTAMIENTO EXPANDIBLE (crítico):
· Al hacer clic en "+ Ver prompt completo", la ficha se expande
· El prompt completo aparece en un bloque con:
  - Fondo #111827 (oscuro)
  - Texto blanco, fuente monospace (Courier New o similar)
  - Font-size 12px, line-height 1.6
  - Padding 20px
  - Border-radius 8px
· Botón "Copiar prompt" en esquina superior derecha del bloque oscuro
  - Al hacer clic: copia el texto del prompt al portapapeles
  - Feedback visual: el botón dice "✓ Copiado" por 2 segundos
· Botón "− Cerrar" reemplaza al "+" cuando está expandido
· Implementar con <details><summary> nativo del browser O con JS toggle + max-height transition
· Transición suave: max-height ease-out 400ms

════════════════════════════════════════════════════════════
BLOQUE 1 · PORTADA
════════════════════════════════════════════════════════════

SUPERTÍTULO: Kit de Construcción de Agentes
TITULAR: CONSTRUYE / AGENTES / QUE / FUNCIONAN.
TAGLINE: Framework universal para construir agentes de IA · Junio 2026

ACRÓSTICO :
T — Traza la arquitectura antes de escribir
R — Registra cada campo con tipo y ejemplo real
I — Identifica el objetivo en una sola frase
A — Anticipa los casos borde antes del deploy
R — Reglas anti-alucinación en cada prompt
I — Integra los 4 componentes en orden
O — Optimiza guiado por fallos reales

════════════════════════════════════════════════════════════
BLOQUE 2 · EL FRAMEWORK — Los 5 pasos
════════════════════════════════════════════════════════════

TITULAR: El framework en 5 pasos
SUBTÍTULO: Antes de escribir una sola línea del prompt.

COPY INTRODUCTORIO:
El 60% del trabajo de un agente no está en el prompt.
Está en entender la arquitectura de los datos antes de escribir.
Este kit convierte ese 60% en un proceso de medio día.

LOS 5 PASOS (mostrar como elementos numerados grandes):

PASO 1 · ARQUITECTURA
¿Dónde viven los datos?
Mapear la fuente antes de cualquier otra cosa.
Sin esto, el agente consulta en el lugar equivocado.

PASO 2 · PROTOCOLO
¿Cómo se accede a esos datos?
Orden de consulta, límites de paginación, autenticación.

PASO 3 · DICCIONARIO
¿Qué significa cada dato en el contexto del negocio?
Las reglas que convierten datos crudos en información útil.

PASO 4 · OUTPUT
¿Qué produce el agente exactamente?
Formato, estructura y nivel de detalle del resultado esperado.

PASO 5 · CRITERIO DE PARADA
¿Cuándo está bien hecho?
Sin esto el agente no sabe cuándo terminar.

PULL QUOTE (destacar visualmente):
"Nunca escribas el prompt antes de tener los 5 pasos respondidos."

DIAGRAMA DE DEPENDENCIAS (visualizar como cadena o árbol):
ARQ-01 o ARQ-02 → ARCHITECTURE_MAP
→ DIS-01 → AGENT_SPEC
  → DIS-02 → DATA_DICTIONARY
    → DIS-03 → ANTI_HALLUCINATION_RULES
      → WRT-01 → PROMPT_SKELETON
        → WRT-02 → PROMPT_SKELETON v1.1
          → TST-01 → PROMPT_SKELETON vN

════════════════════════════════════════════════════════════
BLOQUE 3 · LOS 8 PROMPTS — Fichas expandibles
════════════════════════════════════════════════════════════

TITULAR: Los 8 prompts
SUBTÍTULO: Cada uno produce un documento. Cada documento alimenta al siguiente.

NOTA: Cada ficha tiene el botón "Ver prompt completo" que expande
el prompt embebido más abajo en este brief.
ARQ-01 y ARQ-02 son alternativas — no secuencia. Indicarlo visualmente.

---
FICHA ARQ-01
ID: ARQ-01 | GRUPO: ARQ | COLOR DOT: #EF2222
NOMBRE: Mapeador de arquitectura
CUÁNDO: Cuando tienes acceso directo a la herramienta
PRODUCE: ARCHITECTURE_MAP.md
DESCRIPCIÓN: 15 preguntas que convierten el caos de "no sé qué hay aquí"
en un mapa estructurado que cualquier agente puede usar como base.

PROMPT COMPLETO A EMBEBER:
───────────────────────────
Actúa como un arquitecto de datos. Voy a construir un agente de IA que consulta 
[NOMBRE DE LA HERRAMIENTA]. Antes de escribir cualquier prompt, necesito mapear 
completamente la arquitectura de esta fuente de datos.

Guíame paso a paso para responder estas preguntas. Para cada una, dame un ejemplo 
de cómo debería verse la respuesta:

BLOQUE 1 — JERARQUÍA DE OBJETOS
1. ¿Cuáles son los objetos principales de esta herramienta? 
   (Ejemplo en una base de datos: tablas. En un CRM: contactos, deals, empresas)
2. ¿Cómo se relacionan entre sí? ¿Cuál contiene a cuál?
3. ¿Cuál es la unidad mínima que contiene los datos que necesito?
4. ¿Cómo se identifica cada objeto de forma única? (ID, nombre, código)

BLOQUE 2 — ACCESO A LOS DATOS
5. ¿Cómo se consultan los datos? (API, SQL, MCP, exportación manual)
6. ¿Hay filtros obligatorios para no traer todo de golpe?
7. ¿Hay límites de paginación o volumen por consulta?
8. ¿El acceso requiere permisos especiales o autenticación?

BLOQUE 3 — TRAMPAS Y EXCLUSIONES
9. ¿Qué datos parecen útiles pero en realidad contaminan los resultados?
   (Ejemplos: registros archivados, plantillas, datos de prueba, duplicados)
10. ¿Qué objetos o secciones NUNCA debo consultar? ¿Por qué?
11. ¿Hay datos que tienen el mismo nombre pero significan cosas distintas?

BLOQUE 4 — CALIDAD Y CONFIANZA
12. ¿Cómo sé que un dato está completo y es válido?
13. ¿Hay campos que deberían tener valor pero frecuentemente están vacíos?
14. ¿Los datos tienen zona horaria? ¿Cuál es el formato de fechas?
15. ¿Hay datos que cambian con el tiempo y podrían estar desactualizados?

Con las respuestas que yo te dé, genera un documento llamado ARCHITECTURE_MAP.md.
Empieza preguntándome el nombre de la herramienta y el objetivo del agente.
Luego haz las preguntas de a una — espera mi respuesta antes de continuar.
───────────────────────────

---
FICHA ARQ-02
ID: ARQ-02 | GRUPO: ARQ | COLOR DOT: #EF2222
NOMBRE: Entrevista al experto
CUÁNDO: Cuando no tienes acceso directo pero hay alguien que conoce la herramienta
PRODUCE: ARCHITECTURE_MAP.md
DESCRIPCIÓN: 17 preguntas para extraer en 30 minutos lo que un tech necesita saber.
Convierte el conocimiento tácito del equipo en documentación estructurada.

PROMPT COMPLETO A EMBEBER:
───────────────────────────
Eres un arquitecto técnico especializado en documentar sistemas de datos
para construir agentes de IA. Voy a hacerte una sesión de entrevista con
un experto en [NOMBRE DE LA HERRAMIENTA].

Tu objetivo es extraer toda la información necesaria para que un agente
pueda consultar esta herramienta correctamente desde el primer intento.

Haz las preguntas en este orden exacto. Espera la respuesta antes de continuar.
Cuando termines todas las preguntas, genera el documento ARCHITECTURE_MAP.md.

BLOQUE 1 — CONTEXTO DE NEGOCIO (5 min)
P1. ¿Para qué usa tu equipo esta herramienta en el día a día?
P2. ¿Qué tipo de información vive aquí que no vive en ningún otro lado?
P3. Si un agente tuviera que responder UNA pregunta usando esta herramienta,
    ¿cuál sería la más valiosa para el equipo?

BLOQUE 2 — ESTRUCTURA DE DATOS (10 min)
P4. ¿Cuáles son los objetos o entidades principales de esta herramienta?
P5. ¿Cómo se organizan jerárquicamente? ¿Qué contiene a qué?
P6. ¿Cuál es la unidad mínima de información que necesito consultar?
    ¿Qué campos tiene esa unidad que son críticos?
P7. ¿Hay campos que parecen lo mismo pero significan cosas distintas?

BLOQUE 3 — PROTOCOLO TÉCNICO (10 min)
P8. ¿Cómo se accede a los datos técnicamente?
    (API REST, GraphQL, MCP, SDK, exportación, base de datos directa)
P9. ¿Qué credenciales o permisos necesito para consultar?
P10. ¿Hay endpoints o métodos específicos para los datos que necesito?
P11. ¿Cuántos registros devuelve una consulta por defecto?
     ¿Hay paginación? ¿Cuál es el límite máximo por página?
P12. ¿Qué filtros son obligatorios para no traer todo de golpe?
P13. ¿Los timestamps o fechas vienen en algún formato especial?

BLOQUE 4 — TRAMPAS Y EXCLUSIONES (5 min)
P14. ¿Qué datos NO debo consultar nunca? ¿Por qué?
P15. ¿Hubo algún error que alguien cometió antes consultando esta herramienta?
P16. ¿Hay datos que cambian de significado según el contexto?
P17. ¿Qué consulta tarda demasiado o puede generar timeout?

Haz las preguntas de a una. Espera la respuesta antes de continuar.
───────────────────────────

---
FICHA DIS-01
ID: DIS-01 | GRUPO: DIS | COLOR DOT: #2563eb
NOMBRE: Definidor de objetivo
CUÁNDO: Antes de escribir una sola línea del prompt
PRODUCE: AGENT_SPEC.md
DESCRIPCIÓN: Convierte una idea vaga en especificación técnica precisa.
Define qué hace, qué NO hace, qué produce y cuándo está bien hecho.

PROMPT COMPLETO A EMBEBER:
───────────────────────────
Actúa como un tech lead definiendo el alcance de un agente de IA antes
de construirlo. Voy a darte el contexto del agente y tú vas a generar
la especificación técnica completa.

Hazme las siguientes preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el documento AGENT_SPEC.md.

BLOQUE 1 — OBJETIVO CENTRAL
P1. Describe en una sola frase qué hace este agente.
    Formato obligatorio: "El agente [VERBO] [QUÉ] a partir de [FUENTE]
    y produce [OUTPUT] para [QUIÉN]"

P2. ¿Qué problema concreto resuelve hoy que se hace manualmente?
    ¿Cuánto tiempo toma hacerlo sin el agente?

P3. ¿Quién usa el output del agente y qué decisión toma con él?

BLOQUE 2 — ALCANCE EXACTO
P4. Lista las 3 cosas que el agente SÍ hace — máximo 3.
    Si tienes más de 3, es más de un agente.

P5. Lista las 3 cosas que el agente NO hace — explícitamente.
    (Ejemplo: "No crea tareas en ClickUp — solo las lista")

P6. ¿Qué datos de entrada necesita el agente para funcionar?
    ¿Los tiene siempre disponibles o depende de que alguien los genere primero?

BLOQUE 3 — OUTPUT TÉCNICO
P7. ¿Qué produce exactamente el agente?
    (Texto estructurado, JSON, tabla, lista, resumen, alerta, acción)

P8. ¿Cuál es el formato exacto del output?
    Descríbelo o muéstrame un ejemplo de cómo debería verse.

P9. ¿Qué pasa si un dato requerido no está disponible?
    ¿El agente para, avisa, o continúa con lo que tiene?

BLOQUE 4 — ACTIVACIÓN Y CRITERIO DE ÉXITO
P10. ¿Qué dispara al agente?
     (Manual por el usuario · automático por horario · evento en otra herramienta)

P11. ¿Cómo sabes que el agente funcionó correctamente?
     Dame un criterio medible, no subjetivo.

P12. ¿Qué resultado incorrecto sería inaceptable?
     El caso de falla que definitivamente no puedes permitir.

Haz las preguntas de a una. Espera mi respuesta antes de continuar.
───────────────────────────

---
FICHA DIS-02
ID: DIS-02 | GRUPO: DIS | COLOR DOT: #2563eb
NOMBRE: Diccionario de datos
CUÁNDO: Después de DIS-01, cuando el AGENT_SPEC define qué campos necesita el agente
PRODUCE: DATA_DICTIONARY.md
DESCRIPCIÓN: Para cada campo: nombre canónico, tipo, ejemplo real y qué hacer
cuando está vacío. Elimina la causa más silenciosa de alucinaciones.

PROMPT COMPLETO A EMBEBER:
───────────────────────────
Actúa como un tech lead construyendo el diccionario de datos de un agente de IA.
Voy a darte el AGENT_SPEC.md y tú vas a extraer y documentar cada campo
que el agente necesita para funcionar.

Hazme las preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el documento DATA_DICTIONARY.md.

BLOQUE 1 — INVENTARIO DE CAMPOS
P1. Del AGENT_SPEC.md, lista todos los campos de entrada que necesita el agente.
    Para cada campo: nombre en la interfaz · nombre técnico en la API · objeto del que viene.

P2. ¿Hay campos que no están en el AGENT_SPEC pero el agente los necesita
    para hacer sus cálculos?

P3. ¿Cuáles de estos campos son obligatorios y cuáles son opcionales?

BLOQUE 2 — DEFINICIÓN TÉCNICA
P4. Para cada campo obligatorio:
    - Tipo de dato: texto · número entero · número decimal · timestamp · booleano · enum
    - Un ejemplo de valor real tomado del sistema (no inventes)

P5. Para los campos de tipo enum: ¿cuáles son todos los valores posibles?
    ¿Hay valores que parecen distintos pero significan lo mismo?

P6. Para los campos de tipo timestamp:
    - ¿En qué formato viene? (Unix ms · Unix segundos · ISO 8601 · texto)
    - ¿Viene en UTC o en otra zona horaria?

BLOQUE 3 — COMPORTAMIENTO EN VACÍO
P7. Para cada campo: ¿qué pasa cuando el valor está vacío o es null?
    a) Omitir ese registro completo
    b) Usar un valor por defecto
    c) Marcar como "no disponible" en el output
    d) Detener el proceso y reportar el error

P8. ¿Hay campos que en algunos registros siempre tienen valor
    pero en otros siempre están vacíos? ¿Por qué ocurre esa diferencia?

BLOQUE 4 — AMBIGÜEDADES Y TRAMPAS
P9. ¿Hay dos campos que parecen lo mismo pero significan cosas distintas?

P10. ¿Hay campos cuyo significado cambia según el estado del registro?

P11. ¿Qué campos NO debe leer el agente aunque existan en la fuente?
     ¿Por qué? (datos sensibles, deprecados, siempre incorrectos)

Haz las preguntas de a una. Espera mi respuesta antes de continuar.
───────────────────────────

---
FICHA DIS-03
ID: DIS-03 | GRUPO: DIS | COLOR DOT: #2563eb
NOMBRE: Reglas anti-alucinación
CUÁNDO: Después de DIS-02 — requiere AGENT_SPEC y DATA_DICTIONARY completos
PRODUCE: ANTI_HALLUCINATION_RULES.md
DESCRIPCIÓN: Genera las reglas para cuando los datos no están disponibles.
Sin estas reglas, el agente inventa en silencio — y nadie lo nota.

PROMPT COMPLETO A EMBEBER:
───────────────────────────
Actúa como un tech lead definiendo las reglas de comportamiento de un agente
de IA para cuando los datos no están disponibles o el proceso falla.

Voy a darte el AGENT_SPEC.md y el DATA_DICTIONARY.md.
Hazme las preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el documento ANTI_HALLUCINATION_RULES.md.

Las reglas que generemos se insertarán directamente en el prompt del agente.
Por eso cada regla debe ser accionable: no "no hagas X" sino
"si ocurre X, entonces haz Y — porque Z".

BLOQUE 1 — PROHIBICIONES ABSOLUTAS
P1. ¿Cuáles son los datos que el agente NUNCA puede inventar, estimar ni inferir?
    Piensa en los datos que, si son incorrectos, generan una consecuencia grave.

P2. ¿Hay campos del DATA_DICTIONARY donde el agente podría ser tentado
    a "completar" con información parecida?

P3. ¿Qué resultado incorrecto sería inaceptable — aunque parezca razonable?

BLOQUE 2 — COMPORTAMIENTO EN AUSENCIA DE DATOS
P4. Para cada campo obligatorio del DATA_DICTIONARY:
    ¿Qué hace el agente si ese campo no está disponible?
    a) Omitir ese registro + indicar cuántos fueron omitidos
    b) Marcar ese campo como "[dato no disponible]" y continuar
    c) Detener el proceso y reportar qué falta
    d) Usar el valor por defecto del DATA_DICTIONARY

P5. ¿Puede el agente producir un output parcial si le falta información?

P6. ¿Cómo debe comunicar el agente que su output es parcial?
    Dame el texto exacto o el formato que quieres ver.

BLOQUE 3 — CRITERIO DE PARADA
P7. ¿Cuándo debe el agente detenerse completamente y no producir ningún output?

P8. Cuando el agente se detiene, ¿qué debe reportar exactamente?

P9. ¿El agente puede reintentar automáticamente si una consulta falla?
    Si sí: ¿cuántas veces? Si no: ¿a quién le avisa y cómo?

BLOQUE 4 — COMUNICACIÓN DE INCERTIDUMBRE
P10. Si el agente no está seguro de un dato pero tiene una estimación razonable:
     ¿puede presentarla? ¿Cómo la diferencia de un dato confirmado?

P11. ¿Hay cálculos que pueden dar resultados ambiguos según los datos de entrada?
     Define la interpretación correcta para cada uno.

P12. Si el agente recibe una pregunta para la que no tiene datos suficientes,
     ¿qué responde? Dame el texto exacto.

Haz las preguntas de a una. Espera mi respuesta antes de continuar.
───────────────────────────

---
FICHA WRT-01
ID: WRT-01 | GRUPO: WRT | COLOR DOT: #16a34a
NOMBRE: Esqueleto de prompt
CUÁNDO: Con ARCHITECTURE_MAP + AGENT_SPEC + DATA_DICTIONARY + ANTI_HALLUCINATION_RULES listos
PRODUCE: PROMPT_SKELETON.md
DESCRIPCIÓN: Ensambla los 4 documentos en las 4 secciones del prompt.
IDENTIDAD · ARQUITECTURA · REGLAS · OUTPUT. En ese orden. Sin excepciones.

PROMPT COMPLETO A EMBEBER:
───────────────────────────
Actúa como un tech lead ensamblando el prompt de un agente de IA.
Tienes cuatro documentos listos: ARCHITECTURE_MAP · AGENT_SPEC · DATA_DICTIONARY · ANTI_HALLUCINATION_RULES.

Tu trabajo es organizarlos en las cuatro secciones del prompt.
Las cuatro secciones siempre van en este orden — no hay excepciones:

  1. IDENTIDAD     → quién es el agente y qué hace en una frase
  2. ARQUITECTURA  → qué datos tiene disponibles y cómo accede a ellos
  3. REGLAS        → qué hacer · qué nunca hacer · cuándo detenerse
  4. OUTPUT        → formato exacto del resultado

Hazme las preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el PROMPT_SKELETON.md.

BLOQUE 1 — IDENTIDAD
P1. Del AGENT_SPEC.md, copia la frase P1 (objetivo en formato canónico):
    "El agente [VERBO] [QUÉ] a partir de [FUENTE] y produce [OUTPUT] para [QUIÉN]"

P2. ¿El agente tiene un nombre propio que el equipo ya usa?

P3. ¿En qué entorno vive el agente?
    (Claude.ai Project · Claude Code · API directa · integrado en otra herramienta)

BLOQUE 2 — ARQUITECTURA
P4. Del ARCHITECTURE_MAP.md, ¿cuáles son los objetos y campos que el agente SÍ consulta?
    Cópialos aquí — no los resumas.

P5. ¿El agente consulta datos en un solo paso o en pasos encadenados?

P6. ¿Hay filtros obligatorios que el agente SIEMPRE aplica antes de procesar?

BLOQUE 3 — REGLAS
P7. Del ANTI_HALLUCINATION_RULES.md, copia las prohibiciones absolutas.
    No las reformules — cópialas textualmente.

P8. Del ANTI_HALLUCINATION_RULES.md, copia la tabla de comportamiento
    por campo en ausencia de datos. Usar solo la versión de DIS-03.

P9. Del ANTI_HALLUCINATION_RULES.md, copia el criterio de parada completo:
    la condición exacta · el mensaje al usuario · la política de reintentos.

P10. ¿Hay reglas de lógica de negocio que no están en los documentos previos?
     Formato: condición → acción → razón.

BLOQUE 4 — OUTPUT
P11. Del AGENT_SPEC.md, copia la sección Output:
     formato · estructura · qué hacer si falta un dato.

P12. ¿El output se presenta directamente al usuario o lo consume otro sistema?

P13. ¿El output incluye una sección de advertencias o notas de calidad?

Haz las preguntas de a una. Espera mi respuesta antes de continuar.
───────────────────────────

---
FICHA WRT-02
ID: WRT-02 | GRUPO: WRT | COLOR DOT: #16a34a
NOMBRE: Validador y casos borde
CUÁNDO: Después de WRT-01 — antes del primer test con datos reales
PRODUCE: VALIDATION_REPORT.md
DESCRIPCIÓN: Detecta inconsistencias entre el esqueleto y los documentos fuente.
Cubre los inputs inusuales que el agente encontrará en producción.

PROMPT COMPLETO A EMBEBER:
───────────────────────────
Actúa como un tech lead revisando el prompt de un agente de IA antes
de su primer deploy.

Tu trabajo es dos cosas en una sesión:
  1. Detectar inconsistencias entre el PROMPT_SKELETON y los documentos fuente
  2. Identificar casos borde que el agente necesita manejar

Hazme las preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el VALIDATION_REPORT.md.

PARTE 1 — VALIDACIÓN DEL ESQUELETO
P1. Lee el §1 IDENTIDAD. ¿La frase está en el formato canónico?
    "El agente [VERBO] [QUÉ] a partir de [FUENTE] y produce [OUTPUT] para [QUIÉN]"

P2. Lee el §2 ARQUITECTURA. Compara con el DATA_DICTIONARY:
    - ¿Están todos los campos obligatorios?
    - ¿Hay campos en §2 que no están en el DATA_DICTIONARY?
    - ¿Los tipos de dato coinciden?

P3. Lee el §3 REGLAS. Compara con ANTI_HALLUCINATION_RULES:
    - ¿Están todas las prohibiciones absolutas?
    - ¿Está el criterio de parada completo con el mensaje exacto?
    - ¿Hay alguna regla que contradice otra regla del mismo §3?

P4. Lee el §4 OUTPUT:
    - ¿El formato es lo suficientemente específico para ser testeable?
    - ¿Está definido qué aparece cuando el proceso es parcial?

P5. Vista completa: ¿hay alguna instrucción que el agente podría interpretar
    de dos maneras distintas?

PARTE 2 — CASOS BORDE
P6. ¿Qué pasa si la fuente devuelve 0 resultados?
P7. ¿Qué pasa si la fuente devuelve más registros de lo esperado?
P8. ¿Qué pasa si el mismo registro aparece dos veces?
P9. ¿Qué pasa si el usuario pide algo fuera del alcance del agente?
    Dame el texto exacto de la respuesta fuera de alcance.
P10. ¿Hay inputs que el agente recibirá en producción que no están
     en ningún documento previo?

Haz las preguntas de a una. Espera mi respuesta antes de continuar.
───────────────────────────

---
FICHA TST-01
ID: TST-01 | GRUPO: TST | COLOR DOT: #d97706
NOMBRE: Diagnóstico y anti-regresión
CUÁNDO: Cuando algo falla o antes de cambiar algo que funciona
PRODUCE: DIAGNOSIS_REPORT.md
DESCRIPCIÓN: Localiza en qué sección del prompt ocurrió el fallo y por qué.
Define los tests que confirman que el fix no rompe lo que ya funcionaba.

PROMPT COMPLETO A EMBEBER:
───────────────────────────
Actúa como un tech lead diagnosticando por qué un agente de IA produjo
un resultado incorrecto.

Tu trabajo es dos cosas en una sesión:
  1. Localizar en qué sección del prompt ocurrió el fallo
  2. Definir los tests que confirman que el fix no rompe lo que funcionaba

Hazme las preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el DIAGNOSIS_REPORT.md.

PARTE 1 — DIAGNÓSTICO
P1. Describe el fallo en este formato exacto:
    - Input: [qué datos recibió el agente]
    - Output esperado: [qué debería haber producido]
    - Output real: [qué produjo realmente]
    - Frecuencia: [siempre · a veces · solo con estos datos específicos]

P2. ¿El fallo ocurre con cualquier input o solo con inputs específicos?

P3. El fallo, ¿a qué sección del prompt corresponde?
    §1 IDENTIDAD · §2 ARQUITECTURA · §3 REGLAS · §4 OUTPUT

P4. Lee la sección identificada en P3.
    ¿Hay una instrucción que el agente podría haber interpretado de la manera
    que causó el fallo? Cópiala textualmente.

P5. ¿Este fallo ya ocurrió antes?
    ¿Hubo algún cambio reciente en el prompt o en la fuente de datos?

P6. Propón el fix:
    - Sección afectada: [§N]
    - Texto actual: [copia textual]
    - Texto propuesto: [copia textual con el cambio]
    - Por qué este fix resuelve el fallo: [una sola frase]
    - Nueva versión del PROMPT_SKELETON: [versión actual + 1]
    - ¿El fix cambia también DIS-02 o DIS-03? Si sí → indicar qué actualizar.

PARTE 2 — ANTI-REGRESIÓN
P7. Antes de aplicar el fix: ¿qué hace el agente correctamente hoy
    que podría verse afectado por este cambio?

P8. Para cada comportamiento de P7, define un test mínimo:
    - Input de prueba: [dato o situación específica]
    - Output esperado: [resultado concreto y verificable]

P9. ¿Hay algún caso borde del VALIDATION_REPORT que el fix podría afectar?

P10. Después del fix: ¿hay alguna regla en el PROMPT_SKELETON
     que ya no es necesaria o que ahora contradice el fix?

Haz las preguntas de a una. Espera mi respuesta antes de continuar.
───────────────────────────

════════════════════════════════════════════════════════════
BLOQUE 4 · LAS 10 REGLAS DE ORO — Claude.ai
════════════════════════════════════════════════════════════

TITULAR: Las 10 Reglas de Oro
SUBTÍTULO: Para trabajar con Claude.ai sin desperdiciar el presupuesto.

COPY INTRODUCTORIO:
El mismo resultado puede costar el doble según cómo estructures la conversación.
Estas reglas hacen la diferencia.

NOTA DE DISEÑO: 10 tarjetas en grid 2x5. Número en rojo, título en Gabarito,
regla en Plus Jakarta Sans. El título debe leerse solo, sin el copy de apoyo.

REGLA 01
TÍTULO: Una tarea, una conversación
REGLA: Cada hilo nuevo arranca con contexto cero.
Mezclar temas en un mismo hilo es mezclar facturas.

REGLA 02
TÍTULO: El Project Instructions es tu mejor inversión
REGLA: Lo que defines ahí no se cobra en cada mensaje.
Escríbelo bien una vez — ahorra siempre.

REGLA 03
TÍTULO: El primer mensaje es el más importante
REGLA: Todo el contexto, el formato esperado y el scope en un solo disparo.
Cada vuelta de aclaración cuesta.

REGLA 04
TÍTULO: Sé el director, no el improvisador
REGLA: "Quiero una tabla con estas 3 columnas" es 10× más barato
que descubrir el formato después de ver el resultado.

REGLA 05
TÍTULO: El Knowledge del Project trabaja gratis
REGLA: Archivos en Knowledge = referencia sin costo.
Archivos pegados en el chat = tokens cobrados cada vez.

REGLA 06
TÍTULO: No pidas permiso para continuar
REGLA: "¿Entendiste?" y "¿Estás seguro?" son tokens
que no informan ni deciden nada.

REGLA 07
TÍTULO: Las preguntas de seguimiento van en el mismo hilo
REGLA: El reporte ya calculado no se recalcula.
El hilo tiene memoria — úsala antes de abrir uno nuevo.

REGLA 08
TÍTULO: Pide el cambio exacto, no la reescritura
REGLA: "Cambia el párrafo 3" cuesta el 10% de
"reescribe el documento completo".

REGLA 09
TÍTULO: Interrumpe cuando tienes lo que necesitas
REGLA: No esperes que Claude termine si ya leíste lo que buscabas.
Cada línea adicional tiene precio.

REGLA 10
TÍTULO: El scope es el presupuesto
REGLA: "Solo el equipo Tech" cuesta lo que pesa.
"Los 5 equipos" cuesta 5 veces más. Define el alcance antes de enviar.

════════════════════════════════════════════════════════════
BLOQUE 5 · COMANDOS — Claude Code
════════════════════════════════════════════════════════════

TITULAR: Comandos Claude Code
SUBTÍTULO: Los más importantes. Los que más tiempo y tokens ahorran.

NOTA DE DISEÑO: Tabla o grid agrupado en 4 categorías con separador visual.
Comandos en monospace. Atajos de teclado con estilo "key cap" (fondo gris, borde).

GRUPO 1 · CONTEXTO Y COSTO

/clear
Borra el contexto completamente.
Para empezar una tarea nueva sin arrastrar tokens de la anterior.

/compact
Comprime el historial manteniendo lo esencial.
Acepta instrucciones: /compact enfócate en los errores del pipeline
Úsalo cuando la conversación lleva más de 20 mensajes.

/cost
Muestra el gasto de tokens de la sesión.
Revísalo antes de tareas largas para decidir si limpiar primero.

GRUPO 2 · CONFIGURACIÓN Y SESIÓN

/model
Cambia el modelo activo.
Haiku → búsquedas simples · Sonnet → análisis · Opus → razonamiento complejo.
El modelo correcto puede bajar el costo a la mitad.

/config
Abre la configuración de Claude Code.

/init
Genera el CLAUDE.md del proyecto.
Define el contexto permanente — lo que Claude sabe sin que lo repitas.

/memory
Abre la memoria persistente del usuario.
Lo que guardas aquí aplica en todas las sesiones futuras.

/doctor
Verifica que la instalación esté correcta.
Primer paso cuando algo no funciona.

/login · /logout
Gestión de sesión y cuenta.

GRUPO 3 · DESARROLLO

/review
Code review sobre el diff activo. Solo lo que cambió, no todo el proyecto.

/run
Corre la aplicación y observa el comportamiento real.

/simplify
Aplica limpiezas de simplificación y eficiencia al código modificado.

/security-review
Auditoría de seguridad del branch activo.

/verify
Confirma que el cambio funciona en el flujo real, no solo en tests.

GRUPO 4 · ATAJOS Y PREFIJOS

[KEY: Esc]
Cancela la operación en curso.

[KEY: Esc Esc] ← DESTACAR COMO EL MÁS ÚTIL
Interrumpe a Claude a mitad de respuesta.
Corta el gasto de tokens inmediatamente.

[PREFIX: #texto]
Guarda en memoria sin abrir /memory.

[PREFIX: @archivo]
Referencia un archivo sin cargarlo completo en el contexto.

/mcp
Lista y gestiona los servidores MCP conectados al proyecto.

════════════════════════════════════════════════════════════
BLOQUE 6 · CIERRE — Caso real Sprint Intelligence
════════════════════════════════════════════════════════════

NOTA DE DISEÑO: Layout "The Editorial" — dos columnas asimétricas.
Columna izquierda (60%): copy narrativo. Columna derecha (40%): visual.
Fondo oscuro #111827. El titular es el más grande de toda la guía.
Visual sugerido: mockup o screenshot del reporte sprint de ejemplo mostrando
la sección "Análisis de causa — Vencidas" (los 3 patrones identificados).

SUPERTÍTULO: Caso real · sistema de inteligencia operacional
TITULAR (más grande de la guía): 1 mes construyéndolo. / 3-5 días con el kit.
SUBTÍTULO: El caso que generó el framework.

COLUMNA IZQUIERDA — narrativa:

EL PROBLEMA
El equipo no sabía dónde vivían los datos en ClickUp.
No había documentación. Cada consulta era un experimento.
El 60% del tiempo total se fue en descubrir la arquitectura
a prueba y error — antes de escribir una sola línea del prompt.

LO QUE CONSTRUYERON
5 equipos. 843 tareas. Bogotá UTC-5.
6 patrones de jerarquía. 12 clientes simultáneos.
Un solo reporte generado en tiempo real desde ClickUp.

LO QUE HACE QUE UNA HOJA DE CÁLCULO NO PUEDE
(mostrar como 3 ítems destacados con dot rojo)
· Detecta que "en pausa" ≠ VENCIDA aunque la fecha pasó
· Normaliza 5 vocabularios distintos de estado en 1 métrica consistente
· Identifica que 10+ vencidas en una persona × 3 proyectos = escalada HOY

PULL QUOTE (el más grande del bloque):
"El 60% del trabajo de un agente
no está en el prompt.
Está en entender los datos
antes de escribir."

CALL TO ACTION:
Hoy opera en producción para 5 equipos.
Tú puedes construir el tuyo en 3-5 días.

COLUMNA DERECHA — visual:
CAPTION: "Reporte Sprint · Generado en tiempo real"
(si no hay screenshot disponible, generar un mockup representativo del reporte
mostrando KPIs + sección de patrones identificados)

════════════════════════════════════════════════════════════
FOOTER
════════════════════════════════════════════════════════════

kit-construccion-agentes v1.0 · Junio 2026

════════════════════════════════════════════════════════════
INSTRUCCIONES FINALES PARA DESIGN
════════════════════════════════════════════════════════════

1. Genera el HTML completo como un solo artifact.
2. Los 8 prompts van embebidos en sus respectivas fichas con toggle expandible.
3. El botón "Copiar prompt" copia el texto al portapapeles con feedback visual.
4. Usa <details><summary> nativo del browser para la expansión, o JS con
   max-height transition — lo que produzca mejor animación.
5. Todo el texto de los prompts debe ser seleccionable y copiable.
6. El HTML debe funcionar sin conexión a internet excepto Google Fonts.
7. @media print: cada bloque como página A4, fondos incluidos
   (-webkit-print-color-adjust: exact).
8. Responsive: funciona en desktop y mobile.
9. NO inventar datos ni resumir copy — usar el texto exacto de este brief.
10. Todos los {PLACEHOLDERS} deben estar resueltos antes de entregar.
