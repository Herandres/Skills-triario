# Versionado de prompts y skills (prompt and skill versioning)

- **Inglés:** prompt versioning / prompt registry · **Español:** versionado de prompts y skills · **Pronunciación aproximada:** «prompt vérshoning».

## Qué es, en una frase
Tratar cada prompt, skill y contrato como un artefacto con versiones inmutables y un puntero a la versión en producción, para saber qué versión produjo cada salida y poder volver atrás.

## Por qué está validado
**Nivel: no cumple la vara todavía.** Tiene dos fuentes primarias independientes, pero no encontré un caso publicado de uso en producción con nombre de empresa; tampoco lo encontré recogido en un estándar ni, con fuente abierta, en la documentación de un laboratorio. No es moda (tiene documentación oficial de herramientas), pero no alcanza «emergente».

- **MLflow Prompt Registry:** versiones inmutables con número creciente y alias mutables (por ejemplo, `production`) que permiten cambiar de versión sin redesplegar. [Visto solo en buscador] [mlflow.org, aliases](https://mlflow.org/docs/latest/genai/prompt-registry/manage-prompt-lifecycles-with-aliases/)
- **Langfuse:** ayuda a «centrally manage, version control, and collaboratively iterate on your prompts». [Fuente primaria] [github.com/langfuse/langfuse](https://github.com/langfuse/langfuse)
- **OpenAI:** está retirando los objetos de prompt reutilizables de su API y, según el buscador, recomienda llevar el contenido del prompt al código de la aplicación para controlar revisión, pruebas, despliegue y versiones. [Visto solo en buscador] [developers.openai.com](https://developers.openai.com/api/docs/guides/prompting/migrate-from-prompt-object) (no abrió: `ENOTFOUND`). Si se confirma en la fuente, el concepto subiría a consenso.
- **Caso en producción:** no encontrado. Los resultados fueron blogs de práctica sin empresa nombrada [Fuente secundaria] [tianpan.co](https://tianpan.co/blog/2026-04-09-prompt-versioning-production-llm).

## Dónde estamos
**No sé: preguntar a Hernán.** El contexto dice que el contrato del auditor no cambia durante el ciclo, pero no dice si tiene número de versión. Las skills y CLAUDE.md viven en repos; que eso implique historial en git es una deducción, no un hecho dado [Hipótesis].

## Cómo se vería en nuestro loop [Hipótesis]
El contrato del auditor y cada skill llevan un campo `version` en su encabezado; cada corrida registra qué versiones usó (ver ficha de observabilidad). Cambiar el contrato es publicar una versión nueva que aplica desde el ciclo siguiente, como propone T15 en su ficha A2.

## Primer paso pequeño (una semana)
Agregar `version: 1` al encabezado del contrato del auditor de un loop y una línea en su bitácora cada vez que se cambie, con fecha y motivo.

## Qué necesita y qué riesgo tiene
- **Necesita:** ubicar el archivo del contrato del auditor.
- **Riesgo:** versionar sin registrar qué versión usó cada corrida no sirve para rastrear un problema; el valor aparece junto con la traza.
