# GranMarket · Gestión de inventario

**Desarrollo Frontend II**

Sitio web de gestión de inventario para un supermercado, construido con **React + Vite**, **React Router v7**
(paquete `react-router`), **estado global con Context API + useReducer** y **Tailwind CSS v4**.

🌐 **Sitio publicado:** https://ambaraguilar93.github.io/supermercado-react/

| Semana | Tag | Actividad |
|---|---|---|
| 1 | `semana-1` | "Utilizando tecnologías avanzadas de React en sitios web" (React Router) |
| 2 | `semana-2` (+ `semana-2-feedback`) | "Implementando gestión de estado en componentes frontend con React" |
| 3 | `semana-3` | **Actividad sumativa** "Desarrollando sitios web con React avanzado" |

## Novedades de la semana 3

- **Filtro por categoría** en `/articulos`: la categoría elegida es estado local de la página y la lista que se ve se **deriva**
  con `filtrarPorCategoria(productos, categoria)`. El inventario global nunca se modifica, por eso al volver a "Todas" reaparece todo.
- **Detalle de artículo** en `/articulos/:productoId`: se abre haciendo clic en cualquier parte de la fila (o en "Ver detalle", también desde las tarjetas del inicio).
  Muestra la información completa y el botón **Agregar al carrito**, que descuenta 1 unidad del stock.
- **Carrito** en `/carrito`: lista los artículos agregados, permite **aumentar o disminuir** la cantidad (el inventario se actualiza en cada clic)
  y muestra subtotales y total. El menú muestra cuántas unidades hay en el carrito.
- **Estado global ampliado**: inventario y carrito viven en el mismo reducer.
- **Rutas centralizadas** en `AppRoutes.jsx`, con **lazy loading** (`React.lazy` + `Suspense`) y una ruta con parámetro dinámico.
- **Componentes atomizados**: `Boton`, `EstadoStockBadge`, `BarraStock`, `EstadoVacio`, `EncabezadoPagina` y `AvisoExito` se reutilizan en todas las páginas,
  las páginas quedaron como composición de componentes pequeños.
- **Pruebas** del reducer, del filtro y del carrito con el ejecutor nativo de Node (`npm test`).
- **Publicación en GitHub Pages** (`npm run deploy`).

## Rutas

| Ruta | Página | Menú |
|---|---|---|
| `/` | Inicio (inventario con indicadores y filtros) | Inferior: Inicio |
| `/quienes-somos` | Quiénes somos | Inferior: Quiénes somos |
| `/preguntas-frecuentes` | Preguntas frecuentes | Inferior: Preguntas frecuentes |
| `/ingresar-articulo` | Formulario para agregar un artículo | Superior: Ingresar artículo |
| `/articulos` | Tabla de artículos con **filtro por categoría** | Superior: Ver artículos |
| `/articulos/:productoId` | **Detalle** de un artículo y botón "Agregar al carrito" | (desde el listado o el inicio) |
| `/carrito` | **Carrito de compras** | Superior: Carrito (con contador) |
| `*` | Página no encontrada | (no aparece) |

Un id que no existe (`/articulos/999`) muestra un mensaje de "artículo no encontrado" con un botón para volver.

## Cómo ejecutarlo

```bash
npm install
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm test          # pruebas del reducer, el filtro y el carrito
npm run build     # compilación de producción (dist/)
npm run preview   # sirve dist/ como en GitHub Pages (http://localhost:4173/supermercado-react/)
npm run deploy    # compila y publica dist/ en la rama gh-pages
```

## Flujo entre páginas

```
Ver artículos ──filtra por categoría──► clic en la fila ──► Detalle ──"Agregar al carrito"──► reducer (stock −1, carrito +1)
                                                                                                  │
                          Inicio (KPI y tarjetas), Listado, Detalle y Carrito se actualizan solos ◄┘
Carrito: botones + y − ──► reducer ──► stock y carrito cambian juntos
```

## Estructura y responsabilidades

```
src/
├── main.jsx                  # Punto de entrada: carga íconos y Tailwind
├── App.jsx                   # InventarioProvider + Router (con basename) + AppRoutes
├── AppRoutes.jsx             # Todas las rutas en un solo archivo, con lazy loading
├── tailwind.css              # Tailwind, paleta (@theme) y estilos base del sitio
├── constants/inventario.js   # Categorías, ESTADOS_STOCK, prefijos de SKU, CAMPOS_FORMULARIO, REGLAS_CAMPOS (regex)
├── data/                     # Solo datos: productos.js y preguntas.js
├── utils/
│   ├── inventario.js         # Reglas del inventario: estado de stock, filtros, KPI, SKU, validación
│   └── carrito.js            # Reglas del carrito: detalle con subtotales, totales
├── state/inventarioReducer.js# Acciones, estado inicial y reducer (inventario + carrito)
├── context/InventarioContext.jsx # Provider y hook useInventario()
├── hooks/
│   ├── useFormularioProducto.js # Lógica del formulario: valores, errores, envío
│   └── useCarrito.js         # Lógica del carrito: items con su producto y totales
├── components/
│   ├── Layout, Encabezado, MenuInferior, MenuInventario, CampoFormulario, HeroPagina
│   ├── ui/                   # Reutilizables: Boton, EstadoStockBadge, BarraStock, EstadoVacio, EncabezadoPagina, AvisoExito
│   ├── home/                 # BannerPrincipal, PanelIndicadores, KpiCard, CategoriasNav, FiltrosInventario, ProductoCard
│   ├── inventario/           # TablaArticulos, FilaArticulo, FiltroCategoria, DetalleProducto
│   └── carrito/              # ItemCarrito, ContadorCantidad, ResumenCarrito
└── pages/                    # Home, IngresarArticulo, ListadoArticulos, DetalleArticulo, Carrito, QuienesSomos, PreguntasFrecuentes, NoEncontrada
test/                         # inventarioReducer, filtro y carrito (node --test)
scripts/copiar-404.js         # Copia index.html como 404.html para que GitHub Pages resuelva las rutas internas
```

### Quién hace qué

| Responsabilidad | Dónde vive | Por qué ahí |
|---|---|---|
| **Datos** (qué productos hay) | `data/` | Es información que en el futuro puede venir de una API sin tocar nada más. |
| **Constantes** (categorías, etiquetas, campos del formulario) | `constants/` | Valores compartidos sin lógica, se cambian en un solo lugar. |
| **Reglas de negocio** (stock, filtros, SKU, validación, totales del carrito) | `utils/` | Funciones puras: se prueban sin React y las usan varias pantallas. |
| **Estado global** (productos y carrito) | `state/` + `context/` | Una sola fuente de verdad para todas las páginas. |
| **Estado local** (filtros, categoría elegida, valores del formulario, avisos) | La página o el hook que lo usa | Solo le importa a esa pantalla, no necesita ser global. |
| **Lógica de pantalla** (formulario, carrito) | `hooks/` | Separa la lógica del JSX y permite probarla por separado. |
| **Presentación** | `components/` y `pages/` | Muestran datos y reaccionan a eventos; no contienen reglas de negocio. |

## Estado global

Inventario y carrito están en **un solo estado** manejado con `useReducer`:

```js
{ productos: [...], carrito: [{ productoId, cantidad }] }
```

| Acción | Efecto |
|---|---|
| `AGREGAR_PRODUCTO` | Agrega un producto nuevo (ya completo, con `id` y `sku`) al final de la lista. |
| `AGREGAR_AL_CARRITO` | Resta 1 al `stock` del producto y suma 1 a su `cantidad` en el carrito. |
| `DISMINUIR_CANTIDAD_CARRITO` | Devuelve 1 unidad al `stock` y resta 1 a la `cantidad`; si llega a 0, el producto sale del carrito. |

**Por qué un solo reducer:** agregar al carrito cambia el carrito **y** el stock. Con dos estados separados habría que sincronizarlos
(por ejemplo con `useEffect`) y podrían quedar inconsistentes. En un reducer ambos cambian en una única transición.

**Invariante:** para cada producto, `stock + cantidad en el carrito = unidades que había antes de operar`.

**Reducer puro y defensivo:** nunca modifica el estado anterior (crea arreglos y objetos nuevos) y, ante una operación inválida
(producto inexistente, sin stock, producto que no está en el carrito), devuelve el mismo estado. Además la interfaz deshabilita
esos botones, así que el usuario solo puede disparar operaciones válidas.

**Qué es local y qué es global:** los filtros del inicio, la categoría del listado y los valores del formulario son estado **local**
(solo les importa a su pantalla). Productos y carrito son estado **global** porque los usan varias pantallas a la vez.
Los datos viven en memoria, al recargar la página el inventario vuelve a los productos de ejemplo y el carrito queda vacío.

