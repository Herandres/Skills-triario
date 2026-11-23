# Hechos del proceso · Relevo de documentación

Alcance: hechos del Relevo de documentación que no quedaron en las entregas de los especialistas, porque solo estaban en la conversación de trabajo con Hernán y en los registros de las rutinas. Son el insumo de la cosecha de aprendizajes (`memoria/aprendizajes.md`). Las horas están en Bogotá (UTC−5).

Fuentes:
- Commits de las ramas `claude/doc-le-*` de este repositorio. [Fuente primaria]
- Registros de las rutinas en la nube, identificados por su sesión `cse_…`. [Fuente primaria]
- Conversación de trabajo de Hernán en Claude Code, 22 y 23/11/2026. [Fuente primaria]

## Línea de tiempo

| ID | Hora | Hecho | Evidencia |
|---|---|---|---|
| HP-001 | 22/11 8:37 p. m. | Base del relevo: el BRIEF común y los insumos | commit `28534c2` en `claude/doc-le-base` |
| HP-002 | 22/11 9:17 p. m. | D01 entrega el esqueleto, el mapa de innovación y los datos faltantes | commit `1d44fc6` |
| HP-003 | 22/11 10:26 p. m. | D02 entrega la Parte 1 | commit `dd1455a` |
| HP-004 | 22/11 11:30 p. m. | D03 arranca y a las 11:33 p. m. se detiene porque la cuenta llegó al tope de su ventana de 5 horas. Lo que no había subido se perdió | sesión `cse_016gRXntgKqCYdKCsBbL3M8e` (último evento 04:33:35 UTC) |
| HP-005 | 23/11 8:09 a. m. | D04 entrega la Parte 3, el conteo de agentes y la línea de tiempo. En ese momento la pizarra no tenía el radar de D03 | commit `f1b1b3c` (13:09:11 UTC) |
| HP-006 | 23/11 8:33 a. m. | D03 se relanza a mano y entrega a las 8:38 a. m. | sesión `cse_016gRXnvQeohSTgd6P7hfsRe` · commit `7f022d0` (13:38:58 UTC) |
| HP-007 | 23/11 9:36 a. m. | D05 entrega las figuras | commit `1d9b578` |
| HP-008 | 23/11 10:28 a. m. a 10:31 a. m. | Con la ventana de 5 horas al 78 %, se apagan el Pulido B y el Code Janitor, y la Retro del Taller y D06 a D09 se mueven para después del reinicio de las 11:30 a. m. | registros de actualización de las rutinas (15:28 a 15:31 UTC) y conversación |
| HP-009 | 23/11 11:50 a. m. | D06 entrega la base de la Parte 2 y las preguntas para Hernán | commit `dfea425` |
| HP-010 | 23/11 12:38 p. m. | El Pulido A seguía encendido después de su última corrida del día, con la siguiente programada para el 23/11/2027. Se apaga | registro de actualización de la rutina (17:38 UTC) |

## Decisiones de Hernán sobre el proceso

- **HP-011 · Brief común antes de empezar.** Durante el diseño, antes de que arrancara el primer especialista, Hernán pidió que todos llevaran un brief con instrucciones específicas «para que todos tengan la misma directriz». Resultado: `BRIEF.md` (HP-001).
- **HP-012 · Reparto por cuota.** Hernán pidió repartir a los especialistas entre la mañana y la tarde «porque de pronto no alcanzan los tokens», y dejar en la noche del 22/11 los que ya estaban programados.
- **HP-013 · Publicar solo la versión final.** El 23/11 Hernán decidió ver el documento publicado solo cuando esté terminado, y tomar ahí las decisiones de extensión.
- **HP-014 · Hueco detectado por Hernán.** El 23/11 al mediodía Hernán señaló que el relevo de documentación no guarda lo que aprende y que eso es parte del loop engineering. También pidió que el documento no tenga «un montón de información que no sustente el proyecto».

## Hechos de operación

- **HP-015 · La pizarra quedó incompleta.** D04 se diseñó para correr después de D03, pero por HP-004 corrió antes de que el radar existiera (HP-005 y HP-006). El relevo siguió sin esperar al especialista que se cayó.
- **HP-016 · El conteo de agentes tiene corte.** D04 contó 136 agentes (`d04-sistema/conteo-agentes.md`) antes de que corrieran D05 a D09. Esa cifra no incluye a los especialistas posteriores ni a sus auditores.
- **HP-017 · Todas las entregas traen el veredicto de su auditor.** Al 23/11 a las 12:50 p. m., las 6 entregas existentes (D01 a D06) tenían la sección del veredicto de su auditor ciego: D01 en `esqueleto.md` y `mapa-innovacion.md`, D02 en `parte1.md`, D03 en `radar.md` y `radar.json`, D04 en `parte3.md` y `conteo-agentes.md`, D05 en `README.md` y D06 en `parte2-base.md`. Lo aprendido en cada etapa existe, pero cada parte está en su propio archivo y nadie lo había consolidado.
- **HP-018 · Medición de extensión y fuentes (23/11, mediodía).**
  - El cuerpo del documento suma unas 11.582 palabras: Parte 1 con 4.850, radar con 2.326 y Parte 3 con 4.406. Son unas 23 páginas calculando 500 palabras por página, sin contar la Parte 2.
  - En las Partes 1 y 3 hay 144 líneas de contenido. Tienen fuente explícita (sello, archivo, commit o enlace) 64 líneas (44 %), están marcadas por confirmar 12 (8 %) y no tienen fuente en la misma línea 68 (47 %).
  - Método: conteo con `grep` por línea. Es aproximado, porque una línea puede apoyarse en una fuente citada al nivel de la sección.
- **HP-019 · Uso de la cuota.** El límite semanal de la cuenta pasó de 38 % en la mañana del 23/11 a 44 % hacia la 1 p. m. del mismo día. La ventana de 5 horas iba en 14 % a esa hora. Fuente: capturas de la pantalla de límites de uso compartidas por Hernán.
