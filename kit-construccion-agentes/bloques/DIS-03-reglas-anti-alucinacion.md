# DIS-03 · Reglas Anti-Alucinación
**Kit de Construcción de Agentes**
**Bloque:** DIS — Diseño del agente  
**Versión:** 1.0 · Junio 2026

---

## ¿Qué hace este prompt?

Genera las reglas de comportamiento que el agente sigue cuando los datos
no están disponibles, son ambiguos, o el proceso no puede completarse.

Sin estas reglas, el agente inventa datos para parecer útil — y lo hace
en silencio. El usuario nunca sabe qué parte del output es real y qué parte
fue inferida. Eso es más peligroso que un error visible.

---

## Cuándo usarlo

- Después de DIS-02 — cuando el DATA_DICTIONARY.md ya define los campos
- Antes de WRT-01 — las reglas generadas aquí se insertan directamente en el prompt

---

## Prerequisito

Tener el `AGENT_SPEC.md` de DIS-01 y el `DATA_DICTIONARY.md` de DIS-02.
Sin el diccionario, las reglas no tienen a qué campos referirse — quedan genéricas.

---

## El prompt

```
Actúa como un tech lead definiendo las reglas de comportamiento de un agente
de IA para cuando los datos no están disponibles o el proceso falla.

Voy a darte el AGENT_SPEC.md y el DATA_DICTIONARY.md.
Hazme las preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el documento ANTI_HALLUCINATION_RULES.md.

Las reglas que generemos se insertarán directamente en el prompt del agente.
Por eso cada regla debe ser accionable: no "no hagas X" sino
"si ocurre X, entonces haz Y — porque Z".

--- INICIO ---

BLOQUE 1 — PROHIBICIONES ABSOLUTAS

P1. ¿Cuáles son los datos que el agente NUNCA puede inventar,
    estimar ni inferir bajo ninguna circunstancia?
    
    Piensa en los datos que, si son incorrectos, generan una consecuencia grave:
    una decisión equivocada, un cliente mal informado, un dato en un sistema externo.

P2. ¿Hay campos del DATA_DICTIONARY donde el agente podría ser tentado
    a "completar" con información parecida?
    
    Ejemplo: si no encuentra el responsable, ¿podría asumir que es el mismo
    de la tarea anterior? → eso sería una alucinación silenciosa.

P3. ¿Qué resultado incorrecto sería inaceptable — aunque parezca razonable?
    (Retomando el criterio de falla del AGENT_SPEC.md)

BLOQUE 2 — COMPORTAMIENTO EN AUSENCIA DE DATOS

P4. Para cada campo obligatorio del DATA_DICTIONARY:
    ¿Qué hace el agente si ese campo no está disponible?
    
    Para cada campo, define UNA respuesta específica:
    
    a) Omitir ese registro del output + indicar cuántos fueron omitidos
    b) Marcar ese campo como "[dato no disponible]" y continuar
    c) Detener el proceso y reportar qué falta
    d) Usar el valor por defecto definido en DATA_DICTIONARY

P5. ¿Puede el agente producir un output parcial si le falta información?
    Si sí: ¿cuáles campos son indispensables para que el output sea válido?
    ¿Cuáles pueden estar vacíos sin invalidar el resultado?

P6. ¿Cómo debe comunicar el agente que su output es parcial?
    ¿En el output mismo · al final como nota · en un campo separado?
    Dame el texto exacto o el formato que quieres ver.

BLOQUE 3 — CRITERIO DE PARADA

P7. ¿Cuándo debe el agente detenerse completamente y no producir ningún output?
    
    Define el umbral: ¿qué combinación de datos faltantes hace que el resultado
    sea tan incompleto que es peor que no tener nada?
    
    Ejemplo: "Si no hay transcripción, no hay minuta — detener y avisar"

P8. Cuando el agente se detiene, ¿qué debe reportar exactamente?
    ¿Qué información necesita el usuario para resolver el problema y reintentar?

P9. ¿El agente puede reintentar automáticamente si una consulta falla?
    Si sí: ¿cuántas veces? ¿Con qué diferencia entre intentos?
    Si no: ¿a quién le avisa y cómo?

BLOQUE 4 — COMUNICACIÓN DE INCERTIDUMBRE

P10. Si el agente no está seguro de un dato pero tiene una estimación razonable:
     ¿puede presentarla? 
     Si sí: ¿cómo la diferencia de un dato confirmado?
     (Ejemplo: prefijo "[estimado]" · nota al pie · campo separado · nunca permitido)

P11. ¿Hay cálculos en el agente que pueden dar resultados ambiguos
     según cómo se interpreten los datos de entrada?
     Define la interpretación correcta para cada uno.

P12. Si el agente recibe una pregunta para la que no tiene datos suficientes,
     ¿qué responde?
     Dame el texto exacto que quieres que aparezca en el output.

--- FIN ---

Con todas las respuestas genera el documento ANTI_HALLUCINATION_RULES.md:

# ANTI_HALLUCINATION_RULES — [NOMBRE DEL AGENTE]
Fecha: [fecha]
Versión: 1.0
Fuente: AGENT_SPEC.md v1.0 · DATA_DICTIONARY.md v1.0

## Prohibiciones absolutas

[Lista numerada — formato: NUNCA [acción] · Riesgo si se incumple: [consecuencia]]

## Comportamiento por campo en ausencia de datos

| Campo | Si está vacío → | Razón |
|-------|-----------------|-------|

## Output mínimo válido

[Lista de campos indispensables para que el output sea publicable]
Si alguno falta → [acción definida]

## Criterio de parada

[Condición exacta que detiene el proceso completamente]
Mensaje al usuario: "[texto exacto]"
Reintentos: [N veces · cada X segundos · o no]

## Comunicación de incertidumbre

[Cómo se diferencia un dato confirmado de uno estimado en el output]
Texto exacto para datos no disponibles: "[texto exacto]"
Texto exacto para proceso detenido: "[texto exacto]"

## Reglas de interpretación — ambigüedades

[Lista numerada — formato: Situación ambigua → Interpretación correcta · Por qué]
```

