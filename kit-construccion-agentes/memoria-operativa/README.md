# Memoria Operativa

> Skill que convierte cualquier contexto que el usuario entregue — notas, procesos, decisiones de cliente, entregables aprobados — en documentación profesional estructurada. Detecta automáticamente qué tipo de documento producir.

---

## El problema que resuelve

El conocimiento operativo de un equipo de servicios vive disperso: en chats, en la cabeza de quien atendió la reunión, en correos sin archivar. Cuando alguien sale del equipo o cuando hay que retomar una cuenta después de semanas, no hay registro estructurado de qué se decidió ni cómo se hace el proceso.

## Quién lo usa

Cualquier integrante del equipo que necesite documentar algo que acaba de pasar o que sabe pero no está escrito.

## Qué produce

Cuatro tipos de documento según lo que el usuario entregue:

| Modo | Cuándo usarlo | Qué produce |
|---|---|---|
| **SOP** | Para documentar cómo se hace un proceso | Pasos, criterios, responsable, frecuencia y herramientas |
| **DECISIÓN** | Para registrar un acuerdo con o sobre un cliente | Contexto, impacto, alternativas descartadas y próximo paso |
| **ENTREGABLE** | Para versionar un documento entregado | Header de versión, resumen ejecutivo, feedback recibido y criterios de aprobación |
| **PASAPORTE** | Para crear o actualizar el perfil de una cuenta | Ficha con historial, decisiones activas, sensibilidades y contacto clave |

## Por qué este diseño

La detección automática del modo es la decisión de diseño central. El usuario no necesita saber qué tipo de documento está creando — describe la situación y el agente determina el formato correcto. Esto reduce la fricción de adopción en equipos que no tienen cultura de documentación.

## Stack

`Claude.ai` · Skill pura · Sin MCPs requeridos · Versión 1.1
