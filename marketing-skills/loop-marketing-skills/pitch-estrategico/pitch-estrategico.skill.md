---
skill: pitch-estrategico
version: 2.0
trigger: /pitch
input: nombre_cliente | sector | URL_web
output: Documento HTML plan estratégico · narrativa + mapas conceptuales SVG
autor: [Company] · 2026
---

# NARRATIVA ESTRATÉGICA · HABILIDAD [Company]

Genera el documento HTML de plan estratégico completo para el equipo de [Company].
No es una presentación comercial — es el documento de trabajo que el equipo presenta
internamente y usa para presentar el plan al cliente.

**Dos partes en un solo documento:**
- PARTE 1 · Narrativa (5 secciones, máx. 5 minutos)
- PARTE 2 · Mapas conceptuales SVG (estrategia visualizada)

---

## §1 — Propósito del sistema

**[Company]** es una agencia de marketing digital especializada en:
Estrategia de contenidos · SEO · Visibilidad en IA · Marketing de performance · Comunicación corporativa digital B2B y B2C.

**El problema que resuelve esta habilidad:**
Los planes que entrega [Company] suelen ser "cajitas de texto bien puestas" — saturados de información,
difíciles de presentar, sin narrativa que movilice al cliente. Esta habilidad genera un plan que:

- Abre con una verdad incómoda que el cliente reconoce pero nadie ha nombrado
- Construye la narrativa en orden: tensión → pivot → principio → ejecución
- Visualiza la estrategia con mapas conceptuales SVG (no texto en cajas)
- Usa el sistema visual de [Company]: rojo #EF2222, blanco, morado oscuro, amarillo

**La narrativa NO es** un recuento de resultados, métricas pasadas ni logros del año.
**La narrativa ES** una idea transformadora que reencuadra la situación del cliente como oportunidad.

---

## §2 — Trigger y formato de entrada

```
/pitch [nombre_cliente] | [sector] | [URL_web]
```

**Ejemplos:**
- `/pitch Bancolombia | Sector financiero | bancolombia.com`
- `/pitch EPM | Energía y utilities | epm.com.co`
- `/pitch Cementos Argos | Construcción B2B | argos.co`

Si falta algún campo, solicitarlo antes de continuar. Los tres son obligatorios.
Si el usuario escribe el nombre del cliente sin formato de comando, interpretar el intent y ejecutar.

---

## §3 — Proceso de investigación (ejecutar antes de generar)

### 3.1 · Análisis del sector
- ¿Cuál es la tensión estructural del sector en 2025-2026?
- ¿Qué está cambiando en cómo los clientes toman decisiones en este sector?
- ¿Qué hace toda la industria que ya no funciona (o funciona menos)?
- ¿Cuál es el "enemigo invisible" — el problema de fondo que nadie nombra abiertamente?
- ¿Cómo está cambiando el customer journey por la IA y el cambio en búsqueda?

### 3.2 · Análisis del cliente desde su URL
- ¿Cómo se comunica hoy? ¿Qué posicionamiento tiene actualmente?
- ¿Qué no está diciendo que sus clientes buscan saber?
- ¿Hay una brecha entre cómo se presenta y cómo debería presentarse?

### 3.3 · Construcción de la idea transformadora
Una sola idea que conecte: tensión del sector + oportunidad del cliente + capacidad de [Company].
No puede ser genérica. El cliente debe pensar "nadie me había dicho esto así."

Test de verificación:
*"En [sector], [lo que todos hacen] ya no funciona porque [razón estructural].
[Cliente] tiene la oportunidad de [acción transformadora] antes que su competencia."*

---

## §4 — Arquitectura narrativa · PARTE 1

Cinco secciones en orden fijo. Cada sección = un slide (ver layouts en §5).

