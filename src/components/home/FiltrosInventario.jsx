import { OPCIONES_ESTADO } from '../../constants/inventario.js'

const claseControl =
  'w-full border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none transition focus:border-primario focus:ring-2 focus:ring-primario-claro'

// Buscador y filtro por estado de stock
// El estado vive en Home y llega por props.
function FiltrosInventario({ busqueda, onBusqueda, estado, onEstado, onLimpiar }) {
  return (
    <section className="mb-6 rounded-xl border border-borde bg-white p-4 shadow-sm">
      <div className="grid grid-cols-12 items-center gap-2">
        <div className="col-span-12 md:col-span-7">
          <label htmlFor="busqueda" className="sr-only">Buscar producto</label>
          <div className="flex">
            <span className="flex items-center rounded-l-lg border border-r-0 border-slate-300 bg-white px-3 text-slate-500">
              <i className="bi bi-search"></i>
            </span>
            <input
              id="busqueda"
              type="search"
              className={`${claseControl} rounded-r-lg`}
              placeholder="Busca un producto por nombre o marca"
              value={busqueda}
              onChange={(e) => onBusqueda(e.target.value)}
            />
          </div>
        </div>
        <div className="col-span-8 md:col-span-3">
          <label htmlFor="estado" className="sr-only">Filtrar por estado de stock</label>
          <select
            id="estado"
            className={`${claseControl} rounded-lg`}
            value={estado}
            onChange={(e) => onEstado(e.target.value)}
          >
            {OPCIONES_ESTADO.map((op) => (
              <option key={op.valor} value={op.valor}>{op.etiqueta}</option>
            ))}
          </select>
        </div>
        <div className="col-span-4 md:col-span-2">
          <button
            type="button"
            onClick={onLimpiar}
            className="w-full cursor-pointer rounded-lg border border-primario px-3 py-2 font-semibold text-primario transition-colors hover:bg-primario hover:text-white"
          >
            Limpiar
          </button>
        </div>
      </div>
    </section>
  )
}

export default FiltrosInventario
