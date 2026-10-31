import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { InventarioProvider } from './context/InventarioContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes.jsx'
import IngresarArticulo from './pages/IngresarArticulo.jsx'
import ListadoArticulos from './pages/ListadoArticulos.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'
import './App.css'

function App() {
  return (
    // InventarioProvider entrega el estado global del inventario a todas las páginas
    <InventarioProvider>
      {/* Router habilita el enrutamiento para todo lo que esté dentro */}
      <Router>
        <Routes>
          {/* Layout Route: header y menús se escriben una sola vez y las páginas se muestran en su <Outlet /> */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ingresar-articulo" element={<IngresarArticulo />} />
            <Route path="/articulos" element={<ListadoArticulos />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            {/* Ruta comodín va siempre al final */}
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </Router>
    </InventarioProvider>
  )
}

export default App
