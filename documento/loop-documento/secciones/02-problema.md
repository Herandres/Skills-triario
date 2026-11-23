## 2. El problema
Responde: P1

Lo común es usar agentes de IA por tareas sueltas: alguien escribe la instrucción y el agente responde una vez. Ese modo tiene cuatro fallas.

**No se repite solo.** Cada corrida depende de que alguien la vuelva a pedir. La disciplina nació de proponer loops (ciclos) que le den las instrucciones al agente en lugar de la persona, con automations (automatizaciones programadas) que disparan el trabajo solas[^1].

**Nadie lo revisa con reglas fijas.** El agente tiende a declarar terminado lo que no verificó: en un harness (arnés, el entorno donde corre el agente) de larga duración, el agente marcaba funcionalidades como listas sin probarlas[^2]. Según Osmani, uno de los autores de la disciplina, «terminado» es una afirmación y no una prueba[^3]. Incluso un evaluador separado puede ver problemas reales y aprobarlos hasta que alguien lo calibra contra el juicio humano[^4].

**Automatizar exige saber cuándo parar.** Un ciclo sin tope gasta sin control: una reseña cuenta que un equipo consumió en una noche 3 veces su presupuesto mensual por un bucle de validación sin límite[^5]. Por eso las guías piden condiciones de parada verificables, como un máximo de iteraciones[^6].

**No aprende.** El agente olvida entre corridas; solo continúa gracias al estado guardado en disco y en el repositorio[^1].

La respuesta no está en mejores prompts (instrucciones), sino en el flujo: en 2024, un proceso iterativo basado en pruebas llevó un modelo del 19 % al 44 % de acierto en un banco de problemas de código[^7]. Las piezas (retroalimentación, verificación, estado y parada) ya eran práctica de ingeniería; lo nuevo, según unas notas de curso, es el nombre[^8]. Esa es la disciplina que la industria llama Loop Engineering (ingeniería de loops): diseñar flujos que guían a los agentes, una y otra vez, hacia metas definidas, con poca intervención humana y criterios de parada verificables[^6].

[^1]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §2.1 (Steinberger y Osmani, vía reseñas) · [Visto solo en buscador]
[^2]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §2.5 (Anthropic, Effective harnesses for long-running agents) · [Fuente primaria]
[^3]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §2.1 (Osmani, vía reseñas) · [Visto solo en buscador]
[^4]: investigacion/cierre-loop-engineering/t13-explorador/informe-de-viaje.md H1 (Anthropic, Harness design for long-running apps) · [Fuente primaria]
[^5]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §3 fila 4 (Blue Orange) · [Fuente secundaria]
[^6]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §2.3 (Anthropic, Building effective agents) · [Fuente primaria]; §2.2 (IBM) · [Visto solo en buscador]
[^7]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §2.3 (AlphaCodium, repo oficial) · [Fuente primaria]
[^8]: investigacion/cierre-loop-engineering/t01-tesis/tesis.md §2.2 (notas de curso tds.s-anand.net) · [Visto solo en buscador]
