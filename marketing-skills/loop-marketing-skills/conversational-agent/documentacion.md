# Documentación — Agente Conversacional · `/conversational-agent`
## Loop Marketing · [Company] · v1.0 · Julio 2026

---

## Qué hace

Diseña, valida y mejora el agente conversacional que el cliente despliega en sus activos digitales dentro del servicio Loop Marketing. No configura un FAQ animado — construye un primer filtro comercial que califica la intención del visitante, lo orienta según su perfil y lo transfiere al equipo comercial cuando corresponde. Sprint a sprint, calibra los criterios de calificación contra resultados reales del CRM: el agente del mes 3 es más preciso que el del mes 1 porque aprende con datos, no con intuición.

Cubre el ciclo completo del agente conversacional: desde el setup inicial hasta el entrenamiento mensual recurrente.

---

## IDs del inventario que cubre

| ID | Proceso | Fase | Prioridad | Modo de la skill |
|---|---|---|---|---|
| MKT-034 | Configuración de agente conversacional | Tailor | Alta | Configurar |
| MKT-044 | Activación de agente en activo clave | Amplify | Media | Activar |
| MKT-045 | Prueba de prompts del agente | Amplify | Media | Probar |
| MKT-050 | Análisis de performance del agente | Evolve | Media | Analizar |
| MKT-051 | Optimización de prompts del agente | Evolve | Media | Optimizar |
| MKT-066 | Entrenamiento y actualización de agentes | Operación mensual | Baja | Entrenar |

### Cobertura vs. descripción del inventario

| ID | Descripción del inventario | Cubierto | Dónde en el prompt |
|---|---|---|---|
| MKT-034 | Diseñar prompts, FAQs, criterios de calificación, handoff y acciones del agente en LP, blog o página crítica | ✅ | Pilar 1 (FAQs), Pilar 2 (criterios), Pilar 3 (rutas + handoff) · campo "activo" en el formulario |
| MKT-044 | Encender agente en LP, blog, pricing, demo o página crítica con prompts, handoff y medición | ✅ | Checklist Activar: conocimiento subido, handoff configurado, propiedades HubSpot, baseline registrado |
| MKT-045 | Validar respuestas, tono, captación de datos, objeciones, rutas y handoff a workflow comercial | ✅ | 7 escenarios: E1 (rutas+handoff), E2 (captación email), E6 (objeciones), E7 (tono) |
| MKT-050 | Medir interacciones, temas preguntados, leads capturados, handoff, fallas de respuesta y oportunidades de entrenamiento | ✅ | Métricas clave, Top 5 preguntas, Lagunas detectadas, Recomendación |
| MKT-051 | Ajustar preguntas, respuestas, objeciones, tono, handoff y condiciones de ruteo según datos reales | ✅ | Calibración de señales con CRM, Actualización knowledge, Ajuste de Tono, Actualización de Rutas |
| MKT-066 | Actualizar base de conocimiento, prompts, FAQs, restricciones, rutas y respuestas de agentes entregados al cliente | ✅ | Informe Entrenar: Knowledge/FAQs, Prompts, Restricciones, Criterios, Rutas — cada uno como ítem explícito |

---

## Modos disponibles

| Modo | Cuándo activarlo | Responsable | Momento del servicio |
|---|---|---|---|
| **Configurar** | Antes del primer lanzamiento — o reconfiguración completa | Estratega ejecutivo + Implementación | Setup inicial |
| **Activar** | Después de aprobar la configuración — antes del sprint | Implementación: Lina / Pame | Pre-lanzamiento |
| **Probar** | Después de activar — antes de recibir tráfico real | Estratega ejecutivo + Implementación | Pre-lanzamiento |
| **Analizar** | A mitad o al cierre de cada sprint | Implementación: Pame / Lina | Mid o cierre sprint |
| **Optimizar** | Al cierre del sprint — con datos del CRM disponibles | Estratega ejecutivo | Cierre sprint |
| **Entrenar** | Una vez al mes — con datos acumulados del período | Estratega ejecutivo + Implementación | Mensual |

