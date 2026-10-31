import { Outlet } from 'react-router-dom'
import Encabezado from './Encabezado.jsx'
import MenuInventario from './MenuInventario.jsx'
import MenuInferior from './MenuInferior.jsx'

// Estructura compartida por todas las páginas.
function Layout() {
  return (
    <div className="app">
      <Encabezado />
      <MenuInventario />

      <main className="app-contenido">
        <Outlet />
      </main>

      <MenuInferior />
    </div>
  )
}

export default Layout