---

## Output esperado

Un `ANTI_HALLUCINATION_RULES.md` que se inserta directamente como sección
**REGLAS DE NEGOCIO** en el prompt final (WRT-01).

Las reglas son accionables: cada una define qué hacer, no solo qué evitar.

---

## Ejemplo de output — fragmento

**Agente:** Minuta automática de reuniones de seguimiento

```
## Prohibiciones absolutas

1. NUNCA inventar el nombre de un participante de la reunión.
   Riesgo: la minuta quedaría atribuida a alguien que no estuvo en la reunión.

2. NUNCA completar una fecha límite de tarea que no fue mencionada explícitamente.
   Riesgo: el equipo operaría con un compromiso falso como si fuera real.

3. NUNCA resumir una transcripción que no se haya leído completa.
   Riesgo: compromisos mencionados al final se pierden sistemáticamente.

## Comportamiento por campo en ausencia de datos

| Campo | Si está vacío → | Razón |
|---|---|---|
| transcript.text | Detener proceso + avisar | Sin transcripción no hay minuta — no hay output parcial válido |
| participants[].name | Marcar como "[participante sin nombre registrado]" | La tarea puede existir sin saber quién estuvo |
| due_date del compromiso | Marcar como "[fecha por definir]" | Preferible visible que inventada |

## Output mínimo válido

Campos indispensables:
- transcript.text (no vacío, > 100 caracteres)
- started_at (para fecha de la reunión)
- title (para identificar la reunión)

Si alguno falta → proceso detenido.
Si faltan participants → continuar con "[participantes no registrados]"

## Criterio de parada

Condición: transcript.text está vacío O tiene menos de 100 caracteres.
Mensaje al usuario:
  "Reunión sin transcripción disponible. Verificar que la grabación fue procesada
   por Fathom antes de reintentar. ID de reunión: [id]"
Reintentos: no aplica — el problema es de datos, no de conexión.

## Comunicación de incertidumbre

Dato confirmado (leído de la fuente): sin prefijo
Dato no disponible: "[dato no disponible]"
Proceso detenido: "⚠ Proceso detenido — [razón específica]"

## Reglas de interpretación — ambigüedades

1. Si una tarea fue mencionada varias veces en la reunión con responsables distintos
   → usar el responsable de la mención más reciente · razón: las reuniones
   de seguimiento típicamente corrigen asignaciones durante la misma sesión.
```

---

## Conexión con otros prompts del kit

```
DIS-02 DATA_DICTIONARY.md  →  DIS-03 (este) ANTI_HALLUCINATION_RULES.md
DIS-03 (este)              →  WRT-01 Esqueleto de prompt

Las reglas de DIS-03 se insertan como sección "REGLAS DE NEGOCIO"
en el prompt generado por WRT-01 — no se reescriben, se copian.

NOTA DE DEDUPLICACIÓN: DIS-02 ya tiene una tabla "Comportamiento por campo cuando está vacío".
Las respuestas a P4 de este prompt deben ser la versión definitiva y canónica.
Si un campo ya tiene comportamiento definido en DIS-02, confirmar o corregir aquí —
no repetir si coincide. Al ensamblar en WRT-01, solo incluir la tabla de DIS-03.
```

---

*DIS-03 · kit-construccion-agentes v1.0 · Junio 2026*