---

## Cómo activar

```
/conversational-agent configurar para [cliente] — ICP y servicios adjuntos
/conversational-agent activar [nombre del agente] en [activo] para [cliente]
/conversational-agent probar [nombre del agente] de [cliente]
/conversational-agent analizar performance sprint [N] de [cliente]
/conversational-agent optimizar agente de [cliente] sprint [N] — datos CRM adjuntos
/conversational-agent entrenar [nombre del agente] de [cliente] — [mes]
```

---

## Inputs requeridos por modo

### Configurar
| Input | Quién lo provee |
|---|---|
| Síntesis del cliente (negocio, propuesta de valor, ICP) | `/customer-research` |
| Servicios / productos con beneficio por segmento | Estratega ejecutivo |
| Criterio de lead caliente aprobado por el equipo | Estratega ejecutivo — HITL |
| Proceso de atención del cliente (cómo se agenda, qué sigue) | Estratega de implementación |
| Límites del agente (qué no debe responder) | Estratega ejecutivo |

### Activar
| Input | Quién lo provee |
|---|---|
| Configuración aprobada (3 pilares completos) | Modo Configurar |
| Activo de destino (LP, sitio, blog, pricing) | `/launch` |
| Workflows de HubSpot configurados (nurturing + alerta) | Estratega de implementación |

### Probar
| Input | Quién lo provee |
|---|---|
| Agente activo en producción o sandbox | Modo Activar |
| Criterios de calificación aprobados | Modo Configurar |
| Perfil del ICP para simular conversaciones | `/customer-research` |

### Analizar
| Input | Quién lo provee |
|---|---|
| Transcripts de conversaciones del sprint | HubSpot — vía MCP |
| Métricas de captura y transferencia | HubSpot — vía MCP |
| Preguntas sin respuesta (handoff por incapacidad) | HubSpot — vía MCP |

### Optimizar
| Input | Quién lo provee |
|---|---|
| Análisis de performance del sprint | Modo Analizar |
| Leads calificados como calientes: avance en pipeline + cierres | HubSpot CRM — vía MCP |
| Aprobación de cambios antes de subir | Estratega ejecutivo — HITL |

### Entrenar
| Input | Quién lo provee |
|---|---|
| Sprint patches de todos los sprints del mes | Modo Optimizar |
| Métricas comparativas mes anterior vs. mes actual | HubSpot — vía MCP |

---

## Outputs por modo

| Modo | Output | Quién lo usa |
|---|---|---|
| Configurar | Knowledge document curado (3 pilares) listo para subir | Implementación → plataforma del agente |
| Activar | Checklist de activación completado con verificación técnica | Implementación + Estratega ejecutivo |
| Probar | Reporte de 6 escenarios con diagnóstico y veredicto | Estratega ejecutivo → decisión go/no-go |
| Analizar | Métricas de performance + lagunas detectadas + recomendaciones | Input para modo Optimizar |
| Optimizar | Sprint patch listo para subir + señales calibradas con CRM | Implementación → actualización en producción |
| Entrenar | Informe mensual de evolución + estado del agente (Verde/Amarillo/Rojo) | Estratega ejecutivo + `/reporting` |

---

## Reglas críticas

**El agente califica — no solo captura.** Capturar email es el mínimo viable. El objetivo es que el agente distinga un lead caliente de uno frío antes de hacer cualquier acción. Un agente que transfiere todo es inútil. Un agente que no transfiere nada es un formulario con personalidad.

**El knowledge document es curado, no volcado.** El agente no recibe el sitio web completo ni el HubSpot en crudo. Recibe una síntesis procesada de máximo lo que necesita para responder con precisión y calificar con criterio. Más conocimiento no es mejor agente — es un agente más lento y menos preciso.

**Los criterios de calificación los aprueba el Estratega ejecutivo.** Ningún criterio entra en producción sin validación humana. El agente puede sugerir señales nuevas basándose en datos — pero la decisión de usarlas la toma el estratega.

