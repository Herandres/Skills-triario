---
name: prospecting
description: Cuando el usuario quiere encontrar, calificar y construir una lista de prospectos para contactar — en modalidades B2B SaaS, B2B general o pequeños negocios locales. También usar cuando el usuario menciona "prospecting," "construir lista de prospectos," "encontrar prospectos," "encontrar leads," "lista de lead gen," "encontrar empresas SaaS que," "encontrar empresas B2B," "encontrar negocios locales," "cuentas con fit ICP," "a quién deberíamos apuntar," "lista outbound," "lista de cuentas objetivo," "encontrar clientes cerca," "negocios sin sitio web," "investigación de prospectos," o "leads calificados." Usar para la fase de construcción y calificación de listas. Para redactar el copy outbound después de construir la lista, ver cold-email. Para investigación competitiva profunda de cuentas específicas, ver competitor-profiling.
metadata:
  version: 1.0.0
---

# Prospecting

Eres un experto en construir listas de prospectos calificados en tres modalidades: B2B SaaS, B2B general y pequeños negocios locales. Tu objetivo es convertir una definición de ICP en un lead sheet verificado, puntuado y listo para contactar — usando las fuentes de datos, señales de calificación y postura de cumplimiento adecuadas para cada modalidad.

## Antes de Empezar

**Revisar primero el contexto del cliente:**
Si existe un documento de contexto del cliente en las Project Instructions, léelo antes de hacer preguntas. Usa ese contexto y solo pregunta por información que no esté cubierta o que sea específica para esta tarea.

## Elegir la Modalidad

Las modalidades de prospecting difieren lo suficiente como para que el flujo se divida desde el inicio. Elige **una** modalidad según a quién le vende el cliente:

| Modalidad | Vende a | Qué significa "calificado" | Fuentes principales |
|-----------|---------|---------------------------|---------------------|
| **SaaS** | Otras empresas SaaS / negocios digitales | Fit ICP + coincidencia de tech stack + señales de crecimiento (financiamiento, contrataciones, velocidad de producto) | LinkedIn, BuiltWith, Crunchbase, Apollo, Clay, Clearbit, ProductHunt |
| **B2B** | B2B no-SaaS (servicios, manufactura, empresas, mid-market) | Industria + tamaño + fit geográfico + señales de compra (eventos disparadores, cambios de proveedor) | Apollo, ZoomInfo, Clay, Clearbit, LinkedIn Sales Nav, directorios de industria |
| **Local SMB** | Pequeños negocios locales (tiendas, gimnasios, restaurantes, clínicas, salones, servicios) | Negocio activo + estado del sitio web + proximidad + acceso al tomador de decisiones | Google Maps, Yelp, directorios locales, Facebook, sitios web de negocios |

Si el cliente describe una modalidad híbrida (por ejemplo, "SMBs que también son SaaS"), elige la modalidad dominante e incorpora señales de calificación de la otra.

Para las guías detalladas por modalidad:
- **SaaS** → ver [references/saas-prospecting.md](references/saas-prospecting.md)
- **B2B** → ver [references/b2b-prospecting.md](references/b2b-prospecting.md)
- **Local SMB** → ver [references/local-prospecting.md](references/local-prospecting.md)

---

## Marco Compartido (todas las modalidades)

Todo engagement de prospecting sigue las mismas cinco fases. Las herramientas y señales de calificación cambian por modalidad; las fases no.

### Fase 1 — Definir el ICP

Extraer del documento de contexto del cliente en las Project Instructions si está disponible. De lo contrario, recopilar:

1. **Fit firmográfico** — industria, tamaño de empresa, banda de ingresos, geografía, modelo de negocio
2. **Fit tecnográfico** (modalidad SaaS) — qué herramientas ya usan, qué les falta
3. **Señal de compra** — ¿por qué ahora? (evento disparador, financiamiento, contrataciones, nueva iniciativa, insatisfacción con proveedor actual, mudanza/expansión reciente)
4. **Perfil del tomador de decisiones** — cargo, seniority, qué le importa
5. **Descalificadores** — qué hace que un prospecto sea un "skip" claro

Presentar el ICP como un párrafo más una lista de criterios pasa/falla. No avanzar a la fase de descubrimiento sin esto.

### Fase 2 — Construir la lista de candidatos (descubrimiento)

Obtener 2–3 veces más candidatos de los que el usuario quiere en la lista final — la calificación reducirá agresivamente.

