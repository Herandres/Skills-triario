# Presupuesto de tokens y costo (token budget and cost management)

- **Inglés:** token budget / cost management · **Español:** presupuesto de tokens y control de costo · **Pronunciación aproximada:** «tóuken báyet».

## Qué es, en una frase
Medir cuántos tokens y cuánto dinero gasta cada loop por corrida y ponerle un tope, porque los agentes multiplican el consumo frente a una conversación normal.

## Por qué está validado
**Nivel: consenso** (documentación oficial de un laboratorio, con caso de producción publicado y un caso independiente).

- **Claude Code, Manage costs effectively:** en despliegues empresariales, el promedio es de unos 13 USD por desarrollador por día activo; recomienda empezar con un piloto pequeño para establecer una línea base; ofrece límites de gasto por workspace y exportación por OpenTelemetry; dice que los equipos de agentes usan «approximately 7x more tokens than standard sessions» cuando los compañeros corren en plan mode. [Fuente primaria] [code.claude.com, costs](https://code.claude.com/docs/en/costs)
- **Caso en producción:** Anthropic, sistema de investigación multiagente: «multi-agent systems use about 15× more tokens than chats» y, en su evaluación, «token usage by itself explains 80% of the variance» del desempeño. [Fuente primaria] [anthropic.com](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Caso independiente:** Manus trata la tasa de aciertos del KV-cache como la métrica más importante de un agente en producción porque afecta latencia y costo. [Visto solo en buscador] [manus.im](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)

## Dónde estamos
**No sé: preguntar a Hernán.** El contexto del proyecto no menciona cuánto cuesta una corrida ni si hay topes. El tope de 3 vueltas limita el gasto por salida, pero el contexto lo presenta como regla de calidad, no de costo.

## Cómo se vería en nuestro loop [Hipótesis]
Cada corrida registra sus tokens (entrada, salida, caché) junto a la traza. El tope de 3 vueltas se lee también como presupuesto: el costo máximo de una salida es más o menos tres veces el de una vuelta más el auditor. Los loops que corren solos (el de 30 días) tienen un límite de gasto propio.

## Primer paso pequeño (una semana)
Correr el loop de contenido cinco veces con `/usage` abierto y anotar en una tabla los tokens y el costo estimado de cada corrida y de cada vuelta. Con eso, calcular el costo de una salida aprobada y el de una que termina en «sin recomendación defendible».

## Qué necesita y qué riesgo tiene
- **Necesita:** acceso a `/usage` o al reporte de gasto de la organización.
- **Riesgo:** recortar tokens a costa de calidad (por ejemplo, quitar el auditor). La cifra sirve para decidir, no para recortar a ciegas. Además, `/usage` da estimaciones a precio de lista, no la factura.
