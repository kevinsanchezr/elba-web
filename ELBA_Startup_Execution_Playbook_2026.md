# ELBA Startup Execution Playbook

## Plan de negocio, validación y preparación para aceleradora

**Versión:** 15 de octubre de 2026\
**Objetivo:** convertir ELBA de un proyecto tecnológico prometedor en
una startup con problema, cliente, comprador, modelo de ingresos y
piloto verificables.

------------------------------------------------------------------------

# 0. La regla principal

ELBA no debe intentar demostrar primero que la tecnología es
impresionante. Debe demostrar, en este orden:

1.  **Existe un problema importante y frecuente.**
2.  **Existe un usuario concreto que sufre ese problema.**
3.  **Existe una organización/persona que tiene razones y presupuesto
    para resolverlo.**
4.  **ELBA mejora suficientemente la alternativa actual.**
5.  **Podemos construir un MVP que pruebe esa mejora.**
6.  **Alguien está dispuesto a probarlo, firmar una carta de intención o
    pagar.**
7.  **La economía del producto puede convertirse en un negocio
    sostenible.**

Este enfoque coincide con la filosofía de Y Combinator: hablar con
usuarios, lanzar algo pequeño rápidamente, medir el comportamiento real
y aprender antes de escalar.

------------------------------------------------------------------------

# 1. Qué es ELBA hoy

## Hipótesis actual

**ELBA** es una solución autónoma para monitorización primaria de salud
y evaluación preliminar de urgencia en lugares con conectividad
limitada.

La arquitectura planteada incluye:

-   medición de SpO2;
-   frecuencia cardíaca;
-   temperatura;
-   investigación de estimación de presión arterial mediante PPG;
-   interacción guiada;
-   procesamiento local;
-   clasificación TinyML;
-   comunicación LoRa;
-   almacenamiento local;
-   sincronización posterior cuando exista conectividad.

## Estado real

Actualmente ELBA debe presentarse como un **proyecto en fase de
validación y prototipado**, no como un producto médico validado.

Ya existe:

-   concepto;
-   problema inicial;
-   arquitectura preliminar;
-   selección inicial de hardware;
-   plan de prototipado;
-   hipótesis de clasificación local;
-   concepto de comunicación sin Internet.

Todavía debemos validar:

-   quién es el usuario prioritario;
-   quién compra;
-   cuánto cuesta realmente el problema;
-   qué función es imprescindible;
-   qué precisión clínica/técnica necesita el MVP;
-   quién aceptaría un piloto;
-   cuánto estaría dispuesto a pagar;
-   qué regulación aplicaría a la versión comercial.

------------------------------------------------------------------------

# 2. Cambio mental: proyecto académico vs startup

  Proyecto académico        Startup
  ------------------------- --------------------------------------
  ¿Podemos construirlo?     ¿Quién lo necesita desesperadamente?
  Precisión del algoritmo   Resultado que obtiene el cliente
  Arquitectura              Propuesta de valor
  Sensores                  Problema resuelto
  Paper                     Uso real
  Prototipo                 MVP usado por alguien
  Innovación técnica        Ventaja por la que alguien paga
  Experimento               Venta/piloto/LOI
  Muchas funciones          Una función crítica

La tesis puede preguntar: **¿funciona técnicamente?**

La startup debe preguntar: **¿quién lo compra, por qué lo compra, cuánto
paga y por qué ELBA es mejor que lo que hace hoy?**

------------------------------------------------------------------------

# 3. Las hipótesis que debemos validar

No tratar ninguna de estas afirmaciones como un hecho hasta obtener
evidencia.

## H1. Problema

En determinados territorios existe una dificultad suficientemente
importante para realizar monitorización primaria y determinar cuándo un
paciente necesita escalar atención.

**Evidencia buscada:** ejemplos reales, frecuencia, consecuencias y
coste.

## H2. Usuario

El usuario inicial podría ser uno de estos:

-   trabajador sanitario rural;
-   feldsher/enfermero;
-   promotor de salud;
-   médico responsable de puestos remotos;
-   personal de emergencias;
-   trabajador de una organización que opera en territorios aislados.

No elegir todavía definitivamente.

## H3. Comprador

El usuario puede no ser quien paga.

Posibles compradores:

-   centros médicos;
-   hospitales regionales;
-   administraciones sanitarias;
-   municipios/regiones;
-   organizaciones humanitarias;
-   empresas con trabajadores en instalaciones remotas;
-   compañías mineras, energéticas o industriales;
-   operadores de telemedicina.

## H4. Solución

