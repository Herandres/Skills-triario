# DIS-01 · Definidor de Objetivo
**Kit de Construcción de Agentes**
**Bloque:** DIS — Diseño del agente  
**Versión:** 1.0 · Junio 2026

---

## ¿Qué hace este prompt?

Convierte una idea vaga de agente en una especificación técnica precisa.
Define qué hace, qué NO hace, qué produce, cómo se activa y cuándo está bien hecho.

Sin este paso, el agente crece sin control — cada semana alguien pide "una cosa más"
y el prompt se vuelve imposible de mantener.

---

## Cuándo usarlo

- Antes de escribir una sola línea del prompt
- Cuando el objetivo del agente está definido vagamente ("que analice las ventas")
- Cuando el alcance del agente no está acordado con el equipo

---

## Prerequisito

Tener el `ARCHITECTURE_MAP.md` de ARQ-01 o ARQ-02.
Sin él, el objetivo se define en el vacío — sin saber qué datos existen realmente.

---

## El prompt

```
Actúa como un tech lead definiendo el alcance de un agente de IA antes
de construirlo. Voy a darte el contexto del agente y tú vas a generar
la especificación técnica completa.

Hazme las siguientes preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el documento AGENT_SPEC.md.

--- INICIO ---

BLOQUE 1 — OBJETIVO CENTRAL

P1. Describe en una sola frase qué hace este agente.
    Formato obligatorio: "El agente [VERBO] [QUÉ] a partir de [FUENTE]
    y produce [OUTPUT] para [QUIÉN]"
    
    Ejemplo correcto:
    "El agente analiza las reuniones de seguimiento de Fathom, extrae
    compromisos y tareas, y produce una minuta estructurada para el PM"
    
    Ejemplo incorrecto:
    "El agente ayuda con las reuniones" ← demasiado vago, no construible

P2. ¿Qué problema concreto resuelve hoy que se hace manualmente?
    ¿Cuánto tiempo toma hacerlo sin el agente?

P3. ¿Quién usa el output del agente y qué decisión toma con él?

BLOQUE 2 — ALCANCE EXACTO

P4. Lista las 3 cosas que el agente SÍ hace — máximo 3.
    Si tienes más de 3, es más de un agente.

P5. Lista las 3 cosas que el agente NO hace — explícitamente.
    Esto es tan importante como lo que sí hace.
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
     (Ejemplo: "La minuta tiene al menos 1 tarea con responsable y fecha"
      — NO: "La minuta se ve bien")

P12. ¿Qué resultado incorrecto sería inaceptable?
     El caso de falla que definitivamente no puedes permitir.

--- FIN ---

Con todas las respuestas genera el documento AGENT_SPEC.md:

# AGENT_SPEC — [NOMBRE DEL AGENTE]
Fecha: [fecha]
Versión: 1.0

## Objetivo
[Una sola frase en formato P1]

## Problema que resuelve
[Descripción del proceso manual actual + tiempo ahorrado]

## Usuario del output
[Quién lo usa · qué decisión toma con él]

## Alcance

### El agente SÍ hace:
1. [acción 1]
2. [acción 2]
3. [acción 3]

### El agente NO hace:
1. [exclusión 1]
2. [exclusión 2]
3. [exclusión 3]

## Inputs requeridos
| Input | Fuente | ¿Siempre disponible? |
|-------|--------|----------------------|

## Output
- Formato: [tipo de output]
- Estructura: [descripción o ejemplo]
- Si falta un dato: [comportamiento definido]

## Activación
- Trigger: [manual / automático / evento]
- Frecuencia: [cada vez que · diario · semanal]

## Criterio de éxito
[Criterio medible — cómo verificar que funcionó]

## Criterio de falla inaceptable
[El caso que definitivamente no puede pasar]

## Dependencias
[Qué necesita estar funcionando para que este agente opere]
```

---

## Output esperado

Un `AGENT_SPEC.md` que le dice al tech exactamente qué construir.
Cualquier miembro del equipo puede leerlo y entender el alcance sin preguntar.

---

## Ejemplo de output — fragmento

**Agente:** Minuta automática de reuniones de seguimiento

```
## Objetivo
El agente procesa las transcripciones de Fathom, extrae compromisos y
decisiones, y produce una minuta estructurada con tareas para el PM.

## El agente SÍ hace:
1. Extrae compromisos con responsable y fecha de la transcripción
2. Clasifica los temas en: avances · bloqueos · decisiones · tareas
3. Genera el resumen en formato de minuta lista para enviar

## El agente NO hace:
1. No crea las tareas en ClickUp — solo las lista
2. No envía el correo — genera el contenido para que el PM lo revise
3. No analiza reuniones internas — solo reuniones con cliente

## Criterio de éxito
Cada tarea en la minuta tiene: descripción · responsable · fecha límite.
Si alguno de los tres campos está vacío → el agente lo marca como "pendiente definir".

## Criterio de falla inaceptable
Que el agente invente un compromiso que no fue dicho en la reunión.
```

---

## Conexión con otros prompts del kit

```
ARQ-01 / ARQ-02  →  DIS-01 (este)  →  DIS-02 Diccionario de datos  →  DIS-03 Reglas anti-alucinación
DIS-01 (este)    →  WRT-01 Esqueleto de prompt

IMPORTANTE: DIS-03 requiere tanto AGENT_SPEC (DIS-01) como DATA_DICTIONARY (DIS-02).
No ir de DIS-01 directamente a DIS-03 — pasar siempre por DIS-02 primero.
```

El `AGENT_SPEC.md` que produce este prompt es el contrato del agente.
Todo el prompt posterior se construye para cumplir exactamente esa especificación.

---

*DIS-01 · kit-construccion-agentes v1.0 · Junio 2026*
