# Invitación de 15 Años - Página Web

Una elegante invitación digital para celebración de quince años con diseño moderno, colores lila y rosado, y temática floral.

## 🌸 Características

- **Diseño Responsivo**: Adaptado para móviles, tablets y desktop
- **Contador Regresivo**: Timer funcional que cuenta hasta el día del evento
- **Sección de Fotos**: Galería con placeholders para agregar fotos de la cumpleañera
- **Detalles del Evento**: Fecha, hora, ubicación con enlace a Google Maps
- **Confirmación RSVP**: Botón para confirmar asistencia con límite de invitados
- **Efectos Visuales**: Animaciones suaves y efectos al hacer scroll
- **Paleta de Colores**: Lila (#9B72CF) y Rosado (#E5A4CB)

## 📁 Estructura de Archivos

```
Invitación 15 años/
│
├── index.html          # Estructura principal de la página
├── styles.css          # Estilos y diseño visual
├── script.js           # Funcionalidad e interactividad
└── README.md           # Documentación del proyecto
```

## 🚀 Cómo Usar

1. **Abrir la Invitación**: Simplemente abre el archivo `index.html` en cualquier navegador web moderno.

2. **Personalizar el Contenido**:
   - Abre `index.html` y busca los siguientes elementos para personalizar:
     - Nombre de la cumpleañera (línea con clase `birthday-name`)
     - Fecha y hora del evento (sección `event-details`)
     - Dirección del lugar (actualiza el texto y el enlace de Google Maps)
     - Fecha límite de confirmación (sección RSVP)

3. **Configurar el Contador Regresivo**:
   - Abre `script.js`
   - En la línea 3, modifica la fecha del evento:
     ```javascript
     const eventDate = new Date('2026-03-15T19:00:00').getTime();
     ```
   - Formato: `'YYYY-MM-DDTHH:MM:SS'`

4. **Agregar Fotos**:
   - Reemplaza los placeholders en la sección de galería
   - Puedes agregar las imágenes directamente en HTML o usando JavaScript
   - Las fotos se encuentran en las etiquetas con clase `photo-placeholder`

5. **Configurar el Formulario de RSVP**:
   - Abre `index.html`
   - Busca el botón "CONFIRMAR ASISTENCIA"
   - Reemplaza `YOUR_FORM_ID` con tu ID real de Google Forms:
     ```html
     <a href="https://docs.google.com/forms/d/e/TU_ID_AQUI/viewform" target="_blank">
     ```

6. **Actualizar Google Maps**:
   - En la sección de detalles, encuentra el botón "Ver Ubicación"
   - Actualiza la dirección en el enlace:
     ```html
     <a href="https://maps.google.com/?q=Tu+Dirección+Completa" target="_blank">
     ```

## 🎨 Personalización de Colores

Si deseas cambiar la paleta de colores, edita las variables CSS en `styles.css`:

```css
:root {
    --primary-purple: #9B72CF;    /* Color lila principal */
    --primary-pink: #E5A4CB;      /* Color rosado principal */
    --light-purple: #C5A8E0;      /* Lila claro */
    --light-pink: #F8D5E9;        /* Rosado claro */
    --dark-purple: #6B4896;       /* Lila oscuro */
}
```

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles (iOS y Android)

## 💡 Tips

1. **Fotos**: Para mejores resultados, usa fotos en orientación vertical (3:4 o 9:16)
2. **Google Forms**: Crea un formulario que incluya:
   - Nombre completo
   - Número de acompañantes (máximo 1)
   - Número de teléfono
   - Confirmación de asistencia (Sí/No)
3. **Testing**: Prueba la página en diferentes dispositivos antes de compartir
4. **Hosting**: Puedes alojar la página gratis en:
   - GitHub Pages
   - Netlify
   - Vercel
   - Google Sites

## 🌐 Compartir la Invitación

Una vez personalizada y alojada en línea, puedes compartir el enlace por:
- WhatsApp
- Instagram Stories
- Correo electrónico
- Códigos QR

## 📝 Checklist de Personalización

- [ ] Cambiar nombre de la cumpleañera
- [ ] Actualizar fecha y hora del evento
- [ ] Configurar contador regresivo
- [ ] Actualizar dirección del lugar
- [ ] Configurar enlace de Google Maps
- [ ] Crear y vincular formulario de Google
- [ ] Agregar fotos de la cumpleañera
- [ ] Actualizar fecha límite de confirmación
- [ ] Revisar código de vestimenta
- [ ] Probar en móvil y desktop
- [ ] Compartir con invitados

## ✨ Créditos

Diseño y desarrollo: Experto en Frontend y UI/UX
Inspiración: Diseño moderno de invitaciones digitales
Paleta de colores: Tonos Lila y Rosado con temática floral

---

¡Que tengas una celebración inolvidable! 🎉💜💖