La hipótesis no es simplemente que "LoRa + TinyML funciona".

La hipótesis comercial es:

> Una solución autónoma que captura datos básicos, guía una evaluación y
> transmite un resumen clínicamente útil sin depender de Internet reduce
> una dificultad concreta del flujo actual.

## H5. Disposición a adoptar

Una organización aceptaría probar ELBA en un entorno controlado.

## H6. Disposición a pagar

Existe un precio al cual el beneficio esperado supera claramente el
coste de ELBA.

------------------------------------------------------------------------

# 4. Customer Discovery: las primeras 10 entrevistas

## Objetivo

Las primeras 10 entrevistas **no son para vender ELBA**.

Son para descubrir si nuestra interpretación del problema es correcta.

YC recomienda que las primeras conversaciones sean detalladas y no
sesgadas, en lugar de presentar inmediatamente la idea y pedir opinión.

## Distribución recomendada

No entrevistar diez personas idénticas.

**Grupo A - 4 entrevistas** Profesionales que trabajan directamente con
pacientes en atención primaria, rural o remota.

**Grupo B - 3 entrevistas** Responsables/administradores que entienden
procesos, presupuesto y compras.

**Grupo C - 2 entrevistas** Organizaciones con operaciones en
territorios de conectividad limitada.

**Grupo D - 1 entrevista** Experto en dispositivo médico, telemedicina,
regulación o implementación.

Después de las primeras 10, concentrar la segunda ronda en el segmento
que muestre mayor dolor + capacidad de compra.

------------------------------------------------------------------------

# 5. Guion de entrevista

## Introducción

No comenzar explicando ELBA durante cinco minutos.

Ejemplo:

> Estoy estudiando cómo se realiza la evaluación inicial de pacientes en
> lugares donde el acceso a infraestructura médica o conectividad es
> limitado. Me interesa entender cómo funciona actualmente el proceso y
> dónde aparecen los mayores problemas.

## Preguntas sobre comportamiento real

1.  Cuénteme la última vez que tuvo que evaluar o gestionar a un
    paciente en una situación con conectividad o recursos limitados.
2.  ¿Qué información necesitaba obtener?
3.  ¿Qué equipos utilizó?
4.  ¿Qué ocurrió después de tomar las mediciones?
5.  ¿Cómo decidió si el paciente necesitaba atención adicional?
6.  ¿Cómo transmitió la información a otro profesional o centro?
7.  ¿Qué ocurre cuando no hay Internet o red móvil?
8.  ¿Cuál es la parte más difícil o lenta del proceso?
9.  ¿Con qué frecuencia ocurre?
10. ¿Qué sucede cuando el proceso falla o se retrasa?

## Preguntas económicas

11. ¿Qué recursos utilizan actualmente para resolverlo?
12. ¿Quién compra o aprueba esos equipos?
13. ¿Existe un presupuesto específico?
14. ¿Cuánto cuesta aproximadamente la solución actual?
15. ¿Qué coste genera una derivación, visita o traslado innecesario?
16. ¿Quién tendría autoridad para aprobar una prueba piloto?

## Solo al final: concepto ELBA

Explicar ELBA en 30-45 segundos.

Después preguntar:

17. ¿En qué situación concreta utilizaría algo así?
18. ¿Qué parte sería realmente útil?
19. ¿Qué parte considera innecesaria?
20. ¿Qué tendría que demostrar para que su organización aceptara
    probarlo?
21. ¿Qué impediría utilizarlo?
22. ¿Con quién más debería hablar?

## No preguntar

-   "¿Te gusta ELBA?"
-   "¿Crees que es una buena idea?"
-   "¿Comprarías esto?"
-   "¿Te parece innovador?"
-   "¿Crees que la IA ayudaría?"

Estas preguntas generan cumplidos, no evidencia.

------------------------------------------------------------------------

# 6. Scorecard después de cada entrevista

Completar inmediatamente.

  Variable                              Valor
  ------------------------------------- -------
  Persona                               
  Cargo                                 
  Organización                          
  Segmento                              
  Problema mencionado espontáneamente   
  Frecuencia                            
  Solución actual                       
  Coste actual                          
  Consecuencia del problema             
  Quién decide                          
  Quién paga                            
  Interés en piloto                     0-5
  Urgencia                              0-5
  Capacidad de compra                   0-5
  Encaje ELBA                           0-5
  Principal objeción                    
  Próxima introducción/contacto         
  Evidencia fuerte                      

**Señal importante:** una entrevista vale mucho más si la persona ofrece
una introducción, datos, acceso a un entorno real o un piloto que si
simplemente dice "interesante".

