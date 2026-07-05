# Guía del Kit de Skills MKT

Kit de 20 skills de inteligencia de marketing para equipos de agencia.
Cada skill es un archivo de instrucciones que se carga en Claude.ai como una habilidad especializada.

---

## Cómo usar este kit

### Paso 1 — Crear el Project del cliente en Claude.ai
1. Entra a claude.ai y haz clic en **Projects** en el panel izquierdo
2. Crea un nuevo proyecto con el nombre del cliente
3. Abre el archivo `README.md` de este kit, llénalo con los datos del cliente y pega el contenido completo en el campo **Project Instructions** del proyecto

### Paso 2 — Cargar las skills en el proyecto
1. Dentro del proyecto, busca la opción **Skills** o **Habilidades** en el panel lateral
2. Haz clic en **Nueva skill** o **Agregar skill**
3. Abre el archivo `.md` de la skill que quieres cargar (ej: `skills/copywriting.md`)
4. Copia el contenido completo y pégalo en el editor de la skill
5. Guarda con el nombre exacto del archivo sin la extensión (ej: `copywriting`)
6. Repite para cada skill que el equipo vaya a usar

### Paso 3 — Usar una skill en el chat
- Escribe `/nombre-skill` para invocar la skill directamente (ej: `/copywriting`)
- O describe la tarea y Claude usará la skill que corresponda automáticamente
- El contexto del cliente (del Paso 1) se aplica en cada conversación dentro del proyecto

### Recomendación de adopción
No cargues las 20 skills de una vez. Empieza con las 5 de **Ejecución diaria** y agrega más según las necesidades del cliente.

---

## Estructura del kit

```
marketingskills/
├── README.md           ← Plantilla de contexto de cliente (llenar una vez por cliente)
├── GUIA_KIT.md         ← Este archivo
└── skills/
    ├── copywriting.md
    ├── copy-editing.md
    ├── social.md
    ├── emails.md
    ├── cold-email.md
    ├── marketing-plan.md
    ├── content-strategy.md
    ├── customer-research.md
    ├── competitor-profiling.md
    ├── marketing-ideas.md
    ├── sales-enablement.md
    ├── lead-magnets.md
    ├── launch.md
    ├── ads.md
    ├── marketing-psychology.md
    ├── public-relations.md
    ├── pricing.md
    ├── co-marketing.md
    ├── prospecting.md
    └── community-marketing.md
```

---

## Skills por categoría

### FASE 1 — Ejecución diaria

Skills de uso frecuente para producir entregables del día a día.

---

#### `copywriting`
**Qué es:** Experto en redacción de copy de conversión para cualquier página web o pieza de marketing.

**Para qué sirve:**
- Escribir o reescribir homepages, landing pages, páginas de precios y páginas de funcionalidades
- Crear propuestas de valor, taglines, subtitulares y CTAs
- Redactar copy de hero sections y secciones de producto
- Mejorar textos que no están convirtiendo o que "se sienten débiles"

**Herramientas:** HubSpot CMS · Webflow · WordPress · Canva / Adobe

---

#### `copy-editing`
**Qué es:** Editor especializado en copy de marketing que revisa y mejora piezas existentes con un proceso sistemático de 7 pasadas.

**Para qué sirve:**
- Revisar y pulir cualquier pieza de copy antes de publicar
- Refrescar contenido desactualizado de clientes
- Identificar problemas de claridad, voz, especificidad y llamadas a la acción
- Auditar textos que "se leen raro" o son demasiado extensos

**Herramientas:** Aplica sobre contenido de cualquier plataforma

---

#### `social`
**Qué es:** Estratega de redes sociales experto en creación de contenido, programación, video corto y social listening para múltiples plataformas.

**Para qué sirve:**
- Crear posts para LinkedIn, Instagram, TikTok, Twitter/X y Facebook
- Armar calendarios de contenido y pilares editoriales
- Escribir guiones de Reels, TikToks y YouTube Shorts
- Reutilizar contenido largo en múltiples formatos
- Monitorear menciones de marca y actividad de competidores

