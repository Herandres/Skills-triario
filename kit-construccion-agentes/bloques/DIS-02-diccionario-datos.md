# DIS-02 · Diccionario de Datos
**Kit de Construcción de Agentes**
**Bloque:** DIS — Diseño del agente  
**Versión:** 1.0 · Junio 2026

---

## ¿Qué hace este prompt?

Convierte los campos del `AGENT_SPEC.md` en un diccionario técnico preciso.
Para cada campo define: nombre canónico, tipo, ejemplo real, y qué significa
cuando está vacío.

Sin este paso, el agente inventa nombres de campo, interpreta nulos como cero,
o confunde dos campos que parecen lo mismo. Es la causa más frecuente
de alucinaciones silenciosas — el agente no falla, simplemente usa el campo
incorrecto y nadie lo nota.

---

## Cuándo usarlo

- Después de DIS-01 — cuando el `AGENT_SPEC.md` ya define qué campos necesita el agente
- Cuando la herramienta tiene campos con nombre técnico diferente al nombre en la UI
- Cuando hay campos que aparecen vacíos en algunos registros y el agente debe saber qué hacer

---

## Prerequisito

Tener el `AGENT_SPEC.md` de DIS-01 con la sección **Inputs requeridos** completa.
Sin él no se sabe qué campos necesita el agente — el diccionario sería genérico e inútil.

---

## El prompt

```
Actúa como un tech lead construyendo el diccionario de datos de un agente de IA.
Voy a darte el AGENT_SPEC.md y tú vas a extraer y documentar cada campo
que el agente necesita para funcionar.

Hazme las preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el documento DATA_DICTIONARY.md.

--- INICIO ---

BLOQUE 1 — INVENTARIO DE CAMPOS

P1. Del AGENT_SPEC.md, lista todos los campos de entrada que necesita el agente.
    Para cada campo, dame:
    - Nombre en la interfaz (como lo ve el usuario)
    - Nombre técnico en la API o base de datos (si lo conoces)
    - Objeto del que viene (Ejemplo: "viene de la tarea", "viene del proyecto")

P2. ¿Hay campos que no están en el AGENT_SPEC pero el agente los necesita
    para hacer sus cálculos?
    (Ejemplo: "necesito el campo created_at aunque no lo muestro en el output")

P3. ¿Cuáles de estos campos son obligatorios para que el agente funcione
    y cuáles son opcionales?

BLOQUE 2 — DEFINICIÓN TÉCNICA

P4. Para cada campo obligatorio, dime:
    - Tipo de dato: texto · número entero · número decimal ·
      timestamp (fecha/hora) · booleano · enum (lista fija de valores)
    - Un ejemplo de valor real tomado del sistema
      (no inventes — usa un dato que hayas visto realmente)

P5. Para los campos de tipo enum: ¿cuáles son todos los valores posibles?
    ¿Hay valores que parecen distintos pero significan lo mismo?
    (Ejemplo: "closed", "Closed", "CLOSED" — ¿los tres existen en el sistema?)

P6. Para los campos de tipo timestamp:
    - ¿En qué formato viene? (Unix ms · Unix segundos · ISO 8601 · texto)
    - ¿Viene en UTC o en otra zona horaria?

BLOQUE 3 — COMPORTAMIENTO EN VACÍO

P7. Para cada campo: ¿qué pasa cuando el valor está vacío o es null?
    Define explícitamente qué debe hacer el agente:
    
    Opciones posibles:
    a) Omitir ese registro completo
    b) Usar un valor por defecto (¿cuál?)
    c) Marcar el campo como "no disponible" en el output
    d) Detener el proceso y reportar el error
    
    No hay respuesta correcta universal — depende del campo.

P8. ¿Hay campos que en algunos registros siempre tienen valor
    pero en otros siempre están vacíos?
    ¿Por qué ocurre esa diferencia?

BLOQUE 4 — AMBIGÜEDADES Y TRAMPAS

P9. ¿Hay dos campos que parecen lo mismo pero significan cosas distintas?
    (Ejemplo: "fecha estimada de cierre" vs "fecha real de cierre")
    Para cada par: ¿cuándo usar uno y cuándo usar el otro?

P10. ¿Hay campos cuyo significado cambia según el estado del registro?
     (Ejemplo: el campo "responsable" en una tarea completada
      puede ser quien la cerró, no quien la tenía asignada)

P11. ¿Qué campos NO debe leer el agente aunque existan en la fuente?
     ¿Por qué? (datos sensibles, deprecados, siempre incorrectos)

--- FIN ---

Con todas las respuestas genera el documento DATA_DICTIONARY.md:

# DATA_DICTIONARY — [NOMBRE DEL AGENTE]
Fecha: [fecha]
Versión: 1.0
Fuente: AGENT_SPEC.md v1.0

## Campos en scope

| Campo canónico | Nombre técnico | Objeto fuente | Tipo | Ejemplo real | Obligatorio |
|----------------|----------------|---------------|------|--------------|-------------|

## Comportamiento por campo cuando está vacío

| Campo | Comportamiento | Valor por defecto |
|-------|----------------|-------------------|

## Enums — valores válidos

| Campo | Valores válidos | Equivalencias (aliases) |
|-------|-----------------|-------------------------|

## Timestamps — formato y zona horaria

| Campo | Formato raw | Zona horaria | Cómo interpretar |
|-------|-------------|--------------|-----------------|

## Ambigüedades documentadas

| Campo A | Campo B | Diferencia | Cuándo usar cada uno |
|---------|---------|------------|----------------------|

## Campos fuera de scope

| Campo | Razón de exclusión |
|-------|--------------------|

## Reglas de validación

[Lista numerada: condiciones que el agente debe verificar antes de procesar un registro]
```

