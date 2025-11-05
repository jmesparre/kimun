# PRD – Sitio Web de Kimün Viviendas Ecológicas

## 1. Información general

**Proyecto:** Sitio web corporativo de Kimün  
**Objetivo:** Presentar la marca y sus viviendas ecológicas, mostrando sus productos, beneficios, tecnología aplicada y portfolio de proyectos.  
**Stack técnico:**
- **Frontend:** Next.js (App Router)
- **UI Library:** Shadcn/UI + Tailwind CSS
- **Animaciones:** Motion.dev (Framer Motion)
- **Despliegue:** Vercel
- **Integraciones:** Formulario de contacto (enviar por email o API)
- **Formato:** SPA con navegación fluida y animaciones suaves

---

## 2. Objetivos del sitio

1. Comunicar la **identidad ecológica y tecnológica** de Kimün.
2. Mostrar los **productos y proyectos** realizados.
3. Generar **contactos y solicitudes de cotización**.
4. Transmitir **confianza y profesionalismo** mediante testimonios y portfolio.
5. Destacar la **sustentabilidad** y los **beneficios constructivos**.

---

## 3. Estructura del sitio

### 🏠 Home
- Header con logo Kimün, menú (Inicio, Tecnología, Interior, Productos, Portfolio, Nosotros, Contacto).
- Imagen hero principal con una vivienda terminada.
- Bloque: “**Tecnología aplicada**” con descripción corta.

### ⚙️ Sección: Tecnología
- Título: **Casa Ecológica**
- Imagen de maqueta o render técnico con elementos destacados:
  - Diseño integrado
  - Reciclación de agua de lluvia
  - Arquitectura bioclimática
  - Bloques de HCCA
  - Vidrios DVH
  - Biodegradables / sustentables
- Lista de **beneficios** con íconos (ahorro energético, confort térmico, bajo mantenimiento).

### 🪴 Sección: Interior
- Render del interior moderno.
- Texto explicativo sobre estilo arquitectónico: moderno, minimalista, cálido.
- Paleta de **materiales y colores** (arena, madera clara, gris hormigón, blanco cálido).

### 🏗️ Sección: Productos
- Cards de proyectos tipo “Complejo Turístico” con precio estimado y cantidad de módulos.
- Cada card incluye:
  - Imagen
  - Nombre del proyecto
  - Precio
  - Detalle breve

### 🖼️ Sección: Portfolio
- Galería de imágenes (grilla 3x3).
- Animaciones al pasar el mouse (zoom-in o fade).

### 👥 Sección: Nosotros
- Imagen amplia de equipo o vivienda.
- Texto breve sobre la empresa:
  - Filosofía de construcción ecológica.
  - Innovación, sustentabilidad y diseño integral.
  - Enfoque en confort y eficiencia energética.

### 🧩 Sección: Proceso
- Bloque con pasos numerados (por ejemplo):
  1. Asesoramiento inicial
  2. Diseño personalizado
  3. Construcción
  4. Entrega llave en mano
- Animaciones de entrada secuencial con Motion.dev

### 💬 Sección: Opiniones / Testimonios
- Bloque con fondo oscuro y tarjetas de testimonios de clientes.
- Frases cortas con estrellas de valoración.

### 📨 Sección: Cotización / Contacto
- Formulario de solicitud:
  - Nombre
  - Email
  - Localidad
  - Mensaje
- Botón “Solicitá tu cotización gratuita ahora”.
- Sección de contacto directo con:
  - Dirección
  - Teléfono
  - Correo electrónico
  - Enlace a redes sociales (WhatsApp, Instagram)

---

## 4. Paleta de colores

| Color | Uso principal |
|-------|----------------|
| Verde oliva (#A7A684) | Naturaleza, sustentabilidad |
| Arena (#D7C6A3) | Fondo suave, calidez |
| Gris claro (#E6E3DB) | Fondo neutro |
| Blanco cálido (#F6F4F1) | Fondo general y contraste |
| Marrón claro (#C6A58A) | Elementos de acento |

---


---

## 5. Componentes reutilizables (Shadcn/UI)
- `Navbar` con animación de entrada y sticky scroll.
- `SectionTitle` (con subtítulo y línea decorativa).
- `Card` (productos, testimonios, beneficios).
- `ImageGallery` (portfolio).
- `ContactForm`.
- `Footer`.

---
---

## 7. Entregables
1. **Diseño funcional (Next.js + Tailwind + Shadcn/UI).**
2. **Animaciones integradas con Motion.dev.**
3. **Formulario funcional con validación.**
4. **SEO básico y metaetiquetas.**
5. **Optimización de imágenes (Next/Image).**

---