**Herramientas:** HubSpot Social · Meta Business Suite · LinkedIn · Canva / Adobe

---

#### `emails`
**Qué es:** Experto en diseño de secuencias de email automatizadas para cada etapa del ciclo de vida del cliente.

**Para qué sirve:**
- Diseñar secuencias de bienvenida, nurture, reactivación y onboarding
- Definir estructura, tiempos y CTAs de cada email de la secuencia
- Crear campañas de email para promociones, actualizaciones de producto y newsletters
- Optimizar secuencias existentes que tienen baja apertura o conversión

**Herramientas:** HubSpot Marketing Hub · HubSpot Sales Hub (secuencias)

---

#### `cold-email`
**Qué es:** Redactor especializado en correos de prospección B2B que suenan humanos y generan respuestas reales.

**Para qué sirve:**
- Escribir correos en frío para prospectos B2B
- Crear secuencias de seguimiento de 3 a 5 toques
- Redactar líneas de asunto que se abren
- Personalizar mensajes según el perfil del prospecto (rol, empresa, señal de activación)

**Herramientas:** HubSpot Sales Hub · Apollo / LinkedIn Sales Navigator · Hunter

---

### FASE 2 — Estrategia y diagnóstico

Skills para el proceso de arranque con un cliente nuevo o para definir dirección estratégica.

---

#### `marketing-plan`
**Qué es:** Estratega de marketing al nivel de CMO fraccional que produce planes de 13 secciones estructurados por AARRR.

**Para qué sirve:**
- Construir el plan de marketing completo de un cliente (90 días + 12 meses)
- Auditar el estado actual del marketing con una rúbrica de 17 secciones
- Definir prioridades de adquisición, activación, retención, referidos e ingresos
- Entregar un documento listo para presentar a fundadores o inversores

**Herramientas:** HubSpot (todos los hubs) · Google Analytics 4 · Google Search Console · Semrush / Ahrefs · Google Ads · Meta Ads Manager

---

#### `content-strategy`
**Qué es:** Estratega de contenido que define qué crear, sobre qué temas y en qué orden para generar tráfico y autoridad.

**Para qué sirve:**
- Definir pilares de contenido y clusters de temas para un cliente
- Crear el roadmap editorial con prioridades por etapa del funnel
- Identificar oportunidades de contenido que los competidores no están cubriendo
- Analizar exports de keywords y transformarlos en un plan accionable

**Herramientas:** Semrush / Ahrefs · Google Search Console · Google Analytics 4 · HubSpot Blog

---

#### `customer-research`
**Qué es:** Investigador experto en voz del cliente que extrae señales reales de transcripts, encuestas, reseñas y comunidades online.

**Para qué sirve:**
- Analizar transcripts de entrevistas o llamadas de ventas para extraer pain points y lenguaje del cliente
- Construir personas de comprador basadas en datos reales, no en suposiciones
- Minar reseñas de G2, Capterra o Reddit para encontrar el lenguaje exacto de la audiencia
- Sintetizar hallazgos en reportes de VOC y bancos de frases para usar en copy

**Herramientas:** HubSpot CRM (notas, tickets, historial de correos) · Google Analytics 4 · Semrush

---

#### `competitor-profiling`
**Qué es:** Analista de inteligencia competitiva que construye perfiles estructurados de competidores a partir de sus URLs.

**Para qué sirve:**
- Perfilar competidores directos e indirectos de un cliente
- Extraer posicionamiento, precios, audiencias y estrategia de contenido de cada competidor
- Identificar gaps y oportunidades que el mercado no está atendiendo
- Documentar perfiles en HubSpot CRM para consulta del equipo comercial

**Herramientas:** Semrush / Ahrefs · HubSpot CRM (empresas competidoras)

---

#### `marketing-ideas`
**Qué es:** Biblioteca de 139 ideas de marketing probadas, filtradas y priorizadas según el contexto del cliente.