### SECCIÓN 1 · EL GANCHO — La verdad incómoda
**Layout:** NARRATIVA BLANCA
**Objetivo:** Una frase que el cliente piensa pero nadie ha dicho en voz alta.
**Extensión:** 1-2 frases grandes + 1-2 líneas de contexto en gris.
**Patrón:** "Estamos en medio de [la crisis/tensión] que [escala/impacto]."
**Palabras clave:** en `<strong>` — no cambia color, solo peso tipográfico.
**Regla:** Nunca empezar con [Company]. Nunca empezar con servicios. El mundo del cliente primero.

### SECCIÓN 2 · EL PIVOT — La tensión como oportunidad
**Layout:** NARRATIVA BLANCA
**Objetivo:** Reencuadrar la misma tensión: de amenaza a oportunidad.
**Patrón:** "En un mundo donde [la tensión está a la orden del día]... [el activo estratégico] se vuelve **el activo más valioso.**"
**Palabras clave:** en `<strong>`.

### SECCIÓN 3 · EL DIAGNÓSTICO — Lo que está cambiando
**Layout:** BULLETS ROJOS
**Objetivo:** 2-4 bullets precisos que muestran comprensión estructural del sector.
**Regla:** No síntomas — cambios estructurales. Al menos 1 sobre IA o customer journey fragmentado.
**Ejemplo:** "• El journey ya no es lineal" / "• El control sobre el cliente se fragmentó"

### SECCIÓN 4 · LA IDEA TRANSFORMADORA
**Layout:** TRANSICIÓN OSCURA
**Objetivo:** El principio que lo cambia todo. Una frase de máximo impacto.
**Patrón:** "Cómo [verbo transformador] el [elemento del plan] para que sea **[atributo 1]** y **[atributo 2]**"
**Palabras clave:** en amarillo #F8D53C.

### SECCIÓN 5 · LO QUE VAMOS A CONSTRUIR — El rol de [Company]
**Layout:** COLUMNA ROJA
**Objetivo:** 3-4 frentes concretos de ejecución.
**Panel rojo izquierdo:** "Vamos a construir [idea corta] con >"
**Panel blanco derecho:** bullets con **palabras en negrita** — una por frente.
**Regla:** Cada frente conecta con el diagnóstico. No listar servicios genéricos.
**Obligatorio:** Al menos 1 frente sobre visibilidad en IA o SEO.

---

## §5 — Sistema visual [Company] · Layouts y CSS

### Tipografía
```html
<link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;700;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700&display=block" rel="stylesheet">
```
- Titulares: `'Gabarito', Georgia, serif` · weight 900 · letter-spacing: -1.5px a -3px
- Cuerpo: `'Plus Jakarta Sans', system-ui, sans-serif` · weight 400-600

### Paleta de colores
```css
--red:        #EF2222;   /* Rojo [Company] — paneles, bullets, títulos, flechas, íconos */
--dark:       #1F0C21;   /* Negro oscuro [Company] — texto principal */
--morado:     #2D1B4E;   /* Fondo transición oscura */
--yellow:     #F8D53C;   /* Amarillo — highlight en fondos oscuros */
--white:      #FFFFFF;
--lavanda-bg: #EDE7F6;   /* Fondo suave para mapa circular */
--panel:      #221125;   /* Panel oscuro alternativo */
```

### Estructura base del documento
```css
html { scroll-snap-type: y mandatory; overflow-y: scroll; height: 100%; }
.slide { height: 100vh; scroll-snap-align: start; position: relative; overflow: hidden; }
/* Logo [Company]: position absolute, top: 32px, left: 48px, Gabarito 900, 16px */
/* Numerador: position absolute, bottom: 28px, right: 36px, Plus Jakarta Sans, 10px, opacidad 0.3 */
@media print { html { scroll-snap-type: none; } .slide { break-after: page; } }
```

---

### LAYOUT TYPE A · NARRATIVA BLANCA
Uso: Gancho, Pivot, CTA de cierre.

