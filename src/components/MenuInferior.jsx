import { Link, useLocation } from 'react-router-dom'
import './MenuInferior.css'

// "to" debe coincidir exactamente con el "path" de su Route en App.jsx
const opciones = [
  { to: '/', etiqueta: 'Inicio', icono: 'bi-house-door' },
  { to: '/quienes-somos', etiqueta: 'Quiénes somos', icono: 'bi-people' },
  { to: '/preguntas-frecuentes', etiqueta: 'Preguntas frecuentes', icono: 'bi-question-circle' },
]

function MenuInferior() {
  // useLocation entrega la URL actual para marcar la opción activa
  const { pathname } = useLocation()

  return (
    <nav className="menu-inferior" aria-label="Navegación principal">
      <ul className="menu-inferior-lista container">
        {opciones.map((opcion) => {
          const activa = pathname === opcion.to
          return (
            <li key={opcion.to} className="menu-inferior-item">
              <Link
                to={opcion.to}
                className={`menu-inferior-enlace ${activa ? 'activa' : ''}`}
                aria-current={activa ? 'page' : undefined}
              >
                <i className={`bi ${opcion.icono}${activa ? '-fill' : ''}`}></i>
                <span>{opcion.etiqueta}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MenuInferior
