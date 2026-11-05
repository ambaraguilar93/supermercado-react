import { NavLink } from 'react-router'

// "to" debe coincidir exactamente con el "path" de su Route en App.jsx
const opciones = [
  { to: '/', etiqueta: 'Inicio', icono: 'bi-house-door' },
  { to: '/quienes-somos', etiqueta: 'Quiénes somos', icono: 'bi-people' },
  { to: '/preguntas-frecuentes', etiqueta: 'Preguntas frecuentes', icono: 'bi-question-circle' },
]

const claseEnlace = ({ isActive }) =>
  [
    'flex flex-1 flex-col items-center justify-center gap-0.5 border-t-[3px] text-center text-[0.78rem] font-semibold leading-tight no-underline transition-colors',
    isActive
      ? 'border-acento bg-primario-claro text-primario'
      : 'border-transparent text-texto-suave hover:bg-primario-claro hover:text-primario',
  ].join(' ')

function MenuInferior() {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-30 h-17 border-t border-borde bg-white shadow-[0_-4px_14px_rgba(16,42,80,0.08)]"
    >
      <ul className="mx-auto flex h-full max-w-[720px] items-stretch justify-around">
        {opciones.map((opcion) => (
          <li key={opcion.to} className="flex flex-1">
            {/* NavLink calcula solo si la ruta está activa y agrega aria-current="page".
                "end" evita que "/" quede activo en todas las páginas. */}
            <NavLink to={opcion.to} end className={claseEnlace}>
              {({ isActive }) => (
                <>
                  <i className={`bi ${opcion.icono}${isActive ? '-fill' : ''} text-[1.35rem]`}></i>
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
