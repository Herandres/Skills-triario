# Documentación — Creación de Ángulos de Campaña y Activos Iniciales · `/campaign-assets`
## Loop Marketing · [Company] · v1.0 · Junio 2026

---

## Qué hace

Convierte la hipótesis aprobada del sprint en 2-3 ángulos creativos distintos para que el Estratega ejecutivo seleccione el más poderoso. Después de la selección, define los activos iniciales priorizados que el equipo produce en 10 días. Es el puente entre la hipótesis (`/marketing-ideas`) y el brief de producción (`/launch`).

---

## IDs del inventario que cubre

| ID | Proceso | Fase | Prioridad | Aplicación |
|---|---|---|---|---|
| MKT-023 | Creación de activos principales/iniciales | Express | Alta | Generación de 2-3 ángulos de campaña + definición de piezas iniciales priorizadas del sprint |

---

## Modos disponibles

| Modo | Cuándo activarlo | Responsable | Momento del servicio |
|---|---|---|---|
| **Generación de ángulos** | Después de aprobar la hipótesis en `/marketing-ideas` | Estratega ejecutivo + Estratega de contenido | Pre-producción |
| **Definición de activos iniciales** | Después de seleccionar el ángulo ganador | Estratega de contenido | Pre-producción |

---

## Cómo activar

```
/campaign-assets generar ángulos para el sprint [N] de [cliente] — hipótesis adjunta
/campaign-assets definir activos desde el ángulo [A/B/C] del sprint [N] de [cliente]
/campaign-assets ángulos creativos para [cliente] — formulario completado adjunto
/campaign-assets cuáles son los activos del sprint [N] de [cliente]
```

---

## Inputs requeridos

| Input | Obligatorio para | Quién lo provee |
|---|---|---|
| Hipótesis del sprint (Si→entonces→porque + activo + canal + KPI) | Generación de ángulos | `/marketing-ideas` |
| ICP, OKR del trimestre, whitespace, voz de marca | Generación de ángulos | `/customer-research` + `/marketing-plan` + Project Instructions |
| Capacidad del equipo (canales disponibles + restricciones) | Generación de ángulos | Estratega ejecutivo (opcional) |
| Ángulo seleccionado por el Estratega ejecutivo | Definición de activos | HITL — decisión humana |

---

## Outputs por modo

| Modo | Output |
|---|---|
| Generación de ángulos | 2-3 ángulos creativos con: lente, narrativa central, gancho de apertura, tono, formato sugerido, canal, ¿AEO? y por qué funciona. Ángulo recomendado señalado. |
| Definición de activos iniciales | Activo principal definido + 2 piezas derivadas priorizadas + nota de compounding para remix |

---

## Reglas críticas

**Ángulo ≠ hipótesis.** La hipótesis define qué testear. El ángulo define cómo comunicarlo. Los dos son necesarios — uno sin el otro produce campaña sin dirección o dirección sin testeo.

**3 lentes distintos.** Cada ángulo debe venir de un lente diferente. Dos ángulos con la misma narrativa (aunque distintos formatos) no sirven — el equipo no puede elegir entre variaciones del mismo punto de vista.

**HITL antes de producción.** Ningún activo entra a producción sin que el Estratega ejecutivo haya seleccionado el ángulo y aprobado los activos iniciales.

**Compounding desde el inicio.** El activo principal se diseña pensando en cómo se va a reutilizar — carrusel, email, LinkedIn post, AEO. No es un entregable aislado.

**Máximo 2 piezas derivadas.** El equipo de 10 días no puede producir 5 activos de calidad. Priorizar las dos piezas que más amplían el alcance del activo principal con el menor esfuerzo adicional.

---

## Lentes de ángulo — referencia rápida

| Lente | Narrativa central | Ideal cuando |
|---|---|---|
| Problema | El dolor actual — lo que el ICP está perdiendo hoy | ICP no ha priorizado el problema |
| Aspiración | El estado deseado — quién puede llegar a ser | ICP ya sabe el problema, busca motivación |
| Evidencia | Caso, dato o resultado que prueba que funciona | ICP evalúa opciones, necesita prueba |
| Contraste | Lo que todos hacen vs. lo que realmente funciona | Hay whitespace claro en el mercado |
| Urgencia | Por qué actuar ahora — ventana temporal | Hay evento, cambio o deadline relevante |
| Pertenencia | "Empresas como la tuya ya lo hacen" | ICP se mueve por referencia de pares |

---

## Skills relacionadas

| Skill | Cuándo | Dirección |
|---|---|---|
| `/marketing-ideas` | Hipótesis ganadora → input obligatorio | Prerrequisito |
| `/launch` | Ángulo + activos → brief del sprint | Posterior |
| `/copy-editing` | Activo producido → edición antes de QA | Posterior |
| `/ai-seo` | Componente AEO → publicación en LLMs | Paralelo |
| `/customer-research` | ICP + whitespace → bloque 2 del formulario | Prerrequisito |

---

## Versión y cambios

| Versión | Fecha | Cambio |
|---|---|---|
| v1.0 | Junio 2026 | Skill nueva — reemplaza `lead-magnets.md` · Rediseñada para cubrir MKT-023: generación de 2-3 ángulos creativos + definición de activos iniciales priorizados · Formulario de entrada estructurado · HITL explícito · Compounding integrado desde el diseño |
