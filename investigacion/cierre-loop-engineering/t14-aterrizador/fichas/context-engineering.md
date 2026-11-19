# Ingeniería de contexto (context engineering)

- **Inglés:** context engineering · **Español:** ingeniería de contexto · **Pronunciación aproximada:** «cóntekst enyiníring».

## Qué es, en una frase
Decidir qué información entra en la ventana de contexto del agente en cada paso, en qué orden y qué se saca o se resume, porque el contexto es un recurso limitado que afecta calidad, costo y latencia.

## Por qué está validado
**Nivel: consenso** (documentación oficial de un laboratorio, más un caso de producción independiente).

- **Anthropic, Effective context engineering for AI agents (29 sep 2025):** define técnicas como compaction (compactación) y structured note-taking, «a technique where the agent regularly writes notes persisted to memory outside of the context window». [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) (abierto por T15, `t15-patrones/patrones.md`, fichas B3 y C2).
- **Claude Code, costos:** recomienda pasar instrucciones especializadas de CLAUDE.md a skills porque las skills «load on-demand only when invoked», y mantener CLAUDE.md por debajo de 200 líneas. [Fuente primaria] [code.claude.com, costs](https://code.claude.com/docs/en/costs)
- **Caso en producción:** Manus, «Context Engineering for AI Agents: Lessons from Building Manus» (Yichao Ji, 18 jul 2025): la tasa de aciertos del KV-cache como métrica principal de un agente en producción, prefijos estables y contexto que solo se agrega. [Visto solo en buscador] [manus.im](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)

## Dónde estamos
**A medias.** Según el contexto: los repos de los cuatro equipos tienen CLAUDE.md y skills, y el loop de 30 días tiene bitácora; T15 identifica esa bitácora como structured note-taking (ficha B3). Son técnicas de ingeniería de contexto en uso. Si el equipo las diseña con ese nombre, mide el tamaño de su contexto o decide qué va en CLAUDE.md frente a una skill: no sé, preguntar a Hernán.

## Cómo se vería en nuestro loop [Hipótesis]
El auditor ciego ya es ingeniería de contexto deliberada: recibe solo la salida y el contrato. Llevar esa misma disciplina al generador: qué lee al arrancar (CLAUDE.md corto), qué carga solo cuando lo necesita (skills) y qué resume entre vueltas (la nota de rechazo del auditor en vez de toda la conversación).

## Primer paso pequeño (una semana)
En un repo, correr `/context` al abrir una sesión del megaagente, anotar cuántos tokens ocupa lo que se carga de entrada y cuántas líneas tiene el CLAUDE.md. Si pasa de 200 líneas, mover una sección de flujo específico a una skill y medir de nuevo.

## Qué necesita y qué riesgo tiene
- **Necesita:** acceso a una sesión del megaagente y una hora.
- **Riesgo:** mover instrucciones a una skill que luego no se invoca; el agente pierde una regla que antes siempre veía. Verificar con una corrida real tras el cambio.
