import { useId } from 'react'
import { categorias } from '../../constants/inventario.js'

// Selector de categoría. El estado vive en la página y llega por props.
function FiltroCategoria({ categoria, onCambiar }) {
  const id = useId()

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-slate-700">
        Filtrar por categoría
      </label>
      <select
        id={id}
        value={categoria}
        onChange={(e) => onCambiar(e.target.value)}
        className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none transition focus:border-primario focus:ring-2 focus:ring-primario-claro sm:w-64"
      >
        {categorias.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.nombre}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FiltroCategoria
