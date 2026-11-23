# Contrato · Loop del Documento · Parte 1: el concepto

Alcance: este contrato fija qué produce el loop para la Parte 1 del documento de entrega de Loop Engineering. No cambia mientras corre un ciclo. Solo lo cambia Hernán.

## 1. Lector y mensaje

- **Lector:** la gerencia de Triario. Lee el documento por su cuenta; el deck se proyecta con Hernán hablando.
- **Registro:** técnico y expositivo, con una tesis clara y sin giros retóricos. Los títulos nombran el concepto, no son eslóganes.
- **Mensaje:** Loop Engineering construye sistemas que se mejoran solos. Afuera todavía no hay documentación sólida sobre la disciplina; Triario la escribió, la aplicó con sus equipos y la llevó a su nivel más alto.
- **Sin contexto personal del autor.** El detalle específico sale del trabajo: un dato, un límite, una evidencia.

## 2. Las cinco preguntas que el documento responde

| ID | Pregunta de la gerencia |
|---|---|
| P1 | ¿Qué es Loop Engineering y por qué importa? |
| P2 | ¿Cómo estamos frente a la industria? |
| P3 | ¿Qué ya produce valor? |
| P4 | ¿Hasta dónde puede llegar? |
| P5 | ¿Con qué evidencia se sostiene? |

Cada sección declara qué pregunta responde. Una sección que no responde ninguna, sale.

## 3. Índice de la Parte 1

| N.º | Sección | Responde | Figura que la sostiene | Paquete de fuentes |
|---|---|---|---|---|
| 1 | Resumen | P1 a P5 | Escalera de madurez (nueva) | Las secciones 2 a 7 ya aprobadas |
| 2 | El problema | P1 | Ninguna | T01 `tesis.md`, T04 `innovacion.md`, T13 `informe-de-viaje.md` |
| 3 | Marco conceptual: la anatomía de un loop y su paralelo con la ingeniería de datos | P1, P5 | Anatomía de un loop (nueva) y tubería medallón (D05, fig-02) | T01 `tesis.md` e `ideas-ingenieria-datos.md`, D02 `parte1.md` |
| 4 | Estado del arte de la industria | P2 | Radar de conceptos de la industria | T13 `informe-de-viaje.md`, T14 `radar.md` y `fichas/`, T15 `patrones.md` |
| 5 | El modelo de Triario: la escalera de madurez | P3, P4 | Escalera de madurez (nueva) y estados del ciclo (D05, fig-04) | T04 `innovacion.md`, T15 `patrones.md`, D03 `radar.md` |
| 6 | Discusión: dónde está la innovación y cuáles son sus límites | P2, P4, P5 | Plano cartesiano (D03, `radar.svg`) | D03 `radar.md`, T14 `radar.md`, T16 `huecos.md` |
| 7 | Conclusiones | P1 a P4 | Ninguna | Las secciones 2 a 6 ya aprobadas |
| 8 | Referencias | P5 | Ninguna | Las citas de las secciones 2 a 6 |

El escritor de cada sección lee solo su paquete de fuentes. No hay investigación nueva.

## 4. Formato y extensión

- **Formato:** informe técnico explorable, en HTML con figuras de Archify renderizadas dentro del texto, notas al margen y citas que llevan a su fuente. Se exporta a PDF.
- **Tope de la Parte 1:** 3.500 palabras de cuerpo, sin contar las referencias. Cada sección tiene su tope en la tabla del Guardián.
- **Marca Triario:** fondo claro, el rojo `#EF2222` como color dominante, ciruela `#361133` y azul `#534DFF` como acentos, Gabarito en los títulos, Plus Jakarta Sans en el cuerpo y el logo oficial incrustado.

## 5. Reglas que no se discuten

1. Cero datos inventados. Toda afirmación con cifra lleva su fuente en la misma línea.
2. Solo valen estos sellos: [Fuente primaria], [Fuente secundaria], [Visto solo en buscador], [Hipótesis] y [confirmar con Hernán].
3. El sistema de agentes de Hernán aparece en la sección 5 como el nivel más alto de la escalera. No es el tema del documento.
4. Los códigos internos (T01, D03, HP, DF) y las rutas de archivo van en notas al margen o en las referencias, nunca en el cuerpo.
5. Términos técnicos en inglés con su traducción la primera vez.
6. Sin sección de próximos pasos. Las lecciones sí van.
7. Sin guiones largos como muletilla.

## 6. Cómo corre el loop

Por cada sección, en orden de dependencia: 2, 3, 4, 5, 6, 7, 1 y 8.

1. **Estructura:** el orquestador arma el esqueleto y elige la figura.
2. **Contenido:** un escritor (Opus) redacta solo con su paquete de fuentes.
3. **Guardián:** un script revisa el texto (sección 7). Si falla, se vuelve a la capa 2.
4. **Auditor ciego:** un subagente nuevo (Opus) ve solo la sección y este contrato, y da su veredicto: aprobada, aprobada con cambios o rechazada. Si la rechaza, se vuelve a la capa que falló.
5. **Visual:** la figura se renderiza y la sección entra al documento.
6. **Retro:** tres líneas. Si un error se repite, se convierte en una regla nueva del Guardián para la sección siguiente.

Cada sección tiene como máximo 2 vueltas. Si no pasa, la decide Hernán.

## 7. Revisiones del Guardián

Nacen de las reglas APR-R01 a APR-R10 de `memoria/aprendizajes.md`.

| Revisión | Regla de origen |
|---|---|
| Toda línea con una cifra lleva sello o fuente | APR-R10, APR-R05 |
| Solo aparecen los sellos válidos de la sección 5 | APR-R07 |
| Cuántos «[confirmar con Hernán]» quedan | APR-R07 |
| Extensión de la sección dentro de su tope | HP-013 |
| La sección declara la pregunta que responde | Contrato §2 |
| Sin códigos internos en el cuerpo | Decisión 8 de D09 |
| Sin deriva hacia el sistema del cierre fuera de la sección 5 | Rechazo del 23/11 |
| Sin «próximos pasos» y sin guiones largos | BRIEF §3 y §5 |

## 8. Compuertas de Hernán

1. Aprueba este contrato.
2. Mira el tablero cuando quiera.
3. Da el visto bueno final.