**Para qué sirve:**
- Desbloquear sesiones de ideación cuando el equipo no sabe por dónde empezar
- Encontrar tácticas específicas según el presupuesto, etapa y canal del cliente
- Descubrir estrategias de crecimiento que el cliente no ha intentado todavía
- Complementar el `marketing-plan` con el banco completo de ideas por etapa AARRR

**Herramientas:** No requiere herramientas específicas — las ideas son insumos estratégicos

---

### FASE 3 — Habilitación

Skills para proyectos específicos de alto impacto.

---

#### `sales-enablement`
**Qué es:** Experto en material de ventas B2B que crea los activos que usa el equipo comercial para cerrar negocios.

**Para qué sirve:**
- Construir pitch decks de 10 a 12 diapositivas con estructura narrativa
- Crear one-pagers y leave-behinds para reuniones comerciales
- Documentar el manejo de las principales objeciones con evidencia
- Escribir guiones de demo y talk tracks por tipo de buyer
- Armar playbooks de ventas y tarjetas de persona compradora

**Herramientas:** HubSpot Sales Hub · HubSpot CRM (pipeline y contexto de deals)

---

#### `lead-magnets`
**Qué es:** Especialista en diseño y distribución de lead magnets para captura de emails y generación de leads calificados.

**Para qué sirve:**
- Definir qué tipo de lead magnet tiene más sentido para la audiencia del cliente
- Planear la estructura del contenido: guías, checklists, templates, cheat sheets
- Diseñar el flujo completo: landing page → descarga → secuencia de email post-descarga
- Optimizar lead magnets existentes con baja tasa de conversión

**Herramientas:** HubSpot Marketing Hub · HubSpot CMS · Canva / Adobe

---

#### `launch`
**Qué es:** Estratega de lanzamientos que coordina todos los canales para maximizar el impacto de una salida al mercado.

**Para qué sirve:**
- Planificar el lanzamiento de un producto, feature o campaña con checklist completo
- Definir el mensaje central, los canales y la secuencia de activación
- Coordinar email, redes sociales, pauta y PR en una línea de tiempo unificada
- Preparar lanzamientos en Product Hunt, early access y programas de beta

**Herramientas:** HubSpot Marketing Hub · Google Ads · Meta Ads Manager · HubSpot Social · Canva / Adobe

---

#### `ads`
**Qué es:** Estratega de pauta digital especializado en Google Ads, Meta Ads y LinkedIn Ads para campañas B2B y B2C.

**Para qué sirve:**
- Definir la estrategia de pauta: plataformas, audiencias, presupuesto y objetivos
- Estructurar campañas con convenciones de nombres, grupos de anuncios y tipos de concordancia
- Planear estrategias de retargeting segmentadas por intención
- Diagnosticar campañas con bajo ROAS o CPA elevado y proponer acciones concretas

**Herramientas:** Google Ads · Meta Ads Manager · LinkedIn Ads Manager · Google Analytics 4 · HubSpot Ads

---

#### `marketing-psychology`
**Qué es:** Marco de psicología del comportamiento aplicado al marketing para entender cómo piensan y deciden los compradores.

**Para qué sirve:**
- Aplicar principios de persuasión (escasez, prueba social, anclaje, aversión a la pérdida) a copy y campañas
- Diseñar experiencias de compra que reduzcan la fricción cognitiva
- Enriquecer estrategias de pricing, onboarding y CRO con fundamentos de behavioral science
- Revisar piezas de marketing existentes con la lente de los sesgos cognitivos

**Herramientas:** No requiere herramientas específicas — aplica como lente sobre cualquier otra skill

---

### FASE 4 — Soporte

Skills de uso puntual para necesidades específicas de clientes.

---

#### `public-relations`
**Qué es:** Estratega de relaciones públicas y medios ganados especializado en prensa, pitches a periodistas y newsjacking.

**Para qué sirve:**
- Redactar comunicados de prensa listos para enviar
- Identificar periodistas y medios relevantes para el cliente
- Construir el pitch de historia para conseguir cobertura editorial
- Aprovechar noticias del momento para posicionar al cliente (newsjacking)

