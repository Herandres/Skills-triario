# Memoria Operativa del Equipo
## Documentación completa del skill
### Equipo SEO · Junio 2026

---

## Descripción general

Skill especializado para el Equipo SEO. Convierte cualquier contexto que el usuario entregue — notas, descripciones de procesos, decisiones de clientes, entregables aprobados — en documentación profesional estructurada con la identidad visual del equipo.

**Entorno de operación:** Claude.ai Project
**MCPs requeridos:** Ninguno — skill pura
**Equipo:** Equipo SEO — Carolina · Salomé · Valentina · Wilman

---

## Historial de versiones

| Versión | Fecha | Cambios principales |
|---|---|---|
| v1.0 | Jun 2026 | Skill base: 4 modos (SOP, Decisión, Entregable, Pasaporte) · detección automática · identidad visual del equipo |
| v1.1 | Jun 2026 | Flujo secuencial auditado · template HTML completo · versionado inteligente · campos faltantes corregidos · 6 críticos resueltos |

---

## Los 4 modos del skill

| Modo | Cuándo usarlo | Qué produce |
|---|---|---|
| **SOP** | Para documentar cómo se hace un proceso del equipo | Documento de pasos, criterios, responsable, frecuencia y herramientas |
| **DECISIÓN** | Para registrar un acuerdo tomado con o sobre un cliente | Registro con contexto, impacto, alternativas descartadas y próximo paso |
| **ENTREGABLE** | Para versionar un documento entregado o aprobado | Header de versión, resumen ejecutivo, feedback y criterios de aprobación |
| **PASAPORTE** | Para crear o actualizar el perfil de una cuenta | Ficha de cliente con historial, decisiones activas, sensibilidades y contacto |

---

## Manual de usuario

### 1. ¿Qué hace este skill por mí?

Toma lo que describes y lo convierte en un documento profesional en segundos. No necesitas saber qué formato usar ni cómo estructurarlo — el skill detecta automáticamente qué tipo de documento necesitas y lo genera con la identidad visual del equipo.

El resultado es un documento listo para copiar, compartir o guardar en Drive o SharePoint.

---

### 2. ¿Cuándo lo uso?

- **Terminaste un proceso y quieres que quede documentado** — "Crea el SOP de cómo hacemos el keyword research"
- **El cliente aprobó algo importante** — "Registra que cliente demo aprobó cambiar el enfoque a AEO"
- **Entregaste un informe o auditoría** — "Versiona el informe mensual de Internexa que aprobaron hoy"
- **Necesitas un resumen de estado de una cuenta** — "Crea el pasaporte de Fepasde con lo que sé hasta hoy"
- **Alguien nuevo va a tomar una cuenta** — "Actualiza el pasaporte de Tivit para el handoff"

---

### 3. ¿Cómo lo activo?

**Paso 1 — Escribe lo que quieres documentar**
En texto libre, como lo describirías a un compañero:
- "Crea el SOP de cómo hacemos el brief de contenidos"
- "Registra que decidimos pausar el link building de Kalley hasta julio"
- "Versiona la auditoría SEO de Industronic que aprobaron hoy"
- "Dame el pasaporte de Clínica Sandiego"

**Paso 2 — El skill detecta el tipo**
Automáticamente identifica si es SOP, Decisión, Entregable o Pasaporte. Si hay ambigüedad, pregunta en una línea.

**Paso 3 — Responde lo que falte (si pregunta)**
Máximo 2 preguntas antes de generar. Si falta información que no es crítica, genera con `[PENDIENTE]` y te dice qué completar después.

**Paso 4 — Recibes el documento**
Listo para copiar y guardar. Si quieres el formato visual con identidad visual del equipo, pide "genera en HTML".

---

### 4. ¿Qué produce el skill?

**SOP** incluye: qué es el proceso, cuándo se activa, pasos ordenados, criterios de calidad, herramientas, interdependencias, duración estimada.

**DECISIÓN** incluye: contexto de por qué se tomó, qué se acordó, qué cambia, alternativas descartadas, quién estuvo involucrado, próximo paso.

**ENTREGABLE** incluye: descripción, resumen ejecutivo, criterios de aprobación, feedback recibido, cambios respecto a versión anterior, limitaciones de alcance.

**PASAPORTE** incluye: quién es el cliente, responsable en el equipo, historial de lo que se ha hecho, decisiones vigentes, sensibilidades, contacto, renovación y próximo paso.

---

