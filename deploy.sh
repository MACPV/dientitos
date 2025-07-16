#!/bin/bash

# Script de despliegue para Alarcón Dental Care
# Este script automatiza el proceso de construcción y preparación para despliegue

echo "🚀 Iniciando proceso de despliegue..."

# Limpiar archivos anteriores
echo "🧹 Limpiando archivos anteriores..."
rm -rf out/
rm -rf .next/

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Construir el sitio estático
echo "🔨 Construyendo sitio estático..."
npm run build

# Verificar que la carpeta out existe
if [ -d "out" ]; then
    echo "✅ Sitio estático generado exitosamente en la carpeta 'out/'"
    echo "📁 Archivos generados:"
    ls -la out/
    echo ""
    echo "🎉 ¡Listo para desplegar!"
    echo ""
    echo "📋 Próximos pasos:"
    echo "1. Sube la carpeta 'out/' completa a tu servidor web"
    echo "2. O arrastra la carpeta 'out/' a Netlify/Vercel"
    echo "3. Configura tu dominio personalizado si es necesario"
    echo ""
    echo "🌐 El sitio incluye:"
    echo "- Página principal optimizada"
    echo "- Diseño responsive"
    echo "- Imágenes optimizadas"
    echo "- Funcionalidad de WhatsApp y llamadas"
    echo "- SEO optimizado"
else
    echo "❌ Error: No se pudo generar el sitio estático"
    exit 1
fi