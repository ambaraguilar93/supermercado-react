import { Suspense } from 'react'
import { Outlet } from 'react-router'
import Encabezado from './Encabezado.jsx'
import MenuInventario from './MenuInventario.jsx'
import MenuInferior from './MenuInferior.jsx'

// Estructura compartida por todas las páginas
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Encabezado />
      <MenuInventario />

      <main className="flex-1 pb-23">
        {/* Mientras se descarga una página (lazy loading) se muestra este mensaje y el resto del layout no se mueve */}
        <Suspense
          fallback={
            <p role="status" className="px-4 py-12 text-center text-texto-suave">
              <i className="bi bi-arrow-repeat mr-2"></i>
              Cargando…
            </p>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <MenuInferior />
    </div>
  )
}

export default Layout
