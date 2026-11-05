# GranMarket · Gestión de inventario

**Desarrollo Frontend II**.

- **Semana 1** (tag `semana-1`): "Utilizando tecnologías avanzadas de React en sitios web" (React Router).
- **Semana 2** (tag `semana-2`): "Implementando gestión de estado en componentes frontend con React".

Sitio web de gestión de inventario para un supermercado, construido con **React + Vite**, **React Router v7**
(paquete `react-router`), **estado global con Context API + useReducer** y **Tailwind CSS v4** como único framework de estilos.

## Mejoras según el feedback de la semana 2

- **`react-router`**: se reemplazó `react-router-dom` por `react-router` (package.json e imports).
- **Solo Tailwind**: se retiró Bootstrap (dependencia, CSS y clases). Todas las páginas y componentes usan Tailwind, se eliminó el prefijo `tw:` y los archivos `.css` propios.
- **Validaciones con regex** para nombre, marca y presentación, además de precio, stock y stock mínimo. Las reglas están en `REGLAS_CAMPOS` (`constants/inventario.js`).
- **SKU generado una sola vez**: `crearProducto` se llama antes de enviar la acción, el reducer solo agrega el producto y el mensaje de éxito muestra ese mismo SKU.
- **Mapa de estados de stock compartido**: `ESTADOS_STOCK` (etiqueta, color de insignia y de barra) lo usan Home, el listado y el filtro.
- **Hook `useFormularioProducto`**: concentra valores, errores, confirmación, limpieza y envío, `IngresarArticulo` quedó solo con JSX.

## Novedades de la semana 2

- **Estado global** del inventario (`Context` + `useReducer`): Inicio, listado y formulario usan la misma lista de productos.
- **Menú nuevo** bajo el header con dos opciones: *Ingresar artículo* y *Ver artículos*.
- **Página "Ingresar artículo"**: formulario controlado con validación (nombre, marca, presentación, categoría, precio, stock, stock mínimo y emoji opcional). El SKU se genera automáticamente según la categoría.
- **Página "Ver artículos"**: tabla con todos los productos del inventario y su estado de stock.
- **Tailwind CSS** en las páginas y el menú nuevos, conviviendo con Bootstrap en las páginas de la semana 1.
- **Mejoras según el feedback de la semana 1**: Home dividido en componentes, `KpiCard` reutilizable, `Layout Route` con `NavLink` y separación de datos, constantes y reglas de negocio.

## Rutas

| Ruta | Página | Menú |
|---|---|---|
| `/` | Inicio (inventario con indicadores y filtros) | Inferior: Inicio |
| `/quienes-somos` | Quiénes somos | Inferior: Quiénes somos |
| `/preguntas-frecuentes` | Preguntas frecuentes | Inferior: Preguntas frecuentes |
| `/ingresar-articulo` | Formulario para agregar un artículo | Superior: Ingresar artículo |
| `/articulos` | Tabla de artículos del inventario | Superior: Ver artículos |
| `*` | Página no encontrada | (no aparece) |

## Cómo ejecutarlo

```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # compilación de producción
```

## Estructura y responsabilidades

```
src/
├── main.jsx                  # Punto de entrada: carga íconos y Tailwind
├── App.jsx                   # InventarioProvider + Router + Layout Route con todas las rutas
├── tailwind.css              # Tailwind, paleta (@theme) y estilos base del sitio
├── constants/inventario.js   # Constantes: categorías, ESTADOS_STOCK, prefijos de SKU, emojis, REGLAS_CAMPOS (regex)
├── data/                     # Solo datos: productos.js y preguntas.js
├── utils/inventario.js       # Reglas de negocio: estado de stock, filtros, KPI, SKU (generarSku/crearProducto), validación
├── state/inventarioReducer.js# Acciones, estado inicial y reducer 
├── context/InventarioContext.jsx # Provider y hook useInventario()
├── hooks/useFormularioProducto.js # Lógica del formulario: valores, errores, envío, SKU previsto
├── components/
│   ├── Layout.jsx            # Estructura compartida (header + menús + <Outlet />)
│   ├── Encabezado.jsx        # Header
│   ├── HeroPagina.jsx        # Portada azul de Quiénes somos y Preguntas frecuentes
│   ├── MenuInferior.jsx      # Menú de páginas generales (NavLink)
│   ├── MenuInventario.jsx    # Menú nuevo: ingresar y ver artículos (NavLink, Tailwind)
│   ├── CampoFormulario.jsx   # Campo de formulario reutilizable (Tailwind)
│   └── home/                 # CategoriasNav, KpiCard, FiltrosInventario, ProductoCard
└── pages/                    # Home, IngresarArticulo, ListadoArticulos, QuienesSomos, PreguntasFrecuentes, NoEncontrada
```

