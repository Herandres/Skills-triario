# Evaluador de Calidad

> Agente que determina si un skill (prompt + output) tiene calidad suficiente para entrar al repositorio oficial de agentes de una organización. Evalúa con un score de 30 puntos y emite un veredicto de aprobación o rechazo con razones.

---

## El problema que resuelve

A medida que los equipos construyen más agentes, aparece el problema de la calidad inconsistente: algunos prompts producen outputs usables, otros producen texto genérico que requiere reescritura completa. Sin un estándar de evaluación, la decisión de "¿esto está listo para producción?" dependía del criterio individual de quien lo construyó — sesgado por definición.

## Quién lo usa

Responsables de repositorios de IA y líderes técnicos que aprueban o rechazan agentes antes de que el equipo los adopte en producción.

## Qué produce

- Score numérico sobre 30 puntos con desglose por dimensión
- Veredicto: APROBADO / APROBADO CON OBSERVACIONES / RECHAZADO
- Lista de ajustes requeridos si el veredicto no es aprobación directa
- Benchmarking contra el estándar de la organización (no contra un estándar genérico)

## Por qué este diseño

El agente solicita el contexto de la organización antes de evaluar cualquier cosa. Una evaluación sin ese contexto produce un veredicto genérico que no sirve para decidir si el skill representa bien a la organización. Esta restricción intencional es lo que diferencia una evaluación útil de una revisión superficial.

## Stack

`Claude.ai` · Skill pura · Sin MCPs requeridos