```css
background: #FFFFFF;
/* Degradado lavanda-rosa decorativo esquina derecha */
/* ::after o div.deco: radial-gradient(ellipse 55% 65% at 95% 55%,
   rgba(195,155,215,0.22) 0%, rgba(255,180,180,0.14) 45%, transparent 70%) */

Contenido centrado o izquierda:
  font-family: Gabarito, serif
  font-size: clamp(32px, 4.5vw, 68px)
  font-weight: 900
  color: #1F0C21
  line-height: 1.1
  letter-spacing: -1.5px
  max-width: 820px
  padding: 10vh 12vw

strong { font-weight: 900; /* mismo color */ }
```

---

### LAYOUT TYPE B · COLUMNA ROJA
Uso: "Lo que vamos a construir" (SECCIÓN 5).

```css
display: flex; height: 100vh;

.panel-red {
  width: 52%; background: #EF2222;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 60px 48px;
  /* Círculos decorativos: position absolute, bottom -80px, left -80px,
     width 320px, height 320px, border-radius 50%, background rgba(255,255,255,0.07) */
}
.panel-red p {
  font-family: Gabarito; font-size: clamp(28px, 3.5vw, 52px); font-weight: 700;
  color: #FFFFFF; line-height: 1.05; letter-spacing: -1px;
}

.panel-white {
  width: 48%; background: #FFFFFF;
  display: flex; flex-direction: column; justify-content: center;
  padding: 60px 52px;
}
.bullet-item {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 14px 0; border-bottom: 1px solid rgba(31,12,33,0.07);
  font-family: Gabarito; font-size: clamp(15px, 1.5vw, 20px);
  font-weight: 700; color: #1F0C21;
}
.bullet-item strong { font-weight: 900; }
```

---

### LAYOUT TYPE C · BULLETS ROJOS
Uso: Diagnóstico, retos, cambios estructurales (SECCIÓN 3).

```css
background: #FFFFFF;
padding: 8vh 12vw;

/* Formas geométricas decorativas esquina derecha */
.deco-circle {
  position: absolute; right: -60px; top: 20%;
  width: 300px; height: 300px; border-radius: 50%;
  background: rgba(195,155,215,0.15);
}
.deco-semi {
  position: absolute; right: -80px; bottom: -60px;
  width: 280px; height: 280px; border-radius: 50%;
  background: rgba(255,180,180,0.10);
}

.bullet-red {
  color: #EF2222;
  font-family: 'Plus Jakarta Sans'; font-size: clamp(18px, 2vw, 28px);
  font-weight: 600; line-height: 1.5; margin-bottom: 16px;
}
```

---

### LAYOUT TYPE D · TRANSICIÓN OSCURA
Uso: La idea transformadora (SECCIÓN 4).

```css
background: #2D1B4E;
display: flex; align-items: center; justify-content: center;
padding: 12vh 12vw; text-align: center;

p {
  font-family: Gabarito; font-size: clamp(32px, 4.5vw, 64px);
  font-weight: 900; color: #FFFFFF;
  line-height: 1.2; letter-spacing: -1.5px; max-width: 860px;
}
strong, em { color: #F8D53C; font-style: normal; font-weight: 900; }
```

---

### PORTADA
```css
display: flex; height: 100vh;

.portada-panel {
  width: 42%; background: #EF2222;
  display: flex; flex-direction: column; padding: 48px 40px;
  /* Círculos deco: rgba(255,255,255,0.07-0.08) */
}
.portada-panel .logo { font-family: Gabarito; font-size: 22px; font-weight: 900; color: #FFFFFF; }
.portada-panel .plan-tag {
  margin-top: auto;
  font-family: Plus Jakarta Sans; font-size: 11px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.55);
  margin-bottom: 10px;
}
.portada-panel .plan-title {
  font-family: Gabarito; font-size: clamp(14px,1.5vw,20px); font-weight: 700;
  color: rgba(255,255,255,0.40);
}

.portada-content {
  width: 58%; background: #FFFFFF;
  display: flex; flex-direction: column; justify-content: center; padding: 64px 52px;
  /* Degradado lavanda-rosa top-right */
}
.portada-content .client-name {
  font-family: Gabarito; font-size: clamp(52px, 8vw, 120px); font-weight: 900;
  color: #1F0C21; letter-spacing: -3px; line-height: 0.90;
}
.portada-content .client-sector {
  font-family: Plus Jakarta Sans; font-size: clamp(12px,1.2vw,16px); font-weight: 600;
  text-transform: uppercase; letter-spacing: 2px; color: rgba(31,12,33,0.40);
  margin-top: 20px;
}
```

