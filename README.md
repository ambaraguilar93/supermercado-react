# GranMarket · Gestión de inventario

Actividad formativa 1 de **Desarrollo Frontend II**: "Utilizando tecnologías avanzadas de React en sitios web".

Sitio web de gestión de inventario para un supermercado, construido con **React + Vite**, **React Router v6**, **Bootstrap 5**, HTML y CSS.

## Rutas

| Ruta | Página | Opción del menú inferior |
|---|---|---|
| `/` | Inicio (inventario) | Inicio |
| `/quienes-somos` | Quiénes somos | Quiénes somos |
| `/preguntas-frecuentes` | Preguntas frecuentes | Preguntas frecuentes |
| `*` | Página no encontrada | (no aparece) |

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Luego abrir la dirección que muestra la terminal (http://localhost:5173).

## Estructura

```
src/
├── main.jsx              # Punto de entrada
├── App.jsx               # Router y Routes
├── App.css / index.css   # Estilos generales y variables
├── components/           # Encabezado y MenuInferior
├── pages/                # Home, QuienesSomos, PreguntasFrecuentes, NoEncontrada
└── data/                 # Datos de ejemplo (productos y preguntas)
```
