# Diagnóstico de Visibilidad IA
**Kit de Construcción de Agentes**
**Versión:** 1.3 · Junio 2026
**Responsable:** Hernán
**Estado:** Aprobado · Listo para producción ✅
**Aprobado por:** Carolina Ruiz · Junio 2026

---

## ¿Qué hace esta skill?

Responde la pregunta real del cliente: **"¿Me están encontrando los LLMs?
¿Ese tráfico convierte? ¿Qué debo hacer?"**

Tiene dos variantes según el momento del cliente:

**Cliente sin dashboard activo (Modos A / B / C) — entrega 5 outputs:**
1. KPIs definidos y medidos (con datos reales o benchmarks etiquetados)
2. Configuración exacta del canal AI Referral en GA4
3. Arquitectura del dashboard en Looker Studio
4. Diagnóstico estratégico de visibilidad IA con 3 acciones prioritarias
5. Reporte HTML standalone listo para abrir en el browser y compartir al cliente

**Cliente con dashboard ya activo (Modo D) — entrega 2 outputs:**
- Insights estratégicos desde los datos reales del dashboard (GA4 Property ID + GSC Property ID)
- Reporte HTML listo para llevar a la reunión con el cliente

---

## Por qué existe esta skill

El tráfico desde herramientas de IA (ChatGPT, Perplexity, Claude, Gemini, Copilot)
no aparece correctamente en GA4 por defecto — llega clasificado como tráfico
directo o referral sin identificar. El cliente no sabe si los LLMs lo están
citando ni si ese tráfico convierte.

Esta skill tiene dos funciones según el contexto:

**Para clientes nuevos:** configura la medición, diagnostica la visibilidad actual
y entrega un reporte con datos reales o benchmarks — el mismo día, sin esperar
a que el dashboard de Looker Studio esté listo.

**Para clientes con dashboard activo:** lee los datos reales del dashboard (GA4 Property ID)
y convierte los números en insights estratégicos listos para reunión, sin reconfigurar
ni duplicar nada. El analista da los dos IDs y recibe el diagnóstico en minutos.

---

## Los 4 modos de ejecución

| Modo | Cuándo usarlo | Datos que usa | Outputs |
|---|---|---|---|
| **A · Setup completo** | Cliente nuevo sin dashboard activo | Benchmarks del sector | 5 outputs completos |
| **B · Add-on AI Referral** | Cliente existente, solo agregar canal IA | Benchmarks o datos del cliente | 5 outputs completos |
| **C · Análisis con datos** | Datos GA4 disponibles | MCP GA4 directo o CSV pegado | 5 outputs completos |
| **D · Dashboard existente** | GA4 + Looker Studio ya configurados | GA4 Property ID + GSC Property ID | Solo Output 4 + Output 5 |

**El Modo D es el más rápido:** el analista da los dos IDs, el agente conecta directamente,
lee los datos del dashboard activo y genera un diagnóstico con insights listos para reunión.
No crea ni configura nada — solo lee e interpreta.

---

## Cuándo usarla

**Usar cuando:**
- El cliente pregunta si ChatGPT o Perplexity lo están mandando visitas
- Se necesita el primer reporte antes de que Looker Studio esté configurado
- Se va a presentar el servicio y se necesita algo concreto para mostrar
- El cliente tiene GA4 pero no tiene el canal AI Referral activo
- **El equipo quiere insights del dashboard existente para llevar a una reunión (Modo D)**
- **El analista tiene el GA4 Property ID y GSC Property ID y quiere un diagnóstico inmediato (Modo D)**

**No usar para:**
- Generar el reporte mensual recurrente con datos actualizados (usar el dashboard directamente)
- Obtener datos de Looker Studio por ID — Looker Studio no tiene API, los datos viven en GA4

---

## Prerequisitos

