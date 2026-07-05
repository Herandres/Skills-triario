# Documentación — Pitch Estratégico · `/pitch`
## Habilidad Comercial · [Company] · v2.0 · Junio 2026

---

## Qué hace

Genera una presentación estratégica de marketing de 5 minutos para el equipo comercial de [Company]. A partir del nombre del cliente, su sector y su sitio web, construye una narrativa transformadora sobre el negocio del cliente y la conecta con el plan estratégico que [Company] propone. La salida es un documento HTML standalone con secciones de narrativa y mapas conceptuales SVG — listo para presentar en reunión o imprimir como PDF.

No es un pitch comercial de servicios. Es la apertura estratégica de un plan de marketing: una idea que primero conecta emocionalmente con el negocio del cliente, y luego despliega la arquitectura de lo que se va a construir.

---

## Cuándo usarla

| Momento | Descripción |
|---|---|
| Pre-venta | Antes de la primera reunión con un prospecto |
| Apertura de plan trimestral | Al inicio de un nuevo trimestre con cliente activo |
| Renovación del contrato | Cuando se quiere replantear la estrategia con un cliente existente |

---

## Cómo activar

```
/pitch [nombre del cliente] | [sector] | [URL del sitio web]
```

**Ejemplos:**
```
/pitch Bancolombia | Financiero | bancolombia.com
/pitch Internexa | Telecomunicaciones B2B | internexa.com
/pitch Grupo Éxito | Retail | exito.com
```

---

## Inputs requeridos

| Input | Obligatorio | Descripción |
|---|---|---|
| Nombre del cliente | Sí | Nombre comercial — aparece en la portada del documento |
| Sector | Sí | Define el ángulo de la narrativa transformadora |
| URL del sitio web | Sí | Claude analiza el sitio para extraer señales del negocio |

---

## Proceso interno del agente

1. **Análisis del sector** — identifica la tensión más relevante del sector en el momento actual
2. **Análisis del cliente** — visita la URL y extrae señales: posicionamiento, audiencias, lenguaje, propuesta de valor
3. **Construcción de la idea transformadora** — una sola idea que reencuadra cómo el cliente ve su marketing
4. **Generación del documento HTML** — 8–10 secciones con el sistema visual de [Company]

---

## Estructura del documento HTML generado

| Sección | Tipo de layout | Contenido |
|---|---|---|
| Portada | Panel rojo + nombre | Cliente + sector + fecha |
| Gancho | Narrativa blanca | Tensión del sector — frase de alto impacto |
| Pivot | Narrativa blanca | Reencuadre hacia la oportunidad |
| Diagnóstico | Bullets rojos | 3–4 cambios concretos en el mercado del cliente |
| Idea transformadora | Transición oscura | La idea central — texto corto en fondo morado + amarillo |
| Rol de [Company] | Columna roja | Lo que se va a construir — 4 pilares |
| Mapa conceptual 1 | SVG circular | 4 principios estratégicos del plan |
| Mapa conceptual 2 | SVG flujo horizontal | Proceso de atracción: Pilar → Audiencias → Canales → Mensajes → CTAs |
| CTA | Narrativa blanca | Próximo paso concreto — diagnóstico o reunión de profundidad |
| Cierre | Fondo blanco | Logo [Company] + datos de contacto del estratega |

---

## Sistema visual aplicado

| Elemento | Valor |
|---|---|
| Tipografía display | Gabarito 900 — Google Fonts |
| Tipografía cuerpo | Plus Jakarta Sans — Google Fonts |
| Color principal | #EF2222 (rojo [Company]) |
| Color oscuro | #1F0C21 |
| Color transición | #2D1B4E (morado) |
| Color énfasis | #F8D53C (amarillo) |
| Fondo mapas | #EDE7F6 (lavanda) |
| Navegación | Scroll-snap vertical — cada sección = 100vh |
| Impresión | @media print — break-after por sección |

---

## Tipos de mapas SVG

| Tipo | Cuándo usarlo | Descripción |
|---|---|---|
| **Circular** | 4 principios sin jerarquía entre ellos | 4 nodos de color sobre arco circular — anotaciones flotantes externas |
| **Flujo horizontal** | Proceso de atracción / automatización | 5 columnas: Pilar → Audiencias → Canales → Mensajes → CTAs — flechas L en rojo |
| **Árbol** | Estructura de pauta digital | Raíz + 3 ramas (META / Google / LinkedIn) — conexiones en L rojo |

---

## Reglas críticas

**La idea transformadora no es un resumen de resultados.** Es una perspectiva nueva sobre el negocio del cliente — algo que cambia cómo piensan su marketing, no un recuento de lo que [Company] hace.

**Terminología obligatoria:**
- "Narrativa" — no "storytelling"
- "Mapa conceptual" — no "mapa mental"
- "Presentación estratégica de marketing" — no "pitch comercial"

**Sin lorem ipsum.** El documento se genera con contenido real del cliente desde el primer borrador.

**El documento es standalone.** Funciona sin conexión a internet una vez generado — las fuentes se cargan desde Google Fonts al momento de generar.

---

## Entorno de operación

| Entorno | Estado |
|---|---|
| **Claude.ai Project** (producción) | Project Instructions: contenido de `pitch-estrategico.skill.md` |
| **Claude Code** (backup / desarrollo) | Genera el HTML en local con el mismo prompt |

**Trigger de activación:** el usuario escribe `/pitch` en el Project de Claude.ai — el agente ejecuta el proceso automáticamente.

---

## Archivos de referencia

| Archivo | Descripción |
|---|---|
| `pitch-estrategico.skill.md` | Prompt completo — Project Instructions para Claude.ai |
| `pitch-demo.html` | Demo generado con Bancolombia como cliente de prueba |

---

## Versión y cambios

| Versión | Fecha | Cambio |
|---|---|---|
| v1.0 | Junio 2026 | Versión inicial — slide deck horizontal, diseño provisional |
| v1.1 | Junio 2026 | Corrección de ruta de archivos (Agentificación VENTAS → agentificación MKT) |
| v2.0 | Junio 2026 | Rediseño completo: sistema visual [Company] validado con screenshots Internexa · scroll-snap vertical · mapas conceptuales SVG (3 tipos) · 4 layouts HTML · terminología corregida · narrativa estratégica vs pitch comercial |
