import { categorias } from '../../constants/inventario.js'

const claseCategoria = (activa) =>
  [
    'inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.9rem] font-semibold whitespace-nowrap transition',
    activa
      ? 'border-primario bg-primario text-white'
      : 'border-borde bg-white text-texto hover:border-primario hover:text-primario',
  ].join(' ')

// Barra de categorías
function CategoriasNav({ categoriaActiva, onSeleccionar }) {
  return (
    <div className="border-b border-borde bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="flex gap-2 overflow-x-auto py-2.5" aria-label="Categorías">
          {categorias.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                className={claseCategoria(categoriaActiva === cat.id)}
                aria-pressed={categoriaActiva === cat.id}
                onClick={() => onSeleccionar(cat.id)}
              >
                <i className={`bi ${cat.icono}`}></i>
                {cat.nombre}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoriasNav
