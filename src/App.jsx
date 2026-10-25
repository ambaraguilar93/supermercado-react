import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Encabezado from './components/Encabezado.jsx'
import MenuInferior from './components/MenuInferior.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'
import './App.css'

function App() {
  return (
    // Router habilita el enrutamiento para todo lo que esté dentro
    <Router>
      <div className="app">
        <Encabezado />

        {/* Routes decide qué página mostrar según la URL actual */}
        <main className="app-contenido">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            {/* Ruta comodín: siempre al final */}
            <Route path="*" element={<NoEncontrada />} />
          </Routes>
        </main>

        {/* El menú está dentro del Router pero fuera de Routes, se ve en todas las páginas */}
        <MenuInferior />
      </div>
    </Router>
  )
}

export default App
