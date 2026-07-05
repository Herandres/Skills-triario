# WRT-02 · Validador y Casos Borde
**Kit de Construcción de Agentes**
**Bloque:** WRT — Escritura del prompt  
**Versión:** 1.0 · Junio 2026

---

## ¿Qué hace este prompt?

Valida el `PROMPT_SKELETON.md` antes del primer deploy y lo extiende
con los casos borde que no estaban en los documentos previos.

Tiene dos partes que ocurren en la misma sesión:

**Parte 1 — Validación:** detecta huecos, contradicciones e inconsistencias
entre el esqueleto y los documentos fuente (AGENT_SPEC · DATA_DICTIONARY · ANTI_HALLUCINATION_RULES).

**Parte 2 — Casos borde:** identifica inputs inusuales que el agente
va a encontrar en producción y que ningún documento previo anticipó.

---

## Cuándo usarlo

- Después de WRT-01 — cuando el `PROMPT_SKELETON.md` está escrito
- Antes del primer test con datos reales
- Cuando el agente produce resultados inesperados y no hay un TST-01 abierto todavía

---

## Prerequisito

- `PROMPT_SKELETON.md` de WRT-01
- `AGENT_SPEC.md` · `DATA_DICTIONARY.md` · `ANTI_HALLUCINATION_RULES.md`
  (para comparar contra el esqueleto)

---

## El prompt

```
Actúa como un tech lead revisando el prompt de un agente de IA antes
de su primer deploy.

Tu trabajo es dos cosas en una sesión:
  1. Detectar inconsistencias entre el PROMPT_SKELETON y los documentos fuente
  2. Identificar casos borde que el agente necesita manejar y que no están cubiertos

Hazme las preguntas de a una. Espera mi respuesta antes de continuar.
Al final genera el VALIDATION_REPORT.md.

--- INICIO ---

PARTE 1 — VALIDACIÓN DEL ESQUELETO

P1. Lee el §1 IDENTIDAD del PROMPT_SKELETON.
    ¿La frase del agente está en el formato canónico?
    "El agente [VERBO] [QUÉ] a partir de [FUENTE] y produce [OUTPUT] para [QUIÉN]"
    
    Si no → reescríbela en el formato correcto y señala qué faltaba.

P2. Lee el §2 ARQUITECTURA del PROMPT_SKELETON.
    Compara con el DATA_DICTIONARY:
    - ¿Están todos los campos obligatorios listados en §2?
    - ¿Hay campos en §2 que no están en el DATA_DICTIONARY? (campo huérfano)
    - ¿Los tipos de dato en §2 coinciden con los del DATA_DICTIONARY?

P3. Lee el §3 REGLAS del PROMPT_SKELETON.
    Compara con ANTI_HALLUCINATION_RULES:
    - ¿Están todas las prohibiciones absolutas?
    - ¿Está el criterio de parada completo con el mensaje exacto?
    - ¿Hay alguna regla en §3 que contradice otra regla del mismo §3?
    
    Contradicción típica: "omitir registro si campo X está vacío"
    en un lugar + "marcar como no disponible si campo X está vacío" en otro.

P4. Lee el §4 OUTPUT del PROMPT_SKELETON.
    - ¿El formato del output es lo suficientemente específico para ser testeable?
      (Ejemplo: "texto estructurado" no es testeable — "tabla Markdown con 4 columnas" sí)
    - ¿Está definido qué aparece en el output cuando el proceso es parcial?
    - ¿El formato es coherente con quién consume el output
      (humano · sistema · otro agente)?

P5. Vista completa del PROMPT_SKELETON:
    ¿Hay alguna instrucción que el agente podría interpretar de dos maneras distintas?
    Para cada ambigüedad encontrada: ¿cuál es la interpretación correcta?

PARTE 2 — CASOS BORDE

P6. ¿Qué pasa si la fuente de datos devuelve 0 resultados?
    (No hay tareas en el sprint · no hay reuniones en el período)
    ¿El agente debe avisar, continuar con output vacío, o detenerse?

P7. ¿Qué pasa si la fuente devuelve más registros de lo esperado?
    (Paginación · volumen inusualmente alto · datos de períodos anteriores mezclados)
    ¿El agente procesa todo, limita a N, o alerta antes de procesar?

P8. ¿Qué pasa si el mismo registro aparece dos veces?
    (Duplicados por paginación · misma tarea en dos listas)
    ¿El agente deduplica · procesa dos veces · o avisa?

P9. ¿Qué pasa si el usuario pide algo fuera del alcance del agente?
    Ejemplo: el agente genera minutas, pero el usuario pregunta por métricas de ventas.
    ¿El agente responde que no puede · intenta igualmente · o ignora?
    Dame el texto exacto de la respuesta fuera de alcance.

P10. ¿Hay inputs que el agente va a recibir en producción que no están
     en ninguno de los documentos previos?
     (Datos mal formateados · campos renombrados tras una actualización del sistema
      · idioma inesperado · registros de prueba mezclados con reales)

--- FIN ---

Con todas las respuestas genera el VALIDATION_REPORT.md:

# VALIDATION_REPORT — [NOMBRE DEL AGENTE]
Fecha: [fecha]
Versión del esqueleto validado: PROMPT_SKELETON.md v1.0

## Resultado de validación

Estado: LISTO PARA DEPLOY · REQUIERE CORRECCIONES · BLOQUEADO

  LISTO PARA DEPLOY     → todos los ítems del checklist marcados
  REQUIERE CORRECCIONES → hay inconsistencias subsanables en el esqueleto
  BLOQUEADO             → hay un problema en un documento fuente (AGENT_SPEC / DATA_DICTIONARY /
                          ARCHITECTURE_MAP) que requiere volver al bloque ARQ o DIS antes de continuar.
                          Indicar: qué documento tiene el problema y qué bloque debe re-ejecutarse.

## Inconsistencias encontradas

| # | Sección | Descripción | Corrección aplicada |
|---|---------|-------------|---------------------|

(Si no hay inconsistencias: "Esqueleto consistente con documentos fuente")

## Campos huérfanos

[Campos en §2 que no están en DATA_DICTIONARY — requieren revisión]
(Si no hay: "Ninguno")

## Reglas que se añaden al §3 del PROMPT_SKELETON

[Reglas nuevas derivadas de casos borde — listas para copiar en el esqueleto]

Formato de cada regla:
SI [condición borde] → [acción] · Razón: [por qué]

## Texto para respuesta fuera de alcance

[Texto exacto que el agente usa cuando recibe una pregunta fuera de scope]

## Checklist de aprobación pre-deploy

- [ ] ARCHITECTURE_MAP.md fue provisto para construir §2 (no inventado)
- [ ] §1 IDENTIDAD en formato canónico
- [ ] §2 ARQUITECTURA cubre todos los campos obligatorios del DATA_DICTIONARY
- [ ] §3 REGLAS contiene todas las prohibiciones del ANTI_HALLUCINATION_RULES
- [ ] §3 REGLAS tiene criterio de parada con mensaje exacto
- [ ] §3 REGLAS no tiene la tabla de comportamiento en vacío duplicada (solo la de DIS-03)
- [ ] §4 OUTPUT es testeable (formato específico, no genérico)
- [ ] Casos borde de P6-P10 cubiertos con reglas en §3
- [ ] Sin ambigüedades en el esqueleto completo

Si se aplicaron correcciones al PROMPT_SKELETON → incrementar versión (v1.0 → v1.1)
y registrar el cambio en el comentario de encabezado del archivo.
```