------------------------------------------------------------------------

# 7. ICP: Ideal Customer Profile

Después de 10-20 entrevistas debemos poder completar:

> Nuestro primer cliente ideal es \_\_\_\_\_\_\_\_\_\_ que opera en
> \_\_\_\_\_\_\_\_\_\_, tiene el problema \_\_\_\_\_\_\_\_\_\_
> aproximadamente \_\_\_\_\_\_\_\_\_\_ veces por mes, actualmente lo
> resuelve mediante \_\_\_\_\_\_\_\_\_\_, lo que le cuesta/provoca
> \_\_\_\_\_\_\_\_\_\_. La persona que decide la compra es
> \_\_\_\_\_\_\_\_\_\_ y el presupuesto proviene de
> \_\_\_\_\_\_\_\_\_\_.

Si no podemos completar esto con evidencia, todavía no conocemos nuestro
mercado inicial.

------------------------------------------------------------------------

# 8. Beachhead market

No intentar vender desde el principio a "todas las zonas rurales del
mundo".

Elegir un mercado inicial pequeño donde:

-   el problema sea intenso;
-   podamos acceder a usuarios;
-   exista presupuesto;
-   podamos hacer un piloto;
-   ELBA tenga una ventaja clara;
-   el ciclo de compra sea manejable.

## Segmentos a comparar

  ----------------------------------------------------------------------------------------
  Segmento               Dolor   Frecuencia   Presupuesto     Acceso     Piloto      Total
  ----------------- ---------- ------------ ------------- ---------- ---------- ----------
  Puestos                   /5           /5            /5         /5         /5        /25
  sanitarios                                                                    
  rurales                                                                       

  Hospitales                /5           /5            /5         /5         /5        /25
  regionales                                                                    

  Empresas                  /5           /5            /5         /5         /5        /25
  industriales                                                                  
  remotas                                                                       

  ONG/humanitario           /5           /5            /5         /5         /5        /25

  Emergencias               /5           /5            /5         /5         /5        /25
  ----------------------------------------------------------------------------------------

No completar con intuición. Completar con entrevistas.

------------------------------------------------------------------------

# 9. Competencia real

La competencia no son solamente otros dispositivos LoRa.

La competencia es **cualquier forma en que el cliente resuelve hoy el
problema**.

Debemos investigar:

1.  no hacer nada;
2.  teléfono/red móvil;
3.  oxímetro + termómetro + tensiómetro independientes;
4.  traslado del paciente;
5.  visita de profesional;
6.  telemedicina convencional;
7.  kits de diagnóstico remoto;
8.  dispositivos de monitorización conectados;
9.  soluciones satelitales;
10. otras plataformas offline.

## Matriz

  -------------------------------------------------------------------------------------
  Alternativa   Sin        Signos     Triage      Transmisión   Precio     Principal
                Internet   vitales    local                                limitación
  ------------- ---------- ---------- ----------- ------------- ---------- ------------
  Proceso                                                                  
  actual                                                                   

  Competidor A                                                             

  Competidor B                                                             

  ELBA          Sí         Sí         Hipótesis   LoRa          TBD        Por validar
  -------------------------------------------------------------------------------------

Nunca decir "no tenemos competencia". Si el problema existe, existe una
alternativa actual.

------------------------------------------------------------------------

# 10. Propuesta de valor

No vender sensores.

## Mala

> ELBA utiliza ESP32-S3, LoRa, TinyML, PPG y sensores biomédicos.

## Mejor

> ELBA permite realizar una evaluación primaria estructurada y
> transmitir sus resultados desde lugares donde la telemedicina
> convencional pierde conectividad.

## Fórmula

> Para **\[cliente\]** que necesita **\[trabajo\]** en
> **\[situación\]**, ELBA permite **\[resultado\]** sin **\[limitación
> actual\]**, mediante **\[ventaja diferenciadora\]**.

Esta frase debe cambiar después de las entrevistas.

------------------------------------------------------------------------

# 11. MVP

YC define el MVP como algo extremadamente simple que puede entregarse a
los primeros usuarios para comprobar si aporta valor.

Para ELBA, el MVP no necesita demostrar toda la visión final.

## MVP técnico recomendado

### Debe hacer

1.  medir un conjunto mínimo de signos;
2.  mostrar/guiar un flujo simple;
3.  generar un registro;
4.  transmitir datos nodo -\> gateway por LoRa;
5.  almacenar el resultado;
6.  demostrar una clasificación experimental claramente etiquetada como
    no clínica/no validada.

