# T14 · Archivo de fichas rechazadas

Rama: `claude/cierre-le-t14-aterrizador`.

**No hay fichas archivadas.** Ninguna ficha siguió rechazada después de la segunda y última revisión.

## Registro de las dos vueltas del auditor ciego
Criterio fijo en ambas vueltas: (a) el nivel asignado cumple la vara con las fuentes citadas; (b) «dónde estamos» no inventa hechos internos; (c) el primer paso es concreto y pequeño.

- **Vuelta 1** (subagente nuevo, recibió las 9 fichas y el criterio): 6 aprobadas, 3 rechazadas por el criterio (b).
  - `harness.md`, `guardrails.md` y `human-in-the-loop.md`: atribuían datos a T15 («ficha A7», «ficha B4», «ficha E1») sin dar la ruta del archivo.
  - Corrección: se agregó la ruta `t15-patrones/patrones.md`, rama `claude/cierre-le-t15-patrones`. No se cambió nada más.
- **Vuelta 2** (subagente nuevo, recibió solo las 3 fichas corregidas y el mismo criterio): 3 aprobadas.

Nota: `versionado-prompts-skills.md` está aprobada, pero con nivel «no cumple la vara todavía». Por eso entra al radar sin zona de brecha y no aparece en «Lo validado que nos falta».
