# Documentación — Comunicación Ejecutiva del Servicio · `/reporting`
## Loop Marketing · [Company] · v1.0 · Junio 2026

---

## Qué hace

Transforma el trabajo del sprint en comunicación ejecutiva que genera confianza, acelera decisiones y le permite al cliente defender el valor del servicio internamente. Opera en tres momentos del servicio: al iniciar (GTM Deck), al cerrar cada sprint (Evolve One-Pager) y al cerrar cada mes (Reporte mensual). Reemplaza `sales-enablement.md` — cuya orientación era collateral comercial genérico — con tres modos de comunicación estratégica propios del servicio Loop Marketing.

---

## IDs del inventario que cubre

| ID | Proceso | Fase | Prioridad | Modo de la skill |
|---|---|---|---|---|
| MKT-009 | Presentación de estrategia GTM al cliente | AI Discovery | Alta | GTM Deck |
| MKT-053 | Construcción del Evolve one-pager | Evolve | Alta | Evolve One-Pager |
| MKT-067 | Reporte ejecutivo mensual | Operación mensual | Alta | Reporte mensual |

---

## Modos disponibles

| Modo | Cuándo activarlo | Responsable | Momento del servicio |
|---|---|---|---|
| **GTM Deck** | Cierre de AI Discovery — antes del primer sprint | Estratega ejecutivo | Semana 1-2 |
| **Evolve One-Pager** | Cierre de cada sprint — con resultados reales disponibles | Estratega ejecutivo | Cada 10 días |
| **Reporte mensual** | Cierre de cada mes — con one-pagers del período disponibles | Estratega ejecutivo | Mensual |

---

## Cómo activar

```
/reporting gtm deck para [cliente] — síntesis e ICP adjuntos
/reporting evolve one-pager sprint [N] de [cliente] — resultados adjuntos
/reporting reporte mensual [mes] de [cliente] — one-pagers adjuntos
/reporting preparar el deck de arranque para [cliente]
/reporting cierre del sprint [N] de [cliente]
```

---

## Inputs requeridos por modo

### GTM Deck
| Input | Quién lo provee |
|---|---|
| Síntesis del cliente aprobada | `/customer-research` |
| ICP + whitespace + mapa competitivo | `/customer-research` |
| Hipótesis del primer sprint | `/marketing-ideas` |
| OKR del trimestre | `/marketing-plan` |
| Restricciones (presupuesto / canales activos) | Estratega ejecutivo |

### Evolve One-Pager
| Input | Quién lo provee |
|---|---|
| Hipótesis del sprint (Si→entonces→porque) | `/launch` |
| Resultados reales vs. meta comprometida | `/analytics` |
| Aprendizaje del equipo | Estratega ejecutivo |
| Decisión (continuar / pivotar / descartar) | Estratega ejecutivo — HITL |
| Hipótesis recomendada para el próximo sprint | `/marketing-ideas` |

### Reporte mensual
| Input | Quién lo provee |
|---|---|
| Evolve one-pagers del período | Modo anterior de esta skill |
| Métricas del mes (acumuladas) | `/analytics` |
| Decisiones tomadas durante el mes | Estratega ejecutivo |
| Sprints planificados para el próximo mes | `/marketing-ideas` |

---

## Outputs por modo

| Modo | Output | Extensión máxima |
|---|---|---|
| GTM Deck | Estructura de 8 láminas con titular + idea central por lámina, lista para construir en PPT/Slides/Canva | 8 láminas |
| Evolve One-Pager | Documento de decisión: hipótesis · resultado · aprendizaje · decisión · próximo sprint | 2 láminas |
| Reporte mensual | Resumen ejecutivo + sprints del mes + impacto + decisiones + próximos lanzamientos | 1 página |

---

## Reglas críticas

**El cliente que entiende el método retiene.** La función de estos documentos no es mostrar que el equipo trabajó — es mostrar que el equipo aprendió. La diferencia determina si el cliente renueva o no.

**Breve y ejecutivo siempre.** El Evolve one-pager cabe en 2 láminas. El reporte mensual cabe en 1 página. Si no cabe, el resumen es demasiado largo — no el límite.

**Sin métricas de vanidad sin contexto.** Impressions o clicks sin la conexión a un resultado de negocio no van en el reporte. Solo métricas que el CMO o CEO puede usar para tomar una decisión.

**HITL antes de enviar.** El agente produce el contenido. El Estratega ejecutivo revisa, personaliza y aprueba antes de que llegue al cliente. Ningún entregable sale sin esta validación.

**La decisión del Evolve la toma el cliente.** El one-pager facilita la decisión — no la toma. El campo "Decisión" lleva corchetes vacíos para que el estratega y el cliente los completen juntos.

---

## Qué diferencia cada modo

| Dimensión | GTM Deck | Evolve One-Pager | Reporte mensual |
|---|---|---|---|
| Audiencia | Equipo directivo del cliente | Equipo de marketing del cliente | CMO / CEO / quien aprueba presupuesto |
| Pregunta que responde | ¿Por qué esta estrategia? | ¿Qué pasó y qué hacemos? | ¿Está funcionando? ¿Lo seguimos? |
| Tono | Estratégico + confianza | Analítico + transparente | Ejecutivo + accionable |
| Momento de impacto | Kickoff | Reunión de sprint review | Reunión mensual de dirección |
| Métrica de valor | Días hasta el primer lanzamiento | Claridad de la decisión de siguiente sprint | Cliente puede defender la inversión sin apoyo |

---

## Skills relacionadas

| Skill | Cuándo | Dirección |
|---|---|---|
| `/customer-research` | ICP + whitespace → input del GTM Deck | Prerrequisito |
| `/marketing-plan` | OKR del trimestre → marco de medición | Prerrequisito |
| `/marketing-ideas` | Hipótesis del backlog → GTM Deck + reporte mensual | Prerrequisito |
| `/launch` | Brief del sprint → contexto del Evolve one-pager | Prerrequisito |
| `/analytics` | Métricas reales → Evolve + reporte mensual | Prerrequisito |

---

## Versión y cambios

| Versión | Fecha | Cambio |
|---|---|---|
| v1.0 | Junio 2026 | Skill nueva — reemplaza `sales-enablement.md` (collateral comercial genérico) · 3 modos de comunicación ejecutiva propios del servicio: GTM Deck (MKT-009) · Evolve One-Pager (MKT-053) · Reporte mensual (MKT-067) · Formulario de entrada por modo · HITL explícito · Outputs acotados (8 láminas / 2 láminas / 1 página) |
