import { Outlet } from 'react-router'
import Encabezado from './Encabezado.jsx'
import MenuInventario from './MenuInventario.jsx'
import MenuInferior from './MenuInferior.jsx'

// Estructura compartida por todas las páginas.
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Encabezado />
      <MenuInventario />

      {/* pb-23 deja espacio para que el menú inferior fijo (h-17) no tape el contenido */}
      <main className="flex-1 pb-23">
        <Outlet />
      </main>

      <MenuInferior />
    </div>
  )
}

export default Layout
