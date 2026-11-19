# Gobernanza de IA (AI governance)

- **Inglés:** AI governance · **Español:** gobernanza de IA · **Pronunciación aproximada:** «éi-ai gávernans».
- **Semilla interna:** sí (el equipo la menciona y todavía no sabe aplicarla).

## Qué es, en una frase
El conjunto de roles, políticas, inventarios y controles con que una organización decide qué sistemas de IA usa, quién responde por cada uno y cómo vigila sus riesgos durante todo su ciclo de vida.

## Por qué está validado
**Nivel: consenso.** Lo recogen tres organismos o estándares y un laboratorio lo certificó.

- **NIST AI RMF 1.0 (NIST AI 100-1):** cuatro funciones (Govern, Map, Measure, Manage); Govern es transversal a las demás y, según los resúmenes, tiene seis categorías y 19 subcategorías. [Visto solo en buscador] [resumen Modulos de la función Govern](https://docs.modulos.ai/frameworks/nist-ai-rmf/govern), [Securiti](https://securiti.ai/nist-ai-risk-management-framework). El texto oficial de NIST no abrió.
- **NIST AI 600-1 (perfil de IA generativa, julio de 2024):** acciones sugeridas con prefijos GV, MP, MS y MG; los resúmenes citan un inventario de sistemas (GV-1.6) que registra, entre otros campos, quién ejerce la supervisión humana. [Visto solo en buscador] [PDF oficial](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) (no abrió: `ENOTFOUND`), [resumen Anaconda](https://www.anaconda.com/blog/nist-ai-600-1-generative-ai-profile-guide). El número exacto de la acción debe verificarse en el PDF.
- **ISO/IEC 42001:2023:** sistema de gestión de IA; requisitos en las cláusulas 4 a 10 y un Anexo A con 38 controles de referencia (A.2 a A.10), que la organización elige en una declaración de aplicabilidad. [Visto solo en buscador] [SureCloud](https://www.surecloud.com/resource-hub/iso-42001-annex-a-controls), [CertPro](https://certpro.com/hub/iso-42001/controls/iso-42001-controls-list/). El estándar es de pago; no se leyó.
- **Caso publicado:** Anthropic anunció el 13 de enero de 2025 su certificación ISO/IEC 42001:2023, emitida por Schellman. [Visto solo en buscador] [anthropic.com/news](https://www.anthropic.com/news/anthropic-achieves-iso-42001-certification-for-responsible-ai)

## Dónde estamos
**Se habla.** El contexto del proyecto dice que el equipo menciona la gobernanza de IA y todavía no sabe aplicarla. T15 la deja con aplicación interna baja (`t15-patrones/patrones.md`, ficha B2, rama `claude/cierre-le-t15-patrones`) y T13 la marca como «No» (`t13-explorador/diario.md`, rama `claude/cierre-le-t13-explorador`). No consta un inventario de loops ni un responsable por loop.

## Cómo se vería en nuestro loop [Hipótesis]
Cada loop de los cuatro equipos (Implementaciones, las dos células de marketing y Web) tendría una fila en un inventario: dueño humano, propósito, modelo, versión del contrato del auditor, quién aprueba la salida final y qué datos toca. Cambiar el contrato o la skill pasaría por la regla de T15 E2 (comité de cambios) y solo entre ciclos (T15 A2). La puerta «publica una persona» quedaría escrita como control, no como costumbre.

## Primer paso pequeño (una semana)
Crear `gobernanza/inventario-loops.md` en uno de los repos con una tabla de seis columnas (loop, dueño, modelo, versión del contrato, quién publica, datos que toca) y llenarla para un solo loop: el de contenido. Al viernes, revisar con el dueño si la fila es correcta.

## Qué necesita y qué riesgo tiene
- **Necesita:** un dueño por loop con nombre propio y 30 minutos por loop para llenarlo.
- **Riesgo:** convertirse en papeleo que nadie actualiza. Mitigación [Hipótesis]: que el inventario viva en el repo y que el hook o la revisión del cambio de contrato pida actualizar la fila.
