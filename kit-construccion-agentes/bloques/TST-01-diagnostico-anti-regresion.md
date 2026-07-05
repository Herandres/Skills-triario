# TST-01 · Diagnóstico y Anti-regresión
**Kit de Construcción de Agentes**
**Bloque:** TST — Testing y mantenimiento  
**Versión:** 1.0 · Junio 2026

---

## ¿Qué hace este prompt?

Dos partes que ocurren en el mismo momento: cuando algo falla o cuando
vas a cambiar algo que funciona.

**Parte 1 — Diagnóstico:** localiza exactamente en qué sección del prompt
ocurrió el fallo y por qué. Sin esto, el tech modifica la sección equivocada
y el problema persiste.

**Parte 2 — Anti-regresión:** antes de aplicar el fix, define qué tests
confirman que el agente sigue funcionando en todo lo demás.
Un fix que resuelve un problema y rompe dos es peor que el problema original.

---

## Cuándo usarlo

- Cuando el agente produce un output incorrecto, incompleto o inesperado
- Antes de modificar cualquier sección del `PROMPT_SKELETON.md`
- Cuando se actualiza la fuente de datos y el agente dejó de funcionar

---

## Prerequisito

- `PROMPT_SKELETON.md` (versión activa del agente)
- El output incorrecto: qué produjo el agente + qué se esperaba que produjera
- El input exacto: qué datos recibió el agente en esa ejecución
- `VALIDATION_REPORT.md` de WRT-02 (para P9 — casos borde que el fix podría afectar)

---

## El prompt

```
Actúa como un tech lead diagnosticando por qué un agente de IA produjo
un resultado incorrecto.

Tu trabajo es dos cosas en una sesión:
  1. Localizar en qué sección del prompt ocurrió el fallo
  2. Definir los tests que confirman que el fix no rompe lo que funcionaba

Hazme las preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el DIAGNOSIS_REPORT.md.

--- INICIO ---

PARTE 1 — DIAGNÓSTICO

P1. Describe el fallo en este formato exacto:
    - Input: [qué datos recibió el agente]
    - Output esperado: [qué debería haber producido]
    - Output real: [qué produjo realmente]
    - Frecuencia: [siempre · a veces · solo con estos datos específicos]

P2. ¿El fallo ocurre con cualquier input o solo con inputs específicos?
    Si es con inputs específicos: ¿qué tienen en común?
    (Ejemplo: solo falla cuando hay más de 50 registros ·
     solo falla cuando un campo está vacío · solo falla al inicio del sprint)

P3. El fallo, ¿a qué sección del prompt corresponde?
    
    §1 IDENTIDAD:  el agente no hace lo que dice su objetivo
    §2 ARQUITECTURA: el agente consulta datos incorrectos o no los encuentra
    §3 REGLAS:     el agente aplica una regla incorrectamente o la ignora
    §4 OUTPUT:     el agente calcula bien pero presenta mal el resultado
    
    Si no estás seguro → describe el síntoma y lo determinamos juntos.

P4. Lee la sección identificada en P3.
    ¿Hay una instrucción que el agente podría haber interpretado de la manera
    que causó el fallo? Cópiala textualmente.

P5. ¿Este fallo ya ocurrió antes?
    Si sí → ¿qué se cambió la última vez? ¿El mismo cambio podría haberse revertido?
    Si no → ¿hubo algún cambio reciente en el prompt o en la fuente de datos?

P6. Propón el fix. Formato:
    - Sección afectada: [§N]
    - Texto actual: [copia textual]
    - Texto propuesto: [copia textual con el cambio]
    - Por qué este fix resuelve el fallo: [una sola frase]
    - Nueva versión del PROMPT_SKELETON: [versión actual + 1]
      (Ejemplo: si el esqueleto estaba en v1.2 → el fix lo lleva a v1.3)
    - ¿El fix cambia también DIS-02 o DIS-03? Si sí → indicar qué sección
      actualizar en esos documentos para mantener sincronía con el esqueleto.

PARTE 2 — ANTI-REGRESIÓN

P7. Antes de aplicar el fix: ¿qué hace el agente correctamente hoy
    que podría verse afectado por este cambio?
    
    Lista los comportamientos que deben seguir funcionando después del fix.
    (Ejemplo: "calcula correctamente el % de completado" ·
     "omite registros sin responsable" · "no falla cuando hay 0 tareas")

P8. Para cada comportamiento listado en P7, define un test mínimo:
    - Input de prueba: [dato o situación específica]
    - Output esperado: [resultado concreto y verificable]
    
    Estos tests se ejecutan después de aplicar el fix, antes de hacer deploy.

P9. ¿Hay algún caso borde identificado en WRT-02 que el fix podría afectar?
    Si sí → agrégalo a los tests de P8.

P10. Después de este fix: ¿hay alguna regla en el PROMPT_SKELETON
     que ya no es necesaria o que ahora contradice el fix?
     Si hay → marcarla para eliminar o actualizar.

--- FIN ---

Con todas las respuestas genera el DIAGNOSIS_REPORT.md:

# DIAGNOSIS_REPORT — [NOMBRE DEL AGENTE]
Fecha: [fecha]
Fallo reportado por: [quién detectó el problema]

## Descripción del fallo

- Input:           [dato exacto]
- Output esperado: [resultado correcto]
- Output real:     [resultado incorrecto]
- Frecuencia:      [siempre · condicionado · esporádico]

## Localización

Sección afectada: §[N] — [nombre de la sección]
Instrucción causante: "[texto copiado del prompt]"
Causa raíz: [una sola frase]

## Fix propuesto

**Sección:** §[N]

**Antes:**
[texto actual]

**Después:**
[texto con el cambio]

**Por qué resuelve el fallo:**
[una sola frase]

## Tests de anti-regresión

| # | Input de prueba | Output esperado | Resultado post-fix |
|---|-----------------|-----------------|-------------------|
| 1 | [dato] | [resultado] | [ ] Pendiente |
| 2 | [dato] | [resultado] | [ ] Pendiente |

## Instrucciones obsoletas después del fix

[Lista de reglas que deben eliminarse o actualizarse en el PROMPT_SKELETON]
(Si no hay: "Ninguna")

## Historial de fallos — este agente

| Fecha | Sección | Causa raíz | Fix aplicado |
|-------|---------|------------|--------------|
```

