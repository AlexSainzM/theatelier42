# SPEC — Rediseño del Sitio Web Atelier 42

## 1. Contexto general del proyecto

Atelier 42 es una marca de repostería boutique en Puebla, desarrollada por Fer y Alejandro. El sitio actual ya comunica una estética premium, artesanal y editorial, pero necesita evolucionar de una página enfocada principalmente en productos hacia una landing comercial orientada a:

- Venta de piezas especiales bajo pedido.
- Pedidos para celebraciones y eventos.
- Presentaciones personalizadas.
- Detalles corporativos.
- Productos individuales o de colección del día.

El rediseño debe conservar la sensación premium actual, pero mejorar la claridad comercial, la conversión y la estructura de servicios.

---

## 2. Objetivo principal del rediseño

Rediseñar el sitio actual de Atelier 42 para que no solo muestre productos, sino que comunique claramente el modelo de negocio:

> Repostería boutique sobre pedido para celebraciones, eventos y detalles personalizados.

El nuevo sitio debe ayudar al visitante a entender rápidamente:

1. Qué vende Atelier 42.
2. Qué servicios ofrece.
3. Qué productos tiene actualmente.
4. Cómo puede pedir o cotizar.
5. Qué diferencia hay entre una presentación esencial y una presentación premium.
6. Qué condiciones básicas aplican para pedidos especiales.

---

## 3. Stack actual y restricciones técnicas

El sitio actual es estático y utiliza:

- HTML.
- CSS personalizado.
- JavaScript vanilla.
- Bootstrap 5.3.3.
- Google Fonts:
  - Cormorant Garamond.
  - DM Sans.

El rediseño debe mantenerse dentro de esta arquitectura.

### Restricciones

- No agregar frameworks nuevos.
- No usar React, Vue ni dependencias complejas.
- Mantener estructura compatible con hosting estático.
- No crear backend.
- El formulario puede quedar preparado para conectar después a Formspree o WhatsApp.
- Conservar el uso de `styles.css` y `script.js`.
- Mantener animaciones suaves tipo `fade-up-element`.
- Mantener responsive design.
- Evitar cambios innecesarios en rutas de imágenes existentes.
- No eliminar productos actuales; pueden reorganizarse.

---

## 4. Diagnóstico del sitio actual

El sitio actual tiene buen tono visual y premium, pero está demasiado orientado a “Nuestras Creaciones”. Actualmente existen secciones como:

- Hero.
- Marquee de productos.
- Creaciones.
- Filosofía.
- Diferenciadores.
- Quote editorial.
- Galería.
- Contacto.
- Footer.

La sección de contacto ya contempla tipos de consulta como:

- Encargo personalizado.
- Evento privado.
- Corporativo.
- Otro.

Esto debe aprovecharse para convertir esos conceptos en servicios visibles dentro del sitio.

---

## 5. Nuevo posicionamiento del sitio

### Propuesta de valor principal

> Postres artesanales de autor para celebraciones, eventos y pedidos especiales en Puebla, preparados bajo pedido con estética cuidada y opciones de presentación personalizada.

### Versión corta para hero

> Repostería boutique para momentos especiales.

### Versión alternativa

> Postres de autor, hechos bajo pedido para celebrar con intención.

### Tono de marca

El tono debe sentirse:

- Premium.
- Cercano.
- Sensorial.
- Artesanal.
- Elegante.
- No pretencioso.
- Claro y comercial.

Evitar un lenguaje excesivamente europeo o ficticio que pueda alejarse de la realidad local del proyecto.

---

## 6. Nueva arquitectura del sitio

La nueva estructura recomendada es:

1. Navbar.
2. Hero principal.
3. Servicios Atelier 42.
4. Celebraciones Atelier.
5. Presentaciones disponibles.
6. Colección actual / productos.
7. Cómo hacer tu pedido.
8. Filosofía / Sobre Atelier 42.
9. Galería.
10. Contacto / cotización.
11. Footer.

---

## 7. Navbar propuesto

### Links recomendados

- Inicio
- Servicios
- Celebraciones
- Creaciones
- Filosofía
- Contacto

### CTA principal

- Cotizar pedido

El CTA debe llevar al formulario de contacto o a un botón de WhatsApp.

---

## 8. Hero principal

### Objetivo del hero

El hero debe explicar rápidamente que Atelier 42 no es solo una tienda de postres, sino una marca de repostería bajo pedido para celebraciones.

### Texto sugerido

Eyebrow:

