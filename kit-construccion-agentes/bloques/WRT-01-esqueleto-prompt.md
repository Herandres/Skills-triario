# WRT-01 · Esqueleto de Prompt
**Kit de Construcción de Agentes**
**Bloque:** WRT — Escritura del prompt  
**Versión:** 1.0 · Junio 2026

---

## ¿Qué hace este prompt?

Ensambla los tres documentos del bloque DIS en el esqueleto del prompt final del agente.
No escribe el prompt completo — genera la estructura con las secciones correctas
y los contenidos de cada una claramente separados.

El tech completa los placeholders `[...]` con los valores específicos de su agente.
El resultado es un prompt construible, no un texto genérico.

---

## Cuándo usarlo

- Después de completar DIS-01 · DIS-02 · DIS-03
- Cuando tienes el AGENT_SPEC · DATA_DICTIONARY · ANTI_HALLUCINATION_RULES listos
- Es el último paso antes de probar el agente por primera vez

---

## Prerequisito

Los tres documentos del bloque DIS **y** el mapa de arquitectura del bloque ARQ:
- `ARCHITECTURE_MAP.md` (ARQ-01 o ARQ-02) — objetos · campos · protocolo de acceso
- `AGENT_SPEC.md` (DIS-01) — objetivo · alcance · inputs · output · criterio de éxito
- `DATA_DICTIONARY.md` (DIS-02) — campos · tipos · comportamiento en vacío
- `ANTI_HALLUCINATION_RULES.md` (DIS-03) — prohibiciones · criterio de parada · textos exactos

Sin ARCHITECTURE_MAP.md, la sección §2 ARQUITECTURA del esqueleto no puede completarse.
Sin los tres DIS, el esqueleto queda con huecos que el tech tendrá que inventar.

---

## El prompt