### No necesita inicialmente

-   diseño industrial final;
-   aplicación móvil completa;
-   cloud complejo;
-   chatbot;
-   LLM;
-   múltiples modelos de IA;
-   integración hospitalaria completa;
-   decenas de sensores;
-   fabricación masiva.

**Regla:** construir la menor demostración que permita obtener evidencia
del cliente.

------------------------------------------------------------------------

# 12. Producto vs prototipo

YC distingue un prototipo de un MVP: un prototipo demuestra una parte
técnica; un MVP permite probar demanda/valor con usuarios.

Por tanto ELBA necesita dos pistas paralelas:

### Track técnico

sensor -\> firmware -\> TinyML -\> LoRa -\> gateway -\> almacenamiento.

### Track comercial

problema -\> entrevista -\> ICP -\> propuesta de valor -\> piloto -\>
precio -\> compra.

El error sería completar únicamente el track técnico.

------------------------------------------------------------------------

# 13. Cómo puede ganar dinero ELBA

Todavía no debemos decidir definitivamente. Debemos **probar modelos**.

## Modelo A: venta de hardware

Cliente compra:

-   nodo ELBA;
-   gateway;
-   accesorios.

**Ingresos:** pago inicial.

Ventaja: sencillo de explicar.\
Riesgo: ingresos poco recurrentes.

## Modelo B: Hardware + licencia anual

Cliente compra/arrienda dispositivos y paga una licencia por:

-   software;
-   gestión;
-   actualizaciones;
-   analítica;
-   soporte;
-   sincronización;
-   administración de dispositivos.

**Hipótesis preferida para investigar**, porque combina hardware con
ingresos recurrentes.

## Modelo C: Device-as-a-Service

Pago mensual/anual por dispositivo.

Incluye:

-   hardware;
-   reemplazo;
-   mantenimiento;
-   firmware;
-   plataforma;
-   soporte.

Puede reducir la barrera inicial de compra.

## Modelo D: contratos institucionales

Venta por proyecto/piloto/despliegue a:

-   regiones;
-   hospitales;
-   ONG;
-   empresas.

Posible precio por número de puestos/nodos.

## Modelo E: OEM / licenciamiento

En una etapa posterior, licenciar tecnología/firmware/arquitectura a
fabricantes existentes.

No es prioridad ahora.

------------------------------------------------------------------------

# 14. Hipótesis de monetización inicial

Una hipótesis razonable para probar:

> **B2B/B2G: kit de hardware + servicio recurrente de
> software/soporte.**

No fijar aún el precio final.

Debemos descubrir:

-   cuánto cuesta el problema;
-   presupuesto del comprador;
-   coste de alternativas;
-   coste total del hardware;
-   mantenimiento;
-   soporte;
-   ciclo de vida;
-   margen requerido.

YC recomienda pensar en el modelo de negocio según **cómo se cobra**, no
solamente según la industria. En un modelo recurrente, métricas como
MRR/ARR, retención y CAC se vuelven importantes.

------------------------------------------------------------------------

# 15. Pricing: cómo descubrir el precio

No comenzar con:

> "Nuestro dispositivo costará 10.000 RUB."

Primero calcular:

## Coste

**COGS por unidad**

-   electrónica;
-   PCB;
-   sensores;
-   carcasa;
-   batería;
-   ensamblaje;
-   test;
-   embalaje;
-   logística;
-   garantía.

## Valor

Preguntar:

-   ¿qué coste evita?
-   ¿qué tiempo ahorra?
-   ¿reduce desplazamientos?
-   ¿permite atender más puntos?
-   ¿reduce equipamiento duplicado?
-   ¿qué cuesta la alternativa?

## Experimentos

Presentar diferentes configuraciones a compradores reales:

-   compra;
-   alquiler;
-   suscripción;
-   piloto pagado;
-   kit + licencia.

El precio final debe venir del valor y de experimentos comerciales, no
de aplicar un margen arbitrario al BOM.

------------------------------------------------------------------------

# 16. Unit Economics

Crear esta hoja tan pronto tengamos datos:

``` text
Precio hardware                  = ?
COGS hardware                    = ?
Margen bruto hardware            = precio - COGS

Ingreso recurrente mensual       = ?
Coste servicio mensual           = ?
Margen recurrente                = ?

CAC                              = ?
Vida media cliente               = ?
LTV                              = ?

Tiempo de recuperación CAC       = ?
```

## Pregunta crítica

Si vendemos una unidad, ¿ganamos suficiente dinero para:

