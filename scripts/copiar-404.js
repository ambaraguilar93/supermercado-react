// GitHub Pages no conoce las rutas de React Router, si alguien recarga /carrito responde 404.
// Copiar index.html como 404.html hace que GitHub Pages cargue igual la aplicación y el router resuelva la ruta.
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
console.log('dist/404.html creado (respaldo para GitHub Pages)')
