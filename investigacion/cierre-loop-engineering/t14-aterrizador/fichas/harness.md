# Arnés del agente (agent harness)

- **Inglés:** agent harness / harness engineering · **Español:** arnés del agente / ingeniería del arnés · **Pronunciación aproximada:** «éichent járnes».
- **Semilla interna:** sí (el equipo lo menciona y todavía no sabe aplicarlo).

## Qué es, en una frase
Todo lo que rodea al modelo para que trabaje como agente: el bucle de ejecución, las herramientas, el manejo del contexto, los permisos, los hooks, la memoria en disco y las pruebas que lo mantienen en su carril.

## Por qué está validado
**Nivel: consenso** (documentación oficial de dos laboratorios).

- **Anthropic, Claude Agent SDK:** el SDK da «the same tools, agent loop, and context management that power Claude Code», con hooks, subagentes, permisos, sesiones y skills; y describe Managed Agents como «A hosted agent harness that runs the agent loop». [Fuente primaria] [code.claude.com, Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview)
- **Anthropic, Effective harnesses for long-running agents (26 nov 2025):** agente inicializador, archivo de progreso, lista de funcionalidades en JSON donde el agente solo cambia `passes` y no puede editar las pruebas. [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) (leído por T01, `t01-tesis/tesis.md`, sección 2.5, rama `claude/cierre-le-t01-tesis`).
- **OpenAI, Harness engineering (Ryan Lopopolo, 11 feb 2026):** experimento interno de cinco meses en que agentes Codex construyeron un producto sin código escrito a mano; el repositorio llegó al orden de un millón de líneas. Es a la vez documentación oficial y caso publicado. [Visto solo en buscador] [openai.com](https://openai.com/index/harness-engineering/), [InfoQ](https://www.infoq.com/news/2026/02/openai-harness-engineering-codex)

## Dónde estamos
**Se habla.** El contexto del proyecto dice que el equipo menciona el harness y todavía no sabe aplicarlo. Al mismo tiempo, el contexto dice que los repos de los cuatro equipos tienen CLAUDE.md, skills, agentes y algún hook: son piezas de un harness. Lo que no consta es que se diseñen y revisen como un harness. Qué verifican esos hooks: no sé, preguntar a Hernán (T15 tampoco lo encontró: ficha A7 de `t15-patrones/patrones.md`, rama `claude/cierre-le-t15-patrones`).

## Cómo se vería en nuestro loop [Hipótesis]
Un archivo por repo que diga qué es el harness de ese megaagente: qué carga al arrancar (CLAUDE.md, skills), qué herramientas tiene cada agente, qué hooks bloquean (por ejemplo, impedir que el generador escriba el archivo del contrato del auditor, como en T15 A2), dónde queda la bitácora y cuál es la prueba de punta a punta que corre al abrir sesión, como en el harness de larga duración de Anthropic.

## Primer paso pequeño (una semana)
En un solo repo, escribir `HARNESS.md` de una página que liste lo que ya existe (CLAUDE.md, skills, agentes, hooks) y, por cada hook, qué evento escucha y qué bloquea. Si un hook no se sabe qué hace, se anota «sin documentar». Sin código nuevo.

## Qué necesita y qué riesgo tiene
- **Necesita:** acceso de lectura al repo y una hora de quien lo mantiene.
- **Riesgo:** confundir «tener piezas» con «tener harness». El inventario puede mostrar hooks que nadie entiende; eso es un hallazgo, no un fracaso.