> Repostería boutique · Puebla

Título:

> Postres de autor para celebrar con intención

Subtítulo:

> Creamos piezas artesanales y postres individuales para celebraciones, eventos y pedidos especiales, cuidando cada detalle desde el sabor hasta la presentación.

CTAs:

- Ver servicios
- Cotizar por WhatsApp

### Nota visual

Mantener imagen hero actual si funciona bien visualmente. Evitar que el texto se pierda en el fondo. Revisar overlay para mejorar legibilidad.

---

## 9. Sección: Servicios Atelier 42

### Objetivo

Mostrar rápidamente las líneas principales de servicio.

### Título

> Servicios Atelier 42

### Texto introductorio

> Creamos postres para distintos momentos: desde una pieza especial para compartir hasta pedidos personalizados para celebraciones, empresas y eventos privados.

### Cards de servicios

#### 1. Celebraciones Atelier

Descripción:

> Postres individuales para eventos, reuniones y celebraciones especiales. Disponibles en presentación esencial o premium.

CTA:

> Cotizar celebración

#### 2. Piezas para Compartir

Descripción:

> Postres completos elaborados bajo pedido, ideales para cumpleaños, comidas familiares, reuniones o detalles especiales.

CTA:

> Ver creaciones

#### 3. Detalles Corporativos

Descripción:

> Pedidos personalizados para empresas, clientes, colaboradores o eventos internos, con opción de etiqueta y presentación especial.

CTA:

> Solicitar cotización

#### 4. Ediciones Especiales

Descripción:

> Colecciones limitadas por temporada, disponibles bajo preventa para fechas especiales como San Valentín, Día de las Madres o Navidad.

CTA:

> Consultar disponibilidad

---

## 10. Sección prioritaria: Celebraciones Atelier

Esta debe ser una de las secciones más importantes del nuevo sitio.

### Objetivo

Vender el servicio principal recomendado: pedidos por volumen para celebraciones con opción de presentación personalizada.

### Título

> Celebraciones Atelier

### Subtítulo

> Postres individuales para eventos, preparados bajo pedido y presentados según el estilo de tu celebración.

### Texto principal

> Diseñamos pedidos para cumpleaños, bautizos, reuniones familiares, eventos privados y detalles corporativos. Puedes elegir una presentación práctica para compartir o una versión premium pensada para elevar la experiencia visual de tu evento.

### Reglas visibles

Mostrar en un bloque elegante:

- Pedido mínimo sugerido: 20 piezas.
- Anticipo: 50% para confirmar.
- Tiempo recomendado: 72 horas de anticipación.
- Entrega: recolección, entrega local con costo adicional o envío por plataforma.

### Importante

Estas reglas deben comunicarse con cuidado. No deben sentirse rígidas o agresivas. Deben sentirse como parte de una experiencia organizada y bajo pedido.

---

## 11. Sección: Presentaciones disponibles

### Objetivo

Explicar claramente la diferencia entre presentación básica y premium.

### Título

> Elige la presentación ideal para tu evento

### Opción 1: Celebración Esencial

Descripción:

> Una presentación práctica y cuidada para pedidos por volumen, reuniones casuales o consumo inmediato.

Incluye:

- Flanera clásica de aluminio AL-07.
- Lámina plástica como tapa.
- Liga.
- Cuchara.

Ideal para:

- Reuniones familiares.
- Pedidos sencillos.
- Consumo inmediato.
- Celebraciones casuales.

### Opción 2: Celebración Atelier

Descripción:

> Nuestra presentación premium, pensada para eventos donde cada detalle visual importa.

Incluye:

- Molde de mayor capacidad.
- Interior dorado.
- Exterior de color según disponibilidad del proveedor.
- Colores posibles: negro, rojo u otros.
- Tapa propia.
- Cuchara retro del color del molde.
- Opción de etiqueta personalizada.

Ideal para:

- Bautizos.
- Cumpleaños.
- Eventos familiares.
- Detalles corporativos.
- Regalos personalizados.
- Mesas de postres.

### Nota importante

Agregar un texto pequeño:

> La disponibilidad de colores y empaques premium puede variar según proveedor. Te confirmaremos las opciones disponibles al momento de cotizar.

---

## 12. Sección: Colección actual / productos

Mantener los productos existentes en el HTML actual, pero mejorar textos, ortografía y consistencia.

### Productos actuales

#### Babka

