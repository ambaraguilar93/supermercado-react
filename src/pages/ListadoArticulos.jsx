import { Link } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext.jsx'
import { etiquetasEstado } from '../constants/inventario.js'
import { formatoPeso, nombreCategoria, obtenerEstadoStock } from '../utils/inventario.js'

// Colores de la insignia de estado
const clasesEstado = {
  disponible: 'tw:bg-acento-claro tw:text-green-800',
  bajo: 'tw:bg-amber-100 tw:text-amber-800',
  agotado: 'tw:bg-red-100 tw:text-red-800',
}

const columnas = ['SKU', 'Producto', 'Marca', 'Presentación', 'Categoría', 'Precio', 'Stock', 'Mínimo', 'Estado']

// Tabla de todos los artículos del inventario 
function ListadoArticulos() {
  const { productos } = useInventario()

  return (
    <div className="tw:mx-auto tw:max-w-6xl tw:px-4 tw:py-8">
      <header className="tw:mb-6 tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-3">
        <div>
          <h1 className="tw:mb-1 tw:text-3xl tw:font-extrabold tw:text-primario-oscuro">Artículos del inventario</h1>
          <p className="tw:mb-0 tw:text-slate-600">
            {productos.length} {productos.length === 1 ? 'artículo registrado' : 'artículos registrados'} en la sucursal.
          </p>
        </div>
        <Link
          to="/ingresar-articulo"
          className="tw:rounded-lg tw:bg-primario tw:px-4 tw:py-2 tw:font-semibold tw:text-white tw:no-underline tw:hover:bg-primario-oscuro"
        >
          <i className="bi bi-plus-lg tw:mr-2"></i>
          Ingresar artículo
        </Link>
      </header>

      {productos.length === 0 ? (
        <div className="tw:rounded-2xl tw:border tw:border-borde tw:bg-white tw:p-10 tw:text-center tw:text-slate-600">
          <i className="bi bi-box-seam tw:text-4xl"></i>
          <p className="tw:mt-2 tw:mb-0">Aún no hay artículos en el inventario.</p>
        </div>
      ) : (
        <div className="tw:overflow-x-auto tw:rounded-2xl tw:border tw:border-borde tw:bg-white tw:shadow-sm">
          <table className="tw:w-full tw:min-w-[52rem] tw:text-left tw:text-sm">
            <caption className="tw:sr-only">Listado de artículos del inventario</caption>
            <thead className="tw:bg-primario-claro tw:text-primario-oscuro">
              <tr>
                {columnas.map((col) => (
                  <th key={col} scope="col" className="tw:px-4 tw:py-3 tw:font-bold tw:whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="tw:divide-y tw:divide-borde">
              {productos.map((p) => {
                const estado = obtenerEstadoStock(p)
                return (
                  <tr key={p.id} className="tw:odd:bg-white tw:even:bg-slate-50 tw:hover:bg-primario-claro/60">
                    <td className="tw:px-4 tw:py-3 tw:font-mono tw:text-xs tw:text-slate-500">{p.sku}</td>
                    <td className="tw:px-4 tw:py-3 tw:font-semibold tw:text-slate-800">
                      <span aria-hidden="true" className="tw:mr-2">{p.emoji}</span>
                      {p.nombre}
                    </td>
                    <td className="tw:px-4 tw:py-3">{p.marca}</td>
                    <td className="tw:px-4 tw:py-3">{p.presentacion}</td>
                    <td className="tw:px-4 tw:py-3">{nombreCategoria(p.categoria)}</td>
                    <td className="tw:px-4 tw:py-3 tw:whitespace-nowrap">{formatoPeso(p.precio)}</td>
                    <td className="tw:px-4 tw:py-3">{p.stock}</td>
                    <td className="tw:px-4 tw:py-3">{p.stockMinimo}</td>
                    <td className="tw:px-4 tw:py-3">
                      <span className={`tw:rounded-full tw:px-3 tw:py-1 tw:text-xs tw:font-bold tw:whitespace-nowrap ${clasesEstado[estado]}`}>
                        {etiquetasEstado[estado]}
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
