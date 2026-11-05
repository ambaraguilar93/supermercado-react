import { NavLink } from 'react-router'

// Menú del inventario
const opciones = [
  { to: '/ingresar-articulo', etiqueta: 'Ingresar artículo', icono: 'bi-plus-circle' },
  { to: '/articulos', etiqueta: 'Ver artículos', icono: 'bi-table' },
]

const claseEnlace = ({ isActive }) =>
  [
    'inline-flex items-center gap-2 border-b-4 px-4 py-3 text-sm font-semibold no-underline transition-colors',
    isActive
      ? 'border-acento bg-primario-claro text-primario'
      : 'border-transparent text-slate-600 hover:bg-slate-100 hover:text-primario',
  ].join(' ')

function MenuInventario() {
  return (
    <nav
      aria-label="Menú del inventario"
      className="border-b border-borde bg-white shadow-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4">
        <span className="hidden pr-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:block">
          Inventario
        </span>
        <ul className="m-0 flex list-none p-0">
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