-   fabricar otra;
-   mantenerla;
-   dar soporte;
-   vender la siguiente;
-   financiar crecimiento?

------------------------------------------------------------------------

# 17. TAM / SAM / SOM

No inventar un TAM enorme con "todas las personas sin Internet".

## TAM

Mercado total que podría utilizar una solución de esta categoría.

## SAM

Parte del mercado compatible con nuestro producto, geografía y
regulación.

## SOM

Clientes que realmente podemos alcanzar durante los primeros años.

### Bottom-up primero

Ejemplo de estructura:

``` text
Nº de organizaciones objetivo
x
Nº promedio de puntos remotos por organización
x
precio anual por punto
=
mercado anual accesible
```

Los números deben venir de fuentes y entrevistas.

------------------------------------------------------------------------

# 18. Go-to-Market

La primera estrategia no es publicidad masiva.

## Etapa 1

Founder-led sales.

Kevin habla directamente con:

-   médicos;
-   responsables de centros;
-   organizaciones;
-   administradores;
-   potenciales pilotos.

## Etapa 2

Pilotos.

Objetivo: conseguir 1-3 organizaciones dispuestas a evaluar ELBA.

## Etapa 3

Casos de uso demostrables.

Convertir resultados en:

-   caso de estudio;
-   métricas;
-   testimonio;
-   referencia.

## Etapa 4

Ventas repetibles.

Identificar:

-   quién inicia;
-   quién influye;
-   quién aprueba técnicamente;
-   quién aprueba clínicamente;
-   quién paga;
-   cuánto dura la compra.

------------------------------------------------------------------------

# 19. Funnel B2B inicial

Medir semanalmente:

``` text
Contactos identificados
        ↓
Contactados
        ↓
Respondieron
        ↓
Entrevistados
        ↓
Problema validado
        ↓
Interés en demo
        ↓
Interés en piloto
        ↓
Piloto acordado
        ↓
Piloto realizado
        ↓
LOI / pago
```

Ejemplo de meta del acelerador:

-   40 contactos;
-   20 conversaciones;
-   10+ entrevistas profundas;
-   5 demos;
-   3 candidatos a piloto;
-   1 LOI/piloto.

Esto es una meta, no una predicción.

------------------------------------------------------------------------

# 20. Métrica principal durante la aceleradora

No usar seguidores, visitas o likes.

## North Star temporal

**Número de organizaciones que aceptan avanzar a una prueba concreta de
ELBA.**

Métricas secundarias:

-   entrevistas completadas;
-   \% con problema confirmado;
-   introducciones obtenidas;
-   candidatos a piloto;
-   LOIs;
-   pilotos;
-   precio probado;
-   tiempo de construcción del MVP.

------------------------------------------------------------------------

# 21. Evidencia: escala de fuerza

De más débil a más fuerte:

1.  "Qué interesante."
2.  "Yo lo usaría."
3.  Responde preguntas.
4.  Presenta a un colega.
5.  Comparte datos/proceso interno.
6.  Acepta una segunda reunión.
7.  Acepta evaluar prototipo.
8.  Firma LOI.
9.  Acepta piloto.
10. Paga.

**Objetivo:** mover conversaciones hacia evidencia 5-10.

------------------------------------------------------------------------

# 22. Piloto

Un piloto debe tener una hipótesis y métricas.

## Plantilla

**Organización:**\
**Lugar:**\
**Usuario:**\
**Problema actual:**\
**Duración:**\
**Nº de dispositivos:**\
**Nº de evaluaciones:**

### Queremos demostrar

-   facilidad de uso;
-   estabilidad técnica;
-   calidad de medición;
-   cobertura/comunicación;
-   tiempo por evaluación;
-   utilidad del resumen;
-   aceptación del usuario.

### Criterios de éxito

Definir antes del piloto.

Nunca diseñar los criterios después de ver los resultados.

------------------------------------------------------------------------

# 23. Riesgos principales

## Mercado

Puede que el problema exista pero nadie tenga presupuesto.

**Mitigación:** entrevistar compradores, no solo usuarios.

## Producto

Puede que el cliente necesite algo mucho más simple.

**Mitigación:** MVP reducido.

## Tecnología

Precisión de sensores/PPG/TinyML insuficiente.

**Mitigación:** validación por módulos contra referencias.

## Regulación

La clasificación clínica puede convertir funciones en
software/dispositivo médico regulado.

**Mitigación:** consultar expertos antes de hacer claims clínicos
comerciales.

## LoRa

Alcance real depende del entorno, antena, regulación y topografía.