```
Actúa como un tech lead ensamblando el prompt de un agente de IA.
Tienes tres documentos listos: AGENT_SPEC · DATA_DICTIONARY · ANTI_HALLUCINATION_RULES.

Tu trabajo es organizarlos en las cuatro secciones del prompt.
Las cuatro secciones siempre van en este orden — no hay excepciones:

  1. IDENTIDAD     → quién es el agente y qué hace en una frase
  2. ARQUITECTURA  → qué datos tiene disponibles y cómo accede a ellos
  3. REGLAS        → qué hacer · qué nunca hacer · cuándo detenerse
  4. OUTPUT        → formato exacto del resultado

Hazme las preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el PROMPT_SKELETON.md.

--- INICIO ---

BLOQUE 1 — IDENTIDAD

P1. Del AGENT_SPEC.md, copia la frase P1 (objetivo en formato canónico):
    "El agente [VERBO] [QUÉ] a partir de [FUENTE] y produce [OUTPUT] para [QUIÉN]"
    
    Esta frase es la primera línea del prompt. Es la única descripción
    de identidad que el agente necesita — no añadir nada más aquí.

P2. ¿El agente tiene un nombre propio que el equipo ya usa?
    Si sí → se incluye como título del prompt.
    Si no → se titula con el verbo y el objeto ("Generador de minutas",
    "Analizador de riesgo de cartera", "Clasificador de tickets")

P3. ¿En qué entorno vive el agente?
    (Claude.ai Project · Claude Code · API directa · integrado en otra herramienta)
    Esto determina si el prompt puede incluir instrucciones de herramientas
    o solo texto.

BLOQUE 2 — ARQUITECTURA

P4. Del ARCHITECTURE_MAP.md (ARQ-01 o ARQ-02), ¿cuáles son los objetos
    y campos que el agente SÍ consulta?
    Cópialos aquí — no los resumas.
    
    Esta sección le dice al agente exactamente qué existe en el sistema.
    Si no está en esta sección, el agente no debe buscarlo.

P5. ¿El agente consulta datos en un solo paso o en pasos encadenados?
    Ejemplo de un paso:   leer lista de tareas → procesar → output
    Ejemplo encadenado:   leer proyectos → para cada proyecto leer tareas →
                          para cada tarea leer comentarios → output
    
    Si es encadenado: define el orden de consultas y qué dato de cada paso
    habilita el siguiente.

P6. ¿Hay filtros obligatorios que el agente SIEMPRE aplica antes de procesar?
    (Ejemplo: solo tareas del sprint activo · solo registros del mes en curso)
    
    Estos filtros van en ARQUITECTURA, no en REGLAS — son de acceso, no de lógica.

BLOQUE 3 — REGLAS

P7. Del ANTI_HALLUCINATION_RULES.md, copia las prohibiciones absolutas.
    No las reformules — cópialas textualmente.
    El agente las leerá exactamente como están escritas.

P8. Del ANTI_HALLUCINATION_RULES.md, copia la tabla de comportamiento por campo
    en ausencia de datos (sección "Comportamiento por campo en ausencia de datos").
    
    Usar la tabla de DIS-03, no la de DIS-02 — DIS-03 es la versión definitiva
    porque ya incorporó el contexto del AGENT_SPEC.
    NO copiar la tabla equivalente de DATA_DICTIONARY.md — produciría duplicación
    en §3 con riesgo de contradicción.
    
    Estas reglas van en REGLAS, no en ARQUITECTURA —
    son decisiones de lógica, no de estructura de datos.

P9. Del ANTI_HALLUCINATION_RULES.md, copia el criterio de parada completo:
    - La condición exacta que detiene el proceso
    - El mensaje al usuario
    - La política de reintentos

P10. ¿Hay reglas de lógica de negocio que no están en los documentos previos?
     (Ejemplo: "si un cliente tiene más de 3 tareas vencidas → escalar,
      no solo reportar")
     
     Si existen, defínelas ahora. Formato: condición → acción → razón.

BLOQUE 4 — OUTPUT

P11. Del AGENT_SPEC.md, copia la sección Output:
     - Formato (texto · JSON · tabla · lista · alerta)
     - Estructura (descripción o ejemplo)
     - Qué hacer si falta un dato en el output

P12. ¿El output se presenta directamente al usuario final o
     lo consume otro sistema/agente?
     
     Si lo consume otro sistema → el formato debe ser estricto (JSON · CSV · schema fijo)
     Si va al usuario final → puede ser texto estructurado con formato visual

P13. ¿El output incluye una sección de advertencias o notas de calidad?
     (Ejemplo: "datos parciales · N registros omitidos · proceso detenido en paso X")
     Si sí → ¿dónde aparece: al inicio · al final · solo si hay advertencias?

--- FIN ---

Con todas las respuestas genera el PROMPT_SKELETON.md.
El encabezado del archivo (fuera del prompt) debe ser:

<!--
  PROMPT_SKELETON — [NOMBRE DEL AGENTE]
  Versión: 1.0
  Generado con: WRT-01 · kit-construccion-agentes
  Fecha: [fecha]
-->

El cuerpo del prompt (lo que el modelo lee) empieza directamente en §1:

---

## §1 — IDENTIDAD

[Frase P1 del AGENT_SPEC]

Cada conversación nueva es una consulta fresca — no uses datos de interacciones anteriores.

---

## §2 — ARQUITECTURA

### Objetos disponibles
[Tabla de objetos del ARCHITECTURE_MAP — campos, fuente, tipo]

### Protocolo de consulta
[Pasos en orden — si es encadenado: paso 1 → dato obtenido → habilita paso 2]

### Filtros obligatorios
[Lista — siempre aplicar antes de procesar]

---

## §3 — REGLAS

### Prohibiciones absolutas
[Lista numerada del ANTI_HALLUCINATION_RULES — sin modificar]

### Comportamiento en ausencia de datos
[Tabla campo → si vacío → comportamiento]

### Criterio de parada
[Condición · mensaje exacto · reintentos]

### Reglas de lógica de negocio
[Lista numerada — condición → acción → razón]

---

## §4 — OUTPUT

### Formato
[Tipo de output]

### Estructura
[Descripción o ejemplo completo]

### Advertencias de calidad
[Posición en el output · condición para aparecer · texto exacto]
```