---

## §6 — Mapas conceptuales SVG · PARTE 2

Generar después de la narrativa. Elegir tipos según el contenido del plan.

---

### TIPO 1 · MAPA CIRCULAR — Los principios estratégicos
**Cuándo usarlo:** Cuando el plan tiene 3-4 pilares o frentes de ejecución centrales.
**Fondo:** `#EDE7F6` (lavanda suave).
**Título sobre el mapa:** "[Cliente] · Pilares estratégicos"

**SVG `viewBox="0 0 960 580"`:**

```
Arco central:
  <circle cx="480" cy="290" r="175" fill="none"
    stroke="rgba(150,100,200,0.40)" stroke-width="2"/>

4 nodos rectangulares redondeados — colores fijos:
  TOP    (480, 95)  → color #009688 (teal)
  RIGHT  (685, 290) → color #1565C0 (azul)
  BOTTOM (480, 490) → color #6A1B9A (violeta)
  LEFT   (275, 290) → color #880E4F (morado)

Cada nodo: rect width=190, height=70, rx=12, fill=[color]
Texto blanco: Gabarito 700, 13-15px, centrado, máx. 2 líneas

Centro del arco: nombre del cliente, Gabarito 900, 18px, #1F0C21

Anotaciones flotantes (sin caja):
  Cerca de cada nodo, fuera del arco
  Plus Jakarta Sans 12px, #1F0C21, máx. 3 líneas, text-anchor según posición

Formas decorativas izquierda (triangle + circle en azul lavanda, opacidad 0.2)
```

---

### TIPO 2 · MAPA DE FLUJO HORIZONTAL — Proceso de atracción
**Cuándo usarlo:** Cuando el plan define canales de activación (email, WhatsApp, pauta, SEO).
**Fondo:** `#FFFFFF`.
**Título rojo arriba:** `"[SEGMENTO/PILAR] > ¿Cómo será el proceso de atracción?"`
  — `font-family: Gabarito, font-weight: 700, font-size: 18px, color: #EF2222`

**SVG `viewBox="0 0 1100 520"` — 5 columnas:**

```
COL 1 — Pilar (x≈70):
  Ícono SVG grande (rojo #EF2222) + texto "Pilar\n[Nombre]" Gabarito 700 rojo

COL 2 — Audiencias (x≈220, nodos verticales):
  Nodo A: ícono persona + "BBDD HubSpot" + detalles pequeños (subsegmento, etapa ciclo)
  Nodo B: ícono personas + "Visitantes sitio web"
  Nodo C: ícono personas grupo + "ICP Audiencia" + criterios ICP

COL 3 — Canales (x≈480, nodos verticales):
  Usar íconos SVG simples + etiquetas:
  ✉ Correo One Shot | 📱 WhatsApp Marketing | 🌐 PopUp | 💼 LinkedIn Ads | 📣 Pauta digital

COL 4 — Mensajes (x≈680):
  Texto por canal, Plus Jakarta Sans 11px, #1F0C21, máx. 3 líneas

COL 5 — CTAs/Landing (x≈930):
  Triángulo invertido (▼) rojo + etiqueta de landing page
  Flecha vertical ↕ entre dos opciones si aplica

CONEXIONES (todas en #EF2222, stroke-width 1.5):
  Líneas en L: horizontal → baja verticalmente → horizontal hacia siguiente columna
  Flechas al final de cada línea horizontal: marcador de flecha en rojo
  Todas las flechas apuntan en la dirección del flujo (de izquierda a derecha)
```

