# GUIDE_CONTENT.md
# Kit de Construcción de Agentes
# Brief de contenido para publicación visual en Claude.ai Design
# Versión: 1.0 · Junio 2026
#
# INSTRUCCIONES PARA DESIGN:
# Este archivo es el contenido completo y definitivo de la guía.
# Cada bloque tiene etiquetas: [TITULAR], [SUBTÍTULO], [COPY], [VISUAL], [NOTA DE DISEÑO].
# No inventar datos. No resumir copy. Usar el texto exacto de cada sección.
# Identidad visual: Gabarito (títulos) · Plus Jakarta Sans (cuerpo) · #EF2222 (acento)

---

# BLOQUE 1 · PORTADA — Acróstico 

[NOTA DE DISEÑO]
Portada dark (#111827). Tipografía dominante Gabarito 900.
El acróstico es el elemento hero — cada letra grande, su principio al lado.
La palabra  en vertical, cada letra en rojo (#EF2222).
Subtítulo y tagline en blanco con opacidad reducida.

[SUPERTÍTULO]
Kit de Construcción de Agentes

[TITULAR PRINCIPAL]
7 principios para construir
agentes que funcionan.

[ACRÓSTICO — elemento hero]
T — Traza la arquitectura antes de escribir
R — Registra cada campo con tipo y ejemplo real
I — Identifica el objetivo en una sola frase
A — Anticipa los casos borde antes del deploy
R — Reglas anti-alucinación en cada prompt
I — Integra los 4 componentes en orden
O — Optimiza guiado por fallos reales

[TAGLINE]
Framework universal para construir agentes de IA · Junio 2026

---

# BLOQUE 2 · EL KIT — Los 5 pasos irrompibles

[NOTA DE DISEÑO]
Fondo claro. Sección introductoria antes de los bloques técnicos.
Los 5 pasos como elementos visuales numerados — no como lista plana.
La regla de oro como pull quote destacado con acento rojo.
El diagrama de dependencias como flujo visual horizontal o en árbol.

[TITULAR DE SECCIÓN]
El framework en 5 pasos

[SUBTÍTULO]
Antes de escribir una sola línea del prompt.

[COPY INTRODUCTORIO]
El 60% del trabajo de un agente no está en el prompt.
Está en entender la arquitectura de los datos antes de escribir.
Este kit convierte ese 60% en un proceso de medio día.

[LOS 5 PASOS — cada uno como elemento numerado]

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

[PULL QUOTE — elemento destacado]
"Nunca escribas el prompt antes de tener los 5 pasos respondidos."

[DIAGRAMA DE DEPENDENCIAS — flujo visual]
ARQ-01 o ARQ-02
  → ARCHITECTURE_MAP
    → DIS-01 → AGENT_SPEC
      → DIS-02 → DATA_DICTIONARY
        → DIS-03 → ANTI_HALLUCINATION_RULES
          → WRT-01 → PROMPT_SKELETON
            → WRT-02 → PROMPT_SKELETON v1.1
              → TST-01 → PROMPT_SKELETON vN

[NOTA DE DISEÑO DIAGRAMA]
Visualizar como cadena lineal o árbol. Cada nodo = un artefacto.
Cada flecha = una dependencia. Color rojo para los nodos críticos (WRT-01, DIS-03).

---

# BLOQUE 3 · LOS 8 BLOQUES — Fichas del kit

[NOTA DE DISEÑO]
Grid de 8 fichas — 4x2 o 2x4 según el layout.
Cada ficha: ID en rojo · nombre · cuándo usarlo · qué produce.
Agrupar visualmente por bloque (ARQ · DIS · WRT · TST) con color de grupo o separador.

[TITULAR DE SECCIÓN]
Los 8 prompts

[SUBTÍTULO]
Cada uno produce un documento. Cada documento alimenta al siguiente.

---

[FICHA 01]
ID: ARQ-01
BLOQUE: Arquitectura
NOMBRE: Mapeador de arquitectura
CUÁNDO: Cuando tienes acceso directo a la herramienta
PRODUCE: ARCHITECTURE_MAP.md
DESCRIPCIÓN: 15 preguntas que convierten el caos de "no sé qué hay aquí"
en un mapa estructurado que cualquier agente puede usar como base.

[FICHA 02]
ID: ARQ-02
BLOQUE: Arquitectura
NOMBRE: Entrevista al experto
CUÁNDO: Cuando no tienes acceso directo pero hay alguien que conoce la herramienta
PRODUCE: ARCHITECTURE_MAP.md
DESCRIPCIÓN: 17 preguntas para extraer en 30 minutos lo que un tech necesita saber.
Convierte el conocimiento tácito del equipo en documentación estructurada.

[NOTA]
ARQ-01 y ARQ-02 son alternativas — no secuencia. Usar uno o el otro.

---

[FICHA 03]
ID: DIS-01
BLOQUE: Diseño
NOMBRE: Definidor de objetivo
CUÁNDO: Antes de escribir una sola línea del prompt
PRODUCE: AGENT_SPEC.md
DESCRIPCIÓN: Convierte una idea vaga en especificación técnica precisa.
Define qué hace, qué NO hace, qué produce y cuándo está bien hecho.

[FICHA 04]
ID: DIS-02
BLOQUE: Diseño
NOMBRE: Diccionario de datos
CUÁNDO: Después de DIS-01 — cuando el spec define qué campos necesita el agente
PRODUCE: DATA_DICTIONARY.md
DESCRIPCIÓN: Para cada campo: nombre canónico, tipo, ejemplo real y qué hacer
cuando está vacío. Elimina la causa más silenciosa de alucinaciones.

[FICHA 05]
ID: DIS-03
BLOQUE: Diseño
NOMBRE: Reglas anti-alucinación
CUÁNDO: Después de DIS-02 — requiere tanto AGENT_SPEC como DATA_DICTIONARY
PRODUCE: ANTI_HALLUCINATION_RULES.md
DESCRIPCIÓN: Genera las reglas de comportamiento para cuando los datos no están.
Sin estas reglas, el agente inventa en silencio — y nadie lo nota.

---

[FICHA 06]
ID: WRT-01
BLOQUE: Escritura
NOMBRE: Esqueleto de prompt
CUÁNDO: Con los 4 documentos anteriores listos (ARCHITECTURE_MAP + 3 DIS)
PRODUCE: PROMPT_SKELETON.md
DESCRIPCIÓN: Ensambla los 4 documentos en las 4 secciones del prompt.
IDENTIDAD · ARQUITECTURA · REGLAS · OUTPUT. En ese orden. Sin excepciones.

[FICHA 07]
ID: WRT-02
BLOQUE: Escritura
NOMBRE: Validador y casos borde
CUÁNDO: Después de WRT-01 — antes del primer test con datos reales
PRODUCE: VALIDATION_REPORT.md
DESCRIPCIÓN: Detecta inconsistencias entre el esqueleto y los documentos fuente.
Cubre los inputs inusuales que el agente va a encontrar en producción.

---

[FICHA 08]
ID: TST-01
BLOQUE: Testing
NOMBRE: Diagnóstico y anti-regresión
CUÁNDO: Cuando algo falla o antes de cambiar algo que funciona
PRODUCE: DIAGNOSIS_REPORT.md
DESCRIPCIÓN: Localiza exactamente en qué sección ocurrió el fallo y por qué.
Define los tests que confirman que el fix no rompe lo que ya funcionaba.

---

# BLOQUE 4 · REGLAS DE ORO — 10 prácticas Claude.ai

[NOTA DE DISEÑO]
Sección con fondo claro o acento suave. 10 tarjetas — 2 columnas de 5.
Cada tarjeta: número en rojo · título en Gabarito · regla en Plus Jakarta Sans.
El título es el headline — debe leerse solo sin el copy de apoyo.

[TITULAR DE SECCIÓN]
Las 10 Reglas de Oro

[SUBTÍTULO]
Para trabajar con Claude.ai sin quemar el presupuesto.

[COPY INTRODUCTORIO]
El mismo resultado puede costar el doble según cómo estructures la conversación.
Estas reglas hacen la diferencia.

---

[REGLA 01]
TÍTULO: Una tarea, una conversación
REGLA: Cada hilo nuevo arranca con contexto cero. Mezclar temas en un mismo hilo es mezclar facturas.

[REGLA 02]
TÍTULO: El Project Instructions es tu mejor inversión
REGLA: Lo que defines ahí no se cobra en cada mensaje. Escríbelo bien una vez — ahorra siempre.

[REGLA 03]
TÍTULO: El primer mensaje es el más importante
REGLA: Todo el contexto, el formato esperado y el scope en un solo disparo. Cada vuelta de aclaración cuesta.

[REGLA 04]
TÍTULO: Sé el director, no el improvisador
REGLA: "Quiero una tabla con estas 3 columnas" es 10× más barato que descubrir el formato después de ver el resultado.

[REGLA 05]
TÍTULO: El Knowledge del Project trabaja gratis
REGLA: Archivos en Knowledge = referencia sin costo. Archivos pegados en el chat = tokens cobrados cada vez.

[REGLA 06]
TÍTULO: No pidas permiso para continuar
REGLA: "¿Entendiste?" y "¿Estás seguro?" son tokens que no informan ni deciden nada.

[REGLA 07]
TÍTULO: Las preguntas de seguimiento van en el mismo hilo
REGLA: El reporte ya calculado no se recalcula. El hilo tiene memoria — úsala antes de abrir uno nuevo.

[REGLA 08]
TÍTULO: Pide el cambio exacto, no la reescritura
REGLA: "Cambia el párrafo 3" cuesta el 10% de "reescribe el documento completo".

[REGLA 09]
TÍTULO: Interrumpe cuando tienes lo que necesitas
REGLA: No esperes que Claude termine si ya leíste lo que buscabas. Cada línea adicional tiene precio.

[REGLA 10]
TÍTULO: El scope es el presupuesto
REGLA: "Solo el equipo Tech" cuesta lo que pesa. "Los 5 equipos" cuesta 5 veces más. Define el alcance antes de enviar.

---

# BLOQUE 5 · COMANDOS — Claude Code

[NOTA DE DISEÑO]
Tabla o grid de comandos agrupados por categoría.
Cada comando: nombre en monospace · descripción corta.
Los atajos de teclado pueden tener un tratamiento visual diferente (badge, key cap).
4 grupos con separador visual entre ellos.

[TITULAR DE SECCIÓN]
Comandos Claude Code

[SUBTÍTULO]
Los más importantes. Los que más tiempo y tokens ahorran.

---

[GRUPO 1 · CONTEXTO Y COSTO]

/clear
Borra el contexto de la conversación completamente.
Para empezar una tarea nueva sin arrastrar tokens de la anterior.

/compact
Comprime el historial manteniendo lo esencial.
Úsalo cuando la conversación lleva más de 20 mensajes.
Acepta instrucciones: /compact enfócate en los errores del pipeline

/cost
Muestra el gasto de tokens de la sesión actual.
Revísalo antes de tareas largas para decidir si limpiar primero.

---

[GRUPO 2 · CONFIGURACIÓN Y SESIÓN]

/model
Cambia el modelo activo.
Haiku para búsquedas simples · Sonnet para análisis · Opus para razonamiento complejo.
El modelo correcto puede bajar el costo a la mitad.

/config
Abre la configuración de Claude Code.
Permisos, tema, comportamiento.

/init
Genera el archivo CLAUDE.md del proyecto.
Define el contexto permanente — lo que Claude sabe sin que lo repitas cada sesión.

/memory
Abre la memoria persistente del usuario.
Lo que guardas aquí aplica en todas las sesiones futuras.

/doctor
Verifica que la instalación esté correcta.
Primer paso cuando algo no funciona.

/login  /logout
Gestión de sesión y cuenta.

---

[GRUPO 3 · HERRAMIENTAS DE DESARROLLO]

/review
Activa el code review sobre el diff activo.
Solo revisa lo que cambió — no todo el proyecto.

/run
Corre la aplicación y observa el comportamiento real.
Verifica que un cambio funciona antes de reportarlo como listo.

/simplify
Revisa el código modificado y aplica limpiezas de simplificación y eficiencia.

/security-review
Auditoría de seguridad del branch activo.

/verify
Corre la app y confirma que el cambio funciona en el flujo real, no solo en tests.

---

[GRUPO 4 · MCP Y ATAJOS]

/mcp
Lista y gestiona los servidores MCP conectados al proyecto.

Esc
Cancela la operación en curso.

Esc Esc  [ATAJO DESTACADO]
Interrumpe a Claude a mitad de respuesta.
El más útil para ahorrar tokens — corta el gasto inmediatamente.

#texto  [PREFIJO]
Guarda directamente en memoria sin abrir /memory.

@archivo  [PREFIJO]
Referencia un archivo en el mensaje sin que Claude lo lea completo en el contexto.

---

# BLOQUE 6 · CIERRE — Caso real Sprint Intelligence

[NOTA DE DISEÑO]
Layout editorial "The Editorial" — imagen o visual dominante a la derecha,
columna de copy a la izquierda. Fondo oscuro para el cierre.
El contraste 1 mes vs 3-5 días como el titular más grande de toda la guía.
Screenshot de la sección "Análisis de causa — Vencidas" del sprint de ejemplo como visual principal.
Esa sección muestra los 3 patrones identificados — donde se ve la inteligencia real.

[SUPERTÍTULO]
Caso real · sistema de inteligencia operacional

[TITULAR — el más grande de la guía]
1 mes construyéndolo.
3-5 días con el kit.

[SUBTÍTULO]
El caso que generó el framework.

---

[COLUMNA IZQUIERDA — copy narrativo]

EL PROBLEMA
El equipo no sabía dónde vivían los datos en ClickUp.
No había documentación. Cada consulta era un experimento.
El 60% del tiempo total del proyecto se fue en descubrir
la arquitectura a prueba y error — antes de escribir
una sola línea del prompt.

LO QUE CONSTRUYERON
5 equipos. 843 tareas. Bogotá UTC-5.
6 patrones de jerarquía. 12 clientes simultáneos.
Un solo reporte. Generado en tiempo real desde ClickUp.

LO QUE EL AGENTE HACE QUE UNA HOJA DE CÁLCULO NO PUEDE
No cuenta tareas. Detecta patrones.
No reporta números. Recomienda acciones.
No lista vencidas. Identifica por qué están vencidas
y quién está desbordado antes de que escale.

[LOS 3 DATOS QUE DEMUESTRAN EL SALTO — elementos visuales]
DATO 1: "en pausa" ≠ VENCIDA aunque la fecha pasó — decisión de negocio codificada
DATO 2: 5 vocabularios distintos de estado → 1 métrica consistente
DATO 3: 10+ tareas vencidas en una persona × 3 proyectos = alerta de escalada HOY

[LECCIÓN CENTRAL — pull quote cierre]
"El 60% del trabajo de un agente
no está en el prompt.
Está en entender los datos
antes de escribir."

[CALL TO ACTION — cierre]
Hoy opera en producción para 5 equipos.
Tú puedes construir el tuyo en 3-5 días.

---

[COLUMNA DERECHA — visual]
VISUAL PRINCIPAL: Screenshot de la sección "Análisis de causa — Vencidas"
del reporte sprint de ejemplo. Muestra los 3 patrones identificados.
Nota: no replicar el reporte — mostrar como evidencia del output real del agente.

CAPTION DEL VISUAL:
"Reporte Sprint · Generado en tiempo real"

---

# FOOTER DE LA GUÍA

[NOTA DE DISEÑO]
Footer oscuro consistente con la portada. Logo [logo-agencia]. Datos del kit.

[logo-agencia]
[www.agencia.co]
kit-construccion-agentes v1.0 · Junio 2026 · 

---

# METADATOS DEL BRIEF

Título de la publicación: Kit de Construcción de Agentes
Formato: HTML standalone · imprimible como PDF A4
Identidad: Gabarito 900 (titulares) · Plus Jakarta Sans (cuerpo) · #EF2222 (acento)
Fondo portada y cierre: #111827 · Resto: blanco y #f9fafb
Bloques: 6 secciones + footer
Navegación: scroll o impresión A4
Compatible con: Claude.ai artifact renderer · Ctrl+P para PDF