- Porciones: 10–12 porciones.
- Precio: $370.00 MXN.
- Texto actual base:
  > Nuestra versión del pan originario de Europa del Este, hecho con mantequilla y trenzado de doble chocolate aromatizado.

#### Datíl D'Atelier

- Porciones: 6–8 porciones.
- Precio: $380 MXN.
- Texto:
  > Suave bizcocho de dátil estilo panqué, marmoleado con queso crema.

#### Carrot Cake

- Porciones: 10–12 porciones.
- Precio: $420 MXN.
- Texto:
  > El clásico pastel de zanahoria con relleno y frosting de queso crema.

#### Roles de Canela

- Presentación: Paquete.
- Porciones: 4 piezas.
- Precio: $200.00 MXN.
- Texto:
  > Roles de canela esponjosos con cobertura de queso crema y acabado rústico.

#### Banana Panqué

- Porciones: 6–8 porciones.
- Precio: $240 MXN.
- Texto:
  > Nuestra versión del banana bread americano, decorado con glaseado de azúcar morena.

#### Tarte Normand

- Porciones: Individual o 10–12 porciones.
- Precio: $40 MXN individual / $320 MXN pieza completa.
- Texto:
  > Nuestra versión de la tarta normanda de manzana, inspirada en la repostería francesa.

#### Raspberry Cheesecake Sticks

- Presentación: Individual o paquete.
- Precio actual en HTML: $150.00 MXN.
- Texto actual incompleto: “Detalles.”
- Nuevo texto sugerido:
  > Barras cremosas de cheesecake con frambuesa, pensadas para disfrutarse como porción individual o integrarse en pedidos para evento.

#### Mango Cheesecake

- Categoría actual: Petit Gâteau.
- Precio: $380 MXN.
- Texto:
  > Cheesecake cremoso y fresco con el aroma característico del mango.

#### Flan

- Presentación: Encargo.
- Precio: $25 MXN.
- Texto actual: “¿Se necesita una descripción?”
- Nuevo texto sugerido:
  > Flan individual de textura suave y sabor clásico, ideal para pedidos por pieza, celebraciones y eventos.

### Correcciones ortográficas necesarias

- “Chessecake” debe cambiarse a “Cheesecake”.
- “azucar” debe cambiarse a “azúcar”.
- “version” debe cambiarse a “versión”.
- “Porcion” debe cambiarse a “Porción”.
- “Super creamy” debe cambiarse por una expresión consistente en español.
- “Europa del este” debe cambiarse a “Europa del Este”.

### Recomendación de UI

En cada card de producto agregar, si es posible:

- Porciones.
- Precio base.
- Modalidad: stock limitado / bajo pedido / evento.
- CTA pequeño: “Consultar pedido”.

---

## 13. Sección: Cómo hacer tu pedido

### Objetivo

Reducir fricción para que el cliente entienda el proceso.

### Título

> Cómo hacer tu pedido

### Pasos

#### 1. Elige tu producto o servicio

> Selecciona una pieza para compartir, postres individuales para evento o una presentación personalizada.

#### 2. Cuéntanos fecha y cantidad

> Te pediremos la fecha del evento, número de piezas, presentación deseada y si necesitas entrega.

#### 3. Confirmamos disponibilidad

> Revisamos tiempos de producción, empaque disponible y zona de entrega.

#### 4. Agenda con anticipo

> Para confirmar tu pedido solicitamos el 50% de anticipo.

#### 5. Recibe o recoge tu pedido

> Puedes recogerlo, solicitar entrega local con costo adicional o coordinar envío por plataforma.

---

## 14. Sección: Filosofía / Sobre Atelier 42

La sección actual “Nuestra Filosofía” puede conservarse, pero debe hacerse más auténtica y menos ficticia.

### Evitar

Frases como:

- “Vainilla de Tahití”.
- “Avellanas del Piamonte”.
- “12 orígenes de cacao”.
- “Est. 2012”, si no es real.
- “7 años de trayectoria”, si no es real.
- “42 creaciones activas”, si no es real.

### Nuevo enfoque sugerido

Título:

> Hecho con calma, pensado para celebrar

Texto:

> Atelier 42 nace de la pasión por la repostería artesanal y el cuidado por los detalles. Cada pedido se prepara con intención, buscando que el sabor, la textura y la presentación acompañen momentos especiales.

Segundo párrafo:

> Creemos en una repostería honesta: procesos cuidados, ingredientes seleccionados y piezas hechas bajo pedido para conservar frescura y calidad.

### Estadísticas

Eliminar números ficticios o reemplazarlos por datos reales cuando estén disponibles.