**Herramientas:** No requiere herramientas específicas — el output son textos listos para enviar

---

#### `pricing`
**Qué es:** Consultor de estrategia de precios y empaquetamiento para productos y servicios.

**Para qué sirve:**
- Definir o revisar la estructura de precios de un cliente (tiers, freemium, por uso, por asiento)
- Evaluar si el pricing actual refleja el valor percibido por la audiencia
- Diseñar la arquitectura de planes para maximizar conversión y expansión
- Aplicar metodologías como Van Westendorp o análisis de disposición a pagar

**Herramientas:** No requiere herramientas específicas — el output es un documento estratégico

---

#### `co-marketing`
**Qué es:** Estratega de alianzas y campañas de co-marketing para crecer a través de socios complementarios.

**Para qué sirve:**
- Identificar socios potenciales de co-marketing para un cliente
- Planear campañas conjuntas, webinars o contenido co-creado
- Estructurar acuerdos de promoción cruzada y newsletter swaps
- Diseñar el plan de activación de una alianza específica

**Herramientas:** HubSpot CRM · HubSpot Marketing Hub

---

#### `prospecting`
**Qué es:** Especialista en construcción y calificación de listas de prospectos para outbound B2B.

**Para qué sirve:**
- Definir el ICP y los criterios de calificación de prospectos para un cliente
- Construir listas de cuentas objetivo con criterios específicos (industria, tamaño, señales de intención)
- Identificar las fuentes de datos y herramientas para encontrar los contactos correctos
- Preparar la lista antes de pasar al cold-email

**Herramientas:** HubSpot Sales Hub · Apollo / LinkedIn Sales Navigator · Hunter

---

#### `community-marketing`
**Qué es:** Estratega de comunidades online para impulsar crecimiento orgánico, lealtad y voz a voz.

**Para qué sirve:**
- Diseñar la estrategia de comunidad de un cliente desde cero
- Planear el contenido y la dinámica de engagement para comunidades en Discord, Slack o grupos de Facebook
- Construir programas de embajadores y evangelizadores de marca
- Definir métricas y rituales para mantener una comunidad activa a largo plazo

**Herramientas:** HubSpot Social · Meta Business Suite · LinkedIn · HubSpot Marketing Hub

---

## Resumen rápido

| Skill | Categoría | Entregable principal |
|---|---|---|
| `copywriting` | Ejecución diaria | Copy de páginas y piezas web |
| `copy-editing` | Ejecución diaria | Copy revisado y mejorado |
| `social` | Ejecución diaria | Contenido para redes y video corto |
| `emails` | Ejecución diaria | Secuencias de email automatizadas |
| `cold-email` | Ejecución diaria | Correos de prospección B2B |
| `marketing-plan` | Estrategia | Plan de 13 secciones AARRR |
| `content-strategy` | Estrategia | Roadmap editorial y pilares de contenido |
| `customer-research` | Estrategia | Reporte VOC y personas del comprador |
| `competitor-profiling` | Estrategia | Perfiles estructurados de competidores |
| `marketing-ideas` | Estrategia | Banco de 139 ideas priorizadas |
| `sales-enablement` | Habilitación | Pitch decks, one-pagers, playbooks |
| `lead-magnets` | Habilitación | Lead magnet completo con flujo de captura |
| `launch` | Habilitación | Plan de lanzamiento multi-canal |
| `ads` | Habilitación | Estrategia de pauta y estructura de campañas |
| `marketing-psychology` | Habilitación | Marco de persuasión aplicado |
| `public-relations` | Soporte | Comunicados y pitches de prensa |
| `pricing` | Soporte | Estrategia de precios y empaquetamiento |
| `co-marketing` | Soporte | Plan de alianzas y campañas conjuntas |
| `prospecting` | Soporte | Lista de prospectos calificados |
| `community-marketing` | Soporte | Estrategia de comunidad online |
