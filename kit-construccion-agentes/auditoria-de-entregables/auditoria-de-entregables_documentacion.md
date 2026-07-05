# Documentación Skill QA
**Kit de Construcción de Agentes**
**Servicio:** SEO y Contenido Digital
**Versión:** 1.5 · Junio 2026
**Responsable:** Hernán / Valen

---

## ¿Qué hace?

Revisa un entregable del equipo de contenido antes de enviarlo al cliente.
Evalúa 26 criterios organizados en 3 capas y emite un veredicto con plan de corrección.

El problema que resuelve: el equipo producía contenido que pasaba la revisión humana pero fallaba en criterios técnicos SEO y en los criterios que determinan si un LLM lo cita o no. Sin este skill no había un estándar sistemático — cada analista revisaba con criterios distintos.

Las 3 capas responden preguntas distintas:

| Capa | Pregunta |
|---|---|
| **1 · Calidad general** | ¿Este entregable está bien hecho? |
| **2 · SEO tradicional** | ¿Está optimizado para que Google lo encuentre? |
| **3 · Citabilidad LLM** | ¿Está estructurado para que ChatGPT, Claude o Perplexity lo citen? |

La Capa 3 es la diferenciadora — ninguna agencia SEO tradicional hace QA de citabilidad LLM. Responde al nuevo modelo del equipo: de clicks a citaciones.

### Los 26 criterios

#### Capa 1 · Calidad general (9 criterios)

| # | Criterio | Parámetro |
|---|---|---|
| 1 | Alcance | Cubre todos los elementos comprometidos |
| 2 | Ortografía | 0 errores |
| 3 | Formato | Máx 4 oraciones y 80 palabras por párrafo |
| 4 | Consistencia | Mismo dato no aparece con valores distintos |
| 5 | Sin inventados | Cada afirmación factual tiene fuente + año |
| 6 | Enlaces | URLs completas, sin anchors sin destino |
| 7 | Evidencias | Cada recomendación tiene dato / referencia / captura |
| 8 | Recomendaciones | Acción + responsable + plazo (N/A si no hay sección) |
| 9 | Tono | Sin coloquial, sin primera persona, sin sujeto ambiguo |

#### Capa 2 · SEO tradicional (9 criterios)

Los parámetros varían según el tipo de contenido:

| Criterio | Artículo | Landing Page | Guía |
|---|---|---|---|
| H2 mínimo | 3 | 1 | 2 |
| Longitud mínima | 800 palabras | 350 palabras | 600 palabras |
| Densidad keyword | 1–2% | 0.5–1.5% | 1–2% |
| Criterio 20 FAQ | Evalúa | N/A automático | Evalúa si existe |

| # | Criterio | Parámetro técnico |
|---|---|---|
| 10 | H1 | Exactamente 1, contiene keyword principal |
| 11 | H2/H3 | Mínimo según tipo, jerarquía lógica |
| 12 | Meta title | 50–60 caracteres, keyword al inicio |
| 13 | Meta description | 150–160 caracteres, palabra de acción |
| 14 | Keyword | En H1, primer párrafo y ≥2 H2 (artículo/guía) o ≥1 H2 (landing page) |
| 15 | Densidad | Rango según tipo de contenido |
| 16 | Longitud | Mínimo según tipo de contenido |
| 17 | Enlaces internos | Mínimo 2 con anchor text descriptivo |
| 18 | Alt text | Presente en imágenes con keyword (N/A si no hay imágenes) |

#### Capa 3 · Citabilidad LLM (8 criterios)

| # | Criterio | Parámetro |
|---|---|---|
| 19 | Respuesta directa | ≥2 párrafos que responden en sus primeras 2 líneas |
| 20 | Formato FAQ | Respuestas de 40–80 palabras (N/A en landing page) |
| 21 | Definiciones | ≥1 definición con "X es..." o "X se define como..." |
| 22 | Fuentes | Cada estadística tiene fuente nombrada + año |
| 23 | Entidad clara | Cliente/marca aparece ≥3 veces con precisión |
| 24 | Listas | Pasos en formato numerado, no en párrafo |
| 25 | E-E-A-T | ≥2 de 3 condiciones: autor+cargo / experiencia con dato / tercero validante |
| 26 | Originalidad | Dato propio / comparación de fuentes / cliente como sujeto activo |

---

## ¿Para qué?

El entregable del skill es un reporte con cuatro secciones en orden fijo:

```
## VEREDICTO FINAL
Estado: APROBADO / APROBADO CON OBSERVACIONES / RECHAZADO
Criterios evaluados: N/26 | Cumplidos: N | Observaciones: N | Fallidos: N | N/A: N

## RESUMEN EJECUTIVO
[3 líneas máximo con las correcciones más urgentes]

## DETALLE POR CAPA
[Tabla con 26 filas: criterio, estado, valor medido, hallazgo, corrección requerida]

## PLAN DE CORRECCIÓN
[Solo los ❌, ordenados por impacto]
```

**Regla de veredicto:**
- `APROBADO` → 0 criterios con ❌
- `APROBADO CON OBSERVACIONES` → 1 o más criterios con ⚠️ y 0 con ❌
- `RECHAZADO` → cualquier criterio con ❌

