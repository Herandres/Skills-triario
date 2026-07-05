# Diagnóstico de Visibilidad IA

> Skill que responde la pregunta real del cliente digital: "¿Me están encontrando los LLMs? ¿Ese tráfico convierte? ¿Qué debo hacer?"

---

## El problema que resuelve

El tráfico desde herramientas de IA (ChatGPT, Perplexity, Claude, Gemini, Copilot) no aparece correctamente en Google Analytics 4 por defecto — llega clasificado como tráfico directo o referral sin identificar. Los clientes no saben si los LLMs los están citando ni si ese tráfico convierte. El diagnóstico manual requiere configurar canales personalizados en GA4, cruzar datos de Google Search Console y producir un informe — trabajo de horas sin una herramienta especializada.

## Quién lo usa

Estrategas de marketing digital y consultores SEO que necesitan presentar a sus clientes el estado de su visibilidad en motores de IA y un plan de acción.

## Qué produce

Opera en dos variantes según el momento del cliente:

**Cliente sin dashboard activo (Modos A / B / C):**
1. KPIs de visibilidad IA definidos y medidos
2. Configuración exacta del canal AI Referral en GA4
3. Arquitectura del dashboard en Looker Studio
4. Diagnóstico estratégico con 3 acciones prioritarias
5. Reporte HTML standalone listo para compartir al cliente

**Cliente con dashboard ya activo (Modo D):**
- Insights estratégicos desde los datos reales del dashboard
- Reporte HTML listo para llevar a la reunión

## Por qué este diseño

La separación en 4 modos responde a una realidad práctica: el nivel de madurez analítica varía por cliente. Un cliente sin GA4 configurado necesita primero la arquitectura de medición; uno con datos activos necesita interpretación. Un solo prompt que intente cubrir ambos casos produce outputs demasiado genéricos para cualquiera de los dos.

## Recursos incluidos

- `diagnostico-visibilidad-ia_skill_prompt.md` — prompt completo del agente
- `flujo-interactivo.html` — diagrama de decisión entre los 4 modos
- `demo.html` — ejemplo de reporte de salida con datos de muestra

## Stack

`Claude.ai` · Datos de Google Analytics 4 · Google Search Console · Versión 1.2
