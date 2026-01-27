# 🎉 Invitación Digital - 15 Años de Zoe Luana

Página web elegante y personalizada para la celebración de los 15 años.

## ✨ Características

- **5 versiones personalizadas** de invitación (1-5 invitados)
- **Diseño responsivo** optimizado para móvil, tablet y desktop
- **Contador regresivo** hasta el día del evento
- **Galería de fotos** con diseño elegante
- **Lista de regalos** con cuentas bancarias y Yape
- **Reproductor de música** de fondo con controles
- **Formulario de confirmación** integrado con Google Forms
- **Animaciones suaves** y efectos visuales
- **Paleta de colores** morado y rosa elegante

## 📁 Estructura del Proyecto

```
invitacion-15-años/
├── 1.html              # Invitación para 1 persona
├── 2.html              # Invitación para 2 personas
├── 3.html              # Invitación para 3 personas
├── 4.html              # Invitación para 4 personas
├── 5.html              # Invitación para 5 personas
├── styles.css          # Estilos principales
├── script.js           # Funcionalidades JavaScript
├── vercel.json         # Configuración de routing para Vercel
├── images/             # Carpeta de imágenes
│   ├── foto1.jpg
│   ├── foto2.jpg
│   └── foto3.jpg
└── music/              # Carpeta para música de fondo
    └── background.mp3  (agregar tu archivo aquí)
```

## 🌐 URLs de Acceso

Las invitaciones están disponibles en:
- `https://birthday-invitation-zoe.vercel.app/1` - Para 1 invitado
- `https://birthday-invitation-zoe.vercel.app/2` - Para 2 invitados
- `https://birthday-invitation-zoe.vercel.app/3` - Para 3 invitados
- `https://birthday-invitation-zoe.vercel.app/4` - Para 4 invitados
- `https://birthday-invitation-zoe.vercel.app/5` - Para 5 invitados

## 🎵 Agregar Música

1. Coloca tu archivo de música (formato MP3) en la carpeta `music/`
2. Renómbralo como `background.mp3`
3. La música se reproducirá automáticamente al hacer clic en la página
4. Usa el botón flotante (esquina inferior derecha) para controlar la reproducción

## 📝 Personalizar Contenido

### Cambiar Información del Evento

Edita cada archivo HTML (1.html, 2.html, etc.):
- **Fecha y hora**: Busca "23 de Mayo de 2026"
- **Ubicación**: Busca "Salón de Eventos Carusso"
- **Enlace de Google Maps**: Actualiza el atributo `href` en el botón "Ver Ubicación"

### Cambiar Formulario de Google

1. Crea tu formulario en Google Forms
2. Ve a "Enviar" > pestaña "<>"
3. Copia el link del iframe
4. Reemplaza el `src` del iframe en cada archivo HTML (1.html, 2.html, etc.)

**Importante**: Crea un formulario diferente para cada versión de invitación si deseas rastrear el número de invitados.

### Actualizar Fotos

Reemplaza las imágenes en la carpeta `images/` manteniendo los nombres:
- `foto1.jpg` - Foto principal
- `foto2.jpg` - Segunda foto
- `foto3.jpg` - Tercera foto

Recomendación: Usa imágenes de buena calidad (mínimo 800x1000px) en formato JPG.

### Modificar Cuentas Bancarias

En cada archivo HTML, busca la sección "Lista de Regalos" y actualiza:
- **Cuenta BCP Soles**: 193-06077317-0-03
- **Cuenta Interbancaria**: 002-19310607731700313
- **Yape**: 983 708 499

## 🎨 Personalizar Colores

En `styles.css`, modifica las variables CSS al inicio del archivo:

```css
:root {
    --primary-purple: #9B72CF;
    --primary-pink: #E5A4CB;
    --light-purple: #C5A8E0;
    --light-pink: #F8D5E9;
    --dark-purple: #6B4896;
}
```

## 🚀 Deployment en Vercel

### Primera vez:
```bash
# Instalar Vercel CLI (si no lo tienes)
npm install -g vercel

# Login
vercel login

# Desplegar
vercel
```

### Actualizaciones:
```bash
# Hacer cambios en los archivos

# Subir a GitHub
git add .
git commit -m "Descripción del cambio"
git push

# Vercel detectará los cambios y actualizará automáticamente
```

## 📱 Características Responsivas

- **Desktop (> 1024px)**: Diseño completo con todas las decoraciones florales
- **Tablet (768px - 1024px)**: Diseño adaptado, decoraciones reducidas
- **Móvil (< 768px)**: Optimizado para pantallas pequeñas, sin decoraciones que interfieran

## 🎯 Funcionalidades JavaScript

- ⏱️ **Contador regresivo** - Actualiza cada segundo hasta la fecha del evento
- 🎵 **Control de música** - Botón flotante para play/pause
- 📋 **Copiar al portapapeles** - Click en botón "Copiar" para copiar cuentas bancarias
- ✨ **Animaciones scroll** - Elementos aparecen al hacer scroll
- 🌊 **Efecto parallax** - Movimiento suave en hero section
- 💫 **Smooth scrolling** - Desplazamiento suave entre secciones

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos con Flexbox, Grid, Animations
- **JavaScript** - Vanilla JS (sin frameworks)
- **Google Fonts** - Dancing Script, Montserrat, Playfair Display
- **Google Forms** - Formulario de confirmación
- **Vercel** - Hosting y deployment automático

## 📋 Checklist Antes de Enviar Invitaciones

- [ ] Agregar archivo de música en `music/background.mp3`
- [ ] Reemplazar fotos en carpeta `images/`
- [ ] Actualizar formularios de Google Forms en cada HTML
- [ ] Verificar fechas y horarios
- [ ] Confirmar enlaces de Google Maps
- [ ] Probar todas las URLs (/1, /2, /3, /4, /5)
- [ ] Verificar en móvil que todo se vea bien
- [ ] Probar botón de música
- [ ] Probar botones "Copiar" de cuentas bancarias

## 💡 Consejos

1. **Música**: Usa un archivo MP3 de tamaño razonable (máx 5MB) para carga rápida
2. **Fotos**: Optimiza las imágenes antes de subirlas (puedes usar tinypng.com)
3. **Testing**: Prueba en varios dispositivos antes de enviar las invitaciones
4. **Links personalizados**: Puedes crear links cortos con bit.ly para cada versión

## 🐛 Solución de Problemas

### La música no suena
- Verifica que el archivo `background.mp3` esté en la carpeta `music/`
- Algunos navegadores bloquean auto-play, haz click en la página primero
- Usa el botón de música para iniciar manualmente

### Las imágenes no cargan
- Verifica que los nombres sean exactos: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`
- Asegúrate de que estén en la carpeta `images/`
- Las extensiones deben ser minúsculas

### El routing no funciona en Vercel
- Asegúrate de que `vercel.json` esté en la raíz del proyecto
- Verifica que todos los archivos HTML (1.html, 2.html, etc.) estén subidos

## 📞 Soporte

Para personalización adicional o problemas técnicos, contacta al desarrollador.

## 💝 Créditos

Diseñado con amor para la celebración de **Zoe Luana Alejo Linares**  
👨‍👩‍👧 Familia Alejo Linares ✨

---

**Fecha del Evento**: Sábado, 23 de Mayo de 2026 a las 7:00 PM  
**Lugar**: Salón de Eventos "Carusso", San Juan de Miraflores  
**Última actualización**: Enero 2026
