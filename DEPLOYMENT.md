# Guía de Despliegue - Alarcón Dental Care

## 📁 Archivos Estáticos Generados

El sitio web estático se encuentra en la carpeta `out/` y está listo para ser desplegado en cualquier servidor web o plataforma de hosting.

## 🚀 Opciones de Despliegue

### 1. Netlify (Recomendado)
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `out` a la zona de despliegue
3. Tu sitio estará disponible inmediatamente

### 2. Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Next.js
4. El despliegue será automático

### 3. GitHub Pages
1. Sube la carpeta `out` a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama y carpeta donde están los archivos
4. Tu sitio estará disponible en `username.github.io/repository-name`

### 4. Servidor Web Tradicional
1. Sube todo el contenido de la carpeta `out/` a tu servidor web
2. Configura tu servidor para servir archivos estáticos
3. Asegúrate de que `index.html` sea el archivo por defecto

## 📋 Estructura de Archivos Generados

```
out/
├── _next/                 # Archivos de Next.js (CSS, JS)
├── images/               # Imágenes optimizadas
├── index.html           # Página principal
├── 404.html            # Página de error 404
└── favicon.ico         # Icono del sitio
```

## ✅ Verificación del Despliegue

Después del despliegue, verifica que:
- [x] La página principal carga correctamente
- [x] Todas las imágenes se muestran
- [x] Los enlaces de navegación funcionan
- [x] Los botones de WhatsApp y teléfono funcionan
- [x] El sitio es responsive en móviles y desktop

## 🔧 Configuración Adicional

### Para dominios personalizados:
1. Configura los registros DNS de tu dominio
2. Apunta a la IP o CNAME de tu proveedor de hosting
3. Configura HTTPS si es necesario

### Para mejor SEO:
- El sitio ya incluye meta tags optimizados
- Las imágenes están optimizadas
- El sitio es completamente responsive

## 📞 Contacto

Si necesitas ayuda con el despliegue, contacta al desarrollador.

---

**¡Tu sitio web profesional está listo para ser publicado! 🎉**