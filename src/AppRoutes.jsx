import { lazy } from 'react'
import { Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'

// Lazy loading - cada página se descarga solo cuando se visita su ruta.
const Home = lazy(() => import('./pages/Home.jsx'))
const IngresarArticulo = lazy(() => import('./pages/IngresarArticulo.jsx'))
const ListadoArticulos = lazy(() => import('./pages/ListadoArticulos.jsx'))
const DetalleArticulo = lazy(() => import('./pages/DetalleArticulo.jsx'))
const Carrito = lazy(() => import('./pages/Carrito.jsx'))
const QuienesSomos = lazy(() => import('./pages/QuienesSomos.jsx'))
const PreguntasFrecuentes = lazy(() => import('./pages/PreguntasFrecuentes.jsx'))
const NoEncontrada = lazy(() => import('./pages/NoEncontrada.jsx'))

// Todas las rutas del sitio en un solo archivo
function AppRoutes() {
  return (
    <Routes>
      {/* Layout Route: header y menús se escriben una sola vez y las páginas se muestran en su <Outlet /> */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ingresar-articulo" element={<IngresarArticulo />} />
        <Route path="/articulos" element={<ListadoArticulos />} />
        {/* Ruta dinámica: useParams() entrega el id del producto */}
        <Route path="/articulos/:productoId" element={<DetalleArticulo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        {/* Ruta comodín va siempre al final */}
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
