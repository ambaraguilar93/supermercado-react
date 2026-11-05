import { Link } from 'react-router'
import { useInventario } from '../context/InventarioContext.jsx'
import { ESTADOS_STOCK } from '../constants/inventario.js'
import { formatoPeso, nombreCategoria, obtenerEstadoStock } from '../utils/inventario.js'

const columnas = ['SKU', 'Producto', 'Marca', 'Presentación', 'Categoría', 'Precio', 'Stock', 'Mínimo', 'Estado']

// Tabla de todos los artículos del inventario
function ListadoArticulos() {
  const { productos } = useInventario()

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="mb-1 text-3xl font-extrabold text-primario-oscuro">Artículos del inventario</h1>
          <p className="mb-0 text-slate-600">
            {productos.length} {productos.length === 1 ? 'artículo registrado' : 'artículos registrados'} en la sucursal.
          </p>
        </div>
        <Link
          to="/ingresar-articulo"
          className="rounded-lg bg-primario px-4 py-2 font-semibold text-white no-underline hover:bg-primario-oscuro"
        >
          <i className="bi bi-plus-lg mr-2"></i>
          Ingresar artículo
        </Link>
      </header>

      {productos.length === 0 ? (
        <div className="rounded-2xl border border-borde bg-white p-10 text-center text-slate-600">
          <i className="bi bi-box-seam text-4xl"></i>
          <p className="mt-2 mb-0">Aún no hay artículos en el inventario.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-borde bg-white shadow-sm">
          <table className="w-full min-w-[52rem] text-left text-sm">
            <caption className="sr-only">Listado de artículos del inventario</caption>
            <thead className="bg-primario-claro text-primario-oscuro">
              <tr>
                {columnas.map((col) => (
                  <th key={col} scope="col" className="px-4 py-3 font-bold whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-borde">
              {productos.map((p) => {
                const estado = ESTADOS_STOCK[obtenerEstadoStock(p)]
                return (
                  <tr key={p.id} className="odd:bg-white even:bg-slate-50 hover:bg-primario-claro/60">
                    <td className="px-4 py-3 font-mono text-xs text-slate-500">{p.sku}</td>
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      <span aria-hidden="true" className="mr-2">{p.emoji}</span>
                      {p.nombre}
                    </td>
                    <td className="px-4 py-3">{p.marca}</td>
                    <td className="px-4 py-3">{p.presentacion}</td>
                    <td className="px-4 py-3">{nombreCategoria(p.categoria)}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{formatoPeso(p.precio)}</td>
                    <td className="px-4 py-3">{p.stock}</td>
                    <td className="px-4 py-3">{p.stockMinimo}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap ${estado.insignia}`}>
                        {estado.etiqueta}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ListadoArticulos