---

## Output esperado

Un `DATA_DICTIONARY.md` que el agente puede seguir como contrato.
Cualquier tech que lea el diccionario sabe exactamente qué campo usar,
en qué formato viene, y qué hacer si no tiene valor.

---

## Ejemplo de output — fragmento

**Agente:** Minuta automática de reuniones de seguimiento

```
## Campos en scope

| Campo canónico | Nombre técnico | Objeto fuente | Tipo | Ejemplo real | Obligatorio |
|---|---|---|---|---|---|
| reunion_id | id | meeting | string | "mtg_9af3b2c1" | SÍ |
| reunion_titulo | title | meeting | string | "Seguimiento semana 3 - Cliente XYZ" | SÍ |
| reunion_fecha | started_at | meeting | timestamp Unix ms | [ID] | SÍ |
| transcripcion | transcript.text | meeting | string | "Juan: entonces confirmamos..." | SÍ |
| duracion_seg | duration_seconds | meeting | integer | 2847 | SÍ |
| participantes | participants[].name | meeting | array[string] | ["Ana López", "Carlos Ruiz"] | NO |

## Comportamiento por campo cuando está vacío

| Campo | Comportamiento | Valor por defecto |
|---|---|---|
| transcripcion | Omitir reunión completa + registrar en log | — |
| participantes | Marcar como "participantes no registrados" | — |
| duracion_seg | Usar valor 0 y verificar transcripcion | 0 |

## Ambigüedades documentadas

| Campo A | Campo B | Diferencia | Cuándo usar |
|---|---|---|---|
| summary.action_items | transcript.text | summary viene pre-procesado por Fathom · puede omitir compromisos | Usar transcript.text — es la fuente de verdad |

## Reglas de validación

1. Si duracion_seg < 300 (5 min) → la transcripcion puede estar vacía aunque el campo exista → verificar antes de procesar
2. Si participants[].type ≠ "external" → es reunión interna → no procesar (fuera de scope)
3. Si transcript.text tiene < 100 caracteres → transcripcion incompleta → omitir y registrar
```

---

## Conexión con otros prompts del kit

```
DIS-01 AGENT_SPEC.md  →  DIS-02 (este) DATA_DICTIONARY.md
DIS-02 (este)         →  DIS-03 Reglas anti-alucinación
DIS-02 (este)         →  WRT-01 Esqueleto de prompt

El DATA_DICTIONARY.md se incluye como sección "CAMPOS VÁLIDOS"
dentro del prompt final generado por WRT-01.

NOTA DE ENSAMBLAJE: DIS-02 produce una tabla "Comportamiento por campo cuando está vacío"
y DIS-03 produce una tabla similar. Al ensamblar en WRT-01, usar la de DIS-03 como
versión definitiva — es más completa porque ya incorporó el AGENT_SPEC.
Eliminar la tabla de DIS-02 del §3 para evitar duplicación y posible contradicción.
```

---

*DIS-02 · kit-construccion-agentes v1.0 · Junio 2026*
