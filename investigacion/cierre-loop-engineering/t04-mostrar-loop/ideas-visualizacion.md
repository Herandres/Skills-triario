# T10 · Agente especialista en tecnología creativa y visualización de datos · leyó la investigación T4 y, tomando como base lo siguiente, propone:

Nota: revisión en ciego. El subagente leyó solo `innovacion.md` (por ruta de archivo, no pegado en el prompt), sin acceso a mis notas. No usó fuentes nuevas.

### Idea 1 · La oficina como tablero de control, no como decorado
- Leí: «Casi todo lo que encontré muestra **qué hace cada agente**. Casi nada muestra **las reglas** (contrato fijo, auditor ciego, tope de vueltas, archivo, persona en la puerta).» Y de PixelFloor: «partículas luminosas que viajan entre agentes según una lista de `flows`».
- Tomando como base: en visualización de datos, un buen tablero codifica el estado en la forma y no en el texto (posición, color, tamaño). Lo que importa se pone en el canal visual más fuerte y lo accesorio se atenúa.
- Propongo: construir en una tarde un solo HTML con Canvas o SVG, sin build, donde el estado de cada pieza se lee sin leyenda. El contrato es un cartel con candado. El auditor está tras un vidrio. El contador de vueltas es un grupo de tres luces. El archivador tiene un número visible. Las hojas viajan como partículas por la lista de `flows` y cambian de color según el veredicto (aprobado, rechazado, archivado). Con un modo demo de datos ilustrativos, rotulado así en pantalla. Esto lleva la oficina más allá de Pixel Agents sin tocar sprites: la novedad es el mobiliario de reglas. Lo que pide más tiempo es conectarla a eventos reales y pulir el pixel art.
- Fuente: sin fuente nueva.

### Idea 2 · Un solo modelo de eventos para alimentar todas las vistas
- Leí: «Exportar el registro de la corrida a un JSON de eventos y escribir un reproductor de 100 a 200 líneas. Lo difícil no es el reproductor, es tener el registro: si el loop no guarda un evento por paso, hay que empezar por ahí.»
- Tomando como base: la práctica de «una fuente de verdad, muchas vistas» (separar datos de renderizado). Un esquema de evento pequeño y estable permite cambiar de visualización sin rehacer nada.
- Propongo: definir un esquema mínimo de evento (`paso`, `capa`, `actor`, `veredicto`, `regla_citada`, `vuelta`, `marca_de_tiempo`, `real_o_ilustrativa`) y escribir dos o tres corridas ilustrativas en ese formato, marcadas como tales. La oficina, el diagrama de tubería y los carriles de tiempo leen el mismo archivo. En una tarde alcanza para un reproductor con velocidad y pausa. Con más tiempo, el mismo esquema se llena desde corridas reales. El campo `real_o_ilustrativa` hace que el marco de la pantalla siempre diga qué se está viendo, para no pasar una maqueta por evidencia.
- Fuente: sin fuente nueva.

### Idea 3 · Comparación con ejes alineados: la corrida que no cierra frente a la que cierra
- Leí: «en una corrida el criterio del auditor se movió a mitad y no cerró en 3 vueltas; con el contrato fijo desde el inicio, aprobó en la primera.» Y: «Sin cifras más allá de "3 vueltas" y "1 vuelta", que son las que tenemos.»
- Tomando como base: el principio de pequeños múltiplos (small multiples). Comparar dos casos funciona cuando comparten escala, eje y orden, y solo cambia lo que se quiere mostrar.
- Propongo: dos paneles idénticos con el mismo eje horizontal de vueltas, y una única diferencia visible: en el izquierdo, el cartel del contrato cambia de texto en la vuelta 2 (se resalta el cambio con un contorno); en el derecho, queda quieto. Los dos paneles se reproducen sincronizados con un solo control. Cabe en una tarde con el esquema de eventos de la idea 2. No agregar números que no estén en la investigación. Si no hay registro de la corrida, rotular el panel como «reconstrucción».
- Fuente: sin fuente nueva.

### Idea 4 · Diagrama de tubería con la flecha de retorno como protagonista
- Leí: «La flecha de retorno es lo que distingue al loop de un pipeline lineal.» Y: «El reintento vuelve a la capa que falló. Y hay un tope de tres vueltas.»
- Tomando como base: jerarquía visual en diagramas. Un elemento único debe tener un peso gráfico único (grosor, color, curvatura) y todo lo demás un trazo neutro.
- Propongo: un SVG inline en una tarde, con trazo gris para el camino feliz y un único color de acento para el retorno, con un contador 1/3, 2/3, 3/3 que se llena. La salida al archivo va en trazo punteado. Se diseña en dos versiones desde el mismo SVG: una animada para pantalla y una estática de un solo cuadro para el PDF, de modo que el documento formal no pierda la idea. Con más tiempo, se pasa a un lienzo interactivo con nodos arrastrables.
- Fuente: sin fuente nueva.

