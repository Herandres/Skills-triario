# ARQ-01 · Mapeador de Arquitectura
**Kit de Construcción de Agentes**
**Bloque:** ARQ — Arquitectura  
**Versión:** 1.0 · Junio 2026

---

## ¿Qué hace este prompt?

Genera un mapa estructurado de cualquier fuente de datos antes de construir un agente.
Convierte el caos de "no sé qué hay aquí" en un documento de referencia que cualquier agente puede usar como base.

---

## Cuándo usarlo

- Al inicio de cualquier proyecto de agente — antes de escribir el prompt
- Cuando la fuente de datos es desconocida o poco documentada
- Cuando el agente anterior falló por consultar en el lugar equivocado

---

## Prerequisito

Tener acceso a la herramienta o a alguien que la conozca.
Si no tienes acceso directo → usar **ARQ-02 (Entrevista al experto)** primero.

---

## El prompt

```
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

Con las respuestas que yo te dé, genera un documento llamado 
ARCHITECTURE_MAP.md con esta estructura:

---
HERRAMIENTA: [nombre]
FECHA DE VALIDACIÓN: [fecha]
VERSIÓN: 1.0
OBJETIVO DEL AGENTE: [para qué se va a usar]

JERARQUÍA DE OBJETOS:
[diagrama de árbol con los objetos y sus relaciones]

OBJETOS EN SCOPE:
[tabla con: nombre · ID si aplica · tipo · si se consulta · por qué]

OBJETOS FUERA DE SCOPE:
[tabla con: nombre · razón de exclusión]

PROTOCOLO DE ACCESO:
[cómo consultar · orden · límites · paginación]

DICCIONARIO DE CAMPOS CRÍTICOS:
[campos más importantes con su significado real en el negocio]

TRAMPAS IDENTIFICADAS:
[lista de datos que contaminan · cómo evitarlos]

CRITERIO DE VALIDEZ:
[cómo saber que un dato es confiable]
---

Empieza preguntándome el nombre de la herramienta y el objetivo del agente.
Luego haz las preguntas de a una — espera mi respuesta antes de continuar.
```

---

## Output esperado

Al final del proceso obtienes un archivo `ARCHITECTURE_MAP.md` listo para:
- Ser referenciado en el prompt del agente
- Ser compartido con el equipo
- Ser actualizado cuando la herramienta cambia
- Servir de base para DIS-02 y WRT-01

---

## Ejemplo de uso

**Input del usuario:**
```
Herramienta: HubSpot
Objetivo: Agente que identifica deals en riesgo de cierre este mes
```

**Fragmento del output esperado:**
```
HERRAMIENTA: HubSpot CRM
OBJETIVO: Identificar deals con alta probabilidad de no cerrarse en el mes activo

JERARQUÍA DE OBJETOS:
  Workspace
  └── Pipeline
      └── Deal (unidad principal)
          ├── Contacto asociado
          ├── Empresa asociada
          └── Actividades (emails, llamadas, reuniones)

OBJETOS EN SCOPE:
  Deal     · ID único  · Registro comercial   · ✅ Consultar · Contiene stage y close_date
  Pipeline · ID único  · Contenedor de deals  · ✅ Consultar · Necesario para filtrar por etapa

OBJETOS FUERA DE SCOPE:
  Deals archivados  · Contaminan el pipeline activo
  Deals de prueba   · Tienen empresa = "Test" — distorsionan métricas

TRAMPAS IDENTIFICADAS:
  1. Deals sin close_date → aparecen como "activos" pero nunca cierran
  2. Stage "Proposal Sent" hace 60+ días → parece activo pero está muerto
```

---

## Tips de uso

- **Sé específico con el objetivo del agente** desde el inicio — cambia qué objetos son relevantes
- **No saltes el Bloque 3** — las trampas son lo que más tiempo toma descubrir a prueba y error
- **Valida el mapa con datos reales** — haz al menos 3 consultas de prueba antes de darlo por bueno
- **Actualiza el mapa si la herramienta cambia** — un mapa desactualizado es peor que no tener mapa

---

## Conexión con otros prompts del kit

```
ARQ-01 (este)  →  DIS-01 Definidor de objetivo
ARQ-01 (este)  →  DIS-02 Diccionario de datos
ARQ-01 (este)  →  DIS-03 Reglas anti-alucinación
ARQ-01 (este)  →  WRT-01 Esqueleto de prompt
```

El `ARCHITECTURE_MAP.md` que produce este prompt es el insumo principal para construir el agente.

---

*ARQ-01 · kit-construccion-agentes v1.0 · Junio 2026*