**Mitigación:** pruebas de campo.

## Venta B2G

Ciclos de compra potencialmente largos.

**Mitigación:** explorar simultáneamente un segmento B2B con problema
similar.

------------------------------------------------------------------------

# 24. Moat / ventaja defendible

"Usamos IA" no es un moat.

"Usamos LoRa" tampoco.

Posibles ventajas futuras:

-   dataset propio de uso en entornos remotos;
-   flujo de triage validado;
-   integración hardware + firmware + comunicación;
-   experiencia de usuario diseñada para personal no especialista;
-   distribución/acuerdos;
-   resultados de pilotos;
-   propiedad intelectual específica;
-   know-how regulatorio;
-   costes de despliegue inferiores.

La ventaja real se descubre construyendo y trabajando con clientes.

------------------------------------------------------------------------

# 25. Equipo

Actualmente el proyecto debe ser transparente respecto al reparto real.

## Kevin

Founder / Product + Technical Lead

Responsabilidades:

-   visión;
-   producto;
-   arquitectura;
-   ML/TinyML;
-   software;
-   customer discovery;
-   desarrollo de negocio;
-   coordinación de pilotos.

## Segundo miembro

Definir un rol realista y limitado según disponibilidad/interés.

No crear una estructura corporativa ficticia para una startup de dos
personas.

YC insiste en foco y velocidad en equipos pequeños.

------------------------------------------------------------------------

# 26. Plan de 8 semanas

## Semana 1: problema

-   preparar CRM;
-   listar 40 contactos;
-   realizar primeras 5 entrevistas;
-   documentar alternativas actuales;
-   no cambiar producto después de cada entrevista.

**Entregable:** Problem Evidence v1.

## Semana 2: segmento

-   completar 10+ entrevistas;
-   puntuar segmentos;
-   identificar usuario y comprador;
-   seleccionar beachhead provisional.

**Entregable:** ICP v1.

## Semana 3: propuesta de valor

-   sintetizar patrones;
-   definir problema prioritario;
-   eliminar funciones no esenciales;
-   diseñar MVP.

**Entregable:** MVP Spec v1.

## Semana 4: prototipo

-   integrar sensores mínimos;
-   flujo de firmware;
-   comunicación LoRa;
-   gateway;
-   demo end-to-end.

**Entregable:** demo técnica.

## Semana 5: prueba con usuarios

-   enseñar MVP;
-   observar sin explicar demasiado;
-   registrar errores;
-   medir tiempo y comprensión.

**Entregable:** usability report.

## Semana 6: negocio

-   probar quién paga;
-   pricing interviews;
-   calcular COGS;
-   probar compra vs suscripción;
-   construir unit economics preliminares.

**Entregable:** Business Model v1.

## Semana 7: pilotos

-   volver a mejores contactos;
-   pedir piloto explícitamente;
-   definir protocolo;
-   buscar LOI.

**Entregable:** 1-3 pilot candidates.

## Semana 8: pitch

-   actualizar números;
-   preparar demo;
-   mostrar evidencia;
-   preparar deck;
-   practicar preguntas.

**Entregable:** Investor/Accelerator Deck.

------------------------------------------------------------------------

# 27. Rutina semanal estilo aceleradora

Cada semana responder:

``` text
1. ¿Cuál era nuestra hipótesis más importante?
2. ¿Qué hicimos para probarla?
3. ¿Qué evidencia obtuvimos?
4. ¿Qué aprendimos que era falso?
5. ¿Qué cambió?
6. ¿Cuál es el cuello de botella actual?
7. ¿Qué número queremos mover esta semana?
8. ¿Qué haremos en los próximos 7 días?
```

No reportar "trabajé mucho".

Reportar resultados:

> 7 entrevistas, 5 confirmaron X, 3 utilizan Y, 2 aceptaron demo y 1 nos
> presentó al responsable de compras.

------------------------------------------------------------------------

# 28. Business Model Canvas provisional

## Customer Segments

**TBD mediante entrevistas.**

Hipótesis: - instituciones sanitarias con puntos remotos; -
organizaciones con personal en lugares aislados.

## Value Proposition

Evaluación primaria y transmisión de información básica sin dependencia
continua de Internet.

## Channels

-   venta directa;
-   pilotos;
-   partners;
-   distribuidores médicos posteriormente.

## Customer Relationships

B2B/B2G high-touch inicialmente.

## Revenue Streams

Hipótesis: - hardware; - licencia/servicio; - Device-as-a-Service; -
contratos institucionales.

## Key Resources

