# ARQ-02 · Entrevista al Experto
**Kit de Construcción de Agentes**
**Bloque:** ARQ — Arquitectura  
**Versión:** 1.0 · Junio 2026

---

## ¿Qué hace este prompt?

Extrae en 30 minutos todo lo que un tech necesita saber para construir un agente
sobre una herramienta que no conoce — combinando el QUÉ (estructura de datos y
negocio) con el CÓMO (protocolo técnico de acceso).

Convierte el conocimiento tácito del experto en documentación estructurada
y reutilizable para cualquier agente.

---

## Cuándo usarlo

- Cuando el tech no tiene acceso directo a la herramienta
- Cuando el tech tiene acceso pero la herramienta no está documentada
- Cuando hay alguien en el equipo que la usa hace tiempo y "sabe dónde está todo"
- Antes de ARQ-01 si no se puede explorar la herramienta directamente

---

## Prerequisito

Tener 30 minutos con la persona que más conoce la herramienta.
Compartirle este prompt antes de la sesión para que llegue preparado.

---

## El prompt

```
Eres un arquitecto técnico especializado en documentar sistemas de datos
para construir agentes de IA. Voy a hacerte una sesión de entrevista con
un experto en [NOMBRE DE LA HERRAMIENTA].

Tu objetivo es extraer toda la información necesaria para que un agente
pueda consultar esta herramienta correctamente desde el primer intento.

Haz las preguntas en este orden exacto. Espera la respuesta antes de continuar.
Cuando termines todas las preguntas, genera el documento ARCHITECTURE_MAP.md.

--- INICIO DE ENTREVISTA ---

BLOQUE 1 — CONTEXTO DE NEGOCIO (5 min)

P1. ¿Para qué usa tu equipo esta herramienta en el día a día?
    (Entender el uso real, no el uso ideal)

P2. ¿Qué tipo de información vive aquí que no vive en ningún otro lado?

P3. Si un agente tuviera que responder UNA pregunta usando esta herramienta,
    ¿cuál sería la más valiosa para el equipo?

BLOQUE 2 — ESTRUCTURA DE DATOS (10 min)

P4. ¿Cuáles son los objetos o entidades principales de esta herramienta?
    (Ejemplo: en un CRM → deals, contactos, empresas)

P5. ¿Cómo se organizan jerárquicamente?
    ¿Qué contiene a qué? Dibújame el árbol si puedes.

P6. ¿Cuál es la unidad mínima de información que necesito consultar?
    ¿Qué campos tiene esa unidad que son críticos?

P7. ¿Hay campos que parecen lo mismo pero significan cosas distintas?
    (Ejemplo: "fecha de cierre estimada" vs "fecha de cierre real")

BLOQUE 3 — PROTOCOLO TÉCNICO (10 min)

P8. ¿Cómo se accede a los datos técnicamente?
    (API REST, GraphQL, MCP, SDK, exportación, base de datos directa)

P9. ¿Qué credenciales o permisos necesito para consultar?
    ¿Hay diferencia entre leer y escribir?

P10. ¿Hay endpoints o métodos específicos para los datos que necesito?
     Dame el nombre exacto o la ruta si la conoces.

P11. ¿Cuántos registros devuelve una consulta por defecto?
     ¿Hay paginación? ¿Cuál es el límite máximo por página?

P12. ¿Qué filtros son obligatorios para no traer todo de golpe?
     ¿Qué pasa si no los pongo?

P13. ¿Los timestamps o fechas vienen en algún formato especial?
     (Unix ms, ISO 8601, UTC, zona horaria específica)

BLOQUE 4 — TRAMPAS Y EXCLUSIONES (5 min)

P14. ¿Qué datos NO debo consultar nunca? ¿Por qué?
     (Registros de prueba, archivados, plantillas, datos sensibles)

P15. ¿Hubo algún error que alguien cometió antes consultando esta herramienta?
     ¿Qué pasó?

P16. ¿Hay datos que cambian de significado según el contexto?
     (Ejemplo: un campo que en un equipo significa X y en otro significa Y)

P17. ¿Qué consulta tarda demasiado o puede generar timeout?

--- FIN DE ENTREVISTA ---

Con todas las respuestas anteriores, genera el documento ARCHITECTURE_MAP.md
con esta estructura:

# ARCHITECTURE_MAP — [HERRAMIENTA]
Fecha: [fecha de la entrevista]
Experto entrevistado: [nombre y rol]
Objetivo del agente: [para qué se va a usar]

## Jerarquía de objetos
[árbol de objetos con relaciones]

## Objetos en scope
| Objeto | Descripción | Campos críticos | Consultar |
|--------|-------------|-----------------|-----------|

## Objetos fuera de scope
| Objeto | Razón de exclusión |
|--------|--------------------|

## Protocolo de acceso
- Método: [API / MCP / SQL / otro]
- Autenticación: [tipo y permisos necesarios]
- Endpoints clave: [lista]
- Paginación: [límite por página · cómo iterar]
- Filtros obligatorios: [lista]

## Formato de fechas y datos especiales
[cómo interpretar timestamps, zonas horarias, formatos]

## Trampas identificadas
[lista numerada con: trampa · cómo evitarla]

## Preguntas sin respuesta
[lo que el experto no supo responder — requiere validación técnica]
```

