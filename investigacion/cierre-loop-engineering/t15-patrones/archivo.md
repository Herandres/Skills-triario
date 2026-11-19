# T15 · Archivo de analogías rechazadas

Rama: `claude/cierre-le-t15-patrones`. Aquí va lo que no entró al catálogo de `patrones.md`, cada cosa con su razón. Igual que la cola de fallidos (ficha A6), esto no es un basurero: cada entrada dice qué faltaría para reabrirla.

Criterio de entrada al catálogo (fijo): (a) concepto de IA con al menos una fuente primaria con enlace; (b) mapeo rol a rol completo con las relaciones conservadas (Gentner, 1983); (c) ejemplo de Triario tomado del contexto, no inventado.

---

## 1. Rechazada por el auditor ciego en dos vueltas

### C3 · Postmortem sin culpables (blameless postmortem) → Reflexion
- **Vuelta 1 · rechazada por el criterio (c):** el ejemplo decía que la lección del contrato movido «la sacó el equipo, no el agente». El contexto solo dice que el criterio se movió a mitad y que con contrato fijo aprobó en la primera; no dice quién sacó la lección. Corregí el ejemplo a «sin ejemplo aún».
- **Vuelta 2 (última) · rechazada por el criterio (b):** la tabla no da par a quien redacta el postmortem (el equipo; en la técnica, el paso de reflexión), y tampoco mapea lo que define la práctica: «sin culpables», es decir, que la lección apunte a la regla o al sistema y no a quien falló. El mapeo se queda en «fallo → texto → siguiente intento», que es la estructura general de Reflexion pero no la del postmortem sin culpables.
- **Fuentes que tenía:** Reflexion [Fuente primaria] [github.com/noahshinn/reflexion](https://github.com/noahshinn/reflexion); Google SRE book, cap. 15 [Visto solo en buscador] [sre.google](https://sre.google/sre-book/postmortem-culture/) (no abrió: `ENOTFOUND`).
- **Qué faltaría para reabrirla:** agregar al mapeo el rol «redactor de la reflexión» y una regla de la técnica que obligue a que la lección se exprese como cambio de regla, contrato o skill, nunca como «el generador se equivocó». Luego pasarla otra vez por el auditor con el mismo criterio.

---

## 2. Descartadas por esta tarea antes del auditor (mapeo estructural)

### Reunión diaria (standup) → mensajes e idle notifications de agent teams
- **Razón:** la relación central del standup es que todos se sincronizan **a la misma hora**, en un tiempo corto y frente a sus pares, para destapar bloqueos. En agent teams los avisos son asíncronos y llegan al líder cuando un compañero termina o se detiene. [Fuente primaria] [Claude Code, agent teams](https://code.claude.com/docs/en/agent-teams). No hay par para «el ritual sincrónico frente a los pares»: lo que queda es notificación de estado, que ya cubren C4 (kanban) y C5 (supervisor). Analogía superficial.

### Pre-mortem (Gary Klein, HBR, 2007) → ?
- **Práctica:** el equipo imagina que el proyecto ya fracasó y lista las causas posibles. [Visto solo en buscador] [Klein, «Performing a Project Premortem»](https://wiki.duraspace.org/download/attachments/104563925/ProjectPremortem.pdf?api=v2)
- **Razón:** no encontré, con el presupuesto de búsquedas, una fuente primaria de IA para una técnica de agentes con esta estructura (prospective hindsight o retrospectiva anticipada aplicada a un plan). Lo más cercano es el equipo rojo (A5), pero ahí el atacante es distinto del constructor; en el pre-mortem lo hace **el mismo equipo** sobre **su propio plan antes de ejecutarlo**. Esa relación no se conserva. Falla el criterio (a) y, si se fuerza a A5, el (b).

### Piloto o prueba A/B → paralelización o loop de ciclo largo
- **Razón:** una prueba A/B necesita **asignación aleatoria** de usuarios reales a dos variantes y una **métrica comparada** entre grupos. La votación en paralelo (Anthropic) corre la misma tarea varias veces sobre la misma entrada: no hay población ni asignación. El loop de ciclo largo con línea base (contexto de Triario) compara antes y después, no dos grupos al mismo tiempo. Rol sin par: el grupo de control simultáneo. No encontré fuente primaria de agentes que lo arme. Falla (a) y (b).

### Cuaderno de laboratorio → memoria externa
- **Razón:** no es rechazo por mapeo; es duplicado. Comparte todos los roles y relaciones con B3 (bitácora), así que se fusionó con esa ficha en lugar de abrir otra.