## Elementos reutilizados

- `Boton`: variantes (`primario`, `secundario`, `neutro`), tamaños y modo enlace (`to`) o botón, los estados `hover`, `focus` y `disabled` están en un solo lugar.
- `EstadoStockBadge` y `BarraStock`: la misma regla (`obtenerEstadoStock` + `ESTADOS_STOCK`) alimenta KPI, tarjetas, tabla y detalle.
- `EstadoVacio`, `EncabezadoPagina`, `AvisoExito`: mensajes y encabezados repetidos en varias pantallas.
- `Layout`: header y menús se escriben una sola vez, el `Suspense` del lazy loading está alrededor del `<Outlet />`.
- `KpiCard`, `ProductoCard`, `FiltrosInventario`, `CategoriasNav`, `CampoFormulario`, `HeroPagina`.

## Pruebas

`npm test` usa el ejecutor nativo de Node (`node --test`), sin dependencias nuevas:

- **Reducer:** agregar resta stock y suma al carrito, el escenario de conservación (agregar hasta agotar, no poder pasarse, disminuir hasta quitar y recuperar el stock original),
  operaciones inválidas devuelven el mismo estado, el estado anterior no se modifica.
- **Filtro:** filtra por categoría, "todas" devuelve todo, categoría vacía devuelve lista vacía y los datos originales no cambian.
- **Carrito:** detalle con subtotales, total de unidades y total a pagar.

## Tailwind CSS

- Tailwind v4 es el único framework de estilos (plugin `@tailwindcss/vite`), se importa completo con `@import 'tailwindcss'`.
- La paleta del sitio y la tipografía están en `@theme` (`src/tailwind.css`) y se usan como clases: `bg-primario`, `text-primario-oscuro`, `bg-acento-claro`, `border-borde`, etc.
- Los estilos repetidos viven en componentes (`Boton`, `EstadoStockBadge`…) en vez de repetir cadenas de clases en cada página.
- Diseño **responsive**: grillas que cambian de columnas según el ancho (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4`), la tabla con scroll horizontal y el carrito que pasa de dos columnas a una en móvil.
- Los íconos siguen siendo `bootstrap-icons` (solo la fuente de íconos, no el framework).

## Publicación en GitHub Pages

1. `npm run deploy` compila el sitio y sube `dist/` a la rama `gh-pages`.
2. En GitHub: **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `(root)`**.
3. El sitio queda en https://ambaraguilar93.github.io/supermercado-react/

Detalles de la configuración:

- `vite.config.js` define `base: '/supermercado-react/'` en producción (si se renombra el repositorio, se cambia la constante `REPOSITORIO`).
- `App.jsx` pasa `import.meta.env.BASE_URL` como `basename` del router.
- `scripts/copiar-404.js` copia `index.html` como `404.html`: así, al recargar una ruta interna (por ejemplo `/carrito`), GitHub Pages carga igual la aplicación.

## Historial de semanas anteriores

### Mejoras según el feedback de la semana 2

- **`react-router`**: se reemplazó `react-router-dom` por `react-router` (package.json e imports).
- **Solo Tailwind**: se retiró Bootstrap (dependencia, CSS y clases). Todas las páginas y componentes usan Tailwind.
- **Validaciones con regex** para nombre, marca y presentación, además de precio, stock y stock mínimo (`REGLAS_CAMPOS` en `constants/inventario.js`).
- **SKU generado una sola vez**: `crearProducto` se llama antes de enviar la acción y el mensaje de éxito muestra ese mismo SKU.
- **Mapa de estados de stock compartido**: `ESTADOS_STOCK` lo usan Home, el listado y el filtro.
- **Hook `useFormularioProducto`**: concentra valores, errores, confirmación, limpieza y envío.

### Semana 2

- **Estado global** del inventario (`Context` + `useReducer`): Inicio, listado y formulario usan la misma lista de productos.
- **Menú del inventario** bajo el header: *Ingresar artículo* y *Ver artículos*.
- **Formulario "Ingresar artículo"** controlado con validación; el SKU se genera automáticamente según la categoría.
- **Tabla "Ver artículos"** con el estado de stock de cada producto.
- **Mejoras según el feedback de la semana 1**: Home dividido en componentes, `KpiCard` reutilizable, `Layout Route` con `NavLink` y separación de datos, constantes y reglas de negocio.
