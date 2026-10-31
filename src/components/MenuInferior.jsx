import { NavLink } from 'react-router-dom'
import './MenuInferior.css'

// "to" debe coincidir exactamente con el "path" de su Route en App.jsx
const opciones = [
  { to: '/', etiqueta: 'Inicio', icono: 'bi-house-door' },
  { to: '/quienes-somos', etiqueta: 'Quiénes somos', icono: 'bi-people' },
  { to: '/preguntas-frecuentes', etiqueta: 'Preguntas frecuentes', icono: 'bi-question-circle' },
]

function MenuInferior() {
  return (
    <nav className="menu-inferior" aria-label="Navegación principal">
      <ul className="menu-inferior-lista container">
        {opciones.map((opcion) => (
          <li key={opcion.to} className="menu-inferior-item">
            {/* NavLink calcula solo si la ruta está activa y agrega aria-current="page".
                "end" evita que "/" quede activo en todas las páginas. */}
            <NavLink
              to={opcion.to}
              end
              className={({ isActive }) => `menu-inferior-enlace ${isActive ? 'activa' : ''}`}
            >
              {({ isActive }) => (
                <>
                  <i className={`bi ${opcion.icono}${isActive ? '-fill' : ''}`}></i>
                  <span>{opcion.etiqueta}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuInferior
