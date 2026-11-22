# Evaluaciones automáticas de agentes (agent evals)

- **Inglés:** agent evals · **Español:** evaluaciones automáticas de agentes · **Pronunciación aproximada:** «éichent ivals».

## Qué es, en una frase
Un conjunto fijo de tareas con su lógica de calificación que se corre contra el agente cada vez que cambia algo (modelo, prompt, skill o contrato) para saber si mejoró o se dañó.

## Por qué está validado
**Nivel: consenso** (documentación oficial de un laboratorio, con casos de producción).

- **Anthropic, Demystifying evals for AI agents (9 ene 2026):** define un eval como «a test for an AI system»; combina tres tipos de calificadores (graders): de código, de modelo y humanos; los humanos calibran a los otros dos. Separa evals de capacidad (empiezan con tasa baja) de evals de regresión (deben pasar casi al 100 %). Recomienda empezar con «20-50 simple tasks drawn from real failures» y leer las transcripciones para saber si los calificadores funcionan. [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- **Casos publicados en el mismo texto:** Descript pasó de calificación manual a calificadores LLM con calibración humana periódica; Bolt armó su sistema de evals en unos tres meses para un agente ya en uso. [Fuente primaria] (mismo enlace)
- **Anthropic, sistema de investigación multiagente (13 jun 2025):** empezaron con unas 20 consultas de uso real y un juez LLM con nota de 0,0 a 1,0 y aprobado o rechazado; la evaluación humana sigue siendo necesaria. [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/multi-agent-research-system)
- Refuerzo de estándares: ISO/IEC 42001 incluye un control de verificación y validación del sistema (A.6.2.4, según resúmenes) [Visto solo en buscador] [SureCloud](https://www.surecloud.com/resource-hub/iso-42001-annex-a-controls).

## Dónde estamos
**A medias.** Según el contexto, cada salida pasa por un auditor ciego con contrato fijo: eso es un calificador de modelo por salida. Lo que el contexto no menciona es un conjunto fijo de casos contra el que se mida al auditor o al loop cuando algo cambia. Si existe: no sé, preguntar a Hernán. T01 (Idea 4 de `t01-tesis/ideas-ingenieria-datos.md`) y T13 (`t13-explorador/diario.md`) proponen ese «set dorado» y la calibración del auditor; ninguno dice que se haya hecho.

## Cómo se vería en nuestro loop [Hipótesis]
Una carpeta `evals/` por loop con 20 casos ya juzgados por una persona (aprobado o rechazado y por qué), sacados de corridas reales, incluidos los que terminaron en «sin recomendación defendible». Antes de cambiar el contrato del auditor o el modelo, se corre el auditor contra esos casos y se mide cuántos coincide con la persona. Así el contrato se cambia entre ciclos con evidencia.

## Primer paso pequeño (una semana)
Para el loop de contenido, juntar 20 salidas pasadas con el veredicto del auditor y pedirle a la persona que publica que marque las mismas 20 como aprobada o rechazada. Contar coincidencias y anotar la cifra en la bitácora del loop.

## Qué necesita y qué riesgo tiene
- **Necesita:** acceso a salidas históricas y unas dos horas de la persona que publica.
- **Riesgo:** un conjunto pequeño da una cifra frágil; y si la persona y el auditor leen el mismo contrato con sesgos parecidos, la coincidencia alta no prueba calidad. Se presenta como punto de partida, no como métrica de éxito.