---

### TIPO 3 · ÁRBOL DE CAMPAÑAS — Estructura de pauta
**Cuándo usarlo:** Cuando el plan incluye campañas digitales estructuradas (Meta, Google, LinkedIn).
**Fondo:** `#FFFFFF`.
**Headers en bloques rojos:** recuadros `background: #EF2222, color: white, padding: 6px 16px, rx: 4`

**SVG `viewBox="0 0 1100 580"` — estructura árbol de izquierda a derecha:**

```
Raíz (x=80): ícono megáfono (rojo) + "Pauta digital" Gabarito 700

Ramas primarias (x=280): META Ads / Google Ads / LinkedIn Ads
  Texto simple sin caja, Gabarito 700, #1F0C21

Sub-ramas geografía (x=500): Colombia / Perú / EE.UU. (según aplique)

Sub-ramas audiencia/conjunto (x=720): nombres de segmentos, conjuntos de anuncios

Nodo callout (una nota importante):
  rect con fill: #EF2222, color: white, rx: 8, texto bold

CONEXIONES (todas en #EF2222, stroke-width 1.5):
  Líneas en L: horizontal desde nodo padre hasta punto X intermedio,
  luego vertical desde ese punto hasta nivel de hijos,
  luego horizontal desde ese punto hasta cada hijo
  Sin flechas (árbol organizacional)
```

---

### Regla de selección de mapas

| Tipo de plan | Mapas a generar |
|---|---|
| Solo estrategia (sin tácticas) | Tipo 1 únicamente |
| Estrategia + canales de activación | Tipo 1 + Tipo 2 |
| Estrategia + campañas de pauta | Tipo 1 + Tipo 3 |
| Plan completo | Tipo 1 + Tipo 2 + Tipo 3 |

Cuando no haya info suficiente para el Tipo 2 o 3, generar Tipo 1 y dejar placeholder
con instrucción: `[Completar con: canales / segmentos / geografías del plan]`

---

## §7 — Tono y voz [Company]

**[Company] habla así:**
- Directo. No suaviza.
- Nombra lo incómodo como apertura, no como cierre.
- Usa metáforas del mundo del cliente, no del marketing.
- Orden siempre: tensión → pivot → principio → ejecución.

**[Company] NO hace:**
- Recuento de resultados como apertura narrativa
- Listar servicios sin conectarlos a un problema real
- Hablar de sí mismo antes de hablar del cliente
- Usar: "storytelling", "ecosistema digital", "contenido de valor", "estrategia 360°"
- Decir "ofrecemos" — decir "construimos" o "ejecutamos"

**Terminología obligatoria:**
- "narrativa" — no "storytelling"
- "mapa conceptual" — no "mapa mental"
- "plan estratégico" o "presentación estratégica de marketing" — no "presentación comercial"

---

## §8 — Salida esperada

**1. Resumen en el chat** (referencia rápida del estratega):
- 5 bloques: Gancho · Pivot · Diagnóstico · Idea · Rol [Company]
- Máximo 300 palabras en total

**2. Documento HTML completo:**
- Scroll-snap por sección, cada sección = 100vh
- PARTE 1: Portada + 5 slides narrativos (4 layout types)
- PARTE 2: 1-3 slides de mapas SVG (según tipo de plan)
- Google Fonts: Gabarito + Plus Jakarta Sans
- Logo "[Company]" visible en cada sección (posición fija top-left)
- Numerador de slide bottom-right
- `@media print { break-after: page }` — imprimible a PDF

---

*pitch-estrategico · v2.0 · [Company] · 2026*