Opciones temporales:

- Producción bajo pedido.
- Presentación personalizable.
- Atención directa.
- Hecho en Puebla.

---

## 15. Sección: Galería

### Objetivo

Mostrar estética, procesos y productos reales.

### Recomendación

Usar fotos propias siempre que sea posible. Evitar depender demasiado de imágenes de Unsplash porque la marca necesita sentirse real y cercana.

Categorías sugeridas para overlays:

- Celebraciones.
- Detalles.
- Texturas.
- Proceso.
- Piezas para compartir.
- Presentación premium.

---

## 16. Sección: Contacto / Cotización

Actualizar el formulario actual para que funcione mejor como formulario de cotización.

### Campos recomendados

- Nombre.
- WhatsApp.
- Correo electrónico opcional.
- Tipo de solicitud:
  - Celebración / evento.
  - Pieza para compartir.
  - Pedido corporativo.
  - Edición especial.
  - Otra consulta.
- Fecha del evento o entrega.
- Cantidad estimada de piezas.
- Producto de interés.
- Presentación deseada:
  - Esencial.
  - Atelier / premium.
  - Aún no sé.
- Modalidad de entrega:
  - Recolección.
  - Entrega local.
  - Envío por plataforma.
- Mensaje adicional.

### CTA del formulario

Cambiar:

> Enviar Consulta

Por:

> Solicitar cotización

### Comportamiento actual del formulario

Actualmente el formulario simula envío con JavaScript. Mantener ese comportamiento si no hay endpoint todavía, pero dejar marcado claramente en comentarios dónde se conectaría Formspree o WhatsApp.

---

## 17. WhatsApp como canal principal

Agregar CTA de WhatsApp visible.

### Texto sugerido para URL de WhatsApp

> Hola, me gustaría cotizar un pedido para celebración con Atelier 42.

### Ubicación recomendada

- Hero.
- Sección Celebraciones Atelier.
- Cards de servicios.
- Contacto.
- Footer.

---

## 18. Footer

Actualizar datos ficticios.

### Debe incluir

- Atelier 42.
- Puebla, México.
- WhatsApp.
- Instagram.
- Horario de atención o texto “Pedidos bajo agenda”.
- Aviso:
  > Producción bajo pedido. Recomendamos solicitar con anticipación.

Evitar dirección ficticia tipo “Avenida de la Luz 42, Distrito Financiero”.

---

## 19. Ajustes visuales recomendados

Mantener el estilo actual:

- Editorial.
- Elegante.
- Colores cálidos.
- Tipografía serif para títulos.
- Sans serif para textos.
- Fondos crema, blanco y negro cálido.

### Agregar

- Cards para servicios.
- Comparativa de presentaciones.
- Bloque de reglas comerciales.
- CTA de WhatsApp.
- Sección de proceso en pasos.

### Evitar

- Saturar con demasiadas cards.
- Usar colores muy brillantes.
- Convertirlo en una pastelería genérica.
- Usar lenguaje demasiado “barato” o promocional.

---

## 20. Reglas comerciales a reflejar

### Pedido mínimo

> Para pedidos de celebración se recomienda un mínimo de 20 piezas.

### Anticipo

> Para confirmar cualquier pedido especial se solicita el 50% de anticipo.

### Anticipación

> Recomendamos solicitar pedidos personalizados con al menos 72 horas de anticipación.

### Entrega

> El cliente puede recoger su pedido. También puede solicitar entrega local con costo adicional, sujeta a zona y disponibilidad. Para zonas fuera de cobertura se puede coordinar envío por plataforma.

### Disponibilidad de empaque premium

> Colores y modelos sujetos a disponibilidad del proveedor.

---

## 21. Copywriting base para la nueva sección de servicios

### Título

> Servicios Atelier 42

### Lead

> Desde una pieza especial para compartir hasta postres individuales para evento, cada pedido se prepara bajo solicitud y con atención al detalle.

### Card 1

Título:

> Celebraciones Atelier

Texto:

> Postres individuales para cumpleaños, bautizos, reuniones y eventos especiales, con opciones de presentación esencial o premium.

### Card 2

Título:

> Piezas para Compartir

Texto:

> Pasteles, panqués y piezas completas elaboradas bajo pedido para disfrutar en reuniones, comidas familiares o momentos especiales.

### Card 3

Título:

> Detalles Corporativos

Texto:

> Postres personalizados para empresas, clientes y colaboradores, con opción de etiqueta, empaque especial y pedidos por volumen.