-   firmware;
-   hardware;
-   modelos;
-   datos;
-   conocimiento clínico;
-   red de pilotos.

## Key Activities

-   I+D;
-   validación;
-   fabricación;
-   soporte;
-   ventas institucionales.

## Key Partners

-   LETI;
-   profesionales sanitarios;
-   instituciones piloto;
-   fabricantes;
-   asesores regulatorios.

## Cost Structure

-   componentes;
-   fabricación;
-   certificación;
-   software;
-   soporte;
-   ventas;
-   logística.

**Todo esto es provisional hasta validación.**

------------------------------------------------------------------------

# 29. Pitch deck final

## Slide 1 - ELBA

Una frase que explique resultado, no tecnología.

## Slide 2 - Problem

Un problema concreto + evidencia de entrevistas.

## Slide 3 - Current workflow

Cómo se resuelve hoy.

## Slide 4 - Solution

ELBA.

## Slide 5 - Demo

Flujo real.

## Slide 6 - Why now

Edge AI, hardware accesible, necesidad identificada, etc., solo con
evidencia.

## Slide 7 - Customer

ICP específico.

## Slide 8 - Market

TAM/SAM/SOM bottom-up.

## Slide 9 - Business model

Quién paga + cuánto + cómo.

## Slide 10 - Competition

Alternativas reales.

## Slide 11 - Validation / traction

Entrevistas, LOIs, pilotos, pruebas.

## Slide 12 - Technology

Solo lo suficiente para demostrar diferenciación.

## Slide 13 - Go-to-market

Cómo conseguimos los primeros 10, 100, 1.000 clientes/puntos.

## Slide 14 - Team

Por qué podemos construirlo y venderlo.

## Slide 15 - Roadmap / Ask

Qué necesitamos ahora.

------------------------------------------------------------------------

# 30. Qué NO poner en la presentación

Evitar:

-   "mercado de billones" sin cálculo;
-   "no tenemos competencia";
-   "todos son nuestros clientes";
-   demasiada arquitectura;
-   15 sensores;
-   20 funcionalidades futuras;
-   "IA" repetido como argumento de valor;
-   precisión clínica no demostrada;
-   afirmar que salva vidas sin evidencia;
-   proyecciones financieras enormes sin base;
-   gráficos decorativos;
-   palabras como "revolucionario" sin evidencia.

------------------------------------------------------------------------

# 31. Qué debe impresionar al tracker

No intentar impresionarla con cantidad de trabajo.

Llegar diciendo:

> Tenemos una hipótesis tecnológica clara. Ahora queremos utilizar la
> aceleradora para identificar el primer segmento que realmente tiene
> este problema, validar quién toma la decisión de compra, construir el
> MVP mínimo para ese caso de uso y conseguir un piloto.

Después mostrar:

-   qué sabemos;
-   qué todavía es hipótesis;
-   cómo lo vamos a comprobar;
-   qué métricas vamos a utilizar.

Eso demuestra pensamiento de startup.

------------------------------------------------------------------------

# 32. Preguntas para Elena hoy

1.  ¿Qué evidencia esperan de las entrevistas al final del programa?
2.  ¿Qué perfiles consideran válidos como potenciales clientes para
    Customer Development?
3.  ¿Esperan grabación completa de las entrevistas o también un
    resumen/protocolo?
4.  ¿Cuál es el entregable esperado respecto al modelo de negocio?
5.  ¿Se espera una carta de intención o piloto antes del Demo Day?
6.  ¿Qué métricas utilizan para evaluar los proyectos?
7.  ¿Qué nivel de MVP esperan de un proyecto hardware/medtech?
8.  ¿Puede ayudarnos a conseguir contactos en hospitales, centros
    regionales o empresas con operaciones remotas?
9.  ¿Hay expertos de LETI en certificación/regulación de dispositivos
    médicos con quienes podamos hablar?
10. ¿Cuál debería ser nuestro objetivo verificable para la próxima
    reunión?

------------------------------------------------------------------------

# 33. Lo que debemos conseguir hoy

Salir de la reunión sabiendo:

-   próximo entregable;
-   fecha;
-   número/tipo de entrevistas;
-   formato de evidencia;
-   objetivo del MVP;
-   qué debe existir para Demo Day;
-   qué apoyo puede darnos Elena;
-   cuándo será la próxima revisión.

------------------------------------------------------------------------

# 34. Dashboard de ELBA

Actualizar cada semana.