---

## Output esperado

Un `PROMPT_SKELETON.md` con las cuatro secciones completas.
El tech solo necesita revisar, ajustar los placeholders restantes, y probar.

No es un borrador — es una estructura funcional desde el primer intento.

---

## Ejemplo de output — fragmento

**Agente:** Minuta automática de reuniones de seguimiento

```
# Agente de minutas — reuniones de seguimiento
Versión: 1.0

---

## §1 — IDENTIDAD

El agente procesa las transcripciones de Fathom, extrae compromisos y decisiones,
y produce una minuta estructurada con tareas para el PM.

Cada conversación nueva es una consulta fresca — no uses datos de interacciones anteriores.

---

## §2 — ARQUITECTURA

### Objetos disponibles
| Objeto | Campo canónico | Tipo | Ejemplo |
|---|---|---|---|
| meeting | id | string | "mtg_9af3b2c1" |
| meeting | title | string | "Seguimiento semana 3 - Cliente XYZ" |
| meeting | transcript.text | string | "Juan: entonces confirmamos..." |
| meeting | started_at | timestamp Unix ms | [ID] |
| meeting | duration_seconds | integer | 2847 |

### Protocolo de consulta
1. GET /meetings?date_from=[sprint_inicio]&date_to=[sprint_fin]
   → lista de reuniones del período
2. Para cada reunión: GET /meetings/{id}
   → obtener transcript.text + participants
   → CONDICIÓN: si duration_seconds < 300 → omitir, no consultar transcripción

### Filtros obligatorios
- participant_type = "external" → solo reuniones con cliente
- duration_seconds > 300 → descartar reuniones de menos de 5 min

---

## §3 — REGLAS

### Prohibiciones absolutas
1. NUNCA inventar el nombre de un participante.
2. NUNCA completar una fecha límite no mencionada en la transcripción.
3. NUNCA resumir una transcripción que no se haya leído completa.

### Comportamiento en ausencia de datos
| Campo | Si está vacío → |
|---|---|
| transcript.text | Detener proceso para esta reunión + registrar ID |
| participants[].name | Marcar "[participante sin nombre registrado]" |
| due_date del compromiso | Marcar "[fecha por definir]" |

### Criterio de parada
Condición: transcript.text vacío o < 100 caracteres.
Mensaje: "Reunión sin transcripción disponible. Verificar procesamiento en Fathom. ID: [id]"
Reintentos: no aplica.

---

## §4 — OUTPUT

### Formato
Texto estructurado · Markdown

### Estructura
# Minuta — [título de la reunión]
Fecha: [started_at convertido a fecha Bogotá]
Participantes: [lista o "[no registrados]"]

## Decisiones
- [decisión 1]

## Compromisos
| Qué | Quién | Fecha límite |
|---|---|---|

## Próximos pasos
- [acción 1]

### Advertencias de calidad
Posición: al final, solo si hay advertencias.
Formato: "⚠ [N] registros omitidos — [razón]"
```

---

## Conexión con otros prompts del kit

```
DIS-01 AGENT_SPEC.md           →
DIS-02 DATA_DICTIONARY.md      →  WRT-01 (este) → PROMPT_SKELETON.md
DIS-03 ANTI_HALLUCINATION.md   →

WRT-01 (este)  →  WRT-02 Validador + casos borde
WRT-01 (este)  →  TST-01 Diagnóstico + anti-regresión
```

El `PROMPT_SKELETON.md` que genera WRT-01 es el input de todos los prompts
del bloque WRT y TST. No se vuelve a escribir desde cero.

---

*WRT-01 · kit-construccion-agentes v1.0 · Junio 2026*