---

## Output esperado

Un `ARCHITECTURE_MAP.md` que cualquier tech puede leer en 5 minutos y saber
exactamente cómo construir el agente — sin necesitar otra reunión.

---

## Ejemplo de output — fragmento

**Herramienta:** Fathom (ejemplo ilustrativo — no es documentación real de la API)
**Objetivo:** Agente que genera minuta y tareas derivadas de reuniones de seguimiento

```
## Protocolo de acceso
- Método: MCP nativo (Fathom expone sus datos via MCP, no via REST tradicional)
- Autenticación: API Key por workspace
- Herramientas MCP clave:
    list_meetings          → lista de reuniones
    get_meeting_details    → detalle + transcripción
    get_meeting_summary    → resumen generado por Fathom
- Paginación: máx 50 registros por página · iterar con cursor
- Filtros obligatorios: date_from · date_to (sin ellos devuelve todo el historial)

## Formato de fechas
- Timestamps en Unix segundos (no milisegundos)
- Zona horaria: UTC — convertir a zona local para mostrar al usuario

## Trampas identificadas
1. Las reuniones internas sin participantes externos aparecen mezcladas
   con reuniones de cliente → filtrar por campo participant_type = "external"
2. Las transcripciones de reuniones < 5 min están vacías aunque el objeto existe
   → validar que transcript_length > 0 antes de procesar
```

---

## Tips de uso

- **Envía las preguntas antes de la reunión** — el experto llega con respuestas,
  no improvisando
- **Graba la sesión** — hay detalles técnicos que se pierden tomando notas
- **Las preguntas 14-17 son las más valiosas** — el experto siempre sabe dónde
  están las trampas pero nadie se las pregunta
- **"No sé" es una respuesta válida** — documéntalo en "Preguntas sin respuesta"
  para validar después

---

## Conexión con otros prompts del kit

```
ARQ-02 (este)  →  DIS-01 Definidor de objetivo    (alternativa a ARQ-01 cuando no hay acceso directo)
ARQ-02 (este)  →  DIS-02 Diccionario de datos
ARQ-02 (este)  →  DIS-03 Reglas anti-alucinación
ARQ-02 (este)  →  WRT-01 Esqueleto de prompt

NOTA: ARQ-02 es una alternativa a ARQ-01, no un paso posterior.
  Si tienes acceso directo a la herramienta → usar ARQ-01.
  Si no tienes acceso directo → usar ARQ-02 (este).
  Ambos producen ARCHITECTURE_MAP.md y alimentan los mismos bloques DIS/WRT.
```

---

*ARQ-02 · kit-construccion-agentes v1.0 · Junio 2026*