``` text
ENTREVISTAS
Objetivo:       20
Realizadas:      0

SEGMENTOS TESTADOS
Objetivo:        4
Actual:          0

DEMOS
Objetivo:        5
Realizadas:      0

CANDIDATOS PILOTO
Objetivo:        3
Actual:          0

LOI
Objetivo:        1
Actual:          0

PILOTO PAGADO
Objetivo:        1
Actual:          0

MVP
Estado:          arquitectura/prototipado

COGS
Estado:          por calcular

PRECIO
Estado:          no validado

ICP
Estado:          no validado
```

Los objetivos son internos y pueden modificarse con el tracker.

------------------------------------------------------------------------

# 35. Registro de hipótesis

  -----------------------------------------------------------------------------------
  ID          Hipótesis     Riesgo      Experimento     Evidencia         Estado
                                                        requerida         
  ----------- ------------- ----------- --------------- ----------------- -----------
  H01         Problema      Alto        entrevistas     5+ casos          Pendiente
              frecuente                                 concretos         

  H02         Segmento      Alto        10-20           patrón claro      Pendiente
              prioritario               entrevistas                       

  H03         LoRa aporta   Medio       entrevistas +   necesidad + test  Pendiente
              valor                     field test                        

  H04         Triage local  Alto        entrevistas     workflow real     Pendiente
              aporta valor                                                

  H05         Comprador     Alto        buyer           budget/process    Pendiente
              tiene                     interviews                        
              presupuesto                                                 

  H06         Existe piloto Alto        propuesta       compromiso        Pendiente
              posible                   piloto                            

  H07         Modelo        Medio       pricing         preferencia/WTP   Pendiente
              recurrente                interviews                        
              viable                                                      
  -----------------------------------------------------------------------------------

------------------------------------------------------------------------

# 36. CRM mínimo

  ------------------------------------------------------------------------------------
  Contacto   Organización   Rol      Segmento   Estado   Problema   Próximo   Fecha
                                                                    paso      
  ---------- -------------- -------- ---------- -------- ---------- --------- --------

  ------------------------------------------------------------------------------------

Estados:

``` text
Lead
Contacted
Interview scheduled
Interviewed
Qualified
Demo
Pilot discussion
LOI
Pilot
Customer
Lost
```

------------------------------------------------------------------------

# 37. Decisiones que NO tomaremos todavía

Hasta tener evidencia, no decidir definitivamente:

-   cliente principal;
-   precio final;
-   mercado global;
-   modelo de suscripción;
-   features finales;
-   forma industrial final;
-   algoritmo final;
-   claim médico;
-   canal de venta definitivo.

La función de las próximas semanas es **reducir incertidumbre**.

------------------------------------------------------------------------

# 38. La pregunta semanal más importante

> **¿Qué hemos aprendido esta semana que no sabíamos la semana pasada y
> qué decisión cambia por ese aprendizaje?**

Si la respuesta es "nada", estamos ejecutando tareas, pero no acelerando
la startup.

------------------------------------------------------------------------

# 39. Referencias de trabajo

## Y Combinator

-   YC Essential Startup Advice\
    https://www.ycombinator.com/blog/ycs-essential-startup-advice/

-   YC Guide to Business Models\
    https://www.ycombinator.com/library/Gh-yc-guide-to-business-models

-   Startup School: MVP, KPIs and Analytics\
    https://www.ycombinator.com/blog/startup-school-week-2-recap-michael-seibel-adora-cheung-and-ilya-volodarsky/

-   Startup School: Talking to Users\
    https://www.ycombinator.com/blog/startup-school-week-1-recap-kevin-hale-and-eric-migicovsky/

-   YC Pricing\
    https://www.ycombinator.com/blog/startup-school-week-7-recap-kevin-hale-on-conversion-rates-and-pricing

-   YC Startup Playbook\
    https://www.ycombinator.com/blog/startup-playbook/

-   YC Practical Design: MVP\
    https://www.ycombinator.com/blog/practical-design-mvp

------------------------------------------------------------------------

# 40. Próxima acción

**Hoy:** reunión con Elena.

**Después de la reunión:** 1. actualizar este documento con sus
requisitos; 2. crear lista de 40 contactos; 3. preparar guion final de
entrevistas en ruso/inglés; 4. agendar las primeras cinco entrevistas;
5. crear CRM; 6. definir los 3-4 segmentos que vamos a comparar; 7.
continuar MVP técnico en paralelo; 8. revisar resultados semanalmente.

**La prioridad número uno ya no es añadir funcionalidades a ELBA. La
prioridad es obtener evidencia de que estamos construyendo la solución
correcta para un comprador real.**