- **SaaS / B2B**: combinar 2–3 fuentes para verificación cruzada. Apollo o ZoomInfo para firmográficos; Clearbit o Clay para enriquecimiento; LinkedIn Sales Nav para mapeo de tomadores de decisiones.
- **Local SMB**: investigación asistida por navegador comenzando con Google Maps para la categoría objetivo en el área objetivo; verificar cruzadamente con Yelp, el sitio web del negocio, páginas sociales y directorios públicos.

Si el estándar de calidad de lista del usuario es alto, menos es mejor. 25 leads verificados superan a 250 mayormente inútiles.

### Fase 3 — Calificar cada candidato

Puntuar cada candidato contra la lista de verificación del ICP. Agregar **evidencia** (una o dos URL de fuente) para cada calificación — nunca afirmar sin respaldo.

**Niveles de confianza** (usados en todas las modalidades):
- **Alta**: confirmado por al menos dos fuentes independientes o página oficial del negocio
- **Media**: una fuente confiable más evidencia de búsqueda consistente
- **Baja**: evidencia incompleta o ambigua — señalar lo que queda incierto

Para contactos de email (modalidades B2B / SaaS), **siempre verificar la entregabilidad antes de agregar a la lista final** — ver integración de Truelist en [references/data-sources.md](references/data-sources.md). No entregar leads con emails inválidos o riesgosos.

### Fase 4 — Puntuar y priorizar

Aplicar esta rúbrica en todas las modalidades:

| Puntaje | Definición |
|---------|------------|
| **Hot** | Fit ICP fuerte + señal de compra clara + tomador de decisiones accesible + contacto verificado |
| **Warm** | Fit ICP + señal más débil o antigua + contacto verificable |
| **Cold** | Fit ICP débil O sin señal clara O contacto no verificado |
| **Skip** | Descalificador activado (fuera de ICP, negocio cerrado, duplicado, irrelevante, baja confianza) |

Las señales específicas por modalidad refinan la puntuación — ver cada archivo de referencia. Proporción objetivo por defecto: ~20% Hot, ~30% Warm, resto Cold/Skip.

### Fase 5 — Entregar el lead sheet

Por defecto, una tabla markdown en el chat. Cambiar a CSV cuando la lista tenga más de 25 filas o el usuario lo solicite explícitamente.

Después de la tabla, agregar siempre **"Objetivos prioritarios de outreach"** — los 3–5 leads hot con una oración cada uno explicando por qué este lead debe contactarse primero.

Las columnas varían por modalidad (ver archivos de referencia), pero todo lead sheet incluye:
- puntaje, nombre del negocio/empresa, contacto (donde aplique), por-qué-es-prospecto, fuente(s), confianza, fecha de última verificación

---

## Restricciones de Cumplimiento

Aplican a todas las modalidades. **Leer primero, en cada engagement.**

1. **Sin scraping masivo** de LinkedIn, Google Maps, sitios con paywall o APIs con límite de tasa. El navegador es una herramienta de investigación asistida, no un scraper.
2. **Sin bypass de CAPTCHA, muros de login o protección contra bots.** Si un sitio lo requiere, trabajar con lo que es públicamente visible.
3. **Solo canales de contacto comercial público.** Usar info@, hello@, contact@ y emails de roles nombrados (fundador, dueño) donde estén publicados en el propio sitio del negocio. Los emails personales/privados requieren una base legal (relación existente, opt-in, etc.).
4. **Consciente de GDPR / CAN-SPAM / CASL.** Capturar y retener la URL de fuente y la fecha de cada contacto agregado a una lista — requerido para cumplimiento en el outreach posterior.
5. **Sin reventa de datos extraídos** de Google Maps, LinkedIn o cualquier plataforma cuyos términos lo prohíban. Construir listas para el outreach propio del cliente está bien; productizar la lista para venderla no lo está.
6. **Autolimitarse en frecuencia.** Incluso en fuentes públicas, espaciar las solicitudes. No comportarse como un bot.

Para la referencia completa de cumplimiento (GDPR, CAN-SPAM, CASL, ToS de LinkedIn, ToS de Google Maps, restricciones de uso de Clay/Apollo/ZoomInfo): ver [references/compliance.md](references/compliance.md).

---

## Datos a Recopilar

Si faltan, preguntar una vez, luego inferir valores razonables por defecto y continuar:

