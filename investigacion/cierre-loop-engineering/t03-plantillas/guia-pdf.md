# T3 · Plantillas HTML a PDF: estilos de cierre y CSS de impresión

Rama: `claude/cierre-le-t03-plantillas` · Fecha de la corrida: 2026-11-19 · Proyecto: cierre de Loop Engineering (Triario).

Pregunta: ¿qué estilos de documento de cierre existen y cómo se hace un HTML que se imprima bien en PDF?

Entregables: seis plantillas en `plantillas/` (`01-formal`, `02-editorial`, `03-informe-anual`, `04-portafolio-casos`, `05-linea-de-tiempo`, `06-plano-tecnico`) y la galería `plantillas/index.html`. Todas llevan solo marcadores como [Título de la sección], el recuadro [logo], la paleta de Triario y las fuentes Gabarito y Plus Jakarta Sans de Google Fonts.

## 1. Lo que leí de la pizarra

Revisé las ramas `origin/claude/cierre-le-*`. No existe todavía una rama de T5, T7, T8 ni de otras tareas que no listé; las que había eran t00, t01, t02, t04, t06, t13, t14 y t15.

| Archivo | Qué tomé |
|---|---|
| `t02-cierre/estandares.md` | El índice **3.1 Formal** (10 secciones) estructura la plantilla 01 y parte de la 03. El **3.3 Narrativo** (10 capítulos) guía la 02 y la 05. Ahí también está su sección «Dominios que no abrieron» (PMI, PRINCE2, Scrum Guide, govtech): no los intenté. |
| `t04-mostrar-loop/innovacion.md` | Las ideas 4 (diagrama de tubería con vueltas) y 6 (carriles de tiempo) se volvieron la plantilla 06 (nodos, reintento, parada) y los carriles de la 05. La conclusión «lo que sobrevive al PDF es el diagrama de tubería» respalda el plano técnico. Sus dominios caídos (simonwillison.net, everettjf.github.io) tampoco los intenté. |
| `t15-patrones/patrones.md` | No lo abrí. Solo sé por t02 que existe un catálogo de patrones; el campo «Patrón» de la plantilla 04 queda como marcador. |
| `t06-evidencia/evidencia.md` (solo un fragmento de §2.3 visto en una búsqueda de texto) | La regla «una fila por caso, en pasado, con seis campos» (contexto, acción propia, acción del equipo, resultado, evidencia, patrón); la plantilla 04 la usa. No leí el archivo completo. |
| `t13-explorador/diario.md` | Solo la nota de dominios: stripe.dev y uber.com no resuelven. Irrelevante para esta tarea. |

No leí a fondo `t01-tesis`, `t14-aterrizador` ni `t00-prueba`: no aportan al formato.

## 2. Qué leí afuera (CSS de impresión)

Cada afirmación lleva sello. Desde la nube solo abrió el buscador; ninguna página se pudo abrir.