| Input | Descripción | Si no está disponible |
|---|---|---|
| **1. Cliente + dominio** | Nombre y URL | Bloqueante — sin esto no corre |
| **2. Servicios** | SEO / Web / Ambos | La skill pregunta antes de continuar |
| **3. Modo** | A / B / C / D | Por defecto: Modo A |
| **4. GA4 Property ID** | ID numérico de la propiedad GA4 | Modo D bloqueante — sin ID no puede conectar |
| **5. GSC Property ID** | URL del sitio en Search Console | Opcional en Modo D — mejora los insights |
| **6. Datos GA4** | MCP activo / CSV pegado / sin datos | Sin datos → benchmarks del sector (solo Modos A/B/C) |
| **7. KPIs del cliente** | Objetivos del negocio | Usa KPIs base del servicio |
| **8. Clarity** | Sí / No | Omite métricas de comportamiento si No |
| **9. Industria** | Para benchmarks correctos | Aplica B2B genérico si no se da |

**El único input bloqueante es el #1 (cliente + dominio).**
**En Modo D, el GA4 Property ID también es bloqueante.**

**Modo D — input mínimo:**
```
Cliente: [nombre]
Modo: D
GA4 Property ID: [número]
GSC Property ID: [URL del sitio]
[opcional] Contexto: [objetivos del mes, novedades del cliente, foco de la reunión]
```

---

## Cómo obtiene los datos (en orden de prioridad)

**Modos A / B / C:**
```
1. MCP GA4 activo
   └── La skill consulta GA4 directamente — sin intervención del analista
   └── Si MCP GSC también activo: trae posición promedio y CTR automáticamente

2. CSV pegado en el chat
   └── Analista exporta desde GA4: Informes → Adquisición → Canales → CSV
   └── Lo pega en el mensaje junto con el nombre del cliente
   └── La skill lo lee y extrae los datos

3. Sin datos disponibles
   └── La skill aplica benchmarks del sector etiquetados como "Estimado"
   └── El diagnóstico es válido como línea base para la primera reunión
```

**Modo D — ruta directa:**
```
GA4 Property ID + GSC Property ID
   └── La skill conecta directamente a la propiedad activa del cliente
   └── Lee canales de los últimos 30 días desde la fuente real
   └── No requiere CSV ni exportación manual
   └── Sin Property ID: bloqueante — el agente detiene y lo solicita
```

---

## Los outputs por modo

### Output 1 · KPIs del cliente · _Modos A / B / C_
Tabla con valor actual (real o estimado), fuente y estado.
Diferencia explícita entre dato verificado y benchmark sector.

### Output 2 · Configuración GA4 · _Modos A / B / C_
Checklist con estado por ítem:
- Canal AI Referral: 8 reglas de agrupación + fecha de activación
- 3 eventos GTM para medir calidad de sesión IA
- Encuesta post-conversión para corregir sesgo de atribución

### Output 3 · Estructura Looker Studio · _Modos A / B / C_
4 vistas con métricas, fuentes y audiencia.
Fuentes de datos listas para conectar.

### Output 4 · Diagnóstico de Visibilidad IA · _Todos los modos_
3 bloques estratégicos:
- **Estado actual:** cuánto tráfico IA llega y de qué calidad
- **Diagnóstico:** qué significa para la estrategia del cliente
- **3 acciones:** qué hacer, quién, qué impacto esperar y en qué plazo

En **Modo D** este output se titula "Insights de Visibilidad" y responde 3 preguntas
con los datos reales del dashboard: calidad del tráfico IA, qué funciona en el mix
de canales, y qué hacer en los próximos 30 días.

### Output 5 · Reporte HTML standalone · _Todos los modos_
HTML completo con paleta de la marca, apto para abrir en browser y compartir.
Badge verde "Datos verificados GA4" si los datos son reales.
Badge amarillo "Estimado" si son benchmarks del sector.

---

## Cómo maneja los datos faltantes

