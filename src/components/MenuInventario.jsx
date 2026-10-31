import { NavLink } from 'react-router-dom'

// Menú del inventario
const opciones = [
  { to: '/ingresar-articulo', etiqueta: 'Ingresar artículo', icono: 'bi-plus-circle' },
  { to: '/articulos', etiqueta: 'Ver artículos', icono: 'bi-table' },
]

const claseEnlace = ({ isActive }) =>
  [
    'tw:inline-flex tw:items-center tw:gap-2 tw:border-b-4 tw:px-4 tw:py-3 tw:text-sm tw:font-semibold tw:no-underline tw:transition-colors',
    isActive
      ? 'tw:border-acento tw:bg-primario-claro tw:text-primario'
      : 'tw:border-transparent tw:text-slate-600 tw:hover:bg-slate-100 tw:hover:text-primario',
  ].join(' ')

function MenuInventario() {
  return (
    <nav
      aria-label="Menú del inventario"
      className="tw:border-b tw:border-borde tw:bg-white tw:shadow-sm"
    >
      <div className="tw:mx-auto tw:flex tw:max-w-6xl tw:items-center tw:gap-2 tw:px-4">
        <span className="tw:hidden tw:pr-3 tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-slate-500 tw:sm:block">
          Inventario
        </span>
        <ul className="tw:m-0 tw:flex tw:list-none tw:p-0">
          {opciones.map((opcion) => (
            <li key={opcion.to}>
              <NavLink to={opcion.to} className={claseEnlace}>
                <i className={`bi ${opcion.icono}`}></i>
                {opcion.etiqueta}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default MenuInventario