### Quién hace qué

| Responsabilidad | Dónde vive | Por qué ahí |
|---|---|---|
| **Datos** (qué productos hay) | `data/` | Es información que en el futuro puede venir de una API sin tocar nada más. |
| **Constantes** (categorías, etiquetas, prefijos) | `constants/` | Valores compartidos sin lógica, se cambian en un solo lugar. |
| **Reglas de stock** (disponible / bajo / agotado, SKU, validación) | `utils/` | Funciones puras: se pueden probar sin React y las usan Home, la tabla y el formulario. |
| **Estado global** (lista de productos) | `state/` + `context/` | Una sola fuente para todas las páginas. |
| **Estado local** (filtros de Home) | `pages/Home.jsx` | Solo le importa a esa página, no necesita ser global. |
| **Lógica del formulario** (valores, errores, envío) | `hooks/useFormularioProducto.js` | Separa la lógica del JSX y permite probarla por separado. |
| **Presentación** | `components/` y `pages/` | Muestran datos y reaccionan a eventos, no contienen reglas de negocio. |

### Recorridos entre páginas

```
Inicio (/) ──menú superior──► Ingresar artículo (/ingresar-articulo) ──"Ver artículos"──► Artículos (/articulos)
   ▲                                   │ agregarProducto() → reducer → estado global
   │                                   ▼
   └──────────── el producto nuevo aparece en Inicio (tarjeta + KPI) y en la tabla ────────────
```

El menú inferior (Inicio, Quiénes somos, Preguntas frecuentes) y el menú superior (Ingresar y Ver artículos)
están en el `Layout`, así que se ven en todas las rutas y el logo siempre permite volver al inicio.

### Elementos reutilizados

- `Layout`: header y menús se escriben una sola vez (antes se repetían en `App.jsx`).
- `KpiCard`: las 4 tarjetas de indicadores salen de un arreglo de datos y un solo componente.
- `ProductoCard`, `FiltrosInventario`, `CategoriasNav`: Home solo los compone.
- `CampoFormulario`: etiqueta, error y ayuda de cada campo del formulario.
- `obtenerEstadoStock` + `ESTADOS_STOCK`: la misma regla y los mismos colores alimentan los KPI, las tarjetas, el filtro y la tabla.
- `HeroPagina`: portada compartida por Quiénes somos y Preguntas frecuentes.

## Estado global

`useReducer` recibe acciones con la forma `{ type, payload }`. Hoy existe `AGREGAR_PRODUCTO`:
`useFormularioProducto` valida los datos con `validarProducto`, crea el producto completo (con `id` y `sku`) con
`crearProducto` y llama a `agregarProducto(producto)`; el reducer devuelve un arreglo **nuevo** con ese producto (sin mutar el anterior).
Los datos viven en memoria: al recargar la página el inventario vuelve a los productos de ejemplo.

## Tailwind CSS

- Tailwind v4 es el único framework de estilos (plugin `@tailwindcss/vite`), se importa completo con `@import 'tailwindcss'`.
- La paleta del sitio y la tipografía están en `@theme` (`src/tailwind.css`) y se usan como clases: `bg-primario`, `text-primario-oscuro`, `bg-acento-claro`, `border-borde`, etc.
- Los íconos siguen siendo `bootstrap-icons` (solo la fuente de íconos, no el framework).