### Card 4

Título:

> Ediciones Especiales

Texto:

> Colecciones limitadas por temporada disponibles bajo preventa para fechas especiales.

---

## 22. Copywriting base para Celebraciones Atelier

### Título

> Celebraciones Atelier

### Lead

> Postres individuales preparados bajo pedido para acompañar momentos importantes.

### Texto

> Ya sea para un cumpleaños, bautizo, reunión familiar o evento corporativo, diseñamos pedidos por volumen con opciones de presentación pensadas para adaptarse al estilo de tu celebración.

### Bullets

- Pedido mínimo sugerido: 20 piezas.
- Presentación esencial o premium.
- Opción de etiqueta personalizada.
- 50% de anticipo para confirmar.
- Recolección o entrega con costo adicional.

---

## 23. Copywriting base para Presentaciones

### Título

> Dos formas de presentar tu pedido

### Celebración Esencial

> Una opción práctica para compartir postres artesanales en reuniones y eventos sencillos.

Incluye:

- Molde clásico de aluminio.
- Tapa plástica.
- Liga.
- Cuchara.

### Celebración Atelier

> Una presentación premium para eventos donde los detalles visuales también importan.

Incluye:

- Molde de mayor capacidad.
- Interior dorado.
- Exterior de color sujeto a disponibilidad.
- Tapa propia.
- Cuchara retro al tono del molde.
- Posibilidad de etiqueta personalizada.

---

## 24. Criterios de aceptación

El rediseño se considerará correcto si cumple con lo siguiente:

### Contenido

- El sitio comunica claramente servicios, no solo productos.
- Se conserva la colección de productos actual con precios.
- Se integra la sección “Celebraciones Atelier”.
- Se explica la diferencia entre presentación esencial y premium.
- Se agregan reglas comerciales: mínimo, anticipo, anticipación y entrega.
- Se corrigen errores de ortografía en productos.
- Se eliminan o ajustan datos ficticios no confirmados.

### UX

- Hay CTA claro para cotizar.
- El usuario puede llegar al contacto desde varias secciones.
- El sitio se entiende en menos de 10 segundos.
- En móvil, las cards y secciones son legibles.
- La navegación funciona con smooth scroll.

### Técnica

- No se rompe el menú móvil.
- No se rompe el comportamiento de navbar al hacer scroll.
- No se rompen las animaciones `fade-up-element`.
- No se agregan dependencias innecesarias.
- El sitio sigue funcionando como HTML/CSS/JS estático.
- Las imágenes locales actuales siguen cargando.
- El formulario conserva comportamiento funcional o simulado.

---

## 25. Instrucciones específicas para el agente de Cursor

1. Leer `index.html`, `styles.css` y `script.js`.
2. Mantener la estética premium actual.
3. Reestructurar `index.html` con la nueva arquitectura.
4. Agregar nuevas secciones sin romper las existentes.
5. Actualizar textos del hero.
6. Crear sección de servicios.
7. Crear sección “Celebraciones Atelier”.
8. Crear sección comparativa de presentaciones.
9. Actualizar sección de productos con textos corregidos.
10. Convertir el formulario en formulario de cotización.
11. Agregar CTA de WhatsApp como placeholder.
12. Revisar responsive en desktop, tablet y mobile.
13. Evitar datos ficticios no confirmados.
14. Comentar claramente cualquier bloque pendiente de conectar con Formspree o WhatsApp.

---

## 26. Variables pendientes por completar

Estas variables deben quedar como placeholders si no se conocen todavía:

- Número real de WhatsApp.
- URL real de Instagram.
- Dirección o zona exacta de recolección.
- Costos de entrega.
- Costos extra por empaque premium.
- Costos por etiqueta personalizada.
- Precios por volumen.
- Disponibilidad real de colores de empaque.
- Endpoint de Formspree, si se utilizará.

Usar comentarios HTML como:

```html
<!-- TODO: Reemplazar con número real de WhatsApp -->
```

o

```html
<!-- TODO: Conectar endpoint real de Formspree -->
```

---

## 27. Resultado esperado

El resultado debe ser una landing premium, clara y comercial, capaz de presentar a Atelier 42 como una marca de repostería boutique con tres frentes principales:

1. Productos de autor.
2. Pedidos para celebraciones.
3. Presentaciones personalizadas y corporativas.

El sitio debe dejar de sentirse como solo un catálogo de postres y empezar a funcionar como una herramienta real de venta y cotización.