El reporte es accionable: el Plan de Corrección dice exactamente qué corregir y en qué orden, sin que el analista tenga que interpretar.

### Cuándo usarlo

- Antes de enviar cualquier entregable al cliente (artículo, landing page, guía)
- Cuando el entregable fue generado con IA y necesita validación de calidad y citabilidad
- Como checklist de revisión en el proceso de aprobación interna

No usar para:
- Entregables internos sin destino público (notas de reunión, actas, reportes de gestión)
- Fragmentos de contenido menores a 300 palabras

---

## ¿Qué usa?

### Prompt
El skill corre en Claude.ai con el prompt de `QA-01_skill_prompt.md` como Project Instructions.
No requiere MCP de terceros para funcionar con texto pegado o imagen.

### Inputs aceptados (v1.5)

| Formato | Cómo lo procesa |
|---|---|
| Texto pegado | Procesa directamente |
| URL pública | Llama WebFetch para obtener el contenido |
| Imagen / screenshot | Análisis visual; LONGITUD y DENSIDAD se marcan como "(estimado visual)"; META TITLE y META DESC → N/A si no son visibles |

Si la URL está bloqueada (anti-bot, preview con autenticación): el agente detiene y pide que se pegue el contenido directamente.

### Inputs requeridos

| Input | Descripción | Si no está disponible |
|---|---|---|
| **1. Entregable** | Texto / URL / imagen del contenido a auditar | Sin él no hay nada que auditar |
| **2. Alcance acordado** | Qué se comprometió entregar al cliente | El skill se detiene y lo solicita — bloqueante |
| **3. Keyword principal** | La keyword objetivo del contenido | Sin ella los criterios SEO son N/A |
| **4. Formato** | Google Doc con estilos / HTML / texto plano | Afecta cómo se evalúan H1/H2/meta tags |
| **5. Completo o parcial** | ¿Es el documento final o una sección? | Afecta el criterio de densidad de keyword |
| **6. Tipo de contenido** | artículo / landing page / guía | Sin él asume artículo por defecto |

### Conexión con otros procesos del equipo

```
Producción de contenido (redacción / generación con IA)
        │
        ▼
QA-01 · Auditoría de Entregables  ← este skill
        │
        ├── APROBADO → Enviar al cliente
        └── RECHAZADO → Corregir según Plan de Corrección → volver a QA-01
```

---

## Flujo de creación del prompt

### El problema de diseño

El equipo de contenido no tenía un estándar de revisión. Cada analista definía "calidad" de forma distinta. El objetivo fue construir un criterio compartido que cualquier miembro del equipo pudiera aplicar con consistencia, incluyendo los criterios de citabilidad LLM que no existen en frameworks SEO tradicionales.

### Decisiones de diseño

**3 capas, no una lista plana.** Las capas permiten localizar rápido el tipo de problema: calidad básica vs. SEO vs. LLM. Un entregable puede pasar Capa 1 y fallar Capa 3 — el analista sabe que el problema es de estructura, no de redacción.

**26 criterios fijos.** El número es intencional: suficientes para ser exhaustivo, pocos para que el agente no pierda el hilo. La meta-instrucción interna verifica que siempre sumen 26 (sin omisiones ni conteos dobles).

**Parámetros por tipo de contenido.** Artículo, landing page y guía tienen mínimos distintos para longitud, densidad y H2. Un único parámetro universal penalizaría landing pages cortas por diseño.

**Regla E-E-A-T: mínimo 2 de 3.** Versión 1.0 fallaba cuando solo exigía 1 condición — el agente marcaba ⚠️ cuando debía marcar ❌. Se corrigió en v1.1: si no se cumplen al menos 2 de las 3 condiciones (autor+cargo, experiencia con dato, tercero validante), el criterio falla.

**Soporte multi-formato (v1.5).** La versión original asumía texto pegado. En producción los analistas entregan URLs o screenshots. El bloque PREPARACIÓN DEL ENTREGABLE define explícitamente qué herramienta usar para cada formato antes de arrancar la auditoría.

### Versiones

| Versión | Cambio principal |
|---|---|
| v1.0 | Prompt base: 26 criterios, 3 capas, veredicto y plan de corrección |
| v1.1 | Corrección E-E-A-T: exige mínimo 2 de 3 condiciones para aprobar |
| v1.4 | Parámetros adaptativos por tipo de contenido (artículo / landing page / guía) |
| v1.5 | Soporte multi-formato: texto / URL / imagen + bloque PREPARACIÓN DEL ENTREGABLE |

### Validación de producción

Validado el 01/06/2026 con entregable sintético de 870 palabras (artículo SEO B2B).

| Métrica | Resultado |
|---|---|
| Fallas plantadas detectadas | 7 / 7 |
| Veredictos exactos | 6 / 7 |
| Alucinaciones (falsos positivos) | 0 |
| Regresiones en criterios que debían pasar | 0 |

La única discrepancia fue C25 E-E-A-T (⚠️ vs ❌ esperado) — corregida en v1.1.

---

*Documentación Skill QA · kit-construccion-agentes v1.5 · Junio 2026*
