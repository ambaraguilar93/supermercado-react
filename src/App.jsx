import { BrowserRouter as Router } from 'react-router'
import { InventarioProvider } from './context/InventarioContext.jsx'
import AppRoutes from './AppRoutes.jsx'

function App() {
  return (
    // InventarioProvider entrega inventario y carrito (estado global) a todas las páginas
    <InventarioProvider>
      {/* Router habilita el enrutamiento para todo lo que esté dentro */}
      <Router basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </Router>
    </InventarioProvider>
  )
}

export default App
