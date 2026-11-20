# Huecos del relevo (pre-mortem)

## Jueves

### HR-001 · Nada está en `master`; el cierre depende de 10 ramas sueltas
- **Qué es:** los entregables viven solo en ramas `claude/cierre-le-*`; `origin/master` no contiene nada de `investigacion/cierre-loop-engineering/`.
- **Evidencia:** `git ls-tree -r origin/master | grep cierre` da 0 resultados. Ramas: prueba, t01, t02, t03, t04, t05, t06, t13, t14, t15.
- **Daño:** si el lunes se consolida desde una sola rama o se borra una rama tras un merge parcial, se pierde una investigación.
- **Qué hice:** lo anoto aquí; no toco master ni otras ramas.
- **Estado:** abierto. Revisar a mano: consolidar las 10 ramas antes de borrar ninguna.

### HR-002 · Plantillas de T3: nombres distintos al esperado
- **Qué es:** T3 entregó 6 plantillas, no 2: `01-formal.html`, `02-editorial.html`, `03-informe-anual.html`, `04-portafolio-casos.html`, `05-linea-de-tiempo.html`, `06-plano-tecnico.html`, más `index.html`. La «formal» es `01-formal.html` y el «plano técnico» es `06-plano-tecnico.html` (contiene colores de Triario).
- **Evidencia:** `claude/cierre-le-t03-plantillas`, `investigacion/cierre-loop-engineering/t03-plantillas/plantillas/`.
- **Daño:** quien busque `plantillas/formal.html` no la encuentra; dos plantillas extra pueden confundir el consolidado.
- **Qué hice:** anoté la ruta real.
- **Estado:** abierto (informativo).

### HR-003 · Sello de hora de la parada 2 del explorador no cuadra con el commit
- **Qué es:** la parada 2 dice `2026-11-20T00:15:00Z` pero su commit (`69dcb1e`) es de 00:02:49Z. La hora parece escrita a mano o estimada.
- **Evidencia:** `claude/cierre-le-t13-explorador`, `t13-explorador/diario.md`, línea del título «Parada 2».
- **Daño:** al ordenar o auditar paradas por hora, la trazabilidad es dudosa.
- **Qué hice:** lo anoto; no edito archivos de otras tareas.
- **Estado:** abierto (menor).

### HR-004 · Explorador va 2/7; la parada de las 3 p. m. del 20 aún no toca
- **Qué es:** hay 2 paradas. Las del día 19 (3 p. m. y 7 p. m.) están. Faltan 5 de 7 del itinerario.
- **Evidencia:** `diario.md` en `claude/cierre-le-t13-explorador`; reloj 00:30 UTC.
- **Daño:** si faltan paradas el lunes, el diario quedará corto.
- **Qué hice:** nada que rescatar; la parada de las 3 p. m. del 20 queda «en curso o pendiente», no perdida.
- **Estado:** abierto, a revisar en el siguiente corte.

### HR-005 · Fuentes primarias débiles por dominios que no abren
- **Qué es:** varias investigaciones cierran con «quedó sin fuente primaria abierta» (T2: PMI, PRINCE2, ISO 21502; T4: Generative Agents; T6: brag document de Julia Evans; T14: NIST e ISO; T5: arxiv.org y otros no intentados). Esas afirmaciones llevan sello de fuente secundaria o buscador.
- **Evidencia:** colas de `estandares.md`, `innovacion.md`, `evidencia.md`, `radar.md`, `deck.md`.
- **Daño:** el cierre podría presentar como firmes citas que solo se vieron en buscador. `radar.md` tiene pocos enlaces (7) para su tamaño.
- **Qué hice:** lo anoto; no verifico (fuera de alcance del supervisor).
- **Estado:** abierto. Revisar a mano antes de publicar, respetando los sellos.

### HR-006 · Rama canario `claude/cierre-le-prueba`
- **Qué es:** rama de prueba con `t00-prueba/prueba.md`; no es un entregable.
- **Daño:** podría arrastrarse al consolidado por error.
- **Estado:** abierto (informativo): excluir del consolidado.