### Idea 5 · Scrollytelling sin librería, con un fotograma impreso por paso
- Leí: «Se puede hacer sin librería con `IntersectionObserver` y `position: sticky` en HTML puro.» Y: «Cuidado con el PDF: al exportar, el estado animado se pierde. Habría que imprimir un fotograma por paso.»
- Tomando como base: divulgación progresiva (revelar la complejidad de a una pieza) y diseño para múltiples salidas, donde el estado de cada paso se define como dato y no como animación.
- Propongo: describir cada pieza del loop (contrato, auditor, reintento, archivo, persona) como un estado numerado de una sola escena. En pantalla, el scroll recorre los estados; en `@media print`, cada estado se imprime como figura fija con su texto. Es medio día de trabajo en HTML puro. El mismo conjunto de estados sirve de guion para la idea 1, de modo que el documento y la oficina cuenten lo mismo en el mismo orden.
- Fuente: sin fuente nueva.

### Idea 6 · Dos escalas de tiempo en una sola lámina: la vuelta y los 30 días
- Leí: «carril superior con la corrida de 3 vueltas; carril inferior con el loop de 30 días: día 0 línea base, marcas de bitácora, día 30 resultado. Las marcas con datos reales solo si están en la bitácora; si no, carril vacío con la etiqueta "sin bitácora disponible".»
- Tomando como base: la práctica de mostrar la ausencia de datos como dato (un hueco rotulado) en lugar de interpolar o rellenar, y de separar escalas de tiempo distintas en carriles con eje propio.
- Propongo: una lámina con dos carriles de eje independiente, bien separados para no sugerir que comparten escala. El carril largo muestra el hueco con la etiqueta «sin bitácora disponible» si no hay marcas reales, y eso se presenta como una decisión de honestidad y no como un defecto. Se hace en una tarde en SVG. Es un buen cierre visual para el documento, porque deja ver la diferencia entre lo que el loop ya registra y lo que aún no.
- Fuente: sin fuente nueva.

### Idea 7 · La oficina que se deja operar: tocar una regla y ver qué rompe
- Leí: «Esto ya lo hacemos. Esto falta.» (Escena 10) y «Si no hay datos suficientes, el loop no opina.» (Escena 7)
- Tomando como base: explicación interactiva (explorable explanations): el lector entiende una regla cuando puede quitarla y ver la consecuencia, no solo cuando la lee.
- Propongo: sobre la oficina de la idea 1, tres interruptores que el público puede accionar en vivo: «mover el criterio a mitad» (se activa el caso de la idea 3), «quitar el tope de vueltas» (la hoja da vueltas sin cerrar, con un contador que crece) y «sacar a la persona de la puerta» (la bandeja de «Listo para publicar» queda sin custodio y se marca en rojo). Cada interruptor ejecuta un guion de eventos ilustrativos, rotulados como simulación. Es un prototipo de una tarde si los guiones son cortos; pulirlo para presentarlo en vivo pide más tiempo. Los umbrales no se inventan: donde la investigación no trae un número, la simulación muestra el mecanismo sin cifra.
- Fuente: sin fuente nueva.

### Idea 8 · Plano de planta con interruptor de «lo que ya hacemos» y «lo que falta»
- Leí: «Las salas "por confirmar" se dejan con signo de pregunta hasta hablar con Hernán.» Y: «sala de gobernanza con la luz apagada (se habla, aún no se aplica).»
- Tomando como base: codificación cualitativa accesible. El estado (fortaleza, brecha, por confirmar) no debe depender solo del color: se refuerza con patrón o ícono para que se lea en blanco y negro y por personas con daltonismo.
- Propongo: un SVG estático de planta donde cada sala lleva color más un patrón (sólido, rayado, signo de pregunta) y una leyenda de tres entradas. Con un interruptor opcional que atenúa todo salvo las brechas, para que el cierre pueda decir qué sigue sin repartir otra lámina. Una tarde para la versión estática; más tiempo si se quiere que cada sala abra su ficha de patrón.
- Fuente: sin fuente nueva.