| Situación | Qué hace la skill |
|---|---|
| MCP GA4 activo | Consulta automáticamente — sin CSV, sin pasos manuales |
| CSV pegado | Procesa los datos del reporte de canales |
| Sin datos GA4 | Benchmarks del sector etiquetados + badge "Estimado" en HTML |
| GA4 existe sin canal AI Referral | Estima tráfico IA oculto en Directo (Directo × 8%) |
| Sin acceso GTM | Registra eventos como pendientes, no bloquea el diagnóstico |
| Sin URL de conversión | Encuesta queda pendiente, resto del output completo |
| **Modo D sin GA4 Property ID** | **Bloqueante — detiene y solicita el ID. No hay fallback.** |

---

## Conectores

| Conector | Para qué | Estado |
|---|---|---|
| MCP GA4 (GCP) | Tráfico real por canal, calidad de sesión, conversiones | Por conectar |
| MCP GSC (GCP) | Posiciones, CTR e impresiones en Google | Por conectar |
| MCP DataForSEO | Keywords rankeados, AI Overviews, Featured Snippets, competidores | Disponible si conectado |
| MCP Playwright | Configurar canal AI Referral en GA4 UI | Disponible |
| MCP ClickUp | Registrar el setup como tarea completada | Disponible |
| GTM API | Crear los 3 eventos automáticamente | Por conectar |

**Combinación óptima:** GA4 + GSC + DataForSEO juntos.
- GA4 responde: ¿cuánto tráfico IA llega y convierte?
- GSC responde: ¿en qué posición aparece el cliente en Google?
- DataForSEO responde: ¿el cliente aparece en AI Overviews? ¿qué hacen los competidores?

Sin MCP GA4: el analista exporta el CSV desde Looker Studio en 2 minutos y lo pega en el chat.
Sin ningún MCP: la skill corre con benchmarks del sector.

---

## Cómo invocarla

1. Abre una conversación nueva en Claude.ai
2. Copia el prompt de `diagnostico-visibilidad-ia_skill_prompt.md` como primer mensaje
3. En el siguiente mensaje escribe:

**Modos A / B / C — setup o análisis:**
```
Cliente: [nombre] · [dominio]
Servicio: [SEO / Web / Ambos]
Industria: [industria del cliente]

[Si tienes datos: pegar el CSV de GA4 aquí]
[Si no tienes datos: escribir "sin datos GA4 aún"]
```

**Modo D — dashboard existente (el más directo):**
```
Cliente: [nombre] · [dominio]
Modo: D
GA4 Property ID: [número]
GSC Property ID: [URL del sitio, ej: sc-domain:cliente.com]
Contexto: [reunión de seguimiento / foco del mes / novedades]
```

4. Recibe los outputs en una sola respuesta
   - Modos A/B/C: 5 outputs completos
   - Modo D: Output 4 (Insights estratégicos) + Output 5 (HTML para reunión)
5. El Output 5 (HTML) aparece como Artifact — abrir en browser o descargar

**Tiempo desde abrir Claude.ai hasta tener el HTML:**
- Modo D con MCP GA4: 2–4 minutos
- Modos A/B/C con CSV: 5–8 minutos
- Modos A/B/C sin datos: 3–5 minutos

---

## Versiones

| Versión | Cambio principal |
|---|---|
| v1.0 | Lanzamiento inicial — Modos A/B/C |
| v1.1 | Modo D: dashboard existente por GA4 Property ID |
| v1.2 | Mejoras de diagnóstico y GSC integrado |
| v1.3 (actual) | Output 5 reestructurado — 7 secciones · Paleta alineada (#EF2222 + Gabarito) · Regla de insights por sección · Direct×0.08 restringido a Bloque B · KPI table solo AI Referral + GSC · Output 2 y 3 excluidos del HTML cliente · **Aprobado por Carolina Ruiz · Junio 2026** |

---

*Diagnóstico de Visibilidad IA · Kit de Construcción de Agentes · Junio 2026*
