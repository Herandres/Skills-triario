# Documentación Skill VIS-01
**Kit de Construcción de Agentes**
**Servicio:** Transversal — aplica a todos los equipos
**Versión:** 2.0 · Junio 2026
**Responsable:** Hernán
**Estado:** Listo para producción ✅

---

## ¿Qué hace?

Convierte cualquier contenido estructurado en la conversación en un artefacto visual profesional con la identidad visual del equipo — sin que el usuario tenga que diseñar nada.

El agente lee lo que ya está en el chat, elige los layouts más adecuados y genera la presentación lista para entregar.

**Cuatro formatos de salida:**

| Formato | Comando | Para qué |
|---|---|---|
| **HTML Slides** | `/visual-kit slides` | Presentar en vivo, compartir como PDF (Ctrl+P) |
| **PPT editable** | `/visual-kit ppt` | Editar en PowerPoint M365, agregar fotos propias |
| **Dashboard HTML** | `/visual-kit dash` | Reporte operacional con KPIs y semáforos |
| **Informe HTML** | `/visual-kit report` | Auditoría detallada, para archivar |

---

## ¿Para qué?

**El problema que resuelve:** Presentar resultados de trabajo al cliente o a dirección significa abrir PowerPoint, recrear el diseño, copiar datos a mano y formatear todo. Horas de trabajo.

**Con VIS-01:** el agente lee lo que ya calculó en la conversación y genera la presentación en segundos.

### Cuándo usar HTML Slides
- Presentación en vivo desde el browser (pantalla compartida)
- Enviar al cliente como PDF: `Ctrl+P → Guardar como PDF`
- No requiere PowerPoint instalado
- El resultado se ve igual en cualquier dispositivo

### Cuándo usar PPT editable
- El equipo necesita modificar el texto después
- Se presenta desde PowerPoint en reunión formal
- Se quiere agregar fotos propias del equipo al archivo
- Se comparte el .pptx por email o SharePoint

---

## ¿Qué usa?

### Prompt
Corre en Claude.ai con el prompt de `VIS-01_skill_prompt.md` como Project Instructions.
Para el modo PPT requiere el entorno de ejecución de Claude.ai con `pptxgenjs`.
Para los modos HTML genera un Artifact directamente en el chat.

### Identidad visual — Sistema Híbrido

Diseñado a partir del template oficial del equipo (extraído del PPT corporativo real, analizado slide por slide):

| Token | Valor | Uso |
|---|---|---|
| Rojo brand | `#EF2222` | Portada, divisores, acentos, cierre, columna lateral |
| Morado oscuro | `#381134` | Slides de contenido oscuro, cierre, cita |
| Morado muy oscuro | `#1F0C21` | Slides de datos/KPIs |
| Panel oscuro | `#221125` | Panel lateral derecho en portada |
| Rosa cálido | `#FFE9E9` | Slides de plan de corrección |
| Lavanda decorativa | `rgba(195,160,215,0.28)` | Gradiente esquina — detalle oficial del template |

**Tipografía:**
- **Gabarito** (900) — títulos con `letter-spacing: -2px` → look editorial premium
- **Plus Jakarta Sans** — cuerpo, labels, descripciones

**Ícono ✦ (U+2726):** la estrella de 4 puntas del agente — usada como marcador de bullets en los layouts Columna Lateral y ¿Qué sigue?

**Geometría enriquecida:** semicírculos, cuartos de círculo y gradiente lavanda en el panel de portada — alineada con el template PPT oficial.

**Slide de foto:** el layout Foto Final usa foto full-bleed de personas (Unsplash, estilo editorial) con panel blanco y badge HubSpot — idéntico al slide "Gracias" del template oficial.

### Modos disponibles

| Modo | Comando | Auto-detecta cuando... |
|---|---|---|
| Slides HTML | `/visual-kit slides` | Usuario dice "presentación", "deck", "slides" |
| PPT editable | `/visual-kit ppt` | Usuario dice "ppt", "powerpoint", "editable" |
| Dashboard HTML | `/visual-kit dash` | Hay métricas, KPIs, tablas de datos |
| Informe HTML | `/visual-kit report` | Auditoría detallada, para archivar |

---

## Los 13 layouts disponibles

El agente elige automáticamente el layout más adecuado. Nunca repite el mismo fondo dos slides seguidos.