**La optimización se calibra con el CRM, no con intuición.** El diferencial de esta skill es que los criterios de calificación se ajustan contra cierres reales, no contra lo que el equipo cree que funciona. Sin datos del CRM, el modo Optimizar produce mejoras parciales.

**HITL antes de cualquier actualización en producción.** Ningún sprint patch se sube al agente sin revisión del Estratega ejecutivo. El agente habla en nombre del cliente — un error en producción daña la percepción del servicio.

---

## Qué diferencia cada modo

| Dimensión | Configurar | Activar | Probar | Analizar | Optimizar | Entrenar |
|---|---|---|---|---|---|---|
| Fuente de datos | Brief del cliente + ICP | Configuración aprobada | Conversaciones simuladas | Transcripts reales HubSpot | Transcripts + CRM pipeline | Acumulado del mes |
| Pregunta que responde | ¿Qué debe saber y hacer el agente? | ¿Está bien desplegado técnicamente? | ¿Responde bien en los casos críticos? | ¿Qué está pasando en conversaciones reales? | ¿Qué señales predijeron conversión real? | ¿El agente mejora sprint a sprint? |
| Duración típica | 2–3 h | 1–2 h | 1–2 h | 1–2 h | 1–2 h | 30–60 min |
| Momento de impacto | Antes del primer lead | Antes del primer tráfico | Antes del primer tráfico real | Mid-sprint o cierre | Al cierre de cada sprint | Al cierre de cada mes |
| Riesgo si se omite | El agente no califica — solo captura email | El agente sale roto o sin medición | El agente tiene errores en producción | La optimización opera sin datos reales | Los criterios no evolucionan con la realidad | El agente se queda estático sin aprendizaje acumulado |

---

## El ciclo completo por sprint

```
SETUP (una vez)
Configurar → Activar → Probar → Producción

CICLO POR SPRINT (cada 10 días)
Mid-sprint: Analizar (con datos parciales)
Cierre: Analizar (completo) → Optimizar → Sprint patch subido

CICLO MENSUAL
Entrenar (con todos los sprints del mes) → Informe de evolución
```

---

## Skills relacionadas

| Skill | Cuándo | Dirección |
|---|---|---|
| `/customer-research` | ICP + señales de intención → input del modo Configurar | Prerrequisito |
| `/launch` | Brief del sprint → activo donde vive el agente + contexto del lanzamiento | Prerrequisito |
| `/analytics` | Métricas de conversación → input del modo Analizar | Prerrequisito |
| `/experimentation` | El agente puede ser el activo a testear en una hipótesis Loop | Paralelo |
| `/reporting` | Performance del agente → Evolve one-pager + reporte mensual | Posterior |

---

## Horas liberadas por cliente

| Proceso | Sin skill | Con skill | Ahorro |
|---|---|---|---|
| MKT-034 Configurar | 5–10 h | 2.5–5 h | ~50% |
| MKT-044 Activar | 3–6 h | 1.5–3 h | ~50% |
| MKT-045 Probar | 2–4 h | 1–2 h | ~50% |
| MKT-050 Analizar | 2–4 h | 0.8–1.6 h | ~60% |
| MKT-051 Optimizar | 2–3 h | 0.8–1.2 h | ~60% |
| MKT-066 Entrenar | 3–6 h/mes | 1.5–3 h/mes | ~50% |
| **Total setup** | **10–20 h** | **5–10 h** | **~50%** |
| **Total mensual** | **3–6 h/mes** | **1.5–3 h/mes** | **~50%** |

---

## Versión y cambios

| Versión | Fecha | Cambio |
|---|---|---|
| v1.0 | Julio 2026 | Skill nueva — cubre 6 IDs del inventario Loop Marketing (MKT-034, 044, 045, 050, 051, 066) · 6 modos: Configurar, Activar, Probar, Analizar, Optimizar, Entrenar · Concepto combinado: calificación activa (Idea B) + aprendizaje sprint a sprint (Idea A) · Calibración de señales contra cierres reales del CRM · Knowledge document curado como capa de síntesis entre HubSpot MCP y el agente · HITL explícito en Configurar, Probar y Optimizar |
