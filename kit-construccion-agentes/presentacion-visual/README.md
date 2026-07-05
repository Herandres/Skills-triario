# Presentación Visual

> Agente que convierte cualquier contenido estructurado en la conversación en un artefacto visual profesional — slides, dashboard, informe o PPT — sin que el usuario tenga que diseñar nada.

---

## El problema que resuelve

Presentar resultados de trabajo al cliente o a dirección significa abrir PowerPoint, recrear el diseño, copiar datos a mano y formatear todo. El tiempo de producción del artefacto visual superaba con frecuencia el tiempo de análisis. El contenido ya estaba en la conversación — el problema era convertirlo en algo presentable.

## Quién lo usa

Cualquier miembro del equipo que necesite presentar resultados, reportes o análisis a una audiencia interna o externa.

## Qué produce

Cuatro formatos de salida según el comando:

| Formato | Comando | Para qué |
|---|---|---|
| **HTML Slides** | `/visual-kit slides` | Presentar en vivo, compartir como PDF (Ctrl+P) |
| **PPT editable** | `/visual-kit ppt` | Editar en PowerPoint, agregar fotos propias |
| **Dashboard HTML** | `/visual-kit dash` | Reporte operacional con KPIs y semáforos |
| **Informe HTML** | `/visual-kit report` | Auditoría detallada para archivar o compartir |

## Por qué este diseño

El agente lee lo que ya está en el chat, elige los layouts más adecuados al contenido y genera la presentación. El usuario no selecciona plantillas ni arrastra elementos. Esta decisión de diseño — transferir al agente la responsabilidad del layout — elimina la fricción que hace que los equipos eviten documentar: el tiempo de formateo.

## Stack

`Claude.ai` · Artefactos HTML standalone · Compatible con PowerPoint M365 · Versión 2.0