| # | Layout | Fondo | El agente lo elige cuando... |
|---|---|---|---|
| 1 | **Portada** | Rojo + panel oscuro + geometría rica | Siempre el primer slide |
| 2 | **Datos/KPIs** | Dark1 (#1F0C21) | Hay 4+ métricas que mostrar en paralelo |
| 3 | **Impacto** | Rojo (#EF2222) | Hay UN solo dato clave para destacar |
| 4 | **Divisor** | Rojo + círculos blancos | Separar secciones en presentaciones largas |
| 5 | **Contenido oscuro** | Dark2 (#381134) | 2-3 hallazgos con título + descripción |
| 6 | **Cita / Statement** | Dark2 (#381134) | Conclusión ejecutiva o frase de impacto |
| 7 | **Dos columnas** | Blanco | Comparar: antes/después, SEO vs LLM |
| 8 | **Plan** | Rosa cálido (#FFE9E9) | Acciones con urgencia, fecha o badge |
| 9 | **Lista** | Blanco | 5-8 ítems que no caben en las tarjetas |
| 10 | **Cierre** | Dark2 (#381134) | Último slide (alternativa sin foto) |
| 11 | **Columna Lateral** | Rojo izq + Blanco der | Bullets con ✦, "¿Qué sigue?", pasos |
| 12 | **Blanco Geometría** | Blanco + shapes rojas | Objetivo, contexto, texto largo |
| 13 | **Foto Final** | Foto full-bleed + overlay | "Gracias", cierre con foto, última slide cliente |

---

## Statement Slide — comportamiento automático

Antes de generar cualquier presentación en modo SLIDES, el agente pregunta:

> *"¿Quieres incluir un Statement Slide? Es una diapositiva con una sola frase de impacto — sin datos, sin bullets. Si sí, ¿después de qué slide lo ubico?"*

El agente propone la frase basándose en el contenido. El usuario aprueba o cambia antes de generar.

---

## Cómo usarlo

### Flujo típico con cualquier contenido

```
1. Describir o cargar el contenido en la conversación
2. Escribir: /visual-kit slides
3. El agente pregunta sobre el Statement Slide
4. El agente genera las slides con los layouts correctos
5. Abrir en browser → Ctrl+P → PDF → enviar al cliente
```


### Flujo con PPT editable

```
1. Cargar el contenido en la conversación
2. Escribir: /visual-kit ppt
3. El agente genera el script y ejecuta con pptxgenjs
4. Descargar el .pptx desde present_files
5. Abrir en PowerPoint M365
6. Editar texto y agregar fotos propias del equipo
```

### Uso con contenido manual

```
Usuario: "Genera las slides para la reunión cliente demo del 5 de junio
          con estos puntos: [descripción]"
Agente:  → detecta modo SLIDES
         → pregunta sobre Statement Slide
         → genera con los layouts más apropiados
```

---

## Compatibilidad

VIS-01 es la **capa de presentación** de cualquier contenido — no está atada a ninguna skill específica:

```
Cualquier contenido estructurado en la conversación
              │
              ▼
        VIS-01 · Motor de presentación
              │
    ┌─────────┼──────────┬───────────┐
    ▼         ▼          ▼           ▼
HTML Slides  PPT       Dashboard  Informe
(PDF)       (editar)   (KPIs)     (A4)
```

---

## Reglas del agente

- **No recalcula datos** — lee lo que ya está en la conversación
- **No inventa contenido** — si falta información, pregunta antes de generar
- **Geometría en lugar de fotos** — los layouts 1-12 usan formas CSS (no URLs externas)
- **Foto Final (layout 13)** — usa Unsplash con estilo editorial. El equipo reemplaza con foto propia al editar en PPT
- **Tildes y caracteres especiales** — soportados nativamente en todos los modos
- **Máximo 3 tarjetas** por slide de contenido oscuro
- **Máximo 4 items** por slide de plan de corrección
- **Máximo 8 items** por slide de lista
- **Máximo 4 items** por slide de columna lateral

---

## Versiones

| Versión | Cambio principal |
|---|---|
| v1.0 | 4 modos: dashboard · slides · informe · ppt |
| v1.1 | Paleta corregida con colores reales del template PPT del equipo |
| v1.2 | Slides HTML v2: alternancia de color, tipografía impacto |
| v1.3 | PPT sin imágenes: composición geométrica, 6 funciones de layout |
| v1.4 | Slides HTML v3: `letter-spacing: -2px`, `display=block` fonts |
| v1.5 | 4 layouts nuevos: Impacto · Cita · Dos columnas · Lista — 10 total |
| v1.6 | Statement Slide: pregunta obligatoria antes de generar |
| v1.7 | Bug fixes: logo sin punto, variables CSS, const TOTAL duplicado, tildes |
| v1.8 | Encabezado genérico — skill desacoplada de skills específicas |
| v2.0 (actual) | 3 layouts nuevos (Columna Lateral · Blanco Geo · Foto Final) · geometría rica portada · gradiente lavanda · ícono ✦ · alineado 100% con template PPT oficial — 13 layouts total |

---

## Pendientes y limitaciones conocidas

### Pendientes de validación

| ID | Ítem | Prioridad | Notas |
|---|---|---|---|
| PV-01 | **PPT — layouts 11-13 sin ejecución real** | Media | Columna Lateral, Blanco Geo y Foto Final no tienen función pptxgenjs — solo HTML. Pendiente implementar y probar. |
| PV-02 | **Modo dashboard no validado visualmente** | Media | Template definido, sin prueba con output real. |
| PV-03 | **Modo informe no validado visualmente** | Baja | Template definido, sin prueba real. |
| PV-04 | **Statement Slide solo en modo SLIDES** | Baja | La pregunta no aplica en modo PPT. |


### Limitaciones por diseño — no son bugs

| Limitación | Razón |
|---|---|
| PPT sin foto automática (layouts 1-10) | Las fotos del equipo no pueden embeberse en el script. El equipo las agrega al editar. |
| Foto Final solo en HTML | El layout 13 usa Unsplash en HTML. En PPT requeriría implementación adicional (PV-01). |
| PPT requiere entorno de ejecución | `pptxgenjs` debe estar disponible en Claude.ai. |
| Sin memoria entre conversaciones | Cada sesión es independiente — por diseño de Claude.ai. |
| Máximo 3 tarjetas en contenido oscuro | Límite de viewport. Si hay más hallazgos, dividir en dos slides. |

---

*Documentación Skill VIS-01 · kit-construccion-agentes v2.0 · Junio 2026*
