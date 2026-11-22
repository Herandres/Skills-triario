# T9 · Agente especialista en diseño editorial y diseño de información · leyó la investigación T3 y, tomando como base lo siguiente, propone:

Revisión ciega: el subagente recibió solo `guia-pdf.md`, el código de `index.html` y el CSS de las seis plantillas.

### Idea 1 · El plano técnico como plantilla principal, con regla de desborde
- Leí: "Marco con altura fija. Si el contenido supera el marco, se desborda: no lo mide ningún control." y "lo que sobrevive al PDF es el diagrama de tubería".
- Tomando como base: en diseño de información, el formato debe seguir la estructura del contenido. Un sistema con nodos, reintento y parada se entiende como diagrama, no como prosa. Un plano de ingeniería solo funciona si el contenido cabe en el marco, así que el marco necesita una regla de capacidad.
- Propongo: usar la 06 como plantilla principal para explicar el sistema, y la 01 o la 03 como volumen de apoyo. Fijar un presupuesto de contenido por lámina: máximo de nodos por tubería (por ejemplo 6), una anotación `.ann` por nodo y una lámina por tubería. Si algo no cabe, se pasa a una segunda lámina y no se reduce la letra. Marcar en la plantilla un tamaño mínimo de texto de 8,5 pt. Añadir una prueba de revisión: imprimir y comprobar que el cuadro de rotulación `.tblock` no toca ningún nodo.
- Fuente: sin fuente nueva.

### Idea 2 · Reservar el cuadro de rotulación en el flujo, no en posición absoluta
- Leí: "el cuadro de rotulación va en posición absoluta y puede chocar con el contenido".
- Tomando como base: en dibujo técnico, el cajetín ocupa una zona reservada de la lámina, y el contenido se compone alrededor de esa zona. En CSS equivale a ponerlo en la retícula, no encima de ella.
- Propongo: convertir `.frame` en una retícula de dos filas (`grid-template-rows: 1fr auto`). El cuerpo del diagrama va en la fila 1 y el cuadro `.tblock` en la fila 2, alineado a la derecha. Así el cuadro empuja al contenido en vez de taparlo. Con eso se puede quitar la altura fija. Si se mantiene, hay que añadir `overflow: clip` solo en la prueba interna, para que el desborde se vea en la revisión y no se esconda.
- Fuente: sin fuente nueva.

### Idea 3 · Flechas y retícula como SVG inline, con modo de impresión sin fondos
- Leí: "Retícula de fondo y flechas hechas con CSS (`::after`): dependen de fondos" y "si se desactivan los fondos, se pierde el efecto de plano".
- Tomando como base: lo que lleva significado, como la dirección del flujo y el reintento, no debe depender de un ajuste del diálogo de impresión. La retícula de fondo es decoración y puede perderse. El flujo no.
- Propongo: dibujar las flechas y el bucle de reintento como SVG inline con trazo (`stroke`), que se imprime aunque los fondos estén desactivados. Dejar la retícula roja como único elemento de fondo, sabiendo que es prescindible. Añadir un estilo de reserva en B/N: flechas en `--dark`, nodos de parada con borde grueso y la etiqueta "PARADA" en texto, no solo en rojo. Así el plano se lee igual si se imprime en gris.
- Fuente: sin fuente nueva. [Hipótesis] sobre el comportamiento de los trazos SVG en el diálogo de impresión sin fondos, porque la investigación no lo probó.

### Idea 4 · Tipografía de ingeniería: tres niveles y cifras tabulares
- Leí: `body{font:400 10.5pt/1.55}`, `table{font-size:9.5pt}`, `.mono{font-size:8.5pt}`, `.tblock{font-size:8pt}` y `.step h3{font-size:13pt}`.
- Tomando como base: en documentos técnicos, la jerarquía se apoya en pocos tamaños y en una escala consistente. Los números alineados en tablas se leen más rápido con cifras tabulares.
- Propongo: reducir a una escala de cuatro pasos (8, 9,5, 10,5 y 14 pt) y retirar los tamaños intermedios. Subir el texto mono a 9 pt, porque a 8,5 pt los códigos y las rutas se confunden al imprimir. Aplicar `font-variant-numeric: tabular-nums` en tablas y cuadro de rotulación. Usar Gabarito solo para títulos y rótulos de nodo, y Plus Jakarta Sans para el resto, sin mezclar un tercer estilo salvo el mono. Revisar que `line-height: 1.55` en celdas de tabla no agrande las filas: en `td` bajarlo a 1.35.
- Fuente: sin fuente nueva.