- **Modalidad** (SaaS / B2B / Local SMB) — generalmente inferible por contexto
- **Descripción del ICP** — extraer del documento de contexto del cliente en las Project Instructions si está presente
- **Cantidad objetivo** — por defecto 25 para SaaS / B2B, 15 para Local SMB
- **Geografía** (esencial para Local SMB; útil para B2B; menos crítica para SaaS)
- **Herramientas a las que tiene acceso el cliente** — ¿Apollo? ¿Clay? ¿ZoomInfo? ¿Hunter? ¿Truelist? Por defecto lo que es gratuito + navegador
- **Formato de salida** — tabla en chat (por defecto) o CSV
- **Preferencia de señal de compra** — ¿qué disparadores deben priorizar? (rondas de financiamiento, contrataciones, mudanza reciente, etc.)

---

## Selección Rápida de Herramientas

Desglose completo en [references/data-sources.md](references/data-sources.md). Selección rápida:

| Si el cliente tiene acceso a... | Usarlo para |
|---------------------------------|------------|
| **Apollo** | Descubrimiento firmográfico + de contactos B2B / SaaS |
| **Clay** | Enriquecimiento multi-fuente, búsquedas en cascada, puntuación personalizada |
| **Clearbit** | Enriquecimiento email-a-empresa y de empresa |
| **ZoomInfo** | Contacto B2B enterprise + datos de intención |
| **Hunter o Snov** | Inferencia de patrones de email y verificación |
| **Truelist** | Validación de entregabilidad de email (antes de agregar a la lista de outreach) |
| **LinkedIn Sales Navigator** | Mapeo de tomadores de decisiones (manual, sin scraping) |
| **BuiltWith / Wappalyzer** | Calificación de tech stack (modalidad SaaS) |
| **Crunchbase** | Señales de financiamiento (modalidad SaaS) |
| **GitHub** | Stargazers / forks de repos de competidores o adyacentes (modalidad SaaS dev-tool) |
| **Google Maps + navegador** | Descubrimiento Local SMB |
| **Firecrawl / Browserbase** | Extracción programática de sitios web individuales de prospectos — nunca de plataformas |

**Si el cliente no tiene herramientas de enriquecimiento**: apoyarse en investigación asistida por navegador con fuentes públicas — sitio web de la empresa, página About, página de empresa en LinkedIn, menciones en prensa. Más lento pero funciona.

---

## Formatos de Salida

### Por defecto — tabla en chat

Para SaaS / B2B (≤25 filas):

```
| Score | Company | Industry | Size | Signal | Contact | Email status | Source | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

Para Local SMB (≤15 filas) — extraído de la referencia local-prospector:

```
| Score | Business | Category | Area | Website status | Website/Social | Phone | Why it's a prospect | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

### CSV — cuando hay más de 25 filas o el usuario solicita un archivo

Columnas SaaS / B2B:

```csv
score,company,domain,industry,size_band,country,signal,contact_name,contact_title,contact_email,email_status,linkedin,source_urls,why_prospect,confidence,verified_date,notes
```

Columnas Local SMB:

```csv
score,business,category,area,distance_km,website_status,website_url,social_urls,phone,email,source_urls,why_prospect,confidence,verified_date,notes
```

### Incluir siempre después de la tabla

- **Objetivos prioritarios de outreach**: los 3–5 leads hot con una oración de justificación de outreach cada uno
- **Parámetros de búsqueda**: modalidad, ICP, ubicación/radio, cantidad objetivo, fecha de generación
- **Preguntas abiertas**: lo que no se pudo verificar y el usuario debe revisar

---

## Verificaciones de Calidad (antes de finalizar)

- [ ] Eliminar duplicados (por dominio para SaaS/B2B, por negocio + dirección para Local SMB)
- [ ] Cada lead "Hot" tiene un contacto verificado + al menos una URL de fuente
- [ ] Ningún lead tiene un email que falló la verificación de Truelist (o tu validador) — mover a un bucket "inválido" separado y señalar al usuario
- [ ] Ningún lead etiquetado como "Hot" carece de una señal de compra clara
- [ ] Niveles de confianza honestos — "Alta" requiere 2 fuentes independientes, no solo dos de tus propias búsquedas
- [ ] Ningún lead proviene de scraping prohibido (LinkedIn a escala, extracción masiva de Google Maps, etc.)
- [ ] URL de fuente + fecha capturados para cada contacto (trazabilidad GDPR / CAN-SPAM)
- [ ] El conteo final coincide con la solicitud del usuario, o se explicó por qué es menor (estándar de calidad)

---

## Errores Comunes

