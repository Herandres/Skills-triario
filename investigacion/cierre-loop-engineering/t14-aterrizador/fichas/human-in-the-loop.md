# Persona en el circuito (human-in-the-loop)

- **Inglés:** human-in-the-loop / human oversight · **Español:** persona en el circuito / supervisión humana · **Pronunciación aproximada:** «jiúman in de lup».

## Qué es, en una frase
Diseñar puntos fijos donde una persona aprueba, corrige o detiene lo que hace el agente, sobre todo antes de acciones que no se pueden deshacer.

## Por qué está validado
**Nivel: consenso** (una ley, un marco de riesgo y documentación oficial de dos laboratorios).

- **Reglamento europeo de IA (Reglamento (UE) 2024/1689), artículo 14:** los sistemas de alto riesgo deben poder ser supervisados de forma efectiva por personas mientras están en uso, y quien supervisa debe estar al tanto del sesgo de automatización (confiar de más en la salida). [Visto solo en buscador] [AI Act Service Desk, artículo 14](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14), [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1689#art_14)
- **Anthropic, Building effective agents:** «Agents can then pause for human feedback at checkpoints or when encountering blockers». [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/building-effective-agents) (citado por T15, ficha E1).
- **OpenAI Agents SDK:** «Human in the loop: Built-in mechanisms for involving humans across agent runs». [Fuente primaria] [github.com/openai/openai-agents-python](https://github.com/openai/openai-agents-python)
- **Caso en producción:** Anthropic, sistema de investigación multiagente: «Human evaluation catches what automation misses». [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/multi-agent-research-system)

## Dónde estamos
**Aplicado.** Según el contexto, el loop de contenido para en «listo para publicar» y publica una persona. T15 lo usa como ejemplo de su ficha E1 (`t15-patrones/patrones.md`, rama `claude/cierre-le-t15-patrones`).

## Cómo se vería en nuestro loop [Hipótesis]
Ya existe en el loop de contenido. Lo que falta es nombrarlo como regla en los otros loops: qué acciones de cada megaagente son irreversibles (enviar, publicar, cambiar datos de un cliente) y dónde está la persona en cada una.

## Primer paso pequeño (una semana)
Escribir en el CLAUDE.md del repo del loop de contenido una sección de cinco líneas «Puerta humana»: qué estado marca el fin del loop, quién publica y qué no puede hacer el agente (publicar). Así la práctica queda escrita y otro equipo la puede copiar.

## Qué necesita y qué riesgo tiene
- **Necesita:** confirmar con la persona que publica cómo lo hace hoy.
- **Riesgo:** sesgo de automatización: que la persona apruebe sin leer porque el auditor ya aprobó. Conviene que la puerta pida al menos una acción explícita (marcar algo revisado), no solo un clic.