### Idea 5 · Retícula de línea base y márgenes de encuadernación para el cuaderno técnico
- Leí: "rejilla de documento y rejilla de línea base, y margen interior si se encuaderna" (reseñas de informes anuales) y `@page{size:Letter;margin:.7in .75in .8in}`.
- Tomando como base: la retícula modular con línea base común es la práctica estándar del diseño editorial para que el texto alinee entre columnas y páginas. El margen interior (gutter) compensa el espacio que se pierde al coser o espiralar.
- Propongo: pasar las alturas de la plantilla a múltiplos de una línea base de 0,25 in, que ya es el paso de la retícula de fondo de la 06 (`.25in`). Así el texto, los nodos y la retícula coinciden. Para un cuaderno impreso y encuadernado, usar `@page :left` y `@page :right` con margen interior de 1 in y exterior de 0,6 in. Declarar el A4 como una variante aparte, porque la propia investigación pide revisar anchos y con 0,25 in no divide igual el alto de A4.
- Fuente: sin fuente nueva. [Hipótesis] sobre `@page :left/:right` en Chrome, no verificado en la investigación.

### Idea 6 · Título corriente sin `string-set`: una página por capítulo con rótulo propio
- Leí: "los encabezados corrientes por sección (por ejemplo, el título del capítulo en el margen) no los resuelve Chrome nativo." y "`string-set` / `string()` ... vinculado a un bug abierto de Chromium".
- Tomando como base: en un documento de consulta, el lector debe saber en qué capítulo está desde cualquier página. Si la herramienta no lo genera, el diseño debe resolverlo con una convención fija.
- Propongo: como el plano técnico va una lámina por tubería, escribir el nombre de la lámina dentro de la página (en el cuadro de rotulación y en un rótulo superior de 8 pt), no en el margen. Para las secciones largas de la 01, usar `@page` con nombre (`page: cap-1`, `page: cap-2`) y un `content` fijo por nombre en `@bottom-left`. Sirve porque `page:` ya funciona en la portada. Esto evita Paged.js y deja un único motor, Chrome. El costo es un bloque `@page` por capítulo.
- Fuente: sin fuente nueva. [Hipótesis] sobre que las páginas con nombre admitan `content` distinto por capítulo en el Chromium usado.

### Idea 7 · Riesgos al imprimir de cada plantilla para un sistema de ingeniería, y orden de preferencia
- Leí: la tabla de §4, por ejemplo "La línea vertical continua se corta al cambiar de página" (05), "Las columnas CSS parten citas y figuras entre páginas" (02) y "Para impresión en B/N hay que preparar otra versión" (03).
- Tomando como base: la plantilla correcta es la que comunica la estructura del sistema con el menor riesgo de impresión. Un sistema de ingeniería se compone de partes, relaciones y estados, no de una narración.
- Propongo: ordenar así para el cierre. Primera, 06 plano técnico, porque muestra nodos, reintento y parada; su riesgo es el desborde del marco y la pérdida de fondos. Segunda, 01 formal, como volumen de apoyo con tablas; su riesgo es el muro gris y las tablas largas. Tercera, 05 línea de tiempo, útil para contar la secuencia de septiembre a noviembre; su riesgo es el corte de la línea entre páginas. Cuarta, 04 portafolio, solo si se presentan casos como evidencia; su riesgo es el aire vacío. Dejar la 02 y la 03 para una pieza de comunicación, no para el documento técnico: la 02 por las columnas inestables y la 03 por el gasto de tinta. Esto es una recomendación de comunicación, no un cambio a lo investigado.
- Fuente: sin fuente nueva.

### Idea 8 · Lista de verificación de impresión incorporada al documento
- Leí: el paso 10 de la guía, "Guarde y revise el PDF página por página: títulos solos al pie, tablas cortadas y la numeración «Página N de M»", y "No probé el diálogo de impresión de Chrome de escritorio, ni Firefox ni Safari."
- Tomando como base: en producción editorial, la prueba de impresión (preflight) es una etapa con criterios escritos, no una mirada rápida. Reduce el riesgo cuando la herramienta no garantiza el resultado.
- Propongo: una hoja de comprobación de una página para el cierre, con casillas por plantilla: fuentes cargadas (con red), gráficos de fondo activados, encabezados del diálogo desactivados, escala al 100 %, numeración "Página N de M" correcta, ningún título huérfano, ningún nodo cortado y rótulo sin choques. Añadir una regla de decisión: si el PDF difiere entre el diálogo de escritorio y el PDF headless, se entrega el generado en headless y se deja constancia. Incluir la versión de Chrome en el pie de la hoja de comprobación.
- Fuente: sin fuente nueva.