- **`@page` fija tamaño y márgenes** (`size: letter`, `margin: .75in`, y tamaño A4 con `size: A4`). Una guía de PDF desde HTML da ese ejemplo con contadores de página. [Visto solo en buscador] ([htmlcsstoimage.com](https://htmlcsstoimage.com/blog/optimize-html-for-pdf-printing))
- **Margin boxes (cajas de margen) y numeración:** desde Chrome 131 se puede poner contenido generado en los márgenes con at-rules como `@bottom-right` y `counter(page)`; `counter(pages)` da el total. La guía de Chrome es de octubre de 2024. Las cajas de las esquinas tienen tamaño fijo y las otras tres de cada lado son flexibles. [Visto solo en buscador] ([developer.chrome.com/blog/print-margins](https://developer.chrome.com/blog/print-margins))
- **Limitación:** `string-set` / `string()` (encabezado corriente que copia el título de cada sección) aparece vinculado a un bug abierto de Chromium según el buscador. [Visto solo en buscador] ([mismo enlace](https://developer.chrome.com/blog/print-margins))
- **Fuentes viejas dicen lo contrario** (que Chrome no dibuja margin boxes, o que no sirven en el diálogo de impresión). Probablemente son anteriores a Chrome 131, pero una guía afirma que no se ven en el diálogo normal y sí en modo headless; está sin verificar. [Visto solo en buscador] ([21pdf-marketing.pages.dev](https://21pdf-marketing.pages.dev/blog/css-print-complete-guide))
- **Saltos de página:** `break-inside: avoid` es una petición, no una orden; `break-after: avoid` en títulos evita títulos huérfanos al pie. En tablas, `thead { display: table-header-group }` repite el encabezado en cada página, y Chromium lo implementó como comportamiento por defecto en 2016. [Visto solo en buscador] ([dev.to/accreditly](https://dev.to/accreditly/how-to-control-page-breaks-in-html-to-pdf-output-1maj), [commit de Chromium](https://chromium.googlesource.com/chromium/src/+/81c0fc6d4e08e4e2bb4eb8a42747f21b13303616)). Mantener `thead` pegado al `tbody` con `break-after: avoid` tiene reportes de no funcionar. [Visto solo en buscador] ([StackOverflow espejo](https://kiwix.lema.org/stackoverflow.com_en_all_2023-11/questions/44154720/how-to-avoid-page-break-between-thead-and-tbody))
- **Fondos:** Chrome no imprime colores de fondo salvo que el usuario lo active; `print-color-adjust: exact` (con prefijo `-webkit-`) los fuerza, y en Puppeteer hay que sumar `printBackground: true`. [Visto solo en buscador] ([css-tricks.com](https://css-tricks.com/?p=366791), [stefanjudis.com](https://www.stefanjudis.com/today-i-learned/color-adjust-trumps-user-agent-setting-about-background-printing/))
- **Paged.js frente a Chrome:** Paged.js es un polyfill (código que simula una función ausente) que implementa paginación, encabezados corrientes y contadores en el navegador; corre como capa de vista previa y se llama a `window.print()` al terminar. Se reporta que no está muy mantenido y que no distingue pantalla de impresión en una sola hoja de estilo. Alternativas: WeasyPrint o Prince, que soportan margin boxes completos. [Visto solo en buscador] ([pagedjs.org](https://pagedjs.org/en/documentation/3-w3c-specifications-for-printing/), [davidyat.es](https://davidyat.es/2024/02/17/print-stylesheets/)). Mi lectura: con Chrome 131 o posterior, Paged.js solo hace falta para encabezados corrientes por sección. [Hipótesis]
- **Informes anuales bien diseñados:** las reseñas coinciden en portada que fija paleta y tipografía, jerarquía clara, encabezados y pies repetidos, rejilla de documento y rejilla de línea base, y margen interior si se encuaderna. Hay colecciones en [Column Five](https://columnfivemedia.com/best-examples-of-beautiful-annual-report-design) y [Creative Bloq](https://www.creativebloq.com/graphic-design/annual-report-design-2131905), y consejos en [Adobe](https://www.adobe.com/creativecloud/business/teams/resources/how-to/annual-report-design.html) y [Made Good](https://madegooddesigns.com/?p=5503). [Visto solo en buscador] Son listas curadas y páginas de agencias; no son fuente primaria de diseño.
- **Portafolio de casos en PDF:** el espacio es limitado y lineal, por eso el texto debe ser muy ajustado; los revisores escanean, así que pesan la jerarquía y destacar la decisión clave; los gráficos se rehacen con el estilo del documento. [Visto solo en buscador] ([uxfol.io](https://blog.uxfol.io/ux-portfolio-design-tips/), [portfoliobox](https://www.portfoliobox.com/magazine/pdf-design-portfolio-examples))
- **Línea de tiempo y plano técnico:** el buscador no devolvió referencias útiles. No encontrado. Esos dos estilos salen de las ideas 4 y 6 de t04 y de mi criterio. [Hipótesis]

### Prueba propia

Imprimí las seis plantillas con el Chromium de Playwright (versión 157.0.8103.78, modo headless, `preferCSSPageSize`, fondos activados) y obtuve PDF de 6, 5, 5, 5, 4 y 3 páginas con «Página N de M» al pie. Es evidencia de que los margin boxes y `counter(pages)` funcionan en ese Chromium. No probé el diálogo de impresión de Chrome de escritorio, ni Firefox ni Safari. [Hipótesis] Que en el diálogo normal se vean igual.

## 3. Cómo exportar a PDF, paso a paso

1. Abra la plantilla en **Chrome 131 o posterior** con conexión a internet, para que carguen Gabarito y Plus Jakarta Sans. Sin conexión cae a la fuente del sistema y cambian los saltos de página.
2. Reemplace los marcadores y borre los bloques que no use. Revise en pantalla que no queden corchetes.
3. Pulse **Ctrl+P** (Cmd+P en Mac).
4. Destino: **Guardar como PDF**.
5. Tamaño del papel: **Carta** (las plantillas lo piden con `@page { size: Letter }`). Para A4 cambie esa línea a `size: A4` y, en pantalla, el ancho de `.page`.
6. Márgenes: **Predeterminado** o el que respete el CSS; no use «Ninguno».
7. Escala: **100 %** (no «Ajustar a la página»).
8. Marque **Gráficos de fondo**. Sin esto se pierden la portada roja, las bandas y la retícula.
9. Desmarque **Encabezados y pies de página** del diálogo: los de la plantilla ya vienen en el CSS y si no, se duplican con fecha y URL.
10. Guarde y revise el PDF **página por página**: títulos solos al pie, tablas cortadas y la numeración «Página N de M».
11. Para producir sin diálogo (opción técnica): `chromium --headless --no-sandbox --print-to-pdf=cierre.pdf archivo.html`. [Hipótesis] La bandera puede variar según versión; lo hice con la API de Playwright, no con la línea de comandos.

## 4. Riesgos de cada estilo al imprimir

| Plantilla | Riesgo principal | Qué hice y qué falta |
|---|---|---|
| 01 Formal | Tablas largas cortadas; títulos huérfanos | `thead` repetido, `tr` sin cortar, `break-after: avoid` en títulos. Falta revisar con texto real largo. |
| 02 Editorial | Las columnas CSS parten citas y figuras entre páginas | En la primera versión puse la cita con `column-span: all` y el PDF pasó de 5 a 9 páginas con páginas casi vacías; la saqué de las columnas. Con texto largo pueden volver los cortes. |
| 03 Informe anual | Mucho color de fondo: si no se activan gráficos de fondo, se pierde la portada; gasta tinta en una impresora | `print-color-adjust: exact`. Para impresión en B/N hay que preparar otra versión. |
| 04 Portafolio | Una ficha por página deja aire si el caso es corto | Fichas con `break-inside: avoid`. Falta decidir si dos casos cortos comparten página. |
| 05 Línea de tiempo | La línea vertical continua se corta al cambiar de página; las fechas absolutas a la izquierda se desalinean | Dividí en tramos por página. Los hitos largos pueden empujar el tramo a otra hoja. |
| 06 Plano técnico | Retícula de fondo y flechas hechas con CSS (`::after`): dependen de fondos; el cuadro de rotulación va en posición absoluta y puede chocar con el contenido | Marco con altura fija. Si el contenido supera el marco, se desborda: no lo mide ningún control. |

Riesgos comunes: `break-inside: avoid` es una petición y puede ignorarse; las fuentes de Google necesitan red al imprimir; `@page` con A4 y carta exige revisar anchos; y los encabezados corrientes por sección (por ejemplo, el título del capítulo en el margen) no los resuelve Chrome nativo. [Hipótesis] sobre esto último, a partir de `string-set` pendiente.

## 5. Qué quedó sin fuente

- Ninguna página se abrió: todas las afirmaciones externas son [Visto solo en buscador].
- Referencias de diseño para línea de tiempo y plano técnico: no encontrado.
- Comportamiento en el diálogo de Chrome de escritorio, Firefox y Safari: no probado.

## 6. Dominios que no abrieron

| Dominio | Error | Qué se perdió | Cómo lo traté |
|---|---|---|---|
| `developer.chrome.com` | `getaddrinfo ENOTFOUND` | Guía oficial de margin boxes | [Visto solo en buscador] |
| `pagedjs.org` | `getaddrinfo ENOTFOUND` | Documentación de Paged.js | [Visto solo en buscador] |

Heredados de la pizarra y no intentados: `www.pmi.org`, `www.prince2.com`, `prince2.wiki`, `scrumguides.org`, `www.govtech.com`, `simonwillison.net`, `everettjf.github.io`, `arxiv.org`, `stripe.dev`, `www.uber.com`.

Tras los dos fallos, no probé otros dominios (la regla de no reintentar). Para leerlos directo habría que permitir `developer.chrome.com` y `pagedjs.org` en la red del entorno.

Presupuesto usado: 7 búsquedas de 15 y 2 aperturas de 10 (las 2 fallaron).
