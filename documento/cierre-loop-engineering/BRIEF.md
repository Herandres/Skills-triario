# Brief del documento de cierre · Loop Engineering

Brief común para todos los especialistas del Relevo de documentación. Léelo completo antes de escribir.

## 1. Qué es y para qué

Hernán Castaño (Datos e IA, Triario) cierra el proyecto Loop Engineering, que va de septiembre a noviembre de 2026. El documento de cierre es su evidencia personal del trabajo. Hay dos entregables:
- un documento formal en HTML, exportable a PDF;
- un deck ejecutivo con notas del orador.

El alcance es solo el proyecto, no su historia completa en Triario.

## 2. La base del informe es la innovación

El informe se sostiene en lo que el proyecto hizo de nuevo y en cómo se compara con lo que hace hoy la industria. Cada sección muestra dónde está la innovación y con qué evidencia. Los ejes son:

1. **Loop Engineering como ingeniería de tuberías.** Un loop une flujos de trabajo en un solo sistema que se repite solo, se revisa con reglas fijas y sabe cuándo parar, como la ingeniería de datos con fuentes, transformaciones y controles. Cada regla tiene su par en ingeniería de datos:
   - contrato inmutable ↔ data contract;
   - auditor ciego ↔ prueba de calidad independiente;
   - archivada ↔ dead-letter queue;
   - ensanchar la ventana ↔ backfill;
   - bitácora ↔ linaje.

   Es la tesis de T01.
2. **Sistemas de agentes orquestados con memoria en git.** Relevos con pizarra común; especialistas; auditor ciego que solo ve la salida; contrato que no cambia durante el ciclo; retorno a la capa que falló; supervisor de reconciliación; canario antes de la corrida; Guardián de la memoria que detecta huecos; Code Janitor que limpia sin cambiar lo que se ve.
3. **Dogfooding: el cierre se construyó con la misma técnica que presenta.**
   - El Relevo, 16 tareas en rutinas, investigó el cierre.
   - El Taller construyó por ciclos la oficina del Relevo, la visualización del sistema.
   - Este Relevo de documentación escribe el documento.
4. **Mejora continua visible.** La oficina pasó por cuatro etapas: marco plano, canicas en 3D, personas y estado final. Cada una tiene su commit (ver `insumos/evolucion-oficina/README.md`).
5. **Frente a la industria.**
   - Lo que trajo el explorador (T13) en su informe de viaje.
   - El radar del aterrizador (T14): madurez afuera frente a adopción aquí.
   - Los patrones traducidos (T15).

## 3. Decisiones de Hernán, que no se discuten

- **Índice.** Formal, estilo End Project Report (T02), para el HTML/PDF. Ejecutivo, las 12 láminas de T05, para el deck.
- **Plantilla.** Mezcla de las plantillas de T03: la 01 Formal es la columna, la 06 Plano técnico va para la tesis y la arquitectura, y la 04 Portafolio para los casos.
- **Organización:**
  - **Parte 1 · El marco.** La tesis de la tubería (T01), figuras de arquitectura, las técnicas de loop engineering (T15) y el «plano cartesiano», que es el radar de T14 con **dos puntos por concepto**: los equipos frente al proyecto del cierre. Cada punto lleva su evidencia (archivo o commit). Según Hernán, los equipos no han llegado a observabilidad, guardrails, versionado de prompts y skills ni costo de tokens, pero el cierre sí los implementa. Hay que mostrarlo con evidencia o marcarlo «por confirmar».
  - **Parte 2 · Los loops construidos con los equipos.** GDO (MKT1, MKT2 y Web) e Implementaciones, cada uno con su flujo, árbol y proceso. **Esta parte se define con Hernán**: escribe solo con la evidencia que exista y marca el resto «[confirmar con Hernán]».
  - **Parte 3 · El sistema que construyó el cierre.** El Relevo y El Taller frente a cómo trabaja hoy la industria. Hernán dice que son más de 100 agentes. **Esa cifra se cuenta desde git y los registros; no se estima.** Si no se puede contar, se dice cuánto se contó y con qué método.
- **Figuras con criterio técnico:** cuadrante 2x2, arquitectura C4, carriles (swimlane), secuencia, máquina de estados, matriz de trazabilidad, mapa de calor y modelo de madurez.
  - Los diagramas se hacen con **Archify** (schema v2; ejemplo en `insumos/ciclo-taller.workflow.json`). Lo que Archify no dibuja va en SVG.
  - Los agentes entregan la especificación (JSON de Archify o SVG). El render final con la piel Triario se hace en local.
  - Paleta Triario: rojo `#EF2222`, ciruela `#361133`, azul `#534DFF`, amarillo `#F8D53C`, texto `#1E0C21`, fondo claro.
- **No hay sección de «próximos pasos» ni de pendientes.** Se documenta lo hecho. Las lecciones aprendidas sí van.

## 4. Fuentes

- **Investigación del Relevo:** `investigacion/cierre-loop-engineering/` en esta misma rama.
  - T01 tesis · T02 cierre · T03 plantillas · T04 mostrar el loop · T05 deck · T06 evidencia · T13 explorador (`diario.md`, `informe-de-viaje.md`) · T14 aterrizador (radar y fichas) · T15 patrones · T16 supervisor (`estado-jueves.md`, `estado-final.md`, `huecos.md`).
- **El Taller y la oficina:** repositorio `Herandres/oficina-relevo`, rama `claude/taller`, solo lectura.
  - `bitacora/`, `ciclos/`, `decisiones/`, `estado.json`, `capturas/`, `retro/` y, si existe, `ESTADO-FINAL.md`.
  - La historia de git de esa rama y de `claude/cierre-le-*` en este repositorio da las horas reales.
- **Fuentes débiles (HR-005 de T16).** PMI, PRINCE2, ISO 21502, Duarte y los papers de arxiv se vieron solo en el buscador. No se citan como verificadas: van con el sello [Visto solo en buscador].
- **Datos que solo Hernán puede dar:**
  - los casos de T06 marcados «[confirmar con Hernán]»;
  - los datos de ClickUp (hitos y HU del proyecto Loop Engineering: Fase 2.0);
  - el informe de avance del 04/11/2026, que es un dato interno a confirmar con Hernán;
  - las reuniones de Fathom.

  Se marcan «[confirmar con Hernán]» y nunca se inventan.

## 5. Reglas fijas para todos los especialistas

- **Cero datos inventados.** Cada afirmación lleva su fuente: ruta de archivo, commit o enlace con sello ([Fuente primaria], [Fuente secundaria], [Visto solo en buscador], [Hipótesis]).
- **Formato de especialista:** «Tarea DNN: agente especialista X leyó la investigación y, tomando como base lo siguiente, propone…».
- **Cada entregable cierra con la sección «Dónde está la innovación».**
- **Español claro**, con los términos técnicos en inglés y su traducción la primera vez. Sin guiones largos como muletilla.
- **Git.** Nada se sobrescribe: cada especialista escribe solo en su carpeta y su rama. Nunca `git push --force`. No se toca `master`.