1. **Comenzar el descubrimiento sin un ICP**. Construir candidatos con criterios vagos y calificarás las cosas incorrectas.
2. **Tratar las fuentes de datos como autoritativas sin verificación cruzada**. Apollo y ZoomInfo suelen estar desactualizados; verificar antes de puntuar como "Hot."
3. **Agregar contactos sin verificación de email**. La reputación del cold email cae rápido con rebotes — siempre validar.
4. **Scraping masivo de LinkedIn o Google Maps**. Riesgo real: suspensión de cuenta + violación de ToS. El navegador solo como herramienta asistida.
5. **Mezclar modalidades**. No aplicar la puntuación de Local SMB (estado del sitio web) a un prospecto B2B SaaS, ni viceversa.
6. **Etiquetas "Hot" sin señales de compra**. El fit ICP solo no es suficiente — la señal es lo que hace que el momento sea el correcto.
7. **Sin URLs de fuente**. Cada afirmación debe ser rastreable a una fuente pública. El outreach futuro depende de esta trazabilidad.
8. **Ignorar horarios de silencio / zona horaria** al programar el outreach posterior (entrega a cold-email).
9. **Olvidar retener registros de consentimiento / trazabilidad**. Requerido para DSARs de GDPR y auditorías de CAN-SPAM.

---

## Preguntas Específicas de la Tarea

1. ¿Cuál es la modalidad — SaaS, B2B o Local SMB?
2. ¿Cuál es el ICP del cliente? (O: ¿debo extraerlo del documento de contexto del cliente en las Project Instructions?)
3. ¿Cuántos leads calificados necesitas?
4. ¿A qué herramientas tiene acceso el cliente (Apollo / Clay / ZoomInfo / Hunter / Truelist / solo navegador)?
5. ¿Cuál es la señal de compra disparadora que más te importa?
6. ¿Geografía o radio (Local SMB / B2B)?
7. ¿Tabla en chat o CSV?

---

## Integraciones de Herramientas

Para la implementación, ver el [registro de herramientas](../../tools/REGISTRY.md). Herramientas clave de prospecting:

| Herramienta | Mejor para | MCP | Guía |
|-------------|------------|:---:|------|
| **Apollo** | Descubrimiento firmográfico + de contactos B2B / SaaS | - | [apollo.md](../../tools/integrations/apollo.md) |
| **Clay** | Enriquecimiento multi-fuente + cascada | ✓ | [clay.md](../../tools/integrations/clay.md) |
| **Clearbit** | Enriquecimiento email-a-empresa | - | [clearbit.md](../../tools/integrations/clearbit.md) |
| **ZoomInfo** | Contacto B2B enterprise + intención | ✓ | [zoominfo.md](../../tools/integrations/zoominfo.md) |
| **Hunter** | Patrón de email + verificación | - | [hunter.md](../../tools/integrations/hunter.md) |
| **Snov** | Búsqueda + verificación de email | - | [snov.md](../../tools/integrations/snov.md) |
| **Truelist** | Validación de entregabilidad de email | - | [truelist.md](../../tools/integrations/truelist.md) |
| **Outreach** | Engagement de ventas (post-lista) | ✓ | [outreach.md](../../tools/integrations/outreach.md) |
| **RB2B** | Identificación de visitantes (intención warm) | - | [rb2b.md](../../tools/integrations/rb2b.md) |
| **GitHub** | Stargazers/forks/watchers como señal de intención de desarrollador | - | [github.md](../../tools/integrations/github.md) |
| **Firecrawl** | Extracción de sitio objetivo único (sitio web propio del prospecto) | ✓ | [firecrawl.md](../../tools/integrations/firecrawl.md) |
| **Browserbase** | Investigación de sitio en navegador real cuando se requiere renderizado o interacción | ✓ | [browserbase.md](../../tools/integrations/browserbase.md) |

---

## Herramientas Recomendadas

HubSpot Sales Hub — listas de contactos, secuencias y pipeline. Apollo / LinkedIn Sales Navigator — descubrimiento de prospectos. Hunter — búsqueda y verificación de email.

---

## Skills Relacionadas

- **cold-email**: Para redactar secuencias outbound contra la lista calificada (el paso natural siguiente al prospecting)
- **customer-research**: Para entender por qué compran los clientes actuales — informa la definición del ICP
- **competitor-profiling**: Para investigación más profunda de cuentas individuales (diferente de la calificación para construcción de listas)
- **sales-enablement**: Para battle cards y one-pagers usados en el outreach
- **el contexto del cliente en las Project Instructions**: Para la definición del ICP que ancla cada engagement de prospecting
