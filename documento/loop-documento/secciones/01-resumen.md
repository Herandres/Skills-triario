## 1. Resumen
Responde: P1, P2, P3, P4, P5

Loop Engineering (ingeniería de loops) construye sistemas que se mejoran solos. En lugar de pedirle a un agente de IA una respuesta suelta, se diseña un loop (ciclo) que lo pone a trabajar, revisa lo que produce con reglas fijas, lo devuelve cuando falla y sabe cuándo parar[^1]. Importa porque automatizar exige saber cuándo parar: según una reseña, un bucle sin límite consumió en una noche 3 veces el presupuesto mensual de un equipo[^2].

<!-- figura: escalera -->

**La industria.** Las piezas están documentadas por separado[^3], casi siempre por Anthropic y OpenAI [Hipótesis][^4]. Que falte una documentación que las integre como disciplina es una lectura de este documento, no un hecho [Hipótesis][^4]. De los 9 conceptos de la industria, el nivel más alto de la escalera de Triario aplica 5 [Hipótesis][^6].

**La escalera de Triario.** Primer nivel, el concepto: una tesis propia y un catálogo de 20 patrones aprobados por un auditor ciego, un revisor que solo ve la salida y el contrato[^5]. Segundo nivel, los equipos: cuatro equipos trabajan con un agente principal y hay cinco loops descritos en su trabajo[^5]. Tercer nivel, el más alto: un sistema de agentes con tarea propia, control ciego contra un contrato que no cambió y una bitácora de 22 ciclos[^5].

**Límites.** Que esos 22 ciclos aprobaran en la primera ronda no prueba que el auditor acierte[^5]. El costo en tokens (unidades de texto del modelo) no tiene registro, los resultados de los equipos no se han medido y las evals (evaluaciones automáticas) siguen a medias[^6].

**Evidencia.** La prueba más fuerte es interna: con el contrato fijo, el auditor aprobó en la primera vuelta; con el criterio movido a mitad, no cerró en 3[^5]. Cada afirmación lleva su nivel de evidencia.

[^1]: sección 3 de este documento · [Fuente primaria]
[^2]: sección 2 de este documento · [Fuente secundaria]
[^3]: sección 4 de este documento · [Fuente primaria]
[^4]: sección 4 de este documento · [Hipótesis]
[^5]: sección 5 de este documento · [Fuente primaria]
[^6]: sección 6 de este documento · [Hipótesis]
