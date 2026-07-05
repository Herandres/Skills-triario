# Auditoría de Entregables

> Agente de QA para contenido digital que evalúa 26 criterios en 3 capas y emite un veredicto con plan de corrección.

---

## El problema que resuelve

Los equipos de contenido digital producían entregables que pasaban la revisión humana pero fallaban en criterios técnicos SEO y en los criterios que determinan si un LLM los cita. Sin un estándar sistemático, cada analista revisaba con criterios distintos — el resultado era inconsistente y dependía de quién hacía la revisión.

## Quién lo usa

Analistas de contenido y SEO antes de enviar un entregable al cliente o publicarlo.

## Qué produce

Un veredicto estructurado sobre el entregable con tres capas de evaluación:

| Capa | Pregunta |
|---|---|
| **1 · Calidad general** | ¿Está bien hecho? Ortografía, formato, consistencia, evidencias |
| **2 · SEO tradicional** | ¿Está optimizado para que Google lo encuentre? |
| **3 · Citabilidad LLM** | ¿Está estructurado para que ChatGPT, Claude o Perplexity lo citen? |

La capa 3 es el diferenciador: responde al cambio de paradigma de SEO orientado a clicks hacia SEO orientado a citaciones por IA.

## Por qué este diseño

La mayoría de los checklists de QA cubren solo las capas 1 y 2. La capa 3 no existe en ninguna herramienta estándar del mercado porque la citabilidad por LLMs es un criterio emergente. Incluirla en el mismo flujo de revisión obliga a que el equipo la adopte sin fricción adicional.

## Stack

`Claude.ai` · Skill pura · Sin MCPs requeridos