### 5. ¿Cómo guardo el documento?

El skill propone un nombre de archivo estandarizado al final de cada documento:

| Tipo | Formato del nombre |
|---|---|
| SOP | `SOP_[NombreProceso]_v1.0_[YYYYMMDD].md` |
| Decisión | `DEC_[Cliente]_[Tema]_[YYYYMMDD].md` |
| Entregable | `ENT_[Cliente]_[Nombre]_v1_[YYYYMMDD].md` |
| Pasaporte | `PASAPORTE_[Cliente]_[YYYYMMDD].md` |

Copia el documento y guárdalo en la carpeta del cliente en SharePoint o Drive.

---

### 6. ¿Qué NO hace el skill?

- **No guarda archivos automáticamente** — genera el documento, el guardado es manual
- **No inventa datos** — si falta información, pregunta o marca `[PENDIENTE]`
- **No accede a ClickUp ni al correo** — trabaja solo con lo que el usuario le da
- **No reemplaza el juicio del equipo** — documenta lo que le dices, no decide por ti

---

### 7. Preguntas frecuentes

**¿Qué pasa si el skill no entiende qué tipo de documento quiero?**
Pregunta en una línea: "¿Quieres documentar esto como SOP o como Decisión?" Responde y sigue.

**¿Puedo pedirle los 4 tipos en una sola conversación?**
Sí. Cada documento se genera por separado dentro de la misma conversación.

**¿Cómo actualizo un Pasaporte que ya existe?**
Pega el Pasaporte anterior en el contexto y dile qué cambió: "Actualiza este pasaporte con la nueva decisión de cambiar a AEO." El skill genera la versión actualizada.

**¿El formato HTML funciona para imprimir?**
Sí. El HTML incluye estilos de impresión — `Ctrl+P` desde el navegador genera un PDF limpio.

**¿Puedo usarlo para clientes Web además de SEO?**
Sí. El skill funciona para cualquier cuenta del equipo — SEO, Web o ambos.

---

## Flujo del skill — pasos

| Paso | Qué hace |
|---|---|
| **1 · Trigger** | El usuario describe en texto libre lo que quiere documentar. |
| **2 · Detectar tipo** | El skill identifica automáticamente: SOP, Decisión, Entregable o Pasaporte. Si hay ambigüedad, pregunta en una línea. |
| **3 · Verificar datos** | Revisa si faltan datos obligatorios. Si faltan, pregunta (máx. 2). Si faltan más de 2, genera con `[PENDIENTE]`. |
| **4 · Generar documento** | Produce el documento estructurado en el formato del tipo detectado. |
| **5 · Identidad visual del equipo** | Aplica header, colores, tipografía y footer de marca. HTML bajo pedido. |
| **6 · Proponer nombre** | Sugiere el nombre de archivo estandarizado listo para guardar. |

---

## Decisiones de diseño — qué NO se agregó y por qué

| Idea descartada | Razón |
|---|---|
| Guardar automáticamente en SharePoint | M365 MCP es solo lectura — y el guardado sin confirmación es riesgoso |
| Leer documentos existentes para enriquecer el output | Sin MCP de lectura activa, dependería de que el usuario pegue el documento; complejiza sin garantizar valor |
| Conectar con OPS-02 o QA-01 | Cada skill debe ser independiente — sin dependencias cruzadas |
| Generar múltiples documentos en un solo output sin preguntar | Si el contexto mezcla tipos, preguntar es más seguro que asumir |
| Versionado automático sin input del usuario | Sin acceso al historial de archivos, asumir la versión generaría errores |

---

## El Pasaporte del Cliente — valor a mediano plazo

El Pasaporte es el diferenciador estratégico del skill. Hoy, si se usa por primera vez para un cliente, produce un documento con lo que el usuario sabe en ese momento. Con cada uso posterior — decisiones nuevas, entregables aprobados, cambios de estrategia — el Pasaporte se actualiza y acumula.

Después de 3-4 actualizaciones, ese archivo se convierte en el contexto que cualquier persona del equipo necesita para arrancar con un cliente sin preguntar a nadie. Es la memoria institucional del equipo.

**Prerequisito para que funcione:** el equipo debe tener el hábito de actualizar el Pasaporte cada vez que algo importante cambia. Sin ese hábito, el Pasaporte no acumula valor.

---

*Memoria Operativa del Equipo · Documentación v1.1*
*Equipo SEO · Junio 2026*
*Documentación v1.1*
