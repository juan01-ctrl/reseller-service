---
name: premium-saas-ui
description: Filosofía visual y patrones de UI de clase mundial para landings tipo Linear, Stripe, Raycast, Vercel, Arc y Apple (jerarquía, ritmo, profundidad, conversión).
---

# UI SaaS premium (ImportaFlow)

## Cuándo usarlo

- Al diseñar o implementar cualquier sección de la landing en **React + Tailwind** (y **Framer Motion** cuando sume).
- Cuando el resultado deba sentirse **top-tier**: claro, caro, moderno y **conversion-first**, no “correcto pero genérico”.
- Antes de agregar elementos decorativos: revisá jerarquía, foco y espacio.

## Instrucciones

### Filosofía visual (no negociable)

La interfaz debe parecer **producto premium**, no plantilla. La base es una **filosofía de menos pero mejor**: cada píxel tiene intención. Preferí **pocos elementos con mucho impacto** antes que muchos elementos mediocres.

- **Jerarquía visual fuerte**: en cada mirada, el ojo debe saber **qué leer primero, segundo y tercero**. Si hay dos cosas “gritando” al mismo nivel, fallaste.
- **Tipografía grande y segura**: titulares con presencia; cuerpo legible y aireado. La tipografía es el 50% del diseño premium.
- **Spacing deliberado**: el espacio no es “lo que sobra”; es **ritmo, pausa y énfasis**. Usá whitespace como herramienta de diseño, no como accidente.
- **Secciones minimalistas pero pulidas**: pocas líneas, pocas cajas; cada bloque con **acabado fino** (bordes, blur, gradiente, sombra suave).
- **Contraste fondo oscuro / superficie clara**: el canvas puede ser oscuro; las **superficies de contenido** (cards, paneles, mockups) deben sentirse **luminosas, nítidas y caras** frente al fondo.
- **Gradientes y blur sutiles**: profundidad con **capas** (radiales, velos, bloom leve), nunca chapas de color planas sin intención.
- **Cards premium**: cada card debe sentirse **intencional y cara**: capas, vidrio, sombra suave, borde casi invisible, interior ordenado.
- **Motion al servicio de la jerarquía**: animá para **guiar la atención** (entrada escalonada, micro-hover, parallax leve), no para exhibir técnica. Si la animación no aclara el mensaje, sacala.
- **Ritmo entre secciones**: alterná densidad (respiración → momento fuerte → respiración). Evitá monotonía de “mismo bloque repetido”.
- **Whitespace como diseño**: antes de sumar líneas divisorias o más UI, **subí el aire**. El lujo se lee en el silencio visual.
- **Reducción agresiva del ruido**: cada elemento extra compite con la conversión. Eliminá hasta que duela; después sumá **un** detalle premium.

### Reglas explícitas

- Preferí **menos elementos con más impacto** que más elementos “completando la grilla”.
- **Cada sección tiene un foco dominante** (titular + prueba visual o CTA). Lo demás es apoyo.
- **Nunca** pongas varios elementos de igual peso visual compitiendo (dos titulares grandes, dos mockups hero, dos CTAs primarios iguales lado a lado sin jerarquía).
- **Spacing antes que bordes**: si necesitás separar, primero **alejá**; los separadores son último recurso.
- **Estados vacíos y “respiración” premium**: no llenes huecos por ansiedad; el vacío bien usado vende más que el relleno.
- **Composición antes que decoración**: primero layout, alineaciones, proporciones, columnas; después gradientes y detalles.
- **Cada card debe sentirse cara**: si una card podría estar en cualquier template, rediseñala.
- **Evitá clichés de startup** y layouts que “ya viste mil veces” sin motivo narrativo.
- **No caigas en “3 cards en fila con ícono + título + texto”** salvo que el contenido lo exija y lo **rompas** con variación de tamaño, asimetría o jerarquía clara entre las tres.
- Fomentá composiciones **asimétricas, editoriales y modernas** (split desigual, mockup cortando el grid, texto ancho vs módulo angosto).
- **Profundidad por capas**: fondos en capas (noise ultra sutil, radiales, líneas), sombras suaves, vidrio, overlaps controlados.
- Combiná **gradientes lineales + radiales + blur** con moderación; la página debe sentirse **viva**, no **ruidosa**.

## Referencias visuales

Usá estas referencias como **barra de calidad**, no para copiar literal:

- **Heros de Linear**: foco único, tipografía impecable, UI limpia, sensación “producto serio”.
- **Páginas de producto de Stripe**: narrativa visual, secciones con ritmo, demos que se sienten reales.
- **Layouts estilo keynote de Apple**: escala tipográfica, silencio, revelación por secciones, producto como protagonista.
- **Landing de Raycast**: oscuro premium, detalle fino, sensación de app nativa de altísima gama.
- **Home de Vercel**: minimalismo técnico, gradientes y geometría con intención, sensación “infra confiable”.
- **Arc y sitios SaaS modernos** en dark mode: spacing generoso, contrastes suaves, interfaces que “respiran”.

## Patrones de UI preferidos

Ejemplos de patrones que suelen verse en sitios de primer nivel (adaptalos al contenido, no los fuerces todos a la vez):

- **Hero split grande** con mockup “flotando” sobre gradiente y profundidad (overlap, sombra, bloom).
- **Barra de CTA sticky** discreta (no gritona) para conversión persistente sin ensuciar.
- **Cards con glass** y **ligera inclinación** (1–2°) o perspectiva sutil en hover, siempre contenido.
- **Badges de métricas flotantes** alrededor del producto (una sola jerarquía: uno principal, otros secundarios).
- **Mockup de chat interactivo** (estados, typing, mensajes) que se sienta producto, no screenshot genérico.
- **Pricing en capas** (plan destacado con elevación, profundidad, luz) sin verse “template de pricing”.
- **Fondos con gradiente animado muy sutil** (lentitud, opacidad baja) para vida sin distracción.
- **Mockups mobile de gama alta** dentro de **marcos tipo browser** o escena compuesta (profundidad, reflexión muy leve).

## Qué evitar

- **Bloques genéricos de Tailwind** “pegados” sin composición (stack sin foco, todo `rounded-lg border`).
- **Tipografía chica** o cuerpo apretado; es señal de template barato.
- **Spacing apretado**; si duele el aire, probablemente está bien.
- **Cards planas** con solo `border` y sin profundidad, vidrio o luz.
- **Sombras exageradas** o múltiples sombras duras (efecto “bootstrap”).
- **Demasiados íconos**; el ícono debe ayudar a leer, no decorar.
- **Badges de más** (cada sección con 5 etiquetas); usá pocas y jerarquizadas.
- **Repetir el mismo layout** en todas las secciones (fatiga visual y sensación boilerplate).
- **Plantillas SaaS básicas** con grillas simétricas repetidas sin narrativa.
- **Ruido visual**: líneas, puntos, grids y partículas “porque sí”.

## Ejemplos

- **Hero top-tier:** titular XL con tracking fino; subtítulo corto; CTAs con contraste claro; derecha con **mockup en capas** (browser + chat) y **un** elemento flotante principal + secundarios más chicos; fondo con **2–3 capas** (gradiente + radial + noise 2%).
- **Sección “problema/solución”:** en vez de 3 cards iguales, **una fila editorial**: titular ancho + **módulo visual asimétrico** (card grande + card chica alineadas al baseline).
- **Pricing:** plan destacado con **luz**, **elevación** y menos texto; los demás más calmados; **un** foco por banda.