---

## Output esperado

Un `VALIDATION_REPORT.md` que funciona como checklist de aprobación.
Si todos los ítems están marcados → el agente está listo para el primer test real.
Si hay correcciones → se aplican al `PROMPT_SKELETON.md` antes de continuar.

---

## Ejemplo de inconsistencia detectada — fragmento

```
## Inconsistencias encontradas

| # | Sección | Descripción | Corrección aplicada |
|---|---|---|---|
| 1 | §3 REGLAS | "omitir registro si transcript vacío" en regla 4 + "marcar [no disponible] si transcript vacío" en regla 7 — contradicción | Unificado: omitir registro + registrar ID en log |
| 2 | §2 ARQUITECTURA | Campo "participants[].email" listado en §2 pero no en DATA_DICTIONARY | Eliminado de §2 — no está en scope |

## Reglas que se añaden al §3

SI la fuente devuelve 0 reuniones en el período → output: "Sin reuniones registradas
  en el período [fecha_inicio] - [fecha_fin]. Verificar filtros aplicados."
  Razón: sin esta regla el agente podría intentar procesar una lista vacía y fallar silenciosamente.

SI un registro aparece duplicado (mismo id) → procesar solo la primera ocurrencia · ignorar duplicados.
  Razón: la paginación de algunas APIs repite el último registro de la página anterior.
```

---

## Conexión con otros prompts del kit

```
WRT-01 PROMPT_SKELETON.md  →  WRT-02 (este) VALIDATION_REPORT.md
WRT-02 (este)              →  PROMPT_SKELETON.md corregido (v1.1)
WRT-02 (este)              →  TST-01 Diagnóstico + Anti-regresión
```

El `VALIDATION_REPORT.md` y el esqueleto corregido son los inputs de TST-01.

---

*WRT-02 · kit-construccion-agentes v1.0 · Junio 2026*
