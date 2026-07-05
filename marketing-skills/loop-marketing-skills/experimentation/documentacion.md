# Documentación — Experimentación y Velocidad de Aprendizaje · `/experimentation`
## Loop Marketing · [Company] · v2.0 · Junio 2026

---

## Qué hace

Cubre el ciclo completo de experimentación del servicio Loop Marketing: desde generar hipótesis en el planning hasta actualizar el backlog al cerrar el sprint. Cada modo corresponde a un momento operativo específico del sprint. Reemplaza `/ab-testing` — cuya orientación era metodología de A/B testing — con un marco de velocidad de aprendizaje: el activo que acumula [Company] sprint a sprint en cada cliente.

---

## IDs del inventario que cubre

| ID | Proceso | Fase | Prioridad | Modo de la skill |
|---|---|---|---|---|
| MKT-019 | Generación de hipótesis Loop | Express | Media | Hipótesis |
| MKT-020 | Priorización de hipótesis con ICE | Express | Alta | Priorización ICE |
| MKT-025 | Estimación de baseline y meta del sprint | Express | Alta | Baseline |
| MKT-047 | Optimización de pauta mid-sprint | Amplify | Alta | Optimización táctica |
| MKT-049 | Análisis causa-raíz de resultados | Evolve | Alta | Causa-raíz |
| MKT-052 | Evaluación de resultados vs hipótesis | Evolve | Alta | Evaluación |
| MKT-054 | Actualización del backlog de tests | Evolve | Alta | Backlog |

---

## Modos disponibles

| Modo | Cuándo activarlo | Responsable | Momento del sprint |
|---|---|---|---|
| **Hipótesis** | Planning — generar hipótesis candidatas | Estratega ejecutivo | Inicio |
| **Priorización ICE** | Planning — elegir 1 hipótesis para el sprint | Estratega ejecutivo | Inicio |
| **Baseline** | Antes de lanzar — registrar métricas base y meta | Estratega ejecutivo | Pre-lanzamiento |
| **Optimización táctica** | Durante el sprint — ajuste operativo sin test formal | SEM/Growth operator | Mid-sprint |
| **Causa-raíz** | Cuando los resultados no son los esperados | Estratega ejecutivo | Mid o cierre |
| **Evaluación** | Cierre del sprint — validar o descartar la hipótesis | Estratega ejecutivo | Cierre |
| **Backlog** | Cierre del sprint — hipótesis derivadas para el siguiente | Estratega ejecutivo | Cierre |

---

## Cómo activar

```
/experimentation necesito hipótesis para el sprint [N] de [cliente]
/experimentation priorización ICE — hipótesis del backlog adjuntas
/experimentation baseline para el sprint [N] de [cliente] — hipótesis aprobada adjunta
/experimentation optimización táctica — CPL subió 35% estos 3 días, datos adjuntos
/experimentation causa-raíz — el sprint cerró con 40% menos leads que la meta
/experimentation evaluación sprint [N] de [cliente] — resultados adjuntos
/experimentation backlog sprint [N] — actualizar hipótesis para el sprint [N+1]
```

---

## Diferencia clave: táctica vs formal

| Tipo | Cuándo usar | Tiempo de respuesta | Quién decide |
|---|---|---|---|
| **Optimización táctica** | Señal clara en datos parciales (CPL, CTR, frecuencia fuera de umbral) | Inmediato | SEM/Growth operator — dentro de umbrales |
| **A/B test formal** | Validar un ángulo nuevo con rigor estadístico | 1–2 sprints | Estratega ejecutivo — HITL |

---

## Inputs requeridos por modo

| Modo | Input clave | Fuente |
|---|---|---|
| Hipótesis | Datos del CRM, campañas anteriores, pipeline de ClickUp | HubSpot + plataformas + `/analytics` |
| Priorización ICE | Hipótesis candidatas del Modo anterior | Modo Hipótesis |
| Baseline | Métricas actuales del cliente por plataforma | HubSpot + plataformas de pauta |
| Optimización táctica | Export de performance de los últimos 3–7 días | Plataformas de pauta |
| Causa-raíz | Resultados del sprint + datos del embudo en HubSpot | HubSpot + plataformas |
| Evaluación | Resultados del sprint vs baseline registrado | Modo Baseline + plataformas |
| Backlog | Veredicto del Modo Evaluación + hipótesis pendientes | Modo Evaluación |

---

## Outputs por modo

| Modo | Output |
|---|---|
| Hipótesis | 3–5 hipótesis en formato Si → entonces → porque con fuente e ICE preliminar |
| Priorización ICE | Tabla ICE + hipótesis seleccionada con justificación |
| Baseline | Métricas base + meta + muestra estimada antes del lanzamiento |
| Optimización táctica | Checklist completado + registro de ajuste para ClickUp |
| Causa-raíz | Tabla de dimensiones + punto de quiebre identificado + acción recomendada |
| Evaluación | Veredicto documentado: validada / ajustada / descartada + patrón reutilizable |
| Backlog | Hipótesis priorizadas con ICE para el siguiente sprint |

---

## Umbrales de decisión táctica — referencia rápida (MKT-047)

| Señal | Umbral | Acción |
|---|---|---|
| CPL | >30% sobre objetivo por ≥3 días | Pausar ad set o creativo de menor rendimiento |
| CTR Google Search | <1% | Revisar copy o match types |
| CTR Meta/LinkedIn | <0.5% | Pausar creativo, rotar ángulo |
| Frecuencia Meta | >4 en 7 días | Ampliar audiencia o rotar creativos |
| CVR landing cae | >25% vs sprint anterior | Escalar al Estratega ejecutivo |

---

## Regla HITL

Las decisiones de validar, escalar o descartar una hipótesis siempre requieren aprobación del **Estratega ejecutivo** antes de implementarse. El modo de Optimización táctica es el único que el SEM/Growth operator puede ejecutar solo — dentro de los umbrales definidos en la tabla anterior.

---

## Skills relacionadas

| Skill | Cuándo | Dirección |
|---|---|---|
| `/analytics` | Tracking del experimento + monitoreo durante el sprint | Paralelo |
| `/marketing-ideas` | Hipótesis de ideación creativa → input del Modo Hipótesis | Prerrequisito |
| `/campaign-assets` | Ángulo seleccionado + activos → contexto del Baseline | Prerrequisito |
| `/launch` | Brief del sprint → Baseline y Modo táctico | Prerrequisito |
| `/reporting` | Evolve one-pager después de la Evaluación | Posterior |

---

## Versión y cambios

| Versión | Fecha | Cambio |
|---|---|---|
| v1.0 | Mayo 2026 | Versión inicial `/ab-testing` — Hipótesis, ICE, Baseline, Evaluación, Backlog, Causa-raíz (MKT-019/020/025/049/052/054) |
| v1.1 | Junio 2026 | MKT-047 agregado — Modo táctico mid-sprint: criterios táctica vs formal, checklist 5 bloques, umbrales de decisión, tabla de estrategias de puja, reglas de escalamiento |
| v2.0 | Junio 2026 | Renombrado a `/experimentation` · Reencuadre estratégico: velocidad de aprendizaje como activo acumulable · Formulario de entrada · AEO/LLM como tipo de experimento válido · Mensajes de cierre por modo · Modos explícitos con output estructurado |