---

## Output esperado

Un `DIAGNOSIS_REPORT.md` que documenta el fallo, el fix y los tests de verificación.
Después de aplicar el fix y pasar los tests → el reporte se archiva como historial.

El historial de fallos en el reporte es el activo más valioso del agente a largo plazo:
revela qué secciones fallan con más frecuencia y por qué.

---

## Ejemplo de output — fragmento

**Agente:** Minuta automática de reuniones de seguimiento

```
## Localización

Sección afectada: §3 REGLAS
Instrucción causante: "Si transcript.text tiene < 100 caracteres → omitir reunión"
Causa raíz: El límite de 100 caracteres excluye reuniones cortas pero válidas
  donde el resumen es breve — reuniones de 10 minutos con decisiones concretas
  tienen transcripciones de 80-150 caracteres.

## Fix propuesto

Antes:
  Si transcript.text tiene < 100 caracteres → omitir reunión y registrar ID.

Después:
  Si transcript.text está vacío o es null → omitir reunión y registrar ID.
  Si transcript.text tiene < 50 caracteres → omitir reunión y registrar ID.
  Si transcript.text tiene entre 50 y 200 caracteres → procesar con advertencia:
    "⚠ Transcripción corta — revisar manualmente que el contenido sea completo."

Por qué resuelve el fallo:
  El umbral anterior era arbitrario — el nuevo distingue "vacío" de "corto pero válido".

## Tests de anti-regresión

| # | Input | Output esperado | Resultado |
|---|---|---|---|
| 1 | Reunión con transcript null | Omitir + registrar ID | [ ] |
| 2 | Reunión con transcript de 30 chars | Omitir + registrar ID | [ ] |
| 3 | Reunión con transcript de 120 chars | Procesar + advertencia | [ ] |
| 4 | Reunión con transcript de 2000 chars | Procesar sin advertencia | [ ] |
```

---

## Conexión con otros prompts del kit

```
WRT-02 VALIDATION_REPORT.md  →  TST-01 (este) si hay fallo post-validación
WRT-01 PROMPT_SKELETON.md    →  TST-01 (este) cuando se modifica en producción

TST-01 (este)  →  PROMPT_SKELETON.md v[N+1] (versión corregida)
TST-01 (este)  →  DIAGNOSIS_REPORT.md (historial acumulado)
```

Cada vez que se ejecuta TST-01, el número de versión del PROMPT_SKELETON
sube en uno. El historial de versiones + reportes es la trazabilidad completa
del agente.

---

*TST-01 · kit-construccion-agentes v1.0 · Junio 2026*
